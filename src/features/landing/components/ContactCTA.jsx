import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactCTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        hotelName: '',
        email: '',
        phone: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format WhatsApp message
        const whatsappMessage = `Hello! My name is ${formData.name} from ${formData.hotelName}. I'm interested in an early access demo for the Easy Menu card solution.

        My contact details:
        Email: ${formData.email}
        Phone: ${formData.phone}`;

        // Create WhatsApp URL with phone number and encoded message
        const whatsappUrl = `https://wa.me/888634041?text=${encodeURIComponent(whatsappMessage)}`;

        // Redirect to WhatsApp after briefly showing processing state
        setTimeout(() => {
            setIsSubmitting(false);
            window.open(whatsappUrl, "_blank");

            // Reset form after redirecting
            setFormData({ name: '', hotelName: '', email: '', phone: '' });
        }, 500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
            {/* Large colorful glow for CTA section */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Selling pitch */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to <span className="text-amber-500">Upgrade</span> Your Menu?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                            We're giving exclusive early access trials to select hotels and restaurants. Drop your details and we'll set up a perfectly customized demo for your venue.
                        </p>

                        <ul className="space-y-5 mb-10">
                            {['Free personalized setup', 'No credit card required for demo', 'Cancel anytime guaranteed'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-4 border-t border-slate-800 pt-8 mt-4">
                            <div className="flex -space-x-3">
                                {["SD", "RG", "NG", "RV"].map(idx => (
                                    <div key={idx} className={`w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden`}>
                                        {/* Placeholder for avatars */}
                                        <span className="text-xs text-slate-500">{idx}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex text-amber-500 text-sm">★★★★★</div>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Join 50+ happy hoteliers</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full"
                    >
                        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[50px] pointer-events-none" />

                            <AnimatePresence mode="wait">
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-5 relative z-10"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-2">Request Early Access</h3>

                                    <div className="grid grid-cols-1 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                minLength={2}
                                                maxLength={50}
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                placeholder="Rahul Patil"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="hotelName" className="block text-sm font-medium text-slate-400 mb-2">Hotel/Restaurant Name</label>
                                            <input
                                                type="text"
                                                id="hotelName"
                                                name="hotelName"
                                                required
                                                minLength={2}
                                                maxLength={100}
                                                value={formData.hotelName}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                placeholder="The Grand Plaza"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Work Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    maxLength={100}
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                    placeholder="rahul@grandplaza.com"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    pattern="^\+?[0-9\s\-\(\)]{10,20}$"
                                                    title="Please enter a valid phone number with at least 10 digits"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                    placeholder="+91 9876543210"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="mt-4 w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <>Processing...</>
                                        ) : (
                                            <>
                                                Request Custom Demo
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-center text-xs text-slate-500 mt-2">
                                        By submitting this form, you agree to our Terms of Service.
                                    </p>
                                </motion.form>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
