"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/personal-info";

const navItems = [
  { id: "hero", icon: Home, label: null },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "blog", label: "Blog" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

interface NavMenuProps {
  activeSection: string;
}

export function NavMenu({ activeSection }: NavMenuProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: id === "hero" ? 0 : offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection("hero")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative font-serif text-xl font-medium italic tracking-wide"
          >
            <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </motion.button>
          
          <div className="inline-flex rounded-full bg-muted p-1 shadow-lg">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full whitespace-nowrap",
                  activeSection === item.id
                    ? "text-primary-foreground"
                    : "hover:text-primary"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {item.icon ? <item.icon className="h-4 w-4" /> : item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}