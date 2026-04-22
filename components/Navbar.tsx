"use client"

import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigateToHomeSection = (sectionId?: string) => {
        setMenuOpen(false);

        if (!sectionId) {
            window.location.href = "/";
            return;
        }

        window.location.href = `/#${sectionId}`;
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    const menuItems = [
        {
            name: "Home",
            action: () => navigateToHomeSection(),
        },
        {
            name: "How It Works",
            action: () => navigateToHomeSection("process"),
        },
        {
            name: "Why Choose Us",
            action: () => navigateToHomeSection("why-us"),
        },
        {
            name: "Who We Help",
            action: () => navigateToHomeSection("who-we-help"),
        },
        {
            name: "Success Stories",
            action: () => navigateToHomeSection("testimonials"),
        },
        {
            name: "Get Started",
            action: () => navigateToHomeSection("emergency-appeal-form"),
        },
    ];

    return (
        <div>
            {/* Logo in top left with premium styling - Desktop only */}
            <div className="absolute top-4 left-4 z-30 hidden lg:block">
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5">
                    <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden">
                            <img
                                src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/8fd2c099e8bb2b2a0fbbb3c14411f22a.png"
                                alt="Appeal Partners"
                                className="w-5 h-5 object-contain"
                            />
                        </div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>
                    <div>
                        <span className="text-base font-semibold text-white tracking-tight">
                            Appeal Partners
                        </span>
                    </div>
                </div>
            </div>

            {/* Slide-out Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 z-40 transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 sm:p-8 pt-20">
                    <nav className="space-y-2">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={item.action}
                                className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-base sm:text-lg cursor-pointer border border-transparent hover:border-white/20"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                        <a
                            href="tel:+17186684216"
                            className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base"
                        >
                            Call Us Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Overlay when menu is open */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* Hamburger Menu Button - Top Right */}
            <div className="absolute top-4 right-4 z-50">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="w-11 h-11 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    aria-label="Menu"
                >
                    <div className="w-5 h-4 flex flex-col justify-between">
                        <span
                            className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                        ></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
