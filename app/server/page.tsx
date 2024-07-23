import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Server = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h1 className="text-3xl">Server Page</h1>
      <p className="text-lg">{session?.user?.email}</p>
    </main>
  );
};

export default Server;
