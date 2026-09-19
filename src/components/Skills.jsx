import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, bubbleSkills } from '../data/projects'
import { 
  SiPython, SiPostgresql, SiHtml5, SiScikitlearn, SiTensorflow, SiPytorch, 
  SiSpacy, SiHuggingface, SiPandas, SiNumpy, 
  SiStreamlit, SiFlask, SiFastapi, SiMongodb, SiDocker, SiLinux
} from 'react-icons/si'
import { 
  FaBrain, FaGitAlt, FaGithub, FaRobot, FaDatabase,
  FaSearch, FaMicrophone, FaVolumeUp, FaNetworkWired,
  FaLayerGroup, FaBolt, FaTerminal, FaCode, FaSlidersH, FaRedo
} from 'react-icons/fa'

const colorMap = {
  brand: { 
    bg: 'bg-brand/10', 
    border: 'border-brand/20', 
    text: 'text-brand', 
    hover: 'hover:border-brand/40 hover:shadow-brand/5', 
    pill: 'bg-brand/10 border-brand/20 text-brand' 
  },
  'brand-2': { 
    bg: 'bg-brand-2/10', 
    border: 'border-brand-2/20', 
    text: 'text-brand-2', 
    hover: 'hover:border-brand-2/40 hover:shadow-brand-2/5', 
    pill: 'bg-brand-2/10 border-brand-2/20 text-brand-2' 
  },
  'brand-3': { 
    bg: 'bg-brand-3/10', 
    border: 'border-brand-3/20', 
    text: 'text-brand-3', 
    hover: 'hover:border-brand-3/40 hover:shadow-brand-3/5', 
    pill: 'bg-brand-3/10 border-brand-3/20 text-brand-3' 
  },
  accent: { 
    bg: 'bg-accent/10', 
    border: 'border-accent/20', 
    text: 'text-accent', 
    hover: 'hover:border-accent/40 hover:shadow-accent/5', 
    pill: 'bg-accent/10 border-accent/20 text-accent' 
  },
}

// Map tech skills to icons and specific brand glows
const skillDetails = {
  langgraph: { icon: FaNetworkWired, color: '#4f8cff', glow: 'rgba(79, 140, 255, 0.4)' },
  fastapi: { icon: SiFastapi, color: '#009688', glow: 'rgba(0, 150, 136, 0.4)' },
  'groq / whisper': { icon: FaMicrophone, color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)' },
  'whisper (stt)': { icon: FaMicrophone, color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)' },
  'kokoro tts': { icon: FaVolumeUp, color: '#ec4899', glow: 'rgba(236, 72, 153, 0.4)' },
  faiss: { icon: FaSearch, color: '#00d4aa', glow: 'rgba(0, 212, 170, 0.4)' },
  rag: { icon: FaLayerGroup, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)' },
  'sentence transformers': { icon: FaBrain, color: '#4f8cff', glow: 'rgba(79, 140, 255, 0.4)' },
  mongodb: { icon: SiMongodb, color: '#47A248', glow: 'rgba(71, 162, 72, 0.4)' },
  python: { icon: SiPython, color: '#3776AB', glow: 'rgba(55, 118, 171, 0.4)' },
  pytorch: { icon: SiPytorch, color: '#EE4C2C', glow: 'rgba(238, 76, 44, 0.4)' },
  'multi-agent': { icon: FaRobot, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)' },
  'multi-agent orchestration': { icon: FaRobot, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)' },
  docker: { icon: SiDocker, color: '#2496ED', glow: 'rgba(36, 150, 237, 0.4)' },
  'llama 3': { icon: FaBrain, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)' },
  groq: { icon: FaBolt, color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)' },
  'prompt engineering': { icon: FaCode, color: '#00d4aa', glow: 'rgba(0, 212, 170, 0.4)' },
  'dense embeddings': { icon: FaSearch, color: '#4f8cff', glow: 'rgba(79, 140, 255, 0.4)' },
  'document chunking': { icon: FaLayerGroup, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)' },
  'hybrid search': { icon: FaSearch, color: '#00d4aa', glow: 'rgba(0, 212, 170, 0.4)' },
  'context grounding': { icon: FaBrain, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)' },
  asyncio: { icon: FaBolt, color: '#00d4aa', glow: 'rgba(0, 212, 170, 0.4)' },
  pydantic: { icon: FaSlidersH, color: '#e11d48', glow: 'rgba(225, 29, 72, 0.4)' },
  'rest apis': { icon: FaNetworkWired, color: '#4f8cff', glow: 'rgba(79, 140, 255, 0.4)' },
  caching: { icon: FaBolt, color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)' },
  'observability traces': { icon: FaSearch, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)' },
  'vector indexes': { icon: FaDatabase, color: '#00d4aa', glow: 'rgba(0, 212, 170, 0.4)' },
  postgresql: { icon: SiPostgresql, color: '#4169E1', glow: 'rgba(65, 105, 225, 0.4)' },
  sql: { icon: FaDatabase, color: '#00d4aa', glow: 'rgba(0, 212, 170, 0.4)' },
  'data pipelines': { icon: FaNetworkWired, color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)' },
  tensorflow: { icon: SiTensorflow, color: '#FF9E0F', glow: 'rgba(255, 158, 15, 0.4)' },
  'scikit-learn': { icon: SiScikitlearn, color: '#F7931E', glow: 'rgba(247, 147, 30, 0.4)' },
  'hugging face transformers': { icon: SiHuggingface, color: '#FFD21E', glow: 'rgba(255, 210, 30, 0.4)' },
  spacy: { icon: SiSpacy, color: '#09A3D5', glow: 'rgba(9, 163, 213, 0.4)' },
  pandas: { icon: SiPandas, color: '#150458', glow: 'rgba(21, 4, 88, 0.4)' },
  numpy: { icon: SiNumpy, color: '#013243', glow: 'rgba(1, 50, 67, 0.4)' },
  'git / github': { icon: FaGithub, color: '#ffffff', glow: 'rgba(255, 255, 255, 0.3)' },
  streamlit: { icon: SiStreamlit, color: '#FF4B4B', glow: 'rgba(255, 75, 75, 0.4)' },
  gradio: { icon: FaBolt, color: '#FF9D00', glow: 'rgba(255, 157, 0, 0.4)' },
  'hugging face spaces': { icon: SiHuggingface, color: '#FFD21E', glow: 'rgba(255, 210, 30, 0.4)' },
  'linux / bash': { icon: SiLinux, color: '#FCC624', glow: 'rgba(252, 198, 36, 0.4)' },
  'vs code': { icon: FaCode, color: '#007ACC', glow: 'rgba(0, 122, 204, 0.4)' },
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
  const [resetKey, setResetKey] = useState(0)

  return (
    <section id="skills" className="py-20 lg:py-28 bg-bg-2 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label bg-brand-2/10 border border-brand-2/20 text-brand-2">
            Technical Arsenal
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-primary tracking-tight">
            Skills & AI Tooling
          </h2>
          <p className="text-sm text-muted mt-2 max-w-lg mx-auto">
            Categorized production stack for Agentic Systems, RAG pipelines, FastAPI backends, and Vector Search.
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {Object.entries(skills).map(([name, { icon, color, items }], i) => {
            const c = colorMap[color] || colorMap.brand
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`card p-6 ${c.hover} border-border bg-panel/40 transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-black/10`}>
                    {icon}
                  </div>
                  <h3 className="font-bold text-primary text-sm lg:text-base">{name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span 
                      key={item} 
                      className={`skill-pill ${c.pill} flex items-center gap-1.5 hover:scale-105 transition-all duration-200 text-xs`}
                    >
                      {getSkillIcon(item)}
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Physics Playground Header & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pt-4 border-t border-border/50">
          <div>
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span>✨</span> Interactive AI Node Sandbox
            </h3>
            <p className="text-xs text-muted mt-1">
              Drag, toss, and flick any node with natural inertia. Completely conflict-free on desktop and touch devices.
            </p>
          </div>
          <button
            onClick={() => setResetKey(k => k + 1)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-panel border border-border hover:border-brand/40 text-muted hover:text-primary text-xs font-semibold transition-all cursor-pointer shadow-sm"
            title="Reset positions"
          >
            <FaRedo className="text-[10px]" />
            <span>Reset Arena</span>
          </button>
        </div>

        {/* Draggable Sandbox Arena */}
        <div 
          ref={constraintsRef}
          key={resetKey}
          className="w-full min-h-[360px] p-6 lg:p-8 rounded-3xl bg-panel/30 border border-dashed border-brand/20 relative overflow-hidden flex flex-wrap justify-center items-center gap-5 sm:gap-7 select-none"
          style={{ touchAction: 'none' }}
        >
          {/* Subtle Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <span className="text-xs md:text-sm font-mono font-bold tracking-widest uppercase border border-dashed border-muted/40 px-6 py-2.5 rounded-2xl">
              Physics Arena · Drag & Toss
            </span>
          </div>

          {bubbleSkills.map((skill, i) => {
            const clean = skill.toLowerCase().trim()
            const detail = skillDetails[clean] || { 
              icon: FaRobot, 
              color: '#4f8cff', 
              glow: 'rgba(79,140,255,0.3)' 
            }
            const IconComponent = detail.icon

            return (
              /* OUTER DRAGGABLE ELEMENT: Handled purely by Framer Motion without any CSS transform collisions */
              <motion.div
                key={`${skill}-${resetKey}`}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.3}
                dragTransition={{ 
                  bounceStiffness: 450, 
                  bounceDamping: 22,
                  power: 0.25 
                }}
                whileDrag={{ 
                  scale: 1.15, 
                  zIndex: 50,
                  cursor: 'grabbing' 
                }}
                className="cursor-grab select-none relative z-10"
                style={{ touchAction: 'none' }}
              >
                {/* INNER VISUAL CONTAINER: Handles visual styling, glow, and micro-hover without interfering with outer drag transforms */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="w-[98px] h-[98px] sm:w-[110px] sm:h-[110px] rounded-full bg-panel-2 border-2 flex flex-col justify-center items-center text-center p-3 shadow-lg transition-colors duration-200"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    boxShadow: `0 0 16px ${detail.glow}26, inset 0 0 10px rgba(255,255,255,0.02)`
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
    </section>
  )
}
