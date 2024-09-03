"use client";

import { fetchClothing } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import ClothingCard from "./ClothingCard";
import ProductSearch from "./ProductSearch";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AllProducts = ({ searchParams }: { searchParams: any }) => {
  const [clothingProducts, setClothingProducts] = useState([]);

  gsap.to(".product-scroll", {
    ease: "none",
    scrollTrigger: {
      trigger: ".product-scroll",
      start: "top top",
      end: () => "+=3000",
      pin: true,
      // scrub: 0.5,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const allClothingProducts = await fetchClothing(searchParams);
      setClothingProducts(allClothingProducts);
    };

    fetchData();
  }, [searchParams]);

  const isDataEmpty =
    !Array.isArray(clothingProducts) ||
    clothingProducts.length < 1 ||
    !clothingProducts;

  return (
    <div className="mt-2 rounded-xl border bg-card/80 text-card-foreground shadow">
      <div className="mx-auto mt-8 w-full">
        <h2 className="text-center text-2xl font-semibold tracking-tight">
          Product Search
        </h2>
        <p className="text-center text-sm">
          Search products based on your body shape and fashion style
        </p>
      </div>
      <div className="mx-auto mt-12 w-full md:w-1/2">
        <ProductSearch />
      </div>
      <div className="mx-auto mt-4 w-full md:w-1/2">
        <p className="pb-2 font-semibold">Not sure what to search for?</p>
        <p>
          Try this search formula: Best (Fashion Style) + (Clothing item) for
          (Body shape)
        </p>
        <p className="text-sm italic">i.e Best Edgy Tops for Pear Body Shape</p>
      </div>
      <div>
        <Image src="/images/hero.jpg" width={800} height={600} alt="hero img" />
      </div>
      <div className="mt-24">
        {!isDataEmpty ? (
          <div className="flex product-scroll">
            {clothingProducts?.map((product) => (
              <ClothingCard key={product} clothing={product} />
            ))}
          </div>
        ) : (
          <div>
            <h2>Oops, no results</h2>
            {/* <p>{clothingProducts?.message}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
