import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-scroll'
import './Hero.css'

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 210, 255, ${p.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="hero__canvas" />
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Particles />

      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="container hero__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero__greeting">👋 Hello, I'm</span>
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Thanvika <span className="gradient-text">B</span>
        </motion.h1>

        <motion.div
          className="hero__role-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="hero__role">Aspiring Software Developer</span>
          <span className="hero__role-divider">|</span>
          <span className="hero__role">MERN Stack Enthusiast</span>
        </motion.div>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Skilled in MERN stack development with a solid foundation in C++, DSA,
          and core computer science concepts — building impactful solutions, one line at a time.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link to="projects" smooth duration={700} offset={-70}>
            <button className="btn btn-primary" id="hero-view-projects">
              View Projects
            </button>
          </Link>
          <Link to="contact" smooth duration={700} offset={-70}>
            <button className="btn btn-outline" id="hero-contact">
              Contact Me
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="hero__socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hero__social-link" id="hero-github" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hero__social-link" id="hero-linkedin" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:thanvikaboopathi@gmail.com" className="hero__social-link" id="hero-email" aria-label="Email">
            <FiMail />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link to="about" smooth duration={700} offset={-70} style={{ cursor: 'pointer' }}>
          <FiArrowDown />
        </Link>
      </motion.div>
    </section>
  )
}
