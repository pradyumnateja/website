"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Big O Notation",
    date: "March 15, 2024",
    preview: "A deep dive into algorithmic complexity and why it matters in software development.",
    readTime: "5 min read",
  },
  {
    title: "My Journey with React and Next.js",
    date: "March 10, 2024",
    preview: "Personal experiences and lessons learned while building modern web applications.",
    readTime: "4 min read",
  },
  {
    title: "The Future of AI in Software Development",
    date: "March 5, 2024",
    preview: "Exploring how artificial intelligence is reshaping the development landscape.",
    readTime: "6 min read",
  },
];

export function Blog() {
  return (
    <StaggerContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <StaggerItem key={index}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.preview}</p>
                  <Button variant="ghost" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>
        ))}
      </div>
    </StaggerContainer>
  );
}