import { motion } from 'framer-motion';
import { ArrowRight, Code, Component, Smartphone, Monitor } from 'lucide-react';

export function EngineerSection() {
  const pipelineSteps = [
    { title: 'Figma', detail: 'UX research, wireframes & screen design' },
    { title: 'Design System', detail: 'Tokens, typography, colors & states' },
    { title: 'Code', detail: 'React, TypeScript & Tailwind CSS components' },
    { title: 'Product', detail: 'Responsive, accessible web & mobile apps' },
  ];

  return (
    <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-brand-500/20 text-brand-400 border border-brand-500/30">
              <Code className="w-3.5 h-3.5" />
              UI/UX ENGINEER PERSPECTIVE
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Design that can be built.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I enjoy understanding how designs translate into real interfaces. My front-end knowledge helps me think about responsive behavior, components, states, accessibility, and collaboration with developers.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'React Native'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Pipeline Visual Diagram */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-2xl space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest pb-2 border-b border-slate-700">
                Design to Code Translation Flow
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {pipelineSteps.map((step, idx) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/60 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-brand-400 font-bold">
                        0{idx + 1}
                      </span>
                      {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-normal">
                        {step.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
