"use client";

import { useRef } from "react";
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
gsap.registerPlugin(Draggable);

const Moodboard = () => {
  // const constraintsRef = useRef(null);
  const container = useRef(null);

  // useGSAP(() => {
  //   gsap.to(".img-1", {
  //     x: 100,
  //     duration: 1,
  //   });
  // });

  Draggable.create(".img-1", {
    type: "x",
    bounds: ".container",
  });

  return (
    <div className="min-h-screen">
      <div ref={container}>
        {" "}
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Images</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="z-10 flex gap-2 overflow-auto">
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
              className="img-1"
            />
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <Card className="z-0 h-[500px]">
        <CardHeader>
          <CardTitle>Moodboard</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Moodboard;
