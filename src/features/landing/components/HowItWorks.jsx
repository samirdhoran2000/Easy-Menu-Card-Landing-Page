import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Guests Scan QR",
        description: "No confusing app downloads. Guests simply point their phone camera at the beautiful custom QR code on their table to open the menu instantly.",
        color: "from-emerald-400 to-emerald-600"
    },
    {
        number: "02",
        title: "Browse the Menu",
        description: "They are greeted with an immersive, visual representation of your dishes. High-resolution photos and detailed descriptions drive upsells naturally.",
        color: "from-amber-400 to-amber-600"
    },
    {
        number: "03",
        title: "Explore & Decide",
        description: "Guests can freely explore dietary tags, ingredients, and specials, making it easier for them to decide what to order from the waiter.",
        color: "from-blue-400 to-blue-600"
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-800 rounded-full opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-800 rounded-full opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Simple for them, <span className="text-emerald-500">better for you</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        A frictionless experience from seating to payment. Ensure your guests spend less time waiting and more time enjoying.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px bg-gradient-to-r from-emerald-500 via-amber-500 to-blue-500 opacity-30" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className={`w-24 h-24 rounded-3xl bg-slate-800 flex items-center justify-center border-2 border-slate-700 mb-8 relative z-10 shadow-2xl shadow-slate-900`}>
                                <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                                    {step.number}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed max-w-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
