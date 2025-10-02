"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  once = true,
}: AnimatedTextProps) {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration }}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
