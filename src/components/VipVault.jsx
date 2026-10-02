import { useState } from "react";

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
        description: "Show a stylish entry banner with your name when joining.",
    },
    {
        icon: "🎨",
        name: "Color Username",
        description: "Make your username stand out with unique VIP colors.",
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
        description: "Create a unique and personalized Babble ID.",
    },
    {
        icon: "😈",
        name: "Exclusive Emoji",
        description: "Access a collection of VIP-only emojis.",
    },
    {
        icon: "⚡",
        name: "XP Boost",
        description: "Earn more XP and level up faster with VIP boost.",
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

    const handleUpgrade = () => {
        if (!tier.next) return;

        console.log(`Upgrade to ${tier.next}`);
    };

    return (
        <section
            id="vip"
            className="
        relative
        bg-[#FFF3E3]
        py-14
        sm:py-[72px]
      "
        >
            <style>
                {`
          @keyframes crestPulse {
            0%, 100% {
              filter: drop-shadow(
                0 0 14px ${tier.accent}
              );
            }

            50% {
              filter: drop-shadow(
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
          mx-auto
    w-full
    max-w-[1160px]
    px-4
    sm:px-6
    lg:px-0
        "
            >
                {/* HEADER */}
                <div
                    className="
            mb-[26px]
            flex
            flex-col
            items-start
            justify-between
            gap-6
            sm:mb-9
            md:flex-row
            md:items-end
          "
                >
                    <h2
                        className="
              max-w-[560px]
              font-[Baloo_2]
              text-[28px]
              font-extrabold
              leading-[1.1]
              text-[#2B201B]
              sm:text-[34px]
              lg:text-[40px]
            "
                    >
                        Seven tiers. One legend.
                    </h2>

                    <p
                        className="
              max-w-[460px]
              font-[Nunito]
              font-bold
              leading-[1.55]
              text-[#806E61]
            "
                    >
                        Climb from Bronze Crest to Destroyer — each VIP tier
                        unlocks its own crest, color identity, and exclusive
                        benefits.
                    </p>
                </div>

                {/* PANEL */}
                <div
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
                    style={{
                        background: tier.background,
                    }}
                >
                    {/* TABS */}
                    <div
                        className="
              mb-[22px]
              flex
              gap-2
              overflow-x-auto
              border-b
              border-white/[0.08]
              pb-4
              [scrollbar-width:thin]
            "
                    >
                        {vipTiers.map((item, index) => (
                            <button
                                type="button"
                                key={item.name}
                                onClick={() => setActiveVipTier(index)}
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
                      activeVipTier === index
                          ? "border-transparent text-[#1A1006]"
                          : "border-white/[0.14] bg-white/[0.06] text-[#D8CBBE]"
                  }
                `}
                                style={
                                    activeVipTier === index
                                        ? {
                                              background: tier.accent,
                                          }
                                        : undefined
                                }
                            >
                                VIP {index + 1}
                            </button>
                        ))}
                    </div>

                    {/* BODY */}
                    <div
                        className="
              grid
              grid-cols-1
              gap-8
              min-[821px]:grid-cols-[260px_1fr]
            "
                    >
                        {/* LEFT COLUMN */}
                        <div
                            className="
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

                            {/* NAME */}
                            <h3
                                className="
                  mb-[14px]
                  font-[Baloo_2]
                  text-[22px]
                  font-extrabold
                  tracking-[0.5px]
                  text-white
                "
                            >
                                {tier.name}
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

                            {/* COUNT */}
                            <p
                                className="
                  mb-[22px]
                  font-[Nunito]
                  text-[12.5px]
                  font-extrabold
                  text-[#C9BBA8]
                "
                            >
                                {tier.unlocked} / 20 Benefits Unlocked
                            </p>

                            {/* BUTTON */}
                            <button
                                type="button"
                                onClick={handleUpgrade}
                                disabled={!tier.next}
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
                                {tier.next
                                    ? `${tier.price} · Upgrade to ${tier.next}`
                                    : "Max Tier Reached"}
                            </button>
                        </div>

                        {/* BENEFITS */}
                        <div
                            className="
                grid
                content-start
                grid-cols-1
                gap-3
                min-[561px]:grid-cols-2
              "
                        >
                            {vipBenefits.map((benefit, index) => {
                                const locked = index >= unlockedBenefitCount;

                                return (
                                    <div
                                        key={benefit.name}
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
                        ${locked ? "opacity-50" : "opacity-100"}
                      `}
                                    >
                                        <div
                                            className="
                          w-[30px]
                          shrink-0
                          text-center
                          text-[19px]
                        "
                                        >
                                            {locked ? "🔒" : benefit.icon}
                                        </div>

                                        <div>
                                            <b
                                                className="
                            mb-[3px]
                            block
                            font-[Baloo_2]
                            text-[13.5px]
                            text-white
                          "
                                            >
                                                {benefit.name}
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
