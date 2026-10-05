import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { categorizedSkills, bubbleSkills, skillToProjects, flagshipProjects, secondaryProjects } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { 
  SiPython, SiPostgresql, SiScikitlearn, SiTensorflow, SiPytorch, 
  SiSpacy, SiHuggingface, SiPandas, SiNumpy, 
  SiStreamlit, SiFlask, SiFastapi, SiMongodb, SiDocker, SiLinux
} from 'react-icons/si'
import { 
  FaBrain, FaGitAlt, FaGithub, FaRobot, FaDatabase,
  FaSearch, FaMicrophone, FaVolumeUp, FaNetworkWired,
  FaLayerGroup, FaBolt, FaTerminal, FaCode, FaSlidersH, 
  FaRedo, FaExternalLinkAlt, FaCheck, FaInfoCircle,
  FaChartBar, FaTable, FaShieldAlt
} from 'react-icons/fa'

const skillDetails = {
  langgraph: { icon: FaNetworkWired, color: '#4f8cff' },
  fastapi: { icon: SiFastapi, color: '#009688' },
  flask: { icon: SiFlask, color: '#ffffff' },
  'groq / whisper': { icon: FaMicrophone, color: '#f59e0b' },
  whisper: { icon: FaMicrophone, color: '#f59e0b' },
  'whisper (stt)': { icon: FaMicrophone, color: '#f59e0b' },
  'kokoro tts': { icon: FaVolumeUp, color: '#ec4899' },
  faiss: { icon: FaSearch, color: '#00d4aa' },
  rag: { icon: FaLayerGroup, color: '#a855f7' },
  'sentence transformers': { icon: FaBrain, color: '#4f8cff' },
  mongodb: { icon: SiMongodb, color: '#47A248' },
  mysql: { icon: FaDatabase, color: '#00758F' },
  postgresql: { icon: SiPostgresql, color: '#4169E1' },
  sql: { icon: FaDatabase, color: '#336791' },
  r: { icon: FaCode, color: '#276DC3' },
  python: { icon: SiPython, color: '#3776AB' },
  pytorch: { icon: SiPytorch, color: '#EE4C2C' },
  'multi-agent systems': { icon: FaRobot, color: '#38bdf8' },
  'multi-agent': { icon: FaRobot, color: '#38bdf8' },
  'agentic ai': { icon: FaRobot, color: '#38bdf8' },
  'agent orchestration': { icon: FaRobot, color: '#38bdf8' },
  'tool calling': { icon: FaCode, color: '#f59e0b' },
  'state management': { icon: FaNetworkWired, color: '#a855f7' },
  docker: { icon: SiDocker, color: '#2496ED' },
  'llama': { icon: FaBrain, color: '#a855f7' },
  'llama 3': { icon: FaBrain, color: '#a855f7' },
  llms: { icon: FaBrain, color: '#a855f7' },
  groq: { icon: FaBolt, color: '#f59e0b' },
  'prompt engineering': { icon: FaCode, color: '#00d4aa' },
  'dense embeddings': { icon: FaSearch, color: '#4f8cff' },
  'vector search': { icon: FaSearch, color: '#00d4aa' },
  asyncio: { icon: FaBolt, color: '#00d4aa' },
  pydantic: { icon: FaSlidersH, color: '#e11d48' },
  'rest apis': { icon: FaNetworkWired, color: '#4f8cff' },
  oop: { icon: FaCode, color: '#00d4aa' },
  'api integration': { icon: FaNetworkWired, color: '#38bdf8' },
  jwt: { icon: FaShieldAlt, color: '#f59e0b' },
  'machine learning': { icon: SiScikitlearn, color: '#F7931E' },
  'deep learning': { icon: SiTensorflow, color: '#FF9E0F' },
  nlp: { icon: FaBrain, color: '#38bdf8' },
  bert: { icon: FaBrain, color: '#FFD21E' },
  transformers: { icon: SiHuggingface, color: '#FFD21E' },
  pandas: { icon: SiPandas, color: '#150458' },
  numpy: { icon: SiNumpy, color: '#013243' },
  matplotlib: { icon: FaChartBar, color: '#11557c' },
  excel: { icon: FaTable, color: '#217346' },
  'power bi': { icon: FaChartBar, color: '#F2C811' },
  'power bi (basic)': { icon: FaChartBar, color: '#F2C811' },
  git: { icon: FaGitAlt, color: '#F05032' },
  github: { icon: FaGithub, color: '#ffffff' },
  'vs code': { icon: FaCode, color: '#007ACC' },
  'hugging face': { icon: SiHuggingface, color: '#FFD21E' }
}

const getSkillIcon = (name) => {
  const clean = name.toLowerCase().trim()
  const detail = skillDetails[clean]
  if (detail) {
    const IconComponent = detail.icon
    return <IconComponent style={{ color: detail.color }} className="w-3.5 h-3.5 shrink-0" />
  }
  return <FaRobot className="w-3.5 h-3.5 shrink-0 text-muted" />
}

export default function Skills() {
  const ref = useRef(null)
  const constraintsRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [viewMode, setViewMode] = useState('matrix') // 'matrix' | 'sandbox'
  const [resetKey, setResetKey] = useState(0)

  // Find all projects that use the currently hovered/selected skill
  const relatedProjectIds = hoveredSkill 
    ? (skillToProjects[hoveredSkill.toLowerCase().trim()] || []) 
    : []

  const allProjects = [...flagshipProjects, ...secondaryProjects]
  const matchedProjects = allProjects.filter((p) => relatedProjectIds.includes(p.id))

  const colorVariants = {
    brand: 'text-brand border-brand/25 bg-brand/10',
    'brand-2': 'text-brand-2 border-brand-2/25 bg-brand-2/10',
    'brand-3': 'text-brand-3 border-brand-3/25 bg-brand-3/10',
    accent: 'text-accent border-accent/25 bg-accent/10',
  }

  return (
    <section id="skills" className="py-20 lg:py-28 bg-bg-2 relative scroll-mt-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Heading */}
        <SectionHeading
          badge="Technical Competencies"
          badgeColor="brand-2"
          title="Skills & AI"
          gradientTitle="Engineering Stack"
          description="Production technologies grouped across agentic orchestration, high-speed inference, vector search, and backend infrastructure. Hover any skill to inspect cross-project relationships."
          inView={inView}
        />

        {/* View Toggle Bar (Interactive Stack Matrix vs Physics Node Arena) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-3 rounded-2xl bg-panel border border-border">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-primary flex items-center gap-2">
              <FaBrain className="text-brand text-xs" />
              <span>STACK EXPLORER</span>
            </span>
            <span className="text-[11px] text-muted hidden md:inline">
              — Structured architecture categories
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-brand/15 text-brand border border-brand/30 shadow-sm'
                  : 'bg-panel-2 text-muted hover:text-primary border border-border'
              }`}
            >
              Categorized Stack
            </button>
            <button
              onClick={() => setViewMode('sandbox')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                viewMode === 'sandbox'
                  ? 'bg-brand/15 text-brand border border-brand/30 shadow-sm'
                  : 'bg-panel-2 text-muted hover:text-primary border border-border'
              }`}
            >
              Physics Node Arena
            </button>
          </div>
        </div>

        {viewMode === 'matrix' ? (
          <div className="space-y-8">
            {/* 5 Core Technical Categories (Section 17) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Object.entries(categorizedSkills).map(([category, { icon, color, description, items }], i) => (
                <SpotlightCard
                  key={category}
                  spotlightColor="rgba(79, 140, 255, 0.1)"
                  borderColor="rgba(79, 140, 255, 0.25)"
                  className="p-6 bg-panel/75 backdrop-blur-md shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl p-2 rounded-xl bg-panel-2 border border-border">
                        {icon}
                      </span>
                      <div>
                        <h3 className="font-bold text-primary text-base sm:text-lg">
                          {category}
                        </h3>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                          colorVariants[color] || colorVariants.brand
                        }`}>
                          {items.length} Technologies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-muted leading-relaxed mb-4">
                      {description}
                    </p>
                  </div>

                  {/* Skills interactive chips (Section 18: Hover highlights related projects) */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
                    {items.map((item) => {
                      const isHovered = hoveredSkill === item
                      const hasProjects = (skillToProjects[item.toLowerCase().trim()] || []).length > 0

                      return (
                        <button
                          key={item}
                          onMouseEnter={() => setHoveredSkill(item)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          onClick={() => setHoveredSkill(hoveredSkill === item ? null : item)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                            isHovered
                              ? 'bg-brand/20 border-brand text-white scale-105 shadow-md shadow-brand/20'
                              : 'bg-panel-2 border-border/80 text-muted hover:text-primary hover:border-brand/40'
                          }`}
                        >
                          {getSkillIcon(item)}
                          <span>{item}</span>
                          {hasProjects && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-2/70" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Interactive Cross-Project Relationship Banner (Section 18) */}
            <AnimatePresence>
              {hoveredSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-panel-2 border border-brand/35 shadow-xl space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-primary font-mono flex items-center gap-2">
                        {getSkillIcon(hoveredSkill)}
                        <span>{hoveredSkill}</span>
                      </span>
                      <span className="text-xs text-muted">
                        utilized in {matchedProjects.length} portfolio system{matchedProjects.length === 1 ? '' : 's'}:
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-dim">
                      Hovered Skill Trace
                    </span>
                  </div>

                  {matchedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {matchedProjects.map((p) => (
                        <div
                          key={p.id}
                          className="p-3 rounded-xl bg-panel border border-border flex items-center gap-3"
                        >
                          <span className="text-xl p-1.5 rounded-lg bg-panel-2 border border-border/70">
                            {p.emoji}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-bold text-primary truncate">
                              {p.title}
                            </div>
                            <div className="text-[10px] font-mono text-muted truncate">
                              {p.category || p.tags?.[0]}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-muted font-mono">
                      Foundational competency integrated across general pipeline routines.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Draggable Sandbox Arena */
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-panel border border-border">
              <span className="text-xs text-muted font-mono">
                Click, drag, or flick any node across the arena boundary.
              </span>
              <button
                onClick={() => setResetKey((k) => k + 1)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-panel-2 border border-border hover:border-brand/40 text-muted hover:text-primary text-xs font-semibold cursor-pointer"
              >
                <FaRedo className="text-[10px]" />
                <span>Reset Positions</span>
              </button>
            </div>

            <div
              ref={constraintsRef}
              key={resetKey}
              className="w-full min-h-[380px] p-6 lg:p-8 rounded-3xl bg-panel/30 border border-dashed border-brand/20 relative overflow-hidden flex flex-wrap justify-center items-center gap-5 sm:gap-7 select-none"
              style={{ touchAction: 'none' }}
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <span className="text-xs md:text-sm font-mono font-bold tracking-widest uppercase border border-dashed border-muted/40 px-6 py-2.5 rounded-2xl">
                  Physics Arena · Drag & Toss
                </span>
              </div>

              {bubbleSkills.map((skill) => {
                const clean = skill.toLowerCase().trim()
                const detail = skillDetails[clean] || {
                  icon: FaRobot,
                  color: '#4f8cff'
                }
                const IconComponent = detail.icon

                return (
                  <motion.div
                    key={`${skill}-${resetKey}`}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.25}
                    dragTransition={{
                      bounceStiffness: 450,
                      bounceDamping: 24,
                      power: 0.25
                    }}
                    whileDrag={{
                      scale: 1.12,
                      zIndex: 50,
                      cursor: 'grabbing'
                    }}
                    className="cursor-grab select-none relative z-10"
                    style={{ touchAction: 'none' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.2 }}
                      className="w-[100px] h-[100px] sm:w-[112px] sm:h-[112px] rounded-full bg-panel-2 border-2 flex flex-col justify-center items-center text-center p-3 shadow-lg"
                      style={{
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                        boxShadow: `0 0 16px ${detail.color}26, inset 0 0 10px rgba(255,255,255,0.02)`
                      }}
                    >
                      <div
                        className="text-xl sm:text-2xl mb-1.5 flex items-center justify-center"
                        style={{ color: detail.color }}
                      >
                        <IconComponent />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-primary font-mono tracking-tight leading-tight line-clamp-2">
                        {skill}
                      </span>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
