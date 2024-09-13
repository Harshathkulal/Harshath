"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import AnimationContainer from "@/components/utils/AnimationContainer";
import {
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiExpress,
  SiAmazonaws,
  SiDocker,
  SiBootstrap,
  SiFirebase,
  SiAngular,
  SiVercel,
  SiMysql,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiCanva,
  SiPython,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const skills = [
  { icon: <SiGraphql />, name: "GraphQL" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiAmazonaws />, name: "AWS" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiCanva />, name: "Canva" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiAngular />, name: "Angular" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
];

const InfiniteMovingCardsDemo: React.FC = () => {
  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        Skills
      </h2>
      <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      <InfiniteMovingCards items={skills} direction="left" speed="slow" />
    </AnimationContainer>
  );
};

export default InfiniteMovingCardsDemo;
