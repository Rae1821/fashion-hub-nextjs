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
import { useEffect, useState } from "react";
import { db } from "@/db";

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
  // const [currentUserProfile, setCurrentUserProfile] =
  //   useState<UserProfileDetails | null>();

  // useEffect(() => {
  //   console.log(session.session.user);
  //   const fetchUserProfile = async () => {
  //     if (session?.user) {
  //       try {
  //         const currentUserProfile = await db.user.findUnique({
  //           where: {
  //             email: session?.user?.email,
  //             name: session?.user?.name,
  //           },
  //           select: {
  //             email: true,
  //             profile: true,
  //           },
  //         });

  //         console.log(currentUserProfile);

  //         if (currentUserProfile) {
  //           setUserProfile({
  //             email: currentUserProfile.email,
  //             profile: currentUserProfile.profile,
  //           });
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };

  //   fetchUserProfile();
  // }, [session, userProfile]);

  // const fetchUserProfile = async () => {
  //   if (session?.user) {
  //     try {
  //       const currentUserProfile = await db.user.findUnique({
  //         where: {
  //           email: session?.user?.email,
  //           name: session?.user?.name,
  //         },
  //         select: {
  //           email: true,
  //           profile: true,
  //         },
  //       });

  //       console.log(currentUserProfile);

  //       if (currentUserProfile) {
  //         setUserProfile({
  //           email: currentUserProfile.email,
  //           profile: currentUserProfile.profile,
  //         });
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  // fetchUserProfile();

  console.log(userProfile.profile?.style);

  // if (userProfile && userProfile.profile) {
  //   const { id, userEmail, height, weight, shape, style } = userProfile.profile;

  //   console.log("Profile ID:", id);
  //   console.log("User ID:", userEmail);
  //   console.log("Height:", height);
  //   console.log("Weight:", weight);
  //   console.log("Shape:", shape);
  //   console.log("Style:", style);
  // } else {
  //   console.log("Profile is not available.");
  // }

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
            <BodyShape />
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
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
