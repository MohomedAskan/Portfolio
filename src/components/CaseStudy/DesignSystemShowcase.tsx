import type { DesignSystemData } from '../../types/project';
import { Palette, Type, Layers } from 'lucide-react';

interface DesignSystemShowcaseProps {
  data: DesignSystemData;
}

export function DesignSystemShowcase({ data }: DesignSystemShowcaseProps) {
  return (
    <div className="space-y-8 p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
      
      {/* 1. Color Palette */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          <Palette className="w-4 h-4 text-brand-500" />
          <span>Color Tokens</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.colors.map((c) => (
            <div
              key={c.name}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2"
            >
              <div
                className="h-12 rounded-lg w-full shadow-inner border border-slate-900/10"
                style={{ backgroundColor: c.hex }}
              />
              <div className="space-y-0.5">
                <div className="font-bold text-xs text-slate-900 dark:text-white">
                  {c.name}
                </div>
                <div className="font-mono text-[11px] text-brand-600 dark:text-brand-400">
                  {c.hex}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                  {c.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Typography Tokens */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          <Type className="w-4 h-4 text-brand-500" />
          <span>Typography Tokens</span>
        </div>

        <div className="space-y-2">
          {data.typography.map((t) => (
            <div
              key={t.role}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
            >
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">
                  {t.role}
                </span>
                <span className="text-slate-500 text-[11px]">
                  {t.usage}
                </span>
              </div>
              <div className="font-mono text-brand-600 dark:text-brand-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded">
                {t.font} ({t.size})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Component Tokens */}
      <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          <Layers className="w-4 h-4 text-brand-500" />
          <span>Core UI Components</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {data.components.map((comp) => (
            <span
              key={comp}
              className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {comp}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
