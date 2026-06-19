import React from "react";
import { useScrollAnimation } from "../components/Usescrollanimation";

// Mock dashboard UI illustration
function DashboardMockup() {
    return (
        <div className="relative w-full max-w-sm mx-auto">
            {/* Main card */}
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                <div className="bg-[#1a3a5c] rounded-xl p-3 mb-3">
                    <p className="text-[#38bdf8] text-[10px] font-semibold mb-1">Welcome Max</p>
                    <p className="text-white font-bold text-sm">Let's Find Work</p>
                </div>
                <div className="flex gap-2 mb-3">
                    {["Front End", "Back End", "Data Science", "Sales"].map((tag) => (
                        <span key={tag} className="bg-[#e8f4fd] text-[#1a3a5c] text-[9px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="text-[#888] text-[9px] mb-2 font-medium">Recent Jobs</div>
                {[
                    { title: "Senior UI/UX Designer needed for ongoing support", tags: ["Design", "Full-Time", "Part-Time"] },
                    { title: "Senior UI/UX Designer needed for ongoing support", tags: ["Design", "Full-Time"] },
                ].map((job, i) => (
                    <div key={i} className={`rounded-lg p-2 mb-2 text-[9px] ${i === 1 ? "bg-[#1a3a5c] text-white" : "bg-gray-50"}`}>
                        <div className="flex gap-1 mb-1 flex-wrap">
                            {job.tags.map((t) => (
                                <span key={t} className={`px-1.5 py-0.5 rounded text-[8px] ${i === 1 ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"}`}>{t}</span>
                            ))}
                        </div>
                        <p className={`font-semibold ${i === 1 ? "text-white" : "text-[#1a3a5c]"}`}>{job.title}</p>
                    </div>
                ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#38bdf8] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xs">RR</span>
            </div>

            {/* Floating profile cards */}
            <div className="absolute -bottom-8 left-0 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 w-44">
                <div className="w-7 h-7 rounded-full bg-linear-to-br from-[#38bdf8] to-[#1a3a5c] shrink-0" />
                <div>
                    <p className="text-[#38bdf8] text-[8px] font-semibold">Python Developer</p>
                    <p className="text-[#1a3a5c] text-[10px] font-bold">Felonious Gru</p>
                </div>
            </div>
            <div className="absolute -bottom-20 left-8 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 w-44">
                <div className="w-7 h-7 rounded-full bg-linear-to-br from-orange-400 to-red-500 shrink-0" />
                <div>
                    <p className="text-[#38bdf8] text-[8px] font-semibold">Front End Wizard</p>
                    <p className="text-[#1a3a5c] text-[10px] font-bold">Mel Muselphiem</p>
                </div>
            </div>
        </div>
    );
}

export default function GlobalReach() {
    const textRef = useScrollAnimation();
    const imgRef = useScrollAnimation();

    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text */}
                    <div ref={textRef} className="slide-in-left flex-1 max-w-lg">
                        <span className="inline-block bg-[#e0f2fe] text-[#0ea5c4] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            Global Reach
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#1a3a5c] leading-tight mb-5">
                            The First Fully Global Job Board, Anywhere, Ever
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed">
                            RemoteRecruit connects candidates with opportunities around the
                            world. With today's remote-first workforce, you need to be able to
                            find the best jobs and the best people for them, wherever they may
                            be.
                        </p>
                    </div>

                    {/* Illustration */}
                    <div ref={imgRef} className="slide-in-right flex-1 flex justify-center pb-24">
                        <DashboardMockup />
                    </div>
                </div>
            </div>
        </section>
    );
}