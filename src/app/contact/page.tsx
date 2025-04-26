"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080"
              alt="Contact hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Centered Text */}
          <div className="relative h-full flex items-center justify-center text-white px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl font-light tracking-[0.2em] mb-6"
              >
                Contact Us
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-xl mx-auto text-lg mb-8 font-light"
              >
                We look forward to hearing from you
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-8 bg-white">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl font-light tracking-[0.15em] mb-6">GET IN TOUCH</h2>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto" />
            </motion.div>

            <form className="space-y-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#321737]"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#321737]"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  className="border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#321737]"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="px-12 py-3 bg-[#321737] text-white text-xs tracking-[0.2em] hover:bg-[#472355] transition-all duration-300"
              >
                SEND MESSAGE
              </motion.button>
            </form>
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
                  target="_blank"
                  rel="noopener noreferrer"
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
