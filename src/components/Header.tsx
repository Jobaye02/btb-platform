"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        {/* Logo BTB */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          BTB<span className="text-red-600">.</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition">Accueil</Link>
          <Link href="/activites" className="text-sm font-medium text-gray-300 hover:text-white transition">Activités</Link>
          <Link href="/apropos" className="text-sm font-medium text-gray-300 hover:text-white transition">À propos</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition">Contact</Link>
        </nav>

        {/* Bouton S'inscrire (Desktop) */}
        <button className="hidden md:block rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-red-700">
          S'inscrire
        </button>

        {/* Bouton Menu Mobile (Hamburger) */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>
      </motion.header>

      {/* Menu Mobile (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-red-600 transition">Accueil</Link>
              <Link href="/activites" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-red-600 transition">Activités</Link>
              <Link href="/apropos" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-red-600 transition">À propos</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-red-600 transition">Contact</Link>
              
              <button className="mt-8 w-full rounded-full bg-red-600 py-4 text-lg font-bold text-white transition hover:bg-red-700">
                S'inscrire maintenant
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}