import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { paintings } from '../src/data/paintings';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const PaintingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const currentIndex = paintings.findIndex(p => p.id === Number(id));
  const painting = paintings[currentIndex];

  const prevPainting = currentIndex > 0 ? paintings[currentIndex - 1] : null;
  const nextPainting = currentIndex < paintings.length - 1 ? paintings[currentIndex + 1] : null;

  if (!painting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Painting not found</p>
          <Link to="/paintings" className="text-sm uppercase tracking-widest text-[#555555] hover:underline">
            Back to gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-10 px-4 md:px-10"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => navigate('/paintings')}
              className="flex items-center text-gray-400 hover:text-[#555555] transition-colors text-xs uppercase tracking-[0.2em]"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Gallery
            </button>
          </div>

          <button 
            onClick={() => navigate('/paintings')}
            className="text-gray-400 hover:text-[#555555] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-9 flex items-center gap-2 md:gap-8 relative group">
            {/* Left Arrow (Desktop) */}
            <div className="hidden md:flex w-12 justify-center shrink-0">
              {prevPainting && (
                <button 
                  onClick={() => navigate(`/paintings/${prevPainting.id}`)}
                  className="text-gray-300 hover:text-[#555555] transition-colors"
                >
                  <ChevronLeft size={48} strokeWidth={1} />
                </button>
              )}
            </div>

            {/* Image Container */}
            <div className="flex-1 flex justify-center relative">
              {/* Mobile Navigation Overlays */}
              <div className="absolute inset-0 flex md:hidden z-10">
                <div 
                  className="w-1/2 h-full cursor-pointer" 
                  onClick={() => prevPainting && navigate(`/paintings/${prevPainting.id}`)}
                />
                <div 
                  className="w-1/2 h-full cursor-pointer" 
                  onClick={() => nextPainting && navigate(`/paintings/${nextPainting.id}`)}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={painting.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4 }}
                  src={painting.imageUrl}
                  alt={painting.title}
                  className="max-w-full max-h-[85vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>

            {/* Right Arrow (Desktop) */}
            <div className="hidden md:flex w-12 justify-center shrink-0">
              {nextPainting && (
                <button 
                  onClick={() => navigate(`/paintings/${nextPainting.id}`)}
                  className="text-gray-300 hover:text-[#555555] transition-colors"
                >
                  <ChevronRight size={48} strokeWidth={1} />
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              key={`info-${painting.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-2xl tracking-[0.1em] text-[#555555] font-grotesk mb-2">
                {painting.title}
              </h1>
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
                {painting.year}
              </p>
              
              <div className="space-y-4 border-t border-gray-100 pt-6">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-1">Medium</h3>
                  <p className="text-sm text-[#555555]">{painting.medium || 'Oil on wood'}</p>
                </div>
                
                {painting.description && (
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-1">Description</h3>
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {painting.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaintingDetail;
