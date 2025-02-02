import {NextRequest, NextResponse} from "next/server";
import Trip from '@/models/CreateTrip'
import { HttpStatusCode } from "axios";
import connectMongo from "@/util/connect-mongo";
import mongoose from "mongoose";

// Get somehow the user objectID here using middleware
const tempUserID = "6792633eaa08eb6efef02261" 

export async function DELETE(req: NextRequest) {
    try {
      await connectMongo();
      const { tripId } = await req.json();
  
      const tripCheck = await Trip.findOne({_id: new mongoose.Types.ObjectId(tripId), user: new mongoose.Types.ObjectId(tempUserID)})
      
      if (tripCheck) {
         await Trip.findByIdAndDelete(tripId);
  
      return NextResponse.json(
        { success: true, message: "Trip deleted successfully"},
        { status: HttpStatusCode.Ok }
      );
      }
      return NextResponse.json(
        { success: false, message: "Authentication failed or missing fields or trip not found" },
        { status: HttpStatusCode.InternalServerError }
      );
    }
    catch (error) {
      console.error("Delete Error:", error);
      return NextResponse.json(
        { success: false, message: "Server Error", error: error.message },
        { status: HttpStatusCode.InternalServerError }
      );
    }
  }