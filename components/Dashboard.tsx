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
      <div></div>
      {/* <BodyShape /> */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Your Body Shape</CardTitle>
            <CardDescription>
              The calculated current shape of your body is:{" "}
              {userProfile.profile?.shape}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="pb-2"></p>
            <p className="text-sm">Characteristics of your shape include:</p>
            <ul>
              {/* <li>Hips are wider than shoulders</li>
                  <li>Small waist and smallish bust</li>
                  <li>Gains weight in lower half of body</li> */}
            </ul>
          </CardContent>
          <CardFooter>
            <BodyShape title="Your Body Shape" />
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Your Fashion Style</CardTitle>
            <CardDescription>
              Your current fashion style is: {userProfile.profile?.style}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <StyleQuiz />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
