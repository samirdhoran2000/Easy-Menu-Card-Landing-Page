import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, QrCode, Smartphone } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 w-fit backdrop-blur-sm">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm font-medium text-slate-300">100% Free. No Credit Card Needed.</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                            Revolutionize Your Hotel's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Dining Experience</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                            Replace outdated paper menus with stunning digital cards. Let your guests browse seamlessly via QR code on any iOS or Android device. It's <strong className="text-emerald-400 font-semibold">completely free</strong>, updates instantly, and perfectly complements your existing paper menus.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a
                                href="#contact"
                                className="group flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 rounded-full font-bold text-lg hover:bg-amber-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                            >
                                Get Your Free Menu
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#how-it-works"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/80 text-white border border-slate-700 rounded-full font-medium text-lg hover:bg-slate-700 transition-all backdrop-blur-sm"
                            >
                                See How It Works
                            </a>
                        </div>

                        {/* Social Proof Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-slate-800/60">
                            <div>
                                <h4 className="text-3xl font-bold text-white">0%</h4>
                                <p className="text-sm text-slate-400 mt-1">Printing Costs</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">100%</h4>
                                <p className="text-sm text-slate-400 mt-1">Contactless</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">24/7</h4>
                                <p className="text-sm text-slate-400 mt-1">Instant Updates</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Element (Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Phone Mockup Frame */}
                        <div className="relative w-full max-w-[320px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl shadow-amber-500/10 overflow-hidden flex flex-col pt-8">
                            {/* Phone Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>

                            {/* App UI Simulation */}
                            <div className="flex-1 bg-slate-50 flex flex-col relative overflow-hidden">
                                {/* Simulated Header */}
                                <div className="px-5 py-4 flex items-center justify-between border-b border-slate-200 bg-white">
                                    <div>
                                        <h5 className="font-bold text-slate-900 leading-tight">Grand Plaza</h5>
                                        <p className="text-[10px] items-center text-emerald-600 font-medium">Table 12</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                        <span className="block w-4 h-0.5 bg-slate-600 rounded"></span>
                                    </div>
                                </div>

                                {/* Simulated Categories */}
                                <div className="px-5 py-3 flex gap-2 overflow-hidden bg-white border-b border-slate-100">
                                    <span className="px-3 py-1 bg-amber-500 text-white text-[11px] font-bold rounded-full whitespace-nowrap">Popular</span>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-full whitespace-nowrap">Starters</span>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-full whitespace-nowrap">Mains</span>
                                </div>

                                {/* Simulated Menu Items */}
                                <div className="p-4 flex flex-col gap-4 overflow-hidden">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex gap-3 bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
                                            <div className="w-16 h-16 rounded-lg bg-slate-200 shrink-0 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent"></div>
                                            </div>
                                            <div className="flex-1 gap-1 flex flex-col justify-center">
                                                <div className="flex justify-between items-start">
                                                    <h6 className="text-[13px] font-bold text-slate-800 leading-tight">Steak Frites</h6>
                                                    <span className="text-[12px] font-bold text-amber-600">$34</span>
                                                </div>
                                                <p className="text-[10px] text-slate-500 leading-tight block">Grilled sirloin with...</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Simulated Bottom Nav */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around px-2 pb-2 pt-1 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)]">
                                    <div className="flex flex-col items-center gap-1 text-amber-500">
                                        <div className="w-5 h-5 opacity-80" /> <span className="text-[10px] font-bold">Menu</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-slate-400">
                                        <div className="w-5 h-5 opacity-80" /> <span className="text-[10px] font-medium">Offers</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-slate-400">
                                        <div className="w-5 h-5 opacity-80" /> <span className="text-[10px] font-medium">About</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -left-8 top-12 md:-left-12 md:top-20 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                                <QrCode className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Scan to View</p>
                                <p className="text-slate-400 text-xs">No app needed</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-4 bottom-24 md:-right-8 md:bottom-32 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center">
                                <Smartphone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Update Instantly</p>
                                <p className="text-slate-400 text-xs">Change prices in clicks</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
