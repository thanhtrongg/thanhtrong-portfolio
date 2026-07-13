import { motion } from 'framer-motion'
import { Mail, GitBranch, ExternalLink, MapPin, Phone, Copy, Check, Download } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import TiltCard from './TiltCard'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const contactItems = [
  { label: 'Email', value: personalInfo.email, icon: Mail, href: `mailto:${personalInfo.email}` },
  { label: 'Phone', value: personalInfo.phone, icon: Phone },
  { label: 'Location', value: personalInfo.location, icon: MapPin },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/trọng-trần-thanh',
    icon: ExternalLink,
    href: personalInfo.linkedin,
  },
]

function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <section id="contact" className="section-padding relative bg-black">
      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="display-heading max-w-4xl mx-auto"
          >
            Let&apos;s build something <span className="italic">reliable.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-6 mb-10"
          >
            Open to backend developer internship opportunities and real-world software projects.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10"
          >
            {contactItems.map((item) => {
              const Icon = item.icon
              const inner = (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-white/60" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-white/40 text-xs tracking-[0.28em] uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-white text-sm sm:text-base truncate">{item.value}</p>
                  </div>
                </div>
              )
              return (
                <TiltCard
                  key={item.label}
                  className="rounded-[2rem] p-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline block"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </TiltCard>
              )
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-medium no-underline hover:opacity-90 transition-opacity"
            >
              <Mail size={16} /> Email Me
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 liquid-glass rounded-full px-6 py-3 text-sm text-white no-underline hover:bg-white/10 transition-colors"
            >
              <GitBranch size={16} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 liquid-glass rounded-full px-6 py-3 text-sm text-white no-underline hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={16} /> LinkedIn
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 liquid-glass rounded-full px-6 py-3 text-sm text-white no-underline hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied' : 'Copy Email'}
            </button>
            <a
              href="/data/Tran%20Thanh%20Trong-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 liquid-glass rounded-full px-6 py-3 text-sm text-white no-underline hover:bg-white/10 transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
