import { auth } from "@/auth";
import ProfileForm from "@/components/ProfileForm";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import BodyShape from "@/components/BodyShape";

const Profile = async () => {
  const session = await auth();

  return (
    <div className="container mt-8">
      <div>
        <div>
          <div className="flex items-center justify-between rounded bg-teal-600/20 px-4 py-6">
            <h2 className="font-semibold"> Hello, {session?.user?.name}</h2>
            <ProfileForm />
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Your Body Shape</CardTitle>
                  <CardDescription>
                    The calculated current shape of your body
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="pb-2">Body Shape from calculator goes here</p>
                  <p className="text-sm">
                    Characteristics of your shape include:
                  </p>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
