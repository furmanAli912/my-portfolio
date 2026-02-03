"use client";

import {
  Code,
  Globe,
  Database,
  Terminal,
  Cpu,
} from "lucide-react";

import SkillCard from "@/components/SkillCard";

export default function SkillsPage() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            My Skills For Your Next Projects
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Web Development • Programming • MERN Stack
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          <SkillCard
            icon={Globe}
            title="Web Development"
            items={[
              "HTML5, CSS3, JavaScript",
              "React & Next.js",
              "Tailwind CSS",
              "Responsive UI",
              "SEO Best Practices",
            ]}
          />

          <SkillCard
            icon={Code}
            title="Programming"
            items={[
              "JavaScript (ES6+)",
              "Problem Solving",
              "Logic Building",
              "Data Structures (Basic)",
              "Competitive Programming",
            ]}
          />

          <SkillCard
            icon={Database}
            title="MERN Stack"
            items={[
              "Node.js & Express.js",
              "MongoDB",
              "REST APIs",
              "Authentication",
              "Full-Stack Projects",
            ]}
          />

          <SkillCard
            icon={Terminal}
            title="Tools & Workflow"
            items={[
              "Git & GitHub",
              "VS Code",
              "Postman",
              "Vercel Deployment",
              "Agile Mindset",
            ]}
          />

          <SkillCard
            icon={Cpu}
            title="Performance & UX"
            items={[
              "Clean UI Design",
              "Fast Load Time",
              "Accessibility Basics",
              "Smooth Animations",
            ]}
          />

        </div>
      </div>
    </section>
  );
}
