
'use client';

import { useState, useEffect } from 'react';

export default function LogoBanner() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const logos = [
    {
      src: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/a0254ee5748a0f8a2886177ef2b569ba.webp",
      alt: "Bloomberg",
      name: "Bloomberg"
    },
    {
      src: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/965d49c1f8c20648c8328778b8544052.png",
      alt: "Wall Street Journal",
      name: "WSJ"
    },
    {
      src: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/555942082fc830365dd3766e70fbecf6.png",
      alt: "Forbes",
      name: "Forbes"
    },
    {
      src: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/f29112feb64f545ab3eb4b5aa5f4a08d.webp",
      alt: "CNBC",
      name: "CNBC"
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(logos.length / 2));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, logos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(logos.length / 2));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(logos.length / 2)) % Math.ceil(logos.length / 2));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          
          {/* Desktop View - Grid */}
          <div className="hidden sm:grid grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center">
            {logos.map((logo, index) => (
              <div key={index} className="w-24 sm:w-32 h-12 sm:h-16 flex items-center justify-center">
                <img 
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="block sm:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Group logos in pairs for mobile slides */}
                {Array.from({ length: Math.ceil(logos.length / 2) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 flex justify-center space-x-8">
                    {logos.slice(slideIndex * 2, slideIndex * 2 + 2).map((logo, logoIndex) => (
                      <div key={logoIndex} className="w-24 h-12 flex items-center justify-center">
                        <img 
                          src={logo.src}
                          alt={logo.alt}
                          className="max-w-full max-h-full object-contain opacity-60"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Mobile */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200"
              aria-label="Previous logos"
            >
              <i className="ri-arrow-left-s-line text-gray-600"></i>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200"
              aria-label="Next logos"
            >
              <i className="ri-arrow-right-s-line text-gray-600"></i>
            </button>

            {/* Dots Indicator - Mobile */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(logos.length / 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-500 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
