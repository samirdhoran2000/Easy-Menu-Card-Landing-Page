import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronRight, Lock, Sparkles } from 'lucide-react';

const BENEFITS = [
    '100% Free — No hidden charges',
    'No credit card required',
    'Keep using your paper menus too',
];

const INPUT_CLASSES = 'w-full bg-slate-950/70 border border-slate-700/60 rounded-2xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 transition-all';
const LABEL_CLASSES = 'block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2';

const ContactCTA = () => {
    const [formData, setFormData] = useState({ name: '', hotelName: '', email: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const msg = `Hello EasyMenu Team! 👋

I'm interested in getting a *free digital menu* for my hotel.

*My Details:*
• Name: ${formData.name}
• Hotel / Restaurant: ${formData.hotelName}
• Email: ${formData.email}
• Phone: ${formData.phone}

Please set up a demo for me. Thank you!`;

        const url = `https://wa.me/918888634041?text=${encodeURIComponent(msg)}`;

        setTimeout(() => {
            setIsSubmitting(false);
            window.open(url, '_blank');
            setFormData({ name: '', hotelName: '', email: '', phone: '' });
        }, 500);
    };

    return (
        <section className="py-28 relative overflow-hidden bg-slate-900 border-t border-slate-800/50">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(245,158,11,0.07),transparent)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            {/* Accent orbs */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-[350px] h-[350px] bg-emerald-500/6 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-[320px] h-[320px] bg-amber-500/8 rounded-full blur-[90px] pointer-events-none" />
            {/* Bottom fade line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

                {/* Top label */}
                <div className="flex justify-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm font-bold"
                    >
                        <Sparkles className="w-4 h-4" /> Get Your Free Digital Menu Today
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 xl:gap-20 items-center">

                    {/* LEFT PITCH — 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2 flex flex-col gap-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
                                Ready to<br /><span className="text-amber-400">go digital?</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Drop your details on WhatsApp and we'll get your beautiful, branded digital menu set up for free — fast.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-4">
                            {BENEFITS.map((b, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-300 font-semibold">{b}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Trust bar */}
                        <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                            <div className="flex -space-x-2.5">
                                {['SD', 'RG', 'NG', 'RV'].map((n) => (
                                    <div key={n} className="w-9 h-9 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">{n}</div>
                                ))}
                            </div>
                            <div>
                                <div className="text-amber-400 text-xs">{'★'.repeat(5)}</div>
                                <p className="text-[11px] text-slate-500 font-medium mt-0.5">50+ happy hoteliers</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT FORM — 3 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="lg:col-span-3"
                    >
                        <div id="contact" className="relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-black/40 overflow-hidden">
                            {/* Top glow strip */}
                            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
                            {/* Corner decorations */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                                {/* Form title */}
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-white">Get Your Free Menu</h3>
                                        <p className="text-slate-500 text-sm mt-1">We'll reply on WhatsApp within hours.</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-700/30 flex items-center justify-center shrink-0 text-xl">
                                        💬
                                    </div>
                                </div>

                                {/* Fields */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className={LABEL_CLASSES}>Full Name</label>
                                        <input
                                            type="text" id="name" name="name" required minLength={2} maxLength={50}
                                            value={formData.name} onChange={handleChange}
                                            className={INPUT_CLASSES} placeholder="Rahul Patil"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="hotelName" className={LABEL_CLASSES}>Hotel / Restaurant</label>
                                        <input
                                            type="text" id="hotelName" name="hotelName" required minLength={2} maxLength={100}
                                            value={formData.hotelName} onChange={handleChange}
                                            className={INPUT_CLASSES} placeholder="The Grand Palace"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={LABEL_CLASSES}>Work Email</label>
                                        <input
                                            type="email" id="email" name="email" required maxLength={100}
                                            value={formData.email} onChange={handleChange}
                                            className={INPUT_CLASSES} placeholder="rahul@grandpalace.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className={LABEL_CLASSES}>Phone Number</label>
                                        <input
                                            type="tel" id="phone" name="phone" required
                                            pattern="^\+?[0-9\s\-\(\)]{10,20}$"
                                            title="Please enter a valid phone number with at least 10 digits"
                                            value={formData.phone} onChange={handleChange}
                                            className={INPUT_CLASSES} placeholder="+91 9876543210"
                                        />
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-3 px-8 py-4.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-black text-lg rounded-2xl hover:brightness-110 transition-all shadow-[0_8px_32px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.45)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:translate-y-0 cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <span className="w-5 h-5 border-2 border-slate-900/40 border-t-slate-900 rounded-full animate-spin" />
                                            Opening WhatsApp...
                                        </span>
                                    ) : (
                                        <>
                                            <span>💬</span>
                                            Submit on WhatsApp
                                            <ChevronRight className="w-5 h-5 shrink-0" />
                                        </>
                                    )}
                                </button>

                                {/* Trust note */}
                                <p className="text-center text-xs text-slate-600 flex items-center justify-center gap-1.5">
                                    <Lock className="w-3 h-3" /> Your information is 100% private. We never share your data.
                                </p>
                            </form>
                        </div>

                        {/* WhatsApp badge below card */}
                        <div className="mt-4 flex items-center justify-center gap-2 text-slate-600 text-xs font-medium">
                            <span className="text-base">📱</span> You'll be redirected to WhatsApp to complete your request
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
