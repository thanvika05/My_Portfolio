import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'EchoVerse',
    subtitle: 'AI Audiobook Generator',
    year: '2024',
    description:
      'A Streamlit-based web application that converts text, files, and URLs into multilingual audiobooks using Microsoft Edge TTS and Google Translate APIs, with customizable voice and audio controls.',
    tech: ['Python', 'Streamlit', 'Edge TTS', 'PyPDF2', 'BeautifulSoup', 'googletrans', 'pydub'],
    github: 'https://github.com/',
    gradient: 'linear-gradient(135deg, #00d2ff, #7928ca)',
    emoji: '🎙️',
  },
  {
    title: 'ASL Translator',
    subtitle: 'Real-Time Sign Language Recognition',
    year: '2025',
    description:
      'A Flask-based web application that translates American Sign Language (ASL) gestures into English text using machine learning and computer vision. Real-time webcam input detects and translates gestures, promoting accessibility and inclusivity.',
    tech: ['Python', 'OpenCV', 'scikit-learn', 'Flask', 'NumPy', 'Pandas', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    gradient: 'linear-gradient(135deg, #7928ca, #ff0080)',
    emoji: '🤟',
  },
  {
    title: 'Weather App',
    subtitle: 'Real-Time Weather Dashboard',
    year: '2025',
    description:
      'An interactive weather dashboard that fetches and displays real-time weather data using API integration, offering a clean and intuitive user experience.',
    tech: ['Python', 'Streamlit', 'REST API', 'Requests Library', 'JSON'],
    github: 'https://github.com/',
    gradient: 'linear-gradient(135deg, #00d2ff, #0072ff)',
    emoji: '🌤️',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Things I've <span className="gradient-text">Built</span></h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills in building real-world applications
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="project-card glass-card"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="project-card__banner" style={{ background: proj.gradient }}>
                <span className="project-card__emoji">{proj.emoji}</span>
                <span className="project-card__year">{proj.year}</span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{proj.title}</h3>
                <p className="project-card__subtitle">{proj.subtitle}</p>
                <p className="project-card__desc">{proj.description}</p>

                <div className="project-card__tech">
                  {proj.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline project-card__link"
                    id={`project-${proj.title.toLowerCase().replace(/\s/g, '-')}-github`}
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary project-card__link"
                    id={`project-${proj.title.toLowerCase().replace(/\s/g, '-')}-demo`}
                  >
                    <FiExternalLink /> Live Demo
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
