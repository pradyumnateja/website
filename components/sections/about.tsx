"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { personalInfo } from "@/data/personal-info";

export function About() {
  return (
    <FadeIn>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {personalInfo.about}
        </p>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div>
              <h3 className="font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>🎓 {personalInfo.education}</li>
                <li>💼 {personalInfo.currentRole}</li>
                <li>📍 {personalInfo.location}</li>
                <li>🌟 {personalInfo.interests}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                {personalInfo.expertise.map((item, index) => (
                  <li key={index}>✨ {item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </FadeIn>
  );
}