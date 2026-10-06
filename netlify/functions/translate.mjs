const PROTECTED_PATTERN =
  /\+?\d[\d\s().-]{5,}\d|\b(?:Google Play|App Store|Babble|VIP)\b|[$£€]\s?\d(?:[\d,.]*\d)?(?:%|\+)?|\b\d(?:[\d,.]*\d)?(?:%|\+)?/gi;

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

  while (
    (match =
      PROTECTED_PATTERN.exec(value)) !== null
  ) {
    result += escapeXml(
      value.slice(
        lastIndex,
        match.index
      )
    );

    result += `<keep>${escapeXml(
      match[0]
    )}</keep>`;

    lastIndex =
      match.index +
      match[0].length;
  }

  result += escapeXml(
    value.slice(lastIndex)
  );

  return result;
}

function restoreText(text) {
  return decodeXml(
    String(text)
      .replace(/<keep>/gi, "")
      .replace(/<\/keep>/gi, "")
  );
}

export default async function handler(
  request,
  context
) {
  const headers = {
    "Content-Type":
      "application/json",

    "Access-Control-Allow-Origin":
      "*",

    "Access-Control-Allow-Headers":
      "Content-Type",

    "Access-Control-Allow-Methods":
      "POST, OPTIONS",
  };

  /* ================================
     PREFLIGHT
  ================================= */

  if (
    request.method ===
    "OPTIONS"
  ) {
    return new Response(
      "",
      {
        status: 200,
        headers,
      }
    );
  }

  /* ================================
     POST ONLY
  ================================= */

  if (
    request.method !==
    "POST"
  ) {
    return new Response(
      JSON.stringify({
        error:
          "Method not allowed",
      }),
      {
        status: 405,
        headers,
      }
    );
  }

  try {
    /* ================================
       BODY
    ================================= */

    const body =
      await request.json();

    const {
      texts,
      target = "AR",
    } = body;

    console.log(
      "Incoming texts:",
      texts
    );

    console.log(
      "Target:",
      target
    );

    /* ================================
       VALIDATION
    ================================= */

    if (
      !Array.isArray(texts) ||
      texts.length === 0
    ) {
      return new Response(
        JSON.stringify({
          error:
            "texts must be a non-empty array",
        }),
        {
          status: 400,
          headers,
        }
      );
    }

    /* ================================
       API KEY
    ================================= */

    const apiKey =
      process.env
        .DEEPL_API_KEY?.trim();

    if (!apiKey) {
      console.error(
        "DEEPL_API_KEY missing"
      );

      return new Response(
        JSON.stringify({
          error:
            "DEEPL_API_KEY is missing",
        }),
        {
          status: 500,
          headers,
        }
      );
    }

    /* ================================
       DEEPL ENDPOINT
    ================================= */

    const deepLUrl =
      apiKey.endsWith(":fx")
        ? "https://api-free.deepl.com/v2/translate"
        : "https://api.deepl.com/v2/translate";

    /* ================================
       PROTECT TEXT
    ================================= */

    const protectedTexts =
      texts.map((text) =>
        protectText(text)
      );

    const params =
      new URLSearchParams();

    protectedTexts.forEach(
      (text) => {
        params.append(
          "text",
          text
        );
      }
    );

    params.append(
      "target_lang",
      target
    );

    params.append(
      "tag_handling",
      "xml"
    );

    params.append(
      "ignore_tags",
      "keep"
    );

    /* ================================
       DEEPL REQUEST
    ================================= */

    const response =
      await fetch(
        deepLUrl,
        {
          method: "POST",

          headers: {
            Authorization:
              `DeepL-Auth-Key ${apiKey}`,

            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body: params,
        }
      );

    const responseText =
      await response.text();

    console.log(
      "DeepL status:",
      response.status
    );

    if (!response.ok) {
      console.error(
        "DeepL error:",
        responseText
      );

      return new Response(
        JSON.stringify({
          error:
            "DeepL request failed",

          status:
            response.status,

          details:
            responseText,
        }),
        {
          status:
            response.status,

          headers,
        }
      );
    }

    /* ================================
       RESPONSE
    ================================= */

    const data =
      JSON.parse(
        responseText
      );

    const translations =
      data.translations.map(
        (item) =>
          restoreText(
            item.text
          )
      );

    return new Response(
      JSON.stringify({
        translations,
      }),
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    console.error(
      "Translation function error:",
      error
    );

    return new Response(
      JSON.stringify({
        error:
          "Translation function error",

        details:
          error.message,
      }),
      {
        status: 500,
        headers,
      }
    );
  }
}