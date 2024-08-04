"use client";

import { logout } from "@/actions/auth";

const Logout = () => {
  return (
    <div
      onClick={() => logout()}
      className="rounded-sm bg-teal-600 px-4 py-2 text-sm text-white"
    >
      Logout
    </div>
  );
};

export default Logout;
