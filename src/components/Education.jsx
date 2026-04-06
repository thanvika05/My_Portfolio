import { motion } from 'framer-motion'
import { FiCalendar, FiAward } from 'react-icons/fi'
import './Education.css'

const educationData = [
  {
    degree: 'B.E CSE [AI-ML]',
    institution: 'Sri Eshwar College of Engineering',
    location: 'Coimbatore',
    score: 'CGPA: 7.7',
    period: '2024 – 2028',
    icon: '🎓',
    current: true,
  },
  {
    degree: 'HSC (Class XII)',
    institution: 'Swamy Chidbhavanandha Matric Hr. Sec School',
    location: '',
    score: '72%',
    period: '2023 – 2024',
    icon: '📚',
    current: false,
  },
  {
    degree: 'SSLC (Class X)',
    institution: 'Swamy Chidbhavanandha Matric Hr. Sec School',
    location: '',
    score: '77.6%',
    period: '2021 – 2022',
    icon: '📖',
    current: false,
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">Building a strong foundation in computer science and engineering</p>
        </div>

        <div className="edu__timeline">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="edu__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="edu__connector">
                <div className={`edu__dot ${edu.current ? 'edu__dot--active' : ''}`}>
                  <span>{edu.icon}</span>
                </div>
                {i < educationData.length - 1 && <div className="edu__line" />}
              </div>

              <div className={`edu__card glass-card ${edu.current ? 'edu__card--active' : ''}`}>
                {edu.current && <div className="edu__current-badge">Currently Studying</div>}
                <div className="edu__card-header">
                  <div>
                    <h3 className="edu__degree">{edu.degree}</h3>
                    <p className="edu__institution">{edu.institution}</p>
                  </div>
                  <div className="edu__meta">
                    <span className="edu__period"><FiCalendar /> {edu.period}</span>
                    <span className="edu__score"><FiAward /> {edu.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
