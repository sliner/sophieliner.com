
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-6">
        <h2 className="text-3xl font-light tracking-tight text-[#555555]">{"contact <3"}</h2>
        
        {/* Email directly below title */}
        <div>
          <a 
            href="mailto:sophieliner@gmail.com" 
            className="text-xl font-light text-[#555555] tracking-tight hover:text-gray-400 transition-colors"
          >
            sophieliner@gmail.com
          </a>
        </div>

        {/* Container for image and social links below it */}
        <div className="pt-10 space-y-6 max-w-xs">
          {/* The Image (Full Color) */}
          <div className="w-full overflow-hidden">
            <a href="https://ibb.co/6041VMdc" target="_blank" rel="noopener noreferrer" className="block">
              <img 
                src="https://i.ibb.co/v4JQgFtC/Screenshot-2026-02-11-at-09-24-51.png" 
                alt="Sophie Liner Contact Visual" 
                className="w-full h-auto opacity-100 hover:opacity-90 transition-all duration-700 ease-in-out"
              />
            </a>
          </div>

          {/* Social Links in one line below the image */}
          <div className="flex flex-row items-center justify-center space-x-8">
            <a 
              href="https://www.linkedin.com/in/sophieliner/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-light text-[#555555] tracking-tight hover:text-gray-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.youtube.com/@eve_ontrak" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-light text-[#555555] tracking-tight hover:text-gray-400 transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;