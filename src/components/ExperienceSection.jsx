import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'
import TiltCard from './TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative bg-black">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Experience
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="display-heading max-w-4xl mb-14"
        >
          Where I&apos;ve grown my <span className="italic">craft.</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-6">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-12 sm:pl-14"
              >
                <div className="absolute left-[12px] sm:left-[12px] top-6 w-[15px] h-[15px] rounded-full bg-white/20 border-2 border-black" />

                <TiltCard
                  className="rounded-[2rem] p-6 sm:p-8 lg:p-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div className="flex items-start gap-3">
                      {item.logo && (
                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
                          <img src={item.logo} alt={item.company} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-heading text-white">{item.role}</h3>
                        <p className="text-white/50 text-sm mt-0.5">{item.company}</p>
                      </div>
                    </div>
                    <span className="text-white/40 text-sm whitespace-nowrap">{item.time}</span>
                  </div>

                  <ul className="space-y-2">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="text-white/60 text-sm flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-white/50 hover:text-white text-sm no-underline transition-colors mt-3"
                  >
                    {item.website}
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
