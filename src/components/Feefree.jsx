import React from "react";
import { useScrollAnimation } from "../components/Usescrollanimation";

function MembershipCard() {
    return (
        <div className="relative w-full max-w-xs mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <p className="text-gray-400 text-xs mb-1">Your Membership Tier</p>
                <p className="text-[#38bdf8] font-black text-lg mb-3">Premium</p>
                <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-widest mb-2">Features</p>
                {[
                    "Up to 25 active job posts",
                    "Premium Placement & Visibility",
                    "Messaging anyone, unlimited",
                    "Unlimited invites",
                    "View all applicants",
                    "Unlimited invites to jobseekers",
                ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded-full bg-[#38bdf8] flex items-center justify-center shrink-0">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                                <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-[#1a3a5c] text-xs">{feat}</span>
                    </div>
                ))}
                {/* Payment badge */}
                <div className="mt-3 bg-[#f0f7ff] rounded-xl p-2.5 flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#0070ba] rounded flex items-center justify-center">
                        <span className="text-white text-[8px] font-black">P</span>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[9px]">Upcoming Payment In...</p>
                        <p className="text-[#1a3a5c] font-bold text-xs">14 Days – $79.99</p>
                    </div>
                </div>
            </div>
            {/* Floating RR badge */}
            <div className="absolute -top-3 -right-3 bg-[#38bdf8] w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-black text-xs">RR</span>
            </div>
        </div>
    );
}

export default function FeeFree() {
    const textRef = useScrollAnimation();
    const imgRef = useScrollAnimation();

    return (
        <section className="bg-[#f8fbff] py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                    {/* Illustration */}
                    <div ref={imgRef} className="slide-in-left flex-1 flex justify-center">
                        <MembershipCard />
                    </div>

                    {/* Text */}
                    <div ref={textRef} className="slide-in-right flex-1 max-w-lg">
                        <span className="inline-block bg-[#e0f2fe] text-[#0ea5c4] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            Actually Fee Free
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#1a3a5c] leading-tight mb-5">
                            Fee-Free Forever
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed">
                            We don't charge you fees and we don't put up paywalls. We're the
                            bridge that connects job opportunities with the best candidates,
                            with no middleman involved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}