import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Simulate send (replace with EmailJS or backend later)
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    }, 1500)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle">
            Have an opportunity or just want to say hi? My inbox is always open!
          </p>
        </div>

        <div className="contact__layout">
          <motion.div
            className="contact__info glass-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Get in Touch</h3>
            <p className="contact__info-text">
              I'm currently looking for internships and collaborative projects. Whether you have
              a question or just want to connect, feel free to reach out!
            </p>

            <div className="contact__details">
              <a href="mailto:thanvikaboopathi@gmail.com" className="contact__detail" id="contact-email-link">
                <span className="contact__detail-icon"><FiMail /></span>
                <div>
                  <p className="contact__detail-label">Email</p>
                  <p className="contact__detail-value">thanvikaboopathi@gmail.com</p>
                </div>
              </a>
              <div className="contact__detail">
                <span className="contact__detail-icon"><FiMapPin /></span>
                <div>
                  <p className="contact__detail-label">Location</p>
                  <p className="contact__detail-value">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact__social" id="contact-github">
                <FiGithub /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="contact__social" id="contact-linkedin">
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Internship Opportunity / Collaboration"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Hey Thanvika, I'd love to connect about..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              id="contact-submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <><span className="spinner" /> Sending...</>
              ) : status === 'sent' ? (
                <>✅ Message Sent!</>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
