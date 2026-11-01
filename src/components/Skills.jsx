import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5,
  SiSpringboot, SiPython, SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiGit, SiLinux, SiJenkins,
} from 'react-icons/si'
import { FaJava, FaCloud } from 'react-icons/fa'

const categories = [
  {
    title: 'Backend',
    description: 'Robust server-side architecture, business logic & APIs',
    badgeStyle: 'bg-[#f26522] text-white shadow-md shadow-[#f26522]/25',
    accentColor: '#f26522',
    skills: [
      { name: 'Java', icon: FaJava, level: 95 },
      { name: 'Spring Boot', icon: SiSpringboot, level: 92 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 90 },
      { name: 'REST APIs & Systems', icon: FaJava, level: 92 },
      { name: 'Python', icon: SiPython, level: 85 },
      { name: 'Redis & Caching', icon: SiRedis, level: 80 },
    ],
  },
  {
    title: 'Frontend',
    description: 'Clean, responsive interfaces & state management',
    badgeStyle: 'bg-white/[0.05] text-[#f26522] border border-[#f26522]/30',
    accentColor: '#f26522',
    skills: [
      { name: 'React', icon: SiReact, level: 92 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
      { name: 'TypeScript', icon: SiTypescript, level: 88 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'HTML5 / CSS3', icon: SiHtml5, level: 95 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    description: 'Containerization, CI/CD automation & deployments',
    badgeStyle: 'bg-white/[0.05] text-[#f6d561] border border-[#f6d561]/30',
    accentColor: '#f6d561',
    skills: [
      { name: 'Docker', icon: SiDocker, level: 88 },
      { name: 'Cloud / AWS', icon: FaCloud, level: 82 },
      { name: 'Git & GitHub', icon: SiGit, level: 92 },
      { name: 'Linux / CLI', icon: SiLinux, level: 85 },
      { name: 'CI/CD Pipelines', icon: SiJenkins, level: 80 },
      { name: 'MongoDB', icon: SiMongodb, level: 82 },
    ],
  },
]

function SkillBar({ name, icon: Icon, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <Icon className="text-[#8c857e] group-hover:text-[#f26522] transition-colors duration-200" size={16} />
          <span className="text-sm text-[#e6e0da] font-medium group-hover:text-white transition-colors duration-200">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono text-[#a39c94]">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.15, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-[#f26522] via-[#ff7828] to-[#f6d561] rounded-full shadow-[0_0_8px_rgba(242,101,34,0.35)]"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0c0a09] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background warm ambient glow matching previous sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-20">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(242, 101, 34, 0.2) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          {/* Section Label: My Skills */}
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#f26522] uppercase mb-3 block">
            My Skills
          </span>

          {/* Main Heading: Technical Expertise */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Technical <span className="text-[#f26522]">Expertise</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a39c94] max-w-xl mx-auto leading-relaxed">
            A comprehensive toolkit built through hands-on experience developing
            reliable full-stack web applications and robust backend services.
          </p>

          {/* Warm Amber Accent Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#f26522] to-[#f6d561] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.12 }}
              className="relative bg-[#141211] hover:bg-[#181615] border border-white/[0.07] hover:border-white/[0.14] rounded-2xl p-6 sm:p-7 transition-all duration-300 group shadow-lg shadow-black/25 hover:shadow-black/45 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Left Edge Accent Indicator Tab */}
              <div
                className="absolute left-0 top-6 w-1 h-9 rounded-r-full shadow-[0_0_10px_rgba(242,101,34,0.45)]"
                style={{ backgroundColor: cat.accentColor }}
              />

              <div>
                {/* Category Header */}
                <div className="mb-6">
                  <div className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold mb-2.5 ${cat.badgeStyle}`}>
                    {cat.title}
                  </div>
                  <p className="text-[#8c857e] text-xs sm:text-[13px] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      delay={catIndex * 0.1 + i * 0.05}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
