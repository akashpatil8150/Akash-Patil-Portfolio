import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-border/70 bg-bg-2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <span className="font-bold text-primary text-sm sm:text-base">
              Akash Patil
            </span>
            <span className="text-dim">·</span>
            <span className="text-xs sm:text-sm font-mono text-brand">
              AI Developer / AI Engineer
            </span>
          </div>
          <p className="text-muted text-xs font-mono mt-1">
            Panvel, Maharashtra, India &middot; MSc Data Analytics (April 2026)
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/akashpatil8150"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-sm" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/akash-patil-56659027b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-brand transition-colors text-xs font-semibold flex items-center gap-1.5"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-sm" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="https://huggingface.co/Akash8150"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-brand-3 transition-colors text-xs font-semibold flex items-center gap-1.5"
            aria-label="Hugging Face Spaces"
          >
            <SiHuggingface className="text-sm" />
            <span className="hidden sm:inline">Hugging Face</span>
          </a>

          <a
            href="mailto:akashpatil8150@gmail.com"
            className="text-muted hover:text-brand-2 transition-colors text-xs font-semibold flex items-center gap-1.5"
            aria-label="Send Email"
          >
            <FaEnvelope className="text-sm" />
            <span className="hidden sm:inline">Email</span>
          </a>

          {/* Back to top button (Section 22) */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-panel border border-border hover:border-brand/40 text-muted hover:text-primary transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  )
}
