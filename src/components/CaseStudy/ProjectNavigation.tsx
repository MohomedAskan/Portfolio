import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectNavigationProps {
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  return (
    <div className="pt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Previous Project */}
        {prevProject ? (
          <Link
            to={`/work/${prevProject.slug}`}
            className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 transition-all space-y-2"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-brand-500 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Previous Project</span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">
              {prevProject.title}
            </div>
            <div className="text-xs text-slate-500 font-mono">
              {prevProject.category}
            </div>
          </Link>
        ) : <div />}

        {/* Next Project */}
        {nextProject ? (
          <Link
            to={`/work/${nextProject.slug}`}
            className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 transition-all text-right space-y-2"
          >
            <div className="flex items-center justify-end gap-2 text-xs font-mono text-slate-400 group-hover:text-brand-500 transition-colors">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">
              {nextProject.title}
            </div>
            <div className="text-xs text-slate-500 font-mono">
              {nextProject.category}
            </div>
          </Link>
        ) : <div />}

      </div>
    </div>
  );
}
