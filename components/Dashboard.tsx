"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  bestAppleProducts,
  bestHourglassProducts,
  bestInvertedTriangleProducts,
  bestPearProducts,
  bestRectangleProducts,
} from "@/constants";
import Link from "next/link";
import FavoriteProducts from "./FavoriteProducts";

// const Dashboard = (currentUserProfile: CurrentUserProfileType) => {
type ProfileDetails = {
  id: string;
  userEmail: string;
  height: string | null;
  weight?: string | null;
  shape?: string | null;
  style?: string | null;
};
type UserProfileType = {
  email?: string | null;
  profile?: ProfileDetails | null;
  shape?: string | null; // Add the 'shape' property
};

const Dashboard = ({ userProfile }: { userProfile: UserProfileType }) => {
  console.log(userProfile.profile?.style);

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 grid-rows-4">
        <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Your Body Shape</CardTitle>
              <CardDescription>
                You have a {userProfile.profile?.shape} body shape!
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <Link
                href="/find-shape"
                className="group relative px-6 py-3 font-bold text-black"
              >
                <span className="absolute inset-0 size-full -translate-x-2 -translate-y-2 bg-red-300 transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 size-full border-4 border-black"></span>
                <span className="relative">Calculate Shape</span>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div>
          {/* h-[200px] w-[350px] */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Your Fashion Style</CardTitle>
              <CardDescription className="pt-2">
                Your fashion style is {userProfile.profile?.style}!
              </CardDescription>
            </CardHeader>
            <CardContent>{/* <p>Card Content</p> */}</CardContent>
            <CardFooter>
              <Link
                href="/find-style"
                className="group relative px-6 py-3 font-bold text-black"
              >
                <span className="absolute inset-0 size-full -translate-x-2 -translate-y-2 bg-red-300 transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 size-full border-4 border-black"></span>
                <span className="relative">Take Style Quiz</span>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-2 row-span-3">
          <FavoriteProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
