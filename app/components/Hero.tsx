"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = ">_ I build production-ready applications with Node.js, TypeScript, React, and cloud infrastructure.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#b8a99a] font-mono text-sm mb-4"
      >
        Hello, World! 👋
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-medium tracking-tight text-[#fafafa]"
      >
        I'm Vinay Joshi.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl md:text-3xl text-[#d4d4d4] mt-2"
      >
        Full Stack Developer & Problem Solver.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-[#d4d4d4] mt-6 max-w-2xl min-h-[3rem] font-mono"
      >
        {text}
        <br />
        <br />
        <span className="animate-pulse text-[#3bd71c]">//</span>
        <span className="text-[#3bd71c] font-mono text-sm">
          Available for full-time roles. Open to remote or in-office.
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap gap-4 mt-8"
      >
        <a
          href="https://github.com/vinay0812"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[#b8a99a]/30 rounded-md hover:bg-[#b8a99a] hover:text-[#0a0a0a] transition-all duration-200 text-sm text-[#fafafa] flex items-center gap-2"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/vinayjoshi08"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[#b8a99a]/30 rounded-md hover:bg-[#b8a99a] hover:text-[#0a0a0a] transition-all duration-200 text-sm text-[#fafafa] flex items-center gap-2"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="mailto:vinayjoshi607@gmail.com"
          className="px-6 py-3 border border-[#b8a99a]/30 rounded-md hover:bg-[#b8a99a] hover:text-[#0a0a0a] transition-all duration-200 text-sm text-[#fafafa] flex items-center gap-2"
        >
          <FaEnvelope /> Email
        </a>
        <a
          href="https://wa.me/919756474998?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you.%20Could%20we%20discuss%20a%20potential%20opportunity%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[#b8a99a]/30 rounded-md hover:bg-[#b8a99a] hover:text-[#0a0a0a] transition-all duration-200 text-sm text-[#fafafa] flex items-center gap-2"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex gap-8 md:gap-12 mt-12 pt-8 border-t border-[#2a2a2a]"
      >
        {[
          { value: "3+", label: "Years Experience" },
          { value: "5", label: "Production Projects" },
          { value: "∞", label: "Always Learning" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-2xl md:text-3xl font-mono font-medium text-[#fafafa]">{stat.value}</div>
            <div className="text-xs text-[#999999] uppercase tracking-wider mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}