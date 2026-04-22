
'use client';

import { useState, useEffect } from 'react';

export default function Process() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Analyze Situation',
      subtitle: 'You submit docs',
      description: 'Our team analyzes every detail of your suspension with forensic precision.',
      details: 'Account history, violation patterns, policy interpretations, insider knowledge',
      icon: 'ri-search-eye-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Write Appeal',
      subtitle: 'We write the appeal',
      description: 'Appeals written by former Amazon employees who know the system inside out.',
      details: 'Psychological triggers, policy loopholes, decision-maker psychology',
      icon: 'ri-quill-pen-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Internal Escalation',
      subtitle: 'We escalate internally',
      description: 'Direct pipeline to senior Amazon decision makers who can override bot decisions.',
      details: 'Executive contacts, internal advocates, priority queue placement',
      icon: 'ri-rocket-2-line',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '04',
      title: 'Account Reactivated',
      subtitle: 'You get reinstated',
      description: 'Your account restored, funds released, business resurrected from the dead.',
      details: 'Full privileges, clean record, stronger than before',
      icon: 'ri-trophy-line',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-opacity duration-1200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-300 px-3 sm:px-4 lg:px-6 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-8 border border-white/20 mx-auto">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            System Activated
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-[0.9] px-2">
            The <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Reinstatement</span><br />
            Protocol
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-200 max-w-2xl mx-auto font-light px-4">
            Four precision steps. Zero room for failure. Your business returns stronger.
          </p>
        </div>

        {/* Interactive Process */}
        <div className="relative">
          {/* Central Hub */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <div className="relative">
              <div className="w-20 sm:w-24 lg:w-28 xl:w-32 h-20 sm:h-24 lg:h-28 xl:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-14 sm:w-16 lg:w-20 xl:w-24 h-14 sm:h-16 lg:h-20 xl:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <i className={`${steps[activeStep].icon} text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 flex items-center justify-center`}></i>
                </div>
              </div>
              {/* Pulsing Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping delay-500"></div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                onClick={() => setActiveStep(index)}
                className={`group relative cursor-pointer transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'} ${activeStep === index ? 'scale-105' : 'hover:scale-105'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Card */}
                <div className={`relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border transition-all duration-500 ${activeStep === index ? 'border-white/40 bg-white/20' : 'border-white/20 hover:border-white/30'}`}>
                  
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                    <span className={`text-xs sm:text-sm font-bold tracking-wider transition-colors duration-300 ${activeStep === index ? 'text-blue-300' : 'text-blue-400/60'}`}>
                      STEP {step.number}
                    </span>
                    <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full transition-all duration-300 ${activeStep === index ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-white/20'}`}></div>
                  </div>

                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 lg:mb-6">
                    <div className={`w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-gradient-to-br ${step.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${activeStep === index ? 'shadow-xl scale-110' : ''}`}>
                      <i className={`${step.icon} text-base sm:text-lg lg:text-xl text-white w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-300 ${activeStep === index ? 'text-white' : 'text-blue-100'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 ${activeStep === index ? 'text-blue-200' : 'text-blue-300/60'}`}>
                      {step.subtitle}
                    </p>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 ${activeStep === index ? 'text-blue-100' : 'text-blue-200/60'}`}>
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="border-t border-white/20 pt-2 sm:pt-3 lg:pt-4">
                        <p className="text-xs text-emerald-300 font-medium">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect for Active */}
                  {activeStep === index && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 -z-10`}></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === activeStep ? 'w-8 sm:w-10 lg:w-12 bg-blue-400' : 'w-3 sm:w-4 lg:w-6 bg-white/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
