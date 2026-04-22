
'use client';

import { useState, useEffect } from 'react';

export default function WhyUs() {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: '3,000+ Accounts Reinstated',
      subtitle: 'Proven Success Record',
      description: 'Over 3,000 successfully restored Amazon accounts across every suspension type and violation category.',
      details: 'Complex policy violations, repeat suspensions, failed previous attempts, emergency reinstatements',
      icon: 'ri-trophy-line',
      gradient: 'from-emerald-500 to-teal-500',
      stats: { value: '3,000+', label: 'Accounts Restored' }
    },
    {
      title: 'Direct Escalation Network',
      subtitle: 'Skip the Bots',
      description: 'We bypass automated systems and escalate directly to senior human reviewers.',
      details: 'Executive contacts, internal advocates, priority processing channels',
      icon: 'ri-rocket-2-line',
      gradient: 'from-blue-500 to-purple-500',
      stats: { value: '48hrs', label: 'Avg Response Time' }
    },
    {
      title: 'Proven Track Record',
      subtitle: 'Results That Matter',
      description: 'Over 3,000 successful reinstatements with a 93% success rate across all case types.',
      details: 'Comprehensive case analysis, strategic appeal writing, persistent follow-up',
      icon: 'ri-trophy-line',
      gradient: 'from-yellow-500 to-orange-500',
      stats: { value: '93%', label: 'Success Rate' }
    }
  ];

  const trustSignals = [
    { icon: 'ri-shield-check-line', text: 'BBB A+ Rating', color: 'text-emerald-400' },
    { icon: 'ri-time-line', text: '24/7 Support', color: 'text-blue-400' },
    { icon: 'ri-lock-line', text: '100% Confidential', color: 'text-purple-400' },
    { icon: 'ri-award-line', text: 'Industry Leading', color: 'text-yellow-400' }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-opacity duration-1200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 mx-auto border border-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            Why We Win
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight leading-[0.9] px-4">
            The <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Appeal Partners</span><br />
            Advantage
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-light px-4">
            When others fail, we succeed. Here&apos;s what makes us unstoppable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`group relative cursor-pointer transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'} ${activeFeature === index ? 'scale-105' : 'hover:scale-105'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 shadow-lg hover:shadow-2xl border ${activeFeature === index ? 'border-blue-300 bg-white shadow-2xl' : 'border-white/40 hover:border-blue-200'}`}>
                
                {/* Active indicator */}
                <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 w-3 h-3 rounded-full transition-all duration-300 ${activeFeature === index ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-gray-200'}`}></div>

                {/* Icon */}
                <div className="mb-4 sm:mb-6">
                  <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${activeFeature === index ? 'shadow-xl scale-110' : ''}`}>
                    <i className={`${feature.icon} text-xl sm:text-2xl text-white`}></i>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="mb-3 sm:mb-4">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${activeFeature === index ? 'text-gray-900' : 'text-gray-800'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm sm:text-base font-medium transition-colors duration-300 ${activeFeature === index ? 'text-blue-600' : 'text-blue-500/80'}`}>
                      {feature.subtitle}
                    </p>
                  </div>
                  
                  <p className={`text-sm sm:text-base leading-relaxed mb-4 transition-colors duration-300 ${activeFeature === index ? 'text-gray-700' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>

                  {/* Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <p className="text-xs sm:text-sm text-blue-600 font-medium">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className={`text-center pt-4 transition-all duration-500 ${activeFeature === index ? 'opacity-100' : 'opacity-60'}`}>
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.stats.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    {feature.stats.label}
                  </div>
                </div>

                {/* Glow Effect for Active */}
                {activeFeature === index && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl blur-xl opacity-10 -z-10`}></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {trustSignals.map((signal, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100 + 1000}ms` }}
            >
              <i className={`${signal.icon} text-lg sm:text-xl ${signal.color} mb-1 sm:mb-2 block`}></i>
              <div className="text-gray-700 text-xs sm:text-sm font-medium">{signal.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
