import { motion } from 'framer-motion';

export function HeroVisual() {
  return (
    <div className="relative w-64 sm:w-80 lg:w-96 aspect-square mx-auto flex items-center justify-center my-4 sm:my-8">
      {/* Outer vibrant orange glow */}
      <div className="absolute inset-0 bg-brand-500/30 rounded-[2.5rem] blur-3xl -z-10" />

      {/* Main Squircle Vibrant Orange Photo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
        className="relative w-full h-full rounded-[2.5rem] bg-gradient-to-b from-brand-500 via-brand-500 to-brand-600 p-2 sm:p-3 shadow-2xl shadow-brand-500/40 overflow-hidden group"
      >
        <div className="w-full h-full rounded-[2rem] overflow-hidden relative flex items-end justify-center bg-brand-500">
          {/* Askan's Portrait Photo */}
          <img
            src="/assets/askan-profile.png"
            alt="Mohomed Askan"
            className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Subtle bottom shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
