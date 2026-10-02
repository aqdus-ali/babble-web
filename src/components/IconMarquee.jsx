import "../styles/IconMarquee.css";

import box1 from "../assets/box-1.png";
import box2 from "../assets/box-2.png";
import box3 from "../assets/box-3.png";
import box4 from "../assets/box-4.png";
import box5 from "../assets/box-5.png";
import box6 from "../assets/box-6.png";

const icons = [
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
];

const IconMarquee = () => {
  const repeatedIcons = [
    ...icons,
    ...icons,
    ...icons,
  ];

  return (
    <section
      className="
        icon-marquee-mask
        w-full
        overflow-hidden
        bg-[#FFF3E3]
        px-3
        pb-[50px]
        pt-[60px]
        sm:px-4
        md:px-6
        lg:px-0
      "
    >
      <div
        className="
          marquee-track-animation
          flex
          w-max
          items-center
          gap-16
        "
      >
        {repeatedIcons.map((icon, index) => (
          <div
            key={`${icon}-${index}`}
            className="
              mq-wave-animation
              w-[160px]
              shrink-0
            "
            style={{
              "--i": index % icons.length,
            }}
          >
            <img
              src={icon}
              alt={`Babble icon ${index % icons.length + 1}`}
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconMarquee;