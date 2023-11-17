import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "src/lib/prisma";

async function getUser(email) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await getUser(credentials.email);
        if (!user) {
          return null;
        }
        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        delete user.password;
        if (passwordsMatch) return user;

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
