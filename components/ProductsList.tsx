"use client";

import { useEffect, useState } from "react";
import ClothingCard from "@/components/ClothingCard";
import { fetchClothing } from "@/utils/helper";
import ProductSearch from "./ProductSearch";

const ProductsList = ({ searchItem }: { searchItem: string }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchItem) {
        const products = await fetchClothing({ searchItem });
        setItems(products);
        console.log(items);
      }
    };
    fetchData();
  }, [searchItem]);

  return (
    <div className="max-w-[1300px]">
      <div className="flex max-w-[1100px] flex-col pl-4">
        <div className="mt-12 ">
          <h2 className="text-lg font-semibold leading-none tracking-tight">
            Product Search
          </h2>
          <p className="text-sm text-muted-foreground">
            Use the search box below to find items that are perfect for your
            body shape!
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <ProductSearch />
      </div>
      <div className="flex flex-wrap gap-4 mt-12">
        {items.map((item: any) => (
          <div key={item.id} className="flex">
            <ClothingCard clothing={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
