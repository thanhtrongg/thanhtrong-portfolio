import { motion } from 'framer-motion'
import { ArrowUpRight, Users, Database, Layout, GitPullRequest } from 'lucide-react'
import { projects } from '../data/portfolioData'
import TiltCard from './TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const main = projects[0]
const others = projects.slice(1)

function MetricBadge({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 whitespace-nowrap">
      {Icon && <Icon size={12} />}
      {text}
    </span>
  )
}

const mainMetrics = [
  { icon: Users, text: 'Team of 4' },
  { icon: Database, text: 'PostgreSQL' },
  { icon: Layout, text: '5 Modules' },
  { icon: GitPullRequest, text: 'RESTful APIs' },
]

function ProjectCard({ project, accent = false, metrics }) {
  return (
    <TiltCard
      className={`rounded-[2rem] p-6 sm:p-8 lg:p-10 h-full ${
        accent
          ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_20px_60px_rgba(0,0,0,0.4)]'
          : 'bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
      }`}
      style={{
        backdropFilter: accent ? 'blur(32px)' : 'blur(20px)',
        WebkitBackdropFilter: accent ? 'blur(32px)' : 'blur(20px)',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-heading text-white">{project.name}</h3>
          <p className="text-white/50 text-sm mt-1">
            {project.role} &middot; {project.time}
          </p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 bg-white text-black rounded-full px-5 py-2.5 text-sm font-medium no-underline hover:opacity-90 transition-opacity shrink-0"
        >
          {accent ? 'View Project' : 'Visit Site'} <ArrowUpRight size={15} />
        </a>
      </div>

      {metrics && (
        <div className="flex flex-wrap gap-2 mb-5">
          {metrics.map((m, i) => (
            <MetricBadge key={i} icon={m.icon} text={m.text} />
          ))}
        </div>
      )}

      <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-5">
        {project.description}
      </p>

      {project.responsibilities && (
        <ul className="space-y-2 mb-6">
          {project.responsibilities.map((item, i) => (
            <li key={i} className="text-white/60 text-sm flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
          >
            {t}
          </span>
        ))}
      </div>
    </TiltCard>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative bg-black">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Selected Work
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="display-heading max-w-4xl mb-14"
        >
          Projects that shaped my <span className="italic">backend thinking.</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-6"
        >
          <ProjectCard project={main} accent metrics={mainMetrics} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {others.map((project, idx) => {
            const isLastOdd = idx === others.length - 1 && others.length % 2 !== 0
            return (
              <motion.div
                key={project.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className={`h-full ${isLastOdd ? 'md:col-span-2' : ''}`}
              >
                <ProjectCard project={project} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
