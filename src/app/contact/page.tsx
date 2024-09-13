import SectionContainer from "@/components/utils/SectionContainer";
import AnimationContainer from "@/components/utils/AnimationContainer";
import ContactMe from "@/components/ContactMe";
import React from "react";

const Contact = () => {
  return (
    <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-20">
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
    </main>
  );
};

export default Contact;
