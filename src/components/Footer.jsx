import { ChevronUp, Code2, ExternalLink, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-10 px-6 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs sm:text-sm order-3 md:order-1">
            &copy; {new Date().getFullYear()} Trần Thanh Trọng. All rights reserved.
          </p>

          <div className="flex items-center gap-5 order-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="order-1 md:order-3 inline-flex items-center gap-1.5 text-white/40 hover:text-white text-xs sm:text-sm bg-transparent border-none cursor-pointer transition-colors"
            aria-label="Back to top"
          >
            Back to top <ChevronUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
