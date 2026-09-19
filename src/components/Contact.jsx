import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import resumePdf from '../../assets/Akash_Patil_Resume.pdf'
import { 
  FaEnvelope, FaGithub, FaLinkedin, FaArrowRight, 
  FaDownload, FaComments, FaCheck
} from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

const contacts = [
  {
    label: 'Email',
    sublabel: 'Direct inquiry / Recruiters',
    value: 'akashpatil8150@gmail.com',
    href: 'mailto:akashpatil8150@gmail.com',
    icon: <FaEnvelope className="w-5 h-5 text-brand" />,
    iconBg: 'bg-brand/10 border-brand/20',
    hoverBorder: 'hover:border-brand/50',
    arrowColor: 'group-hover:text-brand',
  },
  {
    label: 'LinkedIn',
    sublabel: 'Professional network & recommendations',
    value: 'linkedin.com/in/akash-patil-56659027b',
    href: 'https://www.linkedin.com/in/akash-patil-56659027b',
    icon: <FaLinkedin className="w-5 h-5 text-brand" />,
    iconBg: 'bg-brand/10 border-brand/20',
    hoverBorder: 'hover:border-brand/50',
    arrowColor: 'group-hover:text-brand',
  },
  {
    label: 'GitHub',
    sublabel: 'Code repositories & open-source projects',
    value: 'github.com/akashpatil8150',
    href: 'https://github.com/akashpatil8150',
    icon: <FaGithub className="w-5 h-5 text-brand-2" />,
    iconBg: 'bg-brand-2/10 border-brand-2/20',
    hoverBorder: 'hover:border-brand-2/50',
    arrowColor: 'group-hover:text-brand-2',
  },
  {
    label: 'Hugging Face',
    sublabel: 'Model spaces, demos & datasets',
    value: 'huggingface.co/Akash8150',
    href: 'https://huggingface.co/Akash8150',
    icon: <SiHuggingface className="w-5 h-5 text-brand-3" />,
    iconBg: 'bg-brand-3/10 border-brand-3/20',
    hoverBorder: 'hover:border-brand-3/50',
    arrowColor: 'group-hover:text-brand-3',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label bg-brand/10 border border-brand/20 text-brand">
            Initiate Connection
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-primary tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted max-w-lg mx-auto mt-2 text-sm leading-relaxed">
            Interested in discussing AI engineering roles, multi-agent architectures, or practical ML implementations? Reach out through any channel below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`flex items-center gap-4 p-5 rounded-2xl bg-panel border border-border transition-all duration-300 ${c.hoverBorder} hover:bg-panel-2 hover:translate-x-1 group shadow-lg`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${c.iconBg} transition-transform group-hover:scale-105`}>
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary text-sm">{c.label}</span>
                  <span className="text-[11px] text-dim hidden sm:inline-block">· {c.sublabel}</span>
                </div>
                <div className="text-muted text-xs sm:text-sm font-mono truncate mt-0.5 group-hover:text-primary transition-colors">
                  {c.value}
                </div>
              </div>
              <span className={`text-dim transition-all duration-200 ${c.arrowColor} group-hover:translate-x-1 pr-2`}>
                <FaArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}

          {/* Quick Resume Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-brand/10 via-panel-2 to-brand-2/10 border border-brand/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8"
          >
            <div>
              <h4 className="text-base font-bold text-primary flex items-center gap-2">
                <span>📄</span> Need a formal curriculum vitae?
              </h4>
              <p className="text-xs text-muted mt-1">
                Download my up-to-date resume covering educational credentials, internship experience, and technical competencies.
              </p>
            </div>
            <a
              href={resumePdf}
              download="Akash_Patil_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand text-white font-semibold text-xs sm:text-sm hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 shrink-0"
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
