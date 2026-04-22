import React, { useState } from 'react';
import { Search, ShoppingCart, Bell, Mail, MapPin, Store, User, ChevronDown, Smartphone } from 'lucide-react';
import { LogoText } from './Logo';

interface NavbarProps {
    user?: {
        username: string;
        email: string;
    } | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categories = [
        "Makanan Kucing", "Mainan Kucing", "Peralatan", "Obat & Vitamin", "Aksesori"
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200">

            {/* Top Bar (Utility) */}
            <div className="bg-gray-100/50 text-xs text-gray-500 py-1 px-4 hidden md:flex justify-between items-center border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hover:text-primary cursor-pointer transition-colors">Download App</span>
                </div>
                <div className="flex items-center gap-6">
                    <span className="hover:text-primary cursor-pointer transition-colors">Tentang Cat Market</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Mitra Seller</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Pusat Bantuan</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Promo</span>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4 py-3 flex items-center gap-6">
                {/* Logo */}
                <a href="/" className="hover:opacity-90 transition-opacity">
                    <LogoText />
                </a>

                {/* Categories */}
                <div className="hidden lg:block relative group">
                    <a href="/market" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors flex items-center gap-1">
                        Kategori <ChevronDown className="w-4 h-4" />
                    </a>
                    {/* Simple Dropdown for Demo */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md hidden group-hover:block p-2">
                        {categories.map((cat, idx) => (
                            <a key={idx} href={`/market?cat=${cat}`} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded">
                                {cat}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex-grow flex items-center relative">
                    <div className="w-full relative group">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                            <Search className="w-4 h-4" />
                        </div>
                        <input
                            type="text"
                            placeholder="Cari di Cat Market"
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 text-gray-500">
                    <button className="relative hover:bg-gray-100 p-2 rounded-lg transition-colors group">
                        <ShoppingCart className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    <button className="relative hover:bg-gray-100 p-2 rounded-lg transition-colors group">
                        <Bell className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </button>
                    <button className="relative hover:bg-gray-100 p-2 rounded-lg transition-colors group">
                        <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </button>

                    <div className="w-px h-6 bg-gray-200 mx-1 hidden lg:block"></div>

                    {user ? (
                        <>
                            <a href="/dashboard" className="hidden lg:flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                                    <User className="w-full h-full p-1 text-gray-400" />
                                </div>
                                <div className="text-sm font-medium text-gray-700 truncate max-w-[100px]">
                                    {user.username}
                                </div>
                            </a>

                            <div className="hidden lg:flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors border-l border-gray-200 pl-4">
                                <Store className="w-5 h-5 text-gray-500" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium text-gray-700">Toko Saya</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <a href="/login" className="px-4 py-2 text-primary font-bold hover:bg-orange-50 rounded-lg transition-colors text-sm">Masuk</a>
                            <a href="/register" className="px-4 py-2 bg-primary text-white font-bold hover:bg-orange-600 rounded-lg transition-colors shadow-md shadow-orange-200 text-sm">Daftar</a>
                        </div>
                    )}

                </div>
            </div>

            {/* Address Bar / Bottom Utility */}
            <div className="hidden md:flex items-center justify-between px-4 py-2 bg-white border-t border-gray-100 text-xs container mx-auto">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition-colors group">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary" />
                        <span className="text-gray-500">Dikirim ke</span>
                        <span className="font-bold text-gray-700 group-hover:text-primary">Rumah {user?.username || 'Gue'}</span>
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
                    {["Official Store", "Kategori Pilihan", "Diskon Spesial", "Top Up & Tagihan", "Keuangan", "Travel & Entertainment"].map((item, idx) => (
                        <span key={idx} className="text-gray-500 hover:text-primary cursor-pointer whitespace-nowrap transition-colors font-medium">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
