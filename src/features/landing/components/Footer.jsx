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
    <footer className="bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

                {/* Brand col */}
                <div className="col-span-2">
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-900 font-black text-base">EM</div>
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
