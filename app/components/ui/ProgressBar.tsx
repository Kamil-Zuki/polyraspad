"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
  className?: string;
  animated?: boolean;
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  color = "from-blue-400 to-blue-600",
  className = "",
  animated = true,
}: ProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`progress-${label}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [label]);

  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div id={`progress-${label}`} className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-medium">{label}</span>
          <span className="text-gray-400 text-sm">{value}%</span>
        </div>
      )}
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={
            isVisible && animated
              ? { width: `${percentage}%` }
              : { width: `${percentage}%` }
          }
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}
