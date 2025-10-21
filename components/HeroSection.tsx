
import React from 'react';
import { PHONE_NUMBER_1, PHONE_NUMBER_2 } from '../constants';
import { generateWhatsAppLink } from '../utils/helpers';
import { Phone, MessageSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
  const genericOrderMessage = "Bonjour Mon Rêve Divin, je souhaiterais passer une commande.";

  return (
    <section
      id="accueil"
      className="relative text-center py-20 sm:py-32 px-4 bg-no-repeat bg-center bg-contain sm:bg-cover"
      style={{ backgroundImage: "url('/logo-mrd.jpeg')" }}
    >
      <div className="absolute inset-0 bg-brand-cream/80"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-brown-dark font-serif tracking-tight">
          Mon Rêve Divin
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-brand-brown font-semibold italic">
          "Le goût du vrai, la santé en plus"
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={generateWhatsAppLink(genericOrderMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-brand-brown text-white font-bold rounded-full shadow-lg hover:bg-brand-brown-dark transition-all duration-300 transform hover:scale-105"
          >
            <MessageSquare size={24} />
            Commander sur WhatsApp
          </a>
          <div className="flex flex-col gap-2">
            <a href={`tel:${PHONE_NUMBER_1.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-white text-brand-brown-dark font-semibold rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <Phone size={20} /> Appeler {PHONE_NUMBER_1}
            </a>
            <a href={`tel:${PHONE_NUMBER_2.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-white text-brand-brown-dark font-semibold rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <Phone size={20} /> Appeler {PHONE_NUMBER_2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
