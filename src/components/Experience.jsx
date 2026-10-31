import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'

const experiences = [
  {
    type: 'work',
    title: 'Senior Full-Stack Developer',
    company: 'TechVault Inc.',
    period: '2023 – Present',
    description:
      'Leading a team of 5 developers building a SaaS platform serving 100K+ users. Architected microservices backend and implemented real-time features.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'Digital Horizon Labs',
    period: '2021 – 2023',
    description:
      'Built and maintained multiple client-facing web applications. Reduced page load times by 40% through performance optimization and code splitting.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Redis'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Skyline Creative Agency',
    period: '2020 – 2021',
    description:
      'Developed responsive, pixel-perfect interfaces for 15+ client projects. Introduced component-based architecture reducing development time by 30%.',
    tech: ['React', 'Tailwind CSS', 'Figma', 'JavaScript'],
  },
  {
    type: 'education',
    title: 'B.Sc. Computer Science',
    company: 'University of Technology',
    period: '2016 – 2020',
    description:
      'Graduated with honors. Focused on software engineering, algorithms, and human-computer interaction. Led the university coding club.',
    tech: ['Java', 'Python', 'Data Structures', 'Algorithms'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3 block">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-indigo-500 flex items-center justify-center z-10">
                  {exp.type === 'work' ? (
                    <HiBriefcase className="text-indigo-400" size={14} />
                  ) : (
                    <HiAcademicCap className="text-purple-400" size={14} />
                  )}
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[45%] ${
                  isLeft ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-500 group">
                    <span className="text-xs text-indigo-400 font-medium">{exp.period}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{exp.title}</h3>
                    <p className="text-sm text-purple-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 bg-indigo-500/10 text-indigo-300 rounded-lg border border-indigo-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

