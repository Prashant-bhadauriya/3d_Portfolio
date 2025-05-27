import { logoIconsList } from "../constants";

const LogoIcon = ({ logo }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={logo.imgPath} alt={logo.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <>
      <div className="md:my-20 my-10 relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-22">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((logo, index) => (
              <LogoIcon key={index} logo={logo} />
            ))}

            {logoIconsList.map((logo, index) => (
              <LogoIcon key={index} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSection;
