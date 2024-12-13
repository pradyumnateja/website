"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal-info";

const highlights = [
  "Full-stack Development",
  "Cloud Computing",
  "System Design",
  "Database Management",
  "UI/UX Design",
  "Agile Methodologies",
  "Problem Solving",
  "Team Leadership",
];

export function ResumePreview() {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card className="border-primary/20 hover:border-primary/40 transition-colors">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center border-b border-border pb-6">
              <h3 className="text-xl font-semibold mb-2">{personalInfo.name}</h3>
              <p className="text-muted-foreground">{personalInfo.title}</p>
              <p className="text-sm text-muted-foreground mt-2">{personalInfo.location}</p>
            </div>

            {/* Key Skills */}
            <div>
              <h4 className="font-medium mb-4">Key Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {highlights.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Preview Note */}
            <div className="text-center text-muted-foreground mt-6">
              <p>Download the full resume to view complete details about:</p>
              <ul className="mt-2">
                <li>• Professional Experience</li>
                <li>• Educational Background</li>
                <li>• Technical Skills</li>
                <li>• Projects & Achievements</li>
                <li>• Certifications</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}