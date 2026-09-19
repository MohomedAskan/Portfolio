import { motion } from 'framer-motion';

// Tool data with SVG icons embedded inline
const designTools = [
  {
    name: 'Figma',
    category: 'Design Tool',
    description: 'Primary design tool for UI/UX wireframes, prototypes, and design systems.',
    color: '#F24E1E',
    bg: 'from-[#F24E1E]/10 to-[#FF7262]/5',
    border: 'border-[#F24E1E]/20',
    hoverBorder: 'hover:border-[#F24E1E]/60',
    icon: (
      <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M19 28.5C19 24.358 22.358 21 26.5 21C30.642 21 34 24.358 34 28.5C34 32.642 30.642 36 26.5 36C22.358 36 19 32.642 19 28.5Z" fill="#1ABCFE"/>
        <path d="M4 43.5C4 39.358 7.358 36 11.5 36H19V43.5C19 47.642 15.642 51 11.5 51C7.358 51 4 47.642 4 43.5Z" fill="#0ACF83"/>
        <path d="M19 6V21H26.5C30.642 21 34 17.642 34 13.5C34 9.358 30.642 6 26.5 6H19Z" fill="#FF7262"/>
        <path d="M4 13.5C4 17.642 7.358 21 11.5 21H19V6H11.5C7.358 6 4 9.358 4 13.5Z" fill="#F24E1E"/>
        <path d="M4 28.5C4 32.642 7.358 36 11.5 36H19V21H11.5C7.358 21 4 24.358 4 28.5Z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: 'Miro',
    category: 'Collaboration Tool',
    description: 'Used for user journey mapping, brainstorming, and collaborative UX workshops.',
    color: '#FFDD00',
    bg: 'from-[#FFDD00]/10 to-[#FFB300]/5',
    border: 'border-[#FFDD00]/30',
    hoverBorder: 'hover:border-[#FFDD00]/70',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="64" height="64" rx="12" fill="#FFDD00"/>
        <path d="M47.2 16H39.6L33.6 30.4L27.2 16H19.6L13.6 48H21.2L24.8 30.8L30.4 44H36.8L42.4 30.8L46 48H53.6L47.2 16Z" fill="#050038"/>
      </svg>
    ),
  },
  {
    name: 'Framer',
    category: 'Prototyping Tool',
    description: 'Advanced interactive prototyping with realistic animations and component states.',
    color: '#0099FF',
    bg: 'from-[#0099FF]/10 to-[#00CCFF]/5',
    border: 'border-[#0099FF]/20',
    hoverBorder: 'hover:border-[#0099FF]/60',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M4 0H20V8H12L20 16H12V24L4 16V8H12L4 0Z" fill="#0099FF"/>
      </svg>
    ),
  },
  {
    name: 'HTML',
    category: 'Markup Language',
    description: 'Semantic structure and accessibility-first markup for every web interface.',
    color: '#E34F26',
    bg: 'from-[#E34F26]/10 to-[#EF652A]/5',
    border: 'border-[#E34F26]/20',
    hoverBorder: 'hover:border-[#E34F26]/60',
    icon: (
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2V0zM206 23h-20.3V0h63.7v23H229v46h-23V23zM259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-15.8 24.5h-.4l-15.8-24.5V69h-22.8V0zM348.7 0h23v46.2h32.6V69h-55.6V0z" fill="#E34F26"/>
        <path d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512z" fill="#E44D26"/>
        <path d="M256 480.5V131h148.3L376 447z" fill="#F1662A"/>
        <path d="M142.1 183.2h113.8v42.1H185.2l2.9 30.6h113.6v42H172.5zM188.7 351.5h42l2.8 32.3 22.5 6.1 22.5-6.1 2.9-32.3h41.9l-5.8 65.1-61.5 17-61.5-17z" fill="#EBEBEB"/>
        <path d="M256 225.3h111.7l-3 30.6H256V225.3zM256 351.5h-.6l-22.5 6.1-1.4-16.3h-42l2.8 31.5 63.1 17.6v-38.9z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'CSS',
    category: 'Styling Language',
    description: 'Visual styling, responsive layouts, and smooth animations for polished UIs.',
    color: '#1572B6',
    bg: 'from-[#1572B6]/10 to-[#33A9DC]/5',
    border: 'border-[#1572B6]/20',
    hoverBorder: 'hover:border-[#1572B6]/60',
    icon: (
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512z" fill="#1572B6"/>
        <path d="M256 480.5l120-33.2 25.8-289.3H256z" fill="#33A9DC"/>
        <path d="M256 268.4H142.1l2.9 30.6h111v-.1z" fill="#fff"/>
        <path d="M256 361.5l-.4.1-56.7-15.3-3.6-40.5h-42l7.1 79.6 95.2 26.4.4-.1z" fill="#EBEBEB"/>
        <path d="M142.1 183.2H256v-42.1H142.1z" fill="#fff"/>
        <path d="M256 183.2h113.8l-3.7 42.1H256z" fill="#33A9DC"/>
        <path d="M256 299H367l-3.6 40.1-107.4 29.8z" fill="#33A9DC"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'Programming Language',
    description: 'Interactive logic, DOM manipulation, and front-end component functionality.',
    color: '#F7DF1E',
    bg: 'from-[#F7DF1E]/10 to-[#F0DB4F]/5',
    border: 'border-[#F7DF1E]/30',
    hoverBorder: 'hover:border-[#F7DF1E]/70',
    icon: (
      <svg viewBox="0 0 630 630" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="630" height="630" fill="#f7df1e"/>
        <path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93.05 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 37.93 30.45 19.3 0 31.45-7.59 31.45-37.1v-201.3h59.2v202.1c0 61.1-35.86 88.8-88.2 88.8-47.24 0-74.6-24.53-88.81-54.075z"/>
      </svg>
    ),
  },
];

const additionalTools = [
  { name: 'Adobe Photoshop', tag: 'Image Editing' },
  { name: 'Adobe Premiere Pro', tag: 'Video Editing' },
  { name: 'Adobe After Effects', tag: 'Motion Design' },
  { name: 'Git & GitHub', tag: 'Version Control' },
  { name: 'React', tag: 'UI Library' },
  { name: 'React Native', tag: 'Mobile Dev' },
  { name: 'VS Code', tag: 'Code Editor' },
  { name: 'Notion', tag: 'Documentation' },
];

export function StackPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      {/* Header */}
      <section className="pt-36 pb-16 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono uppercase tracking-widest font-semibold mb-6">
              MY STACK
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
              Tools I Work With
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              A carefully chosen set of design and development tools that power my workflow — from research and ideation all the way to interactive prototypes and production code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Tool Cards */}
      <section className="pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${tool.bg} border ${tool.border} ${tool.hoverBorder} bg-white dark:bg-slate-900/60 backdrop-blur-sm transition-all duration-300 cursor-default shadow-sm hover:shadow-2xl`}
              >
                {/* Top row: icon + category */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 shadow-sm">
                    {tool.icon}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ color: tool.color, background: `${tool.color}18` }}
                  >
                    {tool.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-brand-500 transition-colors duration-200">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tool.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${tool.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tools */}
      <section className="pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-slate-200/60 dark:border-slate-800 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                ALSO IN MY TOOLKIT
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                Supporting Tools
              </h2>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {additionalTools.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group flex items-center gap-2 px-5 py-3 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all duration-200 cursor-default"
                >
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {t.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-500 font-mono">
                    · {t.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
