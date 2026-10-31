import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5,
  SiNodedotjs, SiExpress, SiPython, SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiGit, SiFigma, SiLinux, SiJenkins,
} from 'react-icons/si'
import { FaCloud } from 'react-icons/fa'

const categories = [
  {
    title: 'Frontend',
    description: 'Building beautiful, responsive user interfaces',
    gradient: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'React', icon: SiReact, level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, level: 88 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
      { name: 'TypeScript', icon: SiTypescript, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'HTML/CSS', icon: SiHtml5, level: 98 },
    ],
  },
  {
    title: 'Backend',
    description: 'Creating robust and scalable server-side solutions',
    gradient: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 90 },
      { name: 'Express', icon: SiExpress, level: 88 },
      { name: 'Python', icon: SiPython, level: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 87 },
      { name: 'MongoDB', icon: SiMongodb, level: 82 },
      { name: 'Redis', icon: SiRedis, level: 78 },
    ],
  },
  {
    title: 'DevOps & Tools',
    description: 'Streamlining development and deployment workflows',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Docker', icon: SiDocker, level: 85 },
      { name: 'AWS', icon: FaCloud, level: 80 },
      { name: 'Git', icon: SiGit, level: 92 },
      { name: 'Linux', icon: SiLinux, level: 83 },
      { name: 'Figma', icon: SiFigma, level: 75 },
      { name: 'CI/CD', icon: SiJenkins, level: 80 },
    ],
  },
]

function SkillBar({ name, icon: Icon, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="text-slate-400 group-hover:text-indigo-400 transition-colors" size={16} />
          <span className="text-sm text-slate-300 font-medium">{name}</span>
        </div>
        <span className="text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3 block">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            with modern technologies and best practices.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glass rounded-2xl p-6 lg:p-8 hover:bg-white/[0.07] transition-all duration-500 group"
            >
              {/* Category header */}
              <div className="mb-6">
                <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${cat.gradient} text-white text-xs font-semibold mb-3`}>
                  {cat.title}
                </div>
                <p className="text-slate-500 text-sm">{cat.description}</p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={catIndex * 0.1 + i * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
