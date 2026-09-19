import { Smartphone, Tablet, Monitor } from 'lucide-react';

interface ResponsiveShowcaseProps {
  description: string;
  breakpoints: { device: string; behavior: string }[];
}

export function ResponsiveShowcase({ description, breakpoints }: ResponsiveShowcaseProps) {
  const getIcon = (device: string) => {
    if (device.toLowerCase().includes('mobile')) return Smartphone;
    if (device.toLowerCase().includes('tablet')) return Tablet;
    return Monitor;
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {breakpoints.map((bp) => {
          const IconComponent = getIcon(bp.device);
          return (
            <div
              key={bp.device}
              className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-500">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {bp.device}
                </h4>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {bp.behavior}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
