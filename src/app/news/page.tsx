"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function NewsPage() {
  useEffect(() => {
    const handleScroll = () => {
      // You don't need to set anything here
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

            <div className="grid md:grid-cols-2 gap-12">
              {newsArticles.map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={500}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                    <p className="text-gray-700 text-sm mb-6">{article.excerpt}</p>
                    <Link href="#">
                      <div className="text-sm font-medium text-[#321737] hover:underline">
                        Read more →
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#321737] text-white py-8 text-center text-xs tracking-widest">
        © {new Date().getFullYear()} Atelier Ghazal. All rights reserved.
      </footer>
    </div>
  );
}
