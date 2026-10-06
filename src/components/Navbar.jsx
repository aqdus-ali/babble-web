import { useEffect, useState } from "react";

import avatarMini from "../assets/avatar-mini.png";

import { useLanguage } from "../context/LanguageContext.jsx";

const DEFAULT_NAV_TEXT = {
    gifts: "Gifts",
    host: "Become a Host",
    signIn: "Sign In",
    getApp: "Get the App",
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [navText, setNavText] = useState(DEFAULT_NAV_TEXT);

    const [translating, setTranslating] = useState(false);

    const { language, changeLanguage, translateSection } = useLanguage();

    /* =========================================
       TRANSLATION
    ========================================= */

    useEffect(() => {
        let active = true;

        const loadNavbarTranslation = async () => {
            if (language === "en") {
                setNavText(DEFAULT_NAV_TEXT);
                setTranslating(false);
                return;
            }

            try {
                setTranslating(true);

                const sourceTexts = [
                    DEFAULT_NAV_TEXT.gifts,
                    DEFAULT_NAV_TEXT.host,
                    DEFAULT_NAV_TEXT.signIn,
                    DEFAULT_NAV_TEXT.getApp,
                ];

                const translated = await translateSection(
                    "navbar",
                    sourceTexts,
                );

                if (!active) return;

                setNavText({
                    gifts: translated?.["Gifts"] || DEFAULT_NAV_TEXT.gifts,

                    host:
                        translated?.["Become a Host"] || DEFAULT_NAV_TEXT.host,

                    signIn: translated?.["Sign In"] || DEFAULT_NAV_TEXT.signIn,

                    getApp:
                        translated?.["Get the App"] || DEFAULT_NAV_TEXT.getApp,
                });
            } catch (error) {
                console.error("Navbar translation failed:", error);

                if (active) {
                    setNavText(DEFAULT_NAV_TEXT);
                }
            } finally {
                if (active) {
                    setTranslating(false);
                }
            }
        };

        loadNavbarTranslation();

        return () => {
            active = false;
        };
    }, [language, translateSection]);

    /* =========================================
       SCROLL
    ========================================= */

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

    /* =========================================
       NAV LINKS
    ========================================= */

    const navLinks = [
        {
            label: navText.gifts,
            id: "gifts",
        },
        {
            label: language === "ar" ? "كبار الشخصيات" : "VIP",
            id: "vip",
        },
        {
            label: navText.host,
            id: "host",
        },
    ];

    return (
        <nav
            dir="ltr"
            className="
                relative
                z-50
                w-full
                border-b
                border-[rgba(180,140,90,0.12)]
                bg-[#FFF3E3]
                font-[Nunito]
            "
        >
            {/* =====================================
                MAIN NAVBAR
            ===================================== */}

            <div
                dir="ltr"
                className={`
                    mx-auto
                    flex
                    h-[62px]
                    w-full
                    max-w-[1160px]
                    items-center
                    justify-between
                    px-4
                    sm:px-6
                    lg:px-0

                    ${language === "ar" ? "flex-row-reverse" : "flex-row"}
                `}
            >
                {/* =====================================
                    LOGO
                ===================================== */}

                <button
                    type="button"
                    onClick={() => scrollToSection("hero")}
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-2
                    "
                >
                    <div
                        className="
                            flex
                            h-[30px]
                            w-[30px]
                            items-center
                            justify-center
                            rounded-[9px]
                            bg-[#201815]
                        "
                    >
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

                    <span
                        dir={language === "ar" ? "rtl" : "ltr"}
                        className="
                            whitespace-nowrap
                            text-[15px]
                            font-extrabold
                            leading-[100%]
                            text-[#3A2A24]
                        "
                    >
                        {language === "ar" ? "بابل" : "Babble"}
                    </span>
                </button>

                {/* =====================================
                    DESKTOP NAVIGATION
                ===================================== */}

                <div
                    dir="ltr"
                    className="
                        hidden
                        items-center
                        gap-14
                        lg:flex
                    "
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            type="button"
                            onClick={() => scrollToSection(link.id)}
                            className="
                                text-[14.5px]
                                font-extrabold
                                leading-[100%]
                                text-[#7D6A5D]
                                transition
                                duration-200
                                hover:text-[#3A2A24]
                            "
                        >
                            <span
                                dir={language === "ar" ? "rtl" : "ltr"}
                                className="
                                    inline-block
                                    whitespace-nowrap
                                "
                            >
                                {link.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* =====================================
                    NAV ACTIONS
                ===================================== */}

                <div
                    dir="ltr"
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-2
                        sm:gap-3
                    "
                >
                    {/* =====================================
                        LANGUAGE SWITCH
                    ===================================== */}

                    <div
                        dir="ltr"
                        className="
                            flex
                            items-center
                            rounded-full
                            border
                            border-[#E8D9C6]
                            bg-white
                            p-[3px]
                            shadow-sm
                        "
                    >
                        <button
                            type="button"
                            onClick={() => changeLanguage("en")}
                            className={`
                                rounded-full
                                px-2
                                py-[5px]
                                text-[12px]
                                font-extrabold
                                leading-[100%]
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
                            type="button"
                            onClick={() => changeLanguage("ar")}
                            disabled={translating}
                            className={`
                                rounded-full
                                px-2
                                py-[5px]
                                text-[12px]
                                font-extrabold
                                leading-[100%]
                                transition
                                sm:px-3
                                sm:text-[13px]

                                ${
                                    language === "ar"
                                        ? "bg-[#FF6F5A] text-white"
                                        : "text-[#8B776A]"
                                }

                                ${translating ? "cursor-wait opacity-70" : ""}
                            `}
                        >
                            {translating && language === "ar" ? "..." : "عربي"}
                        </button>
                    </div>

                    {/* =====================================
                        DESKTOP SIGN IN
                    ===================================== */}

                    <button
                        type="button"
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
                            alt=""
                            className="
                                h-[24px]
                                w-[24px]
                                object-contain
                            "
                        />

                        <span
                            dir={language === "ar" ? "rtl" : "ltr"}
                            className="
                                whitespace-nowrap
                                text-[13px]
                                font-extrabold
                                text-[#3A2A24]
                            "
                        >
                            {navText.signIn}
                        </span>
                    </button>

                    {/* =====================================
                        DESKTOP GET APP
                    ===================================== */}

                    <button
                        type="button"
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
                            text-white
                            shadow-[0_5px_14px_rgba(255,96,82,0.28)]
                            transition
                            duration-200
                            hover:-translate-y-[1px]
                            lg:block
                        "
                    >
                        <span
                            dir={language === "ar" ? "rtl" : "ltr"}
                            className="
                                whitespace-nowrap
                            "
                        >
                            {navText.getApp}
                        </span>
                    </button>

                    {/* =====================================
                        MOBILE MENU BUTTON
                    ===================================== */}

                    <button
                        type="button"
                        onClick={() => setMenuOpen((current) => !current)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className="
                            relative
                            flex
                            h-[36px]
                            w-[36px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#E8D9C6]
                            bg-white
                            shadow-sm
                            transition
                            duration-200
                            hover:bg-[#FFF8F0]
                            lg:hidden
                        "
                    >
                        <span
                            className={`
                                absolute
                                h-[2px]
                                w-[16px]
                                rounded-full
                                bg-[#3A2A24]
                                transition-all
                                duration-300

                                ${menuOpen ? "rotate-45" : "-translate-y-[5px]"}
                            `}
                        />

                        <span
                            className={`
                                absolute
                                h-[2px]
                                w-[16px]
                                rounded-full
                                bg-[#3A2A24]
                                transition-all
                                duration-300

                                ${
                                    menuOpen
                                        ? "scale-x-0 opacity-0"
                                        : "scale-x-100 opacity-100"
                                }
                            `}
                        />

                        <span
                            className={`
                                absolute
                                h-[2px]
                                w-[16px]
                                rounded-full
                                bg-[#3A2A24]
                                transition-all
                                duration-300

                                ${menuOpen ? "-rotate-45" : "translate-y-[5px]"}
                            `}
                        />
                    </button>
                </div>
            </div>

            {/* =====================================
                MOBILE DROPDOWN
                IMPORTANT:
                absolute = does NOT push Hero down
            ===================================== */}

            {menuOpen && (
                <div
                    className="
                        absolute
                        left-0
                        right-0
                        top-full
                        z-50
                        border-t
                        border-[rgba(180,140,90,0.12)]
                        bg-[#FFF3E3]
                        shadow-[0_14px_30px_rgba(60,40,25,0.12)]
                        lg:hidden
                    "
                >
                    <div
                        dir={language === "ar" ? "rtl" : "ltr"}
                        className="
                            mx-auto
                            flex
                            w-full
                            max-w-[1160px]
                            flex-col
                            px-4
                            pb-5
                            pt-3
                            sm:px-6
                        "
                    >
                        {/* =====================================
                            MOBILE LINKS
                        ===================================== */}

                        <div
                            className="
                                flex
                                flex-col
                                gap-1
                            "
                        >
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    type="button"
                                    onClick={() => scrollToSection(link.id)}
                                    className={`
                                        w-full
                                        rounded-[10px]
                                        px-4
                                        py-[11px]
                                        text-[13px]
                                        font-extrabold
                                        text-[#7D6A5D]
                                        transition
                                        duration-200
                                        hover:bg-white
                                        hover:text-[#3A2A24]

                                        ${
                                            language === "ar"
                                                ? "text-right"
                                                : "text-left"
                                        }
                                    `}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* =====================================
                            MOBILE ACTIONS
                        ===================================== */}

                        <div
                            dir="ltr"
                            className="
                                mt-3
                                grid
                                w-full
                                grid-cols-2
                                gap-2
                            "
                        >
                            {/* =====================================
                                MOBILE SIGN IN
                            ===================================== */}

                            <button
                                type="button"
                                className="
                                    flex
                                    min-h-[42px]
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-[10px]
                                    border
                                    border-[#E8D9C6]
                                    bg-white
                                    px-3
                                    text-[12px]
                                    font-extrabold
                                    text-[#3A2A24]
                                    shadow-sm
                                    sm:text-[13px]
                                "
                            >
                                <img
                                    src={avatarMini}
                                    alt=""
                                    className="
                                        h-[22px]
                                        w-[22px]
                                        shrink-0
                                        object-contain
                                    "
                                />

                                <span
                                    dir={language === "ar" ? "rtl" : "ltr"}
                                    className="
                                        whitespace-nowrap
                                        text-center
                                    "
                                >
                                    {navText.signIn}
                                </span>
                            </button>

                            {/* =====================================
                                MOBILE GET APP
                            ===================================== */}

                            <button
                                type="button"
                                onClick={() => scrollToSection("download")}
                                className="
                                    flex
                                    min-h-[42px]
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    bg-gradient-to-r
                                    from-[#FF8A4C]
                                    to-[#FF5F67]
                                    px-3
                                    text-[12px]
                                    font-extrabold
                                    text-white
                                    shadow-[0_5px_14px_rgba(255,96,82,0.18)]
                                    transition
                                    duration-200
                                    hover:-translate-y-[1px]
                                    sm:text-[13px]
                                "
                            >
                                <span
                                    dir={language === "ar" ? "rtl" : "ltr"}
                                    className="
                                        whitespace-nowrap
                                        text-center
                                    "
                                >
                                    {navText.getApp}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
