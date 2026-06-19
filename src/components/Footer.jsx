import React from "react";

const socialIcons = {
    facebook: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
    ),
    instagram: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
    ),
    x: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    twitter: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    ),
    snapchat: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12.166 3C9.68 3 7.5 4.91 7.5 7.78v.5c-.64.15-1.4-.1-1.9-.4-.1.7.2 1.4.8 1.8-1.3.5-2.4 1.6-2.4 3.3 0 .2 0 .4.1.5C5.2 14 6.3 14.3 7 14.7c.8.3 1.2 1 1.5 1.7H15.5c.3-.7.7-1.4 1.5-1.7.7-.4 1.8-.7 2.9-1.2.1-.1.1-.3.1-.5 0-1.7-1.1-2.8-2.4-3.3.6-.4.9-1.1.8-1.8-.5.3-1.26.55-1.9.4v-.5C16.5 4.91 14.65 3 12.166 3z" />
        </svg>
    ),
};

export default function Footer() {
    return (
        <footer className="bg-[#1a3a5c] pt-10 pb-6">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-b border-white/10">
                    {/* Logo */}
                    <a href="#" className="text-white font-bold text-lg">
                        <span className="block leading-tight">Remote</span>
                        <span className="flex items-center gap-0.5">
                            <span className="text-[#38bdf8] font-black">&#x2514;</span>
                            <span>Recruit</span>
                        </span>
                    </a>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        {Object.entries(socialIcons).map(([key, icon]) => (
                            <a
                                key={key}
                                href="#"
                                aria-label={key}
                                className="w-8 h-8 bg-white/10 hover:bg-[#38bdf8] text-white rounded-full flex items-center justify-center transition-colors duration-200"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex justify-center pt-6">
                    <div className="w-10 h-10 bg-[#38bdf8]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#38bdf8] font-black text-xs">RR</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}