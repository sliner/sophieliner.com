import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { artworks } from '../src/data/paintings';

const Paintings: React.FC = () => {
  const paintingsList = artworks.filter(item => item.type === 'painting');
  const sculpturesList = artworks.filter(item => item.type === 'sculpture');

  const ArtworkGrid = ({ items, title }: { items: typeof artworks, title: string }) => (
    <div className="mb-24">
      <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-light mb-12 border-b border-gray-100 pb-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {items.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="aspect-square overflow-hidden flex items-center justify-center group">
              <Link 
                to={`/paintings/${item.id}`}
                className="w-full h-full"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>
            
            <div className="mt-6">
              <h2 className="text-lg tracking-[0.1em] text-[#555555] font-grotesk">
                {item.title}
              </h2>
              <p className="text-xs tracking-[0.1em] text-gray-400 mt-1 uppercase">
                {item.year}
                {item.medium && ` — ${item.medium}`}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-10 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <ArtworkGrid items={paintingsList} title="Paintings" />
        <ArtworkGrid items={sculpturesList} title="Sculptures" />
      </div>
    </div>
  );
};

export default Paintings;
