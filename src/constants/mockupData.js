export const MENU_CATEGORIES = [
    { id: 'popular', label: '⭐ Popular' },
    { id: 'starters', label: '🥗 Starters' },
    { id: 'mains', label: '🍝 Mains' },
    { id: 'desserts', label: '🍰 Desserts' },
    { id: 'drinks', label: '🍹 Drinks' },
];

export const MENU_ITEMS = [
    {
        id: 1,
        categoryId: 'mains',
        name: 'Butter Chicken',
        price: '₹380',
        tag: '🔥 Bestseller',
        color: 'from-orange-200 to-amber-100',
        emoji: '🍛',
        isSpecials: true
    },
    {
        id: 2,
        categoryId: 'mains',
        name: 'Dal Makhani',
        price: '₹280',
        tag: '💚 Veg',
        color: 'from-green-100 to-emerald-50',
        emoji: '🫘',
        isSpecials: true
    },
    {
        id: 3,
        categoryId: 'starters',
        name: 'Paneer Tikka',
        price: '₹320',
        tag: "⭐ Chef's Pick",
        color: 'from-yellow-100 to-amber-50',
        emoji: '🧆',
        isSpecials: true
    },
    {
        id: 4,
        categoryId: 'desserts',
        name: 'Gulab Jamun',
        price: '₹120',
        tag: 'Sweet',
        color: 'from-amber-200 to-orange-100',
        emoji: '🍯',
        isSpecials: false
    },
    {
        id: 5,
        categoryId: 'drinks',
        name: 'Mango Lassi',
        price: '₹150',
        tag: 'Cooling',
        color: 'from-yellow-200 to-orange-50',
        emoji: '🥭',
        isSpecials: false
    },
    {
        id: 6,
        categoryId: 'popular',
        name: 'Chicken Biryani',
        price: '₹450',
        tag: '🔥 Bestseller',
        color: 'from-orange-200 to-amber-100',
        emoji: '🥘',
        isSpecials: false
    },
    {
        id: 7,
        categoryId: 'popular',
        name: 'Masala Dosa',
        price: '₹180',
        tag: '💚 Veg',
        color: 'from-yellow-100 to-orange-50',
        emoji: '🥞',
        isSpecials: false
    },
];

export const BOTTOM_NAV_ITEMS = [
    { id: 'menu', emoji: '📖', label: 'Menu' },
    { id: 'offers', emoji: '✨', label: 'Offers' },
    { id: 'about', emoji: 'ℹ️', label: 'About' },
];
