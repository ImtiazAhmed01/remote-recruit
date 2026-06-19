import React from "react";
import { useScrollAnimation } from "../components/Usescrollanimation";

export default function Hero() {
    const ref = useScrollAnimation();

    return (
        <section className="relative min-h-180 flex flex-col items-center justify-center overflow-hidden bg-[#1a3a5c]">
            {/* Background decorative circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 -left-20 w-80 h-80 rounded-full bg-[#1e5a8c]/40" />
                <div className="absolute top-20 -right-15 w-64 h-64 rounded-full bg-[#2563a8]/30" />
                <div className="absolute bottom-16 left-[30%] w-48 h-48 rounded-full bg-[#1e5a8c]/20" />
            </div>

            {/* Content */}
            <div ref={ref} className="fade-in-up relative z-10 text-center px-6 pt-24 pb-16 max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5">
                    RemoteRecruit's Difference
                </h1>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                    RemoteRecruit is connecting the world with an easy-to-use platform that
                    lets full-time, part-time, and freelance workers showcase their talents
                    to businesses that need them. With no paywalls, no fees, and no
                    barriers, there's nothing but you, your talents, and the next step in
                    your career.
                </p>
            </div>

            {/* Wave SVG at bottom */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none transform translate-y-[1px]">
                <svg
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-[150px] md:h-[250px] lg:h-[320px] drop-shadow-sm"
                    preserveAspectRatio="none"
                >
                    {/* Subtle under-layer wave (light teal/blue) */}
                    <path
                        fill="#0ea5c4"
                        fillOpacity="0.25"
                        d="M0,128 C320,288 720,320 1440,64 L1440,320 L0,320 Z"
                    />
                    {/* Main white wave */}
                    <path
                        fill="#ffffff"
                        d="M0,224 C480,300 800,64 1440,64 L1440,320 L0,320 Z"
                    />
                </svg>
            </div>
        </section>
    );
}