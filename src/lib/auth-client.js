import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({

  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,

  // baseURL:"https://resell-hub-server.onrender.com",

  fetchOptions: {
    credentials: "include",
  }
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
} = authClient;