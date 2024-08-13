"use client";

import Link from "next/link";
import React from "react";

type ButtonProps = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const CoolButton = ({ title }: ButtonProps) => {
  return (
    <>
      {/* <Link href="/" className="group relative px-6 py-3 font-bold text-black">
        <span className="absolute inset-0 size-full -translate-x-2 -translate-y-2 bg-red-300 transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 size-full border-4 border-black"></span>
        <span className="relative">{title}</span>
      </Link> */}
      <Link href="#_" className="group relative inline-block text-lg">
        <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
          <span className="absolute inset-0 size-full rounded-lg bg-gray-50 px-5 py-3"></span>
          <span className="ease absolute left-0 -ml-2 size-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
          <span className="relative">Button Text</span>
        </span>
        <span
          className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </Link>
    </>
  );
};

export default CoolButton;
