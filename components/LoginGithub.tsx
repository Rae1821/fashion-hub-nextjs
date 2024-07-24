"use client";

import { login } from "@/actions/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

const LoginGithub = () => {
  return (
    <Button
      onClick={() => login("github")}
      className="mt-2 h-12 w-full gap-4 bg-black hover:cursor-pointer"
    >
      <FaGithub className="text-white" />
      <p>Login with Github</p>
    </Button>
  );
};

export default LoginGithub;
