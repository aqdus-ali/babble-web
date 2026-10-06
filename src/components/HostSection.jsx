import { useEffect, useMemo, useState } from "react";

import giftImages from "../assets/gift-image.png";
import bagImages from "../assets/gift-bags.png";

import { useLanguage } from "../context/LanguageContext.jsx";

/* =========================================
   ENGLISH SOURCE DATA
========================================= */

const hostSteps = [
    {
        number: 1,
        arabicNumber: "١",
        title: "Apply for an Agency",
        description:
            "Submit an application from your profile to join as an agency under Babble.",
    },
    {
        number: 2,
        arabicNumber: "٢",
        title: "Get approved as Host",
        description:
            "Once reviewed, you're granted Host status with your own live room.",
    },
    {
        number: 3,
        arabicNumber: "٣",
        title: "Receive your Coin Seller ID",
        description:
            "Your unique ID lets you distribute and sell coin packages to your community.",
    },
    {
        number: 4,
        arabicNumber: "٤",
        title: "Earn ongoing benefits",
        description:
            "Earn a share of gifts received live, plus bonus coins for active hosting.",
    },
];

/* =========================================
   FIXED SECTION COPY
========================================= */

const DEFAULT_HOST_TEXT = {
    title: "From new user to host",

    description:
        "Here's exactly how becoming a Babble host and coin seller works, step by step.",

    dailyTitle: "Claim your Daily Bonus",

    dailyDescription:
        "Come back every day to activate and collect free coins — no purchase needed.",

    resellerTitle: "Become a Reseller",

    resellerDescription:
        "Add a local account and start distributing Babble packages to your own audience.",
};

const HostSection = () => {
    const { language, translateSection } = useLanguage();

    const isArabic = language !== "en";

    const [translations, setTranslations] = useState({});
    const [translating, setTranslating] = useState(false);

    /* =========================================
     TRANSLATE HOST SECTION IN ONE BATCH
  ========================================= */

    useEffect(() => {
        let active = true;

        const loadHostTranslation = async () => {
            if (language === "en") {
                setTranslations({});
                setTranslating(false);
                return;
            }

            try {
                setTranslating(true);

                const sourceTexts = [
                    DEFAULT_HOST_TEXT.title,
                    DEFAULT_HOST_TEXT.description,
                    DEFAULT_HOST_TEXT.dailyTitle,
                    DEFAULT_HOST_TEXT.dailyDescription,
                    DEFAULT_HOST_TEXT.resellerTitle,
                    DEFAULT_HOST_TEXT.resellerDescription,

                    ...hostSteps.flatMap((step) => [
                        step.title,
                        step.description,
                    ]),
                ];

                const uniqueTexts = [...new Set(sourceTexts)];

                const translated = await translateSection("host", uniqueTexts);

                if (!active) return;

                setTranslations(translated || {});
            } catch (error) {
                console.error("Host translation failed:", error);

                if (active) {
                    setTranslations({});
                }
            } finally {
                if (active) {
                    setTranslating(false);
                }
            }
        };

        loadHostTranslation();

        return () => {
            active = false;
        };
    }, [language, translateSection]);

    /* =========================================
     ARABIC LOCALISATION
  ========================================= */

    const localizeHostText = (text) => {
        const value = String(text ?? "");

        if (!isArabic) {
            return value;
        }

        return value
            .replace(/\bBabble\b/gi, "بابل")
            .replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);
    };

    const tr = (text) => {
        if (language === "en") {
            return text;
        }

        const translated = translations?.[text];

        const result = translated && translated.trim() ? translated : text;

        return localizeHostText(result);
    };

    /* =========================================
     TRANSLATED STEPS
  ========================================= */

    const translatedSteps = useMemo(() => {
        return hostSteps.map((step) => ({
            ...step,

            translatedTitle: tr(step.title),

            translatedDescription: tr(step.description),
        }));
    }, [language, translations]);

    const handleDailyBonus = () => {
        console.log("Daily bonus clicked");
    };

    const handleReseller = () => {
        console.log("Reseller clicked");
    };

    return (
        <section
            id="host"
            className="
        bg-white
        pb-16
        md:pb-20
      "
        >
            <div
                className="
          mx-auto
          w-full
          max-w-[1160px]
          px-4
          sm:px-6
          lg:px-0
        "
            >
                {/* =================================
            HEADER
        ================================= */}

                <div
                    dir="ltr"
                    className="
            mb-8
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            md:gap-10
          "
                >
                    <h2
                        dir={isArabic ? "rtl" : "ltr"}
                        className={`
              font-[Baloo_2]
              text-[32px]
              font-extrabold
              leading-[1.1]
              text-[#34261F]
              md:text-[36px]

              ${isArabic ? "text-right" : "text-left"}
            `}
                    >
                        {tr(DEFAULT_HOST_TEXT.title)}
                    </h2>

                    <p
                        dir={isArabic ? "rtl" : "ltr"}
                        className={`
              max-w-[420px]
              font-[Nunito]
              text-[13.5px]
              font-bold
              leading-[1.5]
              text-[#765F52]

              ${isArabic ? "text-right" : "text-left"}
            `}
                    >
                        {tr(DEFAULT_HOST_TEXT.description)}
                    </p>
                </div>

                {/* =================================
            STEPS
        ================================= */}

                <div
                    dir="ltr"
                    className="
            mb-7
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {translatedSteps.map((step) => (
                        <article
                            key={step.number}
                            className="
                flex
                min-h-[145px]
                flex-col
                rounded-[16px]
                bg-white
                p-4
                shadow-[0_8px_24px_rgba(83,59,42,0.07)]
              "
                        >
                            {/* NUMBER */}

                            <div
                                className={`
                  mb-3
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-[8px]
                  bg-[#3A2B24]
                  font-[Nunito]
                  text-[11px]
                  font-extrabold
                  text-white

                  ${isArabic ? "self-end" : "self-start"}
                `}
                            >
                                {isArabic ? step.arabicNumber : step.number}
                            </div>

                            {/* TITLE */}

                            <h3
                                dir={isArabic ? "rtl" : "ltr"}
                                className={`
                  mb-2
                  font-[Baloo_2]
                  text-[13px]
                  font-extrabold
                  text-[#34261F]

                  ${isArabic ? "text-right" : "text-left"}
                `}
                            >
                                {step.translatedTitle}
                            </h3>

                            {/* DESCRIPTION */}

                            <p
                                dir={isArabic ? "rtl" : "ltr"}
                                className={`
                  font-[Nunito]
                  text-[11px]
                  font-bold
                  leading-[1.5]
                  text-[#7B685C]

                  ${isArabic ? "text-right" : "text-left"}
                `}
                            >
                                {step.translatedDescription}
                            </p>
                        </article>
                    ))}
                </div>

                {/* =================================
            LOWER CARDS
        ================================= */}

                <div
                    dir="ltr"
                    className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
          "
                >
                    {/* DAILY BONUS */}

                    <button
                        type="button"
                        onClick={handleDailyBonus}
                        className="
              flex
              min-h-[145px]
              w-full
              items-center
              justify-between
              gap-5
              rounded-[20px]
              bg-gradient-to-br
              from-[#FFDCA5]
              to-[#FFC57F]
              py-6
              pl-6
              pr-0
              text-left
              transition
              duration-200
              hover:-translate-y-[3px]
              hover:shadow-[0_12px_28px_rgba(75,53,38,0.10)]
            "
                    >
                        <div
                            dir={isArabic ? "rtl" : "ltr"}
                            className={`
                max-w-[330px]

                ${isArabic ? "text-right" : "text-left"}
              `}
                        >
                            <h3
                                className="
                  mb-2
                  font-[Baloo_2]
                  text-[17px]
                  font-extrabold
                  text-[#34261F]
                "
                            >
                                {tr(DEFAULT_HOST_TEXT.dailyTitle)}
                            </h3>

                            <p
                                className="
                  font-[Nunito]
                  text-[11.5px]
                  font-bold
                  leading-[1.5]
                  text-[#6F594D]
                "
                            >
                                {tr(DEFAULT_HOST_TEXT.dailyDescription)}
                            </p>
                        </div>

                        <img
                            src={giftImages}
                            alt="Daily bonus gift"
                            className="
                h-[80px]
                w-[80px]
                shrink-0
                object-contain
                opacity-60
              "
                        />
                    </button>

                    {/* RESELLER */}

                    <button
                        type="button"
                        onClick={handleReseller}
                        className="
              flex
              min-h-[145px]
              w-full
              items-center
              justify-between
              gap-5
              rounded-[20px]
              bg-gradient-to-br
              from-[#EADBFF]
              to-[#C9B5F6]
              py-6
              pl-6
              pr-0
              text-left
              transition
              duration-200
              hover:-translate-y-[3px]
              hover:shadow-[0_12px_28px_rgba(75,53,38,0.10)]
            "
                    >
                        <div
                            dir={isArabic ? "rtl" : "ltr"}
                            className={`
                max-w-[330px]

                ${isArabic ? "text-right" : "text-left"}
              `}
                        >
                            <h3
                                className="
                  mb-2
                  font-[Baloo_2]
                  text-[17px]
                  font-extrabold
                  text-[#34261F]
                "
                            >
                                {tr(DEFAULT_HOST_TEXT.resellerTitle)}
                            </h3>

                            <p
                                className="
                  font-[Nunito]
                  text-[11.5px]
                  font-bold
                  leading-[1.5]
                  text-[#6F594D]
                "
                            >
                                {tr(DEFAULT_HOST_TEXT.resellerDescription)}
                            </p>
                        </div>

                        <img
                            src={bagImages}
                            alt="Reseller shopping bags"
                            className="
                h-[80px]
                w-[80px]
                shrink-0
                object-contain
                opacity-60
              "
                        />
                    </button>
                </div>

                {/* ACCESSIBLE TRANSLATION STATE */}

                {translating && isArabic && (
                    <span className="sr-only">Translating host section</span>
                )}
            </div>
        </section>
    );
};

export default HostSection;
