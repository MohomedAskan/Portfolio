import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Lock, Clock, Sparkles, AlertCircle } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isComingSoon = project.status === 'coming-soon';
  const projectNumber = String(index + 1).padStart(2, '0');

  const cardContent = (
    <div className="project-card group relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-500/10">
      
      {/* Visual Thumbnail Area / Canvas Placeholder */}
      <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-850 overflow-hidden flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
        
        {/* Subtle grid background inside placeholder */}
        <div className="absolute inset-0 grid-bg-subtle opacity-60" />
        
        {/* Conceptual / Status Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm">
            {projectNumber}
          </span>

          <div className="flex items-center gap-2">
            {project.status === 'completed' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                Completed
              </span>
            )}
            {isComingSoon && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
            )}
          </div>
        </div>

        {/* Thumbnail Screen Mockup Representation */}
        <motion.div
          className="relative w-4/5 h-4/5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900 p-4 shadow-lg flex flex-col justify-between"
          whileHover={{ scale: isComingSoon ? 1 : 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <span className="text-[11px] font-mono text-slate-400 font-medium">
              {project.category}
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>

          <div className="my-auto space-y-2 py-2">
            <div className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
              {project.title}
            </div>
            <div className="h-2 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-2 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-500">
            <span>{project.type}</span>
            <span className="text-brand-500 font-semibold">{project.year}</span>
          </div>
        </motion.div>
      </div>

      {/* Card Content Information */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.timeline}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Special Disclaimer Label if concept project */}
          {project.caseStudy?.disclaimer && (
            <div className="flex items-start gap-1.5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-[11px] text-slate-600 dark:text-slate-400">
              <AlertCircle className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
              <span>Conceptual UX/UI redesign — personal project</span>
            </div>
          )}
        </div>

        {/* Card Footer: Tags & Action */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {!isComingSoon ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
              <Lock className="w-3 h-3" /> Coming Soon
            </span>
          )}
        </div>

      </div>
    </div>
  );

if (isComingSoon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={project.behanceUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full cursor-pointer"
      >
        {cardContent}
      </a>
    </motion.div>
  );
}