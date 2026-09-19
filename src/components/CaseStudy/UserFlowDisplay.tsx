import { motion } from 'framer-motion';
import { ArrowRight, GitCommit } from 'lucide-react';
import type { UserFlowStep } from '../../types/project';

interface UserFlowDisplayProps {
  steps: UserFlowStep[];
  description: string;
}

export function UserFlowDisplay({ steps, description }: UserFlowDisplayProps) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>

      {/* Visual Pipeline Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => (
          <motion.div
            key={step.stepNumber}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3 relative group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400">
                Step {step.stepNumber}
              </span>
              <GitCommit className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
            </div>

            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              {step.title}
            </h4>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {step.detail}
            </p>

            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 dark:text-slate-700">
                ➔
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
