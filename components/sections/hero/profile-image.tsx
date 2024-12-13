"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { personalInfo } from "@/data/personal-info";

export function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }}
      className="relative"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-colors">
        <Avatar className="w-full h-full">
          <AvatarImage
            src={personalInfo.image}
            alt={personalInfo.name}
            className="object-cover"
          />
          <AvatarFallback className="text-4xl">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <motion.div
        className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/50 to-primary/30 blur opacity-50"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
}