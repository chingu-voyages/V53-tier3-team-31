import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/util/connect-mongo';
import Trip from '@/models/CreateTrip';

// Correct way to handle dynamic API routes in Next.js 15
export async function GET(request: NextRequest, context: { params: { tripId: string } }) {
  try {
    await connectMongo();

    const { tripId } = context.params; // Correctly accessing tripId

    // Find the trip by tripId
    const trip = await Trip.findOne({ tripObjId: tripId });

    if (!trip) {
      return NextResponse.json({ message: 'Trip not found' }, { status: 404 });
    }

    return NextResponse.json(trip);
  } catch (error) {
    console.error('Error fetching trip:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
