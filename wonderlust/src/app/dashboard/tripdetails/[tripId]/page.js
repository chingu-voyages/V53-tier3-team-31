'use client';
import { useState, useEffect } from 'react';
import { TextField } from '@radix-ui/themes';
import Sidebar from '@/src/components/Sidebar';
import Accomodation from '@/src/components/TripDetails/Accomodation';
import Transport from '@/src/components/TripDetails/Transport';
import Loactions from '@/src/components/TripDetails/Locations';
import Timeline from '@/src/components/Timeline';
import SearchResultCard from '@/src/components/SearchResultCard';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Loading from '@/src/components/Loading';

export default function TripDetail() {
  const [trip, setTrip] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { tripId } = useParams();

  useEffect(() => {
    // Manual trips data
    const trips = [
      {
        tripname: 'Beach Getaway',
        destination: 'Delhi',
        budget: '2000',
        travellers: '3',
        startDay: '2025-07-01T00:00:00.000Z',
        endDay: '2025-07-10T00:00:00.000Z',
        user: '6792633eaa08eb6efef02261',
        tripObjId: '679e6e05189dd60ff447e7fd',
        locations: [],
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
        locations: [],
      },
    ];

    // Find the trip matching tripId from URL
    const selectedTrip = trips.find((t) => t.tripObjId === tripId);
    setTrip(selectedTrip);
  }, [tripId]);

  const events = [
    {
      title: 'Transportation Medium',
      date: 'Jan 10, 2024',
      description: 'Train',
    },
    Accomodation(sidebarOpen, setSidebarOpen),
    { title: 'Places to visit', date: 'Jan 13, 2024', description: '' },
  ];

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await fetch(`/api/trips/${tripId}`); // Fetch the trip details
        const data = await response.json();
        if (data.success) {
          setTrip(data.trip); // Set the fetched trip data
        }
      } catch (error) {
        console.error('Error fetching trip details:', error);
      }
    };

    fetchTrip();
  }, [tripId]);

  if (!trip) return <Loading />;

  return (
    <div>
      <div
        className={`w-full md:w-2/3 md:block ${
          sidebarOpen ? 'hidden' : 'block'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between p-6 shadow-md h-auto md:h-[35vh]">
          {/* Image Block */}
          <div className="w-full md:w-1/3 h-[200px] md:h-full bg-[var(--gray-2)] rounded-lg mb-4 md:mb-0 flex">
            <Image
              src="/japan.jpg"
              width={200}
              height={200}
              alt="Picture of Trip"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Trip Info Block */}
          <div className="flex flex-col w-full flex-1 md:px-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl md:text-base lg:text-[2rem] font-bold">
                {trip.tripname}
              </h2>
              {/* Edit Button with Icon */}
              <button className="flex items-center px-6 py-2 ml-5 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-400 transition">
                Edit
              </button>
            </div>
            <div className="flex flex-col mt-2 " style={{ color: '--gray-12' }}>
              <p className="text-[1rem] md:text-base lg:text-lg ">
                {' '}
                <span className="font-semibold ">Budget: </span>
                {trip.budget}
              </p>
              <p className="text-[1rem] md:text-base lg:text-lg ">
                <span className=" font-semibold">Travelers: </span>{' '}
                {trip.travellers}
              </p>
              <p className="text-[1rem] md:text-base lg:text-lg  capitalize">
                <span className="font-semibold ">Destination: </span>{' '}
                {trip.destination}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-md ">
          <Timeline>
            <Accomodation setSidebarOpen={setSidebarOpen} />
            <Transport setSidebarOpen={setSidebarOpen} />
            <Loactions setSidebarOpen={setSidebarOpen} />
          </Timeline>
        </div>
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <TextField.Root placeholder="Search...">
          <TextField.Slot>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </TextField.Slot>
        </TextField.Root>

        <SearchResultCard />

        <SearchResultCard />
      </Sidebar>
    </div>
  );
}
