import { motion } from 'framer-motion'
import {
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineCloud,
} from 'react-icons/hi'

const highlights = [
  {
    title: 'Backend Engineering',
    description: 'Business logic, APIs and system design',
    icon: HiOutlineServer,
  },
  {
    title: 'Data & Persistence',
    description: 'Relational modeling and database integrity',
    icon: HiOutlineDatabase,
  },
  {
    title: 'Security',
    description: 'Authentication, authorization and validation',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Deployment',
    description: 'Containers, CI/CD and cloud deployment',
    icon: HiOutlineCloud,
  },
]

const tickerItems = [
  'Backend Engineering',
  'Database Design',
  'Application Security',
  'Cloud Deployment',
]

export default function EngineeringHighlights() {
  return (
    <section
      id="highlights"
      className="relative bg-[#0c0a09] text-white pt-0 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Subtle ambient lighting continuation from the hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(242, 101, 34, 0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Additional Highlights Trust Strip Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 sm:gap-6 py-2 px-5 sm:px-8 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-md shadow-inner shadow-black/40 text-xs sm:text-[13px] font-medium text-[#9c948d]">
            {tickerItems.map((item, index) => (
              <div key={item} className="flex items-center gap-2.5 sm:gap-6">
                <span className="hover:text-white transition-colors whitespace-nowrap">
                  {item}
                </span>
                {index < tickerItems.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f26522]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Header: Applied Reference Design Geometry */}
        <div className="relative text-center mb-8 sm:mb-10">
          {/* Subtle Faded Watermark Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full">
            <span className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.25em] text-white/[0.025] uppercase">
              ENGINEERING
            </span>
          </div>

          {/* Reference Corner-Bracket Framed Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 inline-block mb-2.5"
          >
            <div className="relative inline-flex items-center px-4 py-1">
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#f26522]" />
              <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#f26522]" />
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#f26522]" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#f26522]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#dcd4cd] uppercase">
                Core Competencies
              </span>
            </div>
          </motion.div>

          {/* Section Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            <span className="text-[#f26522]">Engineering</span> Highlights
          </motion.h2>
        </div>

        {/* 4 Engineering Highlights Cards with Reference Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-[#141211] hover:bg-[#181615] border border-white/[0.07] hover:border-white/[0.14] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-lg shadow-black/25 hover:shadow-black/45 hover:-translate-y-1"
              >
                {/* Left Edge Accent Indicator Tab */}
                <div className="absolute left-0 top-5 w-1 h-8 rounded-r-full bg-[#f26522] shadow-[0_0_10px_rgba(242,101,34,0.45)]" />

                <div className="flex items-start gap-4 lg:flex-col lg:items-start">
                  {/* Circular Icon Container */}
                  <div className="shrink-0 w-11 h-11 rounded-full bg-[#201d1b] border border-white/[0.08] flex items-center justify-center lg:mb-3.5 group-hover:scale-105 group-hover:border-[#f26522]/35 transition-all duration-300">
                    <Icon className="text-[#f26522] text-xl" />
                  </div>

                  <div>
                    {/* Highlight Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#f26522] transition-colors">
                      {item.title}
                    </h3>

                    {/* Scope / Detail */}
                    <p className="text-xs sm:text-[13px] text-[#918a82] leading-relaxed font-normal">
                      {item.description}
                    </p>
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
