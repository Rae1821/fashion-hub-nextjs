import { auth } from "@/auth";
import React from "react";
import Dashboard from "@/components/Dashboard";
import { findUniqueProfile } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Profile = async () => {
  const session = await auth();

  const fetchUserProfile = await findUniqueProfile();

  return (
    <div className="magicpattern mt-8 min-h-screen">
      <div className="container">
        <div>
          <div className="flex flex-col px-4 py-6">
            <h2 className="text-2xl font-semibold">
              {" "}
              Hello, {session?.user?.name}
            </h2>

            <Button variant="link" asChild className="w-1/4 justify-start pl-0">
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
