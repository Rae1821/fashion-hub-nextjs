"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React, { useTransition } from "react";
import { createProfile } from "@/actions/auth";

const ProfileForm = () => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      height: formData.get("height") as string,
      weight: formData.get("weight") as string,
      shape: formData.get("shape") as string,
      style: formData.get("style") as string,
    };

    startTransition(async () => {
      try {
        const result = await createProfile(data);
        console.log("Profile created successfully: ", result);
      } catch (error) {
        console.log("Error creating profile: ", error);
      }
    });
  };

  return (
    <>
      <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label>Height</label>
          <Input
            name="height"
            type="height"
            placeholder="Current height"
            id="height"
          />
        </div>
        <div>
          <label>Weight</label>
          <Input
            name="weight"
            type="weight"
            placeholder="Current weight"
            id="weight"
          />
        </div>
        <div>
          <label>Body Shape</label>
          <Input
            name="shape"
            type="shape"
            placeholder="Current body shape"
            id="shape"
          />
        </div>
        <div>
          <label>Fashion Style</label>
          <Input
            name="style"
            type="style"
            placeholder="Current fashion style"
            id="style"
          />
        </div>

        <div className="mt-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating Profile..." : "Create Profile"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
