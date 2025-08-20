import React from 'react';
export const About = () => {
  return <section id="about" className="py-24 px-4 md:px-8 bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-press mb-6 relative">
              <span className="text-[#ff6b4a]">{'>'}</span> ABOUT US
              <div className="h-1 w-24 bg-pastel-green mt-2"></div>
            </h2>
            <p className="mb-4 text-lg text-[#bfe9d9]">
              Create Dev Solve is a creative development studio at the
              intersection of design and technology.
            </p>
            <p className="mb-4 text-[#cdefdc]">
              We're a team of designers, developers, and creative thinkers who
              are passionate about crafting digital experiences that solve real
              problems.
            </p>
            <p className="text-[#cdefdc]">
              Our approach combines pixel-perfect design with clean, efficient
              code to deliver solutions that not only look great but perform
              exceptionally.
            </p>
          </div>
          <div className="bg-[#071020] p-8 rounded-lg text-white font-vt relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#0a2240] flex items-center px-4">
              <div className="h-3 w-3 rounded-full bg-[#ff6b4a] mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-[#ffcc00] mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-[#3dff4f]"></div>
            </div>
            <div className="mt-6">
              <p className="text-[#3dff4f] mb-2">{'>'} We believe in:</p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start">
                  <span className="text-[#ff6b4a] mr-2">*</span>
                  <span>Creative problem-solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b4a] mr-2">*</span>
                  <span>Clean, efficient code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b4a] mr-2">*</span>
                  <span>User-centered design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b4a] mr-2">*</span>
                  <span>Continuous innovation</span>
                </li>
              </ul>
              <p className="text-[#3dff4f] mt-4 animate-pulse">{'>'} _</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};