import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const filters = ['All', 'Web App', 'Mobile', 'Full-Stack', 'UI/UX']

const projects = [
  {
    title: 'CloudSync Dashboard',
    description:
      'A real-time cloud infrastructure monitoring dashboard with live metrics, alerting, and team collaboration features.',
    image: null,
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Web App', 'Full-Stack'],
    tech: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'FinTrack Pro',
    description:
      'Personal finance management app with AI-powered spending insights, budget tracking, and investment portfolio analysis.',
    image: null,
    gradient: 'from-indigo-500 to-purple-500',
    tags: ['Full-Stack', 'Web App'],
    tech: ['Next.js', 'Python', 'PostgreSQL', 'TensorFlow'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Artisan Marketplace',
    description:
      'An e-commerce platform for handcrafted goods featuring AR product preview, real-time chat, and secure payments.',
    image: null,
    gradient: 'from-purple-500 to-pink-500',
    tags: ['Full-Stack', 'Web App'],
    tech: ['React', 'Express', 'Stripe', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'FitPulse',
    description:
      'Fitness tracking mobile app with workout planning, nutrition logging, social challenges, and wearable device integration.',
    image: null,
    gradient: 'from-green-500 to-emerald-500',
    tags: ['Mobile', 'Full-Stack'],
    tech: ['React Native', 'Firebase', 'Node.js', 'Redis'],
    github: '#',
    demo: '#',
  },
  {
    title: 'DevCollab',
    description:
      'Real-time collaborative code editor with video chat, version control integration, and AI-assisted code review.',
    image: null,
    gradient: 'from-orange-500 to-red-500',
    tags: ['Web App', 'Full-Stack'],
    tech: ['Next.js', 'WebRTC', 'Monaco', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Brand Studio',
    description:
      'Brand identity design system generator with AI color palette suggestions, typography pairing, and export tools.',
    image: null,
    gradient: 'from-pink-500 to-rose-500',
    tags: ['UI/UX', 'Web App'],
    tech: ['React', 'Figma API', 'OpenAI', 'Canvas'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(active))

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A curated selection of projects that showcase my skills, creativity,
            and passion for building impactful digital products.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer ${
                active === f
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-500"
              >
                {/* Image / gradient placeholder */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                  <span className="relative text-white/80 text-4xl font-bold">
                    {project.title.split(' ').map(w => w[0]).join('')}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all hover:scale-110"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

