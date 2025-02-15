"use client";
import { useState, useEffect } from "react";
import { TextField } from "@radix-ui/themes";
import Sidebar from "@/src/components/Sidebar";
import Accomodation from "@/src/components/TripDetails/Accomodation";
import Transport from "@/src/components/TripDetails/Transport";
import Loactions from "@/src/components/TripDetails/Locations";
import Timeline from "@/src/components/Timeline";
import SearchResultCard from "@/src/components/SearchResultCard";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function TripDetail() {
  const [trip, setTrip] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { tripId } = useParams();

  useEffect(() => {
    // Manual trips data
    const trips = [
      {
        tripname: "Beach Getaway",
        destination: "Delhi",
        budget: "2000",
        travellers: "3",
        startDay: "2025-07-01T00:00:00.000Z",
        endDay: "2025-07-10T00:00:00.000Z",
        user: "6792633eaa08eb6efef02261",
        tripObjId: "679e6e05189dd60ff447e7fd",
        locations: [],
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
        locations: [],
      },
    ];

    // Find the trip matching tripId from URL
    const selectedTrip = trips.find((t) => t.tripObjId === tripId);
    setTrip(selectedTrip);
  }, [tripId]);

  const events = [
    {
      title: "Transportation Medium",
      date: "Jan 10, 2024",
      description: "Train",
    },
    Accomodation(sidebarOpen, setSidebarOpen),
    { title: "Places to visit", date: "Jan 13, 2024", description: "" },
  ];

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await fetch(`/api/trips/${tripId}`); // Fetch the trip details
        const data = await response.json();
        if (data.success) {
          setTrip(data.trip); // Set the fetched trip data
        }
      } catch (error) {
        console.error("Error fetching trip details:", error);
      }
    };

    fetchTrip();
  }, [tripId]);

  if (!trip) return <div>Loading...</div>;

  return (
    <div>
      <div
        className={`w-full md:w-2/3 md:block ${
          sidebarOpen ? "hidden" : "block"
        }`}
      >
        <div className="flex items-center justify-between p-6 shadow-md  h-[35vh] ">
          {/* Image Block */}
          <div className="flex-1 h-[80%] bg-[var(--gray-2)] rounded-lg flex ">
            <image
              src="https://via.placeholder.com/150/000000/FFFFFF/?text=Photo"
              alt="TripImage"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Trip Info Block */}
          <div className="flex flex-col flex-1">
            <h2 className="text-[20px] font-bold flex">{trip.tripname}</h2>

            <div className="flex flex-col flex-1   px-8">
              <p className="text-[105x] mt-2">
                <strong>Budget:</strong> {trip.budget}
              </p>
              <p className="text-[15px] mt-2">
                <strong>Travelers:</strong> {trip.travellers}
              </p>
              <p className="text-[15px] mt-2">
                <strong>Destination:</strong> {trip.destination}
              </p>
            </div>
          </div>
          {/* Edit Button */}
          <div className="flex ">
            <button className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition">
              Edit
            </button>
          </div>
        </div>

        <div className="p-6 shadow-md ">
          {/* <Accomodation setSidebarOpen={setSidebarOpen}/> */}
          <Timeline>
            <Accomodation setSidebarOpen={setSidebarOpen} />
            <Transport setSidebarOpen={setSidebarOpen} />
            <Loactions setSidebarOpen={setSidebarOpen} />
          </Timeline>
        </div>
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <TextField.Root placeholder="Search...">
          <TextField.Slot>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </TextField.Slot>
        </TextField.Root>

        <SearchResultCard />

        <SearchResultCard />
      </Sidebar>
      {/* Timeline div */}
    </div>
  );
}
