import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, QrCode, Image as ImageIcon, LayoutDashboard, Utensils, Zap } from 'lucide-react';

const featureList = [
    {
        icon: <QrCode className="w-6 h-6" />,
        title: 'Scan & Order Instantly',
        description: 'Guests simply scan a QR code placed on their table to browse the menu. No app installation required.'
    },
    {
        icon: <RefreshCcw className="w-6 h-6" />,
        title: 'Real-time Updates',
        description: 'Change availability, prices, or add new specials instantly. Never cross out items on paper again.'
    },
    {
        icon: <ImageIcon className="w-6 h-6" />,
        title: 'Stunning Visuals',
        description: 'Showcase your dishes with high-quality images. People eat with their eyes first—boost your sales.'
    },
    {
        icon: <LayoutDashboard className="w-6 h-6" />,
        title: 'Easy Management',
        description: 'A simple, intuitive dashboard lets you organize categories, items, and tags (e.g., Vegan, Spicy) effortlessly.'
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Fast Performance',
        description: 'Optimized to load blazingly fast even on spotty cellular networks, ensuring a smooth guest experience.'
    },
    {
        icon: <Utensils className="w-6 h-6" />,
        title: 'Better Guest Experience',
        description: 'Multi-language support and direct "Call Waiter" integrations mean happier customers and better reviews.'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 relative bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Everything you need to <span className="text-amber-500">modernize</span> your menu
                    </h2>
                    <p className="text-lg text-slate-400">
                        Easy Menu is designed to give your guests the premium digital experience they expect while making management effortless for your staff.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featureList.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors group"
                        >
                            <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
