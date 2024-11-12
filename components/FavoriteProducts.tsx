import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import ProductsList from "./ProductsList";
import Link from "next/link";

const handleFindProducts = () => {
  console.log("Find Products");
};

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

  return (
    <div className="w-full">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Your Favorite Products</CardTitle>
            <CardDescription>
              Here you&apos;ll find all the products you favorited
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/products">Find Products</Link>
            </Button>
          </CardContent>
          <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
        </Card>
      </div>
      {/* <div>
        { favProducts?.forEach((product) => (
          <ProductsList product={product} />
        );}

      </div> */}
    </div>
  );
};

export default FavoriteProducts;
