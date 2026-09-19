import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, GraduationCap, Code, Sparkles, MapPin, Mail, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Document Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Modal Header Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-500" />
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  Mohomed Askan — Resume Preview
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/Mohomed_Askan_Resume.pdf"
                  download="Mohomed_Askan_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-500 text-white hover:bg-brand-600 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Content View */}
            <div className="p-8 space-y-8 max-h-[80vh] overflow-y-auto font-sans">
              
              {/* Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  Mohomed Askan
                </h1>
                <p className="text-base font-semibold text-brand-600 dark:text-brand-400 mt-1">
                  UI/UX Designer & Aspiring UI/UX Engineer
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mt-3 font-mono">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Sri Lanka</span>
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> askan.uiux@gmail.com</span>
                  <span className="flex items-center gap-1"><Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/mohomed-askan</span>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                  SUMMARY
                </h2>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  I'm Mohomed Askan, an aspiring UI/UX Designer and UI/UX Engineer focused on creating simple, useful, and intuitive digital experiences. I combine UX thinking, visual design, interaction design, and front-end knowledge to turn problems into practical digital experiences.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                  EDUCATION
                </h2>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      Bachelor of Technology in Web and Creative Media
                    </h3>
                    <span className="text-xs font-mono text-brand-500">2024 – Present</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    University of Vocational Technology (UoVT), Sri Lanka
                  </p>
                  <p className="text-xs text-slate-500 pt-1">
                    Areas of Study: UI/UX Design, HCI, Web Development, Mobile Application Development, Multimedia, Cloud Applications.
                  </p>
                </div>
              </div>

              {/* Key Skills */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                  CORE SKILLS & TOOLS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl space-y-1">
                    <span className="font-bold text-slate-900 dark:text-white">UX & Product Design</span>
                    <p className="text-slate-600 dark:text-slate-400">User Research, Wireframing, Information Architecture, User Flows, Prototyping, Usability Testing</p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl space-y-1">
                    <span className="font-bold text-slate-900 dark:text-white">UI & Front-End</span>
                    <p className="text-slate-600 dark:text-slate-400">Figma, Framer, Design Systems, HTML, CSS, JavaScript, React, React Native, Accessibility</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                  KEY UX PROJECTS
                </h2>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl space-y-1">
                    <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                      <span>Holidays — Mobile Hotel Booking App Concept</span>
                      <span className="font-mono text-slate-400">2025</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Designed a streamlined 3-step search and booking flow for accommodation discovery using Figma.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl space-y-1">
                    <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                      <span>PickMe Ride Booking Redesign (Conceptual)</span>
                      <span className="font-mono text-slate-400">2025</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Conceptual UX redesign focusing on pickup pin adjustments, fare transparency, and driver license plate contrast.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
