import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder — replace with actual form submission logic
    setSubmitted(true)
    setFormData({ firstName: '', lastName: '', email: '', phone: '', projectType: '', message: '' })
  }

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-content">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-subheading">
          Have a project in mind? We&apos;d love to hear from you.<br />
          Reach out and let&apos;s start a conversation.
        </p>

        <div className="contact-divider"></div>

        <div className="contact-grid">
          {/* Left — Contact Information */}
          <div className="contact-info-section">
            <h2>Get in Touch</h2>

            <div className="contact-info-item">
              <h3>Studio</h3>
              <p>123 Architecture Lane</p>
              <p>New Delhi, 110001</p>
              <p>India</p>
            </div>

            <div className="contact-info-item">
              <h3>Email</h3>
              <a href="mailto:info@paraflux.com">info@paraflux.com</a>
            </div>

            <div className="contact-info-item">
              <h3>Phone</h3>
              <a href="tel:+911234567890">+91 12345 67890</a>
            </div>

            <div className="contact-info-item">
              <h3>Office Hours</h3>
              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 2:00 PM</p>
            </div>

            <div className="contact-info-item">
              <h3>Follow Us</h3>
              <div className="contact-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="contact-social-icon" />
                  LinkedIn
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="contact-social-icon" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="contact-form-section">
            <h2>Send a Message</h2>

            {submitted ? (
              <p className="contact-success-message">
                Thank you for reaching out! We will get back to you soon.
              </p>
            ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="mixed-use">Mixed Use</option>
                  <option value="retail">Retail</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="masterplanning">Masterplanning</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
