import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0f1c] border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-900 font-bold text-sm">
                                EM
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">Easy<span className="text-amber-500">Menu</span></span>
                        </div>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            The premium digital menu card solution for modern hotels and restaurants. Increase revenue and elevate guest experiences.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li><a href="#features" className="text-slate-400 hover:text-amber-500 transition-colors">Features</a></li>
                            <li><a href="#how-it-works" className="text-slate-400 hover:text-amber-500 transition-colors">How it Works</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Case Studies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Blog</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-amber-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Easy Menu Inc. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        Made with <span className="text-amber-500">♥</span> for the Hospitality Industry
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
