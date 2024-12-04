// import ImageUpload from "@/components/ImageUpload";

import Chatbot from "@/components/Chatbot";
// import Image from "next/image";
import Moodboard from "@/components/Moodboard";
import { findUniqueImages, findUniqueProducts } from "@/actions/auth";

const MoodboardPage = async () => {
  const fetchUserProducts = await findUniqueProducts();
  const fetchImages = await findUniqueImages();
  console.log(fetchImages);

  return (
    <div className="container min-h-screen">
      <div className="mt-4">
        <h2 className="text-lg font-semibold tracking-tight">My Moodboard</h2>
        <p className="mb-8 text-sm tracking-tight">
          Here you can create your own outfit ideas by uploading photos of
          existing clothing items and/or saving products that you love. This is
          a great way to visually see what products might work with items you
          already have.
        </p>
      </div>
      {/* <div className="my-12">
        <ImageUpload />
      </div> */}
      {/* Uploaded images container */}
      <div>
        {/* <Card>
          <CardHeader>
            <CardTitle>Uploaded Images</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 overflow-auto">
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />
            <Image
              src="/images/black-booties.png"
              height={350}
              width={350}
              alt="booties"
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card> */}
      </div>
      <Moodboard userProducts={fetchUserProducts} userImages={fetchImages} />

      <div className="">
        <Chatbot />
      </div>
    </div>
  );
};

export default MoodboardPage;
