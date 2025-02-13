import { HttpStatusCode } from "axios";
import connectMongo from "../../../../../util/connect-mongo";
import User from "../../../../../models/User";
import { CreateUserDto } from "../../../../../dto/create-user.dto";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
import { serialize } from "cookie";


export async function POST(req: NextRequest) {
  const JWT_SECRET = process.env.JWT_SECRET;
  try {
    await connectMongo();
    const body: CreateUserDto = await req.json();

    const { email, password } = body;

    if (email && password) {
      const userCheck = await User.findOne({ email });
console.log(userCheck)
      if (userCheck) {
        const passwordMatches = await bcryptjs.compare(
          password,
          userCheck.password
        );
        
        if (passwordMatches) {
           const token = jwt.sign({
            name: userCheck.user,
            email: userCheck.email,
            id: userCheck._id
          },
          JWT_SECRET,
          { expiresIn: '1d' })
          

            const cookie = serialize("wonderlust", token, {
              httpOnly: true, 
              secure: true,
              sameSite: "None",
              path: "/",
            });
          
            const response= NextResponse.json(
              { message: "Logged in successfully" },
              { status: 200 }
            );


           
  response.headers.set("Set-Cookie", cookie);
         
          return response
        }
        return NextResponse.json(
          { message: "Incorrect email or password" },
          { status: HttpStatusCode.Unauthorized }
        );
      }
    }
    return NextResponse.json(
      { message: "Incorrect email or password" },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}
