import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllProjects } from '../data/projects';
import type { FilterCategory } from '../types/project';
import { ProjectCard } from '../components/ProjectCard';
import { Filter } from 'lucide-react';

export function WorkPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All');
  const allProjects = getAllProjects();

  const filterCategories: FilterCategory[] = [
    'All',
    'UX/UI',
    'Product Design',
    'Mobile',
    'Web',
    'Concept',
  ];

  const filteredProjects = allProjects.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.filterCategory.includes(selectedFilter);
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
            WORK ARCHIVE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            All Projects & Case Studies
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Exploring real-world user problems, mobile interfaces, conceptual redesigns, and component design systems.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {filterCategories.map((cat) => {
              const active = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                    active
                      ? 'text-white dark:text-slate-900 font-bold shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono text-slate-400">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
