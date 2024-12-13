"use client";

import React from "react";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Page() {
  return (
    <div className="w-full">
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}
