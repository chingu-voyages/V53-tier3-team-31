"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const [trips, setTrips] = useState([
    {
      title: "Sample Card 1",
      date: "Aug 1 - Aug 15, 2024",
      budget: "$5,000",
      travelers: 3,
    },
    {
      title: "Sample Card 2",
      date: "Nov 10 - Nov 30, 2024",
      budget: "$3,000",
      travelers: 2,
    },
    {
      title: "Sample Card 3",
      date: "Dec 20 - Jan 5, 2025",
      budget: "$10,000",
      travelers: 4,
    },
  ]);
  const router = useRouter();

  const handleCreateTrip = () => {
    router.push("/dashboard/new");
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4">
        <div className="flex justify-start items-center my-6">
          <button
            onClick={handleCreateTrip}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:scale-105"
          >
            + Create New Trip
          </button>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow flex flex-col justify-between transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{trip.title}</h2>
                <div className="flex space-x-4">
                  <button className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                    <FaEdit className="text-xl" />
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition-colors duration-300">
                    <FaTrash className="text-xl" />
                  </button>
                </div>
              </div>

              <div>
                <p className="text-gray-600">{trip.date}</p>
                <p className="text-gray-600">Budget: {trip.budget}</p>
                <p className="text-gray-600">Travelers: {trip.travelers}</p>
              </div>

              <div className="flex justify-between items-center mt-6">
                <a
                  href="#"
                  className="text-green-600 font-medium hover:underline hover:text-green-700 transition-colors duration-300"
                >
                  Planning
                </a>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
