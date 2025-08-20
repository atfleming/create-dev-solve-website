import React, { useState } from 'react';
import { Button } from './Button';
export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your newsletter service
    setIsSubmitted(true);
    setEmail('');
  };
  return <section id="contact" className="py-24 px-4 md:px-8 bg-[#0a2240] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-mono mb-6 text-white relative">
              <span className="text-[#3dff4f]">{'>'}</span> STAY CONNECTED
              <div className="h-1 w-24 bg-[#3dff4f] mt-2"></div>
            </h2>
            <p className="mb-6">
              Subscribe to our newsletter for exclusive insights, tips, and
              updates on creative solutions and agency workflow strategies.
            </p>
            {isSubmitted ? <div className="bg-[#3dff4f]/20 border border-[#3dff4f] p-4 rounded-lg">
                <p className="text-[#3dff4f] font-mono">
                  Thank you for subscribing! Check your inbox soon.
                </p>
              </div> : <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 font-mono text-[#3dff4f]">
                    {'>'} Enter your email:
                  </label>
                  <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-[#0a2240] border-2 border-[#3dff4f] p-3 text-white font-mono focus:outline-none focus:border-[#ff6b4a]" placeholder="you@example.com" />
                </div>
                <Button onClick={handleSubmit}>Subscribe</Button>
              </form>}
          </div>
          <div className="bg-[#f5e9d0] p-8 rounded-lg text-[#0a2240] font-mono relative hidden md:block">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#0a2240] flex items-center px-4">
              <div className="h-3 w-3 rounded-full bg-[#ff6b4a] mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-[#ffcc00] mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-[#3dff4f]"></div>
              <div className="ml-4 text-[#3dff4f] text-xs">newsletter.exe</div>
            </div>
            <div className="mt-6">
              <p className="text-[#0a2240] mb-2">{'>'} Why subscribe?</p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start">
                  <span className="text-[#ff6b4a] mr-2">*</span>
                  <span>Exclusive design tips and tricks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b4a] mr-2">*</span>
                  <span>Early access to new tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b4a] mr-2">*</span>
                  <span>Case studies from our projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b4a] mr-2">*</span>
                  <span>Industry insights and trends</span>
                </li>
              </ul>
              <p className="text-[#0a2240] mt-4 animate-pulse">{'>'} _</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};