import { useState } from "react";

const SupportSection = () => {
  const [rating, setRating] = useState(0);

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
    // {
    //   icon: "🏦",
    //   label: "Official Bank Account",
    //   value: "[+966 50 180 8167]",
    //   bg: "#FFF0C9",
    // },
    // {
    //   icon: "🏠",
    //   label: "App Room Number",
    //   value: "[+966 50 180 8167]",
    //   bg: "#FFE4E6",
    // },
  ];

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
        {/* LEFT SIDE */}
        <div>
          <h2
            className="
              font-[Baloo_2]
              text-[34px]
              font-extrabold
              leading-[1.1]
              text-[#3A281E]
              sm:text-[40px]
            "
          >
            We&apos;re here to help
          </h2>

          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
            "
          >
            {contactItems.map((item, index) => (
              <div
                key={index}
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
                <div>
                  <p
                    className="
                      font-[Nunito]
                      text-[10px]
                      font-bold
                      text-[#A88D7C]
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-[2px]
                      font-[Nunito]
                      text-[13px]
                      font-extrabold
                      text-[#3A281E]
                    "
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
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
            Reach the Babble team directly, or send feedback, a rating, or a
            complaint below.
          </p>

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
              Feedback, rating & complaints
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
              We read every message.
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
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
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
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
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
                Rating
              </label>

              <div className="flex gap-1">
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
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Tell us what's on your mind..."
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
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;