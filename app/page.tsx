"use client";

import { useScrollSpy } from "@/lib/hooks/use-scroll-spy";
import { NavMenu } from "@/components/navigation/nav-menu";
import { ScrollToTop } from "@/components/navigation/scroll-to-top";
import { Hero } from "@/components/sections/hero";
import { MainContent } from "@/components/sections/main-content";
import { Toaster } from "@/components/ui/toaster";
import { ChatBot } from "@/components/chat/chat-bot";

export default function Home() {
  const activeSection = useScrollSpy();

  return (
    <main className="min-h-screen bg-background pt-16">
      <NavMenu activeSection={activeSection} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <MainContent />
      </div>
      <ScrollToTop />
      <ChatBot />
      <Toaster />
    </main>
  );
}