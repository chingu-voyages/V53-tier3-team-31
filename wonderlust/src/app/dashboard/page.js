"use client";

import { useState, useEffect } from "react";
import TripForm from "@/src/components/TripForm";
import TripCard from "../../components/TripCard";
export default function Dashboard() {
  const [trips, setTrips] = useState([
    {
      tripname: "Beach Getaway",
      destination: "Delhi",
      budget: "2000",
      travellers: "3",
      startDay: "2025-07-01T00:00:00.000Z",
      endDay: "2025-07-10T00:00:00.000Z",
      user: "6792633eaa08eb6efef02261",
      tripObjId: "679e6e05189dd60ff447e7fd",
    },
    {
      tripname: "Sample Card 2",
      destination: "Delhi",
      budget: "2000",
      travellers: "3",
      startDay: "2025-07-01T00:00:00.000Z",
      endDay: "2025-07-10T00:00:00.000Z",
      user: "6792633eaa08eb6efef02261",
      tripObjId: "679e6e05189dd60ff447e7ff",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch("/api/trips"); // API call to get trips
        const data = await response.json();

        if (data.success) {
          setTrips(data.tripList); // Update state with fetched trips
        } else {
          setError(data.message || "No trips found.");
        }
      } catch (err) {
        setError("Error fetching trips. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);
  return (
    <div
      className=" min-h-screen font-sans"
      style={{ backgroundColor: "var(--accent-1)" }}
    >
      <main className="max-w-6xl mx-auto p-4 ">
        <div className="flex justify-start items-center my-6">
          <TripForm
            buttonValue="+ Create New Trip"
            title="Create New Trip"
            actionTitle="Create Trip"
            action="new"
          />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, index) => (
            <TripCard key={trip.tripObjId} trip={trip} />
          ))}
        </div>
      </main>
    </div>
  );
}
