import { useState } from 'react'
import { Globe, Menu, X } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6">
        <nav className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2 text-white no-underline">
            <Globe size={22} />
            <span className="font-semibold text-base sm:text-lg">Thanh Trong</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/75 hover:text-white text-sm font-medium transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/75 hover:text-white text-sm font-medium transition-colors duration-200 no-underline"
            >
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="liquid-glass rounded-full px-5 py-2 text-sm text-white no-underline hover:bg-white/10 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 bg-transparent border-none cursor-pointer text-white"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-medium no-underline hover:text-white/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-medium no-underline hover:text-white/60 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-medium underline underline-offset-4 no-underline hover:text-white/60 transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </>
  )
}

export default Navbar
