import ImageUpload from "@/components/ImageUpload";
import React from "react";

const MoodboardPage = () => {
  return (
    <div className="container min-h-screen">
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Moodboard</h2>
        <p>
          Here you can create your own outfit ideas by uploading photos of
          existing clothing items and/or saving products that you love. This is
          a great way to visually see what products might work with items you
          already have.
        </p>
      </div>
      <div className="mt-12">
        <ImageUpload />
      </div>
      <div></div>

      {/* add a way to upload your own photos */}

      {/* create a canvas or board in the middle of the page where you can drag items  */}

      {/* have your own photos at the top of the page above the moodboard and you can swipe through them to add to the moodboard */}

      {/* have the product photos you save added to the bottom below the moodboard and you can drag them up to the moodboard */}
    </div>
  );
};

export default MoodboardPage;
