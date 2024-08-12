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
        className="mt-6 h-12 w-full border-4 border-black bg-white text-black hover:cursor-pointer hover:bg-red-300 hover:transition-all"
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
