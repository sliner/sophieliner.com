
import React from 'react';

const Film: React.FC = () => {
  const filmProjects = [
    {
      title: "C'est pas moi",
      director: "Leos Carax",
      imageUrl: "https://fr.web.img3.acsta.net/img/3f/5c/3f5c0dcf63383cbe8df5174e25b0521a.jpg",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-[40vh] flex flex-col justify-start animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="space-y-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-light mb-12">Film</h2>
        
        <div className="space-y-12">
          <div>
            <h1 className="text-2xl md:text-3xl font-light text-[#555555] tracking-tight mb-16">
              Documentaliste / Archival Producer
            </h1>
            
            <div className="space-y-16 pl-4 md:pl-12 border-l border-gray-50">
              {filmProjects.map((project, index) => (
                <div key={index} className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl italic font-light text-[#555555] tracking-tight">
                      {project.title}
                    </h3>
                    <div>
                      <p className="text-sm md:text-base font-light text-gray-400 tracking-wide">
                        {project.director}
                      </p>
                      <p className="text-xs text-gray-300 italic font-light tracking-widest uppercase mt-1">
                        {project.year}
                      </p>
                    </div>
                  </div>
                  
                  <div className="max-w-md overflow-hidden bg-gray-50 shadow-sm transition-opacity duration-700 hover:opacity-95">
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} - ${project.director}`} 
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;