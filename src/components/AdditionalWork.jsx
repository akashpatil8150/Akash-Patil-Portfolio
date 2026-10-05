import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { majorAiProject, secondaryProjects } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { 
  FaGithub, FaExternalLinkAlt, FaFolderOpen, FaCube, 
  FaTag, FaBookOpen, FaCheckCircle, FaBrain, FaFilter 
} from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'

export default function AdditionalWork() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('All')

  // Filter out Talent AI from the general secondary list since it is showcased as Tier 2 Major Project
  const archiveProjects = secondaryProjects.filter((p) => p.id !== 'talent-ai')

  const categories = ['All', 'Computer Vision', 'NLP & LLMs', 'Conversational AI', 'Machine Learning']

  const filteredProjects = activeFilter === 'All'
    ? archiveProjects
    : archiveProjects.filter((p) => p.category === activeFilter)

  return (
    <section id="additional-work" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Heading */}
        <SectionHeading
          badge="Major Systems & Open-Source Archive"
          badgeColor="brand-3"
          title="Featured NLP System &"
          gradientTitle="Project Archive"
          description="High-impact NLP research applications, computer vision models, and interactive Hugging Face spaces built across my AI engineering journey."
          inView={inView}
        />

        {/* TIER 2: FEATURED MAJOR AI / NLP SYSTEM — TALENT AI */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard
              spotlightColor="rgba(168, 85, 247, 0.15)"
              borderColor="rgba(168, 85, 247, 0.4)"
              className="p-6 sm:p-8 lg:p-10 bg-panel/85 backdrop-blur-xl border-border-2 shadow-2xl relative overflow-hidden"
            >
              {/* Background accent glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-3/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Header & Badges */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-3/15 text-brand-3 border border-brand-3/30">
                        {majorAiProject.tierLabel}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-2/10 text-brand-2 border border-brand-2/20">
                        {majorAiProject.status}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono text-muted bg-white/[0.04] border border-white/10">
                        {majorAiProject.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-3xl p-2 rounded-2xl bg-panel-2 border border-border">
                        {majorAiProject.emoji}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-primary tracking-tight">
                          {majorAiProject.title}
                        </h3>
                        <p className="text-sm font-mono text-brand-3 mt-0.5">
                          {majorAiProject.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <a
                      href={majorAiProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-panel border border-border hover:border-border-2 text-primary text-xs font-semibold transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <FaGithub className="text-sm" />
                      <span>GitHub Code</span>
                    </a>

                    <a
                      href={majorAiProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-3 text-white text-xs font-bold hover:bg-brand-3/90 transition-all hover:scale-[1.02] shadow-lg shadow-brand-3/25 cursor-pointer"
                    >
                      <span>Live Hugging Face Space</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>

                {/* Description & Research Status Notice */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      {majorAiProject.description} Designed to eliminate manual bottlenecks for technical recruiters through automated profile parsing, candidate scoring against requirements, and algorithmic ranking.
                    </p>

                    {/* Research Paper Submission Banner (Section 8) */}
                    <div className="p-4 rounded-2xl bg-brand-3/10 border border-brand-3/30 flex items-start gap-3 text-xs sm:text-sm">
                      <FaBookOpen className="text-brand-3 text-sm shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white font-mono">
                          Academic Research Scope
                        </div>
                        <div className="text-primary/90 mt-0.5">
                          &ldquo;{majorAiProject.researchStatus}&rdquo;
                        </div>
                      </div>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['NLP', 'BERT', 'Flask', 'Python', 'Transformers', 'Streamlit', 'Hugging Face'].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-panel-2 border border-border text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities Checklist */}
                  <div className="lg:col-span-5 p-5 rounded-2xl bg-panel-2/80 border border-border/80 space-y-2.5">
                    <div className="text-[11px] font-mono font-bold uppercase text-muted tracking-wider mb-2">
                      Core System Capabilities
                    </div>
                    {majorAiProject.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-primary">
                        <FaCheckCircle className="text-brand-3 text-xs shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* TIER 3: ADDITIONAL ARCHIVED PROJECTS */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <FaFolderOpen className="text-brand text-base" />
                <span>Additional Projects Archive</span>
              </h4>
              <p className="text-xs text-muted mt-0.5">
                Experiments across computer vision, information extraction, conversational assistants, and agritech ML.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isSelected = activeFilter === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-brand/20 border border-brand/50 text-white shadow-sm'
                        : 'bg-panel border border-border text-muted hover:text-primary hover:border-border-2'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(79, 140, 255, 0.1)"
                    borderColor="rgba(79, 140, 255, 0.25)"
                    className="p-6 bg-panel/75 backdrop-blur-md shadow-xl flex flex-col justify-between h-full group hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Top Metadata */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl p-2 rounded-xl bg-panel-2 border border-border group-hover:scale-105 transition-transform">
                            {project.emoji}
                          </span>
                          <div>
                            <h3 className="text-base font-bold text-primary group-hover:text-brand transition-colors">
                              {project.title}
                            </h3>
                            <span className="text-[10px] font-mono text-muted uppercase">
                              {project.year} · {project.tags[0]}
                            </span>
                          </div>
                        </div>

                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-2/10 text-brand-2 border border-brand-2/20 shrink-0">
                          {project.status}
                        </span>
                      </div>

                      <p className="text-xs text-muted leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-panel-2 border border-border text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/70">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-white font-semibold transition-colors"
                      >
                        <FaGithub className="text-sm" />
                        <span>GitHub Code</span>
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand/15 border border-brand/30 text-white hover:bg-brand/25 text-xs font-semibold transition-all hover:scale-[1.03]"
                        >
                          <span>Live Demo</span>
                          <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                      )}
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
