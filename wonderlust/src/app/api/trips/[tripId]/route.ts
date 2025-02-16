import { NextResponse } from "next/server";
import connectMongo from "@/util/connect-mongo";
import Trip from "@/models/CreateTrip";

export async function GET(req, { params }) {
  try {
    await connectMongo();
    const { tripId } = await params;
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return NextResponse.json(
        { success: false, message: "Trip not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, trip }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
