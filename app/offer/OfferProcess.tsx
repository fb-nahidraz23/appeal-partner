
'use client';

import { useState, useEffect } from 'react';

export default function OfferProcess() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Define a type for better IntelliSense (optional but improves robustness)
  type Step = {
    number: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  };

  const steps: Step[] = [
    {
      number: '1',
      title: 'Share Your Story',
      description:
        "Tell us what happened to your Amazon account and we'll review your case immediately",
      icon: 'ri-chat-3-line',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '2',
      title: 'Analyze. Strategize.',
      description:
        'Our team analyzes your suspension and creates a custom strategy',
      icon: 'ri-search-line',
      // Fixed the unterminated string and typo in the color value
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '3',
      title: 'We Handle Everything',
      description:
        'We communicate directly with Amazon and handle all appeals on your behalf',
      icon: 'ri-shield-check-line',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      number: '4',
      title: 'Back to Business',
      description:
        'Your account is reinstated and you\'re back to selling with full access restored',
      icon: 'ri-trophy-line',
      color: 'from-orange-500 to-red-500',
    },
  ];

  // Helper to safely scroll to the consultation form
  const scrollToConsultationForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (!formElement) {
      console.warn('Consultation form element not found.');
      return;
    }
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            A Proven, 4-Step<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Reinstatement Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach has successfully restored over 3,000 Amazon
            accounts with a 93% success rate
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }} // safer than Tailwind arbitrary delay
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-blue-300 z-10">
                {/* Step Number */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg`}
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <i
                    className={`${step.icon} text-3xl text-gray-700 group-hover:text-blue-600 transition-colors duration-300`}
                  ></i>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get your Amazon account back?
            </h3>
            <p className="text-gray-600 mb-6">
              Don&apos;t wait another day. Every moment your account stays suspended costs you money.
            </p>
            <button
              onClick={scrollToConsultationForm}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Start Your Reinstatement Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
