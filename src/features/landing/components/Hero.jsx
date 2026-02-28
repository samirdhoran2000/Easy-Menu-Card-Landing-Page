import { motion } from 'framer-motion';
import { ArrowRight, QrCode, Smartphone, Star, ShieldCheck } from 'lucide-react';

const STATS = [
    { value: "0₹", label: "Printing Costs" },
    { value: "< 1min", label: "To Update Menu" },
    { value: "Any Device", label: "iOS & Android" },
];

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-slate-950">
            {/* Layered Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.12),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(16,185,129,0.07),transparent)]" />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            {/* Accent orbs */}
            <div className="absolute -top-20 -right-20 w-[420px] h-[420px] bg-amber-500/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 -left-16 w-[300px] h-[300px] bg-teal-500/6 rounded-full blur-[80px] pointer-events-none" />
            {/* Bottom fade line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 md:px-10 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-7"
                    >
                        {/* Badge */}
                        <div className="flex flex-wrap gap-3">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-semibold">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                100% Free · No Credit Card Needed
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-800/70 border border-slate-700/50 text-slate-300 text-sm font-medium">
                                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> No App Required
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white">
                            Your Hotel Menu,{' '}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">Digital & Free</span>
                                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-60" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
                            Turn your existing menu into a beautiful digital experience guests can browse on any phone. Keep your paper menus—we're a powerful complement, not a replacement.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-[0_8px_32px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Get Your Free Menu
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#how-it-works"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/70 text-slate-200 border border-slate-700/60 rounded-2xl font-semibold text-lg hover:bg-slate-800 transition-all backdrop-blur-sm"
                            >
                                See How It Works
                            </a>
                        </div>

                        {/* Social proof */}
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex -space-x-2.5">
                                {['SD', 'RG', 'NG', 'RV'].map((name) => (
                                    <div key={name} className="w-9 h-9 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">
                                        {name}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex gap-0.5 text-amber-400 text-xs">{'★'.repeat(5)}</div>
                                <p className="text-xs text-slate-500 mt-0.5 font-medium">Trusted by 50+ hoteliers</p>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 pt-6 border-t border-slate-800/60">
                            {STATS.map((stat, i) => (
                                <div key={i} className={i > 0 ? 'border-l border-slate-800 pl-6' : ''}>
                                    <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Glow behind phone */}
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent rounded-full blur-3xl scale-75" />

                        {/* PHONE FRAME */}
                        <div className="relative w-[300px] md:w-[340px] aspect-[9/19.5] bg-slate-900 rounded-[3.5rem] border-[7px] border-slate-700/80 shadow-[0_40px_100px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-end justify-center pb-1">
                                <div className="w-12 h-1 bg-slate-700 rounded-full" />
                            </div>

                            {/* Screen content */}
                            <div className="absolute inset-0 bg-white flex flex-col pt-7">
                                {/* App Header */}
                                <div className="px-4 pt-2 pb-3 bg-white border-b border-slate-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Welcome to</p>
                                        <h5 className="font-black text-slate-900 text-base leading-tight">Grand Palace</h5>
                                    </div>
                                    <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center shadow-md">
                                        <span className="text-white font-black text-xs">GP</span>
                                    </div>
                                </div>

                                {/* Search bar */}
                                <div className="mx-3 mt-3 mb-2 h-8 bg-slate-100 rounded-xl flex items-center px-3 gap-2">
                                    <span className="text-slate-400 text-xs">🔍</span>
                                    <span className="text-[11px] text-slate-400">Search dishes...</span>
                                </div>

                                {/* Category chips */}
                                <div className="px-3 pb-2 flex gap-1.5 overflow-hidden">
                                    {['⭐ Popular', '🥗 Starters', '🍝 Mains', '🍰 Desserts'].map((cat, i) => (
                                        <span key={i} className={`px-3 py-1 text-[10px] font-bold rounded-full whitespace-nowrap ${i === 0 ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                            {cat}
                                        </span>
                                    ))}
                                </div>

                                {/* Section label */}
                                <div className="px-4 py-1.5">
                                    <p className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Today's Specials</p>
                                </div>

                                {/* Menu Items */}
                                <div className="px-3 flex flex-col gap-2 flex-1 overflow-hidden">
                                    {[
                                        { name: 'Butter Chicken', price: '₹380', tag: '🔥 Bestseller', color: 'from-orange-200 to-amber-100' },
                                        { name: 'Dal Makhani', price: '₹280', tag: '💚 Veg', color: 'from-green-100 to-emerald-50' },
                                        { name: 'Paneer Tikka', price: '₹320', tag: '⭐ Chef\'s Pick', color: 'from-yellow-100 to-amber-50' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-100 shadow-sm">
                                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} shrink-0 flex items-center justify-center overflow-hidden`}>
                                                <span className="text-2xl">{i === 0 ? '🍛' : i === 1 ? '🫘' : '🧆'}</span>
                                            </div>
                                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                <span className="text-[9px] font-bold text-amber-600 bg-amber-50 rounded-lg px-1.5 py-0.5 w-fit mb-1">{item.tag}</span>
                                                <h6 className="text-[12px] font-bold text-slate-800 truncate">{item.name}</h6>
                                                <p className="text-[11px] font-black text-amber-600 mt-0.5">{item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Nav */}
                                <div className="mt-auto h-16 bg-white border-t border-slate-100 flex items-center justify-around px-4 shadow-[0_-8px_20px_rgba(0,0,0,0.05)]">
                                    {[{ emoji: '📖', label: 'Menu', active: true }, { emoji: '✨', label: 'Offers' }, { emoji: 'ℹ️', label: 'About' }].map((item) => (
                                        <div key={item.label} className={`flex flex-col items-center gap-1 ${item.active ? 'text-amber-500' : 'text-slate-400'}`}>
                                            <span className="text-base">{item.emoji}</span>
                                            <span className={`text-[9px] font-${item.active ? 'black' : 'medium'}`}>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating badge 1 */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                            className="absolute -left-4 md:-left-14 top-20 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                                <QrCode className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm leading-tight">QR Scan to View</p>
                                <p className="text-slate-400 text-xs">iOS & Android</p>
                            </div>
                        </motion.div>

                        {/* Floating badge 2 */}
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-2 md:-right-10 bottom-32 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center shrink-0">
                                <Smartphone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm leading-tight">Update Instantly</p>
                                <p className="text-slate-400 text-xs">No reprinting needed</p>
                            </div>
                        </motion.div>

                        {/* Rating badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                            className="absolute -left-2 md:-left-8 bottom-24 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-2"
                        >
                            <div className="flex gap-0.5 text-amber-400 text-sm">{'★'.repeat(5)}</div>
                            <p className="text-slate-300 text-xs font-semibold">4.9 Rating</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
