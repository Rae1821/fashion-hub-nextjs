import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const FavoriteProducts = () => {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Your Favorite Products</CardTitle>
          <CardDescription>
            Here you&apos;ll find all the products you favorited
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Find Products</Button>
        </CardContent>
        <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
      </Card>
    </div>
  );
};

export default FavoriteProducts;
