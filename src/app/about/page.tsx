import SectionContainer from "@/components/utils/SectionContainer";
import Experience from "@/components/Experience";
import AnimationContainer from "@/components/utils/AnimationContainer";
import React from "react";

const About = () => {
  return (
    <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-20 bg-black">
      <SectionContainer>
        <div className="flex flex-col items-center w-full mt-0 lg:mt-8">
          <h1 className="text-4xl md:text-5xl tracking-wide text-white !leading-[1.5] text-center font-semibold capitalize">
            About Me
          </h1>

          <Experience />

          <div className="w-full mt-8">
            <AnimationContainer customClassName="w-full flex flex-col">
              <div className="flex justify-center w-full md:justify-start">
                <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
                  Future Endeavors
                </h2>
              </div>

              <div className="w-full mb-8 space-y-5">
                Looking ahead, I&apos;m excited about creating Responsive
                Industry Ready,Productive websites. I want to make online spaces
                that feel more real and fun for users. I&apos;m also curious
                about Knowledge Sharing with new people . As part of my coding
                adventure, I hope to join others in creating cool projects
                together. I want to be a part of the worldwide community of
                developers, learn lots, and bring some exciting ideas to life.
              </div>
            </AnimationContainer>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default About;
