import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'
import { experience, skills } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stats = [
  { label: 'Repositories', value: '17+' },
  { label: 'Skills', value: Object.values(skills).flat().length },
  { label: 'Experience', value: experience.length },
  { label: 'Certifications', value: '6+' },
]

function AboutSection() {
  return (
    <section id="about" className="section-padding relative bg-black">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          About
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="display-heading max-w-5xl"
        >
          A <span className="italic">backend-focused</span> developer creating{' '}
          <span className="italic">practical systems</span> with clean structure.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mt-8"
        >
          I&apos;m {personalInfo.name}, a {personalInfo.role} and Software Engineering student at
          FPT University. I focus on building reliable backend systems&mdash;from designing database
          schemas to crafting RESTful APIs. I believe in clean, maintainable code and practical
          solutions that solve real problems.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <p className="font-heading text-3xl sm:text-4xl text-white mb-1">{s.value}</p>
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
