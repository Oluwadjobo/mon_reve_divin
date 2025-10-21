
import React, { createContext, useState, useEffect, useContext, ReactNode, useCallback } from 'react';
import { Product, CartItem } from '../types';
import { DEFAULT_PRODUCTS } from '../constants';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getProductById: (id: number) => Product | undefined;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const parsedCart: { id: number; qte: number }[] = JSON.parse(storedCart);
        const hydratedCart: CartItem[] = parsedCart
          .map(item => {
            const product = DEFAULT_PRODUCTS.find(p => p.id === item.id);
            return product ? { id: item.id, product, qte: item.qte } : null;
          })
          .filter((item): item is CartItem => item !== null);
        setCartItems(hydratedCart);
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      localStorage.removeItem('cart');
    }
  }, []);

  const saveCartToLocalStorage = useCallback((items: CartItem[]) => {
    const simplifiedCart = items.map(item => ({ id: item.id, qte: item.qte }));
    localStorage.setItem('cart', JSON.stringify(simplifiedCart));
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      let newItems;
      if (existingItem) {
        newItems = prevItems.map(item =>
          item.id === product.id ? { ...item, qte: item.qte + quantity } : item
        );
      } else {
        newItems = [...prevItems, { id: product.id, product, qte: quantity }];
      }
      saveCartToLocalStorage(newItems);
      return newItems;
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems(prevItems => {
      if (newQuantity <= 0) {
        const newItems = prevItems.filter(item => item.id !== productId);
        saveCartToLocalStorage(newItems);
        return newItems;
      }
      const newItems = prevItems.map(item =>
        item.id === productId ? { ...item, qte: newQuantity } : item
      );
      saveCartToLocalStorage(newItems);
      return newItems;
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== productId);
      saveCartToLocalStorage(newItems);
      return newItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.qte, 0);
  };

  const getProductById = (id: number) => {
    return DEFAULT_PRODUCTS.find(p => p.id === id);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart, getItemCount, getProductById }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
