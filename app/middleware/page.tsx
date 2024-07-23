import { auth } from "@/auth";
import React from "react";

const Middleware = async () => {
  const session = await auth();

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h1 className="text-3xl">Middleware Page</h1>
      <p className="text-lg">{session?.user?.email}</p>
    </main>
  );
};

export default Middleware;
