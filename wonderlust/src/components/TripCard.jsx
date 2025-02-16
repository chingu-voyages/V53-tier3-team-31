import { FaEdit, FaTrash } from 'react-icons/fa';
import TripForm from './TripForm';
import DeleteConfirm from './DeleteConfirm';
import Link from 'next/link';

export default function TripCard({ trip }) {
  return (
    <div
      style={{ backgroundColor: 'var(--gray-3)' }}
      className="p-6 rounded-md shadow-sm flex flex-col justify-between transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-100"
    >
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">{trip.tripname}</h2>
        <div className="flex space-x-2">
          <TripForm
            buttonValue={<FaEdit className="text-sm" />}
            title="Edit Trip"
            actionTitle="Save Trip"
            action="edit"
            id={trip._id}
            tripInfo={trip}
          />
          <DeleteConfirm
            buttonValue={<FaTrash className="text-sm" />}
            id={trip.tripObjId}
          />
        </div>
      </div>

      <div style={{ color: '--gray-12' }}>
        <p className="">
          <span className="font-semibold">Budget: </span>${trip.budget}
        </p>
        <p className="">
          <span className="font-semibold">Travelers: </span> {trip.travellers}
        </p>
        <p className="text-[12px] mt-3">
          <span className="font-semibold"> Date:</span>{' '}
          {new Date(trip.startDay).toLocaleDateString()}
        </p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <a
          href="#"
          className="text-green-600 font-medium hover:underline  transition-colors duration-300"
        >
          Planning
        </a>
        <Link
          href={`/dashboard/tripdetails/${trip._id}`}
          className="text-blue-600 font-medium  hover:text-blue-800 hover:bg-white/80 transition-colors duration-300 bg-white px-3 py-2 rounded-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
