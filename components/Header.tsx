import Image from "next/image";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-[1300px] items-center justify-between p-4 sm:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icons/sparkles.svg" alt="logo" width={24} height={24} />
        <p className="font-semibold">Fashion Hub</p>
      </Link>
      <div className="flex">
        <div className="hidden md:flex md:items-center md:justify-end md:gap-4">
          <Navbar />
        </div>

        <div className="flex items-center justify-end gap-4 md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
