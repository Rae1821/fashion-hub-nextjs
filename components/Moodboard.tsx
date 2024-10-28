"use client";

import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
// cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js

gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(Draggable);

const Moodboard = () => {
  // const constraintsRef = useRef(null);
  const imageRef = useRef(null);

  // useGSAP(() => {
  //   gsap.to(".img-1", {
  //     x: 100,
  //     duration: 1,
  //   });
  // });

  // Draggable.create(".img", {
  //   type: "x,y",
  //   bounds: ".container",
  // });

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(imageRef.current, {
      bounds: "#container",
    });
  });

  return (
    <div id="container" className="min-h-screen">
      <h2>Uploaded Images</h2>
      <div className="flex gap-2">
        <div ref={imageRef}>
          <Image
            src="/images/black-booties.png"
            height={350}
            width={350}
            alt="booties"
          />
        </div>
        <div>
          <Image
            src="/images/black-booties.png"
            height={350}
            width={350}
            alt="booties"
          />
        </div>
      </div>
      <div className="h-[600px] w-full">
        <p>Moodboard</p>
      </div>
      <div>
        <h2>Favorite Products</h2>
        <div>
          <div>
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />
          </div>
          <div>
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />
          </div>
        </div>
      </div>
      <div>
        {" "}
        {/* <Card className="h-[1000px]">
          <CardHeader>
            <CardTitle>Uploaded Images</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <div ref={imageRef}>
              <Image
                src="/images/black-booties.png"
                height={350}
                width={350}
                alt="booties"
              />
            </div>
            <div>
              <Image
                src="/images/black-booties.png"
                height={350}
                width={350}
                alt="booties"
              />
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card> */}
      </div>
    </div>
  );
};

export default Moodboard;
