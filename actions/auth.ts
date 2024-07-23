"use server";

import { auth, signIn, signOut } from "@/auth";
import { db } from "@/db";
// import { User } from "@prisma/client";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

// For debugging purposes
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// login for any social provider
export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logout = async (provider: string) => {
  await signOut();
  revalidatePath("/");
};

// Login for credentials
export const loginWithCreds = async (formData: FormData) => {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    redirectTo: "/",
  };

  // Debugging purposes
  const existingUser = await getUserByEmail(formData.get("email") as string);
  console.log(existingUser);
  //

  try {
    await signIn("credentials", rawFormData);
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};

// setup profile actions here

interface CreateProfileInput {
  height?: string;
  weight?: string;
  shape?: string;
  style?: string;
}

// Create profile
export const createProfile = async (input: CreateProfileInput) => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }

    const userEmail = session.user.email;

    const newProfile = await db.profile.create({
      data: {
        height: input.height,
        weight: input.weight,
        shape: input.shape,
        style: input.style,
        user: {
          connect: { email: userEmail },
        },
      },
    });

    return newProfile;
  } catch (error: any) {
    console.log("Error creating profile:", error);
    throw error;
  }
};

// Update profile

// Delete profile