import React, { useState } from 'react';
export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [{
    id: 'all',
    name: 'ALL'
  }, {
    id: 'web',
    name: 'WEB'
  }, {
    id: 'design',
    name: 'DESIGN'
  }, {
    id: 'branding',
    name: 'BRANDING'
  }];
  const projects = [{
    id: 1,
    title: 'Retro Gaming Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A nostalgic gaming platform with pixel-perfect UI'
  }, {
    id: 2,
    title: 'Neon Brand Identity',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Vibrant brand identity for a tech startup'
  }, {
    id: 3,
    title: 'Pixel Art Gallery',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Digital gallery showcasing pixel art masterpieces'
  }, {
    id: 4,
    title: 'Synthwave Music App',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Retro-futuristic music streaming application'
  }, {
    id: 5,
    title: 'Arcade Brand System',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Complete brand system for a modern arcade'
  }, {
    id: 6,
    title: 'Digital Playground',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Interactive digital experience with retro elements'
  }];
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.category === activeCategory);
  return <section id="portfolio" className="py-24 px-4 md:px-8 bg-[#f5e9d0]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-mono mb-12 text-[#0a2240] relative">
          <span className="text-[#ff6b4a]">{'>'}</span> OUR WORK
          <div className="h-1 w-24 bg-[#3dff4f] mt-2"></div>
        </h2>
        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
          {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`font-mono py-2 px-4 border-2 transition-all ${activeCategory === category.id ? 'bg-[#0a2240] text-[#3dff4f] border-[#0a2240]' : 'bg-transparent text-[#0a2240] border-[#0a2240] hover:bg-[#0a2240]/10'}`}>
              {category.name}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="group relative overflow-hidden border-2 border-[#0a2240] bg-[#0a2240]">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2240] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white font-mono mb-2">
                  {project.title}
                </h3>
                <p className="text-[#3dff4f]">{project.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-[#3dff4f] text-[#0a2240] px-2 py-1 text-xs font-mono uppercase">
                {project.category}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};