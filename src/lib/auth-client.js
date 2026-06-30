import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({

  // baseURL: "http://localhost:5000",

  baseURL:"https://resell-hub-server.onrender.com",

  fetchOptions: {
    credentials: "include",
  }
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
} = authClient;