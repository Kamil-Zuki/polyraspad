"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * We use motion.div and other motion components from Framer Motion on the home page
 * to add smooth entrance and floating animations to various UI elements, making the
 * landing experience more visually engaging and dynamic. For example, the floating
 * colored circles and the animated text all use motion.div for their effects.
 *
 * The scroll indicator at the bottom (motion.a) is animated for visual interest,
 * even though there is currently no additional content below to scroll to.
 * This can be kept for future extensibility, or removed if not needed.
 */

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-slate-50 dark:from-blue-900 dark:via-gray-900 dark:to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-gray-400 rounded-full opacity-20 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-gray-400 to-slate-400 rounded-full opacity-20 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 blur-xl"
      />

      {/* Main content with animated entrance using motion.div, motion.h1, and motion.p */}
      <div className="relative z-10 min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center py-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-gray-900 via-blue-700 to-slate-700 dark:from-white dark:via-blue-100 dark:to-gray-100 bg-clip-text text-transparent leading-tight"
            >
              Hi, I&#39;m Kamil Karatov
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Experienced .NET/C# Developer specializing in microservices
              architecture, ASP.NET Core, and building scalable web applications
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-lg justify-center items-center"
            >
              <Link
                href="/projects"
                className="group relative px-10 py-5 sm:px-12 sm:py-6 bg-gradient-to-r from-blue-500 to-gray-600 rounded-full text-white font-semibold text-lg sm:text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 min-w-[200px] flex items-center justify-center"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/about"
                className="group px-10 py-5 sm:px-12 sm:py-6 border-2 border-white/30 rounded-full text-white font-semibold text-lg sm:text-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 min-w-[200px] flex items-center justify-center"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* 
          Scroll indicator with anchor.
          Note: There is currently no content below to scroll to, so this is just for visual effect.
          You may remove this if you don't plan to add more content below the fold.
        */}
        <motion.a
          href="#main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer focus:outline-none"
          aria-label="Scroll to main content"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-700 dark:border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-700 dark:bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
}
