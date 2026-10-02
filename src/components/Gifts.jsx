import { useMemo, useState } from "react";
import "../styles/Gifts.css";

import giftsData from "../data/all_gifts_Data.json";
import coinsIcon from "../assets/coins.png";

const giftAssets = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,gif,avif}",
  {
    eager: true,
    import: "default",
  }
);

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

const getGiftImage = (imageName) => {
  if (!imageName) return null;

  const imageSetSegment = `/${imageName}.imageset/`.toLowerCase();

  const match = Object.entries(giftAssets).find(([path]) =>
    path.toLowerCase().includes(imageSetSegment)
  );

  return match ? match[1] : null;
};

const Gifts = () => {
  const [giftLevel, setGiftLevel] = useState(0);

  const [activeCategory, setActiveCategory] = useState(
    "Celebration & Party 🎉"
  );

  const allGifts = useMemo(() => {
    return Object.entries(giftsData.gifts ?? {}).map(([id, gift]) => ({
      id,
      ...gift,
    }));
  }, []);

  const categories = useMemo(() => {
    const available = new Set(
      allGifts
        .map((gift) => gift.type)
        .filter(Boolean)
    );

    const ordered = CATEGORY_ORDER.filter((category) =>
      available.has(category)
    );

    const extras = [...available].filter(
      (category) => !CATEGORY_ORDER.includes(category)
    );

    return [...ordered, ...extras];
  }, [allGifts]);

  const visibleGifts = useMemo(() => {
    return allGifts.filter(
      (gift) =>
        gift.type === activeCategory &&
        Number(gift.giftLevel) === giftLevel
    );
  }, [allGifts, activeCategory, giftLevel]);

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

        {/* HEADER */}
        <div
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
          <h2
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
            Send love, instantly
          </h2>

          <p
            className="
              max-w-[450px]
              font-[Nunito]
              text-[16px]
              font-bold
              leading-[1.45]
              text-[#765D4E]
            "
          >
            Animated gifts that appear live in the room the second you send
            them.
          </p>
        </div>

        {/* STATIC / ANIMATED */}
        <div
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
          <button
            type="button"
            onClick={() => setGiftLevel(0)}
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
            Static Gifts
          </button>

          <button
            type="button"
            onClick={() => setGiftLevel(1)}
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
            Animated Gifts
          </button>
        </div>

        {/* CATEGORY TABS */}
        <div
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
              {category}
            </button>
          ))}
        </div>

        {/* GIFT GRID */}
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
                        alt={gift.name || "Babble gift"}
                        loading="lazy"
                        className={`
                          block
                          h-full
                          w-full
                          object-contain
                          drop-shadow-[0_5px_7px_rgba(60,38,24,0.10)]
                          ${
                            giftLevel === 1
                              ? "gift-float-animation"
                              : ""
                          }
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
                    {gift.name}
                  </h3>

                  {/* PRICE */}
                  <div
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

                    <span>
                      {gift.price}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div
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
            No {giftLevel === 1 ? "animated" : "static"} gifts are available
            in this category.
          </div>
        )}

      </div>
    </section>
  );
};

export default Gifts;