import React from "react";
import AnimationContainer from "./utils/AnimationContainer";

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        About me
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        I am currently on an exciting journey in the field of software
        development, crafting engaging and responsive web applications with{" "}
        <strong>React</strong>. Also Levaraging adaptivity in{" "}
        <strong>Next js</strong>. My skills and knowledge Revolves around
        MERN,Tailwind. Apart from coding, I try to bring a holistic approach to
        web development and a strong desire to learn and grow every day.
        Let&apos;s build something amazing together! ✨
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
