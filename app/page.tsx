'use client';

import Hero from '@/components/Hero';
import LogoBanner from '@/components/LogoBanner';
import Problem from '@/components/Problem';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import WhoWeHelp from '@/components/WhoWeHelp';
import SuspensionTypes from '@/components/SuspensionTypes';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <LogoBanner />
      <Problem />
      <Process />
      <WhyUs />
      <WhoWeHelp />
      <SuspensionTypes />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}