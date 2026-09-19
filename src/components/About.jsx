import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { internshipInfo } from '../data/projects'
import { 
  FaBriefcase, FaGraduationCap, FaCheckCircle, 
  FaTerminal, FaCodeBranch, FaShieldAlt, FaRocket 
} from 'react-icons/fa'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label bg-brand-2/10 border border-brand-2/20 text-brand-2">
            Experience & Profile
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-primary tracking-tight">
            About & Enterprise Experience
          </h2>
          <p className="text-muted max-w-xl mx-auto mt-2 text-sm leading-relaxed">
            Bridging modern AI research with reliable, low-latency engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Enterprise Internship Card (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="card p-7 lg:p-8 bg-panel/60 border-border-2 hover:border-brand/40 transition-all duration-300 shadow-xl space-y-6">
              {/* Card Header with Internship Badge */}
              <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-border">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">
                      Enterprise Internship
                    </span>
                    <span className="text-xs text-muted font-mono">{internshipInfo.duration}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-primary">
                    {internshipInfo.role}
                  </h3>
                  <p className="text-brand-2 font-semibold text-sm mt-0.5">
                    {internshipInfo.company} · {internshipInfo.location}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand text-lg">
                  <FaBriefcase />
                </div>
              </div>

              {/* Internship Focus & Impact */}
              <p className="text-muted text-sm lg:text-base leading-relaxed">
                As a <span className="text-primary font-semibold">Python AI Intern</span> at WERQ Labs Pvt. Ltd., I focused on building robust, production-oriented AI pipelines. My work concentrated on three flagship engineering systems:
              </p>

              <div className="space-y-3">
                {internshipInfo.focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-panel-2/70 border border-border/70 text-xs sm:text-sm text-primary">
                    <FaCheckCircle className="text-brand-2 text-xs mt-0.5 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted leading-relaxed pt-2">
                Emphasized strict schema validation via Pydantic, deterministic guardrails against LLM hallucinations, Redis/in-memory caching for repeat queries, and structured error boundaries.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Engineering Philosophy (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Background & Education summary */}
            <div className="card p-7 bg-panel/60 border-border hover:border-brand-2/40 transition-all duration-300 shadow-xl space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-brand-2/10 border border-brand-2/20 flex items-center justify-center text-brand-2">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary">Academic Foundation</h4>
                  <p className="text-xs text-muted">MSc Data Analytics (Graduated April 2026)</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Academic background in statistics, deep learning architectures, feature engineering, and big data systems. Grounded in mathematical foundations to understand model limitations, vector geometry, and optimization landscapes.
              </p>
            </div>

            {/* Principles */}
            <div className="card p-7 bg-panel/60 border-border hover:border-brand-3/40 transition-all duration-300 shadow-xl space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-brand-3/10 border border-brand-3/20 flex items-center justify-center text-brand-3">
                  <FaShieldAlt />
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary">Production AI Principles</h4>
                  <p className="text-xs text-muted">Engineering for Stability</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span><strong>Zero Hallucination Tolerance:</strong> Dense FAISS vector retrieval & bounded prompts.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-2" />
                  <span><strong>Sub-second Voice Latency:</strong> Groq Whisper + Kokoro streaming synthesis.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-3" />
                  <span><strong>State Isolation:</strong> LangGraph state machines preventing desync.</span>
                </div>
              </div>

              {/* Factual Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                {[
                  'FastAPI',
                  'LangGraph',
                  'FAISS',
                  'MongoDB',
                  'Whisper',
                  'Kokoro TTS',
                  'Python 3.11+'
                ].map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-panel-2 border border-border text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
