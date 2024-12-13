"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

const resumeFormats = [
  { name: "PDF Format", icon: FileText, primary: true },
  { name: "Word Format", icon: FileText, primary: false },
];

export function ResumeDownload() {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card className="border-primary/20 hover:border-primary/40 transition-colors">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeFormats.map((format, index) => (
              <Button
                key={index}
                className={format.primary ? "bg-primary hover:bg-primary/90" : ""}
                variant={format.primary ? "default" : "outline"}
              >
                <format.icon className="mr-2 h-4 w-4" />
                <span className="mr-2">Download</span>
                <span className="text-sm opacity-90">({format.name})</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}