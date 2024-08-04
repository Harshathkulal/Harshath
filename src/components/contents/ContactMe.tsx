"use client";

import AnimationContainer from "../utils/AnimationContainer";
import React from "react";

const ContactMe = () => {
  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <div className="flex-col items-center mb-8 lg:items-start">
        <h2 className="text-2xl font-bold tracking-tight text-center text-white lg:text-start">
          Get in Touch
        </h2>
        <p className="mt-2 font-normal text-center lg:text-start text-neutral-300">
          Feel free to drop me a message.
        </p>
      </div>
    </AnimationContainer>
  );
};

export default ContactMe;
