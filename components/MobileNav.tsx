import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import Navbar from "./Navbar";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <div className="flex items-end">
            <Image
              src="/icons/sparkles.svg"
              alt="logo"
              width={32}
              height={32}
            />
          </div>

          <Separator className="border border-gray-50" />

          <Navbar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
