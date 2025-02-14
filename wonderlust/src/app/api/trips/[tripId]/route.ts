import { NextResponse } from "next/server";
import Trip from "@/models/CreateTrip";
import connectMongo from "@/util/connect-mongo";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { tripId: string } }
) {
  try {
    await connectMongo();

    const { tripId } = params;

    if (!tripId || !mongoose.Types.ObjectId.isValid(tripId)) {
      return NextResponse.json({ message: "Invalid trip ID" }, { status: 400 });
    }

    const trip = await Trip.findById(tripId);
    if (!trip) {
      return NextResponse.json({ message: "Trip not found" }, { status: 404 });
    }

    return NextResponse.json(trip, { status: 200 });
  } catch (error) {
    console.error("Error fetching trip:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
