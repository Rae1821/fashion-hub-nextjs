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
    <nav className="flex w-full items-center border-b">
      <div>
        <ul className="flex w-full cursor-pointer flex-col items-start gap-5 text-sm font-semibold tracking-wider md:flex-row md:items-center md:justify-between">
          {navLinks.map((link) => (
            <li key={link.route}>
              <Link
                href={link.route}
                className="decoration-emerald-600 hover:underline hover:decoration-2 hover:underline-offset-2 hover:transition-all hover:duration-300 hover:ease-in"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <div className="flex items-center gap-x-5">
            {!session?.user ? (
              <Link className="font-bold" href="/sign-in">
                <div className="rounded-sm bg-teal-600 px-4 py-2 text-sm text-white">
                  Login
                </div>
              </Link>
            ) : (
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
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
