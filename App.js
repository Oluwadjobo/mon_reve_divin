
import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import OrderSection from './components/OrderSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white font-sans">
        <Header />
        <main>
          <HeroSection />
          <MenuSection />
          <OrderSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
