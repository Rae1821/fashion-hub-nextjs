"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const AuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? "Loading..." : "Sign in"}
    </Button>
  );
};

export default AuthButton;
