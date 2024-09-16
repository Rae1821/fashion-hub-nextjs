"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FavoriteProducts from "./FavoriteProducts";
import CoolButton from "./CoolButton";
import {
  pearBodyCharacteristic,
  appleBodyCharacteristic,
  rectangleBodyCharacteristic,
  hourglassBodyCharacteristic,
  invertedTriangleBodyCharacteristic,
  fashionStyles,
} from "@/constants";
import { HiMiniFire } from "react-icons/hi2";

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
      <div className="grid ">
        {/* Body Shape Card  */}
        <div className=" w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Your Body Shape is:</CardTitle>
              <CardDescription className="pt-2 text-xl font-semibold">
                {userProfile.profile?.shape}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                Characteristics for your shape include:
                {userProfile.profile?.shape === "Pear" ? (
                  <ul>
                    {pearBodyCharacteristic.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <HiMiniFire />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.profile?.shape === "Apple" ? (
                  <ul>
                    {appleBodyCharacteristic.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <HiMiniFire />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.profile?.shape === "Rectangle" ? (
                  <ul>
                    {rectangleBodyCharacteristic.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        {" "}
                        <HiMiniFire />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.profile?.shape === "Hourglass" ? (
                  <ul>
                    {hourglassBodyCharacteristic.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        {" "}
                        <HiMiniFire />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : userProfile.profile?.shape === "Inverted Triangle" ? (
                  <ul>
                    {invertedTriangleBodyCharacteristic.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        {" "}
                        <HiMiniFire />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </CardContent>
            <CardFooter>
              <CoolButton href="/find-shape" title="Calculate Shape" />
            </CardFooter>
          </Card>
        </div>
        {/* Fashion Quiz Card */}
        <div className=" w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Your Fashion Style is:</CardTitle>
              <CardDescription className="pt-4">
                <span className="text-4xl font-semibold">
                  {userProfile.profile?.style}
                </span>
                {/* want to add in ideas for this style here - maybe even stores that are known for this fashion style? */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                You love styles that are:
                {fashionStyles.map((style) =>
                  userProfile.profile?.style === style.style ? (
                    <ul key={style.id}>
                      <li>{style.description}</li>
                    </ul>
                  ) : null
                )}
              </div>
            </CardContent>
            <CardFooter>
              <CoolButton href="/find-style" title="Take Style Quiz" />
            </CardFooter>
          </Card>
        </div>
        <div className="">
          <FavoriteProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
