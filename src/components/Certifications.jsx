import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import './Certifications.css'

const certifications = [
  {
    title: 'Certification on C, C++',
    issuer: 'Computer Software College',
    year: '2024',
    icon: '⚙️',
    color: 'cyan',
    link: '#',
  },
  {
    title: 'Certification on HTML, CSS & SUN JAVA',
    issuer: 'Computer Software College',
    year: '2024',
    icon: '🌐',
    color: 'purple',
    link: '#',
  },
  {
    title: 'Data Structures and Algorithms Using C and C++',
    issuer: 'Udemy',
    year: '2025',
    icon: '🧩',
    color: 'pink',
    link: '#',
  },
  {
    title: 'Programming in Java',
    issuer: 'NPTEL',
    year: '2025',
    icon: '☕',
    color: 'cyan',
    link: '#',
  },
]

export default function Certifications() {
  return (
    <section className="section certs-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Certifications</span>
          <h2 className="section-title">Credentials &amp; <span className="gradient-text">Courses</span></h2>
          <p className="section-subtitle">Verified certifications from trusted platforms</p>
        </div>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className={`cert-card glass-card cert-card--${cert.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="cert-card__icon-wrap">
                <span className="cert-card__icon">{cert.icon}</span>
              </div>
              <div className="cert-card__body">
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <div className="cert-card__footer">
                  <span className="cert-card__year">{cert.year}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-card__link"
                    id={`cert-link-${i}`}
                  >
                    View <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
