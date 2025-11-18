import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-amber-500 mb-4">La Bonne Table</h3>
            <p className="text-gray-400 mb-4">
              Une expérience culinaire unique où la passion rencontre la tradition.
              Découvrez nos plats raffinés dans une ambiance chaleureuse.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-500 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>123 Avenue des Champs-Élysées, 75008 Paris</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>contact@labonnetable.fr</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-amber-500 mb-4">Horaires</h3>
            <div className="space-y-2 mb-4">
              <p>Lundi - Vendredi: 12h - 14h, 19h - 22h</p>
              <p>Samedi: 19h - 23h</p>
              <p>Dimanche: Fermé</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 La Bonne Table. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
