"use client";

import { useEffect, useState } from "react";
import ClothingCard from "@/components/ClothingCard";
import { fetchClothing } from "@/utils/helper";

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
    <div className="flex flex-wrap gap-2">
      {items.map((item: any) => (
        <ClothingCard key={item.id} clothing={item} />
      ))}
    </div>
  );
};

export default ProductsList;
