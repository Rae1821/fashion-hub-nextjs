import ProductsList from "@/components/ProductsList";
import React from "react";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { searchItem?: string };
}) => {
  const { searchItem } = await searchParams;

  return (
    <div className="container">
      <ProductsList searchItem={searchItem.searchItem || ""} />
    </div>
  );
};

export default ProductsPage;
