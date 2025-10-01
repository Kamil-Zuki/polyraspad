'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center text-[var(--foreground)]">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Welcome to My Personal Site
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl max-w-2xl text-center"
      >
        A modern portfolio built with Next.js 15 and Tailwind CSS 4, featuring bold gradients, dark mode, and smooth animations.
      </motion.p>
    </div>
  );
}