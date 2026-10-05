import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { educationList, certificationsList } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { 
  FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, 
  FaBook, FaCertificate, FaAward, FaCheckCircle 
} from 'react-icons/fa'
import { SiCisco, SiSalesforce } from 'react-icons/si'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-20 lg:py-28 bg-bg-2 relative scroll-mt-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Heading */}
        <SectionHeading
          badge="Academic & Certifications"
          badgeColor="accent"
          title="Education &"
          gradientTitle="Credentials"
          description="Formal academic degrees from Pillai College of Arts, Commerce & Science and industry certifications in AI and data analytics."
          inView={inView}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formal Degrees Timeline (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
              <FaGraduationCap className="text-brand-2 text-xl" />
              <span>Academic Degrees</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-border/80 space-y-8">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-panel-2 border-2 border-brand-2 group-hover:bg-brand-2 transition-colors shadow-sm" />

                  <SpotlightCard
                    spotlightColor="rgba(0, 212, 170, 0.1)"
                    borderColor="rgba(0, 212, 170, 0.3)"
                    className="p-6 bg-panel/75 backdrop-blur-md shadow-xl space-y-3"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-2/10 text-brand-2 border border-brand-2/20 uppercase">
                            {edu.shortDegree}
                          </span>
                          <span className="text-xs font-mono text-muted">
                            {edu.duration}
                          </span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-black text-primary mt-1">
                          {edu.degree}
                        </h4>

                        <p className="text-sm font-semibold text-brand mt-0.5">
                          {edu.institution}
                        </p>
                      </div>

                      <span className="px-2.5 py-1 rounded-lg bg-panel-2 border border-border text-[11px] font-mono text-muted">
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-xs text-muted leading-relaxed">
                      {edu.details}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Industry Certifications (Col 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
              <FaAward className="text-accent text-xl" />
              <span>Industry Certifications (2024)</span>
            </h3>

            <div className="space-y-3.5">
              {certificationsList.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.1 }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(245, 158, 11, 0.1)"
                    borderColor="rgba(245, 158, 11, 0.3)"
                    className="p-5 bg-panel/75 backdrop-blur-md shadow-lg flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                      {cert.issuer === 'Salesforce' ? (
                        <SiSalesforce className="text-blue-400" />
                      ) : (
                        <SiCisco className="text-cyan-400" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-panel-2 border border-border text-muted">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-dim">
                          {cert.year}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-primary mt-1 group-hover:text-accent transition-colors truncate">
                        {cert.title}
                      </h5>

                      <div className="text-[11px] text-muted font-mono mt-0.5 flex items-center gap-1.5">
                        <FaCheckCircle className="text-brand-2 text-[10px]" />
                        <span>Verified Credential</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            {/* Note box */}
            <div className="p-4 rounded-2xl bg-panel-2 border border-border/80 text-xs text-muted space-y-1 mt-4">
              <span className="font-semibold text-primary font-mono block">Credential Standard:</span>
              <span>All certifications earned in 2024 focusing on practical enterprise AI agent configuration and analytical foundations.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
