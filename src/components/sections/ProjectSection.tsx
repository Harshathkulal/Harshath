import AnimationContainer from "../utils/AnimationContainer";
import SectionContainer from "../utils/SectionContainer";
import ProjectCards from "../contents/ProjectCards";

const ProjectSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center w-full mt-0 lg:mt-8">
        <h1 className="text-4xl md:text-5xl tracking-wide text-white !leading-[1.5] text-center font-semibold capitalize">
          Projects
        </h1>

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8 items-center">
          <p className="text-base text-justify lg:text-start lg:leading-8 text-neutral-200">
            Welcome To My Digital Playground.
          </p>

          <ProjectCards />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
