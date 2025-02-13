import { signIn } from "next-auth/react";

 export const handleGoogleLogin = async () => {
    try {
      signIn('google', { callbackUrl: '/dashboard' });
    } catch (error) {
      console.error('Google login failed: ', error);
    }
};
  export const fetchUser = async () => {
    fetch('/api/auth/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) =>data.user)
      .catch((error) => console.error('Error:', error));
  };