import {NextRequest, NextResponse} from "next/server";
import Trip from '@/models/CreateTrip'
import { HttpStatusCode } from "axios";
import connectMongo from "@/util/connect-mongo";
import User from "@/models/User";

export async function POST(req: NextRequest) { 
 
    try {
     await connectMongo();
     const body = await req.json()
   
     const { tripname, budget, travellers,
      startDay, endDay,
        destination, email } = body;
        
      
     const parsedStartDay = new Date(startDay);
     const parsedEndDay = new Date(endDay);
   
     if (!tripname || !budget || !travellers || !startDay || !endDay || !destination || !email) {
       return NextResponse.json(
         { success: false, message: "Missing required fields" },
         { status: HttpStatusCode.BadRequest }
       );
     }
     const user = await User.findOne({email})
     
     const newTrip = new Trip({
      tripname:tripname,
      budget:budget,
      travellers:travellers,
      destination: destination,
      startDay:parsedStartDay,
      endDay: parsedEndDay,
      user:user._id
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