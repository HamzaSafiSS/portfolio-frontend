import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap, HiCode, HiSparkles } from 'react-icons/hi'

const experiences = [
  {
    period: 'February 2024',
    title: 'Beginning My Software Development Journey',
    organization: 'Independent Learning',
    description:
      'Began my journey into software development with a commitment to learning programming and understanding how software is designed and built. Started developing problem-solving skills and exploring the technologies and principles behind modern applications.',
    tech: ['Programming', 'Fundamentals', 'Java', 'Problem Solving'],
    icon: HiSparkles,
  },
  {
    period: '2024 – 2025',
    title: 'Software Engineering Student & Developer',
    organization: 'Dire Dawa University',
    description:
      'Started developing a foundation in software engineering, programming, and problem-solving. Focused on learning programming fundamentals, understanding software development principles, and building practical technical skills through continuous learning and hands-on practice.',
    tech: ['Java', 'Python', 'Programming', 'OOP', 'Data Structures'],
    icon: HiAcademicCap,
  },
  {
    period: '2025 – 2026',
    title: 'WordPress Developer',
    organization: 'AfroZeal IT Consultancy',
    description:
      'Worked on website development and customization, building and managing websites using WordPress. Created page layouts, customized themes, optimized websites for search engines, and managed website hosting through cPanel.',
    tech: ['WordPress', 'Elementor', 'Divi', 'SEO', 'cPanel'],
    icon: HiBriefcase,
  },
  {
    period: '2026 – Present',
    title: 'Full-Stack Software Developer',
    organization: 'Independent Projects & Professional Development',
    description:
      'Building practical web applications with a strong focus on backend engineering, database design, API development, and application security. Developing end-to-end solutions while strengthening skills in system architecture, frontend integration, and deployment.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'MySQL', 'Docker'],
    icon: HiCode,
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#0c0a09] text-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background warm ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] pointer-events-none opacity-20">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(242, 101, 34, 0.2) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Section Label: Experience */}
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#f26522] uppercase mb-3 block">
            Experience
          </span>

          {/* Main Heading: My Professional Journey */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            My Professional <span className="text-[#f26522]">Journey</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a39c94] max-w-xl mx-auto leading-relaxed">
            A chronological timeline of practical development work, institutional
            learning, and dedicated engineering growth.
          </p>

          {/* Warm Amber Accent Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#f26522] to-[#f6d561] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Track */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-2 bottom-6 w-[2px] bg-gradient-to-b from-[#f26522] via-[#f26522]/50 to-transparent pointer-events-none" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0
            const Icon = exp.icon

            return (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, x: isLeft ? -35 : 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start mb-12 sm:mb-14 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#161413] border-2 border-[#f26522] shadow-[0_0_14px_rgba(242,101,34,0.45)] flex items-center justify-center z-10">
                  <Icon className="text-[#f26522] text-sm" />
                </div>

                {/* Card Container */}
                <div
                  className={`ml-14 md:ml-0 md:w-[46%] ${
                    isLeft ? 'md:pr-10' : 'md:pl-10'
                  }`}
                >
                  <div className="relative bg-[#141211] hover:bg-[#181615] border border-white/[0.07] hover:border-white/[0.14] rounded-2xl p-6 sm:p-7 transition-all duration-300 group shadow-lg shadow-black/25 hover:shadow-black/45 hover:-translate-y-1">
                    {/* Left Edge Accent Indicator Tab */}
                    <div className="absolute left-0 top-6 w-1 h-9 rounded-r-full bg-[#f26522] shadow-[0_0_10px_rgba(242,101,34,0.45)]" />

                    {/* Period Badge */}
                    <span className="text-xs font-semibold text-[#f26522] mb-1.5 inline-block tracking-wide">
                      {exp.period}
                    </span>

                    {/* Role Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#f26522] transition-colors">
                      {exp.title}
                    </h3>

                    {/* Organization / Company */}
                    <p className="text-xs sm:text-sm font-medium text-[#f6d561] mb-3.5">
                      {exp.organization}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#938c84] leading-relaxed mb-5 font-normal">
                      {exp.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 bg-white/[0.03] text-[#dcd4cd] rounded-lg border border-white/[0.08] hover:border-[#f26522]/40 hover:text-white transition-colors"
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
