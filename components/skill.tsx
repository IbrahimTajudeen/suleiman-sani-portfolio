// ===============================
// Design Proficiency & Professional Skills
// Responsive Next.js Component
// Tech: Tailwind CSS, lucide-react, Framer Motion
// ===============================

// ---------- components/SkillsOverview.jsx ----------
"use client";

import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Target,
  Compass,
  Heart,
  Eye,
  LucidePhone,
  Zap,
  Search,
  TabletIcon,
  ChartColumnIcon,
} from "lucide-react";

const designSkills = [
  { name: "Figma", level: 95 },
  { name: "Mobile Design", level: 90 },
  { name: "Web Design", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Prototyping", level: 82 },
  { name: "User Research", level: 75 }
];

const professionalSkills = [
  {
    icon: Users,
    title: "Collaboration",
    desc: "Working effectively with cross-functional teams"
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solving",
    desc: "Finding innovative solutions to design challenges"
  },
  {
    icon: Target,
    title: "User Advocacy",
    desc: "Championing user needs throughout the design process"
  },
  {
    icon: Compass,
    title: "Strategic Thinking",
    desc: "Aligning design decisions with business objectives"
  },
  {
    icon: Heart,
    title: "Empathy",
    desc: "Understanding and designing for diverse user needs"
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    desc: "Ensuring pixel-perfect and accessible designs"
  }
];

const skillCard = [
    {
        icon: TabletIcon,
        title: "Mobile Design",
        description: "Creating responsive and user-friendly mobile interfaces",
        tag: ['iOS Design', 'Android Design', 'Mobile UX', 'Responsive Design']
    },
    {
        icon: LucidePhone,
        title: "Web Design",
        description: "Designing beautiful and functional web interfaces that provide exceptional user experiences.",
        tag: ['Web UI', 'Landing Pages', 'Dashboard Design', 'Responsive Web']
    },
    {
        icon: Zap,
        title: "Figma Design",
        description: `Expert proficiency in Figma for creating high-fidelity designs, prototypes, and design systems.`,
        tag: ['Prototyping', 'Component Libraries', 'Auto Layout', 'Design Systems']
    },
    {
        icon: Users,
        title: "User Research",
        description: `Understanding user needs through research to create designs that solve real problems.`,
        tag: ['User Interviews', 'Usability Testing', 'Personas', 'Journey Mapping']
    },
    {
        icon: Search,
        title: "Information Architecture",
        description: `Organizing and structuring content to create logical, findable, and usable digital experiences.`,
        tag: ['Site Mapping', 'Card Sorting', 'Navigation Design', 'Content Strategy']
    },
    {
        icon: ChartColumnIcon,
        title: "UI/UX Strategy",
        description: `Aligning design decisions with business goals and user needs to drive product success.`,
        tag: ['Design Strategy', 'User Experience', 'Interface Design', 'Design Thinking']
    },
]

export default function SkillsOverview() {
  return (
    <section className="py-15 px-6 bg-gray-50" id="skills">
        <div className="text-center mb-16">
            <h3 className="text-4xl  font-bold">Skills & Expertise</h3>
            <p className="text-gray-600 mt-2 text-center mx-auto px-10 max-w-2xl">
                Specialized in mobile and web design using Figma to 
                create user-centered digital experiences
            </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5 mb-5">
            {skillCard.map((skill) => (
                <div key={skill.title} className="border shadow border-[#e5e7eb] rounded-2xl p-6 bg-white">
                    <skill.icon className="mb-4 text-black p-3 rounded-md bg-[#e4efff]" size={48} />
                    <h4 className="font-semibold text-[22px] mb-2">{skill.title}</h4>
                    <p className="text-gray-600 text-[16px] mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {skill.tag.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs text-black font-medium px-3 py-1 rounded-full bg-gray-100">
                                    {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Design Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#e5e7eb] rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-xl md:text-2xl font-extrabold mb-6">
            Design Proficiency
          </h3>

          <div className="space-y-5">
            {designSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-gray-900 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-[#e5e7eb] rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-xl md:text-2xl font-extrabold mb-6">
            Professional Skills
          </h3>

          <div className="space-y-5">
            {professionalSkills.map((skill) => (
              <div key={skill.title} className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-black">
                  <skill.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[16px]">{skill.title}</h4>
                  <p className="text-sm text-gray-600">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
