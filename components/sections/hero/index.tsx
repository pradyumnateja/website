"use client";

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { ProfileImage } from "./profile-image";
// import { SocialLinks } from "./";
import { ContactDialog } from "../contact/contact-dialog";
import { personalInfo } from "@/data/personal-info";

export function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 -mt-16">
      <FadeIn>
        <ProfileImage />
        
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="mb-8 mt-8"
        >
          <Terminal className="w-16 h-16 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-muted-foreground mb-8"
        >
          {personalInfo.title}
        </motion.p>

        <div className="space-y-6">
          {/* <SocialLinks /> */}
          <ContactDialog />
        </div>
      </FadeIn>
    </section>
  );
}