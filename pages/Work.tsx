
import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-light tracking-tight text-[#555555]">Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group cursor-crosshair">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="mt-4 flex justify-between items-baseline">
              <h3 className="text-sm font-medium tracking-wide uppercase text-[#555555]">{project.title}</h3>
              <span className="text-xs text-gray-400 font-light italic">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
