import { auth } from "@/auth";
import React from "react";
import Dashboard from "@/components/Dashboard";
import { findUniqueProfile } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CoolButton from "@/components/CoolButton";

const Profile = async () => {
  const session = await auth();

  const fetchUserProfile = await findUniqueProfile();

  return (
    <div className="container mt-8">
      <div>
        <div>
          <div className="flex flex-col px-4 py-6">
            <h2 className="font-semibold text-2xl">
              {" "}
              Hello, {session?.user?.name}
            </h2>

            <Button variant="link" asChild className="w-1/4 pl-0 justify-start">
              <Link href="/profile/create">Edit Profile</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <Dashboard userProfile={fetchUserProfile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
