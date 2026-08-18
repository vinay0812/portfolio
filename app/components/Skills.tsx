"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLaravel,
  FaWordpress,
  FaShopify,
  FaPhp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiRedis,
  SiSupabase,
  SiUpstash,
  SiRender,
  SiGithubactions,
  SiPostman,
  SiRedux,
  
  SiRemix,
  SiCodeigniter,
  
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Redux", icon: SiRedux, color: "text-red-400" },
      
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss, color: "text-blue-400" },
      
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
      { name: "PHP", icon: FaPhp, color: "text-purple-400" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "text-orange-400" },
      { name: "REST APIs", icon: null, color: "" },
      { name: "JWT", icon: '', color: "text-purple-400" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "Prisma", icon: SiPrisma, color: "text-blue-400" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
    ],
  },
  {
    name: "CMS & E-Commerce",
    skills: [
      { name: "WordPress", icon: FaWordpress, color: "text-blue-400" },
      { name: "Shopify", icon: FaShopify, color: "text-green-400" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-white" },
      { name: "Render", icon: SiRender, color: "text-purple-400" },
      { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
      { name: "Upstash", icon: SiUpstash, color: "text-red-400" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Docker", icon: FaDocker, color: "text-sky-400" },
    ],
  },
  {
    name: "Others",
    skills: [
      
      { name: "Adobe Animate", icon: '', color: "text-red-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24 md:py-32 border-t border-[#2a2a2a] relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-medium tracking-tight text-[#fafafa]"
      >
        Tech Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[#d4d4d4] mt-4 max-w-2xl font-mono text-sm"
      >
        {`const skills = [ ...backend, ...frontend, ...tools ];`}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-xl border border-[#2a2a2a] hover:border-[#b8a99a]/30 transition-colors"
          >
            <h3 className="text-sm font-mono text-[#b8a99a] uppercase tracking-wider mb-4">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-[#2a2a2a] rounded-full text-[#d4d4d4] hover:border-[#b8a99a]/30 transition-colors"
                >
                  {skill.icon && <skill.icon className={`${skill.color} text-sm`} />}
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}