"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoShirtOutline } from "react-icons/io5";
import { HiMiniFire, HiMiniBolt } from "react-icons/hi2";

import FavoriteProducts from "./FavoriteProducts";
import CoolButton from "./CoolButton";
import {
  pearBodyCharacteristic,
  appleBodyCharacteristic,
  rectangleBodyCharacteristic,
  hourglassBodyCharacteristic,
  invertedTriangleBodyCharacteristic,
  classicStyle,
  bohoStyle,
  chicStyle,
  sportyStyle,
  edgyStyle,
  classicClothing,
  bohoClothing,
  chicClothing,
  sportyClothing,
  edgyClothing,
  bestPearProducts,
  bestAppleProducts,
  bestRectangleProducts,
  bestHourglassProducts,
  bestInvertedTriangleProducts,
} from "@/constants";

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
      <div className="">
        <div className="flex flex-col justify-center gap-2 md:flex-row">
          {/* Body Shape Card  */}
          <div className="w-full">
            <Card className="relative h-[525px] w-full">
              <CardHeader>
                <CardTitle>Your Body Shape is:</CardTitle>
                <CardDescription className="pt-2 text-4xl font-semibold">
                  {userProfile.profile?.shape}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-medium">
                    Characteristics for your shape include:
                  </p>
                  {userProfile.profile?.shape === "Pear" ? (
                    <div>
                      <ul>
                        {pearBodyCharacteristic.map((item) => (
                          <li key={item} className="flex items-center gap-1">
                            <HiMiniFire />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                <div className="mt-4">
                  <p className="font-medium">Common clothing items include:</p>
                  {userProfile.profile?.shape === "Pear" ? (
                    <ul>
                      {bestPearProducts.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.shape === "Apple" ? (
                    <ul>
                      {bestAppleProducts.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.shape === "Rectangle" ? (
                    <ul>
                      {bestRectangleProducts.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.shape === "Hourglass" ? (
                    <ul>
                      {bestHourglassProducts.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.shape === "Inverted Triangle" ? (
                    <ul>
                      {bestInvertedTriangleProducts.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </CardContent>
              <CardFooter className="absolute bottom-0">
                <CoolButton href="/find-shape" title="Calculate Shape" />
              </CardFooter>
            </Card>
          </div>
          {/* Fashion Quiz Card */}
          <div className="w-full">
            <Card className="relative h-[525px] w-full">
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
                  Characteristics for your style include:
                  {userProfile.profile?.style === "Classic" ? (
                    <ul>
                      {classicStyle.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <HiMiniBolt />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.style === "Boho" ? (
                    <ul>
                      {bohoStyle.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <HiMiniBolt />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.style === "Chic" ? (
                    <ul>
                      {chicStyle.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <HiMiniBolt />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.style === "Sporty" ? (
                    <ul>
                      {sportyStyle.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <HiMiniBolt />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.style === "Edgy" ? (
                    <ul>
                      {edgyStyle.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <HiMiniBolt />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className="mt-4">
                  <p className="font-medium">Common clothing items include:</p>
                  {userProfile.profile?.style === "Classic" ? (
                    <ul>
                      {classicClothing.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.style === "Boho" ? (
                    <ul>
                      {bohoClothing.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.style === "Chic" ? (
                    <ul>
                      {chicClothing.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.style === "Sporty" ? (
                    <ul>
                      {sportyClothing.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : userProfile.profile?.style === "Edgy" ? (
                    <ul>
                      {edgyClothing.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <IoShirtOutline />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </CardContent>
              <CardFooter className="absolute bottom-0">
                <CoolButton href="/find-style" title="Take Style Quiz" />
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="">
          <FavoriteProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
