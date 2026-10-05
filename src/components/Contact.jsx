import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RESUME_URL } from '../data/resume'
import { personalInfo } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, 
  FaLinkedin, FaArrowRight, FaDownload, FaCheckCircle 
} from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

const contacts = [
  {
    label: 'Email',
    sublabel: 'Direct inquiry',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: FaEnvelope,
    color: 'text-brand',
    iconBg: 'bg-brand/10 border-brand/20',
    hoverBorder: 'hover:border-brand/50',
    arrowColor: 'group-hover:text-brand',
  },
  {
    label: 'Phone',
    sublabel: 'Direct phone & messaging',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
    icon: FaPhone,
    color: 'text-brand-2',
    iconBg: 'bg-brand-2/10 border-brand-2/20',
    hoverBorder: 'hover:border-brand-2/50',
    arrowColor: 'group-hover:text-brand-2',
  },
  {
    label: 'Location',
    sublabel: 'Primary residence',
    value: personalInfo.location,
    href: '#',
    icon: FaMapMarkerAlt,
    color: 'text-accent',
    iconBg: 'bg-accent/10 border-accent/20',
    hoverBorder: 'hover:border-accent/50',
    arrowColor: 'group-hover:text-accent',
  },
  {
    label: 'LinkedIn',
    sublabel: 'Professional network',
    value: 'linkedin.com/in/akash-patil-56659027b',
    href: 'https://www.linkedin.com/in/akash-patil-56659027b',
    icon: FaLinkedin,
    color: 'text-brand',
    iconBg: 'bg-brand/10 border-brand/20',
    hoverBorder: 'hover:border-brand/50',
    arrowColor: 'group-hover:text-brand',
  },
  {
    label: 'GitHub',
    sublabel: 'Open-source code repositories',
    value: 'github.com/akashpatil8150',
    href: 'https://github.com/akashpatil8150',
    icon: FaGithub,
    color: 'text-white',
    iconBg: 'bg-white/10 border-white/20',
    hoverBorder: 'hover:border-white/50',
    arrowColor: 'group-hover:text-white',
  },
  {
    label: 'Hugging Face',
    sublabel: 'Interactive spaces & models',
    value: 'huggingface.co/Akash8150',
    href: 'https://huggingface.co/Akash8150',
    icon: SiHuggingface,
    color: 'text-brand-3',
    iconBg: 'bg-brand-3/10 border-brand-3/20',
    hoverBorder: 'hover:border-brand-3/50',
    arrowColor: 'group-hover:text-brand-3',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Heading */}
        <SectionHeading
          badge="Initiate Connection"
          badgeColor="brand"
          title="Let's Build Something"
          gradientTitle="Intelligent."
          description="Looking to collaborate on agentic AI workflows, real-time voice pipelines, domain RAG systems, or Python backend services? Get in touch."
          inView={inView}
        />

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-8 p-4 rounded-2xl bg-panel-2/90 border border-brand-2/30 shadow-lg flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-brand-2 animate-pulse shrink-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-primary font-mono">
                Available for AI / ML / Data / Backend opportunities.
              </div>
              <div className="text-[11px] text-muted font-mono mt-0.5">
                Full-time AI Developer & Engineering Roles &middot; Panvel, Maharashtra
              </div>
            </div>
          </div>
          <span className="hidden sm:inline-flex px-3 py-1 rounded-xl bg-brand-2/10 border border-brand-2/25 text-brand-2 text-xs font-mono font-bold">
            Open
          </span>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {contacts.map((c, i) => {
            const Icon = c.icon
            const isClickable = c.href !== '#'
            const Component = isClickable ? motion.a : motion.div

            return (
              <Component
                key={c.label}
                {...(isClickable ? {
                  href: c.href,
                  target: c.href.startsWith('mailto') || c.href.startsWith('tel') ? undefined : '_blank',
                  rel: 'noopener noreferrer'
                } : {})}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`flex items-center gap-3.5 p-4 rounded-2xl bg-panel/80 border border-border transition-all duration-300 ${c.hoverBorder} hover:bg-panel-2 hover:-translate-y-0.5 group shadow-lg ${isClickable ? 'cursor-pointer' : ''}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${c.iconBg} transition-transform group-hover:scale-105`}>
                  <Icon className={`w-4 h-4 ${c.color}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary text-xs sm:text-sm">
                      {c.label}
                    </span>
                    <span className="text-[10px] text-dim font-mono">
                      &middot; {c.sublabel}
                    </span>
                  </div>
                  <div className="text-muted text-xs font-mono truncate mt-0.5 group-hover:text-primary transition-colors">
                    {c.value}
                  </div>
                </div>

                {isClickable && (
                  <span className={`text-dim transition-all duration-200 ${c.arrowColor} group-hover:translate-x-0.5 pr-1`}>
                    <FaArrowRight className="w-3 h-3" />
                  </span>
                )}
              </Component>
            )
          })}
        </div>

        {/* Quick Resume Download Card */}
        <div className="max-w-3xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-brand/10 via-panel-2 to-brand-2/10 border border-brand/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
          >
            <div>
              <h4 className="text-base font-bold text-primary flex items-center gap-2">
                <span>📄</span> Need a formal curriculum vitae?
              </h4>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Download my verified resume covering internship deliverables at WERQ Labs, postgraduate MSc Data Analytics credentials, and AI systems.
              </p>
            </div>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Akash_Patil_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand text-white font-bold text-xs sm:text-sm hover:bg-brand/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand/25 shrink-0"
            >
              <FaDownload className="text-xs" />
              <span>Download Resume PDF</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
