"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoShirtOutline } from "react-icons/io5";
import { HiMiniFire, HiMiniBolt } from "react-icons/hi2";

import CoolButton from "./CoolButton";
import {
  pearBodyCharacteristic,
  appleBodyCharacteristic,
  rectangleBodyCharacteristic,
  hourglassBodyCharacteristic,
  invertedTriangleBodyCharacteristic,
  classicStyle,
  bohoStyle,
  chicStyle,
  sportyStyle,
  edgyStyle,
  classicClothing,
  bohoClothing,
  chicClothing,
  sportyClothing,
  edgyClothing,
  bestPearProducts,
  bestAppleProducts,
  bestRectangleProducts,
  bestHourglassProducts,
  bestInvertedTriangleProducts,
} from "@/constants";
// import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CalculateShape from "./CalculateShape";
import StyleQuiz from "./StyleQuiz";

interface ProfileDetails {
  id: string | null;
  email: string | null;
  name: string | null;
  bodyShape: string | null;
  fashionStyle: string | null;
}

const Dashboard = ({ userProfile }: { userProfile: ProfileDetails }) => {
  // const [shapeResults, setShapeResults] = useState("");
  // const [styleResult, setStyleResult] = useState("");
  // const [profileObj, setpProfileObj] = useState({
  //   bodyShape: "",
  //   fashionStyle: "",
  // });

  // const handleCalculatorSubmit = async (
  //   event: React.FormEvent<HTMLFormElement>
  // ) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);

  //   const data = {
  //     shoulders: formData.get("shoulders") as string,
  //     waist: formData.get("waist") as string,
  //     hips: formData.get("hips") as string,
  //   };

  //   const shoulders = parseInt(data.shoulders);
  //   const waist = parseInt(data.waist);
  //   const hips = parseInt(data.hips);

  //   try {
  //     if (hips / shoulders >= 1.05 && waist < hips) {
  //       // setShapeResults("Pear");
  //       setpProfileObj({ ...profileObj, bodyShape: "Pear" });
  //     } else if (shoulders / hips >= 1.05 && waist === shoulders) {
  //       // setShapeResults("Apple");
  //       setpProfileObj({ ...profileObj, bodyShape: "Apple" });
  //     } else if (
  //       waist / shoulders <= 0.75 &&
  //       waist / hips < 0.75 &&
  //       hips * 0.95 < shoulders
  //     ) {
  //       // setShapeResults("Hourglass");
  //       setpProfileObj({ ...profileObj, bodyShape: "Hourglass" });
  //     } else if (shoulders / hips >= 1.05 && waist < shoulders) {
  //       // setShapeResults("Triangle");
  //       setpProfileObj({ ...profileObj, bodyShape: "Triangle" });
  //     } else if (waist / shoulders >= 0.75 && shoulders * 0.95 < hips) {
  //       // setShapeResults("Rectangle");
  //       setpProfileObj({ ...profileObj, bodyShape: "Rectangle" });
  //     } else if (shoulders === null || waist === null || hips === null) {
  //       console.log("Please fill in all fields");
  //     }

  //     return profileObj;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Body Shape Card  */}
        <div className="w-full">
          <Card className="relative h-[600px] w-full md:h-[560px]">
            <CardHeader>
              <CardTitle>Your Body Shape is:</CardTitle>
              <CardDescription className="pt-2 text-4xl font-semibold">
                {userProfile?.bodyShape}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <p className="font-medium">
                  Characteristics for your shape include:
                </p>
                {userProfile.bodyShape === "Pear" ? (
                  <div>
                    <ul>
                      {pearBodyCharacteristic.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <HiMiniFire />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : userProfile.bodyShape === "Apple" ? (
                  <ul>
                    {appleBodyCharacteristic.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <HiMiniFire />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.bodyShape === "Rectangle" ? (
                  <ul>
                    {rectangleBodyCharacteristic.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        {" "}
                        <HiMiniFire />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.bodyShape === "Hourglass" ? (
                  <ul>
                    {hourglassBodyCharacteristic.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        {" "}
                        <HiMiniFire />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.bodyShape === "Inverted Triangle" ? (
                  <ul>
                    {invertedTriangleBodyCharacteristic.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        {" "}
                        <HiMiniFire />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="mt-4">
                <p className="font-medium">Common clothing items include:</p>
                {userProfile.bodyShape === "Pear" ? (
                  <ul>
                    {bestPearProducts.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.bodyShape === "Apple" ? (
                  <ul>
                    {bestAppleProducts.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.bodyShape === "Rectangle" ? (
                  <ul>
                    {bestRectangleProducts.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.bodyShape === "Hourglass" ? (
                  <ul>
                    {bestHourglassProducts.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.bodyShape === "Inverted Triangle" ? (
                  <ul>
                    {bestInvertedTriangleProducts.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </CardContent>
            <CardFooter className="absolute bottom-0">
              <Dialog>
                <DialogTrigger>
                  {/* <Button variant="outline">Calculate Shape</Button> */}
                  <CoolButton title="Calculate Shape" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Body Shape Calculator</DialogTitle>
                    <DialogDescription>
                      Measure around each area using inches
                    </DialogDescription>
                  </DialogHeader>
                  {/* Calculate Shape Component */}
                  <CalculateShape />
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
        {/* Fashion Quiz Card */}
        <div className="w-full">
          <Card className="relative h-[560px] w-full md:h-[560px]">
            <CardHeader>
              <CardTitle>Your Fashion Style is:</CardTitle>
              <CardDescription className="pt-4">
                <span className="text-4xl font-semibold">
                  {userProfile.fashionStyle}
                </span>
                {/* want to add in ideas for this style here - maybe even stores that are known for this fashion style? */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                Characteristics for your style include:
                {userProfile.fashionStyle === "Classic" ? (
                  <ul>
                    {classicStyle.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <HiMiniBolt />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.fashionStyle === "Boho" ? (
                  <ul>
                    {bohoStyle.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <HiMiniBolt />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.fashionStyle === "Chic" ? (
                  <ul>
                    {chicStyle.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <HiMiniBolt />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.fashionStyle === "Sporty" ? (
                  <ul>
                    {sportyStyle.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <HiMiniBolt />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.fashionStyle === "Edgy" ? (
                  <ul>
                    {edgyStyle.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <HiMiniBolt />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="mt-4">
                <p className="font-medium">Common clothing items include:</p>
                {userProfile.fashionStyle === "Classic" ? (
                  <ul>
                    {classicClothing.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.fashionStyle === "Boho" ? (
                  <ul>
                    {bohoClothing.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.fashionStyle === "Chic" ? (
                  <ul>
                    {chicClothing.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.fashionStyle === "Sporty" ? (
                  <ul>
                    {sportyClothing.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.fashionStyle === "Edgy" ? (
                  <ul>
                    {edgyClothing.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <IoShirtOutline />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </CardContent>
            <CardFooter className="absolute bottom-0">
              <Dialog>
                <DialogTrigger>
                  <CoolButton title="Find Style" />
                  {/* <CoolButton></CoolButton> */}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Fashion Style Quiz</DialogTitle>
                    <DialogDescription>
                      Answer the questions below to uncover your fashion style.
                    </DialogDescription>
                  </DialogHeader>
                  {/* Style Quiz Component */}
                  <StyleQuiz />
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
