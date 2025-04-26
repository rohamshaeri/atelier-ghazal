"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Introducing Our New Corset Collection",
      date: "April 20, 2025",
      imageUrl: "/api/placeholder/600/400",
      description:
        "We are thrilled to unveil our latest collection — blending timeless elegance with modern craftsmanship. Explore the new pieces in our atelier!",
      link: "/news/new-corset-collection",
    },
    {
      id: 2,
      title: "Behind the Scenes: Crafting a Custom Corset",
      date: "March 12, 2025",
      imageUrl: "/api/placeholder/601/400",
      description:
        "Discover the intricate process that goes into each bespoke corset. From sketch to fitting, every step is tailored to perfection.",
      link: "/news/behind-the-scenes",
    },
    {
      id: 3,
      title: "Atelier Ghazal at Paris Fashion Week",
      date: "February 5, 2025",
      imageUrl: "/api/placeholder/602/400",
      description:
        "We proudly showcased our artisanal designs at Paris Fashion Week. Thank you for being part of this incredible journey.",
      link: "/news/paris-fashion-week",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-light text-center mb-16 tracking-[0.15em]"
            >
              Atelier Ghazal News
            </motion.h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {newsArticles.map((article) => (
                <motion.div
                  key={article.id}
                  className="bg-[#f8f8f8] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href={article.link}>
                    <div className="relative w-full h-64">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-medium mb-2">{article.title}</h2>
                      <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                      <p className="text-gray-700 text-sm">{article.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
