import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import contactMeImg from '../assets/images/contact-me3-rbg.png'

const specialties = ['Full-Stack', 'Backend', 'DevOps']

export default function ResumeCTA() {
  return (
    <section
      id="resume"
      className="relative bg-[#0c0a09] text-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background warm ambient glow to connect with adjacent sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] opacity-15"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(242, 101, 34, 0.18) 0%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card Container reproducing reference design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#131922] border border-white/[0.08] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/60"
        >
          {/* Subtle Blueprint / CAD Architectural Drafting Watermark in Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 400"
            >
              <defs>
                <pattern
                  id="blueprintGrid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0.75"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
              {/* Architectural drafting guide lines matching reference blueprint */}
              <line
                x1="0"
                y1="100"
                x2="1000"
                y2="100"
                stroke="#f26522"
                strokeWidth="0.8"
                strokeDasharray="6 6"
              />
              <line
                x1="0"
                y1="300"
                x2="1000"
                y2="300"
                stroke="#ffffff"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
              <line
                x1="320"
                y1="0"
                x2="320"
                y2="400"
                stroke="#ffffff"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
              <circle
                cx="320"
                cy="200"
                r="120"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
                strokeDasharray="3 3"
              />
            </svg>
          </div>

          {/* Deep Navy/Charcoal Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d121a]/95 via-[#131922]/85 to-[#0e131b]/95 pointer-events-none" />

          {/* Grid Layout: Left cutout image + Right content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-end min-h-[340px] sm:min-h-[380px] lg:min-h-[400px]">
            {/* Left Image Column: Person cutout anchored flush to bottom */}
            <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-start px-6 pt-8 md:pt-4 md:pl-10 lg:pl-14 self-end">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative max-w-[270px] sm:max-w-[310px] md:max-w-[340px] lg:max-w-[370px] -mb-1"
              >
                <img
                  src={contactMeImg}
                  alt="Hamza"
                  className="w-full h-auto object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.75)] select-none pointer-events-none"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Right Content Column */}
            <div className="md:col-span-7 lg:col-span-7 p-6 sm:p-10 lg:p-14 self-center text-left">
              {/* Heading matching two-tone treatment from reference */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4"
              >
                Want the <span className="text-[#f26522]">Full Picture?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl mb-6"
              >
                Explore my experience, technical skills, education, and selected
                projects in my résumé.
              </motion.p>

              {/* Specialties Strip matching the 3 checkmark points in reference */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 sm:gap-7 mb-7 sm:mb-8"
              >
                {specialties.map((spec) => (
                  <div key={spec} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#f26522] flex items-center justify-center text-white text-[9px] shadow-[0_0_8px_rgba(242,101,34,0.4)]">
                      <FaCheck />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                      {spec}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Action Button matching reference solid orange CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <a
                  href="/resume.pdf"
                  download="Hamza_Resume.pdf"
                  className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#f26522] hover:bg-[#ff7828] text-white text-sm sm:text-base font-bold rounded-lg shadow-lg shadow-[#f26522]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Download My Resume</span>
                  <HiArrowDown className="text-base" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

