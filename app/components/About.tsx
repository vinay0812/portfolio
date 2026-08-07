"use client";

import { motion } from "framer-motion";
import { FaRocket, FaInfinity, FaCode, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24 md:py-32 border-t border-[#2a2a2a] relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-medium tracking-tight text-[#fafafa]"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 space-y-4 text-[#d4d4d4] max-w-3xl"
      >
        <p>
          I'm a Full Stack Developer with a passion for building things that work. 
          Currently shipping features at Mascot Software, where I work on payment systems, 
          real-time notifications, and scalable backend infrastructure.
        </p>
        <p>
          I believe in <span className="text-[#b8a99a] font-medium">learning infinity</span> — 
          there's always something new to discover, a problem to solve, or a system to optimize. 
          Whether it's diving into a new framework or optimizing database queries, I approach 
          every challenge with curiosity and persistence.
        </p>
        <p>
          Outside of work, I'm either building side projects, exploring new technologies, 
          or contributing to things that matter to me.
        </p>
        <p className="text-[#999999] text-sm font-mono">
          // Currently exploring: System Design, Distributed Systems, Open Source
        </p>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
      >
        {[
          { icon: FaCode, label: "Clean Code" },
          { icon: FaRocket, label: "Ship Fast" },
          { icon: FaInfinity, label: "Learn ∞" },
          { icon: FaHeart, label: "Build Impact" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center p-4 rounded-xl border border-[#2a2a2a] hover:border-[#b8a99a]/30 transition-colors"
          >
            <item.icon className="text-[#b8a99a] text-2xl mb-2" />
            <span className="text-xs text-[#d4d4d4]">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}