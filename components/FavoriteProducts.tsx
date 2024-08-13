import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FavoriteProducts = () => {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Your Favorite Products</CardTitle>
          <CardDescription>
            Here you'll find all the products you favorited
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FavoriteProducts;
