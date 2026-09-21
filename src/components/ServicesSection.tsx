import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';

export function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-600 dark:text-brand-400">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What I can help with
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Research, interface design, prototyping, and front-end work — from early discovery through
              build-ready handoff.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors shrink-0"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`group p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${service.bg} bg-white dark:bg-slate-900/40 border ${service.border} ${service.hoverBorder} transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-xl shrink-0"
                    style={{ background: `${service.color}18`, color: service.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-semibold tabular-nums text-slate-400 dark:text-slate-500">
                        {service.number}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 pt-1">
                      {service.deliverables.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
