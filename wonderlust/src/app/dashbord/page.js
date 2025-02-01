"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSun, FaEdit, FaTrash } from "react-icons/fa";

export default function Dashboard() {
  const [trips, setTrips] = useState([
    {
      title: "Europe Adventure",
      date: "Aug 1 - Aug 15, 2024",
      budget: "$5,000",
      travelers: 3,
    },
  ]);
  const router = useRouter();

  const handleCreateTrip = () => {
    router.push("/dashboard/new");
  };

  return (
    <div className="bg-gray-100 h-screen font-sans">
      <header className="w-full bg-blue-500 py-4 px-8 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">Wanderlust</h1>
        <div className="flex items-center">
          <FaSun className="text-white text-lg cursor-pointer" />
          <div className="ml-6 mr-4">John Doe</div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded mr-2">
            Logout
          </button>
        </div>
      </header>
      <main className="w-[40rem] max-w-4xl p-4">
        <div className="flex justify-start items-center my-6">
          <button
            onClick={handleCreateTrip}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          >
            + Create New Trip
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow flex justify-between items-start"
            >
              <div>
                <h2 className="text-xl font-bold">{trip.title}</h2>
                <p className="text-gray-600">{trip.date}</p>
                <p className="text-gray-600">Budget: {trip.budget}</p>
                <p className="text-gray-600">
                Travelers : {trip.travelers} 
                </p>
                <p className="text-green-600 font-medium">Planning</p>

              </div>
                <p className="text-blue-600 font-medium mt-[6rem] mr-[-23rem]">View Details</p>
              <div className="flex items-center space-x-4">
                <button className="text-blue-500">
                  <FaEdit className="text-xl" />
                </button>
                <button className="text-red-500">
                  <FaTrash className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
