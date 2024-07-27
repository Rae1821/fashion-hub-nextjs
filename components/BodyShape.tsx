import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";

const BodyShape = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="">
            Calculate Shape
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Body Shape Calculator</DialogTitle>
            <DialogDescription>
              Wrap a measuring tape around each area to get the full width in
              inches of each area below.
            </DialogDescription>
          </DialogHeader>

          <>
            <form className="flex flex-col gap-4">
              <div>
                <Label htmlFor="shoulders">Shoulders Measurement</Label>
                <Input
                  name="shoulders"
                  placeholder="shoulders"
                  id="shoulders"
                />
              </div>
              <div>
                <Label htmlFor="waist">Waist Measurement</Label>
                <Input name="waist" placeholder="waist" id="waist" />
              </div>
              <div>
                <Label htmlFor="hips">Hip Measurement</Label>
                <Input name="hips" placeholder="hips" id="hips" />
              </div>
              <div>
                <Button type="submit">Calculate Shape</Button>
                <Button type="reset" variant="ghost" className="ml-4">
                  Reset
                </Button>
              </div>
            </form>
            <Separator />
            <div className="mt-4">
              <h2 className="mb-4 text-lg">
                Your body shape is: <span className="text-2xl">{}</span>
              </h2>
            </div>
          </>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BodyShape;
