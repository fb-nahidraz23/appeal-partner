"use client";

import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
    const [mounted, setMounted] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const videoScrollRef = useRef<HTMLDivElement>(null);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            quote: "Appeal Partners saved my entire business. My account was suspended for 3 weeks, $180K locked up. They got me reinstated in 4 days with a handwritten appeal that Amazon couldn't ignore.",
            author: "Michael Chen",
            business: "Premium Electronics Store",
            location: "Los Angeles, CA",
            revenue: "$180K",
            timeframe: "4 days",
            avatar: "MC",
            category: "Account Suspension",
        },
        {
            quote: "After 8 failed attempts with other services, Appeal Partners was my last hope. They didn't just restore my account - they made it stronger. Worth every penny.",
            author: "Sarah Williams",
            business: "Fashion & Beauty Brand",
            location: "New York, NY",
            revenue: "$95K",
            timeframe: "6 days",
            avatar: "SW",
            category: "Policy Violation",
        },
        {
            quote: "I was drowning in Amazon's automated responses. Appeal Partners cut through the noise with their insider network. They escalated my case directly to senior reviewers.",
            author: "David Rodriguez",
            business: "Home & Garden Wholesale",
            location: "Miami, FL",
            revenue: "$320K",
            timeframe: "3 days",
            avatar: "DR",
            category: "Listing Recovery",
        },
        {
            quote: "The transparency was incredible. They showed me exactly what they were doing, who they were contacting, and why their approach would work. No other service gave me that level of insight.",
            author: "Jennifer Park",
            business: "Private Label Supplements",
            location: "Seattle, WA",
            revenue: "$150K",
            timeframe: "5 days",
            avatar: "JP",
            category: "Brand Registry",
        },
    ];

    const ugcVideos = [
        {
            title: "$95K Revenue Recovered",
            customer: "Sarah W.",
            business: "Fashion Brand",
            embedUrl: "zlmce4xg93",
            placeholder:
                "https://readdy.ai/api/search-image?query=Professional%20businesswoman%20in%20modern%20workspace%20recording%20video%20testimonial%2C%20genuine%20smile%20and%20confident%20expression%2C%20clean%20minimalist%20office%20background&width=300&height=600&seq=ugc2&orientation=portrait",
        },
        {
            title: "Insider Network Success",
            customer: "David R.",
            business: "Wholesale Seller",
            embedUrl: "tfwtjkd09s",
            placeholder:
                "https://readdy.ai/api/search-image?query=Professional%20male%20entrepreneur%20in%20warehouse%20office%20setting%20speaking%20to%20camera%20about%20business%20recovery%20success%2C%20industrial%20modern%20background%20with%20natural%20lighting&width=300&height=600&seq=ugc3&orientation=portrait",
        },
        {
            title: "Transparent Process",
            customer: "Jennifer P.",
            business: "Private Label",
            embedUrl: "lxieeoadno",
            placeholder:
                "https://readdy.ai/api/search-image?query=Professional%20female%20business%20owner%20in%20modern%20office%20recording%20testimonial%20video%2C%20authentic%20and%20approachable%20expression%2C%20clean%20contemporary%20workspace%20background&width=300&height=600&seq=ugc4&orientation=portrait",
        },
    ];

    // Touch/Mouse handlers for video carousel
    const handleStart = (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    ) => {
        const scrollContainer = videoScrollRef.current;
        if (!scrollContainer) return;

        setIsDragging(true);
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        startXRef.current = clientX;
        scrollLeftRef.current = scrollContainer.scrollLeft;
    };

    const handleMove = (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    ) => {
        const scrollContainer = videoScrollRef.current;
        if (!isDragging || !scrollContainer) return;

        e.preventDefault();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const x = clientX;
        const walk = (x - startXRef.current) * 2;
        scrollContainer.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleEnd = () => {
        const scrollContainer = videoScrollRef.current;
        if (!scrollContainer) return;

        setIsDragging(false);

        // Snap to nearest slide
        const slideWidth = window.innerWidth < 640 ? 200 : 280; // Responsive slide width
        const scrollLeft = scrollContainer.scrollLeft;
        const newSlide = Math.round(scrollLeft / slideWidth);
        setCurrentVideoSlide(newSlide);

        scrollContainer.scrollTo({
            left: newSlide * slideWidth,
            behavior: "smooth",
        });
    };

    const goToVideoSlide = (index: number) => {
        const scrollContainer = videoScrollRef.current;
        if (!scrollContainer) return;

        setCurrentVideoSlide(index);
        const slideWidth = window.innerWidth < 640 ? 200 : 280;
        scrollContainer.scrollTo({
            left: index * slideWidth,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="testimonials"
            className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div
                    className={`text-center mb-12 sm:mb-16 transition-opacity duration-1200 ${mounted ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="inline-flex items-center bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm mx-auto">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                        Client Success Stories
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-4 sm:mb-6 tracking-tight leading-tight px-2">
                        Real Sellers,{" "}
                        <span className="font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Real Results
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-blue-200 max-w-2xl mx-auto font-light leading-relaxed px-4">
                        When everything was lost, we brought it back. These are
                        their stories.
                    </p>
                </div>

                {/* UGC Video Section */}
                <div
                    className={`mb-8 sm:mb-12 transition-opacity duration-1200 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}
                >
                    {/* Video header */}
                    <div className="text-center mb-8 sm:mb-10">
                        <div className="inline-flex items-center bg-blue-500/15 border border-blue-500/25 text-blue-300 px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-5 mx-auto">
                            <i className="ri-video-line mr-1.5 text-sm"></i>
                            Video Testimonials
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-3 sm:mb-4 px-2">
                            Hear directly from{" "}
                            <span className="font-medium text-emerald-400">
                                reinstated sellers
                            </span>
                        </h3>
                        <p className="text-blue-200 max-w-xl mx-auto px-4 text-xs sm:text-sm leading-relaxed">
                            Real customers sharing their success stories after
                            we reinstated their Amazon businesses.
                        </p>
                    </div>

                    {/* Video carousel */}
                    <div className="relative px-2 sm:px-0">
                        {/* Swipeable Container */}
                        <div
                            ref={videoScrollRef}
                            className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto overflow-y-hidden pb-4 sm:pb-6 snap-x snap-mandatory justify-center lg:justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                            onMouseDown={handleStart}
                            onMouseMove={handleMove}
                            onMouseUp={handleEnd}
                            onMouseLeave={handleEnd}
                            onTouchStart={handleStart}
                            onTouchMove={handleMove}
                            onTouchEnd={handleEnd}
                        >
                            {/* Add padding to first item for mobile */}
                            <div className="flex-shrink-0 w-2 sm:w-4 lg:w-0"></div>
                            {ugcVideos.map((video, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 group snap-center"
                                >
                                    {/* iPhone Frame with realistic design */}
                                    <div className="relative w-28 sm:w-36 lg:w-44 xl:w-48 h-56 sm:h-72 lg:h-88 xl:h-96 mx-auto mb-3 sm:mb-4 overflow-hidden">
                                        {/* Outer iPhone Frame */}
                                        <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-3xl lg:rounded-[2.5rem] p-2 shadow-2xl transform group-hover:scale-105 transition-all duration-500 border border-gray-700 overflow-hidden">
                                            {/* Screen Bezel */}
                                            <div className="relative w-full h-full bg-black rounded-2xl lg:rounded-[2rem] overflow-hidden border border-gray-800">
                                                {/* Dynamic Island / Notch */}
                                                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 border border-gray-700"></div>

                                                {/* Status Bar */}
                                                <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 bg-black z-20 flex items-center justify-between px-4 pt-2">
                                                    <div className="text-white text-xs font-medium">
                                                        9:41
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        {/* Signal bars */}
                                                        <div className="flex space-x-0.5">
                                                            <div className="w-0.5 h-2 bg-white rounded-full"></div>
                                                            <div className="w-0.5 h-3 bg-white rounded-full"></div>
                                                            <div className="w-0.5 h-4 bg-white rounded-full"></div>
                                                            <div className="w-0.5 h-3 bg-white/60 rounded-full"></div>
                                                        </div>
                                                        {/* WiFi icon */}
                                                        <i className="ri-wifi-fill text-white text-xs"></i>
                                                        {/* Battery */}
                                                        <div className="w-6 h-3 border border-white rounded-sm relative">
                                                            <div className="w-4 h-1.5 bg-white rounded-sm absolute top-0.5 left-0.5"></div>
                                                            <div className="w-0.5 h-1 bg-white rounded-r absolute -right-1 top-1"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Video Content Area */}
                                                <div className="absolute inset-0 pt-8 sm:pt-10 pb-4 overflow-hidden">
                                                    <div className="w-full h-full relative overflow-hidden">
                                                        {/* <script
                                                            src={`https://fast.wistia.com/embed/${video.embedUrl}.js`}
                                                            async
                                                            type="module"
                                                        ></script>
                                                        <style
                                                            dangerouslySetInnerHTML={{
                                                                __html: `wistia-player[media-id='${video.embedUrl}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${video.embedUrl}/swatch'); display: block; filter: blur(5px); padding-top:176.39%; }`,
                                                            }}
                                                        /> */}
                                                        <wistia-player
                                                            media-id={
                                                                video.embedUrl
                                                            }
                                                            aspect="0.5669291338582677"
                                                            className="w-full h-full rounded-lg object-cover"
                                                            style={{
                                                                maxHeight:
                                                                    "100%",
                                                                overflow:
                                                                    "hidden",
                                                            }}
                                                        ></wistia-player>
                                                    </div>
                                                </div>

                                                {/* Home Indicator */}
                                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-white/40 rounded-full"></div>
                                            </div>

                                            {/* iPhone Hardware Details */}
                                            {/* Speaker Grill */}
                                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full opacity-60"></div>

                                            {/* Side Buttons */}
                                            <div className="absolute top-16 -left-0.5 w-1 h-8 bg-gray-700 rounded-l-full"></div>
                                            <div className="absolute top-28 -left-0.5 w-1 h-12 bg-gray-700 rounded-l-full"></div>
                                            <div className="absolute top-44 -left-0.5 w-1 h-12 bg-gray-700 rounded-l-full"></div>
                                            <div className="absolute top-28 -right-0.5 w-1 h-16 bg-gray-700 rounded-r-full"></div>

                                            {/* Camera Bump Simulation */}
                                            <div className="absolute -top-1 left-4 w-12 h-12 bg-gray-800 rounded-2xl opacity-20"></div>
                                        </div>

                                        {/* Video Title Below iPhone */}
                                        <div className="text-center mt-3 sm:mt-4 px-1">
                                            <div className="text-white font-medium text-xs sm:text-sm mb-1">
                                                {video.title}
                                            </div>
                                            <div className="text-blue-300 text-xs">
                                                {video.customer}
                                            </div>
                                            <div className="text-blue-400 text-xs hidden sm:block">
                                                {video.business}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Add padding to last item for mobile */}
                            <div className="flex-shrink-0 w-2 sm:w-4 lg:w-0"></div>
                        </div>

                        {/* Mobile Navigation Dots */}
                        <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5">
                            {ugcVideos.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToVideoSlide(index)}
                                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                                        index === currentVideoSlide
                                            ? "bg-blue-400 w-4 sm:w-6"
                                            : "bg-white/30"
                                    }`}
                                    aria-label={`Go to video ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider Section */}
                <div className="relative mt-8 mb-8 h-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 px-6 py-1">
                            <div className="text-blue-300 text-xs font-medium uppercase tracking-wider">
                                Written Testimonials
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Testimonial Display */}
                <div
                    className={`transition-opacity duration-1200 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="max-w-5xl mx-auto">
                        {/* Testimonial Cards Container */}
                        <div className="relative">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 w-full ${
                                        index === activeTestimonial
                                            ? "opacity-100 translate-x-0"
                                            : index < activeTestimonial
                                              ? "opacity-0 -translate-x-8 absolute inset-0"
                                              : "opacity-0 translate-x-8 absolute inset-0"
                                    }`}
                                >
                                    {/* Main Card */}
                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-white/15 transition-all duration-500 shadow-2xl">
                                        {/* Header with Category */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
                                            <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/30 text-blue-300 px-3 py-1.5 rounded-full text-xs font-bold">
                                                <i className="ri-shield-check-line mr-1.5"></i>
                                                {testimonial.category}
                                            </div>

                                            {/* Stats - Mobile Horizontal */}
                                            <div className="flex items-center gap-6">
                                                <div className="text-center">
                                                    <div className="text-xl sm:text-2xl font-bold text-emerald-400">
                                                        {testimonial.revenue}
                                                    </div>
                                                    <div className="text-xs text-blue-300 font-medium uppercase tracking-wide">
                                                        RECOVERED
                                                    </div>
                                                </div>
                                                <div className="w-px h-8 bg-white/30"></div>
                                                <div className="text-center">
                                                    <div className="text-xl sm:text-2xl font-bold text-cyan-400">
                                                        {testimonial.timeframe}
                                                    </div>
                                                    <div className="text-xs text-blue-300 font-medium uppercase tracking-wide">
                                                        TIMEFRAME
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quote */}
                                        <div className="flex items-center justify-center mb-8 lg:mb-10">
                                            <blockquote className="text-lg sm:text-xl lg:text-2xl text-white font-light leading-relaxed text-center">
                                                <span className="text-3xl text-blue-400 opacity-50">
                                                    &quot;
                                                </span>
                                                {testimonial.quote}
                                                <span className="text-3xl text-blue-400 opacity-50">
                                                    &quot;
                                                </span>
                                            </blockquote>
                                        </div>

                                        {/* Author Section */}
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl">
                                                {testimonial.avatar}
                                            </div>
                                            <div className="text-center sm:text-left">
                                                <div className="text-white font-bold text-lg mb-1">
                                                    {testimonial.author}
                                                </div>
                                                <div className="text-blue-300 text-base font-medium">
                                                    {testimonial.business}
                                                </div>
                                                <div className="text-blue-400 text-sm">
                                                    {testimonial.location}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Verified Badge */}
                                        <div className="flex justify-center">
                                            <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center shadow-lg">
                                                <i className="ri-shield-check-line mr-2"></i>
                                                VERIFIED SUCCESS STORY
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Enhanced Navigation */}
                        <div className="flex items-center justify-center mt-10 lg:mt-14 space-x-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`transition-all duration-300 rounded-full flex items-center space-x-2 px-3 py-2 ${
                                        index === activeTestimonial
                                            ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-medium"
                                            : "bg-white/20 text-white/60 hover:bg-white/30 hover:text-white/80"
                                    }`}
                                >
                                    <div
                                        className={`w-2 h-2 rounded-full ${
                                            index === activeTestimonial
                                                ? "bg-gray-900"
                                                : "bg-white/60"
                                        }`}
                                    ></div>
                                    <span className="text-xs font-medium">
                                        {index + 1}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
