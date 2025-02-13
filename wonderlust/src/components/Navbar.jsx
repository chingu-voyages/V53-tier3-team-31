'use client';

import { FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export default function NavBar({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const darkTheme = () => {
    setIsDark(!isDark);
  };
  const handleLogout = async () => {
    if (session) {
      await signOut({ redirect: false });
    } else {
      const res = await fetch('/api/auth/logout', {
        method: 'GET',
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
    router.replace('/auth/signin');
  };
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
    if (session) {
      setUser(session?.user);
    } else {
      fetchUser();
    }
  }, [pathname, session]);

  return (
    <div className="w-full sticky top-0 bg-blue-500 py-4 px-8 flex justify-between items-center text-white relative shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Navbar Title */}
      <h1 className="text-2xl font-bold cursor-pointer hover:underline hover:text-blue-300 transition-colors duration-300">
        Wanderlust
      </h1>

      {/* Mobile Menu Toggle */}
      <div>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none md:hidden transition-transform duration-300 hover:scale-110"
        >
          ☰
        </button>

        {/* Dropdown Menu for Smaller Screens */}
        {isMenuOpen && (
          <div className="absolute right-8 top-16 bg-white text-black w-48 rounded-lg shadow-lg border border-gray-200 transition-opacity duration-300 z-10">
            {user && (
              <div className="p-4 border-b border-gray-300 text-center font-semibold hover:bg-gray-100">
                {user && user?.name}
              </div>
            )}
            {pathname === '/auth/signin' || pathname === '/auth/signup'
              ? null
              : user && (
                  <button
                    className="w-full border-b border-gray-300 p-4 text-left hover:bg-gray-100 transition-colors duration-300"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
            <div className="flex items-center justify-start p-4 hover:bg-gray-100 transition-colors duration-300">
              <button onClick={darkTheme} className="flex items-center">
                <FaSun className="text-lg text-black mr-2" />
                <span className="text-black">Dark Theme</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <nav className="hidden md:flex items-center">
        <button onClick={darkTheme}>
          <FaSun className="text-white text-lg cursor-pointer mr-6 transition-transform duration-300 hover:scale-125 hover:text-black" />
        </button>
        {user && pathname !== '/auth/signin' && (
          <div className="mr-4 cursor-pointer capitalize flex items-center gap-0.5 ">
            <CgProfile /> {user?.name}
          </div>
        )}

        {pathname === '/auth/signin' ||
        pathname === '/auth/signup' ? null : user ? (
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded shadow transition-transform duration-300 hover:bg-gray-100 hover:scale-105"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button className="bg-white text-blue-500 px-4 py-2 rounded shadow transition-transform duration-300 hover:bg-gray-100 hover:scale-105">
            <Link
              href="/auth/signin"
              className="hover:text-blue-800 font-semibold"
            >
              {' '}
              Login
            </Link>
          </button>
        )}
      </nav>
    </div>
  );
}
