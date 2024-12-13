"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { personalInfo } from "@/data/personal-info";

export const socialLinks = [
  { Icon: Github, href: personalInfo.social.github },
  { Icon: Linkedin, href: personalInfo.social.linkedin },
  { Icon: Mail, href: personalInfo.social.email },
];

export function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4">
      <FadeIn>
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="mb-12"
        >
          <Terminal className="w-20 h-20 text-primary" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-6"
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl text-muted-foreground mb-8"
        >
          {personalInfo.title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          {socialLinks.map(({ Icon, href }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(href, '_blank')}
              >
                <Icon className="w-5 h-5" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </FadeIn>
    </section>
  );
}