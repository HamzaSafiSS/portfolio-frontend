import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiArrowRight } from 'react-icons/hi'
import heroWebp from '../assets/images/herosectionv1.webp'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0c0a09] text-white py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle ambient lighting to blend with previous sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] opacity-15"
          style={{
            background:
              'radial-gradient(circle, rgba(242, 101, 34, 0.2) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Prominent, Noticeably Enlarged Organic Image Container (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center items-center relative"
          >
            {/* Enlarged Prominent Image Container — max-w up to 690px */}
            <div className="relative w-full max-w-[380px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[640px] xl:max-w-[690px] aspect-[480/345]">
              
              {/* SVG Canvas for exact replication of reference shapes and image clipping */}
              <svg
                viewBox="0 0 480 340"
                className="w-full h-full overflow-visible drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]"
              >
                <defs>
                  {/* Exact organic photo boundary shape matching the reference */}
                  <clipPath id="aboutPhotoShape" clipPathUnits="userSpaceOnUse">
                    <path d="M 160 55 C 235 48, 335 68, 395 120 C 445 170, 420 265, 335 292 C 255 315, 160 285, 140 225 C 120 165, 128 92, 160 55 Z" />
                  </clipPath>
                  
                  {/* Warm spotlight glow inside the frame */}
                  <radialGradient id="frameGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f26522" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#141211" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. Golden / Amber Top-Right Aerodynamic Swoosh */}
                <path
                  d="M 275 48 C 365 42, 438 88, 456 165 C 472 235, 432 268, 420 268 C 430 228, 438 158, 395 108 C 352 68, 288 58, 275 48 Z"
                  fill="#f6d561"
                />

                {/* 2. Vibrant Orange Bottom-Left Curved Crescent Arc */}
                <path
                  d="M 142 98 C 125 148, 120 198, 140 248 C 160 295, 218 328, 278 322 C 228 312, 175 285, 155 240 C 138 200, 140 148, 150 108 Z"
                  fill="#f26522"
                />

                {/* 3. The Clipped Photo Container */}
                <g clipPath="url(#aboutPhotoShape)">
                  {/* Frame Background Layer */}
                  <rect x="100" y="30" width="360" height="300" fill="#141211" />
                  
                  {/* Warm Spotlight Inside Frame */}
                  <circle cx="280" cy="180" r="140" fill="url(#frameGlow)" />

                  {/* Prominent Subject Image filling the frame */}
                  <image
                    href={heroWebp}
                    x="95"
                    y="18"
                    width="350"
                    height="325"
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>
              </svg>

              {/* 4. Visibly Overlapping Experience Badge matching the reference design placement */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute left-[12%] sm:left-[15%] md:left-[18%] top-[3%] sm:top-[4%] w-[24%] min-w-[95px] max-w-[150px] aspect-square rounded-full bg-[#161413] border-2 border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center text-center p-2.5 sm:p-3.5 select-none z-20 hover:scale-105 transition-transform duration-300"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#f26522] leading-none mb-0.5 sm:mb-1">
                  2+
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white/90 leading-tight">
                  Years of<br />Experience
                </span>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Typography & Content Hierarchy (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col justify-center text-left lg:pl-2 xl:pl-4"
          >
            {/* Dotted Curved Arrow Pointing to Heading (Desktop only, matches reference) */}
            <div className="absolute -left-12 sm:-left-14 top-2 hidden xl:block pointer-events-none select-none">
              <svg width="65" height="55" viewBox="0 0 65 55" fill="none" className="text-[#f26522]/60">
                <path
                  d="M 5 50 C 6 22, 28 10, 54 10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                <polygon points="58,10 49,6 51,14" fill="currentColor" />
              </svg>
            </div>

            {/* Section Label: About Me */}
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#f26522] uppercase mb-3.5 block">
              About Me
            </span>

            {/* Main Heading */}
            <h2 className="font-sans text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight text-white leading-[1.18] mb-6">
              I care about how software works beneath the surface.
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#a39c94] font-normal leading-relaxed mb-8">
              <p>
                I'm a software engineering student and developer focused on building practical, reliable web applications.
              </p>
              <p>
                My strongest interest is backend engineering, I also work across the frontend and deployment process.
              </p>
            </div>

            {/* Action Button: More About Me */}
            <div>
              <Link
                to="experience"
                smooth
                duration={800}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#f26522] hover:bg-[#d85215] text-white text-sm sm:text-base font-semibold rounded-full shadow-lg shadow-[#f26522]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                More About Me
                <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
