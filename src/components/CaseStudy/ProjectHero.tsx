import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Wrench, Smartphone, User, AlertCircle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="space-y-8">
      {/* Back to Work Link */}
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 hover:text-brand-500 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Projects</span>
      </Link>

      {/* Title & Headline */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.year}
          </span>
          <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {project.type}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Conceptual Project Disclaimer Notice */}
        {project.caseStudy?.disclaimer && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs sm:text-sm space-y-1">
            <div className="flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span>Project Nature & Disclaimer</span>
            </div>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300 text-xs">
              {project.caseStudy.disclaimer}
            </p>
          </div>
        )}
      </div>

      {/* Meta Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-sans">
        <div>
          <span className="text-slate-400 font-mono text-[11px] block uppercase mb-1">Role</span>
          <span className="font-bold text-slate-900 dark:text-white">{project.role}</span>
        </div>
        <div>
          <span className="text-slate-400 font-mono text-[11px] block uppercase mb-1">Timeline</span>
          <span className="font-bold text-slate-900 dark:text-white">{project.timeline}</span>
        </div>
        <div>
          <span className="text-slate-400 font-mono text-[11px] block uppercase mb-1">Platform</span>
          <span className="font-bold text-slate-900 dark:text-white">{project.platform}</span>
        </div>
        <div>
          <span className="text-slate-400 font-mono text-[11px] block uppercase mb-1">Tools</span>
          <span className="font-bold text-slate-900 dark:text-white">{project.tools.join(', ')}</span>
        </div>
      </div>

      {/* Large Hero Banner Canvas Placeholder */}
      <div className="relative aspect-[21/9] min-h-[300px] w-full rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center shadow-xl">
        <div className="absolute inset-0 grid-bg-subtle opacity-40" />
        
        <div className="relative text-center p-8 space-y-3 max-w-lg z-10">
          <div className="inline-flex p-3 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 mb-1">
            <Layers className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            {project.title} Case Study
          </h2>
          <p className="text-xs font-mono text-slate-400">
            Figma High-Fidelity Hero Showcase Banner
          </p>
          <div className="pt-2 flex justify-center gap-2">
            {project.tags.map(t => (
              <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
