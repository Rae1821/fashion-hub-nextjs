"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React, { useTransition } from "react";
import { updateOrCreateProfile } from "@/actions/auth";
import BodyShape from "./BodyShape";
import StyleQuiz from "./StyleQuiz";
import { useRouter } from "next/navigation";
import CoolButton from "./CoolButton";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

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
          <label htmlFor="height">Height</label>
          <Input
            name="height"
            type="height"
            placeholder="Current height"
            id="height"
          />
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <Input
            name="weight"
            type="weight"
            placeholder="Current weight"
            id="weight"
          />
        </div>
        <div>
          <label
            htmlFor="shape"
            className="mb-2 flex items-center gap-4 font-medium"
          >
            Body Shape{" "}
            <span>
              <Link
                href="/find-shape"
                className="flex items-center gap-2 text-sm font-normal text-red-400 hover:text-black"
              >
                Calculate body shape{" "}
                <span>
                  {" "}
                  <BsArrowRight className="size-4" />
                </span>
              </Link>
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
          <label
            htmlFor="style"
            className="mb-2 flex items-center gap-4 font-medium"
          >
            Fashion Style{" "}
            <span>
              <Link
                href="/find-style"
                className="flex items-center gap-2 text-sm font-normal text-red-400 hover:text-black"
              >
                Take Style Quiz{" "}
                <span>
                  {" "}
                  <BsArrowRight className="size-4" />
                </span>
              </Link>
              {/* <CoolButton href="/find-style" title="Find Style" /> */}
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
            <CoolButton href="" title="Update Profile" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
