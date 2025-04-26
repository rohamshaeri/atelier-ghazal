"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NewsPage() {
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
              alt="News hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative h-full flex items-center justify-center text-white px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl font-light tracking-[0.2em] mb-6"
              >
                News & Events
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-xl mx-auto text-lg mb-16 font-light"
              >
                The latest from our atelier and beyond
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <motion.a
                  href="#news"
                  whileHover={{ scale: 1.02 }}
                  className="px-12 py-3 border border-white text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                >
                  READ THE LATEST
                </motion.a>
              </motion.div>
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
              <h2 className="text-2xl font-light tracking-[0.15em] mb-6">LATEST NEWS</h2>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
            </motion.div>

            {/* Featured Article */}
            {newsArticles.find((article) => article.featured) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                {(() => {
                  const featured = newsArticles.find((article) => article.featured);
                  if (!featured) return null;
                  return (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="overflow-hidden">
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.6 }}>
                          <img
                            src={featured.image}
                            alt={featured.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                      <div className="py-6">
                        <div className="text-xs tracking-wider text-gray-500 mb-4">{featured.date}</div>
                        <h3 className="text-2xl font-light tracking-[0.05em] mb-4">{featured.title}</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">{featured.excerpt}</p>
                        <motion.div whileHover={{ x: 5 }}>
                          <Link
                            href="#"
                            className="text-xs tracking-[0.15em] text-[#321737] border-b-2 border-[#321737] pb-1 inline-block hover:opacity-70 transition-opacity"
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

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {newsArticles
                .filter((article) => !article.featured)
                .map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="overflow-hidden mb-4">
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full aspect-video object-cover"
                        />
                      </motion.div>
                    </div>
                    <div className="text-xs tracking-wider text-gray-500 mb-2">{article.date}</div>
                    <h3 className="text-lg font-light mb-2">{article.title}</h3>
                    <p className="text-gray-600">{article.excerpt}</p>
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
