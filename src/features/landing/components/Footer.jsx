import { Twitter, Instagram, Linkedin } from 'lucide-react';

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
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                        Beautiful digital menus for hotels and restaurants. Free, instant, and perfectly complementary to your physical menus.
                    </p>
                    <div className="flex gap-3">
                        {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                                <Icon className="w-4 h-4" />
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
