'use client';

import { useState, useEffect } from 'react';
import TripForm from '@/src/components/TripForm';
import TripCard from '../../components/TripCard';
import Loading from '@/src/components/Loading';

export default function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    fetch('/api/auth/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch((error) => console.error('Error:', error));
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchTrips = async () => {
    try {
      const response = await fetch(`/api/trips?userId=${user?.id}`, {
        method: 'GET',
      }); // API call to get trips
      const data = await response.json();

      if (data.success) {
        setTrips(data.tripList); // Update state with fetched trips
      } else {
        setError(data.message || 'No trips found.');
      }
    } catch (err) {
      setError('Error fetching trips. Try again later.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!user?.id) return;
    fetchTrips();
  }, [user]);

  return (
    <>
      <main
        className=" min-h-auto font-sans"
        style={{ backgroundColor: 'var(--accent-2)' }}
      >
        {trips.length === 0 ? (
          <Loading />
        ) : (
          <div className="max-w-6xl mx-auto p-4 ">
            <div className="flex justify-start items-center my-6">
              <TripForm
                buttonValue="Create New Trip"
                title="Create New Trip"
                actionTitle="Create Trip"
                action="new"
                userId={user?.id}
              />
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {trips.map((trip, index) => (
                <TripCard key={trip._id} trip={trip} userId={user?.id} />
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
