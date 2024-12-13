"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";

export function Education() {
  return (
    <FadeIn>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle>Bachelor of Science in Computer Science</CardTitle>
            <CardDescription>University of Technology</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">2021 - Present</p>
            <motion.ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {[
                "GPA: 3.8/4.0",
                "Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development",
                "Member of Computer Science Society",
                "Participated in multiple hackathons and coding competitions"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </CardContent>
        </Card>
      </motion.div>
    </FadeIn>
  );
}