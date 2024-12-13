"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { ResumeDownload } from "./resume-download";
import { ResumePreview } from "./resume-preview";

export function Resume() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <ResumePreview />
        <ResumeDownload />
      </div>
    </FadeIn>
  );
}