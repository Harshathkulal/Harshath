import ContactMe from "../contents/ContactMe";
import AnimationContainer from "../utils/AnimationContainer";
import SectionContainer from "../utils/SectionContainer";

const ContactSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center w-full mt-0 lg:mt-8 ">
        <h1 className="mb-8 text-4xl md:text-5xl tracking-wide text-white !leading-[1.5] text-center font-semibold capitalize">
          Contact
        </h1>

        <AnimationContainer customClassName="w-full flex flex-col relative gap-5 mb-8">
          <ContactMe />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
