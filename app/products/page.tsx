// import ProductSearch from "@/components/ProductSearch";
import { findUniqueProfile } from "@/actions/auth";
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

  const fetchUserProfile = await findUniqueProfile();
  // console.log(fetchUserProfile);
  const userProfile = fetchUserProfile.profile;
  // console.log(userProfile.shape);

  return (
    <div className="container mx-auto max-w-[1300px] px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 grid-rows-2 gap-4">
        <div className="row-span-2 bg-red-300/10 p-8 rounded shadow-sm">
          <h2 className="text-2xl font-semibold">
            Hello, {session?.user?.name}
          </h2>
          <p className="tracking-tight">
            Use the search box below to find items that are perfect for your
            body shape and fashion style.
          </p>
          <p className="tracking-tight mt-4">
            Click the plus icon at the top of each products to save it to the
            favorites section on your dashboard.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-4 row-span-2">
          <div className="bg-red-300/10 p-6 h-24 rounded shadow-sm">
            <p className="">Your fashion style is:</p>
            <p className="font-semibold text-lg">{userProfile.style}</p>
          </div>
          <div className="bg-red-300/10 p-6 h-24 rounded shadow-sm">
            <p>Your body shape is:</p>
            <p className="font-semibold text-lg">{userProfile.shape}</p>
          </div>
        </div>
      </div>

      <ProductsList searchItem={searchItem || ""} />
    </div>
  );
};

export default ProductsPage;
