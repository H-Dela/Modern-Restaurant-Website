import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner@2.0.3';

export const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    toast.success('Message envoyé avec succès! Nous vous répondrons bientôt.', {
      duration: 4000,
    });
    
    setContactForm({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '123 Avenue des Champs-Élysées',
      subtitle: '75008 Paris, France'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 1 23 45 67 89',
      subtitle: 'Du lundi au samedi'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@labonnetable.fr',
      subtitle: 'Réponse sous 24h'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven: 12h-14h, 19h-22h',
      subtitle: 'Sam: 19h-23h, Dim: Fermé'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-white"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-amber-50"
          >
            Nous sommes là pour répondre à toutes vos questions
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-amber-700 mb-4">Notre Restaurant</h2>
              <p className="text-gray-600 mb-8">
                Découvrez La Bonne Table, votre destination gastronomique au cœur de Paris.
                Notre équipe passionnée vous accueille dans un cadre élégant pour une expérience
                culinaire inoubliable. N'hésitez pas à nous contacter pour toute question ou
                pour réserver votre table.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700">{info.content}</p>
                  <p className="text-gray-500 text-sm mt-1">{info.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md overflow-hidden h-64"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2918071267973!2d2.3059359156744324!3d48.86975407928826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1f01%3A0x40b82c3688c9460!2sChamps-%C3%89lys%C3%A9es%2C%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1635787234567!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-amber-700 mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="contact-name">Nom complet</Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Jean Dupont"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="jean.dupont@email.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Bonjour, j'aimerais réserver une table pour..."
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer le message
              </Button>
            </form>

            <div className="mt-8 p-6 bg-amber-50 rounded-lg">
              <h3 className="text-gray-900 mb-3">Vous préférez nous appeler ?</h3>
              <p className="text-gray-600 mb-4">
                Notre équipe est disponible pour répondre à vos questions et prendre vos réservations
                par téléphone.
              </p>
              <Button
                variant="outline"
                className="w-full border-amber-700 text-amber-700 hover:bg-amber-50"
                onClick={() => window.location.href = 'tel:+33123456789'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </Button>
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-lg shadow-md p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-amber-700 mb-4">À Propos de Nous</h2>
              <p className="text-gray-600 mb-4">
                Fondé en 1985, La Bonne Table est né de la passion de notre chef étoilé pour
                la gastronomie française. Pendant près de 40 ans, nous avons accueilli des milliers
                de convives dans notre établissement parisien.
              </p>
              <p className="text-gray-600 mb-4">
                Notre philosophie est simple : offrir une cuisine d'excellence utilisant uniquement
                des produits frais et de saison, tout en créant une atmosphère chaleureuse et
                accueillante. Chaque plat est une œuvre d'art culinaire, préparée avec soin et
                passion.
              </p>
              <p className="text-gray-600">
                Notre équipe de professionnels dévoués travaille chaque jour pour vous garantir
                une expérience gastronomique mémorable. De la sélection des ingrédients à la
                présentation finale, chaque détail compte.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="text-amber-700 mb-2">40+</div>
                <p className="text-gray-600">Années d'expérience</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="text-amber-700 mb-2">5000+</div>
                <p className="text-gray-600">Clients satisfaits</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="text-amber-700 mb-2">50+</div>
                <p className="text-gray-600">Plats signature</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="text-amber-700 mb-2">★★★</div>
                <p className="text-gray-600">Chef étoilé</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
