import { useState } from "react";
import "../styles/Vip.css";

import bronzeCrest from "../assets/vip/vip-1-bronze-crest.png";
import silverLion from "../assets/vip/vip-2-silver-lion.png";
import rubyFlame from "../assets/vip/vip-3-ruby-flame.png";
import wolfKing from "../assets/vip/vip-4-wolf-king.png";
import dragonCrest from "../assets/vip/vip-5-dragon-crest.png";
import thunderEmperor from "../assets/vip/vip-6-thunder-emperor.png";
import destroyer from "../assets/vip/vip-7-destroyer.png";

const vipBenefits = [
  {
    icon: "🏅",
    name: "VIP Badge",
    description:
      "Stand out with an exclusive VIP badge on your profile and in rooms.",
  },
  {
    icon: "💰",
    name: "Daily Free Coins",
    description:
      "Receive free coins every day as part of your VIP benefits.",
  },
  {
    icon: "🎬",
    name: "Entry Slide with Name",
    description:
      "Show a stylish entry banner with your name when joining.",
  },
  {
    icon: "🎨",
    name: "Color Username",
    description:
      "Make your username stand out with unique VIP colors.",
  },
  {
    icon: "🏠",
    name: "Room Themes",
    description:
      "Customize your room with premium themes available only to VIPs.",
  },
  {
    icon: "🖼️",
    name: "Profile Frame",
    description:
      "Unlock exclusive frames to customize your profile appearance.",
  },
  {
    icon: "🔑",
    name: "Free Room Lock",
    description:
      "Room Lock is reserved for VIP members — take control of your room.",
  },
  {
    icon: "🆔",
    name: "Custom Babble ID",
    description:
      "Create a unique and personalized Babble ID.",
  },
  {
    icon: "😈",
    name: "Exclusive Emoji",
    description:
      "Access a collection of VIP-only emojis.",
  },
  {
    icon: "⚡",
    name: "XP Boost",
    description:
      "Earn more XP and level up faster with VIP boost.",
  },
];

const vipTiers = [
  {
    name: "Bronze Crest",
    image: bronzeCrest,
    accent: "#D9A544",
    background:
      "radial-gradient(120% 140% at 50% 0%, #3b2a12 0%, #1a1006 70%)",
    unlocked: 6,
    price: "$500",
    next: "Silver Lion",
  },
  {
    name: "Silver Lion",
    image: silverLion,
    accent: "#C9CDD3",
    background:
      "radial-gradient(120% 140% at 50% 0%, #2c2f36 0%, #0c0d10 70%)",
    unlocked: 8,
    price: "$1,500",
    next: "Ruby Flame",
  },
  {
    name: "Ruby Flame",
    image: rubyFlame,
    accent: "#FF4B3E",
    background:
      "radial-gradient(120% 140% at 50% 0%, #4a0e08 0%, #170302 70%)",
    unlocked: 10,
    price: "$3,500",
    next: "Wolf King",
  },
  {
    name: "Wolf King",
    image: wolfKing,
    accent: "#4FD8F0",
    background:
      "radial-gradient(120% 140% at 50% 0%, #0c2a33 0%, #050e12 70%)",
    unlocked: 12,
    price: "$6,000",
    next: "Dragon Crest",
  },
  {
    name: "Dragon Crest",
    image: dragonCrest,
    accent: "#C77DFF",
    background:
      "radial-gradient(120% 140% at 50% 0%, #34104a 0%, #12041c 70%)",
    unlocked: 15,
    price: "$9,000",
    next: "Thunder Emperor",
  },
  {
    name: "Thunder Emperor",
    image: thunderEmperor,
    accent: "#3FA9F5",
    background:
      "radial-gradient(120% 140% at 50% 0%, #0b2038 0%, #030a14 70%)",
    unlocked: 17,
    price: "$12,000",
    next: "Destroyer",
  },
  {
    name: "Destroyer",
    image: destroyer,
    accent: "#FF5A36",
    background:
      "radial-gradient(120% 140% at 50% 0%, #3a0a04 0%, #150200 70%)",
    unlocked: 20,
    price: "$16,000",
    next: null,
  },
];

const Vip = () => {
  const [activeVipTier, setActiveVipTier] = useState(0);

  const tier = vipTiers[activeVipTier];
  const unlockedBenefitCount = Math.round(tier.unlocked / 2);
  const progress = (tier.unlocked / 20) * 100;

  
// {This is the current temporary upgrade function.}
  const handleUpgrade = () => {
    if (!tier.next) return;

    console.log(`Upgrade to ${tier.next}`);
  };

  return (
    <section id="vip" className="vip-section">
      <div className="vip-wrap">
        <div className="vip-section-head">
          <h2>Seven tiers. One legend.</h2>

          <p>
            Climb from Bronze Crest to Destroyer — each VIP tier unlocks its
            own crest, color identity, and exclusive benefits.
          </p>
        </div>

        <div
          className="vip-panel"
          style={{
            "--vip-bg": tier.background,
            "--vip-accent": tier.accent,
          }}
        >
          <div className="vip-tabs">
            {vipTiers.map((item, index) => (
              <button
                type="button"
                key={item.name}
                onClick={() => setActiveVipTier(index)}
                className={`vip-tab ${
                  activeVipTier === index ? "active" : ""
                }`}
              >
                VIP {index + 1}
              </button>
            ))}
          </div>

          <div className="vip-body">
            <div className="vip-crest-col">
              <div className="crest-glow">
                <img
                  src={tier.image}
                  alt={`${tier.name} VIP crest`}
                />
              </div>

              <h3>{tier.name}</h3>

              <div className="vip-progress">
                <div
                  className="vip-progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <p className="vip-count">
                {tier.unlocked} / 20 Benefits Unlocked
              </p>

              <button
                type="button"
                className="vip-upgrade-button"
                onClick={handleUpgrade}
                disabled={!tier.next}
              >
                {tier.next
                  ? `${tier.price} · Upgrade to ${tier.next}`
                  : "Max Tier Reached"}
              </button>
            </div>

            <div className="vip-benefits-col">
              {vipBenefits.map((benefit, index) => {
                const locked = index >= unlockedBenefitCount;

                return (
                  <div
                    key={benefit.name}
                    className={`vip-benefit ${
                      locked ? "locked" : ""
                    }`}
                  >
                    <div className="vb-ic">
                      {locked ? "🔒" : benefit.icon}
                    </div>

                    <div>
                      <b>{benefit.name}</b>

                      <span>
                        {benefit.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vip;
