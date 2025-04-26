"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const purple = "#321737";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.header
        className="fixed w-full z-50 transition-colors duration-300"
        initial={{ backgroundColor: "transparent" }}
        animate={{ backgroundColor: scrolled ? purple : "transparent" }}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-center items-center relative">
          <div className="flex items-center space-x-8">
            <motion.div whileHover={{ opacity: 0.7 }}>
              <Link href="/about" className="text-xs tracking-[0.15em] text-white hover:opacity-70 transition-opacity">
                ABOUT
              </Link>
            </motion.div>
            <motion.div whileHover={{ opacity: 0.7 }}>
              <Link href="/contact" className="text-xs tracking-[0.15em] text-white hover:opacity-70 transition-opacity">
                CONTACT
              </Link>
            </motion.div>
          </div>

          <motion.div whileHover={{ opacity: 0.9 }} className="mx-8">
            <Link href="/" className="text-2xl font-light tracking-[0.15em] text-white">
              ATELIER GHAZAL
            </Link>
          </motion.div>

          <div className="flex items-center space-x-8">
            <motion.div whileHover={{ opacity: 0.7 }}>
              <Link href="/collection" className="text-xs tracking-[0.15em] text-white hover:opacity-70 transition-opacity">
                COLLECTION
              </Link>
            </motion.div>
            <motion.div whileHover={{ opacity: 0.7 }}>
              <Link href="/news" className="text-xs tracking-[0.15em] text-white hover:opacity-70 transition-opacity">
                NEWS
              </Link>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://placehold.co/1920x1080"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Hero Text */}
          <div className="relative h-full flex items-center justify-center text-white px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl font-light tracking-[0.2em] mb-16"
              >
                Confidently feminine, uniquely you
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
              >
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Link
                    href="/collection"
                    className="px-12 py-3 border border-white text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                  >
                    EXPLORE COLLECTION
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <Link
                    href="/design"
                    className="px-12 py-3 bg-white text-black text-xs tracking-[0.2em] hover:bg-transparent hover:text-white transition-all duration-300"
                  >
                    DESIGN YOUR CORSET
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 px-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xs tracking-wider text-gray-600">
            ATELIER GHAZAL · 416, rue Saint-Honoré 75008 Paris
          </div>
          <div className="flex items-center space-x-6">
            {["facebook", "instagram", "twitter", "youtube"].map((platform) => (
              <motion.div key={platform} whileHover={{ opacity: 0.7 }}>
                <Link
                  href={`https://${platform}.com`}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-xs tracking-wider"
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
