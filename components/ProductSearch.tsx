"use client";

// import { Input } from "../ui/input";
// import { AddSearchButton } from "./AddSearchButton";
import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Input } from "./ui/input";

const ProductSearch = () => {
  const [searchItem, setSearchItem] = useState("");
  const { pending } = useFormStatus();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },

    [searchParams]
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchItem === "") {
      return alert("Please fill in the search bar");
    }

    router.push(pathname + "?" + createQueryString("searchItem", searchItem));
  };

  // const updateSearchParams = (searchItem: string) => {
  //   // create a new URLSearchParams object using the current URL search parameters
  //   const searchParams = new URLSearchParams(window.location.search);

  //   // update or delete the 'searchitem' search parameter bades on the 'searchitem' value
  //   if (searchItem) {
  //     searchParams.set("searchItem", searchItem);
  //   } else {
  //     searchParams.delete("searchItem", searchItem);
  //   }

  //   // generate the new pathname with the updated search parameters
  //   const newPathname = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;

  //   router.push(newPathname);
  // };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex">
        <Input
          type="text"
          name="searchItem"
          placeholder="white peplum tops"
          className="rounded-r-none border-r-0 focus-visible:ring-0"
          value={searchItem}
          onChange={(e: any) => setSearchItem(e.target.value)}
        />
        {/* <AddSearchButton /> */}
        <Button type="submit" aria-disabled={pending} className="bg-red-300">
          <Image
            src="/icons/magnifying-glass.svg"
            alt="search"
            width={20}
            height={20}
            className="text-white"
          />
        </Button>
      </div>
    </form>
  );
};

export default ProductSearch;
