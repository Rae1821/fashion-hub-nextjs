"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { Button } from "./ui/button";
// import { FiMinusCircle } from "react-icons/fi";
import Link from "next/link";

import { UploadButton } from "@/utils/uploadthing";

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

  // const userImagesArr = userImages.images;
  // const uploadedImagesArr = userImagesArr?.map((image: any) => {
  //   return {
  //     image_url: image.image_url as string,
  //     image_name: image.image_name,
  //   };
  // });

  // console.log(uploadedImagesArr);

  // GSAP
  const imageRef = useRef(null);

  // GSAP Dragging
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(imageRef.current, {
      bounds: "#container",
    });
  });

  return (
    <div id="container" className="min-h-screen">
      <h2 className="font-semibold tracking-tight">Uploaded Images</h2>
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
      {userImages.map((image: any) => (
        <div ref={imageRef} key={image.id}>
          <Image
            src={image.image_url}
            height={150}
            width={150}
            alt={image.image_name}
          />
        </div>
      ))}

      {/* {imageUrl.length ? (
        <div ref={imageRef}>
          <Image src={imageUrl} height={150} width={150} alt="imageName" />
        </div>
      ) : null} */}

      <div className="h-[600px] w-full">
        <h3 className="font-semibold tracking-tight">Moodboard</h3>
      </div>
      <div>
        <h2>Favorite Products</h2>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          {favProducts?.map((product) => (
            <div
              className="product-card bg-red-300"
              key={product.product_title}
            >
              <div className="product-card_img-container">
                <div className="flex justify-end">
                  {/* <Button onClick={() => handleDeleteFavorite(product.asin)}>
                    {" "}
                    {deleteProduct ? <FiMinusCircle /> : <FaPlus />}
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
                    {product.product_starRating} / {product.product_numRatings}
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
        </div>
      </div>
    </div>
  );
};

export default Moodboard;
