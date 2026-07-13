import { motion } from 'framer-motion'
import { Server, Database, Wrench, Sparkles } from 'lucide-react'
import { skills } from '../data/portfolioData'
import TiltCard from './TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const groupIcons = {
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  Other: Sparkles,
}

const groups = Object.entries(skills)

function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative bg-black">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Skills
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="display-heading max-w-4xl mb-14"
        >
          Tools I use to turn <span className="italic">logic into products.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {groups.map(([group, items], idx) => {
            const Icon = groupIcons[group]
            return (
              <motion.div
                key={group}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard
                  className="h-full rounded-[2rem] p-6 sm:p-8 relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      {Icon && <Icon size={16} className="text-white/50" />}
                    </div>
                    <h3 className="text-white/40 text-xs font-semibold tracking-[0.28em] uppercase">
                      {group}
                    </h3>
                    <span className="text-white/[0.1] text-xs ml-auto">{items.length} skills</span>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 relative z-10">
                    {items.map((skill, sIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 + sIdx * 0.04, duration: 0.3 }}
                        className="text-sm text-white/60 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
