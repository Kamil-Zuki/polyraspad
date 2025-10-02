"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glass = false,
  gradient = false,
}: CardProps) {
  const baseClasses = "rounded-2xl border transition-all duration-300";

  const variants = {
    default: "bg-white/5 border-white/10",
    glass: "bg-white/5 backdrop-blur-sm border-white/10",
    gradient:
      "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20",
  };

  const hoverClasses = hover
    ? "hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10"
    : "";

  const classes = `${baseClasses} ${
    glass ? variants.glass : gradient ? variants.gradient : variants.default
  } ${hoverClasses} ${className}`;

  return (
    <motion.div whileHover={hover ? { y: -5 } : {}} className={classes}>
      {children}
    </motion.div>
  );
}
