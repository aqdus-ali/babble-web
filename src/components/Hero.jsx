import "../styles/Hero.css";

import mascotHero from "../assets/Babble-mascot-character.png";
import coinsIcon from "../assets/coins.png";
import giftIcon from "../assets/gifts.png";
import diamondIcon from "../assets/Diamond.png";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        bg-[#FFF3E3]
        py-[56px]
        lg:py-[70px]
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1160px]
          grid-cols-1
          items-center
          gap-[50px]
          px-6
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        {/* ================= LEFT SIDE ================= */}
        <div>
          {/* Small badge */}
          <div
            className="
              mb-[22px]
              inline-flex
              items-center
              gap-[10px]
              rounded-full
              bg-white
              py-2
              pl-2
              pr-4
              shadow-[0_8px_24px_rgba(110,70,35,0.08)]
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#FF9B43]
                to-[#FF625F]
                text-[14px]
              "
            >
              👋
            </span>

            <span
              className="
                text-[13px]
                font-extrabold
                leading-[100%]
                text-[#806E61]
              "
            >
              Talk, Connect & Make Friends
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="
              text-[42px]
              font-extrabold
              leading-[1.04]
              tracking-[-0.5px]
              text-[#2B201B]
              sm:text-[52px]
              lg:text-[64px]
            "
            style={{
              fontFamily: "'Baloo 2', cursive",
            }}
          >
            Your voice.
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#FF9845]
                to-[#FF5F63]
                bg-clip-text
                text-transparent
              "
            >
              Your room.
            </span>

            <br />

            Your people.
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[480px]
              text-[18px]
              font-semibold
              leading-[28.8px]
              tracking-[0]
              text-[#806E61]
            "
          >
            Babble is where live voice rooms, real friendships, and everyday
            rewards meet — jump into a room, meet new people, and level up as
            you go.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-[14px]
            "
          >
            <button
              onClick={() => scrollToSection("explore")}
              className="
                rounded-full
                bg-gradient-to-r
                from-[#FF9147]
                to-[#FF5E64]
                px-[26px]
                py-[15px]
                text-[15px]
                font-extrabold
                leading-[100%]
                text-white
                shadow-[0_10px_22px_rgba(255,105,73,0.28)]
                transition
                duration-300
                hover:-translate-y-[2px]
                hover:shadow-[0_14px_28px_rgba(255,105,73,0.36)]
              "
            >
              Explore Live Rooms
            </button>

            <button
              onClick={() => scrollToSection("download")}
              className="
                rounded-full
                border
                border-[#E8D8C4]
                bg-white
                px-[26px]
                py-[14px]
                text-[15px]
                font-extrabold
                leading-[100%]
                text-[#382922]
                shadow-[0_6px_16px_rgba(110,70,35,0.07)]
                transition
                duration-300
                hover:-translate-y-[2px]
                hover:border-[#FF9B5B]
                hover:text-[#FF704F]
              "
            >
              Download App
            </button>
          </div>

          {/* Stats */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-7
              sm:gap-10
            "
          >
            <div>
              <b
                className="
                  block
                  text-[24px]
                  font-extrabold
                  text-[#2B201B]
                "
                style={{
                  fontFamily: "'Baloo 2', cursive",
                }}
              >
                1.2K+
              </b>

              <span className="text-[12.5px] font-extrabold text-[#806E61]">
                Live listeners now
              </span>
            </div>

            <div>
              <b
                className="
                  block
                  text-[24px]
                  font-extrabold
                  text-[#2B201B]
                "
                style={{
                  fontFamily: "'Baloo 2', cursive",
                }}
              >
                2,500
              </b>

              <span className="text-[12.5px] font-extrabold text-[#806E61]">
                Friends per account
              </span>
            </div>

            <div>
              <b
                className="
                  block
                  text-[24px]
                  font-extrabold
                  text-[#2B201B]
                "
                style={{
                  fontFamily: "'Baloo 2', cursive",
                }}
              >
                150+
              </b>

              <span className="text-[12.5px] font-extrabold text-[#806E61]">
                Rooms trending today
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hero-art">
          {/* Background blobs */}
          <div className="art-blob art-blob-2" />
          <div className="art-blob" />

          {/* Expanding circles */}
          <div className="art-center">
            <div className="art-ring ring1" />
            <div className="art-ring ring2" />
            <div className="art-ring ring3" />
          </div>

          {/* Coins floating card */}
          <div className="float-chip float-coins">
            <img
              src={coinsIcon}
              alt=""
              className="float-chip-image"
            />

            <span>+20 Coins today</span>
          </div>

          {/* Gift floating card */}
          <div className="float-chip float-gift">
            <img
              src={giftIcon}
              alt=""
              className="float-chip-image"
            />

            <span>Send a gift</span>
          </div>

          {/* VIP floating card */}
          <div className="float-chip float-vip">
            <img
              src={diamondIcon}
              alt=""
              className="float-chip-image"
            />

            <span>VIP 3 unlocked</span>
          </div>

          {/* Decorations */}
          <div className="deco deco-crown">👑</div>
          <div className="deco deco-dice">🎲</div>

          <div className="deco deco-dot deco-dot-a" />
          <div className="deco deco-dot deco-dot-b" />
          <div className="deco deco-dot deco-dot-c" />

          {/* Phone + Mascot */}
          <div className="hero-phone-wrap">
            <div className="phone-mock">
              <div className="phone-notch" />

              <div className="phone-screen">
                <div className="pm-brand">
                  Babble
                </div>

                <div className="pm-room">
                  <div className="pm-thumb" />

                  <div className="pm-lines">
                    <span />
                    <span />
                  </div>

                  <div className="pm-join">
                    Join
                  </div>
                </div>

                <div className="pm-room">
                  <div className="pm-thumb pm-thumb-purple" />

                  <div className="pm-lines">
                    <span />
                    <span />
                  </div>

                  <div className="pm-join">
                    Join
                  </div>
                </div>

                <div className="pm-room">
                  <div className="pm-thumb pm-thumb-blue" />

                  <div className="pm-lines">
                    <span />
                    <span />
                  </div>

                  <div className="pm-join">
                    Join
                  </div>
                </div>

                <div className="pm-room">
                  <div className="pm-thumb pm-thumb-green" />

                  <div className="pm-lines">
                    <span />
                    <span />
                  </div>

                  <div className="pm-join">
                    Join
                  </div>
                </div>
              </div>
            </div>

            <img
              src={mascotHero}
              alt="Babble mascot"
              className="mascot-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;