import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:"https://resell-hub-server.onrender.com/",
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
} = authClient;