import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { secondaryProjects } from '../data/projects'
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaCube } from 'react-icons/fa'
import { SiHuggingface, SiStreamlit } from 'react-icons/si'

export default function AdditionalWork() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="additional-work" className="py-20 lg:py-24 relative scroll-mt-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label bg-brand-3/10 border border-brand-3/20 text-brand-3">
            Open-Source & Archives
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-primary tracking-tight">
            Additional Projects & Live Spaces
          </h2>
          <p className="text-muted max-w-xl mx-auto mt-2 text-sm leading-relaxed">
            Secondary open-source applications, deep learning experiments, and interactive Hugging Face spaces built prior to and alongside my internship.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card p-6 bg-panel/50 hover:bg-panel border-border hover:border-brand/35 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-panel-2 border border-border group-hover:scale-110 transition-transform">
                      {project.emoji}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-primary group-hover:text-brand transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-mono text-muted uppercase">
                        {project.year} · {project.tags[0]}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-brand-2/10 text-brand-2 border border-brand-2/20 shrink-0">
                    {project.status}
                  </span>
                </div>

                <p className="text-xs text-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-panel-2 border border-border text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-4 border-t border-border/60">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary font-semibold transition-colors"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand/10 border border-brand/20 text-brand hover:bg-brand/20 text-xs font-semibold transition-all"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
