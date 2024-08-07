import { auth } from "@/auth";
import ProfileForm from "@/components/ProfileForm";
import React from "react";

const CreateProfilePage = async () => {
  const session = await auth();

  return (
    <div className="container mt-12">
      <h2 className="text-2xl">Hello, {session?.user?.name}</h2>
      <p className="py-4">
        Please fill out the fields below to compolete your profile
      </p>
      <ProfileForm session={session} />
    </div>
  );
};

export default CreateProfilePage;
