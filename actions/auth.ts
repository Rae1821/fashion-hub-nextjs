"use server";

import { auth, signIn, signOut } from "@/auth";
import { db } from "@/db";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

// For debugging purposes
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Login with Google
export async function doSocialLogin(formData: any) {
  const action = formData.get("action");
  // console.log(action);
  await signIn(action, { redirectTo: "/dashboard" });
}

// login for any social provider
export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/dashboard" })
    .then((r) => {
      console.log("there was a result");
      console.log(r);
    })
    .catch((e) => {
      console.log("there was an error");
      console.log(e);
    });
  revalidatePath("/dashboard");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

// Login for credentials
export const loginWithCreds = async (formData: FormData) => {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    redirectTo: "/dashboard",
  };

  // Debugging purposes
  const existingUser = await getUserByEmail(formData.get("email") as string);
  console.log(existingUser);
  //

  try {
    await signIn("credentials", rawFormData);
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};

interface UpdateUserInput {
  bodyShape?: string;
  fashionStyle?: string;
}

// Update user
export const updateUser = async (input: UpdateUserInput) => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }
    const userEmail = session.user.email;
    console.log("User Email:", userEmail);
    console.log("Input:", input);

    if (!input || (!input.bodyShape && !input.fashionStyle)) {
      throw new Error("Invalid input");
    }

    const updateData: any = {};
    if (input.bodyShape) updateData.bodyShape = input.bodyShape;
    if (input.fashionStyle) updateData.fashionStyle = input.fashionStyle;

    const updateProfile = await db.user.update({
      where: {
        email: userEmail,
      },
      data: updateData,
    });

    return updateProfile;
  } catch (error) {
    console.log("Error updating profile", error);
    throw error;
  }
};

// FAVORITE PRODUCTS

// Find user's favorite products
export const findUniqueProducts = async () => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }

    const findProducts = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        products: true,
      },
    });

    return JSON.parse(JSON.stringify(findProducts));
  } catch (error) {
    console.log("Error finding products:", error);
    throw error;
  }
};

interface AddProductInput {
  id?: string;
  product_title?: string;
  product_price?: string;
  product_original_price?: string;
  product_star_rating?: string;
  product_num_ratings?: number;
  product_url?: string;
  product_photo?: string;
  asin?: string;
}

// Add a product to favorites
export const addFavoriteProduct = async (product: AddProductInput) => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }

    const addNewProduct = await db.product.create({
      data: {
        user: { connect: { email: session.user.email } },
        product_title: product.product_title,
        product_price: product.product_price,
        product_original_price: product.product_original_price,
        product_star_rating: product.product_star_rating,
        product_num_ratings: product.product_num_ratings,
        product_url: product.product_url,
        product_photo: product.product_photo,
        asin: product.asin,
      },
    });

    revalidatePath("dashboard");
    console.log(addNewProduct, "Product added to favorites");
    return addNewProduct;
  } catch (error: any) {
    console.log("Error adding product:", error);
    throw error;
  }
};

interface DeleteFavoriteProductInput {
  id?: string;
  product_title?: string;
  product_price?: string;
  product_original_price?: string;
  product_star_rating?: string;
  product_num_ratings?: number;
  product_url?: string;
  product_photo?: string;
  asin?: string;
}

// Delete a product from favorites
export const deleteFavoriteProduct = async (
  product: DeleteFavoriteProductInput
) => {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }

    const deleteFavoriteProduct = await db.product.delete({
      where: {
        id: product.id,
      },
    });
    revalidatePath("/moodboard");
    return deleteFavoriteProduct;
  } catch (error) {
    console.log("Error deleting product:", error);
    throw error;
  }
};

// UPLOADTHING MOODBOARD IMAGES

interface AddUploadedImagesInput {
  id?: string;
  email: string;
  image_url?: string;
  image_name?: string;
}

// Add uploaded images to moodboard
export const addUploadedImages = async (image: AddUploadedImagesInput) => {
  try {
    const addImage = await db.image.create({
      data: {
        user: { connect: { email: image.email } },
        image_url: image.image_url,
        image_name: image.image_name,
      },
    });

    revalidatePath("/moodboard");
    return addImage;
  } catch (error: any) {
    console.log("Error adding image:", error);
    throw error;
  }
};

// Find user's uploaded images
export const findUniqueImages = async () => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }

    const findImages = await db.image.findMany({
      where: {
        user: {
          email: session.user.email,
        },
      },
      select: {
        id: true,
        image_url: true,
        image_name: true,
      },
    });

    return JSON.parse(JSON.stringify(findImages));
  } catch (error) {
    console.log("Error finding images:", error);
    throw error;
  }
};

interface DeleteUploadedImageInput {
  id: string;
  image_url: string;
  image_name: string;
}
// Delete an uploaded image from moodboard
export const deleteUploadedImage = async (image: DeleteUploadedImageInput) => {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }
    console.log(image.id);
    const deleteImage = await db.image.delete({
      where: {
        id: image.id,
      },
    });
    revalidatePath("/moodboard");
    return deleteImage;
  } catch (error: any) {
    console.log("Error deleting image:", error);
    throw error;
  }
};
