'use client';

import { useState, useEffect } from 'react';


export default function OfferTestimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Trusted by 1,000+ Amazon Sellers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real sellers who got their accounts back and their businesses restored
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Video 1 - Real Wistia Video */}
          <div className={`relative group transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                <script src="https://fast.wistia.com/player.js" async></script>
                <script src="https://fast.wistia.com/embed/pqfpkp2mst.js" async type="module"></script>
                <style dangerouslySetInnerHTML={{
                  __html: `wistia-player[media-id='pqfpkp2mst']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/pqfpkp2mst/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`
                }} />
                <wistia-player 
                  media-id="pqfpkp2mst" 
                  aspect="0.5625"
                  className="w-full h-full rounded-lg"
                  style={{ maxHeight: '100%', overflow: 'hidden' }}
                ></wistia-player>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-semibold">VERIFIED SUCCESS</span>
                    </div>
                    <p className="text-white text-sm">&quot;Account restored in 3 days!&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className={`relative group transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                <script src="https://fast.wistia.com/player.js" async></script>
                <script src="https://fast.wistia.com/embed/zlmce4xg93.js" async type="module"></script>
                <style dangerouslySetInnerHTML={{
                  __html: `wistia-player[media-id='zlmce4xg93']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zlmce4xg93/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`
                }} />
                <wistia-player 
                  media-id="zlmce4xg93" 
                  aspect="0.5625"
                  className="w-full h-full rounded-lg"
                  style={{ maxHeight: '100%', overflow: 'hidden' }}
                ></wistia-player>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-semibold">VERIFIED SUCCESS</span>
                    </div>
                    <p className="text-white text-sm">&quot;$50K revenue recovered!&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video 3 */}
          <div className={`relative group transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                <script src="https://fast.wistia.com/player.js" async></script>
                <script src="https://fast.wistia.com/embed/tfwtjkd09s.js" async type="module"></script>
                <style dangerouslySetInnerHTML={{
                  __html: `wistia-player[media-id='tfwtjkd09s']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/tfwtjkd09s/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`
                }} />
                <wistia-player 
                  media-id="tfwtjkd09s" 
                  aspect="0.5625"
                  className="w-full h-full rounded-lg"
                  style={{ maxHeight: '100%', overflow: 'hidden' }}
                ></wistia-player>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-semibold">VERIFIED SUCCESS</span>
                    </div>
                    <p className="text-white text-sm">&quot;Back online in 5 days!&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video 4 */}
          <div className={`relative group transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                <script src="https://fast.wistia.com/player.js" async></script>
                <script src="https://fast.wistia.com/embed/lxieeoadno.js" async type="module"></script>
                <style dangerouslySetInnerHTML={{
                  __html: `wistia-player[media-id='lxieeoadno']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/lxieeoadno/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`
                }} />
                <wistia-player 
                  media-id="lxieeoadno" 
                  aspect="0.5625"
                  className="w-full h-full rounded-lg"
                  style={{ maxHeight: '100%', overflow: 'hidden' }}
                ></wistia-player>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-semibold">VERIFIED SUCCESS</span>
                    </div>
                    <p className="text-white text-sm">&quot;Transparent process worked!&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join thousands of successful Amazon sellers
            </h3>
            <p className="text-gray-600 mb-6">
              Don&apos;t let a suspension destroy your business. Get expert help now.
            </p>
            <button
              onClick={() => {
                const formElement = document.getElementById('consultation-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

