"use server";

import { signIn } from "../auth";

export async function authenticate(credentials) {
  try {
    // const { email, password } = credentials;

    await signIn("credentials", credentials);
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw error;
  }
}
