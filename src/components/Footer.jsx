import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaHeart } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]

const socials = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaDribbble, href: '#', label: 'Dribbble' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <Link to="hero" smooth duration={800} className="cursor-pointer">
              <span className="text-xl font-bold">
                <span className="gradient-text">Port</span>
                <span className="text-white">folio</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 mt-2">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={800}
                className="text-sm text-slate-500 hover:text-white cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-end gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-8 pt-8">
          <p className="text-center text-sm text-slate-600">
            © {new Date().getFullYear()} Alex Morgan. Made with{' '}
            <FaHeart className="inline text-red-500 mx-0.5" size={12} /> using
            React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

