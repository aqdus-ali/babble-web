const Footer = () => {
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
    <footer
      className="
        bg-[#21150F]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1160px]
          px-4
          py-12
          sm:px-6
          md:py-14
          lg:px-0
        "
      >
        {/* TOP FOOTER */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_0.85fr_0.85fr_0.85fr]
            lg:gap-14
          "
        >
          {/* BRAND */}
          <div>
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              {/* LOGO ICON */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#2D1D15]
                "
              >
                <span
                  className="
                    text-[17px]
                    text-[#FF744E]
                  "
                >
                  ⚡
                </span>
              </div>

              <span
                className="
                  font-[Baloo_2]
                  text-[20px]
                  font-extrabold
                "
              >
                Babble
              </span>
            </div>

            <p
              className="
                mt-4
                max-w-[220px]
                font-[Nunito]
                text-[13px]
                font-semibold
                leading-[1.55]
                text-[#9F8B7E]
              "
            >
              Talk, connect, and make friends — live, every day.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h4
              className="
                mb-4
                font-[Nunito]
                text-[13px]
                font-extrabold
                text-white
              "
            >
              Explore
            </h4>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >
              <button
                onClick={() => scrollToSection("hero")}
                className="
                  w-fit
                  font-[Nunito]
                  text-[13px]
                  font-semibold
                  text-[#C4B3A7]
                  transition
                  hover:text-white
                "
              >
                Live Rooms
              </button>

              <button
                onClick={() => scrollToSection("gifts")}
                className="
                  w-fit
                  font-[Nunito]
                  text-[13px]
                  font-semibold
                  text-[#C4B3A7]
                  transition
                  hover:text-white
                "
              >
                Store
              </button>

              <button
                onClick={() => scrollToSection("host")}
                className="
                  w-fit
                  font-[Nunito]
                  text-[13px]
                  font-semibold
                  text-[#C4B3A7]
                  transition
                  hover:text-white
                "
              >
                Become a Host
              </button>
            </div>
          </div>

          {/* ACCOUNT */}
          <div>
            <h4
              className="
                mb-4
                font-[Nunito]
                text-[13px]
                font-extrabold
                text-white
              "
            >
              Account
            </h4>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >
              <a
                href="#"
                className="
                  w-fit
                  font-[Nunito]
                  text-[13px]
                  font-semibold
                  text-[#C4B3A7]
                  transition
                  hover:text-white
                "
              >
                Sign In
              </a>

              <a
                href="#"
                className="
                  w-fit
                  font-[Nunito]
                  text-[13px]
                  font-semibold
                  text-[#C4B3A7]
                  transition
                  hover:text-white
                "
              >
                Sign Up
              </a>

              <a
                href="#"
                className="
                  w-fit
                  font-[Nunito]
                  text-[13px]
                  font-semibold
                  text-[#C4B3A7]
                  transition
                  hover:text-white
                "
              >
                Support
              </a>
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h4
              className="
                mb-4
                font-[Nunito]
                text-[13px]
                font-extrabold
                text-white
              "
            >
              Connect
            </h4>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >
              <a
                href="#"
                className="
                  w-fit
                  font-[Nunito]
                  text-[13px]
                  font-semibold
                  text-[#C4B3A7]
                  transition
                  hover:text-white
                "
              >
                Instagram
              </a>

              <a
                href="#"
                className="
                  w-fit
                  font-[Nunito]
                  text-[13px]
                  font-semibold
                  text-[#C4B3A7]
                  transition
                  hover:text-white
                "
              >
                TikTok
              </a>

              <a
                href="#"
                className="
                  w-fit
                  font-[Nunito]
                  text-[13px]
                  font-semibold
                  text-[#C4B3A7]
                  transition
                  hover:text-white
                "
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="
            my-8
            h-px
            w-full
            bg-white/[0.08]
          "
        />

        {/* BOTTOM FOOTER */}
        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              font-[Nunito]
              text-[12px]
              font-semibold
              text-[#9F8B7E]
            "
          >
            © 2026 Babble. All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-1
              font-[Nunito]
              text-[12px]
              font-semibold
              text-[#9F8B7E]
            "
          >
            <button
              type="button"
              className="
                transition
                hover:text-white
              "
            >
              English
            </button>

            <span>/</span>

            <button
              type="button"
              className="
                transition
                hover:text-white
              "
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;