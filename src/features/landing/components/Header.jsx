import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How it Works', href: '#how-it-works' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 z-50 relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-900 font-bold text-xl">
                        EM
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Easy<span className="text-amber-500">Menu</span></span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2.5 rounded-full bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors border border-slate-700">
                        Try It Free
                    </a>
                    <a href="#contact" className="px-5 py-2.5 rounded-full bg-amber-500 text-slate-900 text-sm font-bold hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center gap-1">
                        Get Your Free Menu
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden z-50 relative p-2 text-slate-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-xl border-b border-slate-700 shadow-2xl py-6 px-6 flex flex-col gap-4 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-200 py-2 border-b border-slate-700/50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <a
                                    href="#contact"
                                    className="w-full py-3 rounded-xl bg-slate-700 text-white text-center font-medium border border-slate-600"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Try It Free
                                </a>
                                <a
                                    href="#contact"
                                    className="w-full py-3 rounded-xl bg-amber-500 text-slate-900 text-center font-bold"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Your Free Menu
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
