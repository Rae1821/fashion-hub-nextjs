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
    <div className="container mx-auto max-w-[1300px] px-10">
      <ProductsList searchItem={searchItem || ""} />
    </div>
  );
};

export default ProductsPage;
