
import React from 'react';

const Mix: React.FC = () => {
  const mixItems = [
    {
      title: "Summer (sad) mix",
      url: "https://soundcloud.com/eve_ontrak/earth-is-burning-summer-mix",
      description: "Earth is burning.",
      duration: "42:15",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-[40vh] flex flex-col justify-start animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="space-y-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-light mb-12">Mix</h2>
        
        <div className="space-y-12">
          <div>
            <h1 className="text-2xl md:text-3xl font-light text-[#555555] tracking-tight mb-16">
              Music mixes
            </h1>
            
            <div className="space-y-12 pl-4 md:pl-12 border-l border-gray-50">
              {mixItems.map((item, index) => (
                <div key={index} className="space-y-3 group">
                  {item.url ? (
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg md:text-xl font-light text-gray-400 tracking-tight hover:text-[#555555] transition-colors block italic underline-offset-4 decoration-gray-100 hover:decoration-[#555555]"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <h3 className="text-lg md:text-xl font-light text-gray-400 tracking-tight italic">
                      {item.title}
                    </h3>
                  )}
                  
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-light text-gray-300">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-300 italic font-light tracking-widest uppercase">
                      {item.duration} / {item.year}
                    </p>
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

export default Mix;