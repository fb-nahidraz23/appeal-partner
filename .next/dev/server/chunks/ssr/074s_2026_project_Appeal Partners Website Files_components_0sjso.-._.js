module.exports = [
"[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    const footerLinks = [
        {
            title: "Quick Navigation",
            links: [
                {
                    name: "How It Works",
                    action: ()=>scrollToSection("process")
                },
                {
                    name: "Why Choose Us",
                    action: ()=>scrollToSection("why-us")
                },
                {
                    name: "Success Stories",
                    action: ()=>scrollToSection("testimonials")
                },
                {
                    name: "Who We Help",
                    action: ()=>scrollToSection("who-we-help")
                },
                {
                    name: "Get Started",
                    action: ()=>scrollToSection("emergency-appeal-form")
                },
                {
                    name: "Blogs",
                    action: ()=>router.push("/blogs")
                }
            ]
        },
        {
            title: "Problems We Solve",
            links: [
                {
                    name: "Account Suspensions",
                    action: ()=>scrollToSection("problem")
                },
                {
                    name: "Listing Removals",
                    action: ()=>scrollToSection("problem")
                },
                {
                    name: "Frozen Funds",
                    action: ()=>scrollToSection("problem")
                },
                {
                    name: "Emergency Appeals",
                    action: ()=>scrollToSection("emergency-appeal-form")
                },
                {
                    name: "Fast-Track Process",
                    action: ()=>scrollToSection("process")
                }
            ]
        },
        {
            title: "Get Help Now",
            links: [
                {
                    name: "About Appeal Partners",
                    action: ()=>window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                },
                {
                    name: "Our Success Rate",
                    action: ()=>scrollToSection("why-us")
                },
                {
                    name: "Client Testimonials",
                    action: ()=>scrollToSection("testimonials")
                },
                {
                    name: "Emergency Contact",
                    action: ()=>window.location.href = "tel:+17186684216"
                },
                {
                    name: "Start Your Appeal",
                    action: ()=>scrollToSection("emergency-appeal-form")
                }
            ]
        }
    ];
    const socialLinks = [
        {
            icon: "ri-instagram-line",
            href: "https://www.instagram.com/appealpartners",
            label: "Instagram"
        },
        {
            icon: "ri-linkedin-line",
            href: "#",
            label: "LinkedIn"
        },
        {
            icon: "ri-twitter-x-line",
            href: "#",
            label: "Twitter"
        },
        {
            icon: "ri-facebook-line",
            href: "#",
            label: "Facebook"
        },
        {
            icon: "ri-youtube-line",
            href: "#",
            label: "YouTube"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gray-900 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-16 sm:py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 xl:grid-cols-2 gap-12 sm:gap-16 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `transition-all duration-1200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/8fd2c099e8bb2b2a0fbbb3c14411f22a.png",
                                                        alt: "Appeal Partners",
                                                        className: "w-5 sm:w-6 h-5 sm:h-6 object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg sm:text-2xl font-medium text-white tracking-tight",
                                                    children: "Appeal Partners"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl sm:text-3xl font-light text-white mb-4 sm:mb-6 leading-relaxed",
                                            children: [
                                                "Reinstating Amazon & Walmart Sellers",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                                    children: "one appeal at a time"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 144,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg",
                                            children: "When Amazon suspends your account, we don't just write appeals—we wage war for your business survival using insider connections and proven strategies."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 152,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mb-3 sm:mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "ri-phone-line text-blue-400 text-lg sm:text-xl mr-2 sm:mr-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-blue-300 font-semibold text-sm sm:text-base",
                                                            children: "Contact Us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 sm:space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ri-mail-line text-blue-400 text-sm mr-2 sm:mr-3 w-4 h-4 flex items-center justify-center"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "mailto:Sales@appealpartners.com",
                                                                    className: "hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base",
                                                                    children: "Sales@appealpartners.com"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ri-phone-line text-blue-400 text-sm mr-2 sm:mr-3 w-4 h-4 flex items-center justify-center"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "tel:+17186684216",
                                                                    className: "hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base",
                                                                    children: "+1 661-605-5819"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 160,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4 sm:gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xl sm:text-2xl font-bold text-emerald-400",
                                                            children: "93%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500 uppercase tracking-wide",
                                                            children: "Success Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xl sm:text-2xl font-bold text-blue-400",
                                                            children: "7 Days"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500 uppercase tracking-wide",
                                                            children: "Avg Resolution"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xl sm:text-2xl font-bold text-purple-400",
                                                            children: "$2.7M+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500 uppercase tracking-wide",
                                                            children: "Funds Recovered"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8 sm:space-y-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8",
                                            children: footerLinks.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `transition-all duration-1200 delay-${(index + 1) * 200} ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg",
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-3 sm:space-y-4",
                                                            children: section.links.map((link, linkIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: link.action,
                                                                        className: "text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm cursor-pointer text-left",
                                                                        children: link.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, linkIndex, false, {
                                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 53
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 221,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-red-500/10 border border-red-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mb-3 sm:mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "ri-alarm-warning-line text-red-400 text-lg sm:text-xl mr-2 sm:mr-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-300 font-bold text-sm sm:text-base",
                                                            children: "Emergency Suspension?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-200 text-xs sm:text-sm mb-3 sm:mb-4",
                                                    children: "Every minute counts. Get immediate help from our emergency response team."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+17186684216",
                                                    className: "bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block text-sm sm:text-base",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ri-phone-line mr-2 text-base sm:text-lg w-5 h-5 flex items-center justify-center"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Emergency Hotline"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-center",
                                                            children: "+1 661-605-5819"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 251,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                    lineNumber: 219,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 py-6 sm:py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-500 text-xs sm:text-sm text-center lg:text-left",
                                    children: "2026 Appeal Partners. All rights reserved. Amazon suspension recovery specialists."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                    lineNumber: 281,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4 sm:space-x-6",
                                    children: socialLinks.map((social, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: social.href,
                                            className: "w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer",
                                            "aria-label": social.label,
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `${social.icon} text-gray-400 group-hover:text-white transition-colors duration-300 text-sm sm:text-base`
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                                lineNumber: 296,
                                                columnNumber: 37
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 289,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                    lineNumber: 287,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth"
                                                }),
                                            className: "text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 305,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/terms",
                                            className: "text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 316,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection("emergency-appeal-form"),
                                            className: "text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer",
                                            children: "Get Help Now"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                            lineNumber: 322,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                                    lineNumber: 304,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                            lineNumber: 279,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                        lineNumber: 278,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Footer.tsx",
        lineNumber: 114,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Navbar = ()=>{
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navigateToHomeSection = (sectionId)=>{
        setMenuOpen(false);
        if (!sectionId) {
            window.location.href = "/";
            return;
        }
        window.location.href = `/#${sectionId}`;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        menuOpen
    ]);
    const menuItems = [
        {
            name: "Home",
            action: ()=>navigateToHomeSection()
        },
        {
            name: "How It Works",
            action: ()=>navigateToHomeSection("process")
        },
        {
            name: "Why Choose Us",
            action: ()=>navigateToHomeSection("why-us")
        },
        {
            name: "Who We Help",
            action: ()=>navigateToHomeSection("who-we-help")
        },
        {
            name: "Success Stories",
            action: ()=>navigateToHomeSection("testimonials")
        },
        {
            name: "Get Started",
            action: ()=>navigateToHomeSection("emergency-appeal-form")
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-30 hidden lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/8fd2c099e8bb2b2a0fbbb3c14411f22a.png",
                                        alt: "Appeal Partners",
                                        className: "w-5 h-5 object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-semibold text-white tracking-tight",
                                children: "Appeal Partners"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-5 right-32 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "tel:661-605-5819",
                    className: "inline-flex flex-col bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2 rounded-md font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transform whitespace-nowrap cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "+1 661-605-5819"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                        lineNumber: 85,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 h-full w-72 sm:w-80 bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 z-40 transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 sm:p-8 pt-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "space-y-2",
                            children: menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: item.action,
                                    className: "w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-base sm:text-lg cursor-pointer border border-transparent hover:border-white/20",
                                    children: item.name
                                }, index, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:+17186684216",
                                className: "block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base",
                                children: "Call Us Now"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-30",
                onClick: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 119,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setMenuOpen(!menuOpen),
                    className: "w-11 h-11 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer",
                    "aria-label": "Menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-5 h-4 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 133,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 136,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 139,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
];

//# sourceMappingURL=074s_2026_project_Appeal%20Partners%20Website%20Files_components_0sjso.-._.js.map