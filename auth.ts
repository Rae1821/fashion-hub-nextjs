import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./db";
import { saltAndHashPassword } from "./utils/helper";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },

  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "name",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const name = credentials.name as string;
        const email = credentials.email as string;
        const hash = saltAndHashPassword(credentials.password);

        let user: any = await db.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          user = await db.user.create({
            data: {
              name,
              email,
              hashedPassword: hash,
            },
          });
        } else {
          const isMatch = bcrypt.compareSync(
            credentials.password as string,
            user.hashedPassword
          );
          if (!isMatch) {
            throw new Error("Incorrect password");
          }
        }

        return user;
      },
    }),
  ],
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) {
  //       // User is available during sign-in
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   session({ session, token }) {
  //     session.user.id = token.id as string;
  //     return session;
  //   },
  // },
  // callbacks: {
  //   session({ session, user }) {
  //     session.user.id = user.id;
  //     return session;
  //   },
  // },
});
