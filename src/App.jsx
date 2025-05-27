import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      {/* <LogoSection /> */}
      <FeatureCards />
      <ExperienceSection />
    </>
  );
};

export default App;
