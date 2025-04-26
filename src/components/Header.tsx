"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const purple = "#321737";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (href: string) =>
    `hover:opacity-70 ${pathname === href ? "text-[#f4d6ec]" : ""}`;  

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu after clicking link (mobile)
  };

  return (
    <motion.header
      className="fixed w-full z-50"
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: scrolled ? purple : "transparent" }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 text-white">
        {/* Mobile Nav */}
        <div className="flex justify-between items-center sm:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <a
            href="/"
            className="text-xl font-light tracking-[0.15em] whitespace-nowrap"
          >
            ATELIER GHAZAL
          </a>

          <div className="w-6" /> {/* Spacer */}
        </div>

        {/* Mobile Dropdown Animated */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className={`sm:hidden ${menuOpen ? "flex" : "hidden"} mt-4 flex-col items-center space-y-3 text-xs tracking-[0.15em]`}
        >
          <a href="/about" onClick={handleLinkClick} className={linkClass("/about")}>ABOUT</a>
          <a href="/contact" onClick={handleLinkClick} className={linkClass("/contact")}>CONTACT</a>
          <a href="/collection" onClick={handleLinkClick} className={linkClass("/collection")}>COLLECTION</a>
          <a href="/news" onClick={handleLinkClick} className={linkClass("/news")}>NEWS</a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden sm:block">
          <div className="flex items-center justify-center relative text-xs tracking-[0.15em]">
            {/* Left nav */}
            <div className="flex items-center space-x-8">
              <a href="/about" className={linkClass("/about")}>ABOUT</a>
              <a href="/contact" className={linkClass("/contact")}>CONTACT</a>
            </div>

            {/* Center logo */}
            <div className="mx-8">
              <a
                href="/"
                className="text-2xl font-light tracking-[0.15em] whitespace-nowrap"
              >
                ATELIER GHAZAL
              </a>
            </div>

            {/* Right nav */}
            <div className="flex items-center space-x-8">
              <a href="/collection" className={linkClass("/collection")}>COLLECTION</a>
              <a href="/news" className={linkClass("/news")}>NEWS</a>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
