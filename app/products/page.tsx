// import ProductSearch from "@/components/ProductSearch";
import ProductsList from "@/components/ProductsList";
import React from "react";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { searchItem?: string };
}) => {
  const { searchItem } = await searchParams;
  // const searchItem = searchParams.searchItem || "";

  return (
    <div className="container">
      <ProductsList searchItem={searchItem || ""} />
    </div>
  );
};

export default ProductsPage;
