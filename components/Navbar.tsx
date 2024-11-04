import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import Logout from "./Logout";
import Image from "next/image";
import { navLinks } from "@/constants";

const Navbar = async () => {
  const session = await auth();

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <nav className="flex w-full items-center">
      <div>
        <ul className="flex w-full cursor-pointer flex-col items-start gap-5 text-sm font-semibold tracking-wider md:flex-row md:items-center md:justify-between">
          {navLinks.map((link) => (
            <li key={link.route}>
              <Link
                href={link.route}
                className="hover:underline hover:decoration-red-300 hover:decoration-2 hover:underline-offset-2 hover:transition-all hover:duration-300 hover:ease-in"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {!session?.user ? (
            <Link className="font-bold" href="/sign-in">
              <div className="rounded-sm border-4 border-black bg-red-300 px-4 py-2 text-sm hover:bg-transparent">
                Login
              </div>
            </Link>
          ) : (
            // <Link
            //   href="/sign-in"
            //   className="relative px-6 py-3 font-bold text-black group"
            // >
            //   <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            //   <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            //   <span className="relative">Login</span>
            // </Link>
            <>
              <div>
                {session?.user.image && (
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="User Avatar"
                    src={session?.user?.image || ""}
                  />
                )}
              </div>
              <Logout />
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
