import LoginGithub from "@/components/LoginGithub";
import LoginGoogle from "@/components/LoginGoogle";
import SignUpForm from "@/components/SignUpForm";
import React from "react";

const SignUp = () => {
  return (
    <div className="mt-20 flex w-full justify-center">
      <section className="flex w-[400px] flex-col">
        <h1 className="mb-6 w-full text-center text-3xl font-bold">Sign up</h1>
        <SignUpForm />
        <LoginGoogle />
        <LoginGithub />
      </section>
    </div>
  );
};

export default SignUp;
