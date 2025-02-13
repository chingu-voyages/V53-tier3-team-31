import { NextResponse } from 'next/server';
import connectMongo from "@/util/connect-mongo";
import Trip from '@/models/CreateTrip'

export async function GET(request: Request, { params }: { params: { tripId: string } }) {
  try {
    await connectMongo();

    // Find the trip by tripId
    const trip = await Trip.findOne({ tripObjId: params.tripId });

    if (!trip) {
      return NextResponse.json({ message: 'Trip not found' }, { status: 404 });
    }

    return NextResponse.json(trip);
  } catch (error) {
    console.error("Error fetching trip:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
