"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ProfileUpdater = () => {
  const router = useRouter();

  const [profileObj, setSetProfileObj] = useState({
    bodyShape: "",
    fashionStyle: "",
  });

  const handleSetProfileObj = () => {
    setSetProfileObj({
      bodyShape: userProfile.bodyShape,
      fashionStyle: userProfile.fashionStyle,
    });
  };

  // save shape to database
  const saveToProfile = async () => {
    try {
      const bodyResults = shapeResults;
      // const fashionResults = "";

      if (!bodyResults) {
        throw new Error("Invalid data");
      }
      const result = await updateUser({
        bodyShape: bodyResults,
        // fashionStyle: fashionResults,
      });
      console.log("Update result:", result);
      console.log("Saving to profile:", bodyResults);
    } catch (error) {
      console.log("Error saving to profile: ", error);
    }
    router.push("/dashboard");
  };

  return <div></div>;
};

export default ProfileUpdater;
