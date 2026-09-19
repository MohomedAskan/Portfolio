import { motion } from 'framer-motion';
import { Compass, Target, Eye } from 'lucide-react';

export function Introduction() {
  const principles = [
    {
      number: '01',
      title: 'Understand the user',
      description: 'Empathy comes first. By researching needs, contexts, and friction points, I ground design decisions in real human behavior.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Solve the right problem',
      description: 'Focusing on core goals before jumping into high-fidelity UI ensures that solutions solve fundamental user and business friction.',
      icon: Target,
    },
    {
      number: '03',
      title: 'Design with clarity',
      description: 'Simplicity, transparent visual hierarchy, and accessible design systems make digital interfaces effortless to navigate.',
      icon: Eye,
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
            CORE PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Designing with purpose.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I believe good design is not just about how an interface looks. It is about understanding people, identifying problems, and creating experiences that make everyday tasks easier.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-500/5"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-slate-300 dark:text-slate-700 group-hover:text-brand-500 transition-colors">
                    {p.number}
                  </span>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
