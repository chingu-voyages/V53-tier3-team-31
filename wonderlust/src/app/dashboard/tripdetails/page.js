"use client";
import { useState, useEffect } from "react";

export default function TripDetail() {
  const [trip, setTrip] = useState(null);
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
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
    ];
    setTrip(trips[0]);
  }, []);

  const handleAddLocation = () => {
    if (newLocation.trim() !== "") {
      setLocations([...locations, newLocation.trim()]);
      setNewLocation("");
      setShowInput(false);
    }
  };

  const handleRemoveLocation = (locationToRemove) => {
    setLocations(locations.filter((loc) => loc !== locationToRemove));
  };

  if (!trip) return <div>Loading...</div>; // Handle loading state properly

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-start w-[60%]">
      <div className="flex items-center justify-between p-6 bg-white shadow-md w-full h-[50vh]">
        {/* Image Block */}
        <div className="w-[70%] h-[80%] bg-gray-200 rounded-lg flex items-center justify-center">
          <img
            src="https://via.placeholder.com/150/000000/FFFFFF/?text=Photo"
            alt="Trip Image"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Trip Info Block */}
        <div className="flex flex-col items-start justify-center w-[50%] px-8">
          <h2 className="text-[30px] font-bold">{trip.tripname}</h2>
          <p className="text-[20px] mt-2">
            <strong>Budget:</strong> {trip.budget}
          </p>
          <p className="text-[20px] mt-2">
            <strong>Travelers:</strong> {trip.travellers}
          </p>
          <p className="text-[20px] mt-2">
            <strong>Destination:</strong> {trip.destination}
          </p>
        </div>

        {/* Edit Button */}
        <div className="flex mr-[8rem] mb-[15rem] w-[20%]">
          <button className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition">
            Edit
          </button>
        </div>
      </div>

      {/*  Destination Block */}
      <div className="flex flex-col items-start p-6 bg-white shadow-md w-full h-[50vh]">
        <h3 className="font-semibold flex items-center">
          Destination
          <button
            onClick={() => setShowInput(!showInput)}
            className="ml-2 text-blue-500 text-lg"
          >
            +
          </button>
        </h3>
        <div className="flex gap-2 flex-wrap mt-2">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-green-100 text-green-600 px-3 py-1 rounded text-sm"
            >
              <span>{location}</span>
              <button
                onClick={() => handleRemoveLocation(location)}
                className="text-red-500 text-xs"
              >
                ✖
              </button>
            </div>
          ))}
        </div>

        {showInput && (
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded text-sm w-full"
              placeholder="Enter new location"
            />
            <button
              onClick={handleAddLocation}
              className="bg-blue-500 text-white rounded px-3 py-1 text-sm"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}