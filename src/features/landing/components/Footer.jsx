import { Instagram, Linkedin, Phone } from 'lucide-react';

const WHATSAPP_MSG = encodeURIComponent(
    'Hello Easy Menu! 👋 I want to know more about your free digital menu service.'
);
const WHATSAPP_URL = `https://wa.me/918888634041?text=${WHATSAPP_MSG}`;

const WhatsAppIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const NAV = {
    Product: [
        { name: 'Features', href: '#features' },
        { name: 'Why Digital?', href: '#why-digital' },
        { name: 'How it Works', href: '#how-it-works' },
    ],
    Company: [
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '#contact' },
        { name: 'Careers', href: '#' },
    ],
    Legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
    ],
};

const SOCIALS = [
    { icon: <WhatsAppIcon className="w-4 h-4" />, href: WHATSAPP_URL, label: 'WhatsApp' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
];

const Footer = () => (
    <footer className="bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
        {/* Accent decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-amber-500/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -right-20 w-[250px] h-[250px] bg-emerald-500/4 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 pb-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

                {/* Brand col */}
                <div className="col-span-2">
                    <div className="flex items-center gap-2.5 mb-5">
                        <img src="/logo.svg" alt="Easy Menu Logo" className="w-9 h-9 rounded-xl object-cover shadow-md shadow-amber-500/20" />
                        <span className="text-lg font-bold text-white">Easy<span className="text-amber-400">Menu</span></span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-4">
                        Beautiful digital menus for hotels and restaurants. Free, instant, and perfectly complementary to your physical menus.
                    </p>

                    {/* Phone number */}
                    <a href="tel:+918888634041" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm font-medium mb-5">
                        <Phone className="w-4 h-4" />
                        +91 8888 634 041
                    </a>

                    {/* Social icons */}
                    <div className="flex gap-3">
                        {SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.label === 'WhatsApp' ? '_blank' : undefined}
                                rel={s.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                                aria-label={s.label}
                                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Nav cols */}
                {Object.entries(NAV).map(([group, links]) => (
                    <div key={group}>
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{group}</h4>
                        <ul className="space-y-3">
                            {links.map((l) => (
                                <li key={l.name}>
                                    <a href={l.href} className="text-slate-500 hover:text-amber-400 transition-colors text-sm font-medium">{l.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Easy Menu. All rights reserved.</p>
                <p className="text-slate-600 text-sm flex items-center gap-1.5">
                    Made with <span className="text-amber-400 text-base">♥</span> for the Hospitality Industry
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;

