import React from 'react';
import { motion } from 'motion/react';

interface Painting {
  id: number;
  title: string;
  year: string;
  imageUrl: string;
  galleryUrl?: string;
  medium?: string;
}

const paintings: Painting[] = [
  {
    id: 1,
    title: "Tung Tung Tung Sahur",
    year: "2025",
    imageUrl: "https://i.imgur.com/zz0aIuA.jpeg",
    galleryUrl: "https://imgur.com/gallery/tung-tung-zz0aIuA",
    medium: "Oil on wood"
  },
  {
    id: 2,
    title: "Brr Brr Patapim",
    year: "2025",
    imageUrl: "https://i.imgur.com/anaxF4g.jpeg",
    medium: "Oil on wood"
  },
  {
    id: 3,
    title: "Boneca Ambalabu",
    year: "2025",
    imageUrl: "https://i.imgur.com/HU6i23j.jpeg",
    galleryUrl: "https://imgur.com/gallery/boneca-HU6i23j",
    medium: "Oil on wood"
  },
  {
    id: 4,
    title: "Big white pigeon",
    year: "2024",
    imageUrl: "https://i.imgur.com/7t5Ly2s.jpeg",
    galleryUrl: "https://imgur.com/gallery/big-white-pigeon-7t5Ly2s",
    medium: "Oil on wood"
  },
  {
    id: 5,
    title: "Beanstalk's cherry",
    year: "2025",
    imageUrl: "https://i.imgur.com/4MmdbQ4.jpeg",
    medium: "Oil on wood"
  }
];

const Paintings: React.FC = () => {
  return (
    <div className="min-h-screen pt-10 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {paintings.map((painting) => (
            <motion.div 
              key={painting.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center group">
                {painting.galleryUrl ? (
                  <a 
                    href={painting.galleryUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full h-full"
                  >
                    <img
                      src={painting.imageUrl}
                      alt={painting.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                ) : (
                  <img
                    src={painting.imageUrl}
                    alt={painting.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg tracking-[0.1em] text-[#555555] font-grotesk">
                  {painting.title}
                </h2>
                <p className="text-xs tracking-[0.1em] text-gray-400 mt-1 uppercase">
                  {painting.year}
                  {painting.medium && ` — ${painting.medium}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paintings;
