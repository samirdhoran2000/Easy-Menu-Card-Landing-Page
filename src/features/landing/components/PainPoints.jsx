import React from 'react';
import { motion } from 'framer-motion';
import { FileX, ArrowUpRight, Users, Palette, CheckCircle2 } from 'lucide-react';

const painPoints = [
    {
        icon: <FileX className="w-6 h-6" />,
        title: "Update Fast, Zero Reprint Costs",
        description: "Need to increase a price or remove an out-of-stock item? Update your digital menu instantly without spending a dime on new prints every time."
    },
    {
        icon: <ArrowUpRight className="w-6 h-6" />,
        title: "Dynamic Sorting & Promotions",
        description: "Highlight today's specials or reorder items based on the time of day. Promote your most popular dishes effortlessly without extra marketing costs."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "No More Menu Scarcity",
        description: "Only have 2-3 physical menus for a large group? Now, 10 or 20 guests can scan the QR code and view the menu simultaneously on their own devices."
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Instant Theme Swapping",
        description: "Hosting a special event or holiday? Change your entire menu's look and feel instantly with built-in themes—no physical redesign needed."
    }
];

const PainPoints = () => {
    return (
        <section id="why-digital" className="py-24 bg-slate-800 border-t border-slate-700 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6"
                    >
                        <CheckCircle2 className="w-4 h-4" /> Keep your existing paper menus too!
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Solve everyday <span className="text-amber-500">menu problems</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        We don't force you to discard your physical menus. Use Easy Menu alongside them to reduce friction, save money on minor changes, and give your guests a magical experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/50 border border-slate-700 p-8 rounded-3xl hover:border-slate-600 transition-colors flex flex-col sm:flex-row gap-6 group"
                        >
                            <div className="w-14 h-14 shrink-0 bg-slate-800 text-amber-500 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                                {point.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
