import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-[#0a2240] text-[#3dff4f] border-b-2 border-[#3dff4f] px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Create_dev_solve_logo_1.png" alt="Create Dev Solve Logo" className="h-10 mr-3" />
          <span className="font-mono text-xl font-bold tracking-wider">
            create_dev_solve
          </span>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-[#3dff4f]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 font-press items-center">
          <li className="hover:text-[#ff6b4a] transition-colors">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-[#ff6b4a] transition-colors">
            <a href="#services">SERVICES</a>
          </li>
          <li className="hover:text-[#ff6b4a] transition-colors">
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li className="hover:text-[#ff6b4a] transition-colors">
            <a href="#newsletter">NEWSLETTER</a>
          </li>
          <li className="hover:text-[#ff6b4a] transition-colors">
            <a href="#contact">CONTACT</a>
          </li>
          <li className="hover:text-[#ff6b4a] transition-colors group">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1 relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GITHUB
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6b4a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a2240] border-t-2 border-[#3dff4f] mt-4">
          <ul className="flex flex-col font-mono">
            <li className="py-3 px-4 border-b border-[#3dff4f]/30 hover:bg-[#0a2240]/80">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                ABOUT
              </a>
            </li>
            <li className="py-3 px-4 border-b border-[#3dff4f]/30 hover:bg-[#0a2240]/80">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>
                SERVICES
              </a>
            </li>
            <li className="py-3 px-4 border-b border-[#3dff4f]/30 hover:bg-[#0a2240]/80">
              <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                PORTFOLIO
              </a>
            </li>
            <li className="py-3 px-4 border-b border-[#3dff4f]/30 hover:bg-[#0a2240]/80">
              <a href="#newsletter" onClick={() => setIsMenuOpen(false)}>
                NEWSLETTER
              </a>
            </li>
            <li className="py-3 px-4 border-b border-[#3dff4f]/30 hover:bg-[#0a2240]/80">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </a>
            </li>
            <li className="py-3 px-4 hover:bg-[#0a2240]/80 group">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 relative" onClick={() => setIsMenuOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GITHUB
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6b4a] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};