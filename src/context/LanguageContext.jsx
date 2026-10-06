import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  translateBatch,
} from "../services/translationService";

const LanguageContext =
  createContext(null);

export const LanguageProvider = ({
  children,
}) => {
  const [language, setLanguage] =
    useState(() => {
      return (
        localStorage.getItem(
          "babble-language"
        ) || "en"
      );
    });

  const [
    sectionTranslations,
    setSectionTranslations,
  ] = useState({});

  const isArabic =
    language === "ar";

  useEffect(() => {
    document.documentElement.lang =
      language;

    document.documentElement.dir =
      isArabic
        ? "rtl"
        : "ltr";

    localStorage.setItem(
      "babble-language",
      language
    );
  }, [language, isArabic]);

  const changeLanguage = (
    lang
  ) => {
    setLanguage(lang);
  };

  const translateSection =
    useCallback(
      async (
        sectionName,
        texts
      ) => {
        if (
          language === "en"
        ) {
          return {};
        }

        if (
          sectionTranslations[
            sectionName
          ]
        ) {
          return sectionTranslations[
            sectionName
          ];
        }

        try {
          const translated =
            await translateBatch(
              texts
            );

          setSectionTranslations(
            (previous) => ({
              ...previous,

              [sectionName]:
                translated,
            })
          );

          return translated;
        } catch (error) {
          console.error(
            "Section translation error:",
            sectionName,
            error
          );

          return {};
        }
      },
      [
        language,
        sectionTranslations,
      ]
    );

  return (
    <LanguageContext.Provider
      value={{
        language,
        isArabic,
        changeLanguage,
        translateSection,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage =
  () => {
    const context =
      useContext(
        LanguageContext
      );

    if (!context) {
      throw new Error(
        "useLanguage must be used inside LanguageProvider"
      );
    }

    return context;
  };