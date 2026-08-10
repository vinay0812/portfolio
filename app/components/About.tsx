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
          I'm a Full Stack Developer who likes building things and figuring out
          how they work.
        </p>

        <p>
          I started with web development and over time found myself becoming more
          interested in what happens behind the screen — how APIs are designed,
          how databases handle data, and how different parts of an application
          talk to each other.
        </p>

        <p>
          I learn best by <span className="text-[#b8a99a] font-medium">building</span>.
          Most of what I know has come from working on projects, breaking things,
          debugging them, and trying again. I enjoy picking up something new when
          a project gives me a reason to.
        </p>

        <p>
          These days, I'm spending more time learning about system design,
          backend architecture, and distributed systems while continuing to
          build and experiment with new ideas.
        </p>

        <p>
          Outside of coding, I'm usually riding, listening to music, or just
          thinking about things.
        </p>

        <p className="text-[#999999] text-sm font-mono">
        // Always learning. Always building.
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