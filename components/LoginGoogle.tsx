"use client";

import { doSocialLogin } from "@/actions/auth";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";

const LoginGoogle = () => {
  return (
    <form action={doSocialLogin}>
      <Button
        type="submit"
        name="action"
        value="google"
        className="mt-6 h-12 w-full border-2 border-teal-600 bg-teal-600 text-white hover:cursor-pointer hover:bg-teal-600 hover:text-white"
      >
        <span className="mr-4">
          <FaGoogle />
        </span>
        Login With Google
      </Button>
    </form>
  );
};

export default LoginGoogle;
