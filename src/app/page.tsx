import GradientBackground from "../components/utils/GradientBackground";
import React from "react";
import SectionContainer from "@/components/utils/SectionContainer";
import Hero from "@/components/Hero";
import SkillsStack from "@/components/SkillsStack";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import InfiniteMovingCardsDemo from "@/components/Skill";
import ContactMe from "@/components/ContactMe";

const Home = () => {
  return (
    <GradientBackground>
      <main className="flex flex-col items-center justify-center pt-20">
        <SectionContainer>
          <div className="relative flex flex-col items-start justify-center z-[1000] w-full px-4 text-white">
            <Hero />
            <SkillsStack />
            <AboutMe />
            <Experience />
            <FeaturedProjects />
            <InfiniteMovingCardsDemo />
            <ContactMe />
          </div>
        </SectionContainer>
      </main>
    </GradientBackground>
  );
};

export default Home;
