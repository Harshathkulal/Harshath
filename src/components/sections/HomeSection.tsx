import AboutMe from "../contents/AboutMe";
import SkillsStack from "../contents/SkillsStack";
import ContactMe from "../contents/ContactMe";
// import ContactMe from '../contents/ContactMe'

// import CurrentLearnTech from '../contents/CurrentLearnTech'
import Experience from "../contents/Experience";
import FeaturedProjects from "../contents/FeaturedProjects";
import Hero from "../contents/Hero";
// import MySkills from '../contents/MySkills'
import SectionContainer from "../utils/SectionContainer";

const HomeSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-start w-full">
        <Hero />
        <SkillsStack />
        <AboutMe />
        <Experience />
        <FeaturedProjects />
        <ContactMe />
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
