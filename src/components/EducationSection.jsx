import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { education, certifications } from '../data/portfolioData'
import TiltCard from './TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const edu = education[0]

function EducationSection() {
  return (
    <section id="education" className="section-padding relative bg-black">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Education
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="display-heading max-w-4xl mb-14"
        >
          Learning the <span className="italic">foundations.</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <TiltCard
            className="rounded-[2rem] p-6 sm:p-8 lg:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-1 overflow-hidden">
                <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading text-white truncate">{edu.school}</h3>
                    <p className="text-white/60 text-sm mt-0.5">{edu.degree}</p>
                  </div>
                  <span className="text-white/40 text-xs sm:text-sm whitespace-nowrap shrink-0">{edu.time}</span>
                </div>
                <p className="text-white/50 text-sm mt-2">GPA: {edu.gpa}</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/40 text-xs font-semibold tracking-[0.28em] uppercase mb-6"
        >
          Certifications
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * idx }}
            >
              <TiltCard
                className="rounded-[2rem] p-6 sm:p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Award size={18} className="text-white/50" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-heading text-white mb-1 truncate">
                      {cert.name}
                    </h4>
                    <p className="text-white/50 text-sm">
                      {cert.issuer}
                      {cert.detail ? ` — ${cert.detail}` : ''}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
