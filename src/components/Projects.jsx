import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'

// Import existing project images from assets/images
import rentCollectorImg from '../assets/images/rentcollector.webp'
import dentalClinicImg from '../assets/images/dental_clinic.webp'
import hotelImg from '../assets/images/hotel.webp'
import agencyImg from '../assets/images/agency.webp'

// The four requested projects with exact titles and matching real screenshots
const projects = [
  {
    id: 'rent-collector',
    title: 'Rent Collector',
    category: 'Full-Stack Property Management',
    tag: 'Backend & Systems',
    description:
      'An automated rental management and payment tracking system designed for property managers and landlords, featuring automated invoicing, tenant portals, and lease record tracking.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker'],
    highlights: ['Automated Invoicing', 'Tenant Portal', 'Payment Tracking'],
    image: rentCollectorImg,
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 'dental-clinic',
    title: 'Dental Clinic Management System',
    category: 'Healthcare EHR & Clinic Workflow',
    tag: 'Clinical Architecture',
    description:
      'A comprehensive clinical management platform managing patient records, dentist appointment schedules, clinical treatment histories, and automated billing with role-based access control.',
    tech: ['Spring Boot', 'PostgreSQL', 'React', 'Docker', 'REST API'],
    highlights: ['Patient Records', 'Doctor Scheduling', 'Billing & Treatments'],
    image: dentalClinicImg,
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 'hotel-website',
    title: 'Hotel Website',
    category: 'Hospitality & Direct Reservation',
    tag: 'Frontend & UI/UX',
    description:
      'A high-conversion hospitality showcase and room booking platform featuring interactive room galleries, real-time availability inquiries, and fluid mobile-responsive guest UI.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Framer Motion'],
    highlights: ['Interactive Suites', 'Booking Engine', 'Responsive Design'],
    image: hotelImg,
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 'agency',
    title: 'Agency',
    category: 'Digital Agency & Growth Funnel',
    tag: 'Web Application',
    description:
      'A sleek, high-impact digital agency web application featuring interactive service presentations, client case studies, responsive media grids, and optimized conversion pathways.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'SEO Optimization'],
    highlights: ['Client Lead Capture', 'Portfolio Showcase', 'Fast Performance'],
    image: agencyImg,
    github: 'https://github.com',
    demo: '#',
  },
]

// Slot configuration for 3D Coverflow carousel matching the reference design
// Negative offset: left receding cards | 0: center active card | Positive offset: right receding cards
const slotConfigs = [
  {
    offset: -3,
    xPercent: -68,
    scale: 0.66,
    zIndex: 5,
    opacity: 0.5,
    overlayOpacity: 'bg-black/50',
    visibilityClass: 'hidden lg:block',
  },
  {
    offset: -2,
    xPercent: -47,
    scale: 0.77,
    zIndex: 10,
    opacity: 0.75,
    overlayOpacity: 'bg-black/35',
    visibilityClass: 'hidden sm:block',
  },
  {
    offset: -1,
    xPercent: -25,
    scale: 0.88,
    zIndex: 20,
    opacity: 0.92,
    overlayOpacity: 'bg-black/20',
    visibilityClass: 'block',
  },
  {
    offset: 0,
    xPercent: 0,
    scale: 1.0,
    zIndex: 35,
    opacity: 1.0,
    overlayOpacity: 'bg-transparent',
    visibilityClass: 'block',
  },
  {
    offset: 1,
    xPercent: 25,
    scale: 0.88,
    zIndex: 20,
    opacity: 0.92,
    overlayOpacity: 'bg-black/20',
    visibilityClass: 'block',
  },
  {
    offset: 2,
    xPercent: 47,
    scale: 0.77,
    zIndex: 10,
    opacity: 0.75,
    overlayOpacity: 'bg-black/35',
    visibilityClass: 'hidden sm:block',
  },
  {
    offset: 3,
    xPercent: 68,
    scale: 0.66,
    zIndex: 5,
    opacity: 0.5,
    overlayOpacity: 'bg-black/50',
    visibilityClass: 'hidden lg:block',
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }, [])

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrev, handleNext])

  // Touch swipe support
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const diff = e.changedTouches[0].clientX - touchStartX
    if (diff > 40) {
      handlePrev()
    } else if (diff < -40) {
      handleNext()
    }
    setTouchStartX(null)
  }

  const activeProject = projects[activeIndex]

  return (
    <section
      id="projects"
      className="relative bg-[#0c0a09] text-white py-16 sm:py-20 lg:py-28 overflow-hidden select-none"
    >
      {/* Background warm ambient glow matching previous sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] opacity-20"
          style={{
            background:
              'radial-gradient(ellipse 65% 50% at center, rgba(242, 101, 34, 0.22) 0%, rgba(246, 213, 97, 0.08) 45%, transparent 75%)',
            filter: 'blur(75px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Section Label: Featured Projects */}
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#f26522] uppercase mb-3 block">
            Featured Projects
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Curated <span className="text-[#f26522]">Work & Systems</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a39c94] max-w-xl mx-auto leading-relaxed">
            A showcase of production-ready applications, backend architectures,
            and reliable web solutions built with modern engineering standards.
          </p>

          {/* Warm Amber Accent Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#f26522] to-[#f6d561] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* 3D Coverflow Carousel Stage */}
        <div
          className="relative py-6 sm:py-8 lg:py-10 flex items-center justify-center max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Reference-inspired Sunburst Light Rays behind center card */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.08]">
            <svg
              className="w-full h-full max-w-4xl"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
            >
              <defs>
                <radialGradient id="rayGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f6d561" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#f26522" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path d="M500,250 L0,0 L120,0 Z" fill="url(#rayGrad)" />
              <path d="M500,250 L190,0 L310,0 Z" fill="url(#rayGrad)" />
              <path d="M500,250 L380,0 L500,0 Z" fill="url(#rayGrad)" />
              <path d="M500,250 L500,0 L620,0 Z" fill="url(#rayGrad)" />
              <path d="M500,250 L690,0 L810,0 Z" fill="url(#rayGrad)" />
              <path d="M500,250 L880,0 L1000,0 Z" fill="url(#rayGrad)" />
              <path d="M500,250 L1000,100 L1000,220 Z" fill="url(#rayGrad)" />
              <path d="M500,250 L0,100 L0,220 Z" fill="url(#rayGrad)" />
            </svg>
          </div>

          {/* Carousel Track Container */}
          <div className="relative w-full h-[320px] sm:h-[380px] md:h-[430px] flex items-center justify-center">
            {slotConfigs.map((slot) => {
              const projectIdx =
                ((activeIndex + slot.offset) % projects.length +
                  projects.length) %
                projects.length
              const project = projects[projectIdx]
              const isCenter = slot.offset === 0

              return (
                <div
                  key={`slot-${slot.offset}`}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(projectIdx)
                    }
                  }}
                  className={`absolute top-1/2 left-1/2 transition-all duration-500 ease-out ${
                    slot.visibilityClass
                  } ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
                  style={{
                    zIndex: slot.zIndex,
                    transform: `translate(calc(-50% + ${slot.xPercent}%), -50%) scale(${slot.scale})`,
                    opacity: slot.opacity,
                  }}
                >
                  {/* Polaroid Frame Container matching Reference Design */}
                  <div
                    className={`bg-[#ffffff] rounded-[3px] sm:rounded-[4px] p-2.5 sm:p-3 pb-6 sm:pb-8 md:pb-9 w-[260px] sm:w-[330px] md:w-[390px] lg:w-[430px] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85)] border border-white/60 transition-all duration-300 ${
                      isCenter
                        ? 'hover:scale-[1.02] shadow-[0_28px_60px_-10px_rgba(0,0,0,0.95)]'
                        : 'hover:brightness-110'
                    }`}
                  >
                    {/* Inner Photo Mount with Aspect-16/9 and object-contain to eliminate any cropping */}
                    <div className="relative w-full aspect-[16/9] bg-[#0c0a09] overflow-hidden rounded-[2px] border border-black/15 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain object-center"
                        loading="lazy"
                      />

                      {/* Receding Card Shading Overlay matching depth in reference */}
                      <div
                        className={`absolute inset-0 ${slot.overlayOpacity} transition-colors duration-300 pointer-events-none`}
                      />
                    </div>

                    {/* Bottom Polaroid Caption matching reference font & styling */}
                    <div className="mt-2.5 sm:mt-3 text-center px-1">
                      <h3
                        className="font-serif italic font-bold tracking-wide text-[#231e1a] text-sm sm:text-base md:text-lg truncate"
                        style={{
                          fontFamily:
                            '"Playfair Display", Georgia, "Times New Roman", serif',
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Left Arrow Navigation Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white bg-black/50 hover:bg-black/80 border border-white/10 hover:border-[#f26522]/50 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
          </button>

          {/* Right Arrow Navigation Button */}
          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white bg-black/50 hover:bg-black/80 border border-white/10 hover:border-[#f26522]/50 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
          </button>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-6 sm:mt-8">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to ${proj.title}`}
              className={`transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-8 h-2 bg-gradient-to-r from-[#f26522] to-[#f6d561] rounded-full shadow-[0_0_10px_rgba(242,101,34,0.5)]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40 rounded-full'
              }`}
            />
          ))}
        </div>

        {/* Active Project Meta & Details Container */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-[#141211] border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-6 sm:p-7 shadow-xl shadow-black/30 relative"
            >
              {/* Left Edge Accent Indicator Tab */}
              <div className="absolute left-0 top-6 w-1 h-9 rounded-r-full bg-[#f26522] shadow-[0_0_10px_rgba(242,101,34,0.45)]" />

              {/* Tag & Counter */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#f26522] tracking-wider uppercase">
                  {activeProject.tag}
                </span>
                <span className="text-xs font-mono text-[#a39c94]">
                  0{activeIndex + 1} / 0{projects.length}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {activeProject.title}
              </h3>

              {/* Sub-Category */}
              <p className="text-xs sm:text-sm font-medium text-[#f6d561] mb-3">
                {activeProject.category}
              </p>

              {/* Description */}
              <p className="text-sm text-[#a39c94] leading-relaxed mb-4">
                {activeProject.description}
              </p>

              {/* Key Highlights */}
              <div className="flex flex-wrap gap-2.5 mb-4">
                {activeProject.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-1.5 text-xs text-[#e6e0da]"
                  >
                    <FaCheckCircle className="text-[#f26522] text-[11px]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] text-[#e6e0da] rounded-lg text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <a
                  href={activeProject.demo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f26522] hover:bg-[#ff7828] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-[#f26522]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Live Preview</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>

                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <FaGithub className="text-sm" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
