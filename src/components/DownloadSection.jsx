const DownloadSection = () => {
    const rooms = [
        {
            color: "#FFE5B5",
        },
        {
            color: "#E5D6FA",
        },
        {
            color: "#D8E8FA",
        },
    ];

    return (
        <section
            id="download"
            className="
        bg-[#FFF3E3]
        py-12
        sm:py-16
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
                <div
                    className="
            grid
            min-h-[300px]
            grid-cols-1
            items-center
            gap-8
            rounded-[18px]
            bg-[#3A281E]
            px-6
            py-10
            sm:px-10
            md:grid-cols-[1fr_250px]
            md:gap-8
            md:px-14
            md:py-8
            lg:grid-cols-[1fr_270px]
            lg:gap-8
          "
                >
                    {/* LEFT CONTENT */}
                    <div className="max-w-[460px]">
                        <h2
                            className="
                font-[Baloo_2]
                text-[28px]
                font-extrabold
                leading-[1.2]
                text-white
                sm:text-[32px]
              "
                        >
                            Babble is better on your
                            <br />
                            phone
                        </h2>

                        <p
                            className="
                mt-3
                max-w-[390px]
                font-[Nunito]
                text-[12px]
                font-semibold
                leading-[1.5]
                text-[#E4D7CD]
                sm:text-[13px]
              "
                        >
                            Get the full experience — live rooms, gifting, chat,
                            and rewards available in Arabic and English.
                        </p>

                        {/* STORE BUTTONS */}
                        <div
                            className="
                mt-5
                flex
                flex-wrap
                gap-3
              "
                        >
                            {/* APP STORE */}
                            <a
                                href="#"
                                className="
    flex
    items-center
    gap-2
    rounded-[8px]
    bg-white
    px-4
    py-[9px]
    font-[Nunito]
    text-[11px]
    font-extrabold
    text-[#3A281E]
    shadow-[0_4px_12px_rgba(0,0,0,0.12)]
    transition
    duration-200
    hover:-translate-y-[1px]
  "
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-[18px] w-[18px] shrink-0"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z" />
                                </svg>

                                <span>App Store</span>
                            </a>

                            {/* GOOGLE PLAY */}
                            <a
                                href="#"
                                className="
    flex
    items-center
    gap-2
    rounded-[8px]
    bg-white
    px-4
    py-[9px]
    font-[Nunito]
    text-[11px]
    font-extrabold
    text-[#3A281E]
    shadow-[0_4px_12px_rgba(0,0,0,0.12)]
    transition
    duration-200
    hover:-translate-y-[1px]
  "
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-[18px] w-[18px] shrink-0"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill="#34A853"
                                        d="M3 3.5v17l9.8-8.5L3 3.5Z"
                                    />
                                    <path
                                        fill="#4285F4"
                                        d="M15.6 9.6 12.8 12 3 3.5c.5-.5 1.2-.6 1.9-.2l10.7 6.3Z"
                                    />
                                    <path
                                        fill="#FBBC04"
                                        d="m15.6 14.4-10.7 6.3c-.7.4-1.4.3-1.9-.2l9.8-8.5 2.8 2.4Z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="m20.1 11-4.5-2.6-2.8 2.4 2.8 2.4 4.5-2.6c.9-.5.9-1.1 0-1.6Z"
                                    />
                                </svg>

                                <span>Google Play</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE PHONE */}
                    <div
                        className="
              flex
              w-full
              justify-center
              md:justify-end
              md:pr-1
              lg:pr-3
            "
                    >
                        <div
                            className="
                relative
                h-[280px]
                w-[138px]
                rounded-[28px]
                bg-[#17100D]
                p-[6px]
                shadow-[0_18px_38px_rgba(0,0,0,0.35)]
                sm:h-[300px]
                sm:w-[148px]
                lg:h-[310px]
                lg:w-[154px]
              "
                        >
                            {/* PHONE NOTCH */}
                            <div
                                className="
                  absolute
                  left-1/2
                  top-[6px]
                  z-10
                  h-[13px]
                  w-[44px]
                  -translate-x-1/2
                  rounded-b-[10px]
                  bg-[#17100D]
                "
                            />

                            {/* PHONE SCREEN */}
                            <div
                                className="
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[22px]
                  bg-[#FFF3E3]
                  px-[9px]
                  pb-3
                  pt-[24px]
                "
                            >
                                {/* APP NAME */}
                                <div
                                    className="
                    mb-4
                    font-[Baloo_2]
                    text-[9px]
                    font-extrabold
                    text-[#FF744E]
                  "
                                >
                                    Babble
                                </div>

                                {/* ROOM CARDS */}
                                {rooms.map((room, index) => (
                                    <div
                                        key={index}
                                        className="
                      mb-2
                      flex
                      items-center
                      gap-[6px]
                      rounded-[10px]
                      bg-white
                      px-[6px]
                      py-[7px]
                      shadow-[0_3px_7px_rgba(0,0,0,0.04)]
                    "
                                    >
                                        {/* ROOM AVATAR */}
                                        <div
                                            className="
                        h-[20px]
                        w-[20px]
                        shrink-0
                        rounded-[6px]
                      "
                                            style={{
                                                backgroundColor: room.color,
                                            }}
                                        />

                                        {/* FAKE TEXT */}
                                        <div
                                            className="
                        flex
                        flex-1
                        flex-col
                        gap-[4px]
                      "
                                        >
                                            <span
                                                className="
                          h-[4px]
                          w-full
                          rounded
                          bg-[#EEDFD0]
                        "
                                            />

                                            <span
                                                className="
                          h-[4px]
                          w-2/3
                          rounded
                          bg-[#EEDFD0]
                        "
                                            />
                                        </div>

                                        {/* JOIN */}
                                        <span
                                            className="
                        shrink-0
                        rounded-full
                        bg-gradient-to-r
                        from-[#FF8A4C]
                        to-[#FF5F67]
                        px-[6px]
                        py-[3px]
                        font-[Nunito]
                        text-[6px]
                        font-extrabold
                        text-white
                      "
                                        >
                                            Join
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
