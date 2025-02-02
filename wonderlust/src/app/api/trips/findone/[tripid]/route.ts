import {NextRequest, NextResponse} from "next/server";
import Trip from '@/models/CreateTrip'
import { HttpStatusCode } from "axios";
import connectMongo from "@/util/connect-mongo";



// Get somehow the user objectID here using middleware
const tempUserID = "6792633eaa08eb6efef02261" 

export async function GET(req: NextRequest) {
    try {
      await connectMongo();
      const url = new URL(req.url);
      const tripId = url.pathname.split('/').pop();
      
      const trip = await Trip.findById(tripId);
      if (trip) {
      return NextResponse.json({
         success: true,
         trip : trip
      })
    }
     else {
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