import giftImages from "../assets/gift-image.png";
import bagImages from "../assets/gift-bags.png";

const hostSteps = [
    {
        number: 1,
        title: "Apply for an Agency",
        description:
            "Submit an application from your profile to join as an agency under Babble.",
    },
    {
        number: 2,
        title: "Get approved as Host",
        description:
            "Once reviewed, you're granted Host status with your own live room.",
    },
    {
        number: 3,
        title: "Receive your Coin Seller ID",
        description:
            "Your unique ID lets you distribute and sell coin packages to your community.",
    },
    {
        number: 4,
        title: "Earn ongoing benefits",
        description:
            "Earn a share of gifts received live, plus bonus coins for active hosting.",
    },
];

const Host = () => {
    const handleDailyBonus = () => {
        console.log("Daily bonus clicked");
    };

    const handleReseller = () => {
        console.log("Reseller clicked");
    };

    return (
        <section
           id="host"
  className="bg-white pb-16 md:pb-20
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
            gap-4
            md:grid-cols-2
            md:gap-10
          "
                >
                    <h2
                        className="
              font-[Baloo_2]
              text-[32px]
              font-extrabold
              leading-[1.1]
              text-[#34261F]
              md:text-[36px]
            "
                    >
                        From new user to host
                    </h2>

                    <p
                        className="
              max-w-[420px]
              font-[Nunito]
              text-[13.5px]
              font-bold
              leading-[1.5]
              text-[#765F52]
            "
                    >
                        Here's exactly how becoming a Babble host and coin
                        seller works, step by step.
                    </p>
                </div>

                {/* STEPS */}
                <div
                    className="
            mb-7
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {hostSteps.map((step) => (
                        <article
                            key={step.number}
                            className="
                min-h-[145px]
                rounded-[16px]
                bg-white
                p-4
                shadow-[0_8px_24px_rgba(83,59,42,0.07)]
              "
                        >
                            <div
                                className="
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
                "
                            >
                                {step.number}
                            </div>

                            <h3
                                className="
                  mb-2
                  font-[Baloo_2]
                  text-[13px]
                  font-extrabold
                  text-[#34261F]
                "
                            >
                                {step.title}
                            </h3>

                            <p
                                className="
                  font-[Nunito]
                  text-[11px]
                  font-bold
                  leading-[1.5]
                  text-[#7B685C]
                "
                            >
                                {step.description}
                            </p>
                        </article>
                    ))}
                </div>

                {/* LOWER CARDS */}
                <div
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
    pl-6
    pr-0
    py-6
    text-left
    transition
    duration-200
    hover:-translate-y-[3px]
    hover:shadow-[0_12px_28px_rgba(75,53,38,0.10)]
  "
                    >
                        <div className="max-w-[330px]">
                            <h3
                                className="
        mb-2
        font-[Baloo_2]
        text-[17px]
        font-extrabold
        text-[#34261F]
      "
                            >
                                Claim your Daily Bonus
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
                                Come back every day to activate and collect free
                                coins — no purchase needed.
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
    pl-6
    pr-0
    py-6
    text-left
    transition
    duration-200
    hover:-translate-y-[3px]
    hover:shadow-[0_12px_28px_rgba(75,53,38,0.10)]
  "
                    >
                        <div className="max-w-[330px]">
                            <h3
                                className="
        mb-2
        font-[Baloo_2]
        text-[17px]
        font-extrabold
        text-[#34261F]
      "
                            >
                                Become a Reseller
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
                                Add a local account and start distributing
                                Babble packages to your own audience.
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
            </div>
        </section>
    );
};

export default Host;
