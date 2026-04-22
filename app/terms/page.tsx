
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sections = [
    {
      title: "1. Service Description",
      content: "AppealPartners.com provides consulting and support services for Amazon sellers. This includes preparing appeal letters, providing guidance, and advising on strategy to address account or ASIN suspensions or deactivations.\n\nWe are not affiliated with Amazon.com, Inc. or any of its subsidiaries. We do not have control over Amazon's internal decisions or appeal outcomes."
    },
    {
      title: "2. No Guarantee of Results",
      content: "We provide professional assistance only. While we apply industry experience and best practices, we do not and cannot guarantee the reinstatement of any Amazon account or ASIN.\n\nAll services are offered on a best-effort basis. You are paying for our time, expertise, and work—not for a specific outcome."
    },
    {
      title: "3. Client Responsibilities",
      content: "You agree to provide accurate and complete information regarding your Amazon account, performance notifications, and any prior appeal history. Failure to do so may limit the effectiveness of our services.\n\nYou understand that misleading, false, or incomplete information may negatively impact your appeal and does not entitle you to a refund."
    },
    {
      title: "4. Payments and Refund Policy",
      content: "All payments made to AppealPartners.com are final and non-refundable once submitted. We do not issue refunds based on dissatisfaction with the result or denial by Amazon."
    },
    {
      title: "5. Chargebacks and Disputes",
      content: "By purchasing our services, you agree not to file a chargeback or payment dispute with your bank, credit card issuer, or payment provider on the basis of dissatisfaction with the outcome.\n\nAttempting to reverse a valid payment after receiving services constitutes fraud and may result in legal action and reporting to appropriate authorities or payment processors."
    },
    {
      title: "6. Confidentiality",
      content: "We treat your case information and account details with strict confidentiality. We do not share your data with third parties unless required by law or authorized by you."
    },
    {
      title: "7. Limitation of Liability",
      content: "To the fullest extent permitted by law, AppealPartners.com is not liable for any direct, indirect, or consequential damages resulting from the use of our services, including but not limited to lost profits, account termination, or business interruption."
    },
    {
      title: "8. Contact Information",
      content: "If you have questions about these terms, please contact us at:\n\n sales@appealpartners.com\n https://appealpartners.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <img 
                  src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png" 
                  alt="Appeal Partners"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-2xl font-medium text-white tracking-tight">Appeal Partners</span>
            </Link>

            <Link 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Back to Home
            </Link>
          </nav>

          <div className="py-20 text-center">
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Terms of <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional Amazon reinstatement services terms and conditions
              </p>
              <div className="mt-8 text-sm text-gray-400">
                Effective Date: August 7, 2025
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to AppealPartners.com</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing our website and/or purchasing our services, you agree to the following Terms of Service. 
                Please read them carefully as they contain important information about your rights and obligations when 
                using our Amazon seller consulting and appeal services.
              </p>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 100} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  {section.content.split('\\n\\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note for Additional Terms */}
          <div className={`mt-16 transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <i className="ri-check-line text-emerald-600 text-2xl mr-3"></i>
                <h3 className="text-xl font-bold text-gray-900">Terms Complete</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All terms and conditions have been provided. These Terms of Service are now complete and comprehensive, 
                covering all aspects of our Amazon seller consulting and reinstatement services.
              </p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className={`mt-16 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
              <div className="flex items-center mb-4">
                <i className="ri-alarm-warning-line text-red-500 text-2xl mr-3"></i>
                <h3 className="text-2xl font-bold text-gray-900">Emergency Suspension?</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If your Amazon account has been suspended and you need immediate assistance, 
                don&apos;t wait. Our emergency response team is available to help you get back to selling quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+17186684216"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap text-center"
                >
                  Emergency Hotline: +1 (718) 668-4216
                </a>
                <a 
                  href="mailto:Sales@appealpartners.com"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap text-center"
                >
                  Email: Sales@appealpartners.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <i className="ri-phone-line text-blue-600 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Emergency Contact Information</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center text-gray-700">
                <i className="ri-mail-line text-blue-500 mr-2 sm:mr-3 text-sm"></i>
                <a href="mailto:sales@appealpartners.com" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                  sales@appealpartners.com
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="ri-phone-line text-blue-500 mr-2 sm:mr-3 text-sm"></i>
                <a href="tel:+17186684216" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                  +1 (718) 668-4216
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="ri-global-line text-blue-500 mr-2 sm:mr-3 text-sm"></i>
                <a href="https://appealpartners.com" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                  https://appealpartners.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Your Amazon Account Back?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t let a suspension destroy your business. Our proven process has helped thousands of sellers get reinstated.
          </p>
          <Link 
            href="/"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block"
          >
            Start Your Appeal Now
          </Link>
        </div>
      </section>
    </div>
  );
}
