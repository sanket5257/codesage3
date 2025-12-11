import { Icon } from "@iconify/react/dist/iconify.js";

const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
}) => {
  // Create enough items to fill the screen and ensure smooth scrolling
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase ${className}`}
    >
      <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {repeatedItems.map((text, index) => (
          <div
            key={index}
            className="flex items-center px-8 md:px-16 gap-x-8 md:gap-x-16 flex-shrink-0"
          >
            <span className="whitespace-nowrap">{text}</span>
            <Icon icon={icon} className={`${iconClassName} flex-shrink-0`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;