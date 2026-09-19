import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: { title: string; caption: string; tag?: string; imagePlaceholderTitle?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({ isOpen, images, currentIndex, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/95 backdrop-blur-md">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Arrow */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Arrow */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Screen Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full max-h-[85vh] bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 font-bold text-white">
              <Maximize2 className="w-4 h-4 text-brand-500" />
              {currentImg.title}
            </span>
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Screenshot Display Placeholder Canvas */}
          <div className="p-8 flex-1 min-h-[350px] flex items-center justify-center bg-slate-950/80">
            <div className="w-full max-w-xl aspect-[16/10] rounded-xl border border-slate-700 bg-slate-900 p-6 flex flex-col justify-between shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-brand-400 font-semibold">
                  {currentImg.tag || 'UI High-Fi Frame'}
                </span>
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
              </div>

              <div className="my-auto py-6 text-center space-y-3">
                <p className="text-base sm:text-lg font-bold text-slate-200">
                  {currentImg.imagePlaceholderTitle || currentImg.title}
                </p>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  High-resolution Figma design screen. Replaceable in <code className="font-mono text-brand-400">/src/data/projects.ts</code>.
                </p>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800">
                <span>Vector Scalable</span>
                <span>WCAG 2.1 Compliant</span>
              </div>
            </div>
          </div>

          {/* Footer Caption */}
          <div className="p-4 bg-slate-900 border-t border-slate-800 text-center text-xs text-slate-300">
            {currentImg.caption}
          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
