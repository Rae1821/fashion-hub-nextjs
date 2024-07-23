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

const Profile = async () => {
  const session = await auth();

  return (
    <div className="container mt-24">
      Hello, {session?.user?.name}
      <div>
        <Card className="w-full md:w-1/2">
          <CardHeader>
            <CardTitle>Profile Form</CardTitle>
            <CardDescription>
              Fill out the fields below to complete your profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm />
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
