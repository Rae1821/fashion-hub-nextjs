"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { useState } from "react";
import BodyShape from "./BodyShape";
import StyleQuiz from "./StyleQuiz";
import { Button } from "./ui/button";
import Link from "next/link";

// const Dashboard = (currentUserProfile: CurrentUserProfileType) => {
type ProfileDetails = {
  id: string;
  userEmail: string;
  height: string | null;
  weight?: string | null;
  shape?: string | null;
  style?: string | null;
};
type UserProfileType = {
  email?: string | null;
  profile?: ProfileDetails | null;
  shape?: string | null; // Add the 'shape' property
};

const Dashboard = ({ userProfile }: { userProfile: UserProfileType }) => {
  console.log(userProfile.profile?.style);

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center md:flex-row gap-4">
        <div className="">
          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <CardTitle>Your Body Shape</CardTitle>
              <CardDescription>
                The calculated current shape of your body is:{" "}
                {userProfile.profile?.shape}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <p className="pb-2"></p>
              <p className="text-sm">Characteristics of your shape include:</p>
              <ul>
                {/* <li>Hips are wider than shoulders</li>
                  <li>Small waist and smallish bust</li>
                  <li>Gains weight in lower half of body</li> */}
              {/* </ul> */}
            </CardContent>
            <CardFooter>
              <BodyShape title="Your Body Shape" />
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <CardTitle>Your Fashion Style</CardTitle>
              <CardDescription>
                Your current fashion style is: {userProfile.profile?.style}
              </CardDescription>
            </CardHeader>
            <CardContent>{/* <p>Card Content</p> */}</CardContent>
            <CardFooter>
              {/* <Button
                size="lg"
                className="border-4 bg-white border-black text-black py-2 px-4 hover:bg-red-300 hover:transition-all rounded-none"
              >
                Take Style Quiz
              </Button> */}
              <Link
                href="/find-style"
                className="relative px-6 py-3 font-bold text-black group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Take Style Quiz</span>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
