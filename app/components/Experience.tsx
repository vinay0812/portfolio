"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaRocket, FaRoad, FaFlag, FaStar, FaArrowRight, FaLaptopCode, FaCode } from "react-icons/fa";

const experiences = [
  
  {
    role: "Full Stack Developer",
    company: "Mascot Software",
    period: "Mar 2025 – Present",
    location: "Dehradun, India",
    icon: FaRocket,
    isCurrent: true,
    description: [
      "Built Stripe marketplace payment integration — reducing payout time from 2 days to real-time",
      "Implemented RBAC across 3 roles — reducing admin workload by 40%",
      "Developed QR-based ticket check-in system and UTM click tracking",
      "Built real-time notification system — increasing user retention by 25%",
    ],
  },
  {
    role: "Web Developer",
    company: "Connectwith",
    period: "Jun 2024 – Dec 2024",
    location: "Dehradun, India",
    icon: FaBuilding,
    description: [
      "Reduced bug resolution time from 3 days to 6 hours",
      "Zero-downtime deployments across 3 client projects",
      "Maintained and updated production applications",
    ],
  },
  
  {
    role: "Full Stack Developer Intern",
    company: "Dream tech",
    period: "Jan 2024 – Jun 2024",
    location: "Dehradun",
    icon: FaLaptopCode,
    description: [
      "Built RESTful APIs using Node.js, Express, and PHP",
      "Integrated frontend React applications with backend services",
      "Worked with MySQL and PostgreSQL databases for data persistence",
      "Implemented authentication and authorization workflows",
      "Delivered 3 full-stack applications from planning to deployment",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Dream tech ",
    period: "Jun 2023 – Dec 2023",
    location: "Dehradun",
    icon: FaCode,
    description: [
      "Built responsive web interfaces using HTML5, CSS3, JavaScript, and Tailwind CSS",
      "Developed reusable React components and managed state with hooks",
      "Converted Figma designs into pixel-perfect, cross-browser compatible pages",
      "Collaborated with senior developers on 5+ client projects",
    ],
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-24 md:py-32 border-t border-[#2a2a2a] relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-medium tracking-tight text-[#fafafa]"
      >
        My Journey
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[#d4d4d4] mt-4 max-w-2xl font-mono text-sm"
      >
        // From starting out to building production systems.
      </motion.p>

      {/* Timeline Container */}
      <div className="relative mt-12 pl-8 md:pl-0">
        {/* Vertical Line - The Road */}
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#b8a99a]/30 via-[#b8a99a]/50 to-[#b8a99a]/10" />

        

        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            className={`relative mb-16 md:mb-20 ${
              index %2=== 0 ? "md:pr-[calc(50%+3rem)] md:text-right" : "md:pl-[calc(50%+3rem)]"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-[-1.3rem] md:left-1/2 top-1 w-5 h-5 rounded-full border-2 ${
                exp.isCurrent ? "border-[#b8a99a] shadow-[0_0_12px_rgba(184,169,154,0.3)]" : "border-[#b8a99a]"
              } bg-[#0a0a0a] flex items-center justify-center transform -translate-x-1/2`}
            >
              <div className={`w-2 h-2 rounded-full ${exp.isCurrent ? "bg-[#b8a99a] animate-pulse" : "bg-[#b8a99a]"}`} />
            </div>

            {/* Content */}
            <div className="relative">
              <div className={`bg-[#0a0a0a] border ${
                exp.isCurrent ? "border-[#b8a99a]/30 shadow-[0_0_20px_rgba(184,169,154,0.05)]" : "border-[#2a2a2a]"
              } rounded-xl p-6 hover:border-[#b8a99a]/30 transition-all duration-300 hover:bg-[#121212]`}>
                <div className="flex items-center gap-3 mb-2">
                  <exp.icon className="text-[#b8a99a] text-sm" />
                  <h3 className="text-lg font-medium text-[#fafafa]">
                    {exp.role}
                  </h3>
                  {exp.isCurrent && (
                    <span className="text-[10px] font-mono text-[#b8a99a] border border-[#b8a99a]/20 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>

                <p className="text-[#b8a99a] text-sm font-medium">
                  {exp.company}
                </p>
                <p className="text-[#999999] text-xs mt-1">
                  {exp.period} · {exp.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#d4d4d4] text-sm pl-4 border-l border-[#b8a99a]/20"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

{/* Future Section - LEFT ALIGNED */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-16 md:mb-20"
        >
          <div className="md:pr-[calc(50%+3rem)] md:text-right">
            {/* Timeline Dot - Future (Gold) */}
            <div className="absolute left-[-1.3rem] md:left-1/2 top-1 w-6 h-6 rounded-full border-2 border-[#b8a99a] bg-[#0a0a0a] flex items-center justify-center transform -translate-x-1/2">
              <FaStar className="w-3 h-3 text-[#b8a99a]" />
            </div>

            <div className="border border-[#b8a99a]/30 rounded-xl p-6 bg-gradient-to-r from-[#0a0a0a] to-[#121212] hover:border-[#b8a99a]/60 transition-all duration-300 shadow-lg shadow-[#b8a99a]/5">
              <div className="flex items-center justify-end gap-3 mb-2">
                <h3 className="text-lg font-medium text-[#fafafa]">
                  The Road Ahead
                </h3>
                <FaRoad className="text-[#b8a99a] text-sm" />
              </div>

              <p className="text-[#d4d4d4] text-sm font-mono leading-relaxed text-right">
                <span className="text-[#b8a99a]">while</span> (true) {"{"}
                <br />
                &nbsp;&nbsp;learn<span className="text-[#b8a99a]">()</span>;
                <br />
                &nbsp;&nbsp;build<span className="text-[#b8a99a]">()</span>;
                <br />
                &nbsp;&nbsp;ship<span className="text-[#b8a99a]">()</span>;
                <br />
                {"}"}
              </p>

              <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-[#2a2a2a]">
                <span className="text-[#999999] text-xs">
                  Next chapter: Senior Developer · System Design · Open Source
                </span>
                <FaArrowRight className="text-[#b8a99a] text-xs" />
              </div>
            </div>
          </div>
        </motion.div>
        {/* End of Road */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative pl-8 md:pl-0"
        >
          <div className="md:ml-[calc(50%+3rem)]">
            <div className="text-[#b8b2b2] text-xs font-mono text-center py-4">
              ── end of road ──
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}