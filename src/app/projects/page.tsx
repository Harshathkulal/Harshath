import SectionContainer from "@/components/utils/SectionContainer";
import AnimationContainer from "@/components/utils/AnimationContainer";
import AllProjects from "@/components/AllProjects";
import React from "react";

const Projects = () => {
  return (
    <main className="relative flex flex-col items-center justify-center px-0 md:px-4 !z-[999] pt-20 bg-black">
      <SectionContainer>
        <div className="flex flex-col items-center w-full mt-0 lg:mt-8">
          <h1 className="text-4xl md:text-5xl tracking-wide text-white !leading-[1.5] text-center font-semibold capitalize">
            Projects
          </h1>

          <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8 items-center">
            <p className="text-base text-justify lg:text-start lg:leading-8 text-neutral-200">
              Welcome To My Digital Playground.
            </p>

            <AllProjects />
          </AnimationContainer>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Projects;
