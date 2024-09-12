import Image from "next/image";
import { Suspense} from "react";
import AnimationContainer from "../utils/AnimationContainer";
import dynamic from 'next/dynamic';

const Beam = dynamic(() => import("@/components/beam").then(module => module.Beam), {
  suspense: true,
});

const Beam2 = dynamic(() => import("@/components/beam").then(module => module.Beam2), {
  suspense: true,
});

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between w-full py-6 lg:py-16 lg:flex-row">
      <AnimationContainer customClassName="flex flex-col items-center justify-between max-w-lg lg:items-start p-0 lg:pr-8">
        <Suspense fallback={<div />}>
          <Beam />
          <Beam2 />
        </Suspense>

        <h3 className="text-sm lg:text-xl text-white/80">
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
      </AnimationContainer>

      <AnimationContainer customClassName="mb-8 relative lg:mb-0">
        <Image
          src="https://res.cloudinary.com/dqijpkpsr/image/upload/v1726142769/profilepic_jwrcd4.jpg"
          alt="Harshath Kulal"
          height={500}
          width={500}
          sizes="30vw"
          className="object-cover object-top w-32 h-32 transition duration-300 ease-out rounded-full filter grayscale hover:grayscale-0 lg:w-40 lg:h-40"
          priority
        />
        <div className="absolute block w-44 h-44 rounded-full md:hidden top-0 left-0 right-1/2 -z-10 bg-violet-500/40 blur-[3rem]"></div>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
