import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Award, Heart, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: ChefHat,
      title: 'Chef Étoilé',
      description: 'Notre chef passionné crée des plats d\'exception avec des produits frais'
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Ingrédients sélectionnés et importés des meilleurs producteurs'
    },
    {
      icon: Heart,
      title: 'Fait Maison',
      description: 'Tous nos plats sont préparés avec amour dans nos cuisines'
    },
    {
      icon: Clock,
      title: 'Service Rapide',
      description: 'Commandez en ligne et profitez de notre service de livraison'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1643101570532-88c8ecc07c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MjUyMTA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-white"
          >
            Découvrez la Passion Culinaire de La Bonne Table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-gray-200"
          >
            Une expérience gastronomique unique où tradition et innovation se rencontrent
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-lg px-8"
              onClick={() => onNavigate('menu')}
            >
              Voir le Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8"
              onClick={() => onNavigate('order')}
            >
              Commander Maintenant
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-amber-700 mb-4">Notre Histoire</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Depuis 1985, La Bonne Table vous accueille dans un cadre élégant et chaleureux.
              Notre chef étoilé et son équipe vous proposent une cuisine raffinée qui célèbre
              les saveurs authentiques et les produits de saison.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-amber-700 mb-4">Nos Spécialités</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de plats signature préparés avec passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Filet de Bœuf Rossini',
                image: 'https://images.unsplash.com/photo-1712746785126-e9f28b5b3cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lciUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYyNDM0MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                description: 'Tendre filet de bœuf avec foie gras et truffe'
              },
              {
                title: 'Saumon Grillé aux Herbes',
                image: 'https://images.unsplash.com/photo-1577004686904-1a4f118acf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBkaXNoJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjI0OTg1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                description: 'Pavé de saumon frais sauce beurre blanc'
              },
              {
                title: 'Fondant au Chocolat',
                image: 'https://images.unsplash.com/photo-1496890607984-d27fca8a68ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZmFuY3l8ZW58MXx8fHwxNzYyNTIxMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                description: 'Cœur coulant au chocolat noir, glace vanille'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => onNavigate('menu')}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </div>
                <h3 className="mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-amber-700 hover:bg-amber-800"
              onClick={() => onNavigate('menu')}
            >
              Découvrir tout le menu
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-white">Réservez votre table</h2>
            <p className="text-xl mb-8 text-amber-50">
              Profitez d'une expérience culinaire inoubliable dans notre restaurant
            </p>
            <Button
              size="lg"
              className="bg-white text-amber-700 hover:bg-gray-100"
              onClick={() => onNavigate('contact')}
            >
              Nous Contacter
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
