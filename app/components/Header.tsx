"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center relative z-50">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-[#fafafa] hover:text-[#b8a99a] transition-colors"
        >
          Vinay Joshi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#d4d4d4] hover:text-[#b8a99a] transition-colors border-b border-transparent hover:border-[#b8a99a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[#fafafa] hover:text-[#b8a99a] transition-colors relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu - Full Height Slide In with Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-xl backdrop-saturate-150" />

            {/* Navigation Links */}
            <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-8 px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-mono text-[#fafafa] hover:text-[#b8a99a] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-6 mt-8 pt-8 border-t border-[#2a2a2a]"
              >
                <a
                  href="https://github.com/vinay0812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4d4d4] hover:text-[#b8a99a] transition-colors text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/vinayjoshi08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4d4d4] hover:text-[#b8a99a] transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:vinayjoshi607@gmail.com"
                  className="text-[#d4d4d4] hover:text-[#b8a99a] transition-colors text-sm"
                >
                  Email
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}