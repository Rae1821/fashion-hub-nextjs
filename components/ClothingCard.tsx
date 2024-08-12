"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

interface ClothingProps {
  product_title: string;
  product_price: number;
  product_original_price: number;
  currency: string;
  product_star_rating: number;
  product_num_ratings: number;
  product_url: string;
  product_photo: string;
}

const ClothingCard = ({ clothing }: { clothing: ClothingProps }) => {
  const {
    product_title: productTitle,
    product_price: productPrice,
    product_original_price: productOriginalPrice,
    product_star_rating: productStarRating,
    product_num_ratings: productNumRatings,
    product_url: productUrl,
    product_photo: productPhoto,
  } = clothing;

  const [addToFavorites, setAddToFavorites] = useState(false);

  const handleAddToFavorites = () => {
    // add product to favorites
  };

  return (
    <Link href={productUrl} className="product-card">
      <div className="product-card_img-container">
        <div>
          <Button variant="outline" size="icon" onClick={handleAddToFavorites}>
            <FaPlus className="product-card_plus-icon" />
          </Button>
        </div>
        <Image
          src={productPhoto}
          width={200}
          height={200}
          alt={productTitle}
          className="product-card_img"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="product-title">{productTitle}</h3>
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
            {productStarRating} / {productNumRatings}
          </p>
          <p className="font-semibold text-black">
            <span>{productPrice}</span>
            <span className="ml-2 font-light text-gray-400 line-through">
              {productOriginalPrice}
            </span>
          </p>
        </div>
      </div>
      {/* <Link href={productUrl}>
          <Card className="product-card">
            <CardHeader>
              <div className="product-card_img-container">
                <Image
                  src={productPhoto}
                  alt="product photo"
                  width={100}
                  height={100}
                />
              </div>
              <CardTitle className="text-sm font-semibold text-gray-800">
                {productTitle}
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                <span className="mr-1 font-semibold">{currency}</span>
                {productPrice}{" "}
                <span className="ml-1 text-gray-400 line-through">
                  {productOriginalPrice}
                </span>
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p className="flex flex-row items-center gap-1 text-sm">
                <span>
                  <Image
                    src="/icons/star.svg"
                    width={20}
                    height={20}
                    alt="star icon"
                    className="text-yellow-500"
                  />
                </span>
                {productStarRating} /
                <span className="text-gray-400">{productNumRatings}</span>
              </p>

              <Button className="bg-pink-500" asChild>
                <Link href={productUrl} className="mt-6">
                  See more
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </Link> */}
    </Link>
  );
};

export default ClothingCard;

// asin:"B010RWDJOY"
// product_title:"Nike Performance Cushion Crew Socks with Band (6 Pairs)"
// product_price:"$25.00"
// unit_price:"$4.17"
// unit_count:6
// product_original_price:"$29.90"
// currency:"USD"
// product_star_rating:"4.6"
// product_num_ratings:15788
// product_url:"https://www.amazon.com/dp/B010RWDJOY"
// product_photo:"https://m.media-amazon.com/images/I/81XwDw-bXpL._AC_SR525,789_FMwebp_QL65_.jpg"
// product_num_offers:null
// product_minimum_offer_price:"$25.00"
// is_best_seller:false
// is_amazon_choice:false
// is_prime:true
// climate_pledge_friendly:false
// sales_volume:"10K+ bought in past month"
// delivery:"FREE delivery Mon, Feb 5 on $35 of items shipped by AmazonOr fastest delivery Thu, Feb 1"
