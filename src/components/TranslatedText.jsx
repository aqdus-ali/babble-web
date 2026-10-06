import {
  useEffect,
  useState,
} from "react";

import { useLanguage } from "../context/LanguageContext";

const TranslatedText = ({
  children,
  as: Tag = "span",
  className = "",
}) => {
  const {
    language,
    translate,
  } = useLanguage();

  const originalText =
    String(
      children ?? ""
    )
      .replace(/\s+/g, " ")
      .trim();

  const [displayText, setDisplayText] =
    useState(originalText);

  useEffect(() => {
    let cancelled = false;

    const runTranslation =
      async () => {
        /* English */

        if (
          language === "en"
        ) {
          setDisplayText(
            originalText
          );

          return;
        }

        /* Temporarily keep English
           while API loads */

        setDisplayText(
          originalText
        );

        const result =
          await translate(
            originalText
          );

        if (!cancelled) {
          setDisplayText(
            result
          );
        }
      };

    runTranslation();

    return () => {
      cancelled = true;
    };
  }, [
    language,
    originalText,
    translate,
  ]);

  return (
    <Tag
      className={
        className
      }
    >
      {displayText}
    </Tag>
  );
};

export default TranslatedText;