import bcrypt from "bcryptjs";

// This is from bcryptdocumentation
export function saltAndHashPassword(password: any) {
  const saltRounds = 10; // Adjust the cost factor according to your security requirements
  const salt = bcrypt.genSaltSync(saltRounds); // Synchronously generate salt
  const hash = bcrypt.hashSync(password, salt); // Synchronously hash the password
  return hash; // return the hash directly as a string
}
