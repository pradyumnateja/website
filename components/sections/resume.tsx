"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function Resume() {
  return (
    <FadeIn>
      <Card className="border-primary/20 hover:border-primary/40 transition-colors">
        <CardHeader>
          <CardTitle>Download Resume</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            Get a comprehensive overview of my skills, experience, and education.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button className="bg-primary hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}