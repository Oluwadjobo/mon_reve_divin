
import React from 'react';
import { PHONE_NUMBER_1, PHONE_NUMBER_2 } from '../constants';
import { generateWhatsAppLink } from '../utils/helpers';
import { Clock, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactMessage = "Bonjour Mon Rêve Divin, j'aurais une question.";

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-brown-dark">Contact & Horaires</h2>
          <p className="mt-4 text-lg text-brand-brown">Nous sommes là pour vous répondre.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="bg-amber-50 p-8 rounded-2xl shadow-sm">
            <Clock className="mx-auto text-brand-brown" size={40} />
            <h3 className="text-2xl font-bold mt-4 text-brand-brown-dark">Nos Horaires</h3>
            <ul className="mt-4 space-y-2 text-brand-brown">
              <li>Lundi - Samedi : 06h00 - 22h00</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-8 rounded-2xl shadow-sm">
            <MapPin className="mx-auto text-brand-brown" size={40} />
            <h3 className="text-2xl font-bold mt-4 text-brand-brown-dark">Nous Trouver</h3>
            <p className="mt-4 text-brand-brown">
              2 rue derrière l’hôpital de Mènontin<br/>
              Cotonou, Bénin
            </p>
            <div className="mt-6 flex flex-col items-center gap-3">
              <a href={`tel:${PHONE_NUMBER_1.replace(/\s/g, '')}`} className="flex items-center gap-2 font-semibold hover:text-brand-brown-dark transition-colors">
                <Phone size={18} /> {PHONE_NUMBER_1}
              </a>
              <a href={`tel:${PHONE_NUMBER_2.replace(/\s/g, '')}`} className="flex items-center gap-2 font-semibold hover:text-brand-brown-dark transition-colors">
                <Phone size={18} /> {PHONE_NUMBER_2}
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
            <a
                href={generateWhatsAppLink(contactMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
                <MessageSquare size={24} />
                Contacter sur WhatsApp
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
