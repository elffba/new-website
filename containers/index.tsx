"use client";

import React from "react";
import Section from "@/components/Section";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Page() {
  return (
    <div className="w-full">
      <Section title="Section Title" content="Section Content" />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}
