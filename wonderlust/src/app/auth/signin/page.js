'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [flashMessage, setflashMessage] = useState('');
  const [flashMessageType, setflashMessageType] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('wonderlust', data.token);

        setflashMessage('Logged in successfully');
        setflashMessageType('success');
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } else {
        const errorData = await response.json();
        setflashMessage(
          errorData.message || 'Something went wrong. Please try again.'
        );
        setflashMessageType('error');
      }
    } catch (error) {
      setflashMessage('An error occurred. Please try again.');
      setflashMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="form-container"
      style={{ backgroundColor: 'var(--gray-4)' }}
    >
      <form
        onSubmit={handleSubmit}
        className="form transition-all duration-300 ease-in mb-2 w-[90%] sm:w-[500px] shadow-sm px-6 md:px-20 py-10 rounded-md"
        style={{ backgroundColor: 'var(--gray-1)' }}
      >
        <h2 className="md:text-3xl text-2xl text-bold mb-6 text-center font-bold">
          Login to Wanderlust
        </h2>
        {flashMessage && (
          <div
            className={`mb-4 p-2 text-center rounded-md 
            ${
              flashMessageType === 'success'
                ? 'bg-green-200 text-green-700'
                : 'bg-red-200 text-red-700'
            }`}
          >
            {flashMessage}
          </div>
        )}

        <div className="flex flex-col gap-2 font-bold">
          Email
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-field outline-none border-none font-normal text-gray-700"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-2 font-bold">
          Password
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-field outline-none border-none font-normal text-gray-700"
            type="password"
            placeholder="Password"
          />
        </div>
        <p className="text-sm my-1">
          Don't have an account?
          <Link
            href="/auth/signup"
            className=" hover:text-blue-800 font-semibold"
          >
            {' '}
            Register
          </Link>
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-2 w-auto py-2 rounded-lg my-1 bg-gray-100 hover:bg-gray-200 shadow-sm text-gray-800 font-semibold "
        >
          Login
        </button>

        <button className="px-2 w-auto py-2 rounded-lg my-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold flex items-center justify-center gap-3">
          <FaGoogle /> Continue with Google
        </button>
        <button className="px-2 w-auto py-2 rounded-lg my-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold flex items-center justify-center gap-3">
          <FaGithub /> Continue with Github
        </button>
      </form>
    </div>
  );
}
