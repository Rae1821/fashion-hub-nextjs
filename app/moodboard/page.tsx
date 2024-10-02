import ImageUpload from "@/components/ImageUpload";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Chatbot from "@/components/Chatbot";
import Image from "next/image";

const MoodboardPage = () => {
  return (
    <div className="container min-h-screen">
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Moodboard</h2>
        <p>
          Here you can create your own outfit ideas by uploading photos of
          existing clothing items and/or saving products that you love. This is
          a great way to visually see what products might work with items you
          already have.
        </p>
      </div>
      <div className="my-12">
        <ImageUpload />
      </div>
      {/* Uploaded images container */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Images</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 overflow-auto">
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
      {/* Moodboard area  */}
      {/* Need a way to persist these - localstorage or add to database? Maybe having kanbans would be easier to group */}
      <div className="my-4">
        <Card className="h-[500px]">
          <CardHeader>
            <CardTitle>Moodboard</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
      {/* Favorite products */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Favorite Products</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 overflow-auto">
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />{" "}
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />{" "}
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />{" "}
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

      {/* add a way to upload your own photos */}

      {/* create a canvas or board in the middle of the page where you can drag items  */}

      {/* have your own photos at the top of the page above the moodboard and you can swipe through them to add to the moodboard */}

      {/* have the product photos you save added to the bottom below the moodboard and you can drag them up to the moodboard */}
      <div className="">
        <Chatbot />
      </div>
    </div>
  );
};

export default MoodboardPage;
