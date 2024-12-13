"use client";

import { SkillSet, SkillProficiency } from "@/types/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ui/progress-bar";

interface SkillsProps {
  skills: SkillSet;
  skillProficiency: SkillProficiency;
}

export function Skills({ skills, skillProficiency }: SkillsProps) {
  return (
    <StaggerContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Languages with Progress Bars */}
        <StaggerItem>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillProficiency.languages.map((skill, index) => (
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
        </StaggerItem>

        {/* Other Skills */}
        {Object.entries(skills).map(([category, items]) => (
          <StaggerItem key={category}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="capitalize">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>
        ))}
      </div>
    </StaggerContainer>
  );
}