"use client";

import React, { useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

interface ProductSearchProps {
  // onSearch: (searchTerm: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const { pending } = useFormStatus();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchItem.trim()) {
      router.push(`/products/${searchItem}`);
    }
  };

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
