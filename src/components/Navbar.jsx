import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RESUME_URL } from '../data/resume'
import { FaDownload, FaBars, FaTimes, FaTerminal } from 'react-icons/fa'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Archive', id: 'additional-work' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Active section detection with viewport offset
      const scrollPos = window.scrollY + 180
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(links[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
    setActive(id)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 sm:py-3'
          : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 rounded-2xl px-4 py-2.5 ${
            scrolled
              ? 'bg-bg/85 backdrop-blur-xl border border-border/80 shadow-2xl shadow-black/40'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo / Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
            aria-label="Scroll to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand via-blue-600 to-brand-3 flex items-center justify-center shadow-lg shadow-brand/25 group-hover:scale-105 transition-transform duration-300 border border-white/10">
              <span className="font-mono font-black text-white text-xs sm:text-sm">AP</span>
            </div>
            <div>
              <div className="font-bold text-primary text-sm tracking-tight group-hover:text-brand transition-colors">
                Akash Patil
              </div>
              <div className="text-[10px] font-mono text-muted -mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-2 animate-pulse" />
                <span>AI Developer / Engineer</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation with Animated Motion Pill Indicator */}
          <nav 
            className="hidden lg:flex items-center gap-1 bg-panel/60 p-1 rounded-xl border border-border/60 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {links.map((link) => {
              const isSelected = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                    isSelected ? 'text-white' : 'text-muted hover:text-primary'
                  }`}
                >
                  {/* Motion layout pill gliding between links */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-panel-2 border border-brand/40 rounded-lg shadow-[0_0_12px_rgba(79,140,255,0.25)] z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Right Action: Resume & Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Akash_Patil_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand text-white text-xs font-bold hover:bg-brand/90 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-brand/25 cursor-pointer"
            >
              <FaDownload className="text-[11px]" />
              <span>Resume</span>
            </a>

            <button
              className="lg:hidden text-muted hover:text-primary p-2.5 rounded-xl bg-panel/80 border border-border transition-colors cursor-pointer focus:outline-none"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden mt-2 p-3 rounded-2xl border border-border bg-bg/95 backdrop-blur-2xl shadow-2xl space-y-1"
            >
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                    active === link.id
                      ? 'bg-panel-2 text-brand border border-brand/30'
                      : 'text-muted hover:text-primary hover:bg-panel'
                  }`}
                >
                  <span>{link.label}</span>
                  {active === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  )}
                </button>
              ))}
              <div className="pt-2 border-t border-border/60">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Akash_Patil_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-brand text-white text-xs font-bold text-center shadow-lg shadow-brand/20"
                >
                  <FaDownload className="text-xs" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
