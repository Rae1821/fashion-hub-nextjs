"use client";

import { useEffect } from "react";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { Button } from "./ui/button";
// import { FiMinusCircle } from "react-icons/fi";
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";

import { UploadButton } from "@/utils/uploadthing";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { deleteFavoriteProduct, deleteUploadedImage } from "@/actions/auth";

gsap.registerPlugin(useGSAP);

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
  asin?: string | null;
};
type UserProductsType = {
  email?: string | null;
  products?: ProductDetails[];
};

type ImageDetails = {
  id: string;
  userId: string;
  userEmail: string;
  image_url?: string | null;
  image_name?: string | null;
};

interface MoodboardProps {
  userProducts: UserProductsType;
  userImages: ImageDetails[];
}

const Moodboard = ({ userProducts, userImages }: MoodboardProps) => {
  console.log(userImages);
  // Image upload
  // const [imageUrl, setImageUrl] = useState<string>("");
  // const [imageName, setImageName] = useState("");

  // favorite products
  const productsArr = userProducts.products;
  const favProducts = productsArr?.map((product: any) => {
    return {
      id: product.id,
      email: product.userEmail,
      product_title: product.product_title as string,
      product_price: product.product_price,
      product_originalPrice: product.product_original_price,
      product_starRating: product.product_star_rating,
      product_numRatings: product.product_num_ratings,
      product_url: product.product_url,
      product_photo: product.product_photo,
      asin: product.id,
    };
  });

  // GSAP Dragging
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create([".image"], {
      bounds: "#container",
    });
  });
  interface UserUploadedImageInput {
    id: string;
    image_url: string;
  }

  const handleDeleteUploadedImage = async (imageUrl: string) => {
    console.log("Image ID: ", imageUrl);
    try {
      const result = await deleteUploadedImage(imageUrl);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleDeleteFavorite = async () => {
  //   try {
  //     const result = await deleteFavoriteProduct(asin);

  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div id="container" className="min-h-screen">
      <h2 className="font-semibold tracking-tight">Uploaded Images</h2>
      <p className="text-sm mb-4">
        Drag the images around to get outfit ideas. Click on the uploaded image
        to delete it.
      </p>
      <UploadButton
        className="ut-button:bg-red-300 ut-label:text-black ut-button:ut-readying:bg-red-300/50 ut-button:ut-uploading:bg-red-300/70"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload complete");
          // setImageUrl(res[0].url);
          // console.log(imageUrl);
          // setImageName(res[0].name);
          // console.log(imageName);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <div className="mt-8 flex flex-col md:flex-row gap-2">
        {userImages.map((image: any) => (
          <div
            key={image.id}
            className="relative hover:shadow-lg hover:transition-all bg-white"
          >
            <Image
              // ref={imageRef}
              src={image.image_url}
              height={250}
              width={250}
              alt={image.image_name}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="image aspect-square rounded"
              // onClick={() => handleDeleteUploadedImage(image.image_url)}
              onClick={() => handleDeleteUploadedImage(image.image_url)}
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="font-semibold tracking-tight">Favorite Products</h2>
        <p className="text-sm">
          Images you favorite from the products page will show up here
        </p>
        <div className="mt-4 flex gap-4 md:flex-row">
          {favProducts?.map((product) => (
            <div
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="sm:w-[192px] sm:max-w-[192px] w-full flex-1 flex flex-col gap-4 rounded-md border border-gray-200 p-2 shadow hover:shadow-lg hover:-translate-y-1 hover:transition-all bg-white; image"
              key={product.product_title}
            >
              <div className="product-card_img-container">
                <div className="flex justify-end">
                  {/* <Button onClick={() => handleDeleteFavorite(product.asin)}>
                    {" "}
                    {deleteProduct ? <FiMinusCircle /> : <FaPlus />}
                  </Button> */}
                  {/* <Button onClick={() => handleFavoriteImage(product.asin)}>
                    <HiOutlineX />
                  </Button> */}
                </div>
                <Image
                  src={product.product_photo}
                  width={200}
                  height={200}
                  alt={product.product_title}
                  className="product-card_img"
                />
              </div>

              <div className="flex-col gap-3 flex">
                <h3 className="truncate text-center text-xs font-semibold">
                  {product.product_title.replace(/[^\w\s]/gi, "")}
                </h3>
                <div className="flex justify-between">
                  <p className="flex items-center gap-2 text-sm text-black opacity-50">
                    <span>
                      <Image
                        src="/icons/star.svg"
                        width={20}
                        height={20}
                        alt="star icon"
                      />
                    </span>
                    {product.product_starRating} / {product.product_numRatings}
                  </p>
                  <p className="text-sm font-semibold text-black">
                    <span>{product.product_price}</span>
                    <span className="ml-2 text-sm font-light text-gray-400 line-through">
                      {product.product_originalPrice}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <Button asChild className="hidden w-full bg-red-300">
                  <Link href={product.product_url}>See More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moodboard;
