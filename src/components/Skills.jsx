import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    label: 'Languages',
    icon: '💻',
    color: 'cyan',
    skills: ['HTML', 'CSS', 'JavaScript', 'C', 'C++', 'Java', 'Python'],
  },
  {
    label: 'Developer Tools',
    icon: '🛠️',
    color: 'purple',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    label: 'Database',
    icon: '🗄️',
    color: 'pink',
    skills: ['MySQL'],
  },
  {
    label: 'Foundations',
    icon: '🧠',
    color: 'cyan',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming'],
  },
]

const proficiencies = [
  { name: 'HTML / CSS', level: 85 },
  { name: 'JavaScript', level: 65 },
  { name: 'C / C++', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Java', level: 60 },
  { name: 'DSA', level: 70 },
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">My <span className="gradient-text">Toolkit</span></h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills__layout">
          <div className="skills__categories">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                className={`skills__cat-card glass-card skills__cat-card--${cat.color}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="skills__cat-header">
                  <span className="skills__cat-icon">{cat.icon}</span>
                  <h3 className="skills__cat-label">{cat.label}</h3>
                </div>
                <div className="skills__badges">
                  {cat.skills.map(s => (
                    <span key={s} className={`skill-pill skill-pill--${cat.color}`}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="skills__proficiency">
            <motion.div
              className="glass-card skills__prof-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="skills__prof-title">Proficiency Levels</h3>
              {proficiencies.map((p, i) => (
                <div key={p.name} className="skills__bar-item">
                  <div className="skills__bar-header">
                    <span className="skills__bar-name">{p.name}</span>
                    <span className="skills__bar-pct">{p.level}%</span>
                  </div>
                  <div className="skills__bar-track">
                    <motion.div
                      className="skills__bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
