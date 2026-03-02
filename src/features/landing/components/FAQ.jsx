import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
    {
        question: "Is the digital menu really free?",
        answer: "Yes! Easy Menu is 100% free to set up and use. No credit card required, and guests can scan and browse freely without downloading any apps."
    },
    {
        question: "How do guests access the menu?",
        answer: "Guests simply scan a QR code placed on their table using their smartphone camera. The menu instantly opens in their web browser."
    },
    {
        question: "Can I update the menu later?",
        answer: "Absolutely. You can update prices, add new dishes, or mark items out of stock in real-time. Changes reflect instantly on the digital menu."
    },
    {
        question: "Do I need technical skills to use this?",
        answer: "Not at all. Our platform is designed to be incredibly intuitive. If you can use email or social media, you can manage your digital menu."
    },
    {
        question: "Is there a limit to how many items I can add?",
        answer: "No, you can add as many menu categories and items as you need to showcase your full offerings."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-sm transition-colors hover:border-slate-700">
            <button
                onClick={onClick}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-slate-200 pr-8">{question}</span>
                <div className={`p-2 rounded-full border border-slate-700 bg-slate-800/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-amber-500" />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-6 text-slate-400">
                            <div className="h-px w-full bg-slate-800 mb-4" />
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                        <MessageCircleQuestion className="w-4 h-4" />
                        Frequently Asked Questions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">We've Got Answers</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Everything you need to know about setting up and managing your free digital menu.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-400">
                        Still have questions?{' '}
                        <a href="#contact" className="text-amber-500 font-medium hover:text-amber-400 hover:underline transition-colors">
                            Contact our support team
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
