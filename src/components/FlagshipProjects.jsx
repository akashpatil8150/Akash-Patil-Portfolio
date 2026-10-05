import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { flagshipProjects } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import ArchitectureFlow from './ui/ArchitectureFlow'
import { 
  FaRobot, FaNetworkWired, FaMicrochip, FaCheckCircle, 
  FaShieldAlt, FaLayerGroup, FaBolt, FaLock, 
  FaCogs, FaDatabase, FaExchangeAlt, FaListOl
} from 'react-icons/fa'

export default function FlagshipProjects() {
  // Single source of truth for the selected project
  const [activeProject, setActiveProject] = useState('travel')
  const [activeTab, setActiveTab] = useState('architecture')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Find active project data by ID, slug, or legacyId
  const currentProject = flagshipProjects.find(
    (p) => p.id === activeProject || p.slug === activeProject || p.legacyId === activeProject
  ) || flagshipProjects[0]

  const colorVariants = {
    brand: {
      pillActive: 'bg-brand/15 border-brand text-brand shadow-lg shadow-brand/15',
      badge: 'bg-brand/10 text-brand border-brand/25',
      glow: 'shadow-brand/20',
      border: 'border-brand/50',
      accentText: 'text-brand',
      accentBg: 'bg-brand',
      spotlight: 'rgba(79, 140, 255, 0.12)',
      spotlightBorder: 'rgba(79, 140, 255, 0.35)',
      flowCircle: 'bg-brand text-white',
    },
    'brand-2': {
      pillActive: 'bg-brand-2/15 border-brand-2 text-brand-2 shadow-lg shadow-brand-2/15',
      badge: 'bg-brand-2/10 text-brand-2 border-brand-2/25',
      glow: 'shadow-brand-2/20',
      border: 'border-brand-2/50',
      accentText: 'text-brand-2',
      accentBg: 'bg-brand-2',
      spotlight: 'rgba(0, 212, 170, 0.12)',
      spotlightBorder: 'rgba(0, 212, 170, 0.35)',
      flowCircle: 'bg-brand-2 text-bg',
    },
    'brand-3': {
      pillActive: 'bg-brand-3/15 border-brand-3 text-brand-3 shadow-lg shadow-brand-3/15',
      badge: 'bg-brand-3/10 text-brand-3 border-brand-3/25',
      glow: 'shadow-brand-3/20',
      border: 'border-brand-3/50',
      accentText: 'text-brand-3',
      accentBg: 'bg-brand-3',
      spotlight: 'rgba(168, 85, 247, 0.12)',
      spotlightBorder: 'rgba(168, 85, 247, 0.35)',
      flowCircle: 'bg-brand-3 text-white',
    }
  }

  const currentTheme = colorVariants[currentProject.color] || colorVariants.brand

  const handleSelectProject = (projectId) => {
    setActiveProject(projectId)
  }

  return (
    <section id="projects" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-brand/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-3/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Heading */}
        <SectionHeading
          badge="Flagship Architecture"
          badgeColor="brand"
          title="Flagship"
          gradientTitle="AI Systems"
          description="Three enterprise-grade architectures engineered during my Python AI Internship at WERQ Labs Pvt. Ltd. Click any project card below to immediately view its full architecture, pipeline, and case study."
          inView={inView}
        />

        {/* Flagship Project Switcher Cards (3 Cards) */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
          role="tablist"
          aria-label="Flagship projects selection"
        >
          {flagshipProjects.map((p) => {
            const isSelected = p.id === currentProject.id
            const theme = colorVariants[p.color] || colorVariants.brand

            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={0}
                onClick={() => handleSelectProject(p.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleSelectProject(p.id)
                  }
                }}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 relative group cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-brand/40 ${
                  isSelected
                    ? `bg-panel-2 ${theme.border} shadow-xl ${theme.glow} translate-y-[-2px]`
                    : 'bg-panel/70 border-border hover:border-border-2 hover:bg-panel'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl p-1.5 rounded-xl bg-panel border border-border/70 group-hover:scale-105 transition-transform">
                      {p.emoji}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted group-hover:text-primary transition-colors">
                      {p.category}
                    </span>
                  </div>
                  {isSelected ? (
                    <span className={`w-2.5 h-2.5 rounded-full ${theme.accentBg} animate-ping`} />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-border" />
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-white transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-muted mt-1.5 line-clamp-2 leading-relaxed">
                  {p.tagline}
                </p>

                <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-dim">{p.timeline}</span>
                  <span className={`font-semibold ${isSelected ? theme.accentText : 'text-muted'}`}>
                    {isSelected ? 'ACTIVE CASE STUDY' : 'VIEW CASE STUDY →'}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Flagship Case Study Details Panel */}
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <SpotlightCard
            spotlightColor={currentTheme.spotlight}
            borderColor={currentTheme.spotlightBorder}
            className="p-6 sm:p-8 lg:p-10 bg-panel/85 backdrop-blur-xl border-border-2 shadow-2xl space-y-8"
          >
              {/* Header & Metadata (100% dynamic from currentProject) */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${currentTheme.badge}`}>
                      {currentProject.enterpriseLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/[0.04] border border-white/10 text-muted">
                      {currentProject.timeline}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/[0.04] border border-white/10 text-muted">
                      {currentProject.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary tracking-tight">
                    {currentProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted max-w-3xl leading-relaxed">
                    {currentProject.tagline}
                  </p>
                </div>

                {/* Confidentiality & Architecture Standard */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-panel-2 border border-border text-xs font-mono text-muted">
                    <FaLock className="text-accent text-xs shrink-0" />
                    <span>Enterprise System · Production Scope</span>
                  </div>
                </div>
              </div>

              {/* System Highlights Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-b border-border/70">
                {currentProject.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-panel-2/60 border border-border/80 flex items-center gap-2.5 text-xs font-medium text-primary"
                  >
                    <FaCheckCircle className={`shrink-0 text-xs ${currentTheme.accentText}`} />
                    <span className="truncate">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 pt-2 pb-2">
                {[
                  { key: 'architecture', label: 'Interactive Architecture', icon: FaNetworkWired },
                  { key: 'problem-solution', label: 'Problem vs Solution', icon: FaExchangeAlt },
                  { key: 'contributions', label: 'My Direct Contributions', icon: FaCogs },
                  { key: 'pipeline', label: '6-Stage System Pipeline', icon: FaListOl },
                  { key: 'tech', label: 'Stack & Components', icon: FaMicrochip },
                ].map((t) => {
                  const TabIcon = t.icon
                  const isActive = activeTab === t.key
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setActiveTab(t.key)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all duration-150 cursor-pointer ${
                        isActive
                          ? currentTheme.pillActive
                          : 'bg-panel-2 border border-border text-muted hover:text-primary hover:border-border-2'
                      }`}
                    >
                      <TabIcon className="text-xs" />
                      <span>{t.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Tab Contents (100% bound to currentProject) */}
              <div className="min-h-[380px]">
                {/* TAB 1: Interactive Architecture Flow */}
                {activeTab === 'architecture' && (
                  <motion.div
                    key={`tab-arch-${currentProject.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArchitectureFlow 
                      key={currentProject.id} 
                      project={currentProject} 
                      colorTheme={currentTheme} 
                    />
                  </motion.div>
                )}

                {/* TAB 2: Problem vs Solution */}
                {activeTab === 'problem-solution' && (
                  <motion.div
                    key={`tab-ps-${currentProject.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="p-6 rounded-2xl bg-panel-2 border border-red-500/20 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span>The Engineering Problem</span>
                        </div>
                        <span className="text-[10px] font-mono uppercase text-dim">Pre-System State</span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        {currentProject.problem}
                      </p>
                      <div className="pt-3 text-xs text-dim font-mono border-t border-border/80">
                        Primary Bottlenecks: Fragmented state, manual delays, latency spikes, and hallucination risks.
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-panel-2 border border-brand-2/20 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-brand-2 font-bold text-sm">
                          <span className="w-2.5 h-2.5 rounded-full bg-brand-2/80" />
                          <span>The Production AI Solution</span>
                        </div>
                        <span className="text-[10px] font-mono uppercase text-dim">Architected System</span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        {currentProject.solution}
                      </p>
                      <div className="pt-3 text-xs text-dim font-mono border-t border-border/80">
                        Engineering Guarantees: Deterministic bounds, sub-second execution, and structured observability.
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: Direct Technical Deliverables */}
                {activeTab === 'contributions' && (
                  <motion.div
                    key={`tab-contrib-${currentProject.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                        <FaShieldAlt className={currentTheme.accentText} />
                        <span>Akash's Direct Engineering Deliverables</span>
                      </h4>
                      <span className="text-[11px] font-mono text-dim">
                        Codebase Scope & Responsibilities
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentProject.contributions.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-panel-2 border border-border flex items-start gap-3.5 hover:border-border-2 transition-colors"
                        >
                          <div className={`w-7 h-7 rounded-lg ${currentTheme.badge} flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold`}>
                            0{idx + 1}
                          </div>
                          <p className="text-xs sm:text-sm text-muted leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* TAB 4: 6-Stage System Pipeline */}
                {activeTab === 'pipeline' && (
                  <motion.div
                    key={`tab-pipe-${currentProject.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                        <FaLayerGroup className={currentTheme.accentText} />
                        <span>Chronological Pipeline Stages</span>
                      </h4>
                      <span className="text-[11px] font-mono text-dim">
                        End-to-End Execution Flow
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentProject.architecture.map((stage, idx) => (
                        <div
                          key={stage.step}
                          className="p-5 rounded-2xl bg-panel-2 border border-border hover:border-border-2 transition-all flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-black ${currentTheme.flowCircle}`}>
                              {stage.step}
                            </span>
                            <span className="text-[10px] uppercase font-mono text-dim tracking-wider">
                              Phase {idx + 1}
                            </span>
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-primary">
                              {stage.title}
                            </h5>
                            <p className="text-xs text-muted mt-2 leading-relaxed">
                              {stage.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* TAB 5: Stack & Components */}
                {activeTab === 'tech' && (
                  <motion.div
                    key={`tab-tech-${currentProject.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                      <FaMicrochip className={currentTheme.accentText} />
                      <span>Components & Technology Stack</span>
                    </h4>

                    <div className="flex flex-wrap gap-2.5">
                      {currentProject.tech.map((tool) => (
                        <div
                          key={tool}
                          className="px-4 py-2.5 rounded-xl bg-panel-2 border border-border hover:border-brand/40 transition-colors flex items-center gap-2 text-xs font-mono font-semibold text-primary"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${currentTheme.accentBg}`} />
                          {tool}
                        </div>
                      ))}
                    </div>

                    <div className="p-5 rounded-2xl bg-panel-2 border border-border/80 text-xs text-muted leading-relaxed">
                      <span className="font-semibold text-primary">Architecture Standard: </span>
                      Engineered around asynchronous Python 3.11+, typed Pydantic models, robust exception handling, and modular service interfaces ready for containerized enterprise deployment.
                    </div>
                  </motion.div>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
      </div>
    </section>
  )
}
