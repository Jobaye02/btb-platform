"use client";

import { motion } from "framer-motion";
// Déploiement production - Version 1.0

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* --- SECTION HÉRO --- */}
      <section 
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay sombre pour faire ressortir le texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            BE THE <span className="text-red-600">BEST</span>
          </motion.h1>
          
          <motion.p
            className="mt-6 text-lg text-gray-200 sm:text-2xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            L'académie de football qui forge les champions de demain au Sénégal.
          </motion.p>
          
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="rounded-full bg-red-600 px-8 py-3 text-lg font-bold text-white transition hover:bg-red-700 hover:scale-105 shadow-lg shadow-red-600/30">
              Rejoindre l'académie
            </button>
            <button className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
              En savoir plus
            </button>
          </motion.div>
        </div>

        {/* Indicateur de scroll */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* --- SECTION STATS / PREUVE SOCIALE --- */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Stat 1 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-5xl font-black text-red-600">100+</h3>
              <p className="mt-2 text-gray-400 font-medium">Joueurs encadrés</p>
            </div>
            {/* Stat 2 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-5xl font-black text-white">15+</h3>
              <p className="mt-2 text-gray-400 font-medium">Tournois remportés</p>
            </div>
            {/* Stat 3 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-5xl font-black text-white">SFL</h3>
              <p className="mt-2 text-gray-400 font-medium">Ligue interne exclusive</p>
            </div>
          </motion.div>
        </div>
      </section>
            {/* --- SECTION NOS ACTIVITÉS --- */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-black text-center text-white mb-16 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            NOS <span className="text-red-600">ACTIVITÉS</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 : Formation */}
            <motion.div
              className="p-8 rounded-2xl bg-black border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-red-600/20 flex items-center justify-center mb-6">
                <span className="text-3xl">⚽</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Formation Élite</h3>
              <p className="text-gray-400 leading-relaxed">
                Entraînements intensifs axés sur la technique, la tactique et le mental pour révéler le potentiel de chaque jeune joueur.
              </p>
            </motion.div>

            {/* Carte 2 : SFL */}
            <motion.div
              className="p-8 rounded-2xl bg-black border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-14 h-14 rounded-full bg-red-600/20 flex items-center justify-center mb-6">
                <span className="text-3xl"></span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">SFL - Ligue Interne</h3>
              <p className="text-gray-400 leading-relaxed">
                Notre championnat exclusif. Les écoles de quartier s'affrontent dans un cadre professionnel, arbitré et structuré.
              </p>
            </motion.div>

            {/* Carte 3 : Tournois */}
            <motion.div
              className="p-8 rounded-2xl bg-black border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-14 h-14 rounded-full bg-red-600/20 flex items-center justify-center mb-6">
                <span className="text-3xl"></span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Tournois & Scouting</h3>
              <p className="text-gray-400 leading-relaxed">
                Organisation d'événements majeurs et mise en relation directe avec des recruteurs locaux et internationaux.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
            {/* --- CTA FINAL --- */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-red-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            PRÊT À <span className="text-red-600">RÉUSSIR</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Rejoins l'élite du football sénégalais. Les inscriptions sont ouvertes.
          </p>
          <button className="rounded-full bg-red-600 px-10 py-4 text-lg font-bold text-white transition hover:bg-red-700 hover:scale-105 shadow-xl shadow-red-600/30">
            Commencer maintenant
          </button>
        </div>
      </section>
    </div>
  );
}