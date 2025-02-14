import { FaEdit, FaTrash } from "react-icons/fa";
import TripForm from "./TripForm";
import DeleteConfirm from "./DeleteConfirm";
import Link from "next/link";

export default function TripCard({ trip }) {
  return (
    <div
      style={{ backgroundColor: "var(--gray-3)" }}
      className="p-6 rounded shadow flex flex-col justify-between transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{trip.tripname}</h2>
        <div className="flex space-x-4">
          <TripForm
            buttonValue={<FaEdit className="text-xl" />}
            title="Edit Trip"
            actionTitle="Save Trip"
            action="edit"
            id={trip.tripObjId}
            tripInfo={trip}
          />
          <DeleteConfirm
            buttonValue={<FaTrash className="text-xl" />}
            id={trip.tripObjId}
          />
        </div>
      </div>

      <div>
        <p className="text-gray-600">
          {new Date(trip.startDay).toLocaleDateString()}
        </p>
        <p className="text-gray-600">Budget: {trip.budget}</p>
        <p className="text-gray-600">Travelers: {trip.travellers}</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <a
          href="#"
          className="text-green-600 font-medium hover:underline hover:text-green-700 transition-colors duration-300"
        >
          Planning
        </a>
        <Link
          href={`/dashboard/tripdetails/${trip.tripObjId}`}
          className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
