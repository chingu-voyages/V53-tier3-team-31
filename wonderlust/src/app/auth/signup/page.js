import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function SignUp() {
  return (
    <div className="form-container bg-gray-400">
      <form className="form transition-all duration-300 ease-in mb-2 w-[90%] sm:w-[500px] bg-white shadow-sm px-6 md:px-20 py-10 rounded-md">
        <h2 className="md:text-3xl text-2xl text-bold mb-6 text-center font-bold">
          Welcome to Wanderlust
        </h2>
        <div className="flex-col flex gap-2 font-bold">
          Name
          <input
            name="name"
            className="form-field outline-none border-none font-normal text-gray-700"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-2 font-bold">
          Email
          <input
            name="email"
            className="form-field outline-none border-none font-normal text-gray-700"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-2 font-bold">
          Password
          <input
            name="password"
            className="form-field  outline-none border-none font-normal text-gray-700"
            type="password"
            placeholder="Password"
          />
        </div>
        <p className="text-sm my-1 text-gray-700">
          Already have an account?
          <Link
            href="/login"
            className="text-gray-500 hover:text-blue-800 font-semibold"
          >
            {' '}
            Login
          </Link>
        </p>
        <button className="px-2 w-auto py-2 rounded-lg my-1 bg-gray-100 hover:bg-gray-200 shadow-sm text-gray-800 font-semibold ">
          Register
        </button>
        <button className="px-2 w-auto py-2 rounded-lg my-1  bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold flex items-center justify-center gap-3">
          <FaGoogle /> Continue with Google
        </button>
        <button className="px-2 w-auto py-2 rounded-lg my-1  bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold flex items-center justify-center gap-3">
          <FaGithub /> Continue with Github
        </button>
      </form>
    </div>
  );
}
