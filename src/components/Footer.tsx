import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-white dark:bg-dark-bg border-t border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-200/60 dark:border-slate-800/60">
          
          {/* Brand */}
          <div className="space-y-1">
            <Link to="/" className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
              ASKAN<span className="text-brand-500">.</span>
            </Link>
            <p className="text-xs font-mono text-slate-500">
              UI/UX Designer • UI/UX Engineer
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
            <Link to="/about" className="hover:text-brand-500 transition-colors">
              About
            </Link>
            <Link to="/stack" className="hover:text-brand-500 transition-colors">
              Stack
            </Link>
            <Link to="/services" className="hover:text-brand-500 transition-colors">
              Services
            </Link>
            <Link to="/work" className="hover:text-brand-500 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-brand-500 transition-colors">
              Contact
            </Link>
            <a
              href="https://linkedin.com/in/mohomed-askan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-brand-500 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="mailto:askan.uiux@gmail.com"
              className="inline-flex items-center gap-1 hover:text-brand-500 transition-colors"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Mohomed Askan. All rights reserved.
          </div>
          <div>
            Based in Sri Lanka • Built with React & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
