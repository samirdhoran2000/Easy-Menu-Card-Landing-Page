import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Why Digital?', href: '#why-digital' },
        { name: 'How it Works', href: '#how-it-works' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-slate-800/50 py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 z-50 relative group">
                    <img src="/logo.svg" alt="Easy Menu Logo" className="w-9 h-9 rounded-xl object-cover shadow-lg shadow-amber-500/30" />
                    <span className="text-lg font-bold tracking-tight text-white">Easy<span className="text-amber-400">Menu</span></span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <a href="#contact" className="px-5 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all bg-slate-900/50 backdrop-blur-sm">
                        Try It Free
                    </a>
                    <a href="#contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center gap-1.5">
                        Get Your Free Menu <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden z-50 relative p-2 text-slate-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 bg-slate-900/97 backdrop-blur-2xl border-b border-slate-800 shadow-2xl shadow-black/50 py-6 px-6 flex flex-col gap-3 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-base font-medium text-slate-300 py-2.5 border-b border-slate-800" onClick={() => setIsMobileMenuOpen(false)}>
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 mt-3">
                                <a href="#contact" className="w-full py-3.5 rounded-2xl text-center font-semibold text-slate-300 bg-slate-800 border border-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Try It Free</a>
                                <a href="#contact" className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-center font-bold shadow-lg shadow-amber-500/20" onClick={() => setIsMobileMenuOpen(false)}>Get Your Free Menu</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
