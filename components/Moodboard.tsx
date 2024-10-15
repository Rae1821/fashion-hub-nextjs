"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image from "next/image";

const Moodboard = () => {
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className="min-h-screen">
      <div>
        {" "}
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Images</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="z-10 flex gap-2 overflow-auto">
            <motion.div>
              <motion.div
                drag
                dragConstraints={constraintsRef}
                className="size-[100px] bg-green-300"
              />

              <Image
                src="/images/black-booties.png"
                height={350}
                width={350}
                alt="booties"
              />
            </motion.div>
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
      <div className="my-4 gap-3 overflow-scroll">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 100,
            right: 100,
          }}
        >
          <Image
            src="/images/black-booties.png"
            height={350}
            width={350}
            alt="booties"
          />
        </motion.div>
        <Card className="z-0 h-[500px]">
          <CardHeader>
            <CardTitle>Moodboard</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Moodboard;
