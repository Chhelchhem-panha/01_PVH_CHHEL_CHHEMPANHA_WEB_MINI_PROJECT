import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

export const authOption = {
  providers: [
    CredentialsProvider({
      async authorize(userInfo) {
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        const login = await loginService(newUserInfo);
        console.log("my status: ", login.status)

        if (login.status == 400) {
          redirect("/register")
        }

        return login;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

console.log("Auth Option: ", authOption)

const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
