import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { flagshipProjects } from '../data/projects'
import { 
  FaRobot, FaNetworkWired, FaMicrochip, FaCheckCircle, 
  FaShieldAlt, FaLayerGroup, FaBolt, FaLock, FaExternalLinkAlt,
  FaCogs, FaDatabase, FaExchangeAlt, FaClock
} from 'react-icons/fa'
import { 
  SiFastapi, SiPython, SiMongodb, SiPytorch, SiDocker 
} from 'react-icons/si'

export default function FlagshipProjects() {
  const [selectedId, setSelectedId] = useState(flagshipProjects[0].id)
  const [activeTab, setActiveTab] = useState('architecture') // 'architecture' | 'problem-solution' | 'contributions' | 'tech'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const activeProject = flagshipProjects.find(p => p.id === selectedId) || flagshipProjects[0]

  const colorVariants = {
    brand: {
      pillActive: 'bg-brand/15 border-brand text-brand shadow-lg shadow-brand/10',
      badge: 'bg-brand/10 text-brand border-brand/25',
      glow: 'shadow-brand/20',
      border: 'border-brand/40',
      accentText: 'text-brand',
      accentBg: 'bg-brand',
      gradient: 'from-brand/20 via-brand/5 to-transparent',
      flowLine: 'bg-brand/40',
      flowCircle: 'bg-brand text-white',
    },
    'brand-2': {
      pillActive: 'bg-brand-2/15 border-brand-2 text-brand-2 shadow-lg shadow-brand-2/10',
      badge: 'bg-brand-2/10 text-brand-2 border-brand-2/25',
      glow: 'shadow-brand-2/20',
      border: 'border-brand-2/40',
      accentText: 'text-brand-2',
      accentBg: 'bg-brand-2',
      gradient: 'from-brand-2/20 via-brand-2/5 to-transparent',
      flowLine: 'bg-brand-2/40',
      flowCircle: 'bg-brand-2 text-bg',
    },
    'brand-3': {
      pillActive: 'bg-brand-3/15 border-brand-3 text-brand-3 shadow-lg shadow-brand-3/10',
      badge: 'bg-brand-3/10 text-brand-3 border-brand-3/25',
      glow: 'shadow-brand-3/20',
      border: 'border-brand-3/40',
      accentText: 'text-brand-3',
      accentBg: 'bg-brand-3',
      gradient: 'from-brand-3/20 via-brand-3/5 to-transparent',
      flowLine: 'bg-brand-3/40',
      flowCircle: 'bg-brand-3 text-white',
    }
  }

  const currentTheme = colorVariants[activeProject.color] || colorVariants.brand

  return (
    <section id="projects" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-brand-3/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label bg-brand/10 border border-brand/20 text-brand">
            Flagship Engineering
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-primary tracking-tight">
            Production AI Systems
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4 text-sm lg:text-base leading-relaxed">
            Real-world systems architected during my <span className="text-primary font-semibold">WERQ Labs Pvt. Ltd.</span> Python AI Internship. 
            Focused on multi-agent autonomy, low-latency speech pipelines, and strictly grounded domain RAG.
          </p>
        </motion.div>

        {/* Flagship Project Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {flagshipProjects.map((p) => {
            const isSelected = p.id === selectedId
            const theme = colorVariants[p.color] || colorVariants.brand
            return (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedId(p.id)
                }}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                  isSelected
                    ? `bg-panel-2 ${theme.border} shadow-xl ${theme.glow}`
                    : 'bg-panel/60 border-border hover:border-border-2 hover:bg-panel'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted group-hover:text-primary transition-colors">
                      {p.category}
                    </span>
                  </div>
                  {isSelected && (
                    <span className={`w-2 h-2 rounded-full ${theme.accentBg} animate-ping`} />
                  )}
                </div>
                <h3 className="text-base font-bold text-primary group-hover:text-primary transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-muted mt-1.5 line-clamp-1">
                  {p.tagline}
                </p>
              </button>
            )
          })}
        </div>

        {/* Active Project Case Study Deck */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="card p-6 lg:p-10 border-border-2 bg-panel/75 backdrop-blur-xl relative overflow-hidden shadow-2xl"
          >
            {/* Top Header & Metadata */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-border">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentTheme.badge}`}>
                    {activeProject.enterpriseLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/10 text-muted">
                    {activeProject.timeline}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/10 text-muted">
                    {activeProject.category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-primary tracking-tight">
                  {activeProject.title}
                </h3>
                <p className="text-sm lg:text-base text-muted mt-1.5 max-w-3xl leading-relaxed">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Status & Confidentiality Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-panel-2 border border-border text-xs text-muted">
                  <FaLock className="text-accent text-xs" />
                  <span>Enterprise / Private Repo</span>
                </div>
              </div>
            </div>

            {/* Quick Highlights Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-b border-border/60">
              {activeProject.highlights.map((highlight, idx) => (
                <div 
                  key={idx} 
                  className="px-3 py-2.5 rounded-xl bg-panel-2/60 border border-border/70 flex items-center gap-2.5 text-xs font-medium text-primary"
                >
                  <FaCheckCircle className={`shrink-0 text-xs ${currentTheme.accentText}`} />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Internal Navigation Tabs */}
            <div className="flex flex-wrap gap-2 pt-6 pb-6">
              {[
                { key: 'architecture', label: 'Architecture & Dataflow', icon: FaNetworkWired },
                { key: 'problem-solution', label: 'Problem vs Solution', icon: FaExchangeAlt },
                { key: 'contributions', label: 'My Engineering Role', icon: FaCogs },
                { key: 'tech', label: 'Full Tech Stack', icon: FaMicrochip },
              ].map(t => {
                const TabIcon = t.icon
                const isActive = activeTab === t.key
                return (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
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

            {/* Tab Contents */}
            <div className="min-h-[360px]">
              {/* TAB 1: System Architecture & Dataflow */}
              {activeTab === 'architecture' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                        <FaLayerGroup className={currentTheme.accentText} />
                        End-to-End System Pipeline
                      </h4>
                      <p className="text-xs text-muted mt-0.5">
                        Deterministic flow from client ingestion to validation, execution, and cached delivery.
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-dim hidden sm:inline-block">
                      6 Pipeline Stages
                    </span>
                  </div>

                  {/* Visual Architecture Flow Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeProject.architecture.map((stage, idx) => (
                      <div
                        key={stage.step}
                        className="p-5 rounded-2xl bg-panel-2/90 border border-border hover:border-border-2 transition-all relative group flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-black ${currentTheme.flowCircle}`}>
                            {stage.step}
                          </span>
                          <span className="text-[10px] uppercase font-mono text-dim tracking-widest">
                            Phase {idx + 1}
                          </span>
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-primary group-hover:text-white transition-colors">
                            {stage.title}
                          </h5>
                          <p className="text-xs text-muted mt-2 leading-relaxed">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-brand/5 border border-brand/15 flex items-center gap-3 text-xs text-muted">
                    <FaBolt className="text-brand shrink-0" />
                    <span>
                      Engineered for high throughput, sub-second error fallback, and strict isolation between independent sub-agents.
                    </span>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: Problem & Solution */}
              {activeTab === 'problem-solution' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="p-6 rounded-2xl bg-panel-2 border border-red-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      The Engineering Problem
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {activeProject.problem}
                    </p>
                    <div className="pt-2 text-xs text-dim font-mono border-t border-border">
                      Bottlenecks: Latency, manual overhead, state desync, hallucination risk
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-panel-2 border border-brand-2/20 space-y-3">
                    <div className="flex items-center gap-2 text-brand-2 font-bold text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-2/80" />
                      The Production AI Solution
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {activeProject.solution}
                    </p>
                    <div className="pt-2 text-xs text-dim font-mono border-t border-border">
                      Guarantees: Deterministic constraints, verified outputs, structured logging
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: Engineering Contributions */}
              {activeTab === 'contributions' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2 mb-4">
                    <FaShieldAlt className={currentTheme.accentText} />
                    My Direct Technical Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeProject.contributions.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-panel-2 border border-border flex items-start gap-3.5"
                      >
                        <div className={`w-6 h-6 rounded-lg ${currentTheme.badge} flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold`}>
                          {idx + 1}
                        </div>
                        <p className="text-xs lg:text-sm text-muted leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 4: Tech Stack Breakdown */}
              {activeTab === 'tech' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                    <FaMicrochip className={currentTheme.accentText} />
                    Component & Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {activeProject.tech.map((tool) => (
                      <div
                        key={tool}
                        className="px-4 py-3 rounded-xl bg-panel-2 border border-border hover:border-brand/40 transition-colors flex items-center gap-2 text-xs font-mono font-semibold text-primary"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-2" />
                        {tool}
                      </div>
                    ))}
                  </div>
                  <div className="p-5 rounded-2xl bg-panel-2 border border-border/80 text-xs text-muted leading-relaxed">
                    <span className="font-semibold text-primary">Architecture Standard: </span>
                    All components are structured around async Python 3.11+, typed Pydantic models, robust exception handling, and modular service interfaces ready for containerized deployment.
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
