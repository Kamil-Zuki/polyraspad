"use client";

import { motion } from "framer-motion";

interface LogoIconProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export default function LogoIcon({
  className = "",
  size = 40,
  animate = true,
}: LogoIconProps) {
  const content = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-lg ${className}`}
    >
      {/* Outer hexagon */}
      <path
        d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
        style={{
          fill: "url(#logo-icon-gradient)",
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
          id="logo-icon-gradient"
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
  );

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="inline-block"
      >
        {content}
      </motion.div>
    );
  }

  return <div className="inline-block">{content}</div>;
}
