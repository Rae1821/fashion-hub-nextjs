// import ProductSearch from "@/components/ProductSearch";
// import { findUniqueProfile } from "@/actions/auth";
import { getUserByEmail } from "@/actions/auth";
import { auth } from "@/auth";
import ProductsList from "@/components/ProductsList";
import React from "react";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { searchItem?: string };
}) => {
  const { searchItem } = await searchParams;
  const session = await auth();

  const user = session?.user?.email;

  const userInfo = await getUserByEmail(user as string);

  const bodyShape = userInfo?.bodyShape;
  const fashionStyle = userInfo?.fashionStyle;

  return (
    <div className="container mx-auto max-w-[1300px] px-10">
      <div className="mt-10 grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2">
        <div className="row-span-2 rounded bg-red-300/80 p-8 shadow">
          <h2 className="text-2xl font-semibold text-[#09090B]">
            Hello, {session?.user?.name}
          </h2>
          <p className="mt-2 text-sm font-normal tracking-tight">
            Use the search box below to find items that are perfect for your
            body shape and fashion style.
          </p>
          <p className="mt-2 text-sm font-normal tracking-tight">
            Click the plus icon at the top of each products to save it to the
            favorites section on your dashboard.
          </p>
        </div>
        <div className="row-span-2 grid grid-cols-1 grid-rows-2 gap-4">
          <div className="h-24 rounded bg-red-300/80 p-6 shadow">
            <p className="text-sm tracking-tight">
              Your fashion style is:{" "}
              <span className="block text-2xl font-semibold text-[#09090B]">
                {fashionStyle}
              </span>
            </p>
          </div>
          <div className="h-24 rounded bg-red-300/80 p-6 shadow">
            <p className="text-sm tracking-tight">
              Your body shape is:{" "}
              <span className="block text-2xl font-semibold text-[#09090B]">
                {bodyShape}
              </span>
            </p>
          </div>
        </div>
      </div>

      <ProductsList searchItem={searchItem || ""} />
    </div>
  );
};

export default ProductsPage;
