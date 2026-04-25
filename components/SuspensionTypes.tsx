"use client";

import { useState, useEffect } from "react";

export default function SuspensionTypes() {
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const suspensionTypes = [
        {
            title: "Amazon Seller Account Suspension",
            icon: "ri-amazon-line",
            gradient: "from-orange-500 to-yellow-500",
            description: "Complete account reinstatement for policy violations",
        },
        {
            title: "Section 3 Suspension",
            icon: "ri-file-warning-line",
            gradient: "from-red-500 to-pink-500",
            description: "Critical policy violation appeals and resolution",
        },
        {
            title: "Dropshipping Suspension",
            icon: "ri-truck-line",
            gradient: "from-blue-500 to-cyan-500",
            description: "Dropshipping compliance and account restoration",
        },
        {
            title: "IP Deactivation",
            icon: "ri-copyright-line",
            gradient: "from-purple-500 to-indigo-500",
            description: "Intellectual property claims and listing restoration",
        },
        {
            title: "Linked Account Suspension",
            icon: "ri-links-line",
            gradient: "from-emerald-500 to-teal-500",
            description: "Multi-account issues and relationship appeals",
        },
        {
            title: "ASIN Suspension",
            icon: "ri-barcode-line",
            gradient: "from-yellow-500 to-orange-500",
            description: "Product listing violations and reactivation",
        },
        {
            title: "MFN Deactivation",
            icon: "ri-store-3-line",
            gradient: "from-blue-600 to-purple-600",
            description: "Merchant fulfilled network compliance restoration",
        },
        {
            title: "Walmart Account Suspension",
            icon: "ri-shopping-bag-3-line",
            gradient: "from-cyan-500 to-blue-500",
            description: "Walmart marketplace account reinstatement",
        },
    ];

    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div
                    className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-opacity duration-1200 ${mounted ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-xl border border-blue-400/20 text-blue-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 mx-auto">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                        Our Expertise
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-[0.9] px-4">
                        Suspension Types{" "}
                        <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            We Handle
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-blue-200/80 max-w-3xl mx-auto font-light px-4">
                        From account-level suspensions to individual listing
                        issues, we&apos;ve successfully resolved every type of
                        marketplace suspension.
                    </p>
                </div>

                {/* Suspension Types Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {suspensionTypes.map((type, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Gradient overlay on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-500`}
                            ></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div
                                    className={`w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br ${type.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg transition-all duration-500 ${hoveredIndex === index ? "scale-110 rotate-6" : ""}`}
                                >
                                    <i
                                        className={`${type.icon} text-lg sm:text-xl text-white`}
                                    ></i>
                                </div>

                                {/* Title */}
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">
                                    {type.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-blue-200/70 leading-relaxed">
                                    {type.description}
                                </p>

                                {/* Success indicator */}
                                <div className="mt-4 sm:mt-5 flex items-center">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                                    <span className="text-xs text-emerald-300 font-medium">
                                        Expert Resolution
                                    </span>
                                </div>
                            </div>

                            {/* Hover effect border */}
                            <div
                                className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-opacity duration-1200 ${mounted ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                            Don&apos;t See Your Suspension Type?
                        </h3>
                        <p className="text-sm sm:text-base text-blue-200/80 mb-5 sm:mb-6">
                            We handle all types of Amazon and Walmart
                            suspensions. Contact us for a free consultation.
                        </p>
                        <a
                            href="tel:661-605-5819"
                            className="inline-flex flex-col bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transform whitespace-nowrap cursor-pointer"
                        >
                            <div className="flex flex-col items-center">
                                <div className="flex items-center">
                                    <i className="ri-phone-line mr-2 text-base sm:text-lg w-5 h-5 flex items-center justify-center"></i>
                                    <p>Call Us Now</p>
                                </div>
                                <p>+1 661-605-5819</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
