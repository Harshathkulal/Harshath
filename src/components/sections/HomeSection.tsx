import React, { Suspense, lazy } from "react";
import SectionContainer from "../utils/SectionContainer";
import Loader from "../ui/Loader";
const Hero = lazy(() => import("../contents/Hero"));
const SkillsStack = lazy(() => import("../contents/SkillsStack"));
const AboutMe = lazy(() => import("../contents/AboutMe"));
const Experience = lazy(() => import("../contents/Experience"));
const FeaturedProjects = lazy(() => import("../contents/FeaturedProjects"));
const InfiniteMovingCardsDemo = lazy(() => import("../contents/Skill"));
const ContactMe = lazy(() => import("../contents/ContactMe"));

const HomeSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-start w-full">
        <Suspense fallback={<Loader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <SkillsStack />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <AboutMe />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <FeaturedProjects />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <InfiniteMovingCardsDemo />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ContactMe />
        </Suspense>
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
