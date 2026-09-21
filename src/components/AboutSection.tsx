import { Download } from 'lucide-react';

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
          <div className="lg:col-span-5 lg:pt-4">
            <article className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                Education
              </p>

              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white leading-snug">
                Bachelor of Technology in Multimedia and Web Technology
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                University of Vocational Technology (UoVT)
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                Sri Lanka · 2024 – Present
              </p>

              <div className="mt-6">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Relevant study areas
                </p>
                <ul className="mt-2.5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {educationAreas.map((area) => (
                    <li key={area} className="flex gap-2">
                      <span className="text-slate-300 dark:text-slate-600 select-none" aria-hidden>
                        ·
                      </span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}
