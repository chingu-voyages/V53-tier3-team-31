'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import TripForm from '@/src/components/TripForm';
import DeleteConfirm from '@/src/components/DeleteConfirm';
import useSessionUser from '@/util/useSessionUser';

export default function Dashboard() {
  const [trips, setTrips] = useState([
    {
      tripname: 'Beach Getaway',
      destination: 'Delhi',
      budget: '2000',
      travellers: '3',
      startDay: '2025-07-01T00:00:00.000Z',
      endDay: '2025-07-10T00:00:00.000Z',
      user: '6792633eaa08eb6efef02261',
      tripObjId: '679e6e05189dd60ff447e7fd',
    },
    {
      tripname: 'Sample Card 2',
      destination: 'Delhi',
      budget: '2000',
      travellers: '3',
      startDay: '2025-07-01T00:00:00.000Z',
      endDay: '2025-07-10T00:00:00.000Z',
      user: '6792633eaa08eb6efef02261',
      tripObjId: '679e6e05189dd60ff447e7ff',
    },
    {
      tripname: 'Sample Card 3',
      destination: 'Delhi',
      budget: '2000',
      travellers: '3',
      startDay: '2025-07-01T00:00:00.000Z',
      endDay: '2025-07-10T00:00:00.000Z',
      user: '6792633eaa08eb6efef02261',
      tripObjId: '679e6ec4189dd60ff447e804',
    },
  ]);
  const router = useRouter();
  const user = useSessionUser();

  return (
    <div
      className=" min-h-screen font-sans"
      style={{ backgroundColor: 'var(--accent-1)' }}
    >
      <main className="max-w-6xl mx-auto p-4 ">
        <div className="flex justify-start items-center my-6">
          <TripForm
            buttonValue="+ Create New Trip"
            title="Create New Trip"
            actionTitle="Create Trip"
            action="new"
            user={user}
          />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, index) => (
            <div
              key={index}
              style={{ backgroundColor: 'var(--gray-3)' }}
              className=" p-6 rounded shadow flex flex-col justify-between transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{trip.tripname}</h2>
                <div className="flex space-x-4">
                  <div>
                    <TripForm
                      buttonValue={<FaEdit className="text-xl" />}
                      title="Edit Trip"
                      actionTitle="Save Trip"
                      action="edit"
                      id={trip.tripObjId}
                      tripInfo={trip}
                      user={user}
                    />
                  </div>

                  <div>
                    <DeleteConfirm
                      buttonValue={<FaTrash className="text-xl" />}
                      id={trip.tripObjId}
                      user={user}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-600">{trip.startDay}</p>
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

                <a className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-300 cursor-pointer">
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
