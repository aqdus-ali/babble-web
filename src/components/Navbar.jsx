import { useState } from "react";
import avatarMini from "../assets/avatar-mini.png";

const navLinks = [
    { label: "Gifts", id: "gifts" },
    { label: "VIP", id: "vip" },
    { label: "Become a Host", id: "host" },
];

const Navbar = () => {
    const [language, setLanguage] = useState("en");
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setMenuOpen(false);
    };

    return (
        <nav
            className="
        relative
        w-full
        border-b
        border-[rgba(180,140,90,0.12)]
        bg-[#FFF3E3]
        font-[Nunito]
      "
        >
            {/* ================= TOP NAV ================= */}
            <div className="mx-auto flex h-[62px] max-w-[1160px] items-center justify-between px-4 sm:px-6 lg:px-0">
                {/* ================= LOGO ================= */}
                <button
                    onClick={() => scrollToSection("hero")}
                    className="flex items-center gap-2"
                >
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[#201815]">
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 100 100"
                            fill="none"
                        >
                            <path
                                d="M5 55H25L33 30L45 78L58 15L68 68L76 45H95"
                                stroke="#FF9E3D"
                                strokeWidth="9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <span className="text-[15px] font-extrabold leading-[100%] text-[#3A2A24]">
                        Babble
                    </span>
                </button>

                {/* ================= DESKTOP MENU ================= */}
                <div className="hidden items-center gap-14 lg:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="
                text-[14.5px]
                font-extrabold
                leading-[100%]
                tracking-[0]
                text-[#7D6A5D]
                transition
                duration-200
                hover:text-[#3A2A24]
              "
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Language Toggle */}
                    <div className="flex items-center rounded-full border border-[#E8D9C6] bg-white p-[3px] shadow-sm">
                        <button
                            onClick={() => setLanguage("en")}
                            className={`
                rounded-full
                px-2
                py-[5px]
                text-[12px]
                font-extrabold
                leading-[100%]
                text-center
                transition
                sm:px-3
                sm:text-[13px]
                ${
                    language === "en"
                        ? "bg-[#FF6F5A] text-white"
                        : "text-[#8B776A]"
                }
              `}
                        >
                            EN
                        </button>

                        <button
                            onClick={() => setLanguage("ar")}
                            className={`
                rounded-full
                px-2
                py-[5px]
                text-[12px]
                font-extrabold
                leading-[100%]
                text-center
                transition
                sm:px-3
                sm:text-[13px]
                ${
                    language === "ar"
                        ? "bg-[#FF6F5A] text-white"
                        : "text-[#8B776A]"
                }
              `}
                        >
                            عربي
                        </button>
                    </div>

                    {/* ================= DESKTOP SIGN IN ================= */}
                    <button
                        className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-[#E8D9C6]
              bg-white
              px-2
              py-[5px]
              pr-4
              shadow-sm
              lg:flex
            "
                    >
                        <img
                            src={avatarMini}
                            alt="Sign in"
                            className="h-[24px] w-[24px] object-contain"
                        />

                        <span
                            className="
                text-[13px]
                font-extrabold
                leading-[100%]
                tracking-[0]
                text-center
                text-[#3A2A24]
              "
                        >
                            Sign In
                        </span>
                    </button>

                    {/* ================= DESKTOP GET APP ================= */}
                    <button
                        onClick={() => scrollToSection("download")}
                        className="
              hidden
              rounded-full
              bg-gradient-to-r
              from-[#FF8A4C]
              to-[#FF5F67]
              px-5
              py-[9px]
              text-[13px]
              font-extrabold
              leading-[100%]
              tracking-[0]
              text-center
              text-white
              shadow-[0_5px_14px_rgba(255,96,82,0.28)]
              transition
              duration-200
              hover:-translate-y-[1px]
              lg:block
            "
                    >
                        Get the App
                    </button>

                    {/* ================= HAMBURGER ================= */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        className="
              flex
              h-[40px]
              w-[40px]
              flex-col
              items-center
              justify-center
              gap-[5px]
              rounded-[12px]
              border
              border-[#E8D9C6]
              bg-white
              shadow-sm
              lg:hidden
            "
                    >
                        <span
                            className={`
                h-[2px]
                w-[18px]
                rounded-full
                bg-[#3A2A24]
                transition
                duration-300
                ${menuOpen ? "translate-y-[7px] rotate-45" : ""}
              `}
                        />

                        <span
                            className={`
                h-[2px]
                w-[18px]
                rounded-full
                bg-[#3A2A24]
                transition
                duration-300
                ${menuOpen ? "opacity-0" : "opacity-100"}
              `}
                        />

                        <span
                            className={`
                h-[2px]
                w-[18px]
                rounded-full
                bg-[#3A2A24]
                transition
                duration-300
                ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}
              `}
                        />
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`
          absolute
          left-0
          top-[62px]
          z-50
          w-full
          overflow-hidden
          border-t
          border-[rgba(180,140,90,0.10)]
          bg-[#FFF3E3]
          shadow-[0_12px_30px_rgba(78,52,35,0.12)]
          transition-all
          duration-300
          lg:hidden
          ${
              menuOpen
                  ? "max-h-[500px] opacity-100"
                  : "pointer-events-none max-h-0 opacity-0"
          }
        `}
            >
                <div className="px-5 pb-6 pt-4">
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="
                  border-b
                  border-[#EADCCB]
                  py-4
                  text-left
                  text-[15px]
                  font-extrabold
                  text-[#5E493E]
                  transition
                  hover:text-[#FF6F5A]
                "
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Buttons */}
                    <div className="mt-5 flex gap-3">
                        {/* Sign In */}
                        <button
                            className="
      flex
      h-[48px]
      flex-1
      items-center
      justify-center
      gap-2
      rounded-full
      border
      border-[#E8D9C6]
      bg-white
      px-3
      text-[13px]
      font-extrabold
      leading-[100%]
      text-[#3A2A24]
      shadow-sm
    "
                        >
                            <img
                                src={avatarMini}
                                alt="Sign in"
                                className="h-[24px] w-[24px] object-contain"
                            />

                            <span>Sign In</span>
                        </button>

                        {/* Get App */}
                        <button
                            onClick={() => scrollToSection("download")}
                            className="
      h-[48px]
      flex-1
      rounded-full
      bg-gradient-to-r
      from-[#FF8A4C]
      to-[#FF5F67]
      px-3
      text-[13px]
      font-extrabold
      leading-[100%]
      text-white
      shadow-[0_7px_18px_rgba(255,96,82,0.25)]
    "
                        >
                            Get the App
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
