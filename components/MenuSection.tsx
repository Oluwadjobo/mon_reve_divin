
import React, { useState, useMemo } from 'react';
import { DEFAULT_PRODUCTS } from '../constants';
import { Product } from '../types';
import { generateWhatsAppLink } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Search, ShoppingCart, MessageSquare, ShieldAlert } from 'lucide-react';

const QuantitySelector: React.FC<{ quantity: number; onQuantityChange: (q: number) => void; }> = ({ quantity, onQuantityChange }) => (
  <div className="flex items-center justify-center gap-2">
    <button aria-label="Diminuer la quantité" onClick={() => onQuantityChange(Math.max(1, quantity - 1))} className="p-2 rounded-full bg-amber-200 hover:bg-amber-300 transition-colors"><Minus size={16} /></button>
    <span className="font-bold text-lg w-8 text-center">{quantity}</span>
    <button aria-label="Augmenter la quantité" onClick={() => onQuantityChange(quantity + 1)} className="p-2 rounded-full bg-amber-200 hover:bg-amber-300 transition-colors"><Plus size={16} /></button>
  </div>
);

const ProductCard: React.FC<{ product: Product; }> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [imgError, setImgError] = useState(false);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Image loading failed for ${product.nom}:`, product.image);
    setImgError(true);
    e.currentTarget.src = '/menu/placeholder.png';
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optionally reset quantity after adding
    // setQuantity(1);
  };

  const handleDirectOrder = () => {
    const message = `Bonjour Mon Rêve Divin, je souhaite commander :\n- ${product.nom} x${quantity}`;
    window.open(generateWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${!product.actif ? 'opacity-50 grayscale' : ''}`}>
        <div className="relative w-full h-48 bg-gray-100">
          <img
            src={imgError ? '/menu/placeholder.png' : product.image}
            alt={product.nom}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={handleImageError}
          />
          {imgError && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span className="text-sm">Image indisponible</span>
            </div>
          )}
        </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-serif text-brand-brown-dark">{product.nom}</h3>
        {product.description && <p className="text-gray-600 mt-2 text-sm flex-grow">{product.description}</p>}
        {product.allergenes && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-800">
            <ShieldAlert size={16} className="text-amber-600" />
            <span>Allergènes: {product.allergenes.join(', ')}</span>
          </div>
        )}
        {product.actif ? (
          <div className="mt-4 pt-4 border-t border-amber-100 flex flex-col gap-3">
            <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
            <div className="flex flex-col sm:flex-row gap-2">
                <button onClick={handleAddToCart} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-brand-brown text-white font-semibold rounded-lg shadow hover:bg-brand-brown-dark transition-colors">
                    <ShoppingCart size={18} /> Ajouter
                </button>
                <button onClick={handleDirectOrder} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors">
                    <MessageSquare size={18} /> Commander
                </button>
            </div>
          </div>
        ) : (
          <div className="mt-4 pt-4 border-t border-amber-100">
            <p className="text-center font-bold text-red-500">Indisponible</p>
          </div>
        )}
      </div>
    </div>
  );
};

const MenuSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | Product['categorie']>('all');

  const categories: ('all' | Product['categorie'])[] = ['all', 'Gâteaux', 'Petit four', 'Crêpes farcie'];

  const filteredProducts = useMemo(() => {
    return DEFAULT_PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.categorie === selectedCategory;
      const matchesSearch = product.nom.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-brown-dark">Notre Menu</h2>
          <p className="mt-4 text-lg text-brand-brown max-w-2xl mx-auto">Découvrez nos créations, préparées chaque jour avec passion et des ingrédients de qualité.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-20 z-10 bg-brand-cream/90 backdrop-blur-sm p-4 rounded-xl shadow-sm">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-brand-brown-light focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors ${selectedCategory === category ? 'bg-brand-brown text-white' : 'bg-white text-brand-brown hover:bg-amber-100'}`}
              >
                {category === 'all' ? 'Tout voir' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">Aucun produit ne correspond à votre recherche.</p>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
