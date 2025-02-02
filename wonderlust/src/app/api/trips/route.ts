import {NextRequest, NextResponse} from "next/server";
import Trip from '@/models/CreateTrip'
import { HttpStatusCode } from "axios";
import connectMongo from "@/util/connect-mongo";
import mongoose from "mongoose";

// Get somehow the user objectID here using middleware
const tempUserID = "6792633eaa08eb6efef02261" 


export async function GET(req: NextRequest) {
  try {
    await connectMongo();
    const tripList = await Trip.find({ user: new mongoose.Types.ObjectId(tempUserID) });
    console.log(tripList)
    if (tripList.length > 0){
    return NextResponse.json({
       success: true,
       tripList : tripList
    })
    } else {
      return NextResponse.json({
        success: false,
        message: "No trip found"
     })
    }
}catch (error) {
  console.error("GET Error:", error);
  return NextResponse.json(
    { success: false, message: "Internal Server Error" },
    { status: HttpStatusCode.InternalServerError }
  );
}
}