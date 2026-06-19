import React from "react";
import { useScrollAnimation } from "../components/Usescrollanimation";

function FindWorkMockup() {
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md border border-gray-100">
            {/* Sidebar + main */}
            <div className="flex">
                {/* Sidebar */}
                <div className="bg-[#1a3a5c] w-24 p-3 flex flex-col gap-3">
                    <div className="flex items-center gap-1 mb-2">
                        <span className="text-white text-[8px] font-black">RR</span>
                    </div>
                    {["Find Work", "Your Jobs", "Settings"].map((item, i) => (
                        <div key={item} className={`text-[9px] rounded px-1.5 py-1 ${i === 0 ? "bg-white/20 text-white font-semibold" : "text-white/60"}`}>
                            {item}
                        </div>
                    ))}
                </div>

                {/* Main */}
                <div className="flex-1 p-3">
                    <p className="text-[#38bdf8] text-[9px] font-semibold">Welcome Max</p>
                    <p className="text-[#1a3a5c] font-bold text-sm mb-2">Let's Find Work</p>

                    {/* Filters row */}
                    <div className="flex gap-1 mb-2 flex-wrap">
                        {["Front End", "Back End", "Data Science", "Sales"].map((f) => (
                            <span key={f} className="bg-[#e8f4fd] text-[#1a3a5c] text-[8px] px-1.5 py-0.5 rounded-full font-medium">
                                {f}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-400 text-[9px] font-semibold mb-1">Recent Jobs</p>

                    {/* Job cards */}
                    {[
                        { company: "Senior", highlighted: false },
                        { company: "Senior", highlighted: true },
                        { company: "Senior", highlighted: false },
                    ].map((job, i) => (
                        <div key={i} className={`rounded-lg p-2 mb-1.5 ${job.highlighted ? "bg-[#1a3a5c] text-white" : "bg-gray-50"}`}>
                            <div className="flex gap-1 mb-0.5 flex-wrap">
                                {["Design", "Full-Time"].map((t) => (
                                    <span key={t} className={`text-[7px] px-1 py-0.5 rounded ${job.highlighted ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500"}`}>{t}</span>
                                ))}
                            </div>
                            <p className={`text-[9px] font-semibold ${job.highlighted ? "text-white" : "text-[#1a3a5c]"}`}>
                                Senior UI/UX Designer needed for ongoing support
                            </p>
                        </div>
                    ))}
                </div>

                {/* Filter panel */}
                <div className="w-24 bg-gray-50 p-2 border-l border-gray-100">
                    <p className="text-[#1a3a5c] text-[9px] font-bold mb-2">Filter</p>
                    {["Full Time", "Part Time", "Freelance", "Mentorship"].map((f) => (
                        <div key={f} className="flex items-center gap-1 mb-1.5">
                            <div className="w-3 h-3 rounded border border-gray-300" />
                            <span className="text-[8px] text-gray-500">{f}</span>
                        </div>
                    ))}
                    <p className="text-[#1a3a5c] text-[9px] font-bold mt-2 mb-2">Language</p>
                    {["English", "Anything"].map((l) => (
                        <div key={l} className="flex items-center gap-1 mb-1">
                            <div className="w-3 h-3 rounded-full border border-gray-300" />
                            <span className="text-[8px] text-gray-500">{l}</span>
                        </div>
                    ))}
                    <button className="mt-1 text-[#38bdf8] text-[8px] font-semibold">Reset all filters</button>
                </div>
            </div>
        </div>
    );
}

export default function GetStarted() {
    const leftRef = useScrollAnimation();
    const rightRef = useScrollAnimation();

    return (
        <section className="bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0e7ff] py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Dashboard mockup */}
                    <div ref={leftRef} className="slide-in-left flex-1 flex justify-center">
                        <FindWorkMockup />
                    </div>

                    {/* CTA text */}
                    <div ref={rightRef} className="slide-in-right flex-1 max-w-sm">
                        <p className="text-[#38bdf8] text-sm font-semibold mb-2">Are you ready?</p>
                        <h2 className="text-3xl md:text-4xl font-black text-[#1a3a5c] leading-tight mb-4">
                            Help is only a few clicks away!
                        </h2>
                        <p className="text-gray-500 text-base mb-8">
                            Click Below to get set up super quickly and find help now!
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 bg-[#e0f2fe] hover:bg-[#bae6fd] text-[#1a3a5c] font-semibold px-6 py-3 rounded-full transition-colors duration-200 group"
                        >
                            <span className="w-8 h-8 bg-[#38bdf8] rounded-full flex items-center justify-center group-hover:bg-[#0ea5c4] transition-colors">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Go Portal
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}