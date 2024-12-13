"use client";

import { projects, skills, skillProficiency } from "@/data/portfolio";
import { SectionWrapper } from "./section-wrapper";
import { About } from "./about";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Education } from "./education";
import { Experience } from "./experience";
import { Blog } from "./blog";
import { Resume } from "./resume";
import { Contact } from "./contact";

export function MainContent() {
  return (
    <>
      <SectionWrapper 
        id="about"
        title="About Me"
        subtitle="Learn more about my background and what drives me"
      >
        <About />
      </SectionWrapper>

      <SectionWrapper 
        id="projects"
        title="Projects"
        subtitle="A selection of my recent work and contributions"
      >
        <Projects projects={projects} />
      </SectionWrapper>

      <SectionWrapper 
        id="experience"
        title="Experience"
        subtitle="My professional journey and achievements"
      >
        <Experience />
      </SectionWrapper>

      <SectionWrapper 
        id="skills"
        title="Skills"
        subtitle="Technologies and tools I work with"
      >
        <Skills skills={skills} skillProficiency={skillProficiency} />
      </SectionWrapper>

      <SectionWrapper 
        id="education"
        title="Education"
        subtitle="My academic background and qualifications"
      >
        <Education />
      </SectionWrapper>

      <SectionWrapper 
        id="blog"
        title="Blog"
        subtitle="My thoughts and insights on technology"
      >
        <Blog />
      </SectionWrapper>

      <SectionWrapper 
        id="resume"
        title="Resume"
        subtitle="A comprehensive overview of my professional profile"
      >
        <Resume />
      </SectionWrapper>

      <SectionWrapper 
        id="contact"
        title="Get in Touch"
        subtitle="Let's connect and discuss opportunities"
      >
        <Contact />
      </SectionWrapper>
    </>
  );
}