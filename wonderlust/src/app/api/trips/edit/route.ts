import {NextRequest, NextResponse} from "next/server";
import Trip from '@/models/CreateTrip'
import { HttpStatusCode } from "axios";
import connectMongo from "@/util/connect-mongo";
import mongoose from "mongoose";
const userId = "6792633eaa08eb6efef02261"

export async function PUT(req: NextRequest) {
    try {
      await connectMongo();
      const body = await req.json()
    
      const { tripId ,tripname, budget, travellers,
       startDay, endDay,
       destination} = body;
    
      if (!tripname || !budget || !travellers || !startDay || !endDay || !destination || !userId) {
        return NextResponse.json(
          { success: false, message: "Missing required fields" },
          { status: HttpStatusCode.BadRequest }
        );
      }
  
      const updatedData = 
        {
          tripname:tripname,
          budget:budget,
          travellers:travellers,
          destination: destination,
          startDay: startDay,
          endDay: endDay,
          user:new mongoose.Types.ObjectId(userId)
         }
      const checker = await Trip.findByIdAndUpdate(tripId, updatedData)
      if (checker) {
        return NextResponse.json(
          { success: true, message: "Trip updated successfully"},
          { status: HttpStatusCode.Ok }
        );
      }
     
      return NextResponse.json(
          { success: false, message: "Trip not found"},
          { status: HttpStatusCode.BadRequest }
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