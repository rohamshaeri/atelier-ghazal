"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
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
              alt="Atelier interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Text Overlay */}
          <div className="relative h-full flex items-center justify-center text-white px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl font-light tracking-[0.2em] mb-6"
              >
                Our Atelier
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-xl mx-auto text-lg mb-8 font-light"
              >
                Craftsmanship, heritage, and timeless elegance
              </motion.p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl font-light tracking-[0.15em] mb-6">OUR STORY</h2>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded in 2023 by master corsetier Ghazal Ghasemi, Atelier Ghazal was born from a passion for historical craftsmanship and modern femininity. After years of apprenticeship with some of Europe's most renowned artisans, Ghazal established her Parisian atelier with a singular vision: to revive the artistry of bespoke corsetry while embracing contemporary aesthetics.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Each piece created in our atelier represents countless hours of meticulous handwork, combining time-honored techniques with innovative approaches to comfort and design. We believe that a corset should be more than a garment—it should be an embodiment of personal expression, a celebration of form, and an heirloom to treasure.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://placehold.co/800x1000"
                    alt="Atelier craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 px-8 bg-[#321737] text-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl font-light tracking-[0.15em] mb-6">OUR PHILOSOPHY</h2>
              <div className="w-16 h-0.5 bg-[#e8e4dc] mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "ARTISTRY",
                  text: "We approach each creation as a work of art, blending traditional corsetry techniques with contemporary design sensibilities.",
                },
                {
                  title: "INDIVIDUALITY",
                  text: "True luxury lies in personalization. Each corset is meticulously fitted to your unique measurements and style.",
                },
                {
                  title: "LEGACY",
                  text: "We create heirloom pieces that transcend trends, ensuring beauty and structure for generations to come.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl font-light mb-4 tracking-[0.1em]">{item.title}</h3>
                  <p className="text-gray-200 font-light">{item.text}</p>
                </motion.div>
              ))}
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
