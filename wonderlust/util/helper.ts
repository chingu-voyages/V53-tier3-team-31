import { signIn } from "next-auth/react";

 export const handleGoogleLogin = async () => {
    try {
      signIn('google', { callbackUrl: '/dashboard' });
    } catch (error) {
      console.error('Google login failed: ', error);
    }
  };