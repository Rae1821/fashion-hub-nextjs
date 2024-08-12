"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { bestAppleProducts, bestHourglassProducts, bestInvertedTriangleProducts, bestPearProducts, bestRectangleProducts, bestShapeProducts } from "@/constants";
import Link from "next/link";

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
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <div className="">
          <Card className="h-[200px] w-[350px]">
            <CardHeader>
              <CardTitle>Your Body Shape</CardTitle>
              <CardDescription>
                You have a {userProfile.profile?.shape} body shape!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {userProfile.profile?.shape === "Rectangle" ? (
                bestRectangleProducts.map((product) => (
                  <div key={product.id}>
                    <p>{product.type}</p>
                    <p>{product.description}</p>
                  </div>
                ))
                ) : userProfile.profile?.shape === "Inverted Triangle" ? (
                  bestInvertedTriangleProducts.map((product) => (
                    <div key={product.type}>
                      <p>{product.type}</p>
                      <p>{product.product}</p>
                    </div>
                  ))
                  ) : userProfile.profile?.shape === "Hourglass" ? (
                    bestHourglassProducts.map((product) => (
                      <div key={product.type}>
                        <p>{product.type}</p>
                        <p>{product.product}</p>
                      </div>
                    ) : userProfile.profile?.shape === "Apple" ? (
                      bestAppleProducts.map((product) => (
                        <div key={product.type}>
                          <p>{product.type}</p>
                          <p>{product.product}</p>
                        </div>
                      ))

              ) : userProfile.profile?.shape === "Pear" ? (
                  bestPearProducts.map((product) => (
                    <div key={product.type}>
                      <p>{product.type}</p>
                      <p>{product.product}</p>
                    </div>
                  ))
              ) : (
                null
              )
              }
              {/* <p className="pb-2"></p>
              <p className="text-sm">Characteristics of your shape include:</p>
              <ul>
                {/* <li>Hips are wider than shoulders</li>
                  <li>Small waist and smallish bust</li>
                  <li>Gains weight in lower half of body</li> */}
              {/* </ul> */}
            </CardContent>
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
          <Card className="h-[200px] w-[350px]">
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
      </div>
    </div>
  );
};

export default Dashboard;
