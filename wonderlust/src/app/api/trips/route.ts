import {NextRequest, NextResponse} from "next/server";
import Trip from '@/models/CreateTrip'
import { HttpStatusCode } from "axios";
import connectMongo from "@/util/connect-mongo";


export async function GET(req: NextRequest,) {
  try {
    await connectMongo();
    const { searchParams } =  new URL(req.url);
    
    const userId = searchParams.get("userId");
    
    const tripList = await Trip.find({ user: userId });
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