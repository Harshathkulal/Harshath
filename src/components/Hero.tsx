import Image from "next/image";
import AnimationContainer from "@/components/utils/AnimationContainer";

import { Beam, Beam2 } from "@/components/utils/beam";

const Hero = () => {
  return (
    <>
      <AnimationContainer customClassName="relative flex flex-col-reverse items-center justify-between w-full py-6 lg:py-16 lg:flex-row">
        <div className="flex flex-col items-center justify-between max-w-lg lg:items-start p-0 lg:pr-8">
          <Beam />
          <Beam2 />

          <h3 className="text-sm lg:text-xl text-white/80 pt-4">
            Greetings, Code Craftsman <span className="text-white">🚀</span>
          </h3>
          <h1 className="py-2 text-xl font-bold text-white lg:py-4 sm:text-3xl lg:text-5xl">
            Harshath Kulal
          </h1>
          <h3 className="text-base text-center lg:text-start lg:text-lg text-white/80">
            <span className="font-medium text-white">
              Bridging Code and Design{" "}
            </span>
            to craft elegant and effective web applications.
          </h3>
        </div>
        <Image
          src="https://res.cloudinary.com/dqijpkpsr/image/upload/v1726142769/profilepic_jwrcd4.jpg"
          alt="Harshath Kulal"
          height={500}
          width={500}
          sizes="30vw"
          className="object-cover object-top w-32 h-32 transition duration-300 ease-out rounded-full filter grayscale hover:grayscale-0 lg:w-40 lg:h-40"
          priority
        />
        <div className="absolute block w-36 h-36 rounded-full md:hidden top-2 left-0 right-1/2 -z-10 bg-sky-500/30 blur-[5rem]"></div>
        <div className="absolute block w-36 h-36 rounded-full md:hidden top-2 left-1/2 right-0 -z-10 bg-sky-500/30 blur-[5rem]"></div>
      </AnimationContainer>
    </>
  );
};

export default Hero;
