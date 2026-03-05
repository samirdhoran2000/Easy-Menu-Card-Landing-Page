import React from 'react';
import Header from '../features/landing/components/Header';
import Hero from '../features/landing/components/Hero';
import Features from '../features/landing/components/Features';
import PainPoints from '../features/landing/components/PainPoints';
import HowItWorks from '../features/landing/components/HowItWorks';
import FAQ from '../features/landing/components/FAQ';
import ContactCTA from '../features/landing/components/ContactCTA';
import Footer from '../features/landing/components/Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <PainPoints />
                <HowItWorks />
                <FAQ />
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;
