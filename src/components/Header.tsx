"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ Correct import
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
    setMenuOpen(false); // close mobile menu after click
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

          <Link
            href="/"
            className="text-xl font-light tracking-[0.15em] whitespace-nowrap"
          >
            ATELIER GHAZAL
          </Link>

          <div className="w-6" /> {/* Spacer */}
        </div>

        {/* Mobile Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className={`sm:hidden ${menuOpen ? "flex" : "hidden"} mt-4 flex-col items-center space-y-3 text-xs tracking-[0.15em]`}
        >
          <Link href="/about" onClick={handleLinkClick} className={linkClass("/about")}>ABOUT</Link>
          <Link href="/contact" onClick={handleLinkClick} className={linkClass("/contact")}>CONTACT</Link>
          <Link href="/collection" onClick={handleLinkClick} className={linkClass("/collection")}>COLLECTION</Link>
          <Link href="/news" onClick={handleLinkClick} className={linkClass("/news")}>NEWS</Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden sm:block">
          <div className="flex items-center justify-center relative text-xs tracking-[0.15em]">
            {/* Left nav */}
            <div className="flex items-center space-x-8">
              <Link href="/about" className={linkClass("/about")}>ABOUT</Link>
              <Link href="/contact" className={linkClass("/contact")}>CONTACT</Link>
            </div>

            {/* Center logo */}
            <div className="mx-8">
              <Link
                href="/"
                className="text-2xl font-light tracking-[0.15em] whitespace-nowrap"
              >
                ATELIER GHAZAL
              </Link>
            </div>

            {/* Right nav */}
            <div className="flex items-center space-x-8">
              <Link href="/collection" className={linkClass("/collection")}>COLLECTION</Link>
              <Link href="/news" className={linkClass("/news")}>NEWS</Link>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
