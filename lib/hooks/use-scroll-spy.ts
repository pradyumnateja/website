"use client";

import { useState, useEffect } from "react";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter for elements that are intersecting
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleSections.length > 0) {
          // Get the first visible section
          const firstVisible = visibleSections[0];
          setActiveSection(firstVisible.target.id);
        }
      },
      {
        // Adjust the rootMargin to better detect sections
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}