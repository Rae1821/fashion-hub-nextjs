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
    <div className="max-w-[1300px] mt-24">
      <div className="flex justify-center">
        <ProductSearch />
      </div>
      <ul className="flex flex-wrap gap-4 mt-12">
        {items.map((item: any) => (
          <li className="flex">
            <ClothingCard clothing={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
