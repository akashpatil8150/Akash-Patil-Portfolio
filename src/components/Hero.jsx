import { motion } from 'framer-motion'
import { useTyped } from '../hooks/useTyped'
import akashPhoto from '../../assets/akash-photo-removebg-preview.jpg'
import { RESUME_URL } from '../data/resume'
import { 
  FaArrowRight, FaDownload, FaEnvelope, FaGraduationCap, 
  FaRobot, FaMicrophone, FaBolt, FaSearch, FaMapMarkerAlt, FaCode 
} from 'react-icons/fa'
import { SiFastapi } from 'react-icons/si'

const roles = [
  'AI Developer / AI Engineer',
  'Agentic Systems Developer',
  'RAG & Voice AI Specialist',
  'FastAPI & Python AI Engineer'
]

// System module floating technical badges
const systemModules = [
  { 
    title: 'Multi-Agent Systems', 
    sub: 'LangGraph Orchestration', 
    icon: FaRobot, 
    color: 'text-brand border-brand/35 bg-brand/10',
    pos: '-top-3 -right-2 sm:-right-6',
    delay: 0
  },
  { 
    title: 'Voice AI Pipeline', 
    sub: 'Whisper STT + Kokoro TTS', 
    icon: FaMicrophone, 
    color: 'text-brand-2 border-brand-2/35 bg-brand-2/10',
    pos: 'top-1/3 -right-4 sm:-right-8',
    delay: 1.5
  },
  { 
    title: 'Domain RAG', 
    sub: 'FAISS Semantic Search', 
    icon: FaSearch, 
    color: 'text-brand-3 border-brand-3/35 bg-brand-3/10',
    pos: '-bottom-3 -left-2 sm:-left-6',
    delay: 0.8
  },
  { 
    title: 'FastAPI Backend', 
    sub: 'AsyncIO / REST APIs', 
    icon: SiFastapi, 
    color: 'text-accent border-accent/35 bg-accent/10',
    pos: 'bottom-8 -right-3 sm:-right-6',
    delay: 2.2
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

export default function Hero() {
  const typedRole = useTyped(roles, 85, 45, 1800)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-tech-grid">
      {/* Background AI Lab Atmosphere */}
      <div className="absolute top-12 left-1/4 w-[520px] h-[520px] bg-brand/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-brand-3/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[360px] h-[360px] bg-brand-2/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column (Hero Content) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* REQUIRED TOP IDENTITY HEADER:
                Akash Patil · AI Developer / AI Engineer
                MSc Data Analytics (April 2026)
                (No internship mention here as explicitly requested) */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-panel-2/90 border border-brand/30 text-xs font-mono shadow-md backdrop-blur-sm">
                <span className="flex items-center gap-2 text-primary font-bold">
                  <span className="w-2 h-2 rounded-full bg-brand-2 animate-pulse" />
                  Akash Patil &middot; AI Developer / AI Engineer
                </span>
                <span className="text-dim hidden sm:inline">|</span>
                <span className="text-muted">
                  MSc Data Analytics (April 2026)
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-primary leading-[1.12]">
                Building Intelligent Systems <br className="hidden sm:inline" />
                <span className="gradient-text">That Actually Work.</span>
              </h1>

              {/* Name & Animated Role Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 pt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Akash Patil
                </span>
                <span className="hidden sm:inline text-muted font-mono text-lg">/</span>
                <div className="h-8 flex items-center">
                  <span className="text-base sm:text-xl font-bold text-brand-2 font-mono">
                    {typedRole}
                  </span>
                  <span className="typed-cursor" />
                </div>
              </div>
            </motion.div>

            {/* Factual Concise Bio from Source of Truth */}
            <motion.p variants={itemVariants} className="text-muted leading-relaxed text-sm sm:text-base max-w-2xl">
              A Python-focused AI developer based in <strong className="text-primary font-medium">Panvel, Maharashtra</strong> with hands-on experience building <strong className="text-primary font-medium">Agentic AI systems</strong>, <strong className="text-primary font-medium">RAG applications</strong>, <strong className="text-primary font-medium">NLP pipelines</strong>, and <strong className="text-primary font-medium">voice-based AI applications</strong> with FastAPI and databases.
            </motion.p>

            {/* Credibility Indicators */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-border/80">
              <div className="p-2.5 rounded-xl bg-panel/60 border border-border/70">
                <div className="text-[10px] text-muted font-mono uppercase tracking-wider">Education</div>
                <div className="text-xs sm:text-sm font-bold text-primary mt-1 flex items-center gap-1.5">
                  <FaGraduationCap className="text-brand-2 text-xs shrink-0" />
                  <span className="truncate">MSc - DA (2026)</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-panel/60 border border-border/70">
                <div className="text-[10px] text-muted font-mono uppercase tracking-wider">Location</div>
                <div className="text-xs sm:text-sm font-bold text-primary mt-1 flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-brand text-xs shrink-0" />
                  <span className="truncate">Panvel, India</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-panel/60 border border-border/70">
                <div className="text-[10px] text-muted font-mono uppercase tracking-wider">Flagship AI</div>
                <div className="text-xs sm:text-sm font-bold text-brand-3 mt-1 flex items-center gap-1.5">
                  <FaRobot className="text-xs shrink-0" />
                  <span>3 Orchestrations</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-panel/60 border border-border/70">
                <div className="text-[10px] text-muted font-mono uppercase tracking-wider">Core Focus</div>
                <div className="text-xs sm:text-sm font-bold text-accent mt-1 flex items-center gap-1.5">
                  <FaBolt className="text-xs shrink-0" />
                  <span className="truncate">Agentic & RAG</span>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary cursor-pointer shadow-lg shadow-brand/25"
              >
                <span>View Flagship Projects</span>
                <FaArrowRight className="text-xs" />
              </button>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Akash_Patil_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-2/10 border border-brand-2/30 text-brand-2 text-xs sm:text-sm font-bold hover:bg-brand-2/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <FaDownload className="text-xs" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline cursor-pointer"
              >
                <FaEnvelope className="text-xs" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: AI Lab Photo Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Soft Radial Ambient Lighting */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-brand/20 via-brand-3/20 to-brand-2/20 rounded-3xl blur-3xl glow-ring pointer-events-none" />

              {/* Decorative Tech Frame & Corners */}
              <div className="absolute -inset-1 rounded-3xl border border-brand/25 pointer-events-none" />
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-brand pointer-events-none z-20" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-brand pointer-events-none z-20" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-brand pointer-events-none z-20" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-brand pointer-events-none z-20" />

              {/* Main Photo Box */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border-2 bg-gradient-to-b from-panel-2 to-bg shadow-2xl">
                <img
                  src={akashPhoto}
                  alt="Akash Patil — AI Developer & AI Engineer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                  onError={(e) => {
                    e.currentTarget.src = '/akash-photo-removebg-preview.jpg'
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-2 to-transparent pointer-events-none" />
              </div>

              {/* Floating Technical System Modules */}
              {systemModules.map((module) => {
                const Icon = module.icon
                return (
                  <motion.div
                    key={module.title}
                    className={`absolute ${module.pos} p-2.5 rounded-xl bg-panel/90 backdrop-blur-md border ${module.color} shadow-xl hidden sm:flex items-center gap-2.5 z-20 select-none`}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4.5,
                      delay: module.delay,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <div className="p-1.5 rounded-lg bg-panel-2 border border-white/10 shrink-0">
                      <Icon className="text-xs" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white tracking-tight leading-none">
                        {module.title}
                      </div>
                      <div className="text-[9px] font-mono text-muted mt-0.5 leading-none">
                        {module.sub}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
