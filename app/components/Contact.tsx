"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24 md:py-32 border-t border-[#2a2a2a] relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-medium tracking-tight text-[#fafafa]"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-[#d4d4d4] mt-4 max-w-2xl"
      >
        I'm always open to interesting conversations, collaboration, or opportunities.
        <br />
        {/* <span className="text-[#b8a99a] font-mono text-sm"> */}
            <span className="text-[#3bd71c] font-mono text-sm">
          // Reach out — I usually respond within a few hours.
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10"
      >
        <a
          href="mailto:vinayjoshi607@gmail.com"
          className="group flex items-center justify-between p-5 rounded-xl border border-[#2a2a2a] hover:border-[#b8a99a]/40 hover:bg-[#121212] transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#b8a99a] text-lg" />
            <div>
              <p className="text-sm text-[#999999]">Email</p>
              <p className="text-[#fafafa] text-base font-medium">vinayjoshi607@gmail.com</p>
            </div>
          </div>
          <FaArrowRight className="text-[#2a2a2a] group-hover:text-[#b8a99a] transition-colors" />
        </a>

        <a
          href="https://linkedin.com/in/vinayjoshi08"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-5 rounded-xl border border-[#2a2a2a] hover:border-[#b8a99a]/40 hover:bg-[#121212] transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-[#b8a99a] text-lg" />
            <div>
              <p className="text-sm text-[#999999]">LinkedIn</p>
              <p className="text-[#fafafa] text-base font-medium">vinayjoshi08</p>
            </div>
          </div>
          <FaArrowRight className="text-[#2a2a2a] group-hover:text-[#b8a99a] transition-colors" />
        </a>

        <a
          href="https://github.com/vinay0812"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-5 rounded-xl border border-[#2a2a2a] hover:border-[#b8a99a]/40 hover:bg-[#121212] transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <FaGithub className="text-[#b8a99a] text-lg" />
            <div>
              <p className="text-sm text-[#999999]">GitHub</p>
              <p className="text-[#fafafa] text-base font-medium">vinay0812</p>
            </div>
          </div>
          <FaArrowRight className="text-[#2a2a2a] group-hover:text-[#b8a99a] transition-colors" />
        </a>

        <div className="flex items-center justify-between p-5 rounded-xl border border-[#2a2a2a] bg-[#0a0a0a]/50">
          <div className="flex items-center gap-4">
            <FaPhone className="text-[#b8a99a] text-lg" />
            <div>
              <p className="text-sm text-[#999999]">Phone</p>
              <p className="text-[#fafafa] text-base font-medium">+91 9756474998</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}