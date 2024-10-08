import LoginForm from "@/components/LoginForm";
import LoginGithub from "@/components/LoginGithub";
import LoginGoogle from "@/components/LoginGoogle";
import React from "react";

const SignIn = () => {
  return (
    <div className="container mt-20 flex w-full justify-center">
      <section className="flex w-[400px] flex-col">
        <h1 className="mb-6 w-full text-center text-3xl font-bold">Sign in</h1>
        <LoginForm />
        <LoginGoogle />
        <LoginGithub />
      </section>
    </div>
  );
};

export default SignIn;
