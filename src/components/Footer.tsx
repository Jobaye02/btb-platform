
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Colonne 1 : Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-3">
              BTB<span className="text-red-600">.</span>
            </h3>
            <p className="text-gray-400 max-w-sm">
              Structure sportive professionnelle dédiée à la formation et l'encadrement de jeunes footballeurs au Sénégal. Excellence, Discipline, Réussite.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="text-white font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Accueil</Link></li>
              <li><Link href="/activites" className="text-gray-400 hover:text-white transition">Activités</Link></li>
              <li><Link href="/apropos" className="text-gray-400 hover:text-white transition">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Dakar, Sénégal</li>
              <li> +221 XX XXX XX XX</li>
              <li>✉️ contact@btb.sn</li>
            </ul>
          </div>
        </div>

        {/* Ligne du bas */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 BTB. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/mentions-legales" className="text-gray-500 hover:text-white transition">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-gray-500 hover:text-white transition">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}