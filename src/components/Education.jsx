import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBook } from 'react-icons/fa'

const subjects = [
  'Machine Learning & Deep Learning',
  'Natural Language Processing',
  'Applied Probability & Statistics',
  'Data Engineering & Big Data',
  'Vector Mathematics & Search',
  'Data Visualization & Analytics'
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-20 lg:py-28 bg-bg-2 relative scroll-mt-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label bg-accent/10 border border-accent/20 text-accent">
            Academic Background
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-primary tracking-tight">
            Education
          </h2>
          <p className="text-muted text-sm mt-2 max-w-md mx-auto">
            Formal postgraduate foundation in analytics, statistical modeling, and machine intelligence.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Timeline gradient trace */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand-2 to-brand-3" />

            <div className="relative pl-14 sm:pl-16 pb-2">
              {/* Timeline Indicator Dot */}
              <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-brand border-4 border-bg-2 shadow-md shadow-brand/50" />

              <div className="card p-6 sm:p-8 bg-panel border-border hover:border-brand/40 transition-all duration-300 group shadow-xl">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-2/10 text-brand-2 border border-brand-2/20 uppercase tracking-wide">
                      Master's Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-primary mt-1.5 group-hover:text-brand transition-colors">
                      MSc Data Analytics
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted font-medium mt-1">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-brand text-xs" />
                        Graduated April 2026
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-brand-2 text-xs" />
                        India
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-xl bg-brand-2/10 border border-brand-2/25 text-brand-2 text-xs font-bold">
                    Completed
                  </span>
                </div>

                <p className="text-muted leading-relaxed text-xs sm:text-sm">
                  Rigorous postgraduate curriculum covering supervised and unsupervised learning algorithms, neural network design, high-dimensional vector representations, natural language parsing, and end-to-end data pipeline construction.
                </p>

                <div className="pt-5 mt-4 border-t border-border/70">
                  <h4 className="text-xs font-mono font-bold uppercase text-dim tracking-wider mb-3 flex items-center gap-2">
                    <FaBook className="text-xs text-brand" />
                    Key Focus Disciplines
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map(s => (
                      <span 
                        key={s} 
                        className="px-3 py-1 rounded-lg bg-panel-2 border border-border text-muted text-xs font-medium hover:border-brand/30 hover:text-primary transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
