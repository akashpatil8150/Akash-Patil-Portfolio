import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import resumePdf from '../../assets/Akash_Patil_Resume.pdf'
import { FaDownload, FaBars, FaTimes, FaTerminal } from 'react-icons/fa'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Flagship Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Archive', id: 'additional-work' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section detection
      const scrollPos = window.scrollY + 120
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id)
        if (el && el.offsetTop <= scrollPos) {
          setActive(links[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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
          ? 'bg-bg/85 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Brand */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand via-blue-600 to-brand-3 flex items-center justify-center shadow-lg shadow-brand/30 group-hover:scale-105 transition-transform duration-300">
              <span className="font-mono font-black text-white text-sm">AP</span>
            </div>
            <div>
              <div className="font-bold text-primary text-sm tracking-wide group-hover:text-brand transition-colors">
                Akash Patil
              </div>
              <div className="text-[10px] font-mono text-muted -mt-0.5">
                AI Engineer
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-panel/50 p-1.5 rounded-xl border border-border/60">
            {links.map(link => {
              const isSelected = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    isSelected 
                      ? 'text-primary bg-panel-2 border border-border shadow-sm text-brand' 
                      : 'text-muted hover:text-primary hover:bg-white/[0.02]'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Right Action: Resume & Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={resumePdf}
              download="Akash_Patil_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand text-white text-xs font-bold hover:bg-brand/90 transition-all hover:scale-105 shadow-md shadow-brand/25 cursor-pointer"
            >
              <FaDownload className="text-[11px]" />
              <span>Resume</span>
            </a>

            <button
              className="lg:hidden text-muted hover:text-primary p-2 rounded-xl bg-panel border border-border transition-colors cursor-pointer"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle navigation menu"
            >
              {open ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-border bg-bg/95 backdrop-blur-2xl rounded-b-2xl px-3 py-3 space-y-1 shadow-2xl"
            >
              {links.map(link => (
                <button 
                  key={link.id} 
                  onClick={() => scrollTo(link.id)} 
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    active === link.id 
                      ? 'bg-panel-2 text-brand border border-border' 
                      : 'text-muted hover:text-primary hover:bg-panel'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <a 
                  href={resumePdf} 
                  download="Akash_Patil_Resume.pdf" 
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-brand text-white text-xs font-bold text-center"
                >
                  <FaDownload className="text-xs" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
