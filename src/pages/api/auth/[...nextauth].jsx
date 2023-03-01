import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { useWorkerLoginMutation } from "@/features/auth/worker/workerApi";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const res = await fetch(
          `http://localhost:3001/api/v1/auth/workers/login`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ email, password }),
          }
        );

        const user = await res.json();

        if (user) {
          return user;
        } else return null;
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  callbacks: {
    async session({ session, token }) {
      console.log(token);
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});
