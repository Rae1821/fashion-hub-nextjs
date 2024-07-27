import React from "react";
import { Input } from "./ui/input";
import { loginWithCreds } from "@/actions/auth";
import AuthButton from "./AuthButton";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div>
      <form action={loginWithCreds} className="flex w-full flex-col gap-4">
        <div>
          <label>Name</label>
          <Input name="name" type="name" placeholder="Name" id="name" />
        </div>
        <div>
          <label>Email</label>
          <Input name="email" type="email" placeholder="Email" id="email" />
        </div>
        <div>
          <label>Password</label>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            id="password"
          />
        </div>
        <div className="mt-2">
          <AuthButton />
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="decoration-2 hover:underline hover:decoration-teal-600"
          >
            Sign in here.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
