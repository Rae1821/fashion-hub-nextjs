import { getUserByEmail } from "@/actions/auth";
import { auth } from "@/auth";
import React from "react";
import Dashboard from "@/components/Dashboard";
// import AllProducts from "@/components/AllProducts";
// import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
// import FavoriteProducts from "@/components/FavoriteProducts";

const MyDashboard = async () => {
  const session = await auth();

  console.log(session?.user);
  const user = session?.user?.email;

  const userInfo = await getUserByEmail(user as string);
  console.log(userInfo);

  // const userProfileResults = fetchUserProfile ? fetchUserProfile.profile : " ";

  // const fetchUserProducts = await findUniqueProducts();

  return (
    <div className="magicpattern min-h-screen">
      <div className="container">
        <div className="flex flex-col p-8">
          <h2 className="text-2xl font-semibold">
            {" "}
            Hello, {session?.user?.name}
          </h2>

          {/* <Button variant="link" asChild className="w-1/4 justify-start pl-0">
            <Link href="/profile/create">
              {fetchUserProfile.profile === null
                ? "Create your profile"
                : "Edit Profile"}
            </Link>
          </Button> */}
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row">
          {userInfo && <Dashboard userProfile={userInfo} />}
        </div>
        <div className="mt-8">
          {/* <FavoriteProducts userProducts={fetchUserProducts} /> */}
        </div>
      </div>
      {/* <div>
        <HiChatBubbleBottomCenterText />
      </div> */}
    </div>
  );
};

export default MyDashboard;
