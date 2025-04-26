"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function NewsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const newsArticles = [
    {
      id: 1,
      title: "Spring/Summer 2025 Collection Preview",
      date: "April 15, 2025",
      excerpt: "Discover our newest designs featuring lightweight silks and botanical-inspired embroidery.",
      image: "https://placehold.co/800x500",
      featured: true,
    },
    {
      id: 2,
      title: "Atelier Ghazal Featured in Vogue Paris",
      date: "March 22, 2025",
      excerpt: "Our signature Céleste corset was featured in Vogue Paris' annual haute couture spotlight.",
      image: "https://placehold.co/801x500",
    },
    {
      id: 3,
      title: "Collaboration with Parisian Textile Artist Announced",
      date: "February 10, 2025",
      excerpt: "Announcing our upcoming collaboration with renowned textile artist Sophie Lavalle.",
      image: "https://placehold.co/802x500",
    },
    {
      id: 4,
      title: "New In-Studio Fitting Experience",
      date: "January 30, 2025",
      excerpt: "We’ve redesigned our atelier fitting rooms for greater comfort and privacy.",
      image: "https://placehold.co/803x500",
    },
    {
      id: 5,
      title: "Corsetry Workshop Series",
      date: "January 15, 2025",
      excerpt: "Join our intimate workshop series on corset construction and historical techniques.",
      image: "https://placehold.co/804x500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080"
              alt="News hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-light tracking-widest mb-6"
              >
                News & Events
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-xl mx-auto text-lg mb-10 font-light"
              >
                The latest from our atelier and beyond
              </motion.p>
              <motion.a
                href="#news"
                whileHover={{ scale: 1.05 }}
                className="px-12 py-3 border border-white text-xs tracking-widest hover:bg-white hover:text-black transition"
              >
                READ THE LATEST
              </motion.a>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-24 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl font-light tracking-wider mb-6">LATEST NEWS</h2>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto" />
            </motion.div>

            {/* Featured Article */}
            {newsArticles.find(a => a.featured) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                {(() => {
                  const featured = newsArticles.find(a => a.featured);
                  if (!featured) return null;
                  return (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="overflow-hidden relative w-full h-full">
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.6 }}>
                          <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </div>
                      <div className="py-6">
                        <div className="text-xs tracking-wide text-gray-500 mb-4">{featured.date}</div>
                        <h3 className="text-2xl font-light tracking-wide mb-4">{featured.title}</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">{featured.excerpt}</p>
                        <motion.div whileHover={{ x: 5 }}>
                          <Link
                            href="#"
                            className="text-xs tracking-widest text-[#321737] border-b-2 border-[#321737] pb-1 hover:opacity-70 transition"
                          >
                            READ MORE
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}

            {/* Other News */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {newsArticles.filter(a => !a.featured).map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="overflow-hidden mb-4 relative w-full aspect-video">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="text-xs tracking-wide text-gray-500 mb-2">{a.date}</div>
                  <h3 className="text-lg font-light mb-2">{a.title}</h3>
                  <p className="text-gray-600">{a.excerpt}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 px-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xs tracking-widest text-gray-600">
            ATELIER GHAZAL · 416, rue Saint-Honoré, 75008 Paris
          </div>
          <div className="flex items-center space-x-6">
            {["facebook", "instagram", "twitter", "youtube"].map((platform) => (
              <motion.div key={platform} whileHover={{ opacity: 0.7 }}>
                <Link
                  href={`https://${platform}.com`}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-xs tracking-widest"
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
