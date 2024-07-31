import React from "react";
import Link from "next/link";
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
          <Button asChild size="sm" className="w-1/4 md:w-3/4">
            <Link href="/">Start Quiz</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
