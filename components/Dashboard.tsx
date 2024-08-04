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
  userId: string;
  height: string | null;
  weight?: string | null;
  shape?: string | null;
  style?: string | null;
};
type UserProfileType = {
  email?: string | null;
  profile?: ProfileDetails | null;
};

const Dashboard = (session: any) => {
  const [userProfile, setUserProfile] = useState<UserProfileType | null>();

  useEffect(() => {
    console.log(session);
    const fetchUserProfile = async () => {
      if (session?.user) {
        try {
          const currentUserProfile = await db.user.findUnique({
            where: {
              email: session?.user?.email,
              name: session?.user?.name,
            },
            select: {
              email: true,
              profile: true,
            },
          });

          if (currentUserProfile) {
            setUserProfile({
              email: currentUserProfile.email,
              profile: currentUserProfile.profile,
            });
          }

          console.log(currentUserProfile);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchUserProfile();
  }, [session, userProfile]);

  if (userProfile && userProfile.profile) {
    const { id, userId, height, weight, shape, style } = userProfile.profile;

    console.log("Profile ID:", id);
    console.log("User ID:", userId);
    console.log("Height:", height);
    console.log("Weight:", weight);
    console.log("Shape:", shape);
    console.log("Style:", style);
  } else {
    console.log("Profile is not available.");
  }

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
            <CardDescription>Your current fashion style</CardDescription>
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
