"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { HiOutlineClipboard } from "react-icons/hi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// type ButtonProps = {
//   title: string;
// };

const CalculateShape = () => {
  const [shapeResults, setShapeResults] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      shoulders: formData.get("shoulders") as string,
      waist: formData.get("waist") as string,
      hips: formData.get("hips") as string,
    };

    const shoulders = parseInt(data.shoulders);
    const waist = parseInt(data.waist);
    const hips = parseInt(data.hips);

    try {
      if (hips / shoulders >= 1.05 && waist < hips) {
        setShapeResults("Pear");
      } else if (shoulders / hips >= 1.05 && waist === shoulders) {
        setShapeResults("Apple");
      } else if (
        waist / shoulders <= 0.75 &&
        waist / hips < 0.75 &&
        hips * 0.95 < shoulders
      ) {
        setShapeResults("Hourglass");
      } else if (shoulders / hips >= 1.05 && waist < shoulders) {
        setShapeResults("Triangle");
      } else if (waist / shoulders >= 0.75 && shoulders * 0.95 < hips) {
        setShapeResults("Rectangle");
      } else if (shoulders === null || waist === null || hips === null) {
        console.log("Please fill in all fields");
      }

      return shapeResults;
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setShapeResults("");
  };

  const copyToClipboard = async () => {
    console.log("click");
    try {
      await navigator.clipboard.writeText(shapeResults);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    } catch (err) {
      console.log("Failed to copy to clipboard", err);
    }
  };

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Body Shape Calculator</CardTitle>
          <CardDescription>
            Measure around each area using inches
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="shoulders">Shoulders Measurement</Label>
              <Input
                name="shoulders"
                type="shoulders"
                placeholder="shoulders"
                id="shoulders"
              />
            </div>
            <div>
              <Label htmlFor="waist">Waist Measurement</Label>
              <Input name="waist" type="waist" placeholder="waist" id="waist" />
            </div>
            <div>
              <Label htmlFor="hips">Hip Measurement</Label>
              <Input name="hips" type="hips" placeholder="hips" id="hips" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Button type="submit">Calculate Shape</Button>
                <Button
                  type="reset"
                  variant="ghost"
                  onClick={handleReset}
                  className="decoration-teal-600 decoration-2 hover:bg-transparent hover:underline hover:underline-offset-4"
                >
                  Start Over
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="mt-4 flex items-center gap-4">
            <h2 className="mb-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Your body shape is:{" "}
              <span className="font-semibold">{shapeResults}</span>
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyToClipboard}
                  >
                    <HiOutlineClipboard />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isCopied ? "Copied!" : "Copy to Clipboard"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CalculateShape;
