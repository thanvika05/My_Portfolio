import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import './Achievements.css'

const achievements = [
  {
    icon: '⚡',
    platform: 'LeetCode',
    title: 'Competitive Programmer',
    stats: [
      { label: 'Contest Rating', value: '1345' },
      { label: 'Problems Solved', value: '50+' },
      { label: 'Global Rank', value: '2,075,796' },
    ],
    link: 'https://leetcode.com/',
    color: 'cyan',
    id: 'achievement-leetcode',
  },
  {
    icon: '🏅',
    platform: 'SkillRack',
    title: 'Problem Solver',
    stats: [
      { label: 'Coding Problems', value: '650+' },
    ],
    link: 'https://skillrack.com/',
    color: 'purple',
    id: 'achievement-skillrack',
  },
  {
    icon: '⭐',
    platform: 'Student Mentor',
    title: 'Leadership Achievement',
    stats: [
      { label: 'Status', value: 'Selected' },
    ],
    description: 'Successfully selected as a student mentor after clearing multiple competitive selection rounds.',
    color: 'pink',
    id: 'achievement-mentor',
  },
]

export default function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">Milestones &amp; <span className="gradient-text">Recognition</span></h2>
          <p className="section-subtitle">Highlights from competitions, platforms, and leadership</p>
        </div>

        <div className="achievements__grid">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              className={`ach-card glass-card ach-card--${ach.color}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="ach-card__top">
                <span className="ach-card__emoji">{ach.icon}</span>
                <div>
                  <p className="ach-card__platform">{ach.platform}</p>
                  <h3 className="ach-card__title">{ach.title}</h3>
                </div>
              </div>

              <div className="ach-card__stats">
                {ach.stats.map((s) => (
                  <div key={s.label} className="ach-card__stat">
                    <span className={`ach-card__stat-value ach-card__stat-value--${ach.color}`}>{s.value}</span>
                    <span className="ach-card__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              {ach.description && (
                <p className="ach-card__desc">{ach.description}</p>
              )}

              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ach-card__link"
                  id={ach.id}
                >
                  View Profile <FiExternalLink />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
