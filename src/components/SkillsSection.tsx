import { motion } from 'framer-motion';
import { Layout, Palette, Wrench, Code2 } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      category: 'UX Design & Research',
      icon: Layout,
      description: 'Understanding users and structuring intuitive pathways.',
      skills: [
        'User Research',
        'Personas',
        'User Flows',
        'Information Architecture',
        'Wireframing',
        'Usability',
        'Prototyping',
        'Interaction Design',
      ],
    },
    {
      category: 'UI & Visual Design',
      icon: Palette,
      description: 'Creating accessible, polished visual components and layouts.',
      skills: [
        'Visual Design',
        'Design Systems',
        'Responsive Design',
        'Typography',
        'Color Theory',
        'Components',
        'Accessibility Awareness',
      ],
    },
    {
      category: 'Design Tools',
      icon: Wrench,
      description: 'Software for prototyping, visual editing, and motion design.',
      skills: [
        'Figma',
        'Framer',
        'Photoshop',
        'Premiere Pro',
        'After Effects',
      ],
    },
    {
      category: 'Front-End Development',
      icon: Code2,
      description: 'Translating design concepts into clean code components.',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'React Native',
        'Git / GitHub',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
            CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Tools
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            A practical toolkit bridging human-centered UX thinking, visual craftsmanship, and front-end code implementation.
          </p>
        </div>

        {/* Skill Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-brand-500/10 text-brand-500">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-500/50 transition-colors shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
