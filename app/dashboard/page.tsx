import { auth } from "@/auth";
import React from "react";
import Dashboard from "@/components/Dashboard";
import { findUniqueProducts, findUniqueProfile } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import AllProducts from "@/components/AllProducts";
// import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import FavoriteProducts from "@/components/FavoriteProducts";

const MyDashboard = async () => {
  const session = await auth();

  const fetchUserProfile = await findUniqueProfile();
  const fetchUserProducts = await findUniqueProducts();

  return (
    <div className="magicpattern min-h-screen">
      <div className="container">
        <div className="flex flex-col p-8">
          <h2 className="text-2xl font-semibold">
            {" "}
            Hello, {session?.user?.name}
          </h2>

          <Button variant="link" asChild className="w-1/4 justify-start pl-0">
            <Link href="/profile/create">Edit Profile</Link>
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row">
          <Dashboard userProfile={fetchUserProfile} />
        </div>
        <div className="mt-8">
          <FavoriteProducts userProducts={fetchUserProducts} />
        </div>
      </div>
      {/* <div>
        <HiChatBubbleBottomCenterText />
      </div> */}
    </div>
  );
};

export default MyDashboard;
