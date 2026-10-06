import { useEffect, useMemo, useState } from "react";

import vip1 from "../assets/vip/vip-1-bronze-crest.png";
import vip2 from "../assets/vip/vip-2-silver-lion.png";
import vip3 from "../assets/vip/vip-3-ruby-flame.png";
import vip4 from "../assets/vip/vip-4-wolf-king.png";
import vip5 from "../assets/vip/vip-5-dragon-crest.png";
import vip6 from "../assets/vip/vip-6-thunder-emperor.png";
import vip7 from "../assets/vip/vip-7-destroyer.png";

import { useLanguage } from "../context/LanguageContext.jsx";

/* =========================================
   VIP TIERS
========================================= */

const tiers = [
    {
        name: "Bronze Crest",
        image: vip1,
        accent: "#D9A544",
        background:
            "radial-gradient(120% 140% at 50% 0%, #3b2a12 0%, #1a1006 70%)",
        unlocked: 6,
        price: "500",
        next: "Silver Lion",
    },
    {
        name: "Silver Lion",
        image: vip2,
        accent: "#C9CDD3",
        background:
            "radial-gradient(120% 140% at 50% 0%, #34373c 0%, #141518 70%)",
        unlocked: 8,
        price: "1,500",
        next: "Ruby Flame",
    },
    {
        name: "Ruby Flame",
        image: vip3,
        accent: "#FF4B3E",
        background:
            "radial-gradient(120% 140% at 50% 0%, #501812 0%, #1A0907 70%)",
        unlocked: 10,
        price: "3,500",
        next: "Wolf King",
    },
    {
        name: "Wolf King",
        image: vip4,
        accent: "#4FD8F0",
        background:
            "radial-gradient(120% 140% at 50% 0%, #12353C 0%, #071315 70%)",
        unlocked: 12,
        price: "6,000",
        next: "Dragon Crest",
    },
    {
        name: "Dragon Crest",
        image: vip5,
        accent: "#C77DFF",
        background:
            "radial-gradient(120% 140% at 50% 0%, #331447 0%, #130819 70%)",
        unlocked: 15,
        price: "9,000",
        next: "Thunder Emperor",
    },
    {
        name: "Thunder Emperor",
        image: vip6,
        accent: "#3FA9F5",
        background:
            "radial-gradient(120% 140% at 50% 0%, #0F3151 0%, #06131F 70%)",
        unlocked: 17,
        price: "12,000",
        next: "Destroyer",
    },
    {
        name: "Destroyer",
        image: vip7,
        accent: "#FF5A36",
        background:
            "radial-gradient(120% 140% at 50% 0%, #4B190D 0%, #180904 70%)",
        unlocked: 20,
        price: "16,000",
        next: null,
    },
];

/* =========================================
   VIP BENEFITS
========================================= */

const benefits = [
    {
        icon: "🏅",
        title: "VIP Badge",
        description:
            "Stand out with an exclusive VIP badge on your profile and in rooms.",
    },
    {
        icon: "💰",
        title: "Daily Free Coins",
        description:
            "Receive free coins every day as part of your VIP benefits.",
    },
    {
        icon: "🎬",
        title: "Entry Slide with Name",
        description: "Show a stylish entry banner with your name when joining.",
    },
    {
        icon: "🎨",
        title: "Color Username",
        description: "Make your username stand out with unique VIP colors.",
    },
    {
        icon: "🏠",
        title: "Room Themes",
        description:
            "Customize your room with premium themes available only to VIPs.",
    },
    {
        icon: "🖼️",
        title: "Profile Frame",
        description:
            "Unlock exclusive frames to customize your profile appearance.",
    },
    {
        icon: "🔐",
        title: "Free Room Lock",
        description:
            "Room Lock is reserved for VIP members — take control of your room.",
    },
    {
        icon: "🆔",
        title: "Custom Babble ID",
        description: "Create a unique and personalized Babble ID.",
    },
    {
        icon: "😀",
        title: "Exclusive Emoji",
        description: "Access a collection of VIP-only emojis.",
    },
    {
        icon: "⚡",
        title: "VIP XP Boost",
        description:
            "Earn extra XP and level up faster with your VIP XP boost.",
    },
];

/* =========================================
   FIXED ENGLISH SOURCE COPY
========================================= */

const DEFAULT_VIP_TEXT = {
    title: "Seven tiers. One legend.",

    description:
        "Climb from Bronze Crest to Destroyer — each VIP tier unlocks its own crest, color identity, and exclusive benefits.",

    benefitsUnlocked: "Benefits Unlocked",

    upgrade: "Upgrade to",

    maxTier: "Max Tier Reached",
};

const Vips = () => {
    const { language, translateSection } = useLanguage();

    const [activeTier, setActiveTier] = useState(0);

    const [translations, setTranslations] = useState({});

    const [translating, setTranslating] = useState(false);

    const tier = tiers[activeTier];

    /* =========================================
     NUMBER / TEXT LOCALISATION
  ========================================= */

    const formatNumber = (value) => {
        const cleanedValue = String(value).replace(/,/g, "");

        const numericValue = Number(cleanedValue);

        if (Number.isNaN(numericValue)) {
            return value;
        }

        return new Intl.NumberFormat(
            language === "ar" ? "ar-EG" : "en-US",
        ).format(numericValue);
    };

    const localizeVipText = (text) => {
        const value = String(text ?? "");

        if (language !== "ar") {
            return value;
        }

        return value
            .replace(/\bVIPs?\b/gi, "كبار الشخصيات")
            .replace(/\bBabble\b/gi, "بابل")
            .replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);
    };

    /* =========================================
     TRANSLATE VIP SECTION
  ========================================= */

    useEffect(() => {
        let active = true;

        const loadVipTranslation = async () => {
            if (language === "en") {
                setTranslations({});
                setTranslating(false);

                return;
            }

            try {
                setTranslating(true);

                const sourceTexts = [
                    DEFAULT_VIP_TEXT.title,
                    DEFAULT_VIP_TEXT.description,
                    DEFAULT_VIP_TEXT.benefitsUnlocked,
                    DEFAULT_VIP_TEXT.upgrade,
                    DEFAULT_VIP_TEXT.maxTier,

                    ...tiers.map((item) => item.name),

                    ...benefits.flatMap((benefit) => [
                        benefit.title,
                        benefit.description,
                    ]),
                ];

                const uniqueTexts = [...new Set(sourceTexts)];

                const translated = await translateSection("vip", uniqueTexts);

                if (!active) {
                    return;
                }

                setTranslations(translated || {});
            } catch (error) {
                console.error("VIP translation failed:", error);

                if (active) {
                    setTranslations({});
                }
            } finally {
                if (active) {
                    setTranslating(false);
                }
            }
        };

        loadVipTranslation();

        return () => {
            active = false;
        };
    }, [language, translateSection]);

    /* =========================================
     TRANSLATION HELPER
  ========================================= */

    const tr = (text) => {
        if (language === "en") {
            return text;
        }

        const translated = translations?.[text];

        const result = translated && translated.trim() ? translated : text;

        return localizeVipText(result);
    };

    /* =========================================
     BENEFIT UNLOCK COUNT
  ========================================= */

    const unlockedBenefitCount = useMemo(() => {
        return Math.min(benefits.length, Math.round(tier.unlocked / 2));
    }, [tier]);

    /* =========================================
     PROGRESS
  ========================================= */

    const progress = (tier.unlocked / 20) * 100;

    /* =========================================
     UPGRADE
  ========================================= */

    const handleUpgrade = () => {
        console.log("Upgrade clicked:", tier.name);
    };

    return (
        <section
            id="vip"
            dir="ltr"
            className="
        relative
        bg-[#FFF3E3]
        py-14
        sm:py-[72px]
      "
        >
            {/* =================================
          CREST GLOW ANIMATION
      ================================= */}

            <style>
                {`
          @keyframes crestPulse {
            0%,
            100% {
              filter:
                drop-shadow(
                  0 0 14px ${tier.accent}
                );
            }

            50% {
              filter:
                drop-shadow(
                  0 0 30px ${tier.accent}
                );
            }
          }
        `}
            </style>

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
            mb-[26px]
            grid
            grid-cols-1
            gap-6
            sm:mb-9
            md:grid-cols-2
            md:items-end
            md:gap-10
          "
                >
                    <h2
                        dir={language === "ar" ? "rtl" : "ltr"}
                        className={`
              max-w-[560px]
              font-[Baloo_2]
              text-[28px]
              font-extrabold
              leading-[1.1]
              text-[#2B201B]
              sm:text-[34px]
              lg:text-[40px]

              ${language === "ar" ? "text-right" : "text-left"}
            `}
                    >
                        {tr(DEFAULT_VIP_TEXT.title)}
                    </h2>

                    <p
                        dir={language === "ar" ? "rtl" : "ltr"}
                        className={`
              max-w-[460px]
              font-[Nunito]
              font-bold
              leading-[1.55]
              text-[#806E61]

              ${language === "ar" ? "text-right" : "text-left"}
            `}
                    >
                        {tr(DEFAULT_VIP_TEXT.description)}
                    </p>
                </div>

                {/* =================================
            MAIN VIP PANEL
        ================================= */}

                <div
                    dir="ltr"
                    style={{
                        direction: "ltr",
                        background: tier.background,
                    }}
                    className="
            overflow-hidden
            rounded-[20px]
            p-5
            shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]
            transition-[background]
            duration-[600ms]
            sm:rounded-[24px]
            sm:p-7
          "
                >
                    {/* =================================
              VIP TABS
          ================================= */}

                    <div
                        dir="ltr"
                        className={`
              mb-[22px]
              flex
              gap-2
              overflow-x-auto
              border-b
              border-white/[0.08]
              pb-4
              [scrollbar-width:thin]

              ${
                  language === "ar"
                      ? "flex-row-reverse justify-start"
                      : "flex-row justify-start"
              }
            `}
                    >
                        {tiers.map((item, index) => (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() => setActiveTier(index)}
                                className={`
                    shrink-0
                    whitespace-nowrap
                    rounded-[12px]
                    border-[1.5px]
                    px-4
                    py-[9px]
                    font-[Nunito]
                    text-[12.5px]
                    font-extrabold
                    transition
                    duration-200

                    ${
                        activeTier === index
                            ? "border-transparent text-[#1A1006]"
                            : "border-white/[0.14] bg-white/[0.06] text-[#D8CBBE]"
                    }
                  `}
                                style={
                                    activeTier === index
                                        ? {
                                              background: item.accent,
                                          }
                                        : undefined
                                }
                            >
                                <span dir={language === "ar" ? "rtl" : "ltr"}>
                                    {language === "ar"
                                        ? `كبار الشخصيات ${formatNumber(
                                              index + 1,
                                          )}`
                                        : `VIP ${index + 1}`}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* =================================
              BODY
          ================================= */}

                    <div
                        dir="ltr"
                        style={{
                            direction: "ltr",
                        }}
                        className="
              grid
              grid-cols-1
              gap-8
              min-[821px]:grid-cols-[260px_1fr]
            "
                    >
                        {/* =================================
                CREST COLUMN
            ================================= */}

                        <div
                            className="
                order-1
                mx-auto
                flex
                w-full
                max-w-[360px]
                flex-col
                items-center
                text-center
                min-[821px]:mx-0
                min-[821px]:max-w-none
              "
                        >
                            {/* CREST */}

                            <div
                                className="
                  mb-4
                  flex
                  h-[150px]
                  w-[150px]
                  items-center
                  justify-center
                "
                                style={{
                                    animation:
                                        "crestPulse 3.4s ease-in-out infinite",
                                }}
                            >
                                <img
                                    src={tier.image}
                                    alt={`${tier.name} VIP crest`}
                                    className="
                    h-full
                    w-full
                    object-contain
                  "
                                />
                            </div>

                            {/* TIER NAME */}

                            <h3
                                dir={language === "ar" ? "rtl" : "ltr"}
                                className="
                  mb-[14px]
                  font-[Baloo_2]
                  text-[22px]
                  font-extrabold
                  tracking-[0.5px]
                  text-white
                "
                            >
                                {tr(tier.name)}
                            </h3>

                            {/* PROGRESS */}

                            <div
                                className="
                  mb-[10px]
                  h-2
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-white/[0.12]
                "
                            >
                                <div
                                    className="
                    h-full
                    rounded-full
                    transition-[width]
                    duration-500
                  "
                                    style={{
                                        width: `${progress}%`,
                                        background: tier.accent,
                                    }}
                                />
                            </div>

                            {/* BENEFITS COUNT */}

                            <p
                                dir={language === "ar" ? "rtl" : "ltr"}
                                className="
                  mb-[22px]
                  font-[Nunito]
                  text-[12.5px]
                  font-extrabold
                  text-[#C9BBA8]
                "
                            >
                                <span
                                    dir={language === "ar" ? "rtl" : "ltr"}
                                    className="
                    inline-block
                  "
                                >
                                    {formatNumber(tier.unlocked)}

                                    {" / "}

                                    {formatNumber(20)}
                                </span>{" "}
                                {tr(DEFAULT_VIP_TEXT.benefitsUnlocked)}
                            </p>

                            {/* =================================
                  UPGRADE BUTTON
              ================================= */}

                            <button
                                type="button"
                                disabled={!tier.next}
                                onClick={tier.next ? handleUpgrade : undefined}
                                className="
                  min-h-[44px]
                  w-full
                  rounded-full
                  px-[18px]
                  py-[11px]
                  font-[Nunito]
                  text-[13px]
                  font-extrabold
                  text-[#1A1006]
                  transition
                  duration-200
                  enabled:cursor-pointer
                  enabled:hover:-translate-y-[2px]
                  disabled:cursor-default
                  disabled:opacity-60
                "
                                style={{
                                    background: tier.accent,
                                }}
                            >
                                {tier.next ? (
                                    language === "ar" ? (
                                        <span
                                            dir="rtl"
                                            className="
                        inline-flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-1
                      "
                                        >
                                            <span>
                                                {tr(DEFAULT_VIP_TEXT.upgrade)}
                                            </span>

                                            <span>{tr(tier.next)}</span>

                                            <span
                                                dir="ltr"
                                                className="
                          inline-block
                        "
                                            >
                                                · ${formatNumber(tier.price)}
                                            </span>
                                        </span>
                                    ) : (
                                        <>
                                            ${formatNumber(tier.price)}
                                            {" · "}
                                            {tr(DEFAULT_VIP_TEXT.upgrade)}{" "}
                                            {tr(tier.next)}
                                        </>
                                    )
                                ) : (
                                    <span
                                        dir={language === "ar" ? "rtl" : "ltr"}
                                    >
                                        {tr(DEFAULT_VIP_TEXT.maxTier)}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* =================================
                BENEFITS GRID
            ================================= */}

                        <div
                            dir="ltr"
                            style={{
                                direction: "ltr",
                            }}
                            className="
                order-2
                grid
                content-start
                grid-cols-1
                gap-3
                min-[561px]:grid-cols-2
              "
                        >
                            {benefits.map((benefit, index) => {
                                const unlocked = index < unlockedBenefitCount;

                                return (
                                    <div
                                        key={benefit.title}
                                        dir="ltr"
                                        className={`
                        flex
                        items-start
                        gap-3
                        rounded-[14px]
                        border
                        border-white/10
                        bg-white/[0.05]
                        px-4
                        py-[14px]
                        transition
                        duration-200
                        hover:-translate-y-[2px]

                        ${unlocked ? "opacity-100" : "opacity-50"}
                      `}
                                    >
                                        {/* ICON */}

                                        <div
                                            className="
                          w-[30px]
                          shrink-0
                          text-center
                          text-[19px]
                        "
                                        >
                                            {unlocked ? benefit.icon : "🔒"}
                                        </div>

                                        {/* TEXT */}

                                        <div
                                            dir={
                                                language === "ar"
                                                    ? "rtl"
                                                    : "ltr"
                                            }
                                            className={`
                          min-w-0
                          flex-1

                          ${language === "ar" ? "text-right" : "text-left"}
                        `}
                                        >
                                            <b
                                                className="
                            mb-[3px]
                            block
                            font-[Baloo_2]
                            text-[13.5px]
                            text-white
                          "
                                            >
                                                {tr(benefit.title)}
                                            </b>

                                            <span
                                                className="
                            block
                            font-[Nunito]
                            text-[11.5px]
                            font-bold
                            leading-[1.4]
                            text-[#B6A896]
                          "
                                            >
                                                {tr(benefit.description)}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* =================================
            TRANSLATION STATE
        ================================= */}

                {translating && language === "ar" && (
                    <span className="sr-only">Translating VIP section</span>
                )}
            </div>
        </section>
    );
};

export default Vips;
