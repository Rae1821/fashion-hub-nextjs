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
    <div className="mt-24 max-w-[1300px]">
      <div className="flex justify-center">
        <ProductSearch />
      </div>
      <ul className="mt-12 flex flex-wrap gap-4">
        {items.map((item: any) => (
          <li className="flex" key={item.id}>
            <ClothingCard clothing={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
