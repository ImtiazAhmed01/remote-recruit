import React from "react";
import { useScrollAnimation } from "../components/Usescrollanimation";

const plans = [
    {
        name: "Basic",
        price: "free",
        priceLabel: "basic",
        badge: null,
        features: [
            { text: "1 Active Job", included: true },
            { text: "Basic List Placement", included: true },
            { text: "Unlimited Job Applicants", included: true },
            { text: "Invite Anyone to Apply to Your Jobs", included: true },
        ],
        cta: "Choose Plan",
        highlighted: false,
    },
    {
        name: "Premium",
        price: "$79.99",
        priceLabel: "/month",
        badge: "Premium",
        features: [
            { text: "Unlimited Job Posts", included: true },
            { text: "Instant Job Post Approval", included: true },
            { text: "Premium List Placement", included: true },
            { text: "Unlimited Job Applicants", included: true },
        ],
        cta: "Choose Plan",
        highlighted: true,
    },
];

export default function Pricing() {
    const ref = useScrollAnimation();

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Wave Background */}
            <div className="absolute inset-0 z-0 pointer-events-none mt-48">
                <svg
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#1a3a5c"
                        d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
                <div className="w-full h-full bg-[#1a3a5c]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div ref={ref} className="fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-black text-[#1a3a5c] text-center mb-12">
                        Help Is One Click Away
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto items-center">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`rounded-3xl p-8 bg-white ${plan.highlighted ? "shadow-2xl scale-105" : "shadow-xl border border-gray-100"}`}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="inline-flex items-center gap-1.5 bg-[#e0f2fe] text-[#0ea5c4] text-xs font-bold px-3 py-1 rounded-full mb-6">
                                        <span className="w-4 h-4 bg-gradient-to-br from-[#38bdf8] to-[#1a3a5c] rounded-full flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Price Header */}
                                <div className="mb-8">
                                    {!plan.highlighted ? (
                                        <div className="bg-[#f0f7ff] rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center mx-auto mb-4">
                                            <p className="text-3xl font-black text-[#38bdf8]">{plan.price}</p>
                                            <p className="text-gray-400 text-sm font-semibold">{plan.priceLabel}</p>
                                        </div>
                                    ) : (
                                        <div className="mb-4">
                                            <p className="text-5xl font-black text-[#38bdf8] mb-2">{plan.price}</p>
                                            <p className="text-gray-400 text-sm font-semibold">{plan.priceLabel}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feat) => (
                                        <li key={feat.text} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#e0f2fe] flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-[#1a3a5c]">
                                                {feat.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 ${plan.highlighted
                                        ? "bg-[#1a3a5c] hover:bg-[#2563a8] text-white shadow-lg"
                                        : "bg-white border-2 border-[#1a3a5c] hover:bg-gray-50 text-[#1a3a5c]"
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}