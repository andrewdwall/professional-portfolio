"use client";

import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";


export default function Home() {
  return (
    <>
      <Navbar />

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="education">
        <EducationSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

    </>
  );
}