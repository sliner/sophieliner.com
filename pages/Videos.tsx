
import React, { useState } from 'react';
import { VIDEOS } from '../constants';

const Videos: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 grid-flow-row-dense">
        {VIDEOS.map((video, index) => (
          <div 
            key={video.id} 
            className={`group relative aspect-video w-full bg-black overflow-hidden shadow-sm transition-all duration-500 ${
              index % 5 === 0 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            {activeVideo === video.id ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                <img 
                  src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h2 className="text-white text-lg md:text-xl italic font-light tracking-tight mb-1">
                    {video.title}
                  </h2>
                  <p className="text-white/70 text-[10px] italic font-light tracking-widest uppercase">
                    {video.description}
                  </p>
                  <div className="mt-4 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;