import React, { useEffect } from 'react';
import Header from '../features/landing/components/Header';
import Footer from '../features/landing/components/Footer';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/20 selection:text-amber-300 flex flex-col">
            <Header />
            <main className="flex-1 max-w-4xl mx-auto px-5 md:px-10 py-32 w-full">
                <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>
                <div className="prose prose-invert prose-slate prose-amber max-w-none space-y-6 text-slate-300">
                    <p>
                        Welcome to Easy Menu. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the website, or otherwise when you contact us.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Personal Information:</strong> Includes names, phone numbers, email addresses, and other similar data.</li>
                        <li><strong>Usage Data:</strong> We automatically collect information when you visit, use or navigate the site. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, etc.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. This includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Facilitating account creation and logon process.</li>
                        <li>To post testimonials.</li>
                        <li>Request feedback and contact you about your use of our site.</li>
                        <li>To protect our Services (e.g., fraud monitoring and prevention).</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Will Your Information Be Shared?</h2>
                    <p>
                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. How Long Do We Keep Your Information?</h2>
                    <p>
                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Revisions</h2>
                    <p>
                        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact Us</h2>
                    <p>
                        If you have questions or comments about this notice, you may contact us by phone via our designated support channels on the website.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
