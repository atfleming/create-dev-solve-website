import React from 'react';
import { Button } from './Button';
export const Hero = () => {
  return <section className="relative bg-[#0a2240] text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full grid grid-cols-12 grid-rows-12">
          {Array.from({
          length: 144
        }).map((_, i) => <div key={i} className="border border-[#3dff4f]/20"></div>)}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-press mb-6">
              <span className="text-[#3dff4f]">CREATE.</span>
              <br />
              <span className="text-[#3dff4f]">DEV.</span>
              <br />
              <span className="text-[#3dff4f]">SOLVE.</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg font-vt">
              Where creativity meets code: explore our work, get fresh insights,
              and join the digital problem-solvers community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#portfolio" variant="primary">View Portfolio</Button>
              <Button href="#contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img src="/Create_dev_solve_logo_1.png" alt="Create Dev Solve" className="w-full h-full object-contain animate-pulse" />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-[#3dff4f]"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-[#ff6b4a]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};