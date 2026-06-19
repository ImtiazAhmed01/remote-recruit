import React from "react";
import { useScrollAnimation } from "../components/Usescrollanimation";

function ProfileMockup() {
    return (
        <div className="relative w-full max-w-sm mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Video/banner top */}
                <div className="bg-linear-to-r from-[#1a3a5c] to-[#2563a8] h-28 relative flex items-center justify-center">
                    <div className="text-white text-center">
                        <p className="font-black text-xl">102 Jobs Completed!</p>
                        <p className="text-white/70 text-xs">Great work, Dylan!</p>
                    </div>
                    {/* Play button */}
                    <div className="absolute bottom-3 left-3 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    {/* Avatar */}
                    <div className="absolute -bottom-5 left-4 w-10 h-10 rounded-full bg-linear-to-br from-[#38bdf8] to-[#1a3a5c] border-2 border-white" />
                </div>

                <div className="pt-8 px-4 pb-4">
                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {["Python Dev", "Javascript", "Front End", "Back End", "IOS Development", "+12"].map((s) => (
                            <span key={s} className="bg-[#e8f4fd] text-[#1a3a5c] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating feedback badge */}
            <div className="absolute -bottom-6 left-4 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 w-52">
                <div className="w-7 h-7 rounded-full bg-linear-to-br from-purple-400 to-indigo-600 shrink-0" />
                <div>
                    <p className="text-[#38bdf8] text-[8px] font-semibold">Post Client Feedback</p>
                    <p className="text-[#1a3a5c] text-[10px] font-bold">Best Developer Ever!</p>
                </div>
            </div>

            {/* Avatar circle top-right */}
            <div className="absolute top-16 -right-4 w-14 h-14 rounded-full bg-linear-to-br from-orange-400 to-red-500 border-4 border-white shadow-md" />
        </div>
    );
}

export default function ShowcaseTalents() {
    const textRef = useScrollAnimation();
    const imgRef = useScrollAnimation();

    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text */}
                    <div ref={textRef} className="slide-in-left flex-1 max-w-lg">
                        <span className="inline-block bg-[#e0f2fe] text-[#0ea5c4] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            Talent Showcase
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#1a3a5c] leading-tight mb-5">
                            Showcase Your Talents
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Personalize your profile with everything that makes you unique. Add
                            an introductory video and other media for a personal touch that
                            stands out to employers and candidates.
                        </p>
                    </div>

                    {/* Illustration */}
                    <div ref={imgRef} className="slide-in-right flex-1 flex justify-center pb-12">
                        <ProfileMockup />
                    </div>
                </div>
            </div>
        </section>
    );
}