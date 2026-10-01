import { useMemo, useState } from "react";
import "../styles/Gifts.css";
import giftsData from "../data/all_gifts_Data.json";
import coinsIcon from "../assets/coins.png";
// Load every gift image inside src/assets, including files nested in .imageset folders.
const giftAssets = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,gif,avif}",
  {
    eager: true,
    import: "default",
  }
);

// This order keeps the category tabs predictable instead of depending on JSON order.
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

// Find the actual image file that lives inside <imageName>.imageset/.
const getGiftImage = (imageName) => {
  if (!imageName) return null;

  const imageSetSegment = `/${imageName}.imageset/`.toLowerCase();

  const match = Object.entries(giftAssets).find(([path]) =>
    path.toLowerCase().includes(imageSetSegment)
  );

  return match ? match[1] : null;
};

const Gifts = () => {
  // 0 = Static Gifts, 1 = Animated Gifts
  const [giftLevel, setGiftLevel] = useState(0);
  const [activeCategory, setActiveCategory] = useState(
    "Celebration & Party 🎉"
  );

  // Firebase-style object -> normal array for filter/map.
  const allGifts = useMemo(() => {
    return Object.entries(giftsData.gifts ?? {}).map(([id, gift]) => ({
      id,
      ...gift,
    }));
  }, []);

  // Only show categories that really exist in the JSON.
  const categories = useMemo(() => {
    const available = new Set(
      allGifts.map((gift) => gift.type).filter(Boolean)
    );

    const ordered = CATEGORY_ORDER.filter((category) =>
      available.has(category)
    );

    // Include any future category that is not yet in CATEGORY_ORDER.
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
    <section id="gifts" className="gifts-section">
      <div className="gifts-container">
        {/* Header */}
        <div className="gifts-header">
          <h2>Send love, instantly</h2>

          <p>
            Animated gifts that appear live in the room the second you send
            them.
          </p>
        </div>

        {/* Static / Animated */}
        <div className="gift-level-tabs" aria-label="Gift type">
          <button
            type="button"
            onClick={() => setGiftLevel(0)}
            className={`gift-level-button ${
              giftLevel === 0 ? "active" : ""
            }`}
          >
            Static Gifts
          </button>

          <button
            type="button"
            onClick={() => setGiftLevel(1)}
            className={`gift-level-button ${
              giftLevel === 1 ? "active" : ""
            }`}
          >
            Animated Gifts
          </button>
        </div>

        {/* Categories */}
        <div className="gift-tabs" aria-label="Gift categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`gift-tab ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gift cards */}
        {visibleGifts.length > 0 ? (
          <div className="gift-grid">
            {visibleGifts.map((gift) => {
              const giftImage = getGiftImage(gift.imageName);

              return (
                <article className="gift-card" key={gift.id}>
                  <div className="gift-image-wrap">
                    {giftImage ? (
                      <img
                        src={giftImage}
                        alt={gift.name || "Babble gift"}
                        className={`gift-image ${
                          giftLevel === 1 ? "gift-image-animated" : ""
                        }`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="gift-image-fallback">?</div>
                    )}
                  </div>

                  <h3>{gift.name}</h3>

                  <div className="gift-price">
                    <span className="gift-coin" aria-hidden="true">
                      <img
                                    src={coinsIcon}
                                    alt=""
                                    
                                  />
                    </span>
                    <span>{gift.price}</span>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="gift-empty">
            No {giftLevel === 1 ? "animated" : "static"} gifts are available
            in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Gifts;
