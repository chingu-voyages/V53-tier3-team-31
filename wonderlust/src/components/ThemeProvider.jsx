'use client';
import React, { useState } from 'react';
import { Theme } from '@radix-ui/themes';
import NavBar from './Navbar';
import { SessionProvider } from 'next-auth/react';

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <SessionProvider>
      <Theme appearance={isDark ? 'dark' : 'light'}>
        <NavBar isDark={isDark} setIsDark={setIsDark} />
        {children}
      </Theme>
    </SessionProvider>
  );
}
