import bcrypt from "bcryptjs";

// This is from bcryptdocumentation
export function saltAndHashPassword(password: any) {
  const saltRounds = 10; // Adjust the cost factor according to your security requirements
  const salt = bcrypt.genSaltSync(saltRounds); // Synchronously generate salt
  const hash = bcrypt.hashSync(password, salt); // Synchronously hash the password
  return hash; // return the hash directly as a string
}

// Fetch products from the Amazon API
export async function fetchClothing({ searchItem }: { searchItem: string }) {
  const headers = {
    "X-RapidAPI-Key": "85109d553dmshaef4cc1a6980b3dp1d833fjsne5ad9b4d1cfa",
    "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchItem}&limit=5&page=1`,
      {
        headers,
      }
    );
    // parse the response as json
    const result = await response.json();

    return result.data.products;
  } catch (error) {
    console.log(error);
  }
}
