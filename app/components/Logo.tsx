"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, fontSize: "text-sm" },
    md: { width: 40, height: 40, fontSize: "text-base" },
    lg: { width: 48, height: 48, fontSize: "text-lg" },
  };

  const { width, height, fontSize } = sizes[size];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative ${className}`}
      style={{ width, height }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Outer hexagon */}
        <path
          d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
          className="fill-gradient"
          style={{
            fill: "url(#logo-gradient)",
          }}
        />

        {/* Inner design - Letter K */}
        <path
          d="M18 14H22V24L28 14H32L26 24L32 34H28L22 24V34H18V14Z"
          className="fill-white"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="6"
            y1="2"
            x2="42"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
