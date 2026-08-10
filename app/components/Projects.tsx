"use client";
export {};

import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
  FaLaravel,
  FaWordpress,
  FaShopify,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiRedis,
  SiPrisma,
  SiPostgresql,

  SiTensorflow,
  SiPython,

  SiCloudinary,
  SiNeon,
  SiPhp,
  SiRemix,
} from "react-icons/si";

const techIcons: Record<string, React.ReactNode> = {
  "Node.js": <FaNodeJs className="text-green-500" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Express: <SiExpress className="text-white" />,
  Redis: <SiRedis className="text-red-500" />,
  Prisma: <SiPrisma className="text-blue-400" />,
  PostgreSQL: <SiPostgresql className="text-sky-500" />,

  React: <FaReact className="text-cyan-400" />,
  "TensorFlow.js": <SiTensorflow className="text-orange-400" />,
  Python: <SiPython className="text-yellow-400" />,

  Cloudinary: <SiCloudinary className="text-blue-300" />,
  "Neon DB": <SiNeon className="text-green-400" />,
  Laravel: <FaLaravel className="text-red-500" />,
  PHP: <SiPhp className="text-purple-400" />,
  Remix: <SiRemix className="text-purple-300" />,
  WordPress: <FaWordpress className="text-blue-400" />,
  Shopify: <FaShopify className="text-green-400" />,
};

const featuredProjects = [
  
  {
    title: "URL Shortener API",
    category: "Backend · DevOps",
    description:
      "Production-ready URL shortener with JWT auth, Redis caching, click analytics, and CI/CD. Deployed on Render with Supabase PostgreSQL and Upstash Redis.",
    tech: ["Node.js", "TypeScript", "Express", "Redis", "Prisma", "PostgreSQL"],
    links: {
      github: "https://github.com/vinay0812/url_shortner",
      live: "https://url-shortener-api-x8pi.onrender.com",
    },
  },
  {
    title: "Event Booking API",
    category: "Backend · Security",
    description:
      "RESTful event booking API with pessimistic locking, role-based access, and secure seat reservations. Handles concurrent bookings without conflicts.",
    tech: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "JWT"],
    links: {
      github: "https://github.com/vinay0812/backend_api",
      live: "https://event-api-qecw.onrender.com",
    },
  },
  {
    title: "Bilbaro",
    category: "Full Stack · Marketplace",
    description:
      "Event ticketing platform with Stripe marketplace payouts, QR check-in system, real-time notifications, and RBAC across Admin, Organizer, and Ambassador roles.",
    tech: ["Laravel", "PHP", "Stripe", "MySQL"],
    links: {
      live: "https://dev.bilbaro.com",
    },
    badge: "Ongoing · 5+ features shipped",
  },

];

const   otherProjects: {
  title: string;
  description: string;
  tech: string[];
  badge?: string;  // <- Add '?' to make it optional
  links?: {
    github?: string;
    live?: string;
  };
}[] =  [

  {
    title: "Syncezy",
    description:
      "Integration platform — worked on frontend development and UI enhancements for this 2-week project.",
    tech: ["React", "TypeScript"],
    links: {
      live: "https://syncezy.com/",
    },
  },
  {
    title: "Arctel",
    description:
      "Business providing routing WiFi services in Australia — worked on frontend development, modal pages, and code snippets.",
    tech: ["WordPress", "PHP", "JavaScript"],
    links: {
      live: "https://arctel.com.au/",
    },
  },
  {
    title: "Shopify Custom App",
    description:
      "Built a custom Shopify app using Remix for price calculation and dynamic pricing logic.",
    tech: ["Remix", "Shopify", "Node.js"],
  },
  {
    title: "Rise CRM Plugin",
    description:
      "Custom plugin development for Rise CRM using CodeIgniter framework.",
    tech: ["CodeIgniter", "PHP"],
  },
  {
    title: "Adobe Animate Project",
    description:
      "Interactive animation project built with Adobe Animate for a client engagement.",
    tech: ["Adobe Animate", "ActionScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-24 md:py-32 border-t border-[#2a2a2a] relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-medium tracking-tight text-[#fafafa]"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[#d4d4d4] mt-4 max-w-2xl font-mono text-sm"
      >
        {`const projects = [ ...shipped, ...building ];`}
      </motion.p>

      {/* Featured Projects */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-6 rounded-xl border border-[#2a2a2a] hover:border-[#b8a99a]/30 transition-all duration-300 bg-[#0a0a0a] hover:bg-[#121212]"
          >
            {/* Top border line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b8a99a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-medium text-[#fafafa] group-hover:text-[#b8a99a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#999999] mt-1">{project.category}</p>
              </div>
              <div className="flex gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999999] hover:text-[#b8a99a] transition-colors"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999999] hover:text-[#b8a99a] transition-colors"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-[#d4d4d4] text-sm mt-3 leading-relaxed">
              {project.description}
            </p>

            {project.badge && (
              <span className="inline-block text-xs text-[#b8a99a] mt-2 font-mono">
                {project.badge}
              </span>
            )}

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1a1a1a]">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs border border-[#2a2a2a] rounded-full text-[#d4d4d4] group-hover:border-[#b8a99a]/20 transition-colors"
                >
                  {techIcons[tech] || null}
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects Section */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 pt-10 border-t border-[#2a2a2a]"
      >
        <h3 className="text-base font-mono text-[#999999] uppercase tracking-wider mb-6">
          Other Work
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-5 rounded-xl border border-[#1a1a1a] hover:border-[#2a2a2a] hover:bg-[#121212] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-base text-[#fafafa] font-medium">
                  {project.title}
                </h4>
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666666] hover:text-[#b8a99a] transition-colors text-sm"
                  >
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
              <p className="text-sm text-[#999999] mt-2 leading-relaxed">
                {project.description}
              </p>
              {project.badge && (
                <span className="inline-block text-xs text-[#b8a99a] mt-2 font-mono">
                  {project.badge}
                </span>
              )}
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-[#1a1a1a]">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs border border-[#1a1a1a] rounded-full text-[#999999] hover:border-[#b8a99a]/20 transition-colors"
                  >
                    {techIcons[tech] || null}
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}