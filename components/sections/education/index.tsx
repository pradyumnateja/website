"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { EducationCard } from "./education-card";

const educationData = [
  {
    title: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2024 - Present",
    description: [
      "Specializing in Artificial Intelligence and Machine Learning",
      "Research focus on Natural Language Processing and Computer Vision",
      "Graduate Teaching Assistant for Advanced Algorithms course",
    ],
    achievements: [
      "Merit Scholarship recipient",
      "Published research paper at International Conference on Machine Learning",
      "Member of Stanford AI Lab",
    ],
    courses: [
      "Advanced Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Distributed Systems",
    ],
  },
  {
    title: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2021 - 2024",
    description: [
      "Major in Computer Science with focus on Software Engineering",
      "Minor in Mathematics",
      "Cumulative GPA: 3.8/4.0",
    ],
    achievements: [
      "Dean's List for all semesters",
      "First place in University Hackathon 2023",
      "President of Computer Science Society",
    ],
    courses: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Web Development",
      "Software Engineering",
    ],
  },
];

export function Education() {
  return (
    <div className="space-y-6">
      {educationData.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </div>
  );
}