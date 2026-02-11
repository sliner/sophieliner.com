
import React from 'react';
import { VIDEOS } from '../constants';

const Videos: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {VIDEOS.map((video) => (
        <div key={video.id} className="space-y-4">
          <h2 className="text-xl md:text-2xl italic font-light text-[#555555] tracking-tight">
            {video.title}
          </h2>
          
          <div className="relative aspect-video w-full bg-black overflow-hidden shadow-sm">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}?modestbranding=1&rel=0&showinfo=0&controls=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="pt-1">
            <p className="text-xs text-[#555555] italic font-light tracking-widest uppercase">
              {video.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;