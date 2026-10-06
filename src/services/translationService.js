const CACHE_KEY = "babble-translation-cache";

const getCache = () => {
  try {
    return JSON.parse(
      localStorage.getItem(CACHE_KEY) || "{}"
    );
  } catch {
    return {};
  }
};

const saveCache = (cache) => {
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify(cache)
  );
};

export const translateBatch = async (texts) => {
  const cache = getCache();

  const uniqueTexts = [
    ...new Set(
      texts
        .map((text) => String(text).trim())
        .filter(Boolean)
    ),
  ];

  const result = {};
  const missing = [];

  uniqueTexts.forEach((text) => {
    if (cache[text]) {
      result[text] = cache[text];
    } else {
      missing.push(text);
    }
  });

  if (missing.length === 0) {
    return result;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/translate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: missing,
          target: "AR",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Translation API error: ${response.status}`
      );
    }

    const data = await response.json();

    missing.forEach((text, index) => {
      const translated =
        data.translations?.[index] || text;

      result[text] = translated;
      cache[text] = translated;
    });

    saveCache(cache);

    return result;
  } catch (error) {
    console.error(
      "Translation failed:",
      error
    );

    missing.forEach((text) => {
      result[text] = text;
    });

    return result;
  }
};