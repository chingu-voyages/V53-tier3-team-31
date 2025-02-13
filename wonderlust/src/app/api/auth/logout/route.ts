import { NextResponse } from "next/server";

export async function GET() {

  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set({
    name: "wonderlust",
    value: "",
    path: "/",
    expires: new Date(0), 
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", 
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
  });

  return response;
}
