import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Lock } from 'lucide-react';
import { getAllProjects } from '../data/projects';

function projectThumbnailSrc(path: string) {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}

export function EngineerSection() {
  const projects = getAllProjects();

  return (
    <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-400">
              Portfolio
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Selected projects
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              UX and UI work from research and flows through to interface design — case studies for
              mobile apps and product concepts.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project, idx) => {
                const isComingSoon = project.status === 'coming-soon';
                const number = String(idx + 1).padStart(2, '0');

                const card = (
                  <motion.article
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`group flex flex-col h-full rounded-xl border border-slate-700/70 bg-slate-800/60 overflow-hidden transition-colors ${
                      isComingSoon
                        ? 'opacity-90'
                        : 'hover:border-brand-500/40 hover:bg-slate-800/90'
                    }`}
                  >
                    <div className="relative aspect-[16/10] bg-slate-900/80 border-b border-slate-700/60 overflow-hidden">
                      <img
                        src={projectThumbnailSrc(project.thumbnail)}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-[11px] font-semibold tabular-nums text-brand-400">
                        {number}
                      </span>
                      {isComingSoon && (
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-900/90 text-slate-300 border border-slate-600">
                          <Clock className="w-3 h-3" />
                          Coming soon
                        </span>
                      )}
                    </div>

                    <div className="p-4 flex flex-col flex-1 gap-2">
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                        <span>{project.category}</span>
                        <span className="tabular-nums">{project.year}</span>
                      </div>
                      <h3 className="text-base font-semibold text-white leading-snug group-hover:text-brand-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 flex-1">
                        {project.description}
                      </p>
                      {!isComingSoon ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-400 mt-1">
                          View case study
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 mt-1">
                          <Lock className="w-3 h-3" />
                          Case study in progress
                        </span>
                      )}
                    </div>
                  </motion.article>
                );

                if (isComingSoon) {
                  return <div key={project.id}>{card}</div>;
                }

                return (
  <a
    key={project.id}
    href={project.behanceUrl || '#'}
    target="_blank"
    rel="noopener noreferrer"
    className="block h-full"
  >
    {card}
  </a>
);
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
