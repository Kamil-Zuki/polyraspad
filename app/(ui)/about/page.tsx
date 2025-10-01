'use client'
import { motion } from 'framer-motion';

  export default function About() {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center text-[var(--foreground)]"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg">
            I’m a passionate developer building modern web experiences with Next.js and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    );
  }