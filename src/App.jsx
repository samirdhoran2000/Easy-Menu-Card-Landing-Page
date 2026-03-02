import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga4';
import Header from './features/landing/components/Header';
import Hero from './features/landing/components/Hero';
import Features from './features/landing/components/Features';
import PainPoints from './features/landing/components/PainPoints';
import HowItWorks from './features/landing/components/HowItWorks';
import FAQ from './features/landing/components/FAQ';
import ContactCTA from './features/landing/components/ContactCTA';
import Footer from './features/landing/components/Footer';

// Initialize Google Analytics (Replace with exact GA4 Measurement ID)
ReactGA.initialize('G-1C5NL57FN2');

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/20 selection:text-amber-300">
      <Helmet>
        <title>Easy Menu — Free Digital Menu for Hotels & Restaurants | QR Menu Card</title>
        <meta name="description" content="Easy Menu turns your hotel or restaurant menu into a stunning, QR-scannable digital experience. 100% free to set up — guests browse on any phone, no app needed. Update prices, specials & themes instantly." />
        <meta name="keywords" content="digital menu for hotels, free digital menu, QR menu card, QR code menu for restaurants, hotel menu card design, restaurant QR menu, contactless digital menu, paperless menu for hotels, online menu for restaurants, digital menu maker free, smart menu card, touchless menu, hotel food menu online, restaurant menu app free, digital dining menu, QR scan menu, hotel digital services, menu card maker, menu card template, hospitality technology, restaurant technology, easy menu card, free QR menu, hotel menu solution, digital menu India, restaurant menu card online, food menu QR code, hotel room service menu digital, café menu card, bar menu digital, resort menu QR, canteen digital menu" />
        <meta name="author" content="Easy Menu" />

        {/* Open Graph */}
        <meta property="og:title" content="Easy Menu — Free Digital Menu for Hotels & Restaurants" />
        <meta property="og:description" content="Guests scan a QR code and instantly browse your full digital menu on any phone. Free, instant, and beautifully branded." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://easymenucard.com/logo.png" />
        <meta property="og:image:alt" content="Easy Menu — Digital Menu Logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://easymenucard.com/" />
        <meta property="og:site_name" content="Easy Menu" />
        <meta property="og:logo" content="https://easymenucard.com/logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Easy Menu — Free Digital Menu for Hotels & Restaurants" />
        <meta name="twitter:description" content="Guests scan a QR code and instantly browse your digital menu on any phone. 100% free." />
        <meta name="twitter:image" content="https://easymenucard.com/logo.png" />
        <meta name="twitter:image:alt" content="Easy Menu — Digital Menu Logo" />

        {/* Structured Data: Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Easy Menu",
            "url": "https://easymenucard.com/",
            "logo": "https://easymenucard.com/logo.png",
            "description": "Free digital menus for hotels and restaurants. QR-scannable, instant updates, beautifully branded.",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://wa.me/918888634041",
              "availableLanguage": ["English", "Hindi"]
            }
          })
        }} />

        {/* Structured Data: WebSite */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://easymenucard.com/",
            "name": "Easy Menu",
            "description": "Free Digital Menu for Hotels & Restaurants",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://easymenucard.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} />

        {/* Structured Data: SoftwareApplication */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Easy Menu",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "50"
            },
            "description": "Free digital menu maker for hotels and restaurants. QR code menu card with instant updates."
          })
        }} />

        {/* Structured Data: FAQPage for Google Rich Results */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the digital menu really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Easy Menu is 100% free to set up and use. No credit card required, and guests can scan and browse freely without downloading any apps."
                }
              },
              {
                "@type": "Question",
                "name": "How do guests access the menu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Guests simply scan a QR code placed on their table using their smartphone camera. The menu instantly opens in their web browser."
                }
              },
              {
                "@type": "Question",
                "name": "Can I update the menu later?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. You can update prices, add new dishes, or mark items out of stock in real-time. Changes reflect instantly on the digital menu."
                }
              }
            ]
          })
        }} />
      </Helmet>
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
    </div>
  );
}

export default App;
