import { motion } from 'framer-motion';
import { QrCode, RefreshCcw, Image as ImageIcon, LayoutDashboard, Zap, Globe } from 'lucide-react';

const FEATURES = [
    {
        icon: <QrCode className="w-5 h-5" />,
        title: 'Instant QR Browsing',
        description: 'Guests scan a QR on their table and browse on any iOS or Android device. Zero app downloads.',
        accent: 'amber',
    },
    {
        icon: <RefreshCcw className="w-5 h-5" />,
        title: 'Real-time Updates',
        description: 'Change a price or remove a sold-out special in under 60 seconds—for free, any time.',
        accent: 'emerald',
    },
    {
        icon: <ImageIcon className="w-5 h-5" />,
        title: 'Mouth-watering Visuals',
        description: 'High-resolution dish photos and rich descriptions give guests the appetite to explore more.',
        accent: 'amber',
    },
    {
        icon: <LayoutDashboard className="w-5 h-5" />,
        title: 'Simple Dashboard',
        description: 'Organise categories, items, tags (Vegan, Spicy, Chef\'s Pick) from one clean admin panel.',
        accent: 'emerald',
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: 'Blazing Fast',
        description: 'Optimised for spotty hotel Wi-Fi and mobile cellular networks. Loads in under 2 seconds.',
        accent: 'amber',
    },
    {
        icon: <Globe className="w-5 h-5" />,
        title: 'Multi-language Ready',
        description: 'Serve international guests in their language, no extra cost—built right in.',
        accent: 'emerald',
    },
];

const accentClass = {
    amber: 'bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-900',
    emerald: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900',
};

const Features = () => (
    <section id="features" className="py-28 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(245,158,11,0.06),transparent)]" />

        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
                    Why Easy Menu?
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-black text-white mb-5"
                >
                    Built for the hospitality<br className="hidden sm:inline" /> industry
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-slate-500">
                    Every feature is designed around one goal: make your guests happy and reduce your operational friction.
                </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {FEATURES.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="group relative bg-slate-900/60 border border-slate-800/70 p-7 rounded-3xl hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 cursor-default overflow-hidden"
                    >
                        {/* subtle inner glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/[0.01] group-hover:to-white/[0.03] transition-all rounded-3xl" />

                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${accentClass[f.accent]}`}>
                            {f.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2.5">{f.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;
