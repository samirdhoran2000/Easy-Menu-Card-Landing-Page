import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Smartphone } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, BOTTOM_NAV_ITEMS } from '../../../constants/mockupData';

const PhoneMockup = () => {
    const [activeCategory, setActiveCategory] = useState('popular');
    const [activeTab, setActiveTab] = useState('menu');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = MENU_ITEMS.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());

        const isPopular = activeCategory === 'popular' ? (item.categoryId === 'popular' || item.isSpecials) : true;
        const finalMatchesCategory = activeCategory === 'popular' ? isPopular : item.categoryId === activeCategory;

        return finalMatchesCategory && matchesSearch;
    });

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
        >
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent rounded-full blur-3xl scale-75" />

            {/* PHONE FRAME */}
            <div className="relative w-[300px] md:w-[340px] aspect-[9/19.5] bg-slate-900 rounded-[3.5rem] border-[7px] border-slate-700/80 shadow-[0_40px_100px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden flex flex-col">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-end justify-center pb-1">
                    <div className="w-12 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Screen content */}
                <div className="absolute inset-0 bg-white flex flex-col pt-7">
                    {/* App Header */}
                    <div className="px-4 pt-2 pb-3 bg-white border-b border-slate-100 flex items-center justify-between z-10">
                        <div>
                            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Welcome to</p>
                            <h5 className="font-black text-slate-900 text-base leading-tight">Grand Palace</h5>
                        </div>
                        <button className="w-9 h-9 bg-amber-500 hover:bg-amber-600 transition-colors rounded-xl flex items-center justify-center shadow-md active:scale-95">
                            <span className="text-white font-black text-xs">GP</span>
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 overflow-hidden relative text-left">
                        <AnimatePresence mode="wait">
                            {activeTab === 'menu' && (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="absolute inset-0 flex flex-col"
                                >
                                    {/* Search bar */}
                                    <div className="mx-3 mt-3 mb-2 h-8 bg-slate-100 rounded-xl flex items-center px-3 gap-2 shrink-0">
                                        <span className="text-slate-400 text-xs">🔍</span>
                                        <input
                                            type="text"
                                            placeholder="Search dishes..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="bg-transparent border-none outline-none text-[11px] text-slate-700 w-full placeholder:text-slate-400"
                                        />
                                    </div>

                                    {/* Category chips */}
                                    <div className="px-3 pb-2 flex gap-1.5 overflow-x-auto overflow-y-hidden shrink-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                        {MENU_CATEGORIES.map((cat) => (
                                            <button
                                                key={cat.id}
                                                onClick={() => setActiveCategory(cat.id)}
                                                className={`px-3 py-1 text-[10px] font-bold rounded-full whitespace-nowrap transition-colors active:scale-95 ${activeCategory === cat.id ? 'bg-amber-500 text-white shadow-sm' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                                            >
                                                {cat.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Section label */}
                                    <div className="px-4 py-1.5 shrink-0 flex justify-between items-center">
                                        <p className="text-[11px] font-black text-slate-800 uppercase tracking-wider">
                                            {MENU_CATEGORIES.find(c => c.id === activeCategory)?.label.replace(/[^A-Za-z\s]/g, '').trim() || 'Menu'}
                                        </p>
                                        <span className="text-[9px] font-bold text-slate-400">{filteredItems.length} ITEMS</span>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="px-3 pb-4 flex flex-col gap-2 flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                        <AnimatePresence mode="popLayout">
                                            {filteredItems.length > 0 ? (
                                                filteredItems.map((item) => (
                                                    <motion.div
                                                        layout
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        transition={{ duration: 0.2 }}
                                                        key={item.id}
                                                        className="flex gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:bg-slate-100 active:scale-[0.98] transition-all"
                                                    >
                                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} shrink-0 flex items-center justify-center overflow-hidden`}>
                                                            <span className="text-2xl">{item.emoji}</span>
                                                        </div>
                                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                            <span className="text-[9px] font-bold text-amber-600 bg-amber-50 rounded-lg px-1.5 py-0.5 w-fit mb-1">{item.tag}</span>
                                                            <h6 className="text-[12px] font-bold text-slate-800 truncate">{item.name}</h6>
                                                            <p className="text-[11px] font-black text-amber-600 mt-0.5">{item.price}</p>
                                                        </div>
                                                        <div className="flex flex-col justify-end pb-1">
                                                            <button className="w-6 h-6 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xs font-black shadow-sm active:scale-95 transition-transform hover:bg-slate-800">
                                                                +
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                ))
                                            ) : (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="flex flex-col items-center justify-center py-10 opacity-50"
                                                >
                                                    <span className="text-2xl mb-2">🍽️</span>
                                                    <p className="text-xs font-semibold text-slate-500">No dishes found</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'offers' && (
                                <motion.div
                                    key="offers"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="absolute inset-0 flex flex-col p-4"
                                >
                                    <h6 className="font-black text-slate-800 text-sm mb-3">Today's Deals 🎁</h6>
                                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 text-white shadow-md relative overflow-hidden">
                                        <div className="absolute -right-4 -bottom-4 text-6xl opacity-20">🎉</div>
                                        <span className="inline-block px-2 py-0.5 bg-white/20 rounded-md text-[9px] font-black mb-1 backdrop-blur-sm">PROMO</span>
                                        <h6 className="font-black text-lg leading-tight mb-1">Get 20% OFF</h6>
                                        <p className="text-[10px] font-medium text-white/90">On all main courses today</p>
                                        <button className="mt-3 bg-white text-orange-500 text-[10px] font-black px-3 py-1.5 rounded-lg active:scale-95 transition-transform hover:bg-slate-50">
                                            APPLY CODE: YUM20
                                        </button>
                                    </div>
                                    <div className="mt-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-4 text-white shadow-md relative overflow-hidden">
                                        <div className="absolute -right-4 -bottom-4 text-6xl opacity-20">🍹</div>
                                        <span className="inline-block px-2 py-0.5 bg-white/20 rounded-md text-[9px] font-black mb-1 backdrop-blur-sm">HAPPY HOUR</span>
                                        <h6 className="font-black text-lg leading-tight mb-1">Buy 1 Get 1</h6>
                                        <p className="text-[10px] font-medium text-white/90">Free on all drinks from 5PM - 7PM</p>
                                        <button className="mt-3 bg-white text-teal-600 text-[10px] font-black px-3 py-1.5 rounded-lg active:scale-95 transition-transform hover:bg-slate-50">
                                            REDEEM NOW
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'about' && (
                                <motion.div
                                    key="about"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="absolute inset-0 flex flex-col p-4"
                                >
                                    <h6 className="font-black text-slate-800 text-sm mb-3">Grand Palace 🏨</h6>
                                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm">
                                        <div className="flex gap-1 text-amber-500 text-xs mb-2">{'★'.repeat(5)}</div>
                                        <p className="text-[11px] text-slate-600 leading-relaxed mb-4">
                                            Experience the finest culinary delights at Grand Palace. We use only the freshest ingredients to bring you authentic flavors.
                                        </p>
                                        <div className="flex gap-2">
                                            <button className="flex-1 bg-amber-500 text-white text-[11px] font-bold py-2.5 rounded-lg active:scale-95 transition-transform flex items-center justify-center gap-1.5 hover:bg-amber-600">
                                                <span>📞</span> Call Us
                                            </button>
                                            <button className="flex-1 bg-slate-900 text-white text-[11px] font-bold py-2.5 rounded-lg active:scale-95 transition-transform flex items-center justify-center gap-1.5 hover:bg-slate-800">
                                                <span>📍</span> Locate
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm">
                                        <h6 className="font-bold text-slate-800 text-xs mb-2">Opening Hours</h6>
                                        <div className="flex justify-between text-[11px] text-slate-600 py-1 border-b border-slate-50">
                                            <span>Mon - Fri</span>
                                            <span className="font-medium text-slate-800">10:00 AM - 11:00 PM</span>
                                        </div>
                                        <div className="flex justify-between text-[11px] text-slate-600 py-1">
                                            <span>Sat - Sun</span>
                                            <span className="font-medium text-slate-800">09:00 AM - 11:30 PM</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Bottom Nav */}
                    <div className="mt-auto h-16 bg-white border-t border-slate-100 flex items-center justify-around px-2 shadow-[0_-8px_20px_rgba(0,0,0,0.05)] shrink-0 z-10 relative">
                        {BOTTOM_NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex flex-col items-center justify-center gap-1 p-2 w-16 h-full active:scale-90 transition-all ${activeTab === item.id ? 'text-amber-500' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <span className={`text-lg transition-transform ${activeTab === item.id ? '-translate-y-0.5' : ''}`}>
                                    {item.emoji}
                                </span>
                                <span className={`text-[9px] transition-all ${activeTab === item.id ? 'font-black' : 'font-medium'}`}>
                                    {item.label}
                                </span>
                                {activeTab === item.id && (
                                    <motion.div
                                        layoutId="navIndicator"
                                        className="absolute bottom-1.5 w-1 h-1 bg-amber-500 rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating badge 1 */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -left-4 md:-left-14 top-20 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3 z-10"
            >
                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                    <QrCode className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-white font-bold text-sm leading-tight">QR Scan to View</p>
                    <p className="text-slate-400 text-xs">iOS & Android</p>
                </div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-2 md:-right-10 bottom-32 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3"
            >
                <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-white font-bold text-sm leading-tight">Update Instantly</p>
                    <p className="text-slate-400 text-xs">No reprinting needed</p>
                </div>
            </motion.div>

            {/* Rating badge */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                className="absolute -left-2 md:-left-8 bottom-24 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-2"
            >
                <div className="flex gap-0.5 text-amber-400 text-sm">{'★'.repeat(5)}</div>
                <p className="text-slate-300 text-xs font-semibold">4.9 Rating</p>
            </motion.div>
        </motion.div>
    );
};

export default PhoneMockup;
