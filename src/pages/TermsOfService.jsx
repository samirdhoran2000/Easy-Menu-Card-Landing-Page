import React, { useEffect } from 'react';
import Header from '../features/landing/components/Header';
import Footer from '../features/landing/components/Footer';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/20 selection:text-amber-300 flex flex-col">
            <Header />
            <main className="flex-1 max-w-4xl mx-auto px-5 md:px-10 py-32 w-full">
                <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">Terms of Service</h1>
                <div className="prose prose-invert prose-slate prose-amber max-w-none space-y-6 text-slate-300">
                    <p>
                        Welcome to Easy Menu. These terms of service outline the rules and regulations for the use of Easy Menu's Website, located at easymenucard.com.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing this website we assume you accept these terms of service. Do not continue to use Easy Menu if you do not agree to take all of the terms and conditions stated on this page.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Description of Service</h2>
                    <p>
                        Easy Menu provides a digital, QR-scannable menu creation tool for hotels and restaurants. The service allows you to create, manage, and share your digital menus with your customers. The core service is currently provided free of charge, but we reserve the right to introduce premium features or pricing models in the future upon notice.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Accounts</h2>
                    <p>
                        When creating an account or providing information to us, you must ensure that all details are accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Acceptable Use</h2>
                    <p>
                        You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful. You agree not to upload explicit, offensive, or discriminatory content to your digital menus.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Intellectual Property</h2>
                    <p>
                        Unless otherwise stated, Easy Menu and/or its licensors own the intellectual property rights for all material on Easy Menu. All intellectual property rights are reserved. You may access this from Easy Menu for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Limitation of Liability</h2>
                    <p>
                        In no event shall Easy Menu, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Revisions</h2>
                    <p>
                        We may revise these Terms of Service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
