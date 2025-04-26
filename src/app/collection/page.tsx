"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header"; // ✅ updated import
import Link from "next/link";

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "ALL" },
    { id: "classic", name: "CLASSIC" },
    { id: "contemporary", name: "CONTEMPORARY" },
    { id: "bridal", name: "BRIDAL" },
  ];

  const products = [
    { id: 1, name: "Camille", category: "classic", price: "€1,450", image: "https://placehold.co/600x800", featured: true },
    { id: 2, name: "Élise", category: "classic", price: "€1,250", image: "https://placehold.co/601x800" },
    { id: 3, name: "Vivienne", category: "contemporary", price: "€1,650", image: "https://placehold.co/602x800" },
    { id: 4, name: "Céleste", category: "contemporary", price: "€1,350", image: "https://placehold.co/603x800", featured: true },
    { id: 5, name: "Blanc de Blanc", category: "bridal", price: "€2,200", image: "https://placehold.co/604x800" },
    { id: 6, name: "Athéna", category: "bridal", price: "€2,450", image: "https://placehold.co/605x800", featured: true },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://placehold.co/1920x1080"
              alt="Collection hero"
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
                Our Collection
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-xl mx-auto text-lg mb-16 font-light"
              >
                Timeless pieces that celebrate the feminine form
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <motion.a
                  href="#collection"
                  whileHover={{ scale: 1.02 }}
                  className="px-12 py-3 border border-white text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                >
                  EXPLORE BELOW
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section id="collection" className="py-24 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl font-light tracking-[0.15em] mb-6">THE COLLECTION</h2>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-12" />

              {/* Category Filters */}
              <div className="flex justify-center space-x-8 mb-8">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`text-xs tracking-[0.15em] pb-1 transition-colors ${
                      selectedCategory === category.id
                        ? "text-[#321737] border-b-2 border-[#321737]"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                    whileHover={{ opacity: 0.8 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="aspect-[3/4]"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Link
                        href="#"
                        className="px-8 py-2 bg-white text-black text-xs tracking-[0.15em] hover:bg-black hover:text-white transition-colors"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                  <h3 className="text-lg font-light tracking-[0.05em] mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.price}</p>
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
