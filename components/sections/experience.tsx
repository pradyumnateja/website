"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Solutions Inc.",
    period: "June 2023 - August 2023",
    description: [
      "Developed and maintained RESTful APIs using Node.js and Express",
      "Implemented responsive UI components with React and TypeScript",
      "Collaborated with senior developers on optimizing database queries",
    ],
    tech: ["Node.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Research Assistant",
    company: "University AI Lab",
    period: "January 2023 - Present",
    description: [
      "Conducting research on machine learning algorithms",
      "Implementing and testing neural network architectures",
      "Publishing findings in academic conferences",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "Data Analysis"],
  },
];

export function Experience() {
  return (
    <StaggerContainer>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <StaggerItem key={index}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
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