import { HttpStatusCode } from "axios";
import connectMongo from "../../../../../util/connect-mongo";
import User from "../../../../../models/User";
import { CreateUserDto } from "../../../../../dto/create-user.dto";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

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
                    return NextResponse.json(
                        { message: "Logged in successfully" },
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