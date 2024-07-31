import { auth } from "@/auth";
import ProfileForm from "@/components/ProfileForm";
import React from "react";
import Dashboard from "@/components/Dashboard";

const Profile = async () => {
  const session = await auth();

  return (
    <div className="container mt-8">
      <div>
        <div>
          <div className="flex items-center justify-between rounded bg-teal-600/20 px-4 py-6">
            <h2 className="font-semibold"></h2>
            <ProfileForm />
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <Dashboard session={session} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
