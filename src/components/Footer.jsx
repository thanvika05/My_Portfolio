import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { Link } from 'react-scroll'
import './Footer.css'

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Education', to: 'education' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__gradient-line" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="logo-bracket">&lt;</span>TB<span className="logo-bracket">/&gt;</span>
          </span>
          <p className="footer__tagline">
            Aspiring Software Developer • MERN Stack Enthusiast
          </p>
          <div className="footer__socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer__social" id="footer-github" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="footer__social" id="footer-linkedin" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:thanvikaboopathi@gmail.com" className="footer__social" id="footer-email" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <nav className="footer__nav">
          <p className="footer__nav-title">Quick Links</p>
          <ul>
            {navLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} smooth duration={600} offset={-70} className="footer__nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>
          Made with <FiHeart className="footer__heart" /> by <span className="gradient-text">Thanvika B</span>
          &nbsp;• &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
