import React from 'react';
import { Code, Palette, Lightbulb, Rocket } from 'lucide-react';
export const Services = () => {
  const services = [{
    icon: <Palette size={32} className="text-[#ff6b4a]" />,
    title: 'Creative Direction',
    description: 'We craft unique visual identities and creative strategies that help your brand stand out.'
  }, {
    icon: <Code size={32} className="text-[#3dff4f]" />,
    title: 'Development',
    description: 'Our expert developers build robust, scalable solutions using cutting-edge technologies.'
  }, {
    icon: <Lightbulb size={32} className="text-[#ffcc00]" />,
    title: 'Innovation',
    description: 'We explore new ideas and technologies to keep your digital presence ahead of the curve.'
  }, {
    icon: <Rocket size={32} className="text-[#ff6b4a]" />,
    title: 'Launch & Growth',
    description: 'We help you launch your product and implement strategies for continuous growth.'
  }];
  return <section id="services" className="py-24 px-4 md:px-8 bg-[#0a2240] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-mono mb-12 text-center text-white relative">
          <span className="text-[#3dff4f]">{'>'}</span> OUR SERVICES
          <div className="h-1 w-24 bg-[#3dff4f] mt-2 mx-auto"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="bg-[#0a2240] border-2 border-[#3dff4f]/30 p-6 rounded-lg hover:border-[#3dff4f] transition-all duration-300 group">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold font-mono mb-3 text-[#3dff4f] group-hover:text-[#ff6b4a] transition-colors">
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};