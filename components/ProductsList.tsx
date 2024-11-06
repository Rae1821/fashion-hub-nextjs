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
      }
    };
    fetchData();
  }, [searchItem]);

  return (
    <div>
      <ProductSearch />

      <div className="flex flex-wrap gap-2">
        {items.map((item: any) => (
          <div key={item.id}>
            <ClothingCard clothing={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
