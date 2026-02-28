import { motion } from 'framer-motion';
import { FileX, TrendingUp, Users, Palette, CheckCircle2 } from 'lucide-react';

const PAINS = [
    {
        icon: <FileX className="w-5 h-5" />,
        problem: 'Reprint fees for every tiny change',
        solution: 'Update any price or item in under 60 seconds — completely free, from your phone.',
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        problem: 'Popular dishes buried at the bottom',
        solution: 'Pin today\'s specials, promotions, or high-margin items to appear at the top — dynamically.',
    },
    {
        icon: <Users className="w-5 h-5" />,
        problem: 'Only 2-3 menus for a 10-person table',
        solution: 'Every guest scans the QR and views the menu on their own device — simultaneously, instantly.',
    },
    {
        icon: <Palette className="w-5 h-5" />,
        problem: 'Reprinting to refresh the look for events',
        solution: 'Switch themes for festive seasons, events, or rebranding in one click — no design cost.',
    },
];

const PainPoints = () => (
    <section id="why-digital" className="py-28 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        {/* Accent orbs */}
        <div className="absolute -top-16 -right-16 w-[380px] h-[380px] bg-emerald-500/6 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] bg-amber-500/7 rounded-full blur-[80px] pointer-events-none" />
        {/* Bottom fade line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
                <div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
                        Solve Real Pain Points
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white leading-tight"
                    >
                        Problems every hotelier faces — <span className="text-amber-400">solved.</span>
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6 flex items-start gap-4"
                >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                        <p className="text-white font-bold text-lg leading-tight">No need to throw away your paper menus.</p>
                        <p className="text-slate-400 mt-1.5 text-sm leading-relaxed">Easy Menu is a digital companion — it sits alongside your existing setup while adding incredible value on top.</p>
                    </div>
                </motion.div>
            </div>

            {/* Pain cards */}
            <div className="grid md:grid-cols-2 gap-5">
                {PAINS.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group bg-slate-950/60 border border-slate-800 rounded-3xl p-7 hover:border-slate-700 transition-all"
                    >
                        {/* Problem */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <p className="text-slate-500 text-sm line-through decoration-red-500/50">{item.problem}</p>
                        </div>
                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-amber-500/30 to-transparent mb-5" />
                        {/* Solution */}
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                            <p className="text-white font-semibold text-[15px] leading-relaxed">{item.solution}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default PainPoints;
