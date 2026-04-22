import React from 'react';
import { User, ShoppingBag, Heart, Settings, LogOut, CreditCard } from 'lucide-react';

const DashboardSidebar = () => {
    const menuItems = [
        { icon: User, label: "Profil Saya", active: true },
        { icon: ShoppingBag, label: "Pesanan Saya" },
        { icon: Heart, label: "Wishlist" },
        { icon: CreditCard, label: "Metode Pembayaran" },
        { icon: Settings, label: "Pengaturan Akun" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-fit">
            <div className="flex items-center gap-3 mb-6 p-2">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <User className="w-full h-full p-2 text-gray-400" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-800">Zepyrus</h3>
                    <p className="text-xs text-gray-500">Member Platinum</p>
                </div>
            </div>

            <div className="space-y-1">
                {menuItems.map((item, idx) => (
                    <button
                        key={idx}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${item.active ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Keluar
                </button>
            </div>
        </div>
    );
};

export default DashboardSidebar;
