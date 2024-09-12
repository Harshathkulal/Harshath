import AboutMe from "../contents/AboutMe";
import SkillsStack from "../contents/SkillsStack";
import ContactMe from "../contents/ContactMe";
import Experience from "../contents/Experience";
import FeaturedProjects from "../contents/FeaturedProjects";
import Hero from "../contents/Hero";
import SectionContainer from "../utils/SectionContainer";
import InfiniteMovingCardsDemo from "../contents/Skill";

const HomeSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-start w-full">
        <Hero />
        <SkillsStack />
        <AboutMe />
        <Experience />
        <FeaturedProjects />
        <InfiniteMovingCardsDemo />
        <ContactMe />
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
