import { auth } from "@/auth";
import ProfileForm from "@/components/ProfileForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const CreateProfilePage = async () => {
  const session = await auth();

  return (
    <div className="container mt-8">
      <div className="mb-8">
        <Button variant="link" asChild className="pl-0">
          <Link href="/profile" className="flex gap-2">
            <span className="">
              <BsArrowLeft className="size-4" />
            </span>
            <span>Back to dashboard</span>
          </Link>
        </Button>
      </div>

      <h2 className="text-xl font-semibold">Hello, {session?.user?.name}</h2>
      <p className="pb-12">
        Please fill out the fields below to compolete your profile
      </p>
      <ProfileForm session={session} />
    </div>
  );
};

export default CreateProfilePage;
