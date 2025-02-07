"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function TripDetail() {
  const { tripId } = useParams();
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
      {
        tripname: "Sample Card 3",
        destination: "Delhi",
        budget: "2000",
        travellers: "3",
        startDay: "2025-07-01T00:00:00.000Z",
        endDay: "2025-07-10T00:00:00.000Z",
        user: "6792633eaa08eb6efef02261",
        tripObjId: "679e6ec4189dd60ff447e804",
        locations: [],
      },
    ];

    const foundTrip = trips.find((t) => t.tripObjId === tripId);
    if (foundTrip) {
      setTrip(foundTrip);
      setLocations(foundTrip.locations || []);
    }
  }, [tripId]);

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

  if (!trip)
    return <p className="text-center mt-10">Loading trip details...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[40%] min-h-[90vh] bg-white rounded-lg p-8 shadow-lg flex flex-col gap-6">
        {/* Photo Block */}

        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <img
            src="https://via.placeholder.com/150/000000/FFFFFF/?text=Photo"
            alt="Photo"
            className="w-auto h-auto max-w-full max-h-full"
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition">
            Edit
          </button>

          {/* Trip Info  */}
          <div className="text-lg text-gray-700 flex flex-col items-start p-4 w-full md:w-[40%]">
            <h2 className="text-xl font-bold">{trip.tripname}</h2>
            <p>
              <strong>Budget:</strong> {trip.budget}
            </p>
            <p>
              <strong>Travelers:</strong> {trip.travellers}
            </p>
            <p>
              <strong>Destination:</strong> {trip.destination}
            </p>
          </div>

          {/*  Destination Block */}
          <div className="p-4 w-full md:w-[40%]">
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
      </div>
    </div>
  );
}
