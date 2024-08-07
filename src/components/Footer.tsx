import React from "react";
import AnimationContainer from "./utils/AnimationContainer";
import { GoHomeFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { Button } from "../components/ui/Button";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full mx-auto lg:max-w-screen-md">
      <hr className="w-full h-px border border-neutral-900" />
      <AnimationContainer customClassName="w-full grid grid-cols-3 place-items-center gap-2 lg:gap-4 mx-4 py-12 lg:py-8">
        
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="font-normal transition ease-out text-neutral-200 hover:opacity-70"
          >
            <GoHomeFill className="inline-block w-5 h-5 mr-2" />
            Home
          </Button>
        </Link>
        <Link href="https://github.com/Harshathkulal" target="_blank">
        <Button
          variant="ghost"
          size="sm"
          className="font-normal transition ease-out text-neutral-200 hover:opacity-70"
        >
          <FaGithub className="inline-block w-5 h-5 mr-2" />
          GitHub
        </Button>
        </Link>
        <Link href="/Cv.pdf" download target="_blank">
        <Button
          variant="ghost"
          size="sm"
          className="font-normal transition ease-out text-neutral-200 hover:opacity-70"
        >
          <IoDocumentText className="inline-block w-5 h-5 mr-2" />
          My CV
        </Button>
        </Link>
        
      </AnimationContainer>
      <p className="text-sm text-slate-400">© 2024 Harshath, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
