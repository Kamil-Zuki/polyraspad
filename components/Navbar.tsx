'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 w-full bg-[var(--background)]/80 dark:bg-[var(--background)]/80 backdrop-blur-md p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">My Site</Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-primary hover:text-secondary">Home</Link></li>
          <li><Link href="/about" className="text-primary hover:text-secondary">About</Link></li>
          <li><Link href="/projects" className="text-primary hover:text-secondary">Projects</Link></li>
        </ul>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
        >
          {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </nav>
  );
}