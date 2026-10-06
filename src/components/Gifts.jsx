import { useEffect, useMemo, useState } from "react";

import "../styles/Gifts.css";

import giftsData from "../data/all_gifts_Data.json";
import coinsIcon from "../assets/coins.png";

import { useLanguage } from "../context/LanguageContext.jsx";

/* =========================================
   LOAD ALL GIFT IMAGES
========================================= */

const giftAssets = import.meta.glob(
    "../assets/**/*.{png,jpg,jpeg,webp,gif,avif}",
    {
        eager: true,
        import: "default",
    },
);

/* =========================================
   CATEGORY ORDER

   Keep English internally.
   Arabic display comes from typeArb.
========================================= */

const CATEGORY_ORDER = [
    "Celebration & Party 🎉",
    "Emoji's 😊",
    "Flags 🚩",
    "Flowers & Nature 🌹",
    "Food & Drinks 🍽️",
    "Hot 🔥",
    "Love & Emotions 🥰",
    "Luxury & Accessories 💎",
    "New ⭐",
    "Others ✨",
    "Soft Toys & Plushies 🧸",
    "Universe 🌌",
    "Wealth & Status 💰",
];

/* =========================================
   FIXED ENGLISH UI TEXT

   Arabic comes from DeepL API.
========================================= */

const DEFAULT_GIFTS_TEXT = {
    title: "Send love, instantly",

    description:
        "Animated gifts that appear live in the room the second you send them.",

    static: "Static Gifts",

    animated: "Animated Gifts",

    noStatic: "No static gifts are available in this category.",

    noAnimated: "No animated gifts are available in this category.",
};

/* =========================================
   FIND IMAGE
========================================= */

const getGiftImage = (imageName) => {
    if (!imageName) {
        return null;
    }

    const imageSetSegment = `/${imageName}.imageset/`.toLowerCase();

    const match = Object.entries(giftAssets).find(([path]) =>
        path.toLowerCase().includes(imageSetSegment),
    );

    return match ? match[1] : null;
};
const formatGiftPrice = (price, language) => {
    const value = Number(price);

    if (language === "ar") {
        return new Intl.NumberFormat("ar-EG", {
            useGrouping: false,
        }).format(value);
    }

    return new Intl.NumberFormat("en-US", {
        useGrouping: false,
    }).format(value);
};
const Gifts = () => {
    const { language, translateSection } = useLanguage();

    const [giftLevel, setGiftLevel] = useState(0);

    const [activeCategory, setActiveCategory] = useState(
        "Celebration & Party 🎉",
    );

    const [giftsText, setGiftsText] = useState(DEFAULT_GIFTS_TEXT);

    const [translating, setTranslating] = useState(false);

    /* =========================================
     CONVERT JSON OBJECT TO ARRAY
  ========================================= */

    const allGifts = useMemo(() => {
        return Object.entries(giftsData.gifts ?? {}).map(([id, gift]) => ({
            id,
            ...gift,
        }));
    }, []);

    /* =========================================
     TRANSLATE FIXED GIFTS SECTION UI
     ONE BATCH API CALL
  ========================================= */

    useEffect(() => {
        let active = true;

        const loadGiftTranslations = async () => {
            /* =========================
           ENGLISH
        ========================= */

            if (language === "en") {
                setGiftsText(DEFAULT_GIFTS_TEXT);

                setTranslating(false);

                return;
            }

            /* =========================
           ARABIC VIA API
        ========================= */

            try {
                setTranslating(true);

                const sourceTexts = [
                    DEFAULT_GIFTS_TEXT.title,
                    DEFAULT_GIFTS_TEXT.description,
                    DEFAULT_GIFTS_TEXT.static,
                    DEFAULT_GIFTS_TEXT.animated,
                    DEFAULT_GIFTS_TEXT.noStatic,
                    DEFAULT_GIFTS_TEXT.noAnimated,
                ];

                const translated = await translateSection("gifts", sourceTexts);

                if (!active) {
                    return;
                }

                setGiftsText({
                    title:
                        translated?.[DEFAULT_GIFTS_TEXT.title] ||
                        DEFAULT_GIFTS_TEXT.title,

                    description:
                        translated?.[DEFAULT_GIFTS_TEXT.description] ||
                        DEFAULT_GIFTS_TEXT.description,

                    static:
                        translated?.[DEFAULT_GIFTS_TEXT.static] ||
                        DEFAULT_GIFTS_TEXT.static,

                    animated:
                        translated?.[DEFAULT_GIFTS_TEXT.animated] ||
                        DEFAULT_GIFTS_TEXT.animated,

                    noStatic:
                        translated?.[DEFAULT_GIFTS_TEXT.noStatic] ||
                        DEFAULT_GIFTS_TEXT.noStatic,

                    noAnimated:
                        translated?.[DEFAULT_GIFTS_TEXT.noAnimated] ||
                        DEFAULT_GIFTS_TEXT.noAnimated,
                });
            } catch (error) {
                console.error("Gifts translation failed:", error);

                if (active) {
                    setGiftsText(DEFAULT_GIFTS_TEXT);
                }
            } finally {
                if (active) {
                    setTranslating(false);
                }
            }
        };

        loadGiftTranslations();

        return () => {
            active = false;
        };
    }, [language]);

    /* =========================================
     AVAILABLE CATEGORIES
  ========================================= */

    const categories = useMemo(() => {
        const available = new Set(
            allGifts.map((gift) => gift.type).filter(Boolean),
        );

        const ordered = CATEGORY_ORDER.filter((category) =>
            available.has(category),
        );

        const extras = [...available].filter(
            (category) => !CATEGORY_ORDER.includes(category),
        );

        return [...ordered, ...extras];
    }, [allGifts]);

    /* =========================================
     VISIBLE GIFTS
  ========================================= */

    const visibleGifts = useMemo(() => {
        return allGifts.filter(
            (gift) =>
                gift.type === activeCategory &&
                Number(gift.giftLevel) === giftLevel,
        );
    }, [allGifts, activeCategory, giftLevel]);

    /* =========================================
     CATEGORY DISPLAY LABEL

     English -> type
     Arabic  -> typeArb
  ========================================= */

    const getCategoryLabel = (category) => {
        if (language === "en") {
            return category;
        }

        const matchingGift = allGifts.find((gift) => gift.type === category);

        return matchingGift?.typeArb || category;
    };

    /* =========================================
     CHANGE STATIC / ANIMATED

     Also select first available category
     for that level.
  ========================================= */

    const changeGiftLevel = (level) => {
        setGiftLevel(level);

        const currentCategoryHasGift = allGifts.some(
            (gift) =>
                gift.type === activeCategory &&
                Number(gift.giftLevel) === level,
        );

        if (currentCategoryHasGift) {
            return;
        }

        const firstGift = allGifts.find(
            (gift) => Number(gift.giftLevel) === level,
        );

        if (firstGift?.type) {
            setActiveCategory(firstGift.type);
        }
    };

    return (
        <section
            id="gifts"
            className="
        bg-[#FFF3E3]
        py-[72px]
        md:py-[58px]
        lg:py-[72px]
      "
        >
            <div
                className="
          mx-auto
          max-w-[1180px]
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
            mb-7
            flex
            flex-col
            gap-3
            md:flex-row
            md:items-start
            md:justify-between
            md:gap-12
          "
                >
                    {/* TITLE */}

                    <h2
                        dir={language === "ar" ? "rtl" : "ltr"}
                        className="
              font-[Baloo_2]
              text-[34px]
              font-extrabold
              leading-[1.08]
              tracking-[-0.4px]
              text-[#2B201B]
              sm:text-[40px]
              lg:text-[48px]
            "
                    >
                        {giftsText.title}
                    </h2>

                    {/* DESCRIPTION */}

                    <p
                        dir={language === "ar" ? "rtl" : "ltr"}
                        className={`
              max-w-[450px]
              font-[Nunito]
              text-[16px]
              font-bold
              leading-[1.45]
              text-[#765D4E]

              ${language === "ar" ? "text-right" : "text-left"}
            `}
                    >
                        {giftsText.description}
                    </p>
                </div>

                {/* =================================
            STATIC / ANIMATED
        ================================= */}

                <div
                    dir="ltr"
                    className="
            mb-4
            inline-flex
            gap-1
            rounded-full
            border
            border-[#EAD8C3]
            bg-white/70
            p-1
            max-sm:flex
            max-sm:w-full
          "
                >
                    {/* STATIC */}

                    <button
                        type="button"
                        onClick={() => changeGiftLevel(0)}
                        className={`
              rounded-full
              px-[17px]
              py-[9px]
              font-[Nunito]
              text-[13px]
              font-extrabold
              transition
              duration-200
              max-sm:flex-1

              ${
                  giftLevel === 0
                      ? "bg-[#2B201B] text-white shadow-[0_6px_16px_rgba(45,31,24,0.16)]"
                      : "text-[#735C4E]"
              }
            `}
                    >
                        <span
                            dir={language === "ar" ? "rtl" : "ltr"}
                            className="
                inline-block
                whitespace-nowrap
              "
                        >
                            {giftsText.static}
                        </span>
                    </button>

                    {/* ANIMATED */}

                    <button
                        type="button"
                        onClick={() => changeGiftLevel(1)}
                        className={`
              rounded-full
              px-[17px]
              py-[9px]
              font-[Nunito]
              text-[13px]
              font-extrabold
              transition
              duration-200
              max-sm:flex-1

              ${
                  giftLevel === 1
                      ? "bg-[#2B201B] text-white shadow-[0_6px_16px_rgba(45,31,24,0.16)]"
                      : "text-[#735C4E]"
              }
            `}
                    >
                        <span
                            dir={language === "ar" ? "rtl" : "ltr"}
                            className="
                inline-block
                whitespace-nowrap
              "
                        >
                            {giftsText.animated}
                        </span>
                    </button>
                </div>

                {/* =================================
            CATEGORY TABS
        ================================= */}

                <div
                    dir="ltr"
                    className="
            mb-7
            flex
            w-full
            gap-[10px]
            overflow-x-auto
            pb-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
                >
                    {categories.map((category) => (
                        <button
                            type="button"
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                  min-h-[40px]
                  shrink-0
                  rounded-full
                  border
                  px-[18px]
                  font-[Nunito]
                  text-[13px]
                  font-extrabold
                  transition
                  duration-200
                  hover:-translate-y-[1px]

                  ${
                      activeCategory === category
                          ? "border-transparent bg-gradient-to-r from-[#FF8A4C] to-[#FF5F67] text-white shadow-[0_8px_18px_rgba(255,96,82,0.22)]"
                          : "border-[#EAD8C3] bg-white text-[#322720] shadow-[0_3px_10px_rgba(89,59,34,0.04)]"
                  }
                `}
                        >
                            <span
                                dir={language === "ar" ? "rtl" : "ltr"}
                                className="
                    inline-block
                    whitespace-nowrap
                  "
                            >
                                {getCategoryLabel(category)}
                            </span>
                        </button>
                    ))}
                </div>

                {/* =================================
            GIFT GRID
        ================================= */}

                {visibleGifts.length > 0 ? (
                    <div
                        className="
              grid
              grid-cols-1
              gap-3
              min-[381px]:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              xl:gap-4
            "
                    >
                        {visibleGifts.map((gift) => {
                            const giftImage = getGiftImage(gift.imageName);

                            const giftName =
                                language === "ar"
                                    ? gift.nameArb || gift.name
                                    : gift.name;

                            return (
                                <article
                                    key={gift.id}
                                    className="
                      relative
                      flex
                      min-h-[148px]
                      flex-col
                      items-center
                      justify-center
                      rounded-[22px]
                      bg-white
                      px-[14px]
                      py-[16px]
                      shadow-[0_7px_22px_rgba(85,58,35,0.045)]
                      transition
                      duration-200
                      hover:-translate-y-1
                      hover:shadow-[0_14px_30px_rgba(85,58,35,0.09)]
                      sm:min-h-[164px]
                    "
                                >
                                    {/* IMAGE */}

                                    <div
                                        className="
                        mb-[10px]
                        grid
                        h-[60px]
                        w-[60px]
                        place-items-center
                        sm:h-[70px]
                        sm:w-[70px]
                      "
                                    >
                                        {giftImage ? (
                                            <img
                                                src={giftImage}
                                                alt={giftName || "Babble gift"}
                                                loading="lazy"
                                                className={`
                            block
                            h-full
                            w-full
                            object-contain
                            drop-shadow-[0_5px_7px_rgba(60,38,24,0.10)]

                            ${giftLevel === 1 ? "gift-float-animation" : ""}
                          `}
                                            />
                                        ) : (
                                            <div
                                                className="
                            grid
                            h-[58px]
                            w-[58px]
                            place-items-center
                            rounded-[16px]
                            bg-[#FFF4E5]
                            font-[Baloo_2]
                            text-[24px]
                            font-extrabold
                            text-[#FF744E]
                          "
                                            >
                                                ?
                                            </div>
                                        )}
                                    </div>

                                    {/* NAME */}

                                    <h3
                                        dir={language === "ar" ? "rtl" : "ltr"}
                                        className="
                        mb-[9px]
                        min-h-[19px]
                        text-center
                        font-[Nunito]
                        text-[13px]
                        font-extrabold
                        leading-[1.25]
                        text-[#2B201B]
                      "
                                    >
                                        {giftName}
                                    </h3>

                                    {/* PRICE */}

                                    <div
                                        dir="ltr"
                                        className="
                        inline-flex
                        items-center
                        gap-1
                        rounded-full
                        bg-[#FFF7E9]
                        px-[10px]
                        py-[5px]
                        font-[Nunito]
                        text-[12px]
                        font-extrabold
                        text-[#F3A530]
                      "
                                    >
                                        <img
                                            src={coinsIcon}
                                            alt=""
                                            className="
                          h-[12px]
                          w-[12px]
                          object-contain
                        "
                                        />

                                        <span
                                            dir={
                                                language === "ar"
                                                    ? "rtl"
                                                    : "ltr"
                                            }
                                        >
                                            {formatGiftPrice(
                                                gift.price,
                                                language,
                                            )}
                                        </span>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    /* =================================
             EMPTY STATE
          ================================= */

                    <div
                        dir={language === "ar" ? "rtl" : "ltr"}
                        className="
              rounded-[20px]
              bg-white/70
              px-5
              py-[42px]
              text-center
              font-[Nunito]
              font-bold
              text-[#806C5F]
            "
                    >
                        {giftLevel === 1
                            ? giftsText.noAnimated
                            : giftsText.noStatic}
                    </div>
                )}

                {/* OPTIONAL TRANSLATION STATE */}

                {translating && language === "ar" && (
                    <span className="sr-only">Translating gifts section</span>
                )}
            </div>
        </section>
    );
};

export default Gifts;
