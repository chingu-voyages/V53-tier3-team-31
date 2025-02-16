'use client';

import { FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { GiMoon } from 'react-icons/gi';

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
    <div
      className="w-full sticky top-0  py-4 px-8 flex justify-between items-center   shadow-md transition-shadow duration-300 hover:shadow-lg z-40"
      style={{ color: '--gray-12' }}
    >
      {/* Navbar Title */}
      <Link href={user ? '/dashboard' : '/'}>
        <h1 className="text-2xl font-bold cursor-pointer hover:underline  transition-colors duration-300">
          Wanderlust
        </h1>
      </Link>

      {/* Mobile Menu Toggle */}
      <div>
        <button
          onClick={toggleMenu}
          className=" text-2xl focus:outline-none md:hidden transition-transform duration-300 hover:scale-110"
        >
          ☰
        </button>

        {/* Dropdown Menu for Smaller Screens */}
        {isMenuOpen && (
          <div className="absolute right-8 top-16 bg-white text-black w-48 rounded-lg shadow-lg border border-gray-200 transition-opacity duration-300 z-10">
            {user && (
              <p className="p-4  border-b border-gray-300 text-left capitalize font-semibold hover:bg-gray-100 rounded-md">
                {user && user?.name}
              </p>
            )}

            <div className="flex items-center justify-start p-4 hover:bg-gray-100 transition-colors duration-300 rounded-md">
              <button onClick={darkTheme} className="flex gap-1 items-center">
                {isDark ? (
                  <FaSun className="text-lg text-orange-500 mr-2" />
                ) : (
                  <GiMoon className="text-lg text-blue-800 mr-2" />
                )}
                <span className="text-black">{!isDark ? 'Dark' : 'Light'}</span>{' '}
              </button>
            </div>
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
          </div>
        )}
      </div>

      <nav className="hidden md:flex gap-2 items-center">
        <button
          onClick={darkTheme}
          className="bg-white rounded-full p-2 mx-.5 "
        >
          {isDark ? (
            <FaSun className="text-xl text-orange-500 " />
          ) : (
            <GiMoon className="text-xl text-blue-900 -rotate-45" />
          )}
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
              className="hover:text-blue-800 font-semibold capitalize"
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
