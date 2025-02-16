import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      image?: string;
      accessToken?: string;
      loginMethod?: string;
    } & DefaultSession["user"];
  }
  
  interface User {
    id: string;
    email: string;
    name?: string;
    image?: string;
    accessToken?: string;
    loginMethod?: string;
  }
  interface Profile extends DefaultProfile{
    picture?: string;
  }
}
