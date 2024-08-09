"use client";

import { logout } from "@/actions/auth";

const Logout = () => {
  return (
    <div
      onClick={() => logout()}
      className="rounded-sm hover:bg-red-300 px-4 py-2 text-sm border-4 border-black hover:transition-all"
    >
      Logout
    </div>
  );
};

export default Logout;
