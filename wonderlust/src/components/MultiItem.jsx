import React from 'react';

function MultiItem() {
      const [locations, setLocations] = useState([]);
      const [newLocation, setNewLocation] = useState("");
      const [showInput, setShowInput] = useState(false);
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
    return (
        <div>
            Destination Block
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

export default MultiItem;