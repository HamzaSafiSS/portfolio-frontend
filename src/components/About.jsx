import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import {
  SiReact, SiNodedotjs, SiTypescript, SiPython,
  SiPostgresql, SiDocker, SiGit,
} from 'react-icons/si'
import { FaCloud } from 'react-icons/fa'

const techStack = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: FaCloud, name: 'AWS', color: '#FF9900' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
]

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Completed' },
  { value: '3+', label: 'Happy Clients' },
  { value: '4+', label: 'Awards Won' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Turning Ideas Into{' '}
            <span className="gradient-text">Digital Reality</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Avatar side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative gradient behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl" />
              {/* Photo placeholder */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-5xl font-bold">
                      AM
                    </div>
                    <p className="text-slate-300 text-sm">Your Photo Here</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-5 py-3"
              >
                <p className="text-indigo-400 font-bold text-lg">5+</p>
                <p className="text-slate-400 text-xs">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              A passionate developer crafting modern web experiences
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              With over 5 years of experience in full-stack development, I specialize
              in building scalable web applications that combine elegant design with
              robust architecture. My approach blends creativity with technical
              excellence to deliver solutions that exceed expectations.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              tech blog posts and community meetups.
            </p>

            {/* Resume button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 mb-10"
            >
              <FaDownload size={14} />
              Download Resume
            </a>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center glass rounded-xl p-4"
                >
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8">
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map(({ icon: Icon, name, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.15, y: -5 }}
                className="group glass rounded-xl p-4 flex flex-col items-center gap-2 cursor-default"
              >
                <Icon
                  size={28}
                  className="transition-colors duration-300"
                  style={{ color }}
                />
                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
