'use client';

import { useState, useEffect } from 'react';

export default function WhoWeHelp() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      title: 'FBA Sellers',
      subtitle: 'Inventory Issues',
      description: 'FBA sellers face unique challenges with inventory compliance, product authenticity verification, and Amazon\'s strict fulfillment standards that can trigger sudden account suspensions.',
      icon: 'ri-store-3-line',
      problems: [
        'Inbound shipment violations and labeling issues',
        'Product authenticity challenges with brand registry',
        'Inventory performance index penalties',
        'FBA fee disputes and stranded inventory problems'
      ],
      solutions: [
        'Comprehensive FBA compliance audit and correction',
        'Brand registry documentation and verification process',
        'Inventory optimization strategies and performance recovery',
        'Direct Amazon Seller Performance team escalation'
      ],
      image: 'https://readdy.ai/api/search-image?query=modern%20fulfillment%20center%20with%20organized%20inventory%20shelves%2C%20professional%20warehouse%20setting%20with%20Amazon%20FBA%20boxes%20and%20shipping%20areas%2C%20clean%20industrial%20lighting%2C%20workers%20managing%20inventory%20systems%2C%20efficient%20logistics%20operations%2C%20bright%20and%20organized%20atmosphere&width=400&height=300&seq=fba-sellers-help&orientation=landscape',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Wholesale Sellers',
      subtitle: 'Bulk Distribution',
      description: 'Wholesale sellers managing large inventories face complex compliance issues, supplier verification challenges, and bulk listing suspensions that can devastate their entire operation.',
      icon: 'ri-truck-line',
      problems: [
        'Supplier authenticity and documentation challenges',
        'Bulk listing violations and catalog compliance issues',
        'Large-scale inventory management and compliance tracking',
        'Multi-brand authorization and gating requirements'
      ],
      solutions: [
        'Supplier verification and documentation systems',
        'Bulk appeal strategies and compliance optimization',
        'Automated compliance monitoring and prevention tools',
        'Strategic supplier relationship management guidance'
      ],
      image: 'https://readdy.ai/api/search-image?query=large%20wholesale%20distribution%20center%20with%20massive%20inventory%20storage%2C%20pallets%20of%20products%2C%20industrial%20warehouse%20with%20high%20shelves%2C%20bulk%20inventory%20management%20systems%2C%20professional%20logistics%20environment%2C%20organized%20shipping%20and%20receiving%20areas&width=400&height=300&seq=wholesale-sellers-help&orientation=landscape',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'High-Volume Sellers',
      subtitle: 'Enterprise Solutions',
      description: 'High-volume sellers with complex operations face sophisticated compliance challenges, multi-account management issues, and enterprise-level suspension scenarios requiring advanced resolution strategies.',
      icon: 'ri-bar-chart-line',
      problems: [
        'Multi-account compliance and risk management',
        'High-volume listing optimization and automation challenges',
        'Complex performance metrics and enterprise-level penalties',
        'Brand protection and intellectual property enforcement'
      ],
      solutions: [
        'Enterprise compliance framework development',
        'Multi-account risk assessment and protection strategies',
        'Advanced performance optimization and automation systems',
        'Dedicated enterprise support and escalation channels'
      ],
      image: 'https://readdy.ai/api/search-image?query=modern%20corporate%20office%20environment%20with%20multiple%20computer%20monitors%20showing%20analytics%20dashboards%2C%20professional%20business%20setting%20with%20charts%20and%20graphs%2C%20enterprise-level%20operations%20center%2C%20sophisticated%20data%20visualization%20displays%2C%20clean%20modern%20workspace%20with%20business%20professionals&width=400&height=300&seq=high-volume-sellers-help&orientation=landscape',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Private Label Sellers',
      subtitle: 'Brand Builders',
      description: 'Private label sellers building their own brands face unique challenges with trademark protection, listing hijackers, counterfeit claims, and brand registry complications that threaten their business foundation.',
      icon: 'ri-price-tag-3-line',
      problems: [
        'Brand registry verification and trademark disputes',
        'Listing hijackers and unauthorized sellers',
        'Counterfeit and intellectual property violation claims',
        'Product quality complaints and review manipulation accusations'
      ],
      solutions: [
        'Brand registry protection and trademark defense strategies',
        'Hijacker removal and listing protection systems',
        'IP violation defense and counterfeit claim resolution',
        'Quality control documentation and review policy compliance'
      ],
      image: 'https://readdy.ai/api/search-image?query=professional%20product%20photography%20studio%20with%20branded%20private%20label%20products%20on%20display%2C%20clean%20white%20background%20with%20elegant%20product%20packaging%2C%20modern%20branding%20materials%20and%20trademark%20documents%2C%20sophisticated%20brand%20identity%20setup%2C%20premium%20quality%20product%20presentation%20with%20professional%20lighting&width=400&height=300&seq=private-label-sellers-help&orientation=landscape',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="who-we-help" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-opacity duration-1200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center bg-purple-50 text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 mx-auto border border-purple-200">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            Our Specialties
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight leading-[0.9] px-4">
            Our <span className="font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-medium px-4">
            Every seller type. Every suspension reason. Every impossible case.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          
          {/* Category Selector */}
          <div className="lg:w-1/3">
            <div className="space-y-3 sm:space-y-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`group w-full text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-105 ${ 
                    activeCategory === index 
                      ? 'bg-gradient-to-r from-white to-blue-50 border-2 border-blue-200 shadow-xl' 
                      : 'bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white/80 hover:border-blue-200'
                  } ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br ${category.gradient} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${activeCategory === index ? 'scale-110' : 'group-hover:scale-105'}`}>
                      <i className={`${category.icon} text-base sm:text-lg text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-sm sm:text-base transition-colors duration-300 ${activeCategory === index ? 'text-gray-900' : 'text-gray-700'}`}>
                        {category.title}
                      </h3>
                      <p className={`text-xs sm:text-sm transition-colors duration-300 ${activeCategory === index ? 'text-blue-600' : 'text-gray-500'}`}>
                        {category.subtitle}
                      </p>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeCategory === index ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-gray-300'}`}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <div className="relative">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${ 
                    index === activeCategory 
                      ? 'opacity-100 translate-x-0' 
                      : index < activeCategory 
                        ? 'opacity-0 -translate-x-8 absolute inset-0' 
                        : 'opacity-0 translate-x-8 absolute inset-0'
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
                    
                    {/* Header with Image */}
                    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-6 sm:mb-8">
                      <div className="lg:w-1/2">
                        <div className="mb-4 sm:mb-6">
                          <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br ${category.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
                            <i className={`${category.icon} text-xl sm:text-2xl text-white`}></i>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{category.title}</h3>
                          <p className="text-blue-600 font-semibold text-base sm:text-lg">{category.subtitle}</p>
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{category.description}</p>
                      </div>
                      
                      <div className="lg:w-1/2">
                        <div className="relative">
                          <img 
                            src={category.image}
                            alt={category.title}
                            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl"></div>
                        </div>
                      </div>
                    </div>

                    {/* Problems & Solutions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {/* Problems */}
                      <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <i className="ri-error-warning-line text-red-500 text-lg sm:text-xl mr-2 sm:mr-3"></i>
                          <h4 className="font-bold text-red-700 text-sm sm:text-base">Common Problems</h4>
                        </div>
                        <ul className="space-y-2 sm:space-y-3">
                          {category.problems.map((problem, pIndex) => (
                            <li key={pIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                              <span className="text-red-600 text-xs sm:text-sm leading-relaxed">{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <i className="ri-check-line text-emerald-500 text-lg sm:text-xl mr-2 sm:mr-3"></i>
                          <h4 className="font-bold text-emerald-700 text-sm sm:text-base">Our Solutions</h4>
                        </div>
                        <ul className="space-y-2 sm:space-y-3">
                          {category.solutions.map((solution, sIndex) => (
                            <li key={sIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                              <span className="text-emerald-600 text-xs sm:text-sm leading-relaxed">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`transition-all duration-300 rounded-full ${ 
                index === activeCategory 
                  ? 'w-8 sm:w-12 h-2 bg-gradient-to-r from-purple-400 to-blue-400' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
