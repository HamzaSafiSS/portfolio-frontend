import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0c0a09] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <Link
              to="hero"
              smooth
              duration={800}
              className="cursor-pointer inline-flex items-center gap-2.5 group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f26522] to-[#c73b06] flex items-center justify-center text-white text-sm font-sans font-bold shadow-md shadow-[#f26522]/30">
                H
              </span>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#f5f5f4]">
                Hamza<span className="text-[#f26522]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#a39c94] mt-2 max-w-sm">
              Full-Stack Software Developer dedicated to robust backend engineering
              and modern web architectures.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={800}
                className="text-xs sm:text-sm text-[#a39c94] hover:text-[#f26522] cursor-pointer transition-colors font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-end gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-[#f26522]/15 border border-white/[0.08] hover:border-[#f26522]/40 text-[#a39c94] hover:text-[#f26522] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/[0.06] mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78716c]">
          <p>
            © {new Date().getFullYear()} Hamza. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <FaHeart className="inline text-[#f26522] mx-0.5" size={11} /> using
            React & Spring Boot standards.
          </p>
        </div>
      </div>
    </footer>
  )
}
