import React from 'react';
import Header from './features/landing/components/Header';
import Hero from './features/landing/components/Hero';
import Features from './features/landing/components/Features';
import HowItWorks from './features/landing/components/HowItWorks';
import ContactCTA from './features/landing/components/ContactCTA';
import Footer from './features/landing/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-amber-500/30">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
