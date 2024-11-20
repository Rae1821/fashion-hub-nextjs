"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
// import ProductsList from "./ProductsList";
// import Link from "next/link";
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMinus } from "react-icons/hi2";
import { findUniqueProducts } from "@/actions/auth";
// import { findUniqueProducts } from "@/actions/auth";

type ProductDetails = {
  id: string;
  userEmail: string;
  product_title?: string | null;
  product_price?: string | null;
  product_original_price?: string | null;
  product_star_rating?: string | null;
  product_num_ratings?: string | null;
  product_url?: string | null;
  product_photo?: string | null;
};
type UserProductsType = {
  email?: string | null;
  products?: ProductDetails[];
};

const FavoriteProducts = ({
  userProducts,
}: {
  userProducts: UserProductsType;
}) => {
  // const [showProducts, setShowProducts] = useState(false);
  const productsArr = userProducts.products;
  const favProducts = productsArr?.map((product: any) => {
    return {
      product_title: product.product_title as string,
      product_price: product.product_price,
      product_originalPrice: product.product_original_price,
      product_starRating: product.product_star_rating,
      product_numRatings: product.product_num_ratings,
      product_url: product.product_url,
      product_photo: product.product_photo,
    };
  });

  // const handleRemoveFromFavorites = () => {
  //   console.log("Remove from favorites");
  //   const fetchProductReturns = findUniqueProducts();
  //   console.log(fetchProductReturns);
  // };

  // console.log(favProducts?.map((product) => product.product_title));

  // const handleFindProducts = () => {
  //   setShowProducts((prevShowProducts) => !prevShowProducts);
  // };

  // const getUserFavoriteProducts = async () => {
  //   try {
  //     const userProducts = await findUniqueProducts();
  //     console.log(userProducts); // Access the returned object here

  //     // You can now work with the userProducts object
  //     if (userProducts && userProducts.products) {
  //       userProducts.products.forEach((product: ProductDetails) => {
  //         console.log(product.product_title);
  //         // Access other product properties as needed
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user's favorite products:", error);
  //   }
  // };

  // getUserFavoriteProducts();

  const handleDeleteFavorite = async () => {
    console.log(findUniqueProducts());
  };

  return (
    <div className="w-full">
      <div className="">
        <Card>
          <CardHeader className="">
            <CardTitle>Your Favorite Products</CardTitle>
            <CardDescription>
              Here you&apos;ll find all the products you favorited
            </CardDescription>
            <Button asChild className="w-full md:w-1/4">
              <Link href="/products"> Search Products</Link>
            </Button>
          </CardHeader>
          <CardContent>
            {favProducts?.map((product) => (
              <div className="product-card" key={product.product_title}>
                <div className="product-card_img-container">
                  <div className="flex justify-end">
                    <HiOutlineMinus
                      className=""
                      onClick={handleDeleteFavorite}
                    />
                  </div>
                  <Image
                    src={product.product_photo}
                    width={200}
                    height={200}
                    alt={product.product_title}
                    className="product-card_img"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="product-title">{product.product_title}</h3>
                  <div className="flex justify-between">
                    <p className="flex items-center gap-2 capitalize text-black opacity-50">
                      <span>
                        <Image
                          src="/icons/star.svg"
                          width={20}
                          height={20}
                          alt="star icon"
                        />
                      </span>
                      {product.product_starRating} /{" "}
                      {product.product_numRatings}
                    </p>
                    <p className="font-semibold text-black">
                      <span>{product.product_price}</span>
                      <span className="ml-2 font-light text-gray-400 line-through">
                        {product.product_originalPrice}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <Button asChild className="mt-4 w-full bg-red-300">
                    <Link href={product.product_url}>See More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FavoriteProducts;
