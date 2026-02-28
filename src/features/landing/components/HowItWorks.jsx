import { motion } from 'framer-motion';

const STEPS = [
    {
        number: '01',
        emoji: '🖥️',
        title: 'We Set Up Your Menu',
        description: 'Share your menu with us and we\'ll digitise it into a beautiful, branded digital card — completely free.',
        tag: 'One-time setup',
    },
    {
        number: '02',
        emoji: '📱',
        title: 'Guests Scan & Browse',
        description: 'A QR code on each table opens your full, visual menu on any guest\'s iOS or Android phone — no app, no login.',
        tag: 'Zero friction',
    },
    {
        number: '03',
        emoji: '🎯',
        title: 'Update Anytime, Instantly',
        description: 'Change prices, promote daily specials, or swap themes for festivals — all from a simple dashboard.',
        tag: 'In < 1 minute',
    },
];

const HowItWorks = () => (
    <section id="how-it-works" className="py-28 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(245,158,11,0.04),transparent)]" />
        {/* Top separator line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
        {/* Accent orbs */}
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-amber-500/6 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
                    Getting Started
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black text-white mb-5"
                >
                    Up and running in<br className="hidden sm:inline" /> <span className="text-amber-400">3 simple steps</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-slate-500 text-lg">
                    No tech skills needed. No hardware to install. Just fast, beautiful digital menus.
                </motion.p>
            </div>

            <div className="relative grid md:grid-cols-3 gap-6">
                {/* Connecting line */}
                <div className="hidden md:block absolute top-[52px] left-[18%] right-[18%] h-px bg-gradient-to-r from-amber-500/30 via-slate-700/50 to-emerald-500/30" />

                {STEPS.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.18 }}
                        className="flex flex-col items-center text-center relative"
                    >
                        {/* Step number circle */}
                        <div className="w-[104px] h-[104px] rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_0_8px_rgba(15,23,42,1)]">
                            <span className="text-4xl">{step.emoji}</span>
                            <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-slate-900 font-black text-xs shadow-md">
                                {i + 1}
                            </div>
                        </div>

                        <span className="inline-block px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                            {step.tag}
                        </span>
                        <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorks;
