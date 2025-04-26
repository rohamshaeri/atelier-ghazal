import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <motion.header className="fixed w-full z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-6 text-xs tracking-[0.15em]">
            <a href="/contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
            <a href="/collection" className="hover:opacity-70 transition-opacity">COLLECTION</a>
          </div>
          <a href="/" className="text-2xl font-light tracking-[0.15em]">ATELIER GHAZAL</a>
          <div className="flex items-center space-x-6 text-xs tracking-[0.15em]">
            <a href="/about" className="hover:opacity-70 transition-opacity">ABOUT</a>
            <a href="/news" className="hover:opacity-70 transition-opacity">NEWS</a>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg" // put your actual hero image in /public/hero.jpg
            alt="Corset background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero content */}
        <div className="relative h-full flex items-center justify-center text-white px-4 text-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.2em] mb-10"
            >
              Confidently feminine, uniquely you
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/collection"
                className="px-8 py-3 border border-white text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                EXPLORE COLLECTION
              </a>
              <a
                href="/design"
                className="px-8 py-3 bg-white text-black text-xs tracking-[0.2em] hover:bg-transparent hover:text-white border border-white transition-all"
              >
                DESIGN YOUR CORSET
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-gray-600">
          <div>ATELIER GHAZAL · 416, rue Saint-Honoré 75008 Paris</div>
          <div className="flex space-x-4">
            {['Facebook', 'Instagram', 'Twitter', 'Youtube'].map((name) => (
              <a key={name} href={`https://${name.toLowerCase()}.com`} className="hover:text-[#321737]">
                {name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
