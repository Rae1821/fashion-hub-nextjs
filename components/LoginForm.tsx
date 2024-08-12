import React from "react";
import { Input } from "./ui/input";
import { loginWithCreds } from "@/actions/auth";
import AuthButton from "./AuthButton";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div>
      <form action={loginWithCreds} className="flex w-full flex-col gap-4">
        <div>
          <label htmlFor="name">Name</label>
          <Input name="name" type="name" placeholder="Name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input name="email" type="email" placeholder="Email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
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
        <p className="mt-2 text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="decoration-2 hover:underline hover:decoration-red-300"
          >
            Sign up here.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
