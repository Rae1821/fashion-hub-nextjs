"use server";

import { auth, signIn, signOut } from "@/auth";
import { db } from "@/db";
import { connect } from "http2";
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
  await signIn(provider, { redirectTo: "/" })
    .then((r) => {
      console.log("there was a result");
      console.log(r);
    })
    .catch((e) => {
      console.log("there was an error");
      console.log(e);
    });
  revalidatePath("/");
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

// Find profile
export const findUniqueProfile = async () => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }

    const userEmail = session.user.email;

    const findProfile = await db.user.findUnique({
      where: {
        email: userEmail,
      },
      select: {
        email: true,
        profile: true,
      },
    });

    return JSON.parse(JSON.stringify(findProfile));
  } catch (error) {
    console.log("Error finding profile:", error);
    throw error;
  }
};

// Update or Create Profile
export const updateOrCreateProfile = async (input: any) => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }
    const userEmail = session.user.email;

    const upsertProfile = await db.profile.upsert({
      where: {
        userEmail,
      },
      update: {
        height: input.height,
        weight: input.weight,
        shape: input.shape,
        style: input.style,
      },
      create: {
        height: input.height,
        weight: input.weight,
        shape: input.shape,
        style: input.style,
        user: {
          connect: { email: userEmail },
        },
      },
    });
    revalidatePath("/dashboard");

    return JSON.parse(JSON.stringify(upsertProfile));
  } catch (error) {
    console.log("Error updating or creating profile", error);
  }
};

// Create profile
interface CreateProfileInput {
  height?: string;
  weight?: string;
  shape?: string;
  style?: string;
}

export const createProfile = async (input: CreateProfileInput) => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }

    const userEmail = session.user.email;

    const profileCheck = findUniqueProfile();

    if (!profileCheck) {
      const newProfile = await db.profile.create({
        data: {
          height: input.height,
          weight: input.weight,
          shape: input.shape,
          style: input.style,
          user: {
            connect: { email: userEmail },
          },
        },
      });
      return newProfile;
    }
  } catch (error: any) {
    console.log("Error creating profile:", error);
    throw error;
  }
};

// Update profile

interface UpdateProfileInput {
  height?: string;
  weight?: string;
  shape?: string;
  style?: string;
}
export const updateProfile = async (input: UpdateProfileInput) => {
  try {
    const session = await auth();

    const userId = session?.user?.id;

    const updateProfile = await db.profile.update({
      where: {
        id: userId,
      },
      data: {
        height: input.height,
        weight: input.weight,
        shape: input.shape,
        style: input.style,
        user: {
          connect: { id: userId },
        },
      },
    });

    return updateProfile;
  } catch (error) {
    console.log("Error updating profile", error);
    throw error;
  }
};

// Delete profile
interface DeleteProfileInput {
  height?: string;
  weight?: string;
  shape?: string;
  style?: string;
}
export const deleteProfile = async (input: DeleteProfileInput) => {
  try {
    const session = await auth();

    const userId = session?.user?.id;

    const deleteProfile = await db.profile.delete({
      where: {
        id: userId,
      },
    });

    return deleteProfile;
  } catch (error) {
    console.log("Error deleting profile", error);
    throw error;
  }
};

// Favorite Products

// Find user's favorite products
export const findUniqueProducts = async () => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }

    const userEmail = session.user.email;

    const findProducts = await db.user.findFirst({
      where: {
        email: userEmail,
      },
      select: {
        email: true,
        products: {
          select: {
            id: true,
            product_title: true,
            product_price: true,
            product_original_price: true,
            product_star_rating: true,
            product_num_ratings: true,
            product_url: true,
            product_photo: true,
          },
        },
      },
    });

    return JSON.parse(JSON.stringify(findProducts));
  } catch (error) {
    console.log("Error finding products:", error);
    throw error;
  }
};

interface AddProductInput {
  product_title?: string;
  product_price?: string;
  product_original_price?: string;
  product_star_rating?: string;
  product_num_ratings?: number;
  product_url?: string;
  product_photo?: string;
  asin?: string;
}

// Add product to favorites
// export const addProduct = async (input: AddProductInput) => {
//   try {
//     const session = await auth();
//     if (!session || !session.user || !session.user.email) {
//       throw new Error("User not authenticated");
//     }

//     // const userId = session.user.id;
//     const userEmail = session.user.email;

//     // Ensure the input is not null or undefined
//     if (!input) {
//       throw new Error("Invalid input");
//     }

//     // Use for debugging
//     console.log("Input:", input);

//     const newProduct = {
//       product_title: input.product_title,
//       product_price: input.product_price,
//       product_original_price: input.product_original_price,
//       product_star_rating: input.product_star_rating,
//       product_num_ratings: input.product_num_ratings,
//       product_url: input.product_url,
//       product_photo: input.product_photo,
//       asin: input.asin,
//     };

//     // use for debugging
//     console.log("New Product:", newProduct);

//     const productId = input.asin;

//     await db.products.upsert({
//       where: {
//         id: productId,
//         userEmail,
//       },
//       update: newProduct,
//       create: {
//         ...newProduct,
//         userEmail,
//       },
//     });
//     console.log("Product added to favorites");
//     // return addProduct;
//   } catch (error: any) {
//     console.log("Error adding product:", error);
//     throw error;
//   }
// };

export const addProduct = async (product: AddProductInput) => {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      throw new Error("User not authenticated");
    }

    // const userId = session.user.id;
    const userEmail = session.user.email;

    // Ensure the input is not null or undefined
    if (!product) {
      throw new Error("Invalid product");
    }

    // Use for debugging
    // console.log("Product:", product);

    const newProduct = {
      product_title: product.product_title,
      product_price: product.product_price,
      product_original_price: product.product_original_price,
      product_star_rating: product.product_star_rating,
      product_num_ratings: product.product_num_ratings,
      product_url: product.product_url,
      product_photo: product.product_photo,
      asin: product.asin,
    };

    // use for debugging
    // console.log("New Product:", newProduct);

    // const productId = product.asin;

    await db.product.create({
      data: {
        user: { connect: { email: userEmail } },
        ...newProduct,
      },
    });

    // await db.products.upsert({
    //   where: {
    //     id: productId,
    //     userEmail,
    //   },
    //   update: newProduct,
    //   create: {
    //     ...newProduct,
    //     userEmail,
    //   },
    // });
    console.log("Product added to favorites");
    // return addProduct;
  } catch (error: any) {
    console.log("Error adding product:", error);
    throw error;
  }
};

interface DeleteProductInput {
  asin: string;
  product_title?: string;
  product_price?: string;
  product_original_price?: string;
  product_star_rating?: string;
  product_num_ratings?: number;
  product_url?: string;
  product_photo?: string;
}

// delete product from favorites
// export const deleteProduct = async (input: DeleteProductInput) => {
//   try {
//     const session = await auth();

//     const userId = session?.user?.id;

//     const productId = findUniqueProducts();

//     const deleteProduct = await db.user.update({
//       where: {
//         id: userId,
//       },
//       data: {
//         products: {
//           delete: {
//             id: productId,
//           },
//         },
//       },
//     });

//     return deleteProduct;
//   } catch (error) {
//     console.log("Error deleting profile", error);
//     throw error;
//   }
// };

// delete product from favorites
export const deleteProduct = async (input: DeleteProductInput) => {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      throw new Error("User not authenticated");
    }

    const userId = session.user.id;

    // Assuming findUniqueProducts is a function that returns the user's products
    const userProducts = await findUniqueProducts();

    if (!userProducts || !userProducts.products) {
      throw new Error("User's products not found");
    }

    // Find the product ID to delete
    const productId: string | undefined = userProducts.products.findU(
      (product: { id: string }) => product.id === input.asin
    )?.id;

    if (!productId) {
      throw new Error("Product not found");
    }

    const deleteProduct = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        products: {
          delete: {
            id: productId,
          },
        },
      },
    });

    return deleteProduct;
  } catch (error) {
    console.log("Error deleting product", error);
    throw error; // Re-throw the error after logging it
  }
};
