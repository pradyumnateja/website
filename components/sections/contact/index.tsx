"use client";

import { SectionWrapper } from "../section-wrapper";
import { ContactDialog } from "./contact-dialog";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal-info";

export function Contact() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <p className="text-muted-foreground">
          I'm currently looking for new opportunities. Whether you have a question, a project idea,
          or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>
      
      <ContactDialog />
    </div>
  );
}