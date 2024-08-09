"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React, { useTransition } from "react";
import { updateOrCreateProfile } from "@/actions/auth";
import BodyShape from "./BodyShape";
import StyleQuiz from "./StyleQuiz";
import { useRouter } from "next/navigation";
import CoolButton from "./CoolButton";

const ProfileForm = ({ session }: any) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      userId: session?.user?.id,
      height: formData.get("height") as string,
      weight: formData.get("weight") as string,
      shape: formData.get("shape") as string,
      style: formData.get("style") as string,
    };

    startTransition(async () => {
      try {
        const result = await updateOrCreateProfile(data);
        console.log(result);
      } catch (error) {
        console.log("Error creating profile: ", error);
      }
    });
    router.push("/profile");
  };

  return (
    <div className="container">
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
          <label className="mb-2 flex items-end justify-between">
            Body Shape{" "}
            <span>
              <BodyShape />
            </span>
          </label>

          <Input
            name="shape"
            type="shape"
            placeholder="Current body shape"
            id="shape"
          />
        </div>
        <div>
          <label className="mb-2 flex items-end justify-between">
            Fashion Style{" "}
            <span>
              <StyleQuiz />
            </span>
          </label>
          <Input
            name="style"
            type="style"
            placeholder="Current fashion style"
            id="style"
          />
        </div>

        <div className="mt-4">
          {/* <Button type="submit" disabled={isPending}>
            {isPending ? "Updating Profile..." : "Update Profile"}
          </Button> */}
          <Button asChild type="submit" disabled={isPending}>
            <CoolButton title="submit" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
