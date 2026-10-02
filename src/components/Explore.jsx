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
                {/* HEADER */}
                <div
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
                        className="
              font-[Baloo_2]
              text-[34px]
              font-extrabold
              leading-[1.1]
              text-[#2B201B]
              md:text-[40px]
            "
                    >
                        Everything inside Babble
                    </h2>

                    <p
                        className="
              max-w-[500px]
              font-[Nunito]
              text-[16px]
              font-bold
              leading-[1.45]
              text-[#765C4C]
            "
                    >
                        Coins, Babble Currency, VIP perks and profile
                        customization — here's what powers your experience.
                    </p>
                </div>

                {/* FEATURE CARDS */}
                <div
                    className="
            mb-9
            grid
            grid-cols-1
            gap-[18px]
            sm:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {featureCards.map((feature) => (
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

                            <h3
                                className="
                  mb-2
                  mt-[18px]
                  font-[Baloo_2]
                  text-[17px]
                  font-extrabold
                  text-[#2B201B]
                "
                            >
                                {feature.title}
                            </h3>

                            <p
                                className="
                  font-[Nunito]
                  text-[13.5px]
                  font-bold
                  leading-[1.55]
                  text-[#806E61]
                "
                            >
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>

                {/* BADGES */}
                <div
                    className="
            grid
            grid-cols-2
            gap-3
            sm:gap-4
            lg:grid-cols-[repeat(4,160px)]
          "
                >
                    {badges.map((badge) => (
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
                            <div
                                className="
                  mb-[13px]
                  text-[43px]
                  leading-none
                "
                            >
                                {badge.icon}
                            </div>

                            <h4
                                className="
                  mb-[10px]
                  font-[Baloo_2]
                  text-[13px]
                  font-extrabold
                  text-[#2B201B]
                "
                            >
                                {badge.title}
                            </h4>

                            <span
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
                                {badge.status}
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Explore;
