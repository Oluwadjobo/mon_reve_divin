
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="a-propos" className="py-16 sm:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/chef.jpg" 
              alt="Chef Mon Rêve Divin" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-brown-dark">Notre Histoire</h2>
            <p className="mt-6 text-lg text-brand-brown leading-relaxed">
              Chez Mon Rêve Divin, chaque produit est le fruit d'un savoir-faire artisanal et d'une passion pour la qualité. Nous sélectionnons rigoureusement nos ingrédients pour vous offrir des saveurs authentiques et saines.
            </p>
            <p className="mt-4 text-lg text-brand-brown leading-relaxed">
              Notre engagement : allier le plaisir de la gourmandise au respect de votre bien-être. C'est ça, "le goût du vrai, la santé en plus".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
