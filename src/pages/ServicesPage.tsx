import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers, Smartphone, Code2, Palette, Search, ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Search,
    title: 'UX Research & Strategy',
    description:
      'I conduct user interviews, competitive audits, and heuristic evaluations to uncover real pain points. Research findings are translated into actionable insights that inform every design decision.',
    deliverables: ['User Interviews', 'Competitive Analysis', 'Personas & Journey Maps', 'Information Architecture'],
    color: '#A259FF',
    bg: 'from-[#A259FF]/10 to-[#A259FF]/5',
    border: 'border-[#A259FF]/20',
    hoverBorder: 'hover:border-[#A259FF]/50',
  },
  {
    number: '02',
    icon: Layers,
    title: 'UI/UX Design',
    description:
      'From low-fidelity wireframes to polished high-fidelity screens — I design clean, accessible, and visually strong interfaces using Figma with structured component libraries and design tokens.',
    deliverables: ['Wireframes', 'High-Fidelity UI', 'Design Systems', 'Component Libraries'],
    color: '#F24E1E',
    bg: 'from-[#F24E1E]/10 to-[#FF7262]/5',
    border: 'border-[#F24E1E]/20',
    hoverBorder: 'hover:border-[#F24E1E]/50',
  },
  {
    number: '03',
    icon: Smartphone,
    title: 'Prototyping & Interaction',
    description:
      'Interactive prototypes that simulate real product behavior. Using Figma and Framer, I create clickable flows and micro-interactions that communicate design intent clearly to developers and stakeholders.',
    deliverables: ['Clickable Prototypes', 'Micro-interactions', 'Animated Flows', 'User Testing Assets'],
    color: '#0099FF',
    bg: 'from-[#0099FF]/10 to-[#33AAFF]/5',
    border: 'border-[#0099FF]/20',
    hoverBorder: 'hover:border-[#0099FF]/50',
  },
  {
    number: '04',
    icon: Palette,
    title: 'Visual & Brand Design',
    description:
      'Crafting visual identities, illustration systems, and brand-aligned UI that create memorable user experiences. I balance aesthetics with function for interfaces that feel both beautiful and purposeful.',
    deliverables: ['Brand UI Kits', 'Iconography', 'Color Systems', 'Typography Scale'],
    color: '#0ACF83',
    bg: 'from-[#0ACF83]/10 to-[#0ACF83]/5',
    border: 'border-[#0ACF83]/20',
    hoverBorder: 'hover:border-[#0ACF83]/50',
  },
  {
    number: '05',
    icon: Code2,
    title: 'Front-End Development',
    description:
      'Bridging the gap between design and code. I implement UI components in HTML, CSS, and JavaScript (React), ensuring that designs are brought to life with precision and responsiveness.',
    deliverables: ['HTML / CSS / JS', 'React Components', 'Responsive Layouts', 'Design-to-Code Handoff'],
    color: '#F7DF1E',
    bg: 'from-[#F7DF1E]/10 to-[#F7DF1E]/5',
    border: 'border-[#F7DF1E]/30',
    hoverBorder: 'hover:border-[#F7DF1E]/60',
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      {/* Hero Header */}
      <section className="pt-36 pb-16 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono uppercase tracking-widest font-semibold mb-6">
              SERVICES
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
              What I Can Do{' '}
              <span className="font-serif italic text-brand-500 dark:text-brand-400">For You</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              End-to-end design and development services — from initial research and UX strategy to polished UI and front-end implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className={`group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${service.bg} bg-white dark:bg-slate-900/50 border ${service.border} ${service.hoverBorder} transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left: number + icon */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-24 shrink-0">
                    <span className="text-5xl font-black font-mono text-slate-200 dark:text-slate-800 group-hover:text-slate-300 dark:group-hover:text-slate-700 transition-colors leading-none">
                      {service.number}
                    </span>
                    <div
                      className="p-3 rounded-2xl"
                      style={{ background: `${service.color}18`, color: service.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Center: content */}
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors duration-200">
                      {service.title}
                    </h2>
                    <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Right: deliverables */}
                  <div className="lg:w-56 shrink-0">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 block">
                      Deliverables
                    </span>
                    <div className="flex flex-wrap lg:flex-col gap-2">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: service.color }}
                          />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-brand-500 to-brand-600 text-center overflow-hidden"
          >
            {/* Background blob */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's work together
              </h2>
              <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed">
                Have a project in mind? I'd love to hear about it and explore how we can create something meaningful together.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-600 font-bold text-sm hover:bg-slate-100 transition-all duration-200 shadow-xl active:scale-95"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
