"use client";

import { SkillProficiency } from "@/types/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";

interface LanguageProficiencyProps {
  skills: SkillProficiency;
}

export function LanguageProficiency({ skills }: LanguageProficiencyProps) {
  return (
    <FadeIn>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle>Programming Languages</CardTitle>
          </CardHeader>
          <CardContent>
            {skills.languages.map((skill, index) => (
              <ProgressBar
                key={skill.name}
                label={skill.name}
                value={skill.proficiency}
                index={index}
              />
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </FadeIn>
  );
}