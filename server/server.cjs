const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

console.log(
  "DeepL key loaded:",
  process.env.DEEPL_API_KEY ? "YES" : "NO"
);

/* =========================================
   PROTECTED WORDS / NUMBERS
========================================= */

const PROTECTED_PATTERN =
  /\+\d[\d\s().-]{5,}\d|\b(?:Google Play|App Store|Babble|VIP)\b|[$£€]\s?\d(?:[\d,.]*\d)?(?:%|\+)?|\b\d(?:[\d,.]*\d)?(?:%|\+)?/gi;

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function decodeXml(value) {
  return String(value)
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");
}

function protectText(text) {
  const value = String(text);
  let result = "";
  let lastIndex = 0;

  PROTECTED_PATTERN.lastIndex = 0;

  let match;

  while ((match = PROTECTED_PATTERN.exec(value)) !== null) {
    result += escapeXml(value.slice(lastIndex, match.index));
    result += `<keep>${escapeXml(match[0])}</keep>`;
    lastIndex = match.index + match[0].length;
  }

  result += escapeXml(value.slice(lastIndex));

  return result;
}

function restoreText(text) {
  return decodeXml(
    String(text)
      .replace(/<keep>/gi, "")
      .replace(/<\/keep>/gi, "")
  );
}

app.get("/", (req, res) => {
  res.send("Babble translation server is running");
});

app.post("/api/translate", async (req, res) => {
  try {
    const { texts, target = "AR" } = req.body;

    console.log("Incoming texts:", texts);
    console.log("Target:", target);

    if (!Array.isArray(texts) || texts.length === 0) {
      return res.status(400).json({
        error: "texts must be a non-empty array",
      });
    }

    const apiKey = process.env.DEEPL_API_KEY?.trim();

    if (!apiKey) {
      console.error("DEEPL_API_KEY missing");
      return res.status(500).json({
        error: "DEEPL_API_KEY is missing",
      });
    }

    const deepLUrl = apiKey.endsWith(":fx")
      ? "https://api-free.deepl.com/v2/translate"
      : "https://api.deepl.com/v2/translate";

    const protectedTexts = texts.map((text) => protectText(text));

    console.log("Protected texts:", protectedTexts);

    const params = new URLSearchParams();

    protectedTexts.forEach((text) => {
      params.append("text", text);
    });

    params.append("target_lang", target);
    params.append("tag_handling", "xml");
    params.append("ignore_tags", "keep");

    const response = await fetch(deepLUrl, {
      method: "POST",
      headers: {
        Authorization: `DeepL-Auth-Key ${apiKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const responseText = await response.text();

    console.log("DeepL status:", response.status);

    if (!response.ok) {
      console.error("DeepL raw response:", responseText);
      return res.status(response.status).json({
        error: "DeepL request failed",
        status: response.status,
        details: responseText,
      });
    }

    const data = JSON.parse(responseText);

    const translations = data.translations.map((item) =>
      restoreText(item.text)
    );

    console.log("Final translations:", translations);

    return res.json({ translations });
  } catch (error) {
    console.error("Translation server error:", error);

    return res.status(500).json({
      error: "Translation server error",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Translation server running at http://localhost:${PORT}`);
});
