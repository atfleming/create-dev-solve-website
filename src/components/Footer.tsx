import React from 'react';
import { GithubIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[#0a2240] text-white border-t-2 border-[#3dff4f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/Create_dev_solve_logo_1.png" alt="Create Dev Solve Logo" className="h-10 mr-3" />
              <span className="font-mono text-xl font-bold tracking-wider text-[#3dff4f]">
                create_dev_solve
              </span>
            </div>
            <p className="mb-4">
              Transforming ideas into impactful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#3dff4f] hover:text-[#ff6b4a] transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-[#3dff4f] hover:text-[#ff6b4a] transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-[#3dff4f] hover:text-[#ff6b4a] transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="#" className="text-[#3dff4f] hover:text-[#ff6b4a] transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold font-mono mb-4 text-[#3dff4f]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#3dff4f] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#3dff4f] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#3dff4f] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#3dff4f] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold font-mono mb-4 text-[#3dff4f]">
              Contact Us
            </h3>
            <p className="mb-2">hello@createdevsolve.com</p>
            <p className="mb-4">+1 (555) 123-4567</p>
            <p className="font-mono text-xs text-[#3dff4f]">
              {'>'} Let's create something amazing together.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#3dff4f]/30 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Create Dev Solve. All rights
            reserved.
          </p>
          <p className="mt-2 font-mono text-[#3dff4f]">
            {'<'} Built with passion and pixels {'>'}
          </p>
        </div>
      </div>
    </footer>;
};