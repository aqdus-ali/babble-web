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
    w-full
    max-w-[1160px]
    grid-cols-1
    items-center
    gap-[50px]
    px-4
    sm:px-6
    lg:grid-cols-[1.05fr_0.95fr]
    lg:px-0
        "
      >
        {/* LEFT SIDE */}
        <div>
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
                font-[Nunito]
                text-[13px]
                font-extrabold
                leading-none
                text-[#806E61]
              "
            >
              Talk, Connect & Make Friends
            </span>
          </div>

          <h1
            className="
              font-[Baloo_2]
              text-[42px]
              font-extrabold
              leading-[1.04]
              tracking-[-0.5px]
              text-[#2B201B]
              sm:text-[52px]
              lg:text-[64px]
            "
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

          <p
            className="
              mt-5
              max-w-[480px]
              font-[Nunito]
              text-[18px]
              font-semibold
              leading-[28.8px]
              text-[#806E61]
            "
          >
            Babble is where live voice rooms, real friendships, and everyday
            rewards meet — jump into a room, meet new people, and level up as
            you go.
          </p>

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
                font-[Nunito]
                text-[15px]
                font-extrabold
                leading-none
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
                font-[Nunito]
                text-[15px]
                font-extrabold
                leading-none
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
                  font-[Baloo_2]
                  text-[24px]
                  font-extrabold
                  text-[#2B201B]
                "
              >
                1.2K+
              </b>

              <span
                className="
                  font-[Nunito]
                  text-[12.5px]
                  font-extrabold
                  text-[#806E61]
                "
              >
                Live listeners now
              </span>
            </div>

            <div>
              <b
                className="
                  block
                  font-[Baloo_2]
                  text-[24px]
                  font-extrabold
                  text-[#2B201B]
                "
              >
                2,500
              </b>

              <span
                className="
                  font-[Nunito]
                  text-[12.5px]
                  font-extrabold
                  text-[#806E61]
                "
              >
                Friends per account
              </span>
            </div>

            <div>
              <b
                className="
                  block
                  font-[Baloo_2]
                  text-[24px]
                  font-extrabold
                  text-[#2B201B]
                "
              >
                150+
              </b>

              <span
                className="
                  font-[Nunito]
                  text-[12.5px]
                  font-extrabold
                  text-[#806E61]
                "
              >
                Rooms trending today
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            relative
            mx-auto
            h-[390px]
            w-full
            max-w-[500px]
            sm:h-[460px]
          "
        >
          {/* BACKGROUND BLOBS */}

          <div
            className="
              absolute
              inset-0
              rounded-[40%_60%_55%_45%/50%_45%_55%_50%]
              bg-gradient-to-br
              from-[#FFE2C0]
              to-[#FFC997]
              shadow-[0_18px_40px_rgba(120,80,40,0.12)]
            "
            style={{
              animation: "blobShift 14s ease-in-out infinite",
            }}
          />

          <div
            className="
              absolute
              bottom-[10%]
              left-[4%]
              right-[12%]
              top-[6%]
              z-0
              rounded-[40%_60%_55%_45%/50%_45%_55%_50%]
              bg-gradient-to-br
              from-[#FFEBD4]
              to-[#FFD9A8]
              opacity-85
            "
            style={{
              animation:
                "blobShift 18s ease-in-out infinite reverse",
            }}
          />

          {/* EXPANDING RINGS */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                border-[2.5px]
                border-white/65
              "
              style={{
                animation:
                  "ringPulse 3.2s ease-out infinite",
              }}
            />

            <div
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                border-[2.5px]
                border-white/65
              "
              style={{
                animation:
                  "ringPulse 3.2s ease-out 1.05s infinite",
              }}
            />

            <div
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                border-[2.5px]
                border-white/65
              "
              style={{
                animation:
                  "ringPulse 3.2s ease-out 2.1s infinite",
              }}
            />
          </div>

          {/* COINS CHIP */}

          <div
            className="
              absolute
              left-[2%]
              top-[8%]
              z-30
              flex
              items-center
              gap-[7px]
              whitespace-nowrap
              rounded-full
              bg-white
              px-[10px]
              py-[6px]
              font-[Nunito]
              text-[9.5px]
              font-extrabold
              leading-none
              text-[#3B2A22]
              shadow-[0_8px_20px_rgba(105,72,43,0.1)]
              sm:left-0
              sm:px-[13px]
              sm:py-2
              sm:text-[12px]
            "
            style={{
              animation:
                "floaty 5s ease-in-out infinite",
            }}
          >
            <img
              src={coinsIcon}
              alt=""
              className="
                h-4
                w-4
                shrink-0
                object-contain
                sm:h-[18px]
                sm:w-[18px]
              "
            />

            <span>+20 Coins today</span>
          </div>

          {/* GIFT CHIP */}

          <div
            className="
              absolute
              right-[2%]
              top-[7%]
              z-30
              flex
              items-center
              gap-[7px]
              whitespace-nowrap
              rounded-full
              bg-white
              px-[10px]
              py-[6px]
              font-[Nunito]
              text-[9.5px]
              font-extrabold
              leading-none
              text-[#3B2A22]
              shadow-[0_8px_20px_rgba(105,72,43,0.1)]
              sm:right-0
              sm:px-[13px]
              sm:py-2
              sm:text-[12px]
            "
            style={{
              animation:
                "floaty 5.6s ease-in-out 0.6s infinite",
            }}
          >
            <img
              src={giftIcon}
              alt=""
              className="
                h-4
                w-4
                shrink-0
                object-contain
                sm:h-[18px]
                sm:w-[18px]
              "
            />

            <span>Send a gift</span>
          </div>

          {/* VIP CHIP */}

          <div
            className="
              absolute
              bottom-[4%]
              left-[4%]
              z-30
              flex
              items-center
              gap-[7px]
              whitespace-nowrap
              rounded-full
              bg-white
              px-[10px]
              py-[6px]
              font-[Nunito]
              text-[9.5px]
              font-extrabold
              leading-none
              text-[#3B2A22]
              shadow-[0_8px_20px_rgba(105,72,43,0.1)]
              sm:left-[8%]
              sm:px-[13px]
              sm:py-2
              sm:text-[12px]
            "
            style={{
              animation:
                "floaty 4.8s ease-in-out 1.2s infinite",
            }}
          >
            <img
              src={diamondIcon}
              alt=""
              className="
                h-4
                w-4
                shrink-0
                object-contain
                sm:h-[18px]
                sm:w-[18px]
              "
            />

            <span>VIP 3 unlocked</span>
          </div>

          {/* CROWN */}

          <div
            className="
              absolute
              left-[38%]
              top-[2%]
              z-20
              text-[20px]
              opacity-85
              drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)]
            "
            style={{
              animation:
                "floaty 5.6s ease-in-out 0.2s infinite",
            }}
          >
            👑
          </div>

          {/* DICE */}

          <div
            className="
              absolute
              right-[6%]
              top-[14%]
              z-20
              text-[24px]
              drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)]
            "
            style={{
              animation:
                "floaty 6.2s ease-in-out infinite",
            }}
          >
            🎲
          </div>

          {/* GREEN DOT */}

          <div
            className="
              absolute
              left-[4%]
              top-[14%]
              z-20
              h-[26px]
              w-[26px]
              rounded-full
              bg-[#7FD8A8]
              opacity-55
              blur-[2px]
            "
            style={{
              animation:
                "floaty 6.5s ease-in-out infinite",
            }}
          />

          {/* PINK DOT */}

          <div
            className="
              absolute
              bottom-[10%]
              left-[14%]
              z-20
              h-[18px]
              w-[18px]
              rounded-full
              bg-[#FF8FA3]
              opacity-55
              blur-[2px]
            "
            style={{
              animation:
                "floaty 5.2s ease-in-out 0.4s infinite",
            }}
          />

          {/* BLUE DOT */}

          <div
            className="
              absolute
              right-[2%]
              top-[40%]
              z-20
              h-[22px]
              w-[22px]
              rounded-full
              bg-[#8FB8FF]
              opacity-55
              blur-[2px]
            "
            style={{
              animation:
                "floaty 7s ease-in-out 0.8s infinite",
            }}
          />

          {/* PHONE + MASCOT */}

          <div
            className="
              absolute
              inset-0
              z-10
              flex
              items-center
              justify-center
            "
          >
            {/* PHONE */}

            <div
              className="
                relative
                z-[15]
                h-[365px]
                w-[180px]
                rounded-[34px]
                bg-[#161010]
                p-[10px]
                shadow-[0_22px_45px_-12px_rgba(0,0,0,0.45)]
                scale-[0.72]
                -rotate-3
                sm:scale-90
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-[10px]
                  z-[2]
                  h-[18px]
                  w-[60px]
                  -translate-x-1/2
                  rounded-b-[14px]
                  bg-[#161010]
                "
              />

              <div
                className="
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[26px]
                  bg-[#FFF3E3]
                  px-3
                  pb-3
                  pt-[26px]
                "
              >
                <div
                  className="
                    mb-[14px]
                    font-[Baloo_2]
                    text-[15px]
                    font-extrabold
                    text-[#FF7A46]
                  "
                >
                  Babble
                </div>

                {/* ROOM 1 */}
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    rounded-[14px]
                    bg-white
                    p-2
                    shadow-[0_4px_8px_rgba(0,0,0,0.05)]
                  "
                >
                  <div
                    className="
                      h-[26px]
                      w-[26px]
                      shrink-0
                      rounded-lg
                      bg-[#FFE3A8]
                    "
                  />

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      gap-1
                    "
                  >
                    <span
                      className="
                        block
                        h-[5px]
                        w-4/5
                        rounded-[3px]
                        bg-[#EFE2D0]
                      "
                    />

                    <span
                      className="
                        block
                        h-[5px]
                        w-1/2
                        rounded-[3px]
                        bg-[#EFE2D0]
                      "
                    />
                  </div>

                  <div
                    className="
                      shrink-0
                      rounded-full
                      bg-gradient-to-r
                      from-[#FF9147]
                      to-[#FF5E64]
                      px-[9px]
                      py-[5px]
                      text-[8.5px]
                      font-extrabold
                      text-white
                    "
                  >
                    Join
                  </div>
                </div>

                {/* ROOM 2 */}
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    rounded-[14px]
                    bg-white
                    p-2
                    shadow-[0_4px_8px_rgba(0,0,0,0.05)]
                  "
                >
                  <div
                    className="
                      h-[26px]
                      w-[26px]
                      shrink-0
                      rounded-lg
                      bg-[#E4D8FB]
                    "
                  />

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      gap-1
                    "
                  >
                    <span className="block h-[5px] w-4/5 rounded-[3px] bg-[#EFE2D0]" />
                    <span className="block h-[5px] w-1/2 rounded-[3px] bg-[#EFE2D0]" />
                  </div>

                  <div
                    className="
                      shrink-0
                      rounded-full
                      bg-gradient-to-r
                      from-[#FF9147]
                      to-[#FF5E64]
                      px-[9px]
                      py-[5px]
                      text-[8.5px]
                      font-extrabold
                      text-white
                    "
                  >
                    Join
                  </div>
                </div>

                {/* ROOM 3 */}
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    rounded-[14px]
                    bg-white
                    p-2
                    shadow-[0_4px_8px_rgba(0,0,0,0.05)]
                  "
                >
                  <div
                    className="
                      h-[26px]
                      w-[26px]
                      shrink-0
                      rounded-lg
                      bg-[#D9E7FF]
                    "
                  />

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      gap-1
                    "
                  >
                    <span className="block h-[5px] w-4/5 rounded-[3px] bg-[#EFE2D0]" />
                    <span className="block h-[5px] w-1/2 rounded-[3px] bg-[#EFE2D0]" />
                  </div>

                  <div
                    className="
                      shrink-0
                      rounded-full
                      bg-gradient-to-r
                      from-[#FF9147]
                      to-[#FF5E64]
                      px-[9px]
                      py-[5px]
                      text-[8.5px]
                      font-extrabold
                      text-white
                    "
                  >
                    Join
                  </div>
                </div>

                {/* ROOM 4 */}
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    rounded-[14px]
                    bg-white
                    p-2
                    shadow-[0_4px_8px_rgba(0,0,0,0.05)]
                  "
                >
                  <div
                    className="
                      h-[26px]
                      w-[26px]
                      shrink-0
                      rounded-lg
                      bg-[#DDF5E7]
                    "
                  />

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      gap-1
                    "
                  >
                    <span className="block h-[5px] w-4/5 rounded-[3px] bg-[#EFE2D0]" />
                    <span className="block h-[5px] w-1/2 rounded-[3px] bg-[#EFE2D0]" />
                  </div>

                  <div
                    className="
                      shrink-0
                      rounded-full
                      bg-gradient-to-r
                      from-[#FF9147]
                      to-[#FF5E64]
                      px-[9px]
                      py-[5px]
                      text-[8.5px]
                      font-extrabold
                      text-white
                    "
                  >
                    Join
                  </div>
                </div>
              </div>
            </div>

            {/* MASCOT */}

            <img
              src={mascotHero}
              alt="Babble mascot"
              className="
                absolute
                bottom-[4%]
                right-0
                z-[25]
                h-[105px]
                w-[95px]
                object-contain
                drop-shadow-[0_12px_16px_rgba(68,43,27,0.23)]
                sm:bottom-0
                sm:right-[-3%]
                sm:h-[135px]
                sm:w-[125px]
              "
              style={{
                animation:
                  "floaty 5.4s ease-in-out 0.3s infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;