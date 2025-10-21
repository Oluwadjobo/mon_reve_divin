
import React from 'react';
import { PHONE_NUMBER_1, PHONE_NUMBER_2 } from '../constants';
import { generateWhatsAppLink } from '../utils/helpers';
import { MessageSquare, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    const contactMessage = "Bonjour Mon Rêve Divin, j'aurais une question.";

    return (
        <footer className="bg-brand-brown-dark text-brand-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h4 className="font-bold text-lg mb-2 font-serif">Mon Rêve Divin</h4>
                        <p className="text-sm text-amber-100">&copy; {year} Tous droits réservés.</p>
                        <p className="text-sm text-amber-100 italic mt-2">"Le goût du vrai, la santé en plus"</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 font-serif">Navigation</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a href="#menu" className="text-amber-100 hover:text-white">Menu</a></li>
                            <li><a href="#commander" className="text-amber-100 hover:text-white">Commander</a></li>
                            <li><a href="#a-propos" className="text-amber-100 hover:text-white">À Propos</a></li>
                            <li><a href="#contact" className="text-amber-100 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 font-serif">Contactez-nous</h4>
                        <div className="space-y-2 text-sm flex flex-col items-center md:items-start">
                            <a href={`tel:${PHONE_NUMBER_1.replace(/\s/g, '')}`} className="flex items-center gap-2 text-amber-100 hover:text-white">
                                <Phone size={16} /> {PHONE_NUMBER_1}
                            </a>
                            <a href={`tel:${PHONE_NUMBER_2.replace(/\s/g, '')}`} className="flex items-center gap-2 text-amber-100 hover:text-white">
                                <Phone size={16} /> {PHONE_NUMBER_2}
                            </a>
                            <a href={generateWhatsAppLink(contactMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-amber-100 hover:text-white">
                                <MessageSquare size={16} /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
