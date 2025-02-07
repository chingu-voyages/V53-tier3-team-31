"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import TripForm from "@/src/components/TripForm";
import DeleteConfirm from "@/src/components/DeleteConfirm";
import TripDetail from "../../components/tripDetail"; // Import the TripDetail component

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
  const [selectedTrip, setSelectedTrip] = useState(null); // To track the selected trip for details
  const [showTripDetail, setShowTripDetail] = useState(false); // To toggle the popup
  const router = useRouter();

  const openTripDetail = (trip) => {
    setSelectedTrip(trip); // Set the selected trip
    setShowTripDetail(true); // Show the popup
  };

  const closeTripDetail = () => {
    setSelectedTrip(null); // Clear the selected trip
    setShowTripDetail(false); // Hide the popup
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: "var(--accent-1)" }}
    >
      <main className="max-w-6xl mx-auto p-4 ">
        <div className="flex justify-start items-center my-6">
          <TripForm
            buttonValue="+ Create New Trip"
            title="Create New Trip"
            actionTitle="Create Trip"
          />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, index) => (
            <div
              key={index}
              style={{ backgroundColor: "var(--gray-3)" }}
              className="p-6 rounded shadow flex flex-col justify-between transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{trip.title}</h2>
                <div className="flex space-x-4">
                  <div>
                    <TripForm
                      buttonValue={<FaEdit className="text-xl" />}
                      title="Edit Trip"
                      actionTitle="Save Trip"
                    />
                  </div>

                  <div>
                    <DeleteConfirm buttonValue={<FaTrash className="text-xl" />} />
                  </div>
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
                  onClick={(e) => {
                    e.preventDefault();
                    openTripDetail(trip); // Open the TripDetail popup
                  }}
                  className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* TripDetail Popup */}
      {showTripDetail && selectedTrip && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg relative">
            <TripDetail trip={selectedTrip} />
            <button
              onClick={closeTripDetail}
              className="absolute top-2 right-[0.8px] bg-red-300 text-white rounded-full px-4 py-2"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
