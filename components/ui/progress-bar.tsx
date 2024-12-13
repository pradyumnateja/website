"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressBarProps {
  label: string;
  value: number;
  index: number;
}

export function ProgressBar({ label, value, index }: ProgressBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const inView = useInView(barRef, { once: true });

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        />
      </div>
    </div>
  );
}