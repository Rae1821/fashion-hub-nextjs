import React from "react";
// import Link from "next/link";
// import { Button } from "./ui/button";
import CoolButton from "./CoolButton";
import { Button } from "./ui/button";
// import Image from "next/image";

const Hero = () => {
  return (
    <section className="heroImage mx-auto flex h-[800px] w-full pt-24 md:items-center">
      <div className="relative">
        {/* <div className="absolute block w-[300px] -skew-y-3 bg-teal-600/80 py-2 md:ml-32 md:w-[500px] md:skew-y-0 md:bg-transparent"> */}
        <div className="block w-[500px] py-2 pl-8 md:ml-32 md:w-[500px] ">
          <h1 className="relative mb-4 w-3/4 items-start text-4xl font-semibold text-black lg:text-4xl">
            Discover Your
            <span className="block md:inline-block">Fashion Style</span>
          </h1>
          <p className="mb-8 mt-2 hidden md:flex">
            Take our quiz to find out your unique fashion style!
          </p>
          <Button asChild>
            <CoolButton title="start quiz" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <a href="#_" class="relative px-6 py-3 font-bold text-black group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full border-4 border-black"></span>
<span class="relative">Button Text</span>
</a> */
}
