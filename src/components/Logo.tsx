import React from 'react';

export const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <rect width="40" height="40" rx="12" fill="url(#paint0_linear)" />
        <path d="M12 28C12 28 14 30 20 30C26 30 28 28 28 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 22C15 22 16 23 17 23C18 23 19 22 19 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M21 22C21 22 22 23 23 23C24 23 25 22 25 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 16L12 10L17 14" fill="white" fillOpacity="0.2" />
        <path d="M30 16L28 10L23 14" fill="white" fillOpacity="0.2" />
        <path d="M12 12L14 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 12L26 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="15" cy="18" r="2" fill="white" />
        <circle cx="25" cy="18" r="2" fill="white" />
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9F43" />
                <stop offset="1" stopColor="#EE5A24" />
            </linearGradient>
        </defs>
    </svg>
);

export const LogoText = () => (
    <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-primary to-orange-400 rounded-lg flex items-center justify-center text-white font-bold shadow-lg transform rotate-3">
            <span className="text-lg">C</span>
        </div>
        <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 tracking-tight">
            Cat<span className="text-primary">Market</span>
        </span>
    </div>
);
