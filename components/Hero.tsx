import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
// import Image from "next/image";

const Hero = () => {
  return (
    <section className="heroImage mx-auto flex h-[800px] w-full pt-24 md:items-center">
      <div className="ml-8 flex w-full flex-col md:ml-32 md:w-1/3">
        <h1 className="mb-4 w-3/4 items-start text-3xl font-semibold text-black lg:text-4xl">
          Discover{" "}
          <span className="relative inline-block">
            Your{" "}
            {/* <Image
              src="/images/curve.png"
              className="absolute left-0 top-full w-16 md:w-full xl:-mt-2"
              width={624}
              height={28}
              alt="curve"
            /> */}
          </span>
          <span className="block md:inline-block">Fashion Style</span>
        </h1>
        <p className="mb-8 mt-2 hidden md:flex">
          Take our quiz to find out your unique fashion style!
        </p>
        <Button asChild size="sm" className="w-1/4 md:w-3/4">
          <Link href="/">Start Quiz</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
