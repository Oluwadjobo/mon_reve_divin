
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { assetUrl, generateWhatsAppLink } from '../utils/helpers';
import { Trash2, Plus, Minus, MessageSquare, ShoppingBag } from 'lucide-react';

const OrderSection: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    nom: '',
    tel: '',
    mode: 'retrait',
    adresse: '',
    creneau: '',
    commentaire: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSendOrder = () => {
    if (cartItems.length === 0) {
      window.open(generateWhatsAppLink("Bonjour Mon Rêve Divin, je souhaiterais passer une commande."), '_blank');
      return;
    }

    const itemsSummary = cartItems.map(item =>
      `- ${item.product.nom} x${item.qte}`
    ).join('\n');

    let message = `Bonjour Mon Rêve Divin, je souhaite passer une commande :\n\n${itemsSummary}\n\n`;
    if (customerInfo.nom) message += `Nom : ${customerInfo.nom}\n`;
    if (customerInfo.tel) message += `Téléphone : ${customerInfo.tel}\n`;
    message += `Mode : ${customerInfo.mode}`;
    if (customerInfo.mode === 'livraison' && customerInfo.adresse) {
        message += ` (Adresse: ${customerInfo.adresse})\n`;
    } else {
        message += `\n`;
    }
    if (customerInfo.creneau) message += `Créneau : ${customerInfo.creneau}\n`;
    if (customerInfo.commentaire) message += `Commentaire : ${customerInfo.commentaire}\n`;
    
    window.open(generateWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="commander" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-brown-dark">Votre Commande</h2>
          <p className="mt-4 text-lg text-brand-brown">Vérifiez votre panier et envoyez-nous votre commande.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-amber-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-brand-brown-dark mb-4 flex items-center gap-2"><ShoppingBag /> Panier</h3>
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                    <img src={assetUrl(item.product.image) || 'https://picsum.photos/100/100'} alt={item.product.nom} className="w-16 h-16 rounded-md object-cover"/>
                    <div className="flex-grow">
                      <p className="font-bold">{item.product.nom}</p>
                      <div className="flex items-center gap-2 mt-1">
                          <button onClick={() => updateQuantity(item.id, item.qte - 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"><Minus size={14} /></button>
                          <span>{item.qte}</span>
                          <button onClick={() => updateQuantity(item.id, item.qte + 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"><Plus size={14} /></button>
                      </div>
                    </div>
                    <div className="text-right">
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">Votre panier est vide.</p>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold text-brand-brown-dark mb-4">Informations</h3>
            <div className="space-y-4">
              <input type="text" name="nom" placeholder="Votre nom (optionnel)" value={customerInfo.nom} onChange={handleInputChange} className="w-full p-3 border border-amber-200 rounded-lg"/>
              <input type="tel" name="tel" placeholder="Votre téléphone (optionnel)" value={customerInfo.tel} onChange={handleInputChange} className="w-full p-3 border border-amber-200 rounded-lg"/>
              <select name="mode" value={customerInfo.mode} onChange={handleInputChange} className="w-full p-3 border border-amber-200 rounded-lg bg-white">
                <option value="retrait">Retrait sur place</option>
                <option value="livraison">Livraison</option>
              </select>
              {customerInfo.mode === 'livraison' && (
                <input type="text" name="adresse" placeholder="Adresse de livraison" value={customerInfo.adresse} onChange={handleInputChange} className="w-full p-3 border border-amber-200 rounded-lg"/>
              )}
              <input type="text" name="creneau" placeholder="Créneau souhaité (ex: 14h-16h)" value={customerInfo.creneau} onChange={handleInputChange} className="w-full p-3 border border-amber-200 rounded-lg"/>
              <textarea name="commentaire" placeholder="Un commentaire ?" value={customerInfo.commentaire} onChange={handleInputChange} rows={3} className="w-full p-3 border border-amber-200 rounded-lg"></textarea>
            </div>
            <button
              onClick={handleSendOrder}
              className="mt-6 w-full flex items-center justify-center gap-3 py-4 px-6 bg-green-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare size={24} />
              {cartItems.length > 0 ? 'Envoyer la commande sur WhatsApp' : 'Contacter pour commander'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
