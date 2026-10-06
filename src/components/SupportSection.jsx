import { useEffect, useMemo, useState } from "react";

import { useLanguage } from "../context/LanguageContext.jsx";

/* =========================================
   CONTACT DATA
========================================= */

const contactItems = [
    {
        icon: "ID",
        label: "Official ID Number",
        value: "[+966 50 180 8167]",
        bg: "#D8EEFF",
    },
    {
        icon: "📱",
        label: "Mobile / Contact",
        value: "[50 180 8167]",
        bg: "#DCF6E4",
    },
    {
        icon: "💬",
        label: "WhatsApp",
        value: "[+966 50 180 8167]",
        bg: "#EEE2FF",
    },
];

/* =========================================
   ENGLISH SOURCE TEXT
========================================= */

const DEFAULT_SUPPORT_TEXT = {
    title: "We're here to help",

    intro: "Reach the Babble team directly, or send feedback, a rating, or a complaint below.",

    formTitle: "Feedback, rating & complaints",

    formDescription: "We read every message.",

    name: "Name",

    namePlaceholder: "Your name",

    email: "Email",

    emailPlaceholder: "you@example.com",

    rating: "Rating",

    message: "Message",

    messagePlaceholder: "Tell us what's on your mind...",

    submit: "Send Message",
};

const SupportSection = () => {
    const { language, translateSection } = useLanguage();

    const isArabic = language !== "en";

    const [rating, setRating] = useState(0);

    const [translations, setTranslations] = useState({});

    const [translating, setTranslating] = useState(false);

    /* =========================================
     ARABIC LOCALISATION
  ========================================= */

    const localizeSupportText = (text) => {
        const value = String(text ?? "");

        if (!isArabic) {
            return value;
        }

        return value
            .replace(/\bBabble\b/gi, "بابل")
            .replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);
    };

    /* =========================================
     TRANSLATE SUPPORT SECTION
  ========================================= */

    useEffect(() => {
        let active = true;

        const loadSupportTranslation = async () => {
            if (language === "en") {
                setTranslations({});
                setTranslating(false);

                return;
            }

            try {
                setTranslating(true);

                const sourceTexts = [
                    DEFAULT_SUPPORT_TEXT.title,
                    DEFAULT_SUPPORT_TEXT.intro,
                    DEFAULT_SUPPORT_TEXT.formTitle,
                    DEFAULT_SUPPORT_TEXT.formDescription,
                    DEFAULT_SUPPORT_TEXT.name,
                    DEFAULT_SUPPORT_TEXT.namePlaceholder,
                    DEFAULT_SUPPORT_TEXT.email,
                    DEFAULT_SUPPORT_TEXT.emailPlaceholder,
                    DEFAULT_SUPPORT_TEXT.rating,
                    DEFAULT_SUPPORT_TEXT.message,
                    DEFAULT_SUPPORT_TEXT.messagePlaceholder,
                    DEFAULT_SUPPORT_TEXT.submit,

                    ...contactItems.map((item) => item.label),
                ];

                const uniqueTexts = [...new Set(sourceTexts)];

                const translated = await translateSection(
                    "support",
                    uniqueTexts,
                );

                if (!active) {
                    return;
                }

                setTranslations(translated || {});
            } catch (error) {
                console.error("Support translation failed:", error);

                if (active) {
                    setTranslations({});
                }
            } finally {
                if (active) {
                    setTranslating(false);
                }
            }
        };

        loadSupportTranslation();

        return () => {
            active = false;
        };
    }, [language, translateSection]);

    /* =========================================
     TRANSLATION HELPER
  ========================================= */

    const tr = (text) => {
        if (language === "en") {
            return text;
        }

        const translated = translations?.[text];

        const result = translated && translated.trim() ? translated : text;

        return localizeSupportText(result);
    };

    /* =========================================
     TRANSLATED CONTACTS
  ========================================= */

    const translatedContacts = useMemo(() => {
        return contactItems.map((item) => ({
            ...item,

            translatedLabel: tr(item.label),

            translatedValue: localizeSupportText(item.value),
        }));
    }, [language, translations]);

    /* =========================================
     SUBMIT
  ========================================= */

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Feedback submitted");
    };

    return (
        <section
            id="help"
            className="
        bg-white
        py-16
        md:py-20
      "
        >
            <div
                dir="ltr"
                className="
          mx-auto
          grid
          w-full
          max-w-[1160px]
          grid-cols-1
          gap-12
          px-4
          sm:px-6
          lg:grid-cols-2
          lg:gap-16
          lg:px-0
        "
            >
                {/* =================================
            LEFT SIDE
        ================================= */}

                <div>
                    <h2
                        dir={isArabic ? "rtl" : "ltr"}
                        className={`
              font-[Baloo_2]
              text-[34px]
              font-extrabold
              leading-[1.1]
              text-[#3A281E]
              sm:text-[40px]

              ${isArabic ? "text-right" : "text-left"}
            `}
                    >
                        {tr(DEFAULT_SUPPORT_TEXT.title)}
                    </h2>

                    {/* CONTACT ITEMS */}

                    <div
                        className="
              mt-10
              flex
              flex-col
              gap-4
            "
                    >
                        {translatedContacts.map((item, index) => (
                            <div
                                key={index}
                                dir="ltr"
                                className="
                    flex
                    items-center
                    gap-4
                    rounded-[18px]
                    bg-white
                    px-4
                    py-[14px]
                    shadow-[0_8px_24px_rgba(70,45,30,0.07)]
                  "
                            >
                                {/* ICON */}

                                <div
                                    className="
                      flex
                      h-[42px]
                      w-[42px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[11px]
                      font-[Nunito]
                      text-[13px]
                      font-extrabold
                      text-[#3A281E]
                    "
                                    style={{
                                        backgroundColor: item.bg,
                                    }}
                                >
                                    {item.icon}
                                </div>

                                {/* TEXT */}

                                <div
                                    dir={isArabic ? "rtl" : "ltr"}
                                    className={`
                      min-w-0
                      flex-1

                      ${isArabic ? "text-right" : "text-left"}
                    `}
                                >
                                    <p
                                        className="
                        font-[Nunito]
                        text-[10px]
                        font-bold
                        text-[#A88D7C]
                      "
                                    >
                                        {item.translatedLabel}
                                    </p>

                                    <p
                                        dir="ltr"
                                        className="
                        mt-[2px]
                        inline-block
                        font-[Nunito]
                        text-[13px]
                        font-extrabold
                        text-[#3A281E]
                      "
                                    >
                                        {item.translatedValue}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* =================================
            RIGHT SIDE
        ================================= */}

                <div
                    dir={isArabic ? "rtl" : "ltr"}
                    className={isArabic ? "text-right" : "text-left"}
                >
                    <p
                        className="
              mb-8
              max-w-[430px]
              font-[Nunito]
              text-[14px]
              font-bold
              leading-[1.5]
              text-[#806E61]
            "
                    >
                        {tr(DEFAULT_SUPPORT_TEXT.intro)}
                    </p>

                    {/* =================================
              FORM
          ================================= */}

                    <form
                        onSubmit={handleSubmit}
                        className="
              rounded-[20px]
              bg-white
              p-5
              shadow-[0_12px_32px_rgba(70,45,30,0.07)]
              sm:p-6
            "
                    >
                        <h3
                            className="
                font-[Baloo_2]
                text-[20px]
                font-extrabold
                text-[#3A281E]
              "
                        >
                            {tr(DEFAULT_SUPPORT_TEXT.formTitle)}
                        </h3>

                        <p
                            className="
                mt-1
                font-[Nunito]
                text-[11px]
                font-semibold
                text-[#9A8375]
              "
                        >
                            {tr(DEFAULT_SUPPORT_TEXT.formDescription)}
                        </p>

                        {/* NAME */}

                        <div className="mt-6">
                            <label
                                className="
                  mb-2
                  block
                  font-[Nunito]
                  text-[11px]
                  font-extrabold
                  text-[#806E61]
                "
                            >
                                {tr(DEFAULT_SUPPORT_TEXT.name)}
                            </label>

                            <input
                                type="text"
                                placeholder={tr(
                                    DEFAULT_SUPPORT_TEXT.namePlaceholder,
                                )}
                                dir={isArabic ? "rtl" : "ltr"}
                                className="
                  h-[48px]
                  w-full
                  rounded-[11px]
                  border
                  border-[#EBC79F]
                  bg-[#FFFDF9]
                  px-4
                  font-[Nunito]
                  text-[13px]
                  text-[#3A281E]
                  outline-none
                  transition
                  placeholder:text-[#B5A79B]
                  focus:border-[#FF9A58]
                  focus:ring-2
                  focus:ring-[#FF9A58]/10
                "
                            />
                        </div>

                        {/* EMAIL */}

                        <div className="mt-4">
                            <label
                                className="
                  mb-2
                  block
                  font-[Nunito]
                  text-[11px]
                  font-extrabold
                  text-[#806E61]
                "
                            >
                                {tr(DEFAULT_SUPPORT_TEXT.email)}
                            </label>

                            <input
                                type="email"
                                placeholder={
                                    isArabic
                                        ? "مثال@البريد.كوم"
                                        : DEFAULT_SUPPORT_TEXT.emailPlaceholder
                                }
                                dir={isArabic ? "rtl" : "ltr"}
                                className="
                  h-[48px]
                  w-full
                  rounded-[11px]
                  border
                  border-[#EBC79F]
                  bg-[#FFFDF9]
                  px-4
                  font-[Nunito]
                  text-[13px]
                  text-[#3A281E]
                  outline-none
                  transition
                  placeholder:text-[#B5A79B]
                  focus:border-[#FF9A58]
                  focus:ring-2
                  focus:ring-[#FF9A58]/10
                "
                            />
                        </div>

                        {/* RATING */}

                        <div className="mt-5">
                            <label
                                className="
                  mb-2
                  block
                  font-[Nunito]
                  text-[11px]
                  font-extrabold
                  text-[#806E61]
                "
                            >
                                {tr(DEFAULT_SUPPORT_TEXT.rating)}
                            </label>

                            <div
                                dir="ltr"
                                className="
                  flex
                  gap-1
                "
                            >
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        className="
                        text-[25px]
                        leading-none
                        transition
                        hover:scale-110
                      "
                                    >
                                        <span
                                            className={
                                                star <= rating
                                                    ? "text-[#FF9A4C]"
                                                    : "text-[#3A281E]"
                                            }
                                        >
                                            ★
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* MESSAGE */}

                        <div className="mt-5">
                            <label
                                className="
                  mb-2
                  block
                  font-[Nunito]
                  text-[11px]
                  font-extrabold
                  text-[#806E61]
                "
                            >
                                {tr(DEFAULT_SUPPORT_TEXT.message)}
                            </label>

                            <textarea
                                rows="5"
                                placeholder={tr(
                                    DEFAULT_SUPPORT_TEXT.messagePlaceholder,
                                )}
                                dir={isArabic ? "rtl" : "ltr"}
                                className="
                  min-h-[110px]
                  w-full
                  resize-none
                  rounded-[11px]
                  border
                  border-[#EBC79F]
                  bg-[#FFFDF9]
                  px-4
                  py-3
                  font-[Nunito]
                  text-[13px]
                  text-[#3A281E]
                  outline-none
                  transition
                  placeholder:text-[#B5A79B]
                  focus:border-[#FF9A58]
                  focus:ring-2
                  focus:ring-[#FF9A58]/10
                "
                            />
                        </div>

                        {/* BUTTON */}

                        <button
                            type="submit"
                            className="
                mt-5
                w-full
                rounded-full
                bg-gradient-to-r
                from-[#FFA34D]
                to-[#FF4F67]
                px-6
                py-[14px]
                font-[Nunito]
                text-[13px]
                font-extrabold
                text-white
                shadow-[0_8px_20px_rgba(255,100,80,0.24)]
                transition
                duration-200
                hover:-translate-y-[1px]
                hover:shadow-[0_12px_26px_rgba(255,100,80,0.32)]
              "
                        >
                            {tr(DEFAULT_SUPPORT_TEXT.submit)}
                        </button>
                    </form>
                </div>

                {/* ACCESSIBLE TRANSLATION STATE */}

                {translating && isArabic && (
                    <span className="sr-only">Translating support section</span>
                )}
            </div>
        </section>
    );
};

export default SupportSection;
