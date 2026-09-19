import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-bg-2">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="text-primary font-bold text-sm">
            Akash Patil · AI Developer & AI Engineer
          </p>
          <p className="text-dim text-xs mt-0.5">
            Enterprise Internship @ WERQ Labs Pvt. Ltd. · MSc Data Analytics
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/akashpatil8150"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-brand transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            <FaGithub className="text-sm" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/akash-patil-56659027b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-brand transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            <FaLinkedin className="text-sm" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://huggingface.co/Akash8150"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-brand transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            <SiHuggingface className="text-sm" />
            <span>Hugging Face</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
