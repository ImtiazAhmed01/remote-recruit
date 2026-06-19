import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#38bdf8] hover:bg-[#0ea5c4] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}