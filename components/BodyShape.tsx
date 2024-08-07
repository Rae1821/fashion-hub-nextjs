"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const BodyShape = () => {
  const [shapeResults, setShapeResults] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <div>
      <Dialog>
        <DialogTrigger>Calculate Shape</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Body Shape Calculator</DialogTitle>
            <DialogDescription>
              Wrap a measuring tape around each area to get the full width in
              inches of each area below.
            </DialogDescription>
          </DialogHeader>

          <>
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
                <Input
                  name="waist"
                  type="waist"
                  placeholder="waist"
                  id="waist"
                />
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
            <Separator />
            <div className="mt-4">
              <h2 className="mb-4 text-lg">
                Your body shape is:{" "}
                <span className="text-2xl">{shapeResults}</span>
              </h2>
            </div>
          </>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BodyShape;
