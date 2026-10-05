import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { internshipInfo } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { 
  FaBriefcase, FaCheckCircle, FaShieldAlt, FaBolt, 
  FaClock, FaMapMarkerAlt, FaCodeBranch, FaBuilding
} from 'react-icons/fa'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedFocus, setSelectedFocus] = useState(0)

  const focusDetails = [
    {
      title: 'Agentic AI Applications & Autonomous Workflows',
      description: 'Developed Python-based multi-agent orchestration architectures. Built agent workflows with tool integration, response validation, and constraint checking for autonomous task completion.',
      scope: 'Multi-Agent Workflows · Tool Integration'
    },
    {
      title: 'Voice-Based AI Applications',
      description: 'Contributed to voice-based conversational AI systems integrating Whisper speech-to-text, LangGraph conversation logic, Kokoro speech synthesis, and backend database state.',
      scope: 'Voice Pipelines · Conversational Workflows'
    },
    {
      title: 'Domain Retrieval-Augmented Generation (RAG)',
      description: 'Processed regional tourism documents into a searchable knowledge base using Sentence Transformers and FAISS vector retrieval for context-grounded response generation.',
      scope: 'FAISS Retrieval · Grounded Context'
    },
    {
      title: 'FastAPI & Backend Engineering',
      description: 'Engineered Python backend applications using FastAPI, Flask, and REST APIs with object-oriented programming (OOP), API integrations, authentication, and database persistence.',
      scope: 'FastAPI & Flask · Database Integration'
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Heading */}
        <SectionHeading
          badge="Professional Experience"
          badgeColor="brand-2"
          title="Internship & Engineering"
          gradientTitle="Profile"
          description="A genuine internship experience at WERQ Labs Pvt. Ltd. building Agentic AI, RAG, voice-based AI, and Python backend solutions."
          inView={inView}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: WERQ Labs Internship (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <SpotlightCard
              spotlightColor="rgba(0, 212, 170, 0.12)"
              borderColor="rgba(0, 212, 170, 0.3)"
              className="p-6 sm:p-8 bg-panel/75 backdrop-blur-md shadow-2xl"
            >
              {/* Internship Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-border/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">
                      Internship Experience
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-brand-2/10 text-brand-2 border border-brand-2/20">
                      {internshipInfo.workMode}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                      <FaClock className="text-brand text-xs" />
                      {internshipInfo.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-primary tracking-tight">
                    {internshipInfo.role}
                  </h3>
                  <p className="text-brand-2 font-bold text-sm mt-1 flex items-center gap-2">
                    <FaBuilding className="text-xs" />
                    <span>{internshipInfo.company}</span>
                    <span className="text-dim">·</span>
                    <span className="text-xs text-muted font-normal flex items-center gap-1">
                      <FaMapMarkerAlt className="text-xs text-brand-2" />
                      {internshipInfo.location}
                    </span>
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-brand-2/10 border border-brand-2/25 flex items-center justify-center text-brand-2 text-xl shadow-lg shadow-brand-2/10">
                  <FaBriefcase />
                </div>
              </div>

              {/* Responsibilities & Impact */}
              <div className="pt-6 space-y-4">
                <p className="text-muted text-sm sm:text-base leading-relaxed">
                  Developed Python-based AI applications by translating real-world business requirements into functional prototypes and backend solutions at <strong className="text-primary font-semibold">WERQ Labs Pvt. Ltd.</strong> (Sanpada, Navi Mumbai).
                </p>

                <div className="space-y-2.5 pt-1">
                  {internshipInfo.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary/90">
                      <FaCheckCircle className="text-brand-2 text-xs shrink-0 mt-1" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Focus Chips */}
                <div className="pt-4 border-t border-border/70">
                  <div className="text-[11px] font-mono font-bold uppercase text-muted tracking-wider mb-3">
                    Core Technical Domains — Click to inspect scope:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {internshipInfo.focusAreas.map((area, idx) => {
                      const isSelected = selectedFocus === idx
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedFocus(idx)}
                          className={`text-left p-3 rounded-xl border text-xs font-medium transition-all duration-200 flex items-start gap-2.5 cursor-pointer ${
                            isSelected
                              ? 'bg-panel-2 border-brand-2/60 text-white shadow-md shadow-brand-2/10'
                              : 'bg-panel-2/50 border-border/70 text-muted hover:text-primary hover:border-border-2'
                          }`}
                        >
                          <FaCheckCircle className={`text-xs mt-0.5 shrink-0 ${
                            isSelected ? 'text-brand-2' : 'text-dim'
                          }`} />
                          <span className="line-clamp-2">{area}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Selected Focus Scope Detail Box */}
                <motion.div
                  key={selectedFocus}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="p-4 rounded-2xl bg-panel-2/90 border border-brand-2/20 text-xs space-y-2 mt-4"
                >
                  <div className="flex items-center justify-between text-brand-2 font-bold font-mono">
                    <span>{focusDetails[selectedFocus].title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-2/10 border border-brand-2/20 text-brand-2">
                      {focusDetails[selectedFocus].scope}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {focusDetails[selectedFocus].description}
                  </p>
                </motion.div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Narrative & Technical Direction (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Technical Narrative Card (Section 11) */}
            <SpotlightCard
              spotlightColor="rgba(79, 140, 255, 0.12)"
              borderColor="rgba(79, 140, 255, 0.3)"
              className="p-6 bg-panel/75 backdrop-blur-md shadow-xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                  <FaCodeBranch className="text-base" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary">Technical Narrative</h4>
                  <p className="text-xs text-muted font-mono">End-to-End AI Engineering</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Rather than solely experimenting with isolated models, my engineering focus centers on building complete AI applications: connecting LLMs with external APIs, stateful conversation graphs, vector databases, and high-throughput Python backends.
              </p>

              {/* Technical Evolution Pipeline */}
              <div className="p-3.5 rounded-xl bg-panel-2 border border-border/80 space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase text-muted tracking-wider">
                  Technical Progression
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono font-semibold">
                  <span className="text-primary">Python</span>
                  <span className="text-dim">&rarr;</span>
                  <span className="text-brand">AI/ML</span>
                  <span className="text-dim">&rarr;</span>
                  <span className="text-brand-3">NLP & RAG</span>
                  <span className="text-dim">&rarr;</span>
                  <span className="text-brand-2">Agentic AI</span>
                  <span className="text-dim">&rarr;</span>
                  <span className="text-accent">Voice AI</span>
                  <span className="text-dim">&rarr;</span>
                  <span className="text-white">FastAPI Backends</span>
                </div>
              </div>
            </SpotlightCard>

            {/* Principles & Standards */}
            <SpotlightCard
              spotlightColor="rgba(168, 85, 247, 0.12)"
              borderColor="rgba(168, 85, 247, 0.3)"
              className="p-6 bg-panel/75 backdrop-blur-md shadow-xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-3/10 border border-brand-3/20 flex items-center justify-center text-brand-3">
                  <FaShieldAlt className="text-base" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary">Engineering Principles</h4>
                  <p className="text-xs text-muted font-mono">Reliability & Structured Logic</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-muted">
                <div className="p-2.5 rounded-xl bg-panel-2/70 border border-border flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand shrink-0 mt-1" />
                  <div>
                    <strong className="text-primary font-semibold">Context-Grounded RAG:</strong> Dense FAISS vector retrieval & bounded prompts prevent hallucinations.
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-panel-2/70 border border-border flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-2 shrink-0 mt-1" />
                  <div>
                    <strong className="text-primary font-semibold">Workflow Orchestration:</strong> LangGraph state machines ensure deterministic ticket and dialog handling.
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-panel-2/70 border border-border flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-3 shrink-0 mt-1" />
                  <div>
                    <strong className="text-primary font-semibold">Constraint Validation:</strong> Deterministic verification rules enforce budget bounds and transit buffers.
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/70">
                {[
                  'Python',
                  'FastAPI',
                  'Flask',
                  'LangGraph',
                  'FAISS',
                  'MongoDB',
                  'Whisper',
                  'Kokoro TTS'
                ].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-panel-2 border border-border text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
