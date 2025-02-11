import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
   const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const passportToken = req.cookies.get("wonderlust"); 

  const publicRoutes = ["/", "/auth/signin", "/auth/signup"];

  //  public routes
  if (publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Protect routes
  if (!session && !passportToken) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protects all /dashboard pages
};
