import {NextRequest, NextResponse} from "next/server";
import Trip from '@/models/CreateTrip'
import { HttpStatusCode } from "axios";
import connectMongo from "@/util/connect-mongo";

export async function GET() {  
    try {  
        await connectMongo();  
        const trips = await Trip.find();  
        return NextResponse.json({ data: trips });  
    } catch (error) {  
        return NextResponse.json({ error });  
    }  
}

export async function POST(req: NextRequest) { 
 
 try {
  await connectMongo();
  const body = await req.json()

  const { tripname, budget, travellers,
   startDay, endDay,
   destination } = body;
  const parsedStartDay = new Date(startDay);
  const parsedEndDay = new Date(endDay);
  
  const newTrip = new Trip({
   tripname:tripname,
   budget:budget,
   travellers:travellers,
   destination: destination,
   startDay:parsedStartDay,
   endDay:parsedEndDay,
  });


   await Trip.create(newTrip)
  
     return NextResponse.json({ success: true, newTrip }, { status: HttpStatusCode.Created, });
     
 } catch (error) {
  return NextResponse.json(   { status: HttpStatusCode.BadRequest,message:"not working, error on the server"}, )
}
}


