import { motion } from 'framer-motion';
import { getAllProjects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function WorkPage() {
  const allProjects = getAllProjects();

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

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {allProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </motion.div>

      </div>
    </div>
  );
}
