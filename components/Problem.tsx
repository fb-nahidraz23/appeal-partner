
'use client';

import { useState, useEffect } from 'react';

export default function Problem() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const problems = [
    {
      title: 'Account Suspensions',
      description: 'Your entire business frozen. Revenue stopped. Dreams paused.',
      detail: 'We restore your selling privileges with surgical precision.',
      gradient: 'from-red-500 to-pink-600',
      icon: 'ri-shield-cross-line'
    },
    {
      title: 'Listing Removals',
      description: 'Products vanished overnight. Sales plummeting instantly.',
      detail: 'Strategic appeals that get your products back online.',
      gradient: 'from-orange-500 to-red-500',
      icon: 'ri-file-forbid-line'
    },
    {
      title: 'Frozen Funds',
      description: 'Cash flow strangled. Operations at a standstill.',
      detail: 'Unlock trapped capital and restore financial freedom.',
      gradient: 'from-blue-500 to-purple-600',
      icon: 'ri-lock-2-line'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-opacity duration-1200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center bg-red-50 text-red-600 px-3 sm:px-4 lg:px-6 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-8 mx-auto">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
            Crisis Mode Activated
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-[0.9] px-2">
            When Amazon<br />
            <span className="font-medium bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Destroys Everything</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-500 max-w-2xl mx-auto font-light px-4">
            One violation. One mistake. Your entire business empire crumbles in seconds.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 xl:p-10 transition-all duration-700 hover:scale-105 cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl ${mounted ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-4 sm:mb-6 lg:mb-8">
                <div className={`w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 bg-gradient-to-br ${problem.gradient} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  <i className={`${problem.icon} text-base sm:text-lg lg:text-xl xl:text-2xl text-white w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 flex items-center justify-center`}></i>
                </div>
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} rounded-lg sm:rounded-xl lg:rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 scale-150`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-500">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600 mb-2 sm:mb-3 lg:mb-4 font-medium leading-relaxed text-xs sm:text-sm lg:text-base">
                  {problem.description}
                </p>
                
                {/* Detail section */}
                <div className={`transition-all duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-blue-600 font-semibold pt-2 border-t border-gray-100 text-xs sm:text-sm lg:text-base">
                    {problem.detail}
                  </p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
