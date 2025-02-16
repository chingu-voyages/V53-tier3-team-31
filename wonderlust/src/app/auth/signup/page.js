'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import { handleGoogleLogin } from '@/util/helper';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [flashMessage, setFlashMessage] = useState('');
  const [flashMessageType, setFlashMessageType] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors on change
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: '', email: '', password: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlashMessage('');
    setFlashMessageType('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        setFlashMessage('Registration successful!');
        setFlashMessageType('success');
        setTimeout(() => {
          router.push('/auth/signin');
        }, 2000);
      } else {
        setFlashMessage(data.error || 'Something went wrong.');
        setFlashMessageType('error');
      }
    } catch (error) {
      setFlashMessage('Something went wrong, please try again.');
      setFlashMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container" style={{ backgroundColor: 'var(--gray-4)' }}>
      <div className="form transition-all duration-300 ease-in mb-2 w-[90%] sm:w-[500px] shadow-sm px-6 md:px-20 md:py-16 py-10 rounded-md"
        style={{ backgroundColor: 'var(--gray-1)' }}>
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="md:text-3xl text-2xl text-bold mb-6 text-center font-bold">
            Welcome to Wanderlust
          </h2>

          {flashMessage && (
            <div className={`mb-4 p-2 text-center rounded-md 
              ${flashMessageType === 'success' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
              {flashMessage}
            </div>
          )}

          <div className="flex flex-col gap-2 font-bold">
            Name
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-field outline-none border-none font-normal"
              type="text"
              placeholder="Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="flex flex-col gap-2 font-bold">
            Email
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-field outline-none border-none font-normal"
              type="email"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-2 font-bold">
            Password
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-field outline-none border-none font-normal"
              type="password"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <p className="text-sm my-1">
            Already have an account?
            <Link href="/auth/signin" className="hover:text-blue-800 font-semibold">
              {' '}Login
            </Link>
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-2 w-auto py-2 rounded-lg my-1 bg-gray-100 hover:bg-gray-200 shadow-sm text-gray-800 font-semibold">
            Register
          </button>
        </form>

        {/* <button
          className="px-2 w-full py-2 rounded-lg my-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold  flex items-center justify-center gap-3"
          onClick={() => handleGoogleLogin()}
        >
          <FaGoogle /> Continue with Google
        </button> */}
      </div>
    </div>
  );
}
