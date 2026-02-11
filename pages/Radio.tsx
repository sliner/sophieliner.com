
import React from 'react';

const Radio: React.FC = () => {
  const projects = [
    {
      title: "Les envahisseurs avec Alfred de Montesquiou",
      url: "https://www.radiofrance.fr/franceculture/podcasts/serie-les-envahisseurs",
      year: "2025"
    },
    {
      title: "Les batailles qui ont changé le monde avec Jean Lebrun",
      url: "https://www.radiofrance.fr/franceculture/podcasts/serie-les-batailles-navales-qui-ont-change-le-monde",
      year: "2024"
    },
    {
      title: "Les discours qui ont changé le monde avec Didier Leschi et Gérard Courtois",
      url: "https://www.radiofrance.fr/franceculture/podcasts/serie-les-discours-qui-ont-change-le-monde",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-[40vh] flex flex-col justify-start animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="space-y-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-light mb-12">Radio</h2>
        
        <div className="space-y-12">
          <div>
            <h1 className="text-2xl md:text-3xl font-light text-[#555555] tracking-tight mb-16">
              Attachée de production & Archives / Production & Archives
            </h1>
            
            <div className="space-y-12 pl-4 md:pl-12 border-l border-gray-50">
              {projects.map((project, index) => (
                <div key={index} className="space-y-3">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl font-light text-gray-400 tracking-tight hover:text-[#555555] transition-colors block italic"
                  >
                    {project.title}
                  </a>
                  <p className="text-xs text-gray-300 italic font-light tracking-widest uppercase">
                    {project.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radio;