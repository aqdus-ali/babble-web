import {
  useEffect,
  useState,
} from "react";

import {
  useLanguage,
} from "../context/LanguageContext.jsx";

/* =========================================
   DEFAULT FOOTER TEXT
========================================= */

const DEFAULT_FOOTER_TEXT = {
  description:
    "Talk, connect, and make friends — live, every day.",

  explore:
    "Explore",

  liveRooms:
    "Live Rooms",

  store:
    "Store",

  becomeHost:
    "Become a Host",

  account:
    "Account",

  signIn:
    "Sign In",

  signUp:
    "Sign Up",

  support:
    "Support",

  connect:
    "Connect",

  instagram:
    "Instagram",

  tiktok:
    "TikTok",

  whatsapp:
    "WhatsApp",

  copyright:
    "© 2026 Babble. All rights reserved.",
};

const Footer = () => {
  const {
    language,
    changeLanguage,
    translateSection,
  } = useLanguage();

  const isArabic =
    language !== "en";

  const [
    footerText,
    setFooterText,
  ] = useState(
    DEFAULT_FOOTER_TEXT
  );

  const [
    translating,
    setTranslating,
  ] = useState(false);

  /* =========================================
     ARABIC LOCALISATION
  ========================================= */

  const localizeFooterText = (
    text
  ) => {
    const value = String(
      text ?? ""
    );

    if (!isArabic) {
      return value;
    }

    return value
      .replace(
        /\bBabble\b/gi,
        "بابل"
      )
      .replace(
        /\d/g,
        (digit) =>
          "٠١٢٣٤٥٦٧٨٩"[
            Number(digit)
          ]
      );
  };

  /* =========================================
     TRANSLATION
  ========================================= */

  useEffect(() => {
    let active = true;

    const loadFooterTranslation =
      async () => {
        if (
          language === "en"
        ) {
          setFooterText(
            DEFAULT_FOOTER_TEXT
          );

          setTranslating(
            false
          );

          return;
        }

        try {
          setTranslating(
            true
          );

          const sourceTexts = [
            DEFAULT_FOOTER_TEXT.description,
            DEFAULT_FOOTER_TEXT.explore,
            DEFAULT_FOOTER_TEXT.liveRooms,
            DEFAULT_FOOTER_TEXT.store,
            DEFAULT_FOOTER_TEXT.becomeHost,
            DEFAULT_FOOTER_TEXT.account,
            DEFAULT_FOOTER_TEXT.signIn,
            DEFAULT_FOOTER_TEXT.signUp,
            DEFAULT_FOOTER_TEXT.support,
            DEFAULT_FOOTER_TEXT.connect,
            DEFAULT_FOOTER_TEXT.copyright,
          ];

          const translated =
            await translateSection(
              "footer",
              sourceTexts
            );

          if (!active) {
            return;
          }

          setFooterText({
            description:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .description
              ] ||
              DEFAULT_FOOTER_TEXT
                .description,

            explore:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .explore
              ] ||
              DEFAULT_FOOTER_TEXT
                .explore,

            liveRooms:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .liveRooms
              ] ||
              DEFAULT_FOOTER_TEXT
                .liveRooms,

            store:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .store
              ] ||
              DEFAULT_FOOTER_TEXT
                .store,

            becomeHost:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .becomeHost
              ] ||
              DEFAULT_FOOTER_TEXT
                .becomeHost,

            account:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .account
              ] ||
              DEFAULT_FOOTER_TEXT
                .account,

            signIn:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .signIn
              ] ||
              DEFAULT_FOOTER_TEXT
                .signIn,

            signUp:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .signUp
              ] ||
              DEFAULT_FOOTER_TEXT
                .signUp,

            support:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .support
              ] ||
              DEFAULT_FOOTER_TEXT
                .support,

            connect:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .connect
              ] ||
              DEFAULT_FOOTER_TEXT
                .connect,

            instagram:
              "Instagram",

            tiktok:
              "TikTok",

            whatsapp:
              "WhatsApp",

            copyright:
              translated?.[
                DEFAULT_FOOTER_TEXT
                  .copyright
              ] ||
              DEFAULT_FOOTER_TEXT
                .copyright,
          });
        } catch (error) {
          console.error(
            "Footer translation failed:",
            error
          );

          if (active) {
            setFooterText(
              DEFAULT_FOOTER_TEXT
            );
          }
        } finally {
          if (active) {
            setTranslating(
              false
            );
          }
        }
      };

    loadFooterTranslation();

    return () => {
      active = false;
    };
  }, [
    language,
    translateSection,
  ]);

  /* =========================================
     SCROLL
  ========================================= */

  const scrollToSection = (
    id
  ) => {
    const section =
      document.getElementById(
        id
      );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      dir="ltr"
      className="
        bg-[#21150F]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1160px]
          px-4
          py-12
          sm:px-6
          md:py-14
          lg:px-0
        "
      >
        {/* =================================
            TOP FOOTER
        ================================= */}

        <div
          dir="ltr"
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_0.85fr_0.85fr_0.85fr]
            lg:gap-14
          "
        >
          {/* =================================
              BRAND
          ================================= */}

          <div
            className={`
              ${
                isArabic
                  ? "lg:order-4"
                  : "lg:order-1"
              }
            `}
          >
            {/* LOGO ROW */}

            <div
              dir="ltr"
              className={`
                flex
                items-center
                gap-3

                ${
                  isArabic
                    ? "justify-end"
                    : "justify-start"
                }
              `}
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#2D1D15]
                "
              >
                <span
                  className="
                    text-[17px]
                    text-[#FF744E]
                  "
                >
                  ⚡
                </span>
              </div>

              <span
                dir={
                  isArabic
                    ? "rtl"
                    : "ltr"
                }
                className="
                  font-[Baloo_2]
                  text-[20px]
                  font-extrabold
                  text-white
                "
              >
                {isArabic
                  ? "بابل"
                  : "Babble"}
              </span>
            </div>

            {/* DESCRIPTION */}

            <p
              dir={
                isArabic
                  ? "rtl"
                  : "ltr"
              }
              className={`
                mt-4
                max-w-[220px]
                font-[Nunito]
                text-[13px]
                font-semibold
                leading-[1.55]
                text-[#9F8B7E]

                ${
                  isArabic
                    ? "ml-auto text-right"
                    : "mr-auto text-left"
                }
              `}
            >
              {localizeFooterText(
                footerText.description
              )}
            </p>
          </div>

          {/* =================================
              EXPLORE
          ================================= */}

          <div
            className={`
              ${
                isArabic
                  ? "lg:order-3"
                  : "lg:order-2"
              }
            `}
          >
            <div
              dir={
                isArabic
                  ? "rtl"
                  : "ltr"
              }
              className={
                isArabic
                  ? "text-right"
                  : "text-left"
              }
            >
              <h4
                className="
                  mb-4
                  font-[Nunito]
                  text-[13px]
                  font-extrabold
                  text-white
                "
              >
                {
                  footerText.explore
                }
              </h4>

              <div
                className="
                  flex
                  flex-col
                  gap-3
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      "hero"
                    )
                  }
                  className="
                    w-fit
                    font-[Nunito]
                    text-[13px]
                    font-semibold
                    text-[#C4B3A7]
                    transition
                    hover:text-white
                  "
                >
                  {
                    footerText.liveRooms
                  }
                </button>

                <button
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      "gifts"
                    )
                  }
                  className="
                    w-fit
                    font-[Nunito]
                    text-[13px]
                    font-semibold
                    text-[#C4B3A7]
                    transition
                    hover:text-white
                  "
                >
                  {
                    footerText.store
                  }
                </button>

                <button
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      "host"
                    )
                  }
                  className="
                    w-fit
                    font-[Nunito]
                    text-[13px]
                    font-semibold
                    text-[#C4B3A7]
                    transition
                    hover:text-white
                  "
                >
                  {
                    footerText.becomeHost
                  }
                </button>
              </div>
            </div>
          </div>

          {/* =================================
              ACCOUNT
          ================================= */}

          <div
            className={`
              ${
                isArabic
                  ? "lg:order-2"
                  : "lg:order-3"
              }
            `}
          >
            <div
              dir={
                isArabic
                  ? "rtl"
                  : "ltr"
              }
              className={
                isArabic
                  ? "text-right"
                  : "text-left"
              }
            >
              <h4
                className="
                  mb-4
                  font-[Nunito]
                  text-[13px]
                  font-extrabold
                  text-white
                "
              >
                {
                  footerText.account
                }
              </h4>

              <div
                className="
                  flex
                  flex-col
                  gap-3
                "
              >
                <a
                  href="#"
                  className="
                    w-fit
                    font-[Nunito]
                    text-[13px]
                    font-semibold
                    text-[#C4B3A7]
                    transition
                    hover:text-white
                  "
                >
                  {
                    footerText.signIn
                  }
                </a>

                <a
                  href="#"
                  className="
                    w-fit
                    font-[Nunito]
                    text-[13px]
                    font-semibold
                    text-[#C4B3A7]
                    transition
                    hover:text-white
                  "
                >
                  {
                    footerText.signUp
                  }
                </a>

                <a
                  href="#help"
                  className="
                    w-fit
                    font-[Nunito]
                    text-[13px]
                    font-semibold
                    text-[#C4B3A7]
                    transition
                    hover:text-white
                  "
                >
                  {
                    footerText.support
                  }
                </a>
              </div>
            </div>
          </div>

          {/* =================================
              CONNECT
          ================================= */}

          <div
            className={`
              ${
                isArabic
                  ? "lg:order-1"
                  : "lg:order-4"
              }
            `}
          >
            <div
              dir={
                isArabic
                  ? "rtl"
                  : "ltr"
              }
              className={
                isArabic
                  ? "text-right"
                  : "text-left"
              }
            >
              <h4
                className="
                  mb-4
                  font-[Nunito]
                  text-[13px]
                  font-extrabold
                  text-white
                "
              >
                {
                  footerText.connect
                }
              </h4>

              <div
                className="
                  flex
                  flex-col
                  gap-3
                "
              >
                {/* INSTAGRAM */}

                <a
                  href="#"
                  dir={
                    isArabic
                      ? "rtl"
                      : "ltr"
                  }
                  className="
                    w-fit
                    font-[Nunito]
                    text-[13px]
                    font-semibold
                    text-[#C4B3A7]
                    transition
                    hover:text-white
                  "
                >
                  {isArabic
                    ? "إنستغرام"
                    : "Instagram"}
                </a>

                {/* TIKTOK */}

                <a
                  href="#"
                  dir={
                    isArabic
                      ? "rtl"
                      : "ltr"
                  }
                  className="
                    w-fit
                    font-[Nunito]
                    text-[13px]
                    font-semibold
                    text-[#C4B3A7]
                    transition
                    hover:text-white
                  "
                >
                  {isArabic
                    ? "تيك توك"
                    : "TikTok"}
                </a>

                {/* WHATSAPP */}

                <a
                  href="#"
                  dir={
                    isArabic
                      ? "rtl"
                      : "ltr"
                  }
                  className="
                    w-fit
                    font-[Nunito]
                    text-[13px]
                    font-semibold
                    text-[#C4B3A7]
                    transition
                    hover:text-white
                  "
                >
                  {isArabic
                    ? "واتساب"
                    : "WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =================================
            DIVIDER
        ================================= */}

        <div
          className="
            my-8
            h-px
            w-full
            bg-white/[0.08]
          "
        />

        {/* =================================
            BOTTOM FOOTER
        ================================= */}

        <div
          dir="ltr"
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* LANGUAGE SWITCH */}

          <div
            dir="ltr"
            className={`
              flex
              items-center
              gap-1
              font-[Nunito]
              text-[12px]
              font-semibold
              text-[#9F8B7E]

              ${
                isArabic
                  ? "sm:order-1"
                  : "sm:order-2"
              }
            `}
          >
            <button
              type="button"
              onClick={() =>
                changeLanguage(
                  "en"
                )
              }
              className={`
                transition
                hover:text-white

                ${
                  language === "en"
                    ? "text-white"
                    : ""
                }
              `}
            >
              English
            </button>

            <span>/</span>

            <button
              type="button"
              onClick={() =>
                changeLanguage(
                  "ar"
                )
              }
              className={`
                transition
                hover:text-white

                ${
                  isArabic
                    ? "text-white"
                    : ""
                }
              `}
            >
              العربية
            </button>
          </div>

          {/* COPYRIGHT */}

          <p
            dir={
              isArabic
                ? "rtl"
                : "ltr"
            }
            className={`
              font-[Nunito]
              text-[12px]
              font-semibold
              text-[#9F8B7E]

              ${
                isArabic
                  ? "text-right sm:order-2"
                  : "text-left sm:order-1"
              }
            `}
          >
            {localizeFooterText(
              footerText.copyright
            )}
          </p>
        </div>

        {/* ACCESSIBLE LOADING */}

        {translating &&
          isArabic && (
            <span className="sr-only">
              Translating footer
            </span>
          )}
      </div>
    </footer>
  );
};

export default Footer;