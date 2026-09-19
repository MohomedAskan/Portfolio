import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Greeting Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          Hi, I'm{' '}
          <span className="font-serif italic font-extrabold text-brand-500 dark:text-brand-400">
            Askan!
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-base sm:text-xl font-medium text-slate-600 dark:text-slate-300 max-w-xl mx-auto"
        >
          UI/UX Designer & Aspiring UI/UX Engineer
        </motion.p>

        {/* Giant Background Marquee Typographic Banner + Centered Photo Card */}
        <div className="relative my-6 sm:my-8 flex items-center justify-center min-h-[320px] sm:min-h-[440px]">
          
          {/* Continuous Horizontal Marquee Display Typography */}
          <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden select-none">
            <motion.div
              className="flex whitespace-nowrap text-6xl sm:text-9xl lg:text-[13rem] font-black tracking-tighter text-slate-900 dark:text-white opacity-[0.95] uppercase leading-none font-sans"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 22,
                repeat: Infinity,
              }}
            >
              <span className="pr-12">MOHOMED ASKAN • UI/UX DESIGNER • MOHOMED ASKAN • UI/UX ENGINEER • </span>
              <span className="pr-12">MOHOMED ASKAN • UI/UX DESIGNER • MOHOMED ASKAN • UI/UX ENGINEER • </span>
            </motion.div>
          </div>

          {/* Centered Orange Photo Squircle Overlay */}
          <div className="relative z-10">
            <HeroVisual />
          </div>
        </div>

        {/* Supporting Narrative text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          I combine UX research, interaction design, visual systems, and front-end code to turn problems into simple, useful, and human digital experiences.
        </motion.p>

        {/* Bottom Rounded Pill CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-brand-500/40 hover:border-brand-500 hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white dark:hover:text-white transition-all duration-300 shadow-xl shadow-brand-500/10 active:scale-95"
          >
            <span>Let's Work Together!</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 active:scale-95"
          >
            <span>Explore My Work</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
