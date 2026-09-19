import { GraduationCap, MapPin, Calendar, BookOpen, Download } from 'lucide-react';

interface AboutSectionProps {
  onOpenResumeModal?: () => void;
}

export function AboutSection({ onOpenResumeModal: _onOpenResumeModal }: AboutSectionProps) {
  const educationAreas = [
    'UI/UX Design',
    'Human Computer Interaction (HCI)',
    'Web Development',
    'Mobile Application Development',
    'Multimedia Systems',
    'Cloud Applications',
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative Bio */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              About Me
            </h1>



            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I'm <strong className="text-slate-900 dark:text-white font-semibold">Mohomed Askan</strong>, a Web and Creative Media student at the University of Vocational Technology (UoVT) in Sri Lanka.
              </p>
              <p>
                My interest in design started with visual creativity and gradually developed into a deeper interest in how people interact with digital products.
              </p>
              <p>
                Today, I focus on combining UX thinking, visual design, and front-end knowledge to create interfaces that are useful, intuitive, and accessible.
              </p>
              <p>
                I'm currently looking for opportunities where I can learn from experienced designers, contribute to real products, and grow as a UI/UX professional.
              </p>
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <a
                href="/Mohomed_Askan_Resume.pdf"
                download="Mohomed_Askan_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-slate-700 transition-all duration-200 shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    EDUCATION
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    University Education
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  Bachelor of Technology in Multimedia and Web Technology
                </h4>
                <div className="text-sm font-medium text-brand-600 dark:text-brand-400">
                  University of Vocational Technology (UoVT)
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Sri Lanka
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" /> 2024 – Present
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Relevant Study Areas:
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {educationAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
