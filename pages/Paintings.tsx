import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { paintings } from '../src/data/paintings';

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
                <Link 
                  to={`/paintings/${painting.id}`}
                  className="w-full h-full"
                >
                  <img
                    src={painting.imageUrl}
                    alt={painting.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </Link>
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
