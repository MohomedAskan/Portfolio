import { motion } from 'framer-motion';
import { Search, Compass, GitBranch, Layout, CheckCircle2 } from 'lucide-react';

export function DesignProcess() {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      summary: 'Research users & context',
      description: 'Desk research, competitive auditing, and analyzing context to discover real friction points.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Define',
      summary: 'Identify problems & goals',
      description: 'Synthesizing insights into problem statements, user needs, and measurable UX goals.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Structure',
      summary: 'Information architecture & flows',
      description: 'Mapping out user journeys, navigation hierarchies, and screen flow pathways.',
      icon: GitBranch,
    },
    {
      number: '04',
      title: 'Design',
      summary: 'Wireframes, UI & prototypes',
      description: 'Iterating from low-fidelity layouts to accessible high-fidelity components and interactions.',
      icon: Layout,
    },
    {
      number: '05',
      title: 'Validate',
      summary: 'Test, iterate & improve',
      description: 'Reviewing accessibility contrast, gathering peer feedback, and refining interaction details.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
            WORKFLOW & METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My design process
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            A flexible framework I apply to structure human-centered digital product explorations.
          </p>
        </div>

        {/* Process Steps Horizon / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <IconComp className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {step.title}
                  </h3>

                  <div className="text-xs font-mono text-brand-600 dark:text-brand-400 mb-3 font-medium">
                    {step.summary}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
