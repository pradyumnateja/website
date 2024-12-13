"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface EducationCardProps {
  title: string;
  institution: string;
  period: string;
  description: string[];
  achievements: string[];
  courses?: string[];
}

export function EducationCard({
  title,
  institution,
  period,
  description,
  achievements,
  courses,
}: EducationCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card className="border-primary/20 hover:border-primary/40 transition-colors">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{institution}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{period}</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Overview</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {description.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {achievements.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Achievements</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {achievements.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {courses && courses.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <Badge key={index} variant="secondary">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}