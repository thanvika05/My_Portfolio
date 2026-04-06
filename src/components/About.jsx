import { motion } from 'framer-motion'
import { FiCode, FiAward, FiBookOpen } from 'react-icons/fi'
import './About.css'

const stats = [
  { icon: <FiAward />, value: '7.7', label: 'CGPA', color: 'cyan' },
  { icon: <FiCode />, value: '1345', label: 'LeetCode Rating', color: 'purple' },
  { icon: <FiBookOpen />, value: '650+', label: 'SkillRack Problems', color: 'pink' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }),
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about__layout">
          <motion.div
            className="about__text-block glass-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <div className="about__avatar">
              <span>TB</span>
            </div>
            <h3 className="about__name">Thanvika B</h3>
            <p className="about__degree">B.E CSE [AI-ML] • Sri Eshwar College of Engineering, Coimbatore</p>
            <p className="about__bio">
              I'm an aspiring software developer with a passion for building full-stack web applications
              using the MERN stack. With a strong foundation in C++, Data Structures & Algorithms, and
              Object-Oriented Programming, I love turning complex problems into elegant, impactful solutions.
            </p>
            <p className="about__bio">
              Currently in my first year of B.E CSE (AI-ML), I'm actively honing my skills through
              real-world internships, competitive programming, and hands-on projects. I believe in
              continuous learning and growing with every line of code.
            </p>
            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-label">📍 Location</span>
                <span className="about__info-value">Coimbatore, India</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">📧 Email</span>
                <span className="about__info-value">thanvikaboopathi@gmail.com</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">💼 Experience</span>
                <span className="about__info-value">Full Stack Intern — Synapslogic</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">🎓 Batch</span>
                <span className="about__info-value">2024 – 2028</span>
              </div>
            </div>
          </motion.div>

          <div className="about__stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className={`about__stat-card glass-card about__stat-card--${s.color}`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
              >
                <div className="about__stat-icon">{s.icon}</div>
                <div className="about__stat-value">{s.value}</div>
                <div className="about__stat-label">{s.label}</div>
              </motion.div>
            ))}

            <motion.div
              className="about__intern-card glass-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
            >
              <div className="about__intern-badge">🏢 Internship</div>
              <h4>Full Stack Developer Intern</h4>
              <p>Synapslogic • 2025</p>
              <p className="about__intern-desc">
                Gained hands-on experience in front-end and back-end development, contributing to
                real-world web applications.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
