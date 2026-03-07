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
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return 'Email is required'
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    return ''
  }

  const validatePhone = (phone) => {
    // Optional field, but if provided, validate format
    if (!phone) return ''
    const phoneRegex = /^[\d\s+()-]+$/
    if (!phoneRegex.test(phone)) return 'Please enter a valid phone number'
    if (phone.replace(/\D/g, '').length < 10) return 'Phone number must be at least 10 digits'
    return ''
  }

  const validateName = (name, fieldName) => {
    if (!name || name.trim() === '') return `${fieldName} is required`
    if (name.trim().length < 2) return `${fieldName} must be at least 2 characters`
    if (name.trim().length > 50) return `${fieldName} must be less than 50 characters`
    if (!/^[a-zA-Z\s'-]+$/.test(name)) return `${fieldName} can only contain letters, spaces, hyphens, and apostrophes`
    return ''
  }

  const validateProjectType = (projectType) => {
    if (!projectType) return 'Please select a project type'
    return ''
  }

  const validateMessage = (message) => {
    if (!message || message.trim() === '') return 'Message is required'
    if (message.trim().length < 10) return 'Message must be at least 10 characters'
    if (message.trim().length > 1000) return 'Message must be less than 1000 characters'
    return ''
  }

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        return validateName(value, 'First name')
      case 'lastName':
        return validateName(value, 'Last name')
      case 'email':
        return validateEmail(value)
      case 'phone':
        return validatePhone(value)
      case 'projectType':
        return validateProjectType(value)
      case 'message':
        return validateMessage(value)
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors({ ...errors, [name]: error })
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error })
  }

  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
    setTouched(allTouched)

    // Validate all fields
    const newErrors = validateForm()
    setErrors(newErrors)

    // If there are errors, don't submit
    if (Object.keys(newErrors).some(key => newErrors[key])) {
      return
    }

    // Placeholder — replace with actual form submission logic
    setSubmitted(true)
    setFormData({ firstName: '', lastName: '', email: '', phone: '', projectType: '', message: '' })
    setErrors({})
    setTouched({})
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
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
                    onBlur={handleBlur}
                    className={touched.firstName && errors.firstName ? 'input-error' : ''}
                    aria-invalid={touched.firstName && errors.firstName ? 'true' : 'false'}
                    aria-describedby={touched.firstName && errors.firstName ? 'firstName-error' : undefined}
                  />
                  {touched.firstName && errors.firstName && (
                    <span className="error-message" id="firstName-error" role="alert">
                      {errors.firstName}
                    </span>
                  )}
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
                    onBlur={handleBlur}
                    className={touched.lastName && errors.lastName ? 'input-error' : ''}
                    aria-invalid={touched.lastName && errors.lastName ? 'true' : 'false'}
                    aria-describedby={touched.lastName && errors.lastName ? 'lastName-error' : undefined}
                  />
                  {touched.lastName && errors.lastName && (
                    <span className="error-message" id="lastName-error" role="alert">
                      {errors.lastName}
                    </span>
                  )}
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
                    onBlur={handleBlur}
                    className={touched.email && errors.email ? 'input-error' : ''}
                    aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                    aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                  />
                  {touched.email && errors.email && (
                    <span className="error-message" id="email-error" role="alert">
                      {errors.email}
                    </span>
                  )}
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
                    onBlur={handleBlur}
                    className={touched.phone && errors.phone ? 'input-error' : ''}
                    aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
                    aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
                  />
                  {touched.phone && errors.phone && (
                    <span className="error-message" id="phone-error" role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.projectType && errors.projectType ? 'input-error' : ''}
                  aria-invalid={touched.projectType && errors.projectType ? 'true' : 'false'}
                  aria-describedby={touched.projectType && errors.projectType ? 'projectType-error' : undefined}
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
                {touched.projectType && errors.projectType && (
                  <span className="error-message" id="projectType-error" role="alert">
                    {errors.projectType}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.message && errors.message ? 'input-error' : ''}
                  aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                  aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                ></textarea>
                {touched.message && errors.message && (
                  <span className="error-message" id="message-error" role="alert">
                    {errors.message}
                  </span>
                )}
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
