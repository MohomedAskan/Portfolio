import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  getProjectBySlug,
  getAdjacentProjects
} from '../data/projects';
import { ProjectHero } from '../components/CaseStudy/ProjectHero';
import { UserFlowDisplay } from '../components/CaseStudy/UserFlowDisplay';
import { DesignSystemShowcase } from '../components/CaseStudy/DesignSystemShowcase';
import { ResponsiveShowcase } from '../components/CaseStudy/ResponsiveShowcase';
import { ProjectNavigation } from '../components/CaseStudy/ProjectNavigation';
import { Lightbox } from '../components/Lightbox';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Maximize2,
  Sparkles,
  Search,
  User,
  GitBranch,
  Layers,
  Smartphone,
  SlidersHorizontal,
  Compass,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = getProjectBySlug(slug || '');
  const { prevProject, nextProject } = getAdjacentProjects(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project || !project.caseStudy) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Case Study Coming Soon
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          This project case study is currently being documented or is in progress.
        </p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-semibold text-sm hover:bg-brand-600 transition-colors"
        >
          Return to Work
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;

  // Flatten all screen images for the lightbox viewer
  const allScreens = (cs.finalScreens || []).flatMap((sec) => sec.screens);

  const openLightboxAt = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* 1. Case Study Hero & Meta */}
        <ProjectHero project={project} />

        {/* 2. Overview & Problem */}
        <section className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
              01 • CONTEXT & PROBLEM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The Challenge & Problem Exploration
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-4">
            <h3 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wide">
              Problem Statement
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {cs.problem}
            </p>
          </div>
        </section>

        {/* 3. Goals */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
              02 • OBJECTIVES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Project Goals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cs.goals.map((goal, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3 shadow-xs"
              >
                <div className="p-1.5 rounded-lg bg-brand-500/10 text-brand-500 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {goal}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Research & Analysis */}
        {cs.research && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                03 • RESEARCH & INSIGHTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {cs.research.type}
              </h2>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {cs.research.overview}
            </p>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Key Analytical Insights
              </h3>
              <div className="space-y-2">
                {cs.research.keyInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Search className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Explicit Assumptions list if present */}
            {cs.assumptions && cs.assumptions.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <span className="font-mono text-slate-500 font-bold uppercase tracking-wider block">
                  Initial Conceptual Assumptions
                </span>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                  {cs.assumptions.map((asm, idx) => (
                    <li key={idx}>{asm}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* 5. Persona */}
        {cs.persona && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                04 • PERSONA & USER CONTEXT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {cs.persona.title}
              </h2>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center font-bold text-lg">
                    {cs.persona.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {cs.persona.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      {cs.persona.roleQuote}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-500/10 text-brand-500 self-start sm:self-auto">
                  {cs.persona.isConceptual ? 'Conceptual Persona' : 'Validated Persona'}
                </span>
              </div>

              <blockquote className="text-base italic text-slate-700 dark:text-slate-300 border-l-2 border-brand-500 pl-4 py-1">
                "{cs.persona.quote}"
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-red-500 font-bold">
                    Pain Points & Friction
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {cs.persona.painPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-emerald-500 font-bold">
                    Goals & Needs
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {cs.persona.goalsNeeds.map((need, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500">•</span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 6. Information Architecture */}
        {cs.informationArchitecture && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                05 • INFORMATION ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Content & Navigation Hierarchy
              </h2>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {cs.informationArchitecture.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cs.informationArchitecture.nodes.map((node, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1"
                >
                  <div className="text-xs font-mono text-brand-500 font-bold">
                    Level 0{idx + 1}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {node.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {node.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. User Flow */}
        {cs.userFlow && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                06 • USER FLOW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Primary Task Journey
              </h2>
            </div>

            <UserFlowDisplay
              steps={cs.userFlow.steps}
              description={cs.userFlow.description}
            />
          </section>
        )}

        {/* 8. Wireframes */}
        {cs.wireframes && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                07 • WIREFRAMES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Low-Fidelity Exploration
              </h2>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {cs.wireframes.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cs.wireframes.items.map((wf, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3"
                >
                  <div className="aspect-[4/3] rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex flex-col justify-center items-center p-4 text-center">
                    <span className="text-xs font-mono text-brand-500 font-bold mb-1">{wf.tag}</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{wf.title}</span>
                    <span className="text-[10px] text-slate-400 mt-2">Wireframe Canvas</span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {wf.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {wf.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. Design System */}
        {cs.designSystem && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                08 • DESIGN SYSTEM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Visual Tokens & Component Architecture
              </h2>
            </div>

            <DesignSystemShowcase data={cs.designSystem} />
          </section>
        )}

        {/* 10. High-Fidelity UI Screens Gallery */}
        {cs.finalScreens && cs.finalScreens.length > 0 && (
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                09 • HIGH-FIDELITY UI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Final Interface Screens
              </h2>
            </div>

            {cs.finalScreens.map((sec, secIdx) => (
              <div key={secIdx} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {sec.sectionTitle}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {sec.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {sec.screens.map((screen, sIdx) => {
                    const globalIdx = sIdx; // index inside allScreens
                    return (
                      <motion.div
                        key={sIdx}
                        onClick={() => openLightboxAt(globalIdx)}
                        className="group relative cursor-pointer rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-4 space-y-3 hover:border-brand-500/50 transition-all shadow-sm hover:shadow-xl"
                      >
                        <div className="aspect-[4/3] w-full rounded-xl bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-hidden relative">
                          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                            <span>{screen.tag || 'Figma Screen'}</span>
                            <Maximize2 className="w-4 h-4 text-brand-500 group-hover:scale-110 transition-transform" />
                          </div>

                          <div className="my-auto text-center space-y-2">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white">
                              {screen.title}
                            </h4>
                            <p className="text-xs text-brand-600 dark:text-brand-400 font-mono">
                              {screen.imagePlaceholderTitle}
                            </p>
                          </div>

                          <div className="text-[10px] font-mono text-slate-400 text-center">
                            Click to expand full screen
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          {screen.caption}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* 11. Responsive Design */}
        {cs.responsiveDesign && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                10 • RESPONSIVE ADAPTATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Responsive Design Strategy
              </h2>
            </div>

            <ResponsiveShowcase
              description={cs.responsiveDesign.description}
              breakpoints={cs.responsiveDesign.breakpoints}
            />
          </section>
        )}

        {/* 12. Design Decisions */}
        {cs.designDecisions && cs.designDecisions.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                11 • RATIONALE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Key Design Decisions
              </h2>
            </div>

            <div className="space-y-4">
              {cs.designDecisions.map((dd, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3"
                >
                  <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-xs font-mono text-brand-500 font-bold">
                      Decision {idx + 1}:
                    </span>
                    {dd.decision}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-300 pt-1">
                    <div>
                      <span className="font-mono text-slate-400 block mb-0.5">REASONING</span>
                      <p>{dd.reason}</p>
                    </div>
                    <div>
                      <span className="font-mono text-brand-500 block mb-0.5">EXPECTED UX IMPACT</span>
                      <p>{dd.uxImpact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 13. Outcome & Reflection */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
              12 • SUMMARY & REFLECTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Outcome & Takeaways
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase font-mono">
                Deliverables & Improvements
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {cs.outcome.created.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase font-mono">
                Key Learnings
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {cs.reflection.learned}
              </p>
              <div className="pt-2 text-xs text-slate-500">
                <strong>Future iterations:</strong> {cs.reflection.improvement}
              </div>
            </div>
          </div>
        </section>

        {/* 14. Next / Prev Project Switcher */}
        <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />

      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        isOpen={lightboxOpen}
        images={allScreens}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
