import { useState } from "react";

export default function TripDetail({ trip }) {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAddLocation = () => {
    if (newLocation.trim() !== "") {
      setLocations([...locations, newLocation]);
      setNewLocation("");
      setShowInput(false);
    }
  };

  const handleRemoveLocation = (locationToRemove) => {
    setLocations(locations.filter((location) => location !== locationToRemove));
  };

  return (
    <div className="w-[700px] h-[700px] bg-white rounded-lg p-6 shadow-md">
      {/* Photo Block */}
      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
        <p className="text-gray-500">Photo</p>
      </div>

      <div className="flex items-center justify-between">
        <button className="px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition">
          Edit
        </button>

        <div className="flex gap-4 w-full ml-[90px]">
          {/* Trip Details Block */}
          <div className="flex-1">
            <h2 className="text-lg font-bold">{trip.title}</h2>
            <div className="mb-3 text-sm text-gray-700">
              <p>Budget: {trip.budget}</p>
              <p>Travelers: {trip.travelers}</p>
            </div>
          </div>

          {/* Destination Block */}
          <div className="flex-1">
            <h3 className="font-semibold flex items-center">
              Destination
              <button
                onClick={() => setShowInput(!showInput)}
                className="ml-2 text-blue-500"
              >
                +
              </button>
            </h3>
            <div className="flex gap-2 flex-wrap mt-1">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-xs">
                    {location}
                  </span>
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
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded text-sm"
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
