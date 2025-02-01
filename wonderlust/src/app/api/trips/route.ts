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

export async function POST(req: NextRequest) { 
 
 try {
  await connectMongo();
  const body = await req.json()

  const { tripname, budget, travellers,
   startDay, endDay,
   destination ,userId} = body;
  const parsedStartDay = new Date(startDay);
  const parsedEndDay = new Date(endDay);

  if (!tripname || !budget || !travellers || !startDay || !endDay || !destination || !userId) {
    return NextResponse.json(
      { success: false, message: "Missing required fields" },
      { status: HttpStatusCode.BadRequest }
    );
  }
  
  const newTrip = new Trip({
   tripname:tripname,
   budget:budget,
   travellers:travellers,
   destination: destination,
   startDay:parsedStartDay,
   endDay: parsedEndDay,
   user:new mongoose.Types.ObjectId(userId)
  });

   await Trip.create(newTrip)
  
     return NextResponse.json({ success: true, newTrip }, { status: HttpStatusCode.Created, });
     
 } catch (error) {
  console.error("POST Error:", error);
  return NextResponse.json(
    { success: false, message: "Server Error", error: error.message },
    { status: HttpStatusCode.InternalServerError }
  );
}
}

export async function DELETE(req: NextRequest) {
  try {
    await connectMongo();
    const { tripId } = await req.json();

    const tripCheck = await Trip.findOne({_id: new mongoose.Types.ObjectId(tripId), user: new mongoose.Types.ObjectId(tempUserID)})
    
    if (tripCheck) {
       await Trip.findByIdAndDelete(tripId);

    return NextResponse.json(
      { success: true, message: "Trip deleted successfully"},
      { status: HttpStatusCode.OK }
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

export async function PUT(req: NextRequest) {
  try {
    await connectMongo();
    const body = await req.json()
  
    const { tripId ,tripname, budget, travellers,
     startDay, endDay,
     destination ,userId} = body;
  
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
        { status: HttpStatusCode.OK }
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