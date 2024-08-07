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
    <div className="container mt-8">
      <div>
        <div>
          <div className="flex items-center justify-between rounded bg-teal-600/20 px-4 py-6">
            <h2 className="font-semibold"> Hello, {session?.user?.name}</h2>
            <Button asChild>
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
