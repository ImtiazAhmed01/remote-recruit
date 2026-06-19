import React, { useState } from "react";
import { useScrollAnimation } from "../components/Usescrollanimation";

const faqs = [
    {
        question: "Do I need to sign up to view resources?",
        answer: "Actually you only need to sign up to view resources if you want to apply for jobs. You can still use the platform freely to search around without a profile."
    },
    {
        question: "Can I pay in my local currency?",
        answer: "Actually you can only pay in US dollars right now. But we are looking to expand into other currencies very soon. Keep an eye out!"
    },
    {
        question: "What if I need help?",
        answer: "Actually we are giving support all hours of the day. You can expect someone to get back to you immediately. If you need any help please feel free to reach out to our team."
    }
];

export default function FAQ() {
    const ref = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState(0); // First one open by default as in design

    return (
        <section className="bg-[#fcfcfd] py-24 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6" ref={ref}>
                <h2 className="text-3xl md:text-4xl font-black text-[#1a3a5c] mb-12">
                    Common Questions
                </h2>

                <div className="space-y-6 mb-10">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border-b border-gray-200 pb-6">
                                <button
                                    className="w-full flex items-center justify-between text-left focus:outline-none"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                >
                                    <h3 className="text-lg font-bold text-[#1a3a5c]">
                                        {faq.question}
                                    </h3>
                                    <span className={`text-[#1a3a5c] ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`mt-3 text-gray-500 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
                                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button className="border-2 border-gray-200 hover:border-[#1a3a5c] text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm">
                    More Questions
                </button>
            </div>
        </section>
    );
}