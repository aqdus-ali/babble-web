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
    <section className="icon-marquee bg-[#FFF3E3]">
      <div className="marquee-track">

        {repeatedIcons.map((icon, index) => (
          <div
            key={`${icon}-${index}`}
            className="mq-icon"
            // {is used for the animation delay.}
            style={{
              "--i": index % icons.length,
            }}
          >
            <img
              src={icon}
              alt={`Babble icon ${index % icons.length + 1}`}
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default IconMarquee;