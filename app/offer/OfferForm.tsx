
'use client';

import { useState, useEffect } from 'react';

export default function OfferForm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="consultation-form" className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Book Your Free Reinstatement Consultation
          </h2>
          <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Get a detailed analysis of your suspension and a custom reinstatement strategy - completely free
          </p>
        </div>

        {/* Calendar Embed */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <iframe 
            src="https://link.scaledai.org/widget/booking/gElIaNpwOtH8JitHzued" 
            style={{width: '100%', border: 'none', overflow: 'hidden'}} 
            scrolling="no" 
            id="gElIaNpwOtH8JitHzued_1760966998785"
          ></iframe>
        </div>
      </div>

      <script src="https://link.scaledai.org/js/form_embed.js" async type="text/javascript"></script>
    </section>
  );
}