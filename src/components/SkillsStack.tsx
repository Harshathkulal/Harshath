import TechIcons from "@/components/icons/TechIcons";
import AnimationContainer from "@/components/utils/AnimationContainer";

const SkillsStack = () => {
  return (
    <AnimationContainer customClassName="flex flex-col justify-center items-center lg:items-start mb-5 mx-auto lg:mx-0">
      <div className="flex flex-col items-center justify-center lg:items-start">
        <TechIcons />
      </div>
    </AnimationContainer>
  );
};

export default SkillsStack;
