import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, ExternalLink, Mail, Phone, MapPin, Download } from 'lucide-react'
import BackgroundVideo from './BackgroundVideo'
import { personalInfo } from '../data/portfolioData'

const stagger = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-28 text-center">
      <BackgroundVideo />

      <div className="absolute inset-0 bg-black/25" />
      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="liquid-glass rounded-full px-4 py-2"
        >
          <span className="text-white/80 text-xs sm:text-sm font-medium">
            Backend Developer Intern &bull; Ho Chi Minh City
          </span>
        </motion.div>

        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="font-heading mt-7 max-w-5xl text-[clamp(3.6rem,12vw,11rem)] leading-[0.82] tracking-[-0.06em] text-white"
        >
          Building<br />
          <span className="italic">reliable APIs</span><br />
          for real products.
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mt-6"
        >
          I&apos;m Trần Thanh Trọng, a Software Engineering student focused on JavaScript, Node.js,
          Express.js, RESTful APIs, and PostgreSQL.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
        >
          <a
            href="https://parkmaster.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-black rounded-full px-6 py-3 text-sm font-medium no-underline hover:opacity-90 transition-opacity"
          >
            View ParkMaster <ArrowUpRight size={16} />
          </a>
          <a
            href="#projects"
            className="liquid-glass rounded-full px-6 py-3 text-sm text-white no-underline hover:bg-white/10 transition-colors"
          >
            Explore Projects
          </a>
          <a
            href="/data/Tran%20Thanh%20Trong-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 liquid-glass rounded-full px-6 py-3 text-sm text-white no-underline hover:bg-white/10 transition-colors"
          >
            <Download size={14} /> Resume
          </a>
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs sm:text-sm no-underline transition-colors"
          >
            <GitBranch size={14} /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs sm:text-sm no-underline transition-colors"
          >
            <ExternalLink size={14} /> LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs sm:text-sm no-underline transition-colors"
          >
            <Mail size={14} /> Email
          </a>
          <span className="flex items-center gap-1.5 text-white/40 text-xs sm:text-sm">
            <Phone size={14} /> {personalInfo.phone}
          </span>
          <span className="flex items-center gap-1.5 text-white/40 text-xs sm:text-sm">
            <MapPin size={14} /> {personalInfo.location}
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
