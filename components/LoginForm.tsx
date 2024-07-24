import React from "react";
import { Input } from "./ui/input";
import { loginWithCreds } from "@/actions/auth";
import AuthButton from "./AuthButton";

const LoginForm = () => {
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
        <div className="mt-4">
          <AuthButton />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
