import { motion } from 'framer-motion'
import { useTyped } from '../hooks/useTyped'
import akashPhoto from '../../assets/akash-photo-removebg-preview.jpg'
import resumePdf from '../../assets/Akash_Patil_Resume.pdf'
import { FaArrowRight, FaDownload, FaEnvelope, FaBuilding, FaGraduationCap } from 'react-icons/fa'

const roles = [
  'AI Developer / AI Engineer',
  'Agentic Systems Developer',
  'RAG & Voice AI Specialist',
  'FastAPI & Python AI Engineer'
]

const floatBadges = [
  { label: '🤖 Multi-Agent Systems', color: 'text-brand border-brand/30', delay: 0, pos: 'top-2 -right-4' },
  { label: '🎙️ Voice AI (Whisper/TTS)', color: 'text-brand-2 border-brand-2/30', delay: 1.4, pos: 'top-1/2 -right-6' },
  { label: '⚡ FastAPI & LangGraph', color: 'text-brand-3 border-brand-3/30', delay: 0.8, pos: '-bottom-3 -right-3' },
  { label: '🔍 RAG & FAISS', color: 'text-accent border-accent/30', delay: 2, pos: '-bottom-3 -left-3' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const typed = useTyped(roles)

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-3/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-brand-2/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column (Hero Content) */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="show" 
            className="lg:col-span-7 space-y-6"
          >
            {/* Internship Credibility Pill */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand/10 border border-brand/25 text-brand text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-2 animate-pulse" />
                <span>Python AI Intern @ WERQ Labs Pvt. Ltd. (June – September 2026)</span>
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div variants={item} className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-primary">
                Akash <span className="gradient-text">Patil</span>
              </h1>
              {/* Dynamic typed role */}
              <div className="text-lg sm:text-2xl font-bold text-muted h-9 flex items-center">
                <span className="text-primary">{typed}</span>
                <span className="typed-cursor" />
              </div>
            </motion.div>

            {/* Factual Concise Bio */}
            <motion.p variants={item} className="text-muted leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl">
              AI Developer & Engineer specialized in building production-ready agentic workflows, low-latency speech pipelines, and strictly grounded domain RAG systems. Completed <span className="text-primary font-medium">MSc in Data Analytics</span> (April 2026) with deep practical experience in FastAPI, LangGraph, FAISS, and MongoDB.
            </motion.p>

            {/* Real Credibility Indicators */}
            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 border-y border-border/70">
              <div>
                <div className="text-xs text-muted font-mono uppercase">Internship</div>
                <div className="text-sm font-bold text-primary mt-0.5 flex items-center gap-1.5">
                  <FaBuilding className="text-brand text-xs" />
                  <span>WERQ Labs</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-muted font-mono uppercase">Academics</div>
                <div className="text-sm font-bold text-primary mt-0.5 flex items-center gap-1.5">
                  <FaGraduationCap className="text-brand-2 text-xs" />
                  <span>MSc Analytics</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-muted font-mono uppercase">Flagship AI</div>
                <div className="text-sm font-bold text-brand-3 mt-0.5">3 Systems</div>
              </div>
              <div>
                <div className="text-xs text-muted font-mono uppercase">Core Stack</div>
                <div className="text-sm font-bold text-accent mt-0.5">LangGraph & RAG</div>
              </div>
            </motion.div>

            {/* CTAs: Projects / Resume / Contact */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary cursor-pointer"
              >
                <span>Flagship Projects</span>
                <FaArrowRight className="text-xs" />
              </button>

              <a
                href={resumePdf}
                download="Akash_Patil_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-2/10 border border-brand-2/30 text-brand-2 text-sm font-semibold hover:bg-brand-2/20 transition-all duration-200 cursor-pointer"
              >
                <FaDownload className="text-xs" />
                <span>Resume</span>
              </a>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline cursor-pointer"
              >
                <FaEnvelope className="text-xs" />
                <span>Contact</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Photo & Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Outer atmospheric glowing ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand/20 via-brand-3/15 to-brand-2/20 rounded-3xl blur-2xl glow-ring" />

              {/* Photo Box */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border-2 bg-panel-2 shadow-2xl">
                <img
                  src={akashPhoto}
                  alt="Akash Patil"
                  className="w-full h-full object-cover object-top"
                  onError={e => {
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-brand/20 to-brand-3/20 flex items-center justify-center"><span class="text-6xl font-black text-brand">AP</span></div>'
                  }}
                />
              </div>

              {/* Floating AI Badges */}
              {floatBadges.map((b, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${b.pos} px-3 py-1.5 rounded-xl bg-panel/90 backdrop-blur-md border ${b.color} text-[11px] font-mono font-bold shadow-xl hidden sm:block`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {b.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
