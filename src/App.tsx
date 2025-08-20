import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-[#f5e9d0] min-h-screen w-full text-[#0a2240] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Newsletter />
      </main>
      <Footer />
    </div>;
}