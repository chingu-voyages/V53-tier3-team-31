import { HttpStatusCode } from "axios";
import connectMongo from "../../../../../util/connect-mongo";
import User from "../../../../../models/User";
import { CreateUserDto } from "../../../../../dto/create-user.dto";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';


export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body: CreateUserDto = await req.json();

    const { email, password } = body;

    if (email && password) {
      const userCheck = await User.findOne({ email });

      if (userCheck) {
        const passwordMatches = await bcryptjs.compare(
          password,
          userCheck.password
        );
        if (passwordMatches) {
          const token = jwt.sign(
            { id: userCheck._id, email: userCheck.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" } 
          );
          return NextResponse.json(
            { message: "Logged in successfully",token },
            { status: 200 }
          );
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
    console.error("Error during signin:", error);
    return NextResponse.json(
      { message: error.message },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}
