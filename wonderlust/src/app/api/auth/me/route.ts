
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  console.log('hello')
  const token = req.cookies.get("wonderlust")?.value; 

  if (!token) {
    return NextResponse.json({ message: "Unauthorized: No token provided" }, { status: 401 });
  }

  try {
 
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    
 
    return NextResponse.json({ message: "Logged in successfully yaa", user: decoded }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Invalid token", error }, { status: 401 });
  }
}

