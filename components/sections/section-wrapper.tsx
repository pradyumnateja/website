"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionWrapper({ 
  children, 
  id, 
  title,
  subtitle,
  className = "" 
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`min-h-screen py-16 ${className}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </motion.section>
  );
}