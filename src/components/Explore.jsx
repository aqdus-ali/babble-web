import { useEffect, useMemo, useState } from "react";

import { useLanguage } from "../context/LanguageContext.jsx";

/* =========================================

   ENGLISH SOURCE DATA

========================================= */

const featureCards = [
    {
        icon: "💰",

        title: "Coins",

        description:
            "Babble's core currency — earn them through daily bonuses or top up to send gifts and unlock items.",

        tone: "yellow",
    },

    {
        icon: "Ⓑ",

        title: "Babble Currency",

        description:
            "A premium currency for sending bigger gift packages and supporting your favorite hosts.",

        tone: "purple",
    },

    {
        icon: "💎",

        title: "VIP Membership",

        description:
            "Level up through VIP tiers to unlock exclusive frames, entrance effects, and room privileges.",

        tone: "pink",
    },

    {
        icon: "🖼️",

        title: "Frames & Themes",

        description:
            "Personalize your profile with entry frames and customize your room with premium themes.",

        tone: "green",
    },
];

const badges = [
    {
        icon: "🏅",

        title: "Millionaire",

        status: "Achieved",

        state: "achieved",
    },

    {
        icon: "🛡️",

        title: "Daily Sign In",

        status: "Locked",

        state: "locked",
    },

    {
        icon: "♛",

        title: "Billionaire",

        status: "Locked",

        state: "locked",
    },

    {
        icon: "⚡",

        title: "Level 25",

        status: "Unlocked",

        state: "unlocked",
    },
];

/* =========================================

   SECTION COPY

========================================= */

const DEFAULT_EXPLORE_TEXT = {
    title: "Everything inside Babble",

    description:
        "Coins, Babble Currency, VIP perks and profile customization — here's what powers your experience.",
};

/* =========================================

   STYLES

========================================= */

const featureToneClasses = {
    yellow: "bg-[#FFEBBE]",

    purple: "bg-[#E6D7FF] text-[#8758FF]",

    pink: "bg-[#FFD8E3]",

    green: "bg-[#D9F2DF]",
};

const badgeStateClasses = {
    achieved: "bg-[#DCF5DF] text-[#2F9349]",

    locked: "bg-[#F0EBE4] text-[#B6A897]",

    unlocked: "bg-[#DCF5DF] text-[#16984A]",
};

const Explore = () => {
    const {
        language,

        translateSection,
    } = useLanguage();

    const [translations, setTranslations] = useState({});

    const [translating, setTranslating] = useState(false);

    /* =========================================

     TRANSLATE SECTION IN ONE BATCH

  ========================================= */

    useEffect(() => {
        let active = true;

        const loadExploreTranslation = async () => {
            if (language === "en") {
                setTranslations({});

                setTranslating(false);

                return;
            }

            try {
                setTranslating(true);

                const sourceTexts = [
                    DEFAULT_EXPLORE_TEXT.title,

                    DEFAULT_EXPLORE_TEXT.description,

                    ...featureCards.flatMap((feature) => [
                        feature.title,

                        feature.description,
                    ]),

                    ...badges.flatMap((badge) => [badge.title, badge.status]),
                ];

                const uniqueTexts = [...new Set(sourceTexts)];

                const translated = await translateSection(
                    "explore",

                    uniqueTexts,
                );

                if (!active) {
                    return;
                }

                setTranslations(translated || {});
            } catch (error) {
                console.error(
                    "Explore translation failed:",

                    error,
                );

                if (active) {
                    setTranslations({});
                }
            } finally {
                if (active) {
                    setTranslating(false);
                }
            }
        };

        loadExploreTranslation();

        return () => {
            active = false;
        };
    }, [language]);

    /* =========================================

     TRANSLATION HELPER

  ========================================= */

    const localizeExploreText = (text) => {
        const value = String(text ?? "");

        if (language !== "ar") {
            return value;
        }

        return value
            .replace(/\bVIPs?\b/gi, "كبار الشخصيات")
            .replace(/\bBabble\b/gi, "بابل")
            .replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);
    };

    const tr = (text) => {
        if (language === "en") {
            return text;
        }

        const translated = translations?.[text];
        const result = translated && translated.trim() ? translated : text;

        return localizeExploreText(result);
    };

    /* =========================================

     TRANSLATED ARRAYS

  ========================================= */

    const translatedFeatures = useMemo(() => {
        return featureCards.map((feature) => ({
            ...feature,

            translatedTitle: tr(feature.title),

            translatedDescription: tr(feature.description),
        }));
    }, [language, translations]);

    const translatedBadges = useMemo(() => {
        return badges.map((badge) => ({
            ...badge,

            translatedTitle: tr(badge.title),

            translatedStatus: tr(badge.status),
        }));
    }, [language, translations]);

    return (
        <section
            id="explore"
            className="

        bg-white

        py-[60px]

        md:py-[80px]

        lg:pb-[90px]

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

            items-start

            gap-[14px]

            md:mb-[42px]

            md:grid-cols-2

            md:gap-10

          "
                >
                    <h2
                        dir={language === "ar" ? "rtl" : "ltr"}
                        className={`

              font-[Baloo_2]

              text-[34px]

              font-extrabold

              leading-[1.1]

              text-[#2B201B]

              md:text-[40px]



              ${language === "ar" ? "text-right" : "text-left"}

            `}
                    >
                        {tr(DEFAULT_EXPLORE_TEXT.title)}
                    </h2>

                    <p
                        dir={language === "ar" ? "rtl" : "ltr"}
                        className={`

              max-w-[500px]

              font-[Nunito]

              text-[16px]

              font-bold

              leading-[1.45]

              text-[#765C4C]



              ${language === "ar" ? "text-right" : "text-left"}

            `}
                    >
                        {tr(DEFAULT_EXPLORE_TEXT.description)}
                    </p>
                </div>

                {/* =================================

            FEATURE CARDS

        ================================= */}

                <div
                    dir="ltr"
                    className="

            mb-9

            grid

            grid-cols-1

            gap-[18px]

            sm:grid-cols-2

            lg:grid-cols-4

          "
                >
                    {translatedFeatures.map((feature) => (
                        <article
                            key={feature.title}
                            className="

                  min-h-[220px]

                  rounded-[20px]

                  bg-white

                  px-[22px]

                  py-[26px]

                  shadow-[0_10px_30px_rgba(80,55,35,0.06)]

                "
                        >
                            {/* ICON */}

                            <div
                                className={`

                    flex

                    h-[52px]

                    w-[52px]

                    items-center

                    justify-center

                    rounded-[16px]

                    text-[24px]



                    ${featureToneClasses[feature.tone]}

                  `}
                            >
                                {feature.icon}
                            </div>

                            {/* TITLE */}

                            <h3
                                dir={language === "ar" ? "rtl" : "ltr"}
                                className={`

                    mb-2

                    mt-[18px]

                    font-[Baloo_2]

                    text-[17px]

                    font-extrabold

                    text-[#2B201B]



                    ${language === "ar" ? "text-right" : "text-left"}

                  `}
                            >
                                {feature.translatedTitle}
                            </h3>

                            {/* DESCRIPTION */}

                            <p
                                dir={language === "ar" ? "rtl" : "ltr"}
                                className={`

                    font-[Nunito]

                    text-[13.5px]

                    font-bold

                    leading-[1.55]

                    text-[#806E61]



                    ${language === "ar" ? "text-right" : "text-left"}

                  `}
                            >
                                {feature.translatedDescription}
                            </p>
                        </article>
                    ))}
                </div>

                {/* =================================

            BADGES

        ================================= */}

                <div
                    dir="ltr"
                    className="

            grid

            grid-cols-2

            gap-3

            sm:gap-4

            lg:grid-cols-[repeat(4,160px)]

          "
                >
                    {translatedBadges.map((badge) => (
                        <article
                            key={badge.title}
                            className="

                  flex

                  min-h-[145px]

                  flex-col

                  items-center

                  justify-center

                  rounded-[18px]

                  bg-white

                  px-[14px]

                  py-5

                  text-center

                  shadow-[0_10px_30px_rgba(80,55,35,0.06)]

                  sm:min-h-[165px]

                "
                        >
                            {/* ICON */}

                            <div
                                className="

                    mb-[13px]

                    text-[43px]

                    leading-none

                  "
                            >
                                {badge.icon}
                            </div>

                            {/* TITLE */}

                            <h4
                                dir={language === "ar" ? "rtl" : "ltr"}
                                className="

                    mb-[10px]

                    font-[Baloo_2]

                    text-[13px]

                    font-extrabold

                    text-[#2B201B]

                  "
                            >
                                {badge.translatedTitle}
                            </h4>

                            {/* STATUS */}

                            <span
                                dir={language === "ar" ? "rtl" : "ltr"}
                                className={`

                    inline-flex

                    min-h-[23px]

                    items-center

                    justify-center

                    rounded-full

                    px-[11px]

                    py-1

                    font-[Nunito]

                    text-[10px]

                    font-extrabold



                    ${badgeStateClasses[badge.state]}

                  `}
                            >
                                {badge.translatedStatus}
                            </span>
                        </article>
                    ))}
                </div>

                {/* =================================

            ACCESSIBLE LOADING STATE

        ================================= */}

                {translating && language === "ar" && (
                    <span className="sr-only">Translating explore section</span>
                )}
            </div>
        </section>
    );
};

export default Explore;
