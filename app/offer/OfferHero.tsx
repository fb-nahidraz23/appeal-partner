



'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OfferHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"></div>
      </div>

      {/* Logo in top left */}
      <div className="absolute top-6 left-6 z-30">
        <Link href="/" className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5 hover:bg-white/10 transition-all duration-300">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png" 
                alt="Appeal Partners"
                className="w-5 h-5 object-contain"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-base font-semibold text-white tracking-tight">Appeal Partners</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto w-full">
        <div className={`transition-opacity duration-1500 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Step Badge */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/15 to-blue-500/15 backdrop-blur-2xl border border-emerald-400/20 rounded-full px-8 py-4 shadow-2xl">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4 animate-pulse"></div>
                <span className="text-emerald-300 font-bold text-base uppercase tracking-wider">STEP 1: Book Your FREE 30-Minute Consultation</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 leading-[0.85] tracking-tighter text-center" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              The #1 Amazon<br />
              Reinstatement Service
            </h1>
          </div>

          {/* Subheadline */}
          <div className="mb-32">
            <p className="text-2xl sm:text-3xl md:text-4xl text-blue-100/90 font-medium max-w-4xl mx-auto leading-relaxed px-4">
              We full reactivate Amazon & Walmart Seller Accounts in 7 days or less.
            </p>
          </div>

          {/* Trust Stats - Redesigned */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <div className="group bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl px-8 py-10 transform hover:scale-105 transition-all duration-500 hover:bg-white/12">
              <div className="text-4xl font-black text-white mb-4">3k+ ACCOUNTS</div>
              <div className="text-4xl font-black text-white mb-4">REINSTATED</div>
              <div className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Our Promise</div>
            </div>
            <div className="group bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl px-8 py-10 transform hover:scale-105 transition-all duration-500 hover:bg-white/12">
              <div className="text-5xl font-black text-white mb-4">93%</div>
              <div className="text-2xl font-semibold text-white mb-4">Success Rate</div>
              <div className="text-blue-400 text-sm font-bold uppercase tracking-wider">Proven Results</div>
            </div>
            <div className="group bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl px-8 py-10 transform hover:scale-105 transition-all duration-500 hover:bg-white/12">
              <div className="text-5xl font-black text-white mb-4">7</div>
              <div className="text-2xl font-semibold text-white mb-4">Day Average</div>
              <div className="text-purple-400 text-sm font-bold uppercase tracking-wider">Fast Resolution</div>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-16">
            <button 
              onClick={scrollToForm}
              className="group relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 hover:from-emerald-500 hover:via-blue-500 hover:to-emerald-600 text-white px-16 py-6 rounded-2xl font-black text-xl transition-all duration-500 shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-2 transform whitespace-nowrap cursor-pointer border-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center justify-center">
                Book My FREE Consultation Now
                <i className="ri-arrow-right-line ml-4 text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
            </button>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="group bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl px-8 py-10 transform hover:scale-105 transition-all duration-500 hover:bg-white/12">
              <div className="text-4xl font-black text-white mb-4">3k+ ACCOUNTS</div>
              <div className="text-4xl font-black text-white mb-4">REINSTATED</div>
              <div className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Our Promise</div>
            </div>

            {/* Preserve the remaining original cards */}
            <div className="bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl px-8 py-6 text-center">
              <div className="text-white font-bold text-lg mb-2">Complete Appeal Management</div>
              <div className="text-blue-200 text-sm">We handle your Amazon appeal from start to finish</div>
            </div>
            <div className="bg-purple-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-8 py-6 text-center">
              <div className="text-white font-bold text-lg mb-2">Direct Amazon Communication</div>
              <div className="text-purple-200 text-sm">We work directly with Amazon on your behalf</div>
            </div>
            <div className="bg-emerald-600/20 backdrop-blur-xl border border-emerald-500/30 rounded-2xl px-8 py-6 text-center">
              <div className="text-white font-bold text-lg mb-2">Rapid Account Recovery</div>
              <div className="text-emerald-200 text-sm">We get your account back online ASAP</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mb-8">
            <p className="text-blue-200 text-lg mb-8 font-medium">Trusted by Amazon sellers worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <img src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/amazon-logo.png" alt="Amazon" className="h-10 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/fba-logo.png" alt="FBA" className="h-10 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/seller-central-logo.png" alt="Seller Central" className="h-10 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/marketplace-logo.png" alt="Marketplace" className="h-10 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-1 right-1 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}

