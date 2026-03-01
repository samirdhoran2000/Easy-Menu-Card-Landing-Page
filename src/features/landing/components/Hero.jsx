import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

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
                    <PhoneMockup />
                </div>
            </div>
        </section>
    );
};

export default Hero;
