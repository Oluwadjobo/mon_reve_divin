
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { assetUrl } from '@/utils/helpers';

const Header: React.FC = () => {
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = getItemCount();

  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#commander', label: 'Commander' },
    { href: '#a-propos', label: 'À Propos' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <img src={assetUrl("/logo-mrd.jpeg")} alt="Logo Mon Rêve Divin" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
            <span className="text-xl font-bold font-serif text-brand-brown-dark tracking-tight hidden sm:block">
              Mon Rêve Divin
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-lg font-medium text-brand-brown hover:text-brand-brown-dark transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#commander" className="relative flex items-center p-2 text-brand-brown hover:text-brand-brown-dark transition-colors">
              <ShoppingBag size={28} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {itemCount}
                </span>
              )}
            </a>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-brown-dark">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-brand-cream pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-lg font-medium text-brand-brown hover:text-brand-brown-dark transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
