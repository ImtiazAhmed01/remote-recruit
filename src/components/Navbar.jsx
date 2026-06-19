import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1a3a5c]/95 backdrop-blur shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-1 text-white font-bold">
                    <span className="text-xl leading-tight">
                        <span className="text-white">Remote</span>
                        <br />
                        <span className="flex items-center gap-0.5">
                            <span className="text-[#38bdf8] text-xl font-black">&#x2514;</span>
                            <span className="text-white">Recruit</span>
                        </span>
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#"
                        className="text-white text-sm font-medium hover:text-[#38bdf8] transition-colors"
                    >
                        Sign In
                    </a>
                    <a
                        href="#"
                        className="bg-[#38bdf8] hover:bg-[#0ea5c4] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
                    >
                        Sign Up
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#1a3a5c] px-6 py-4 flex flex-col gap-3">
                    <a href="#" className="text-white text-sm font-medium">Sign In</a>
                    <a
                        href="#"
                        className="bg-[#38bdf8] text-white text-sm font-semibold px-5 py-2 rounded-full text-center"
                    >
                        Sign Up
                    </a>
                </div>
            )}
        </nav>
    );
}