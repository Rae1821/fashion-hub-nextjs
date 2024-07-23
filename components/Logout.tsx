"use client";

import { logout } from "@/actions/auth";

const Logout = () => {
  return <div onClick={() => logout("github")}>Logout</div>;
};

export default Logout;
