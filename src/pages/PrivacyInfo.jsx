import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/PrivacyInfo.css'

function PrivacyInfo() {
  return (
    <div className="privacy-page">
      <Navbar />
      <main className="privacy-content">
        <h1 className="privacy-heading">Privacy Policy</h1>
        <p className="privacy-updated">Last updated: March 2026</p>

        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Paraflux (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide when you:</p>
          <ul>
            <li>Contact us through our website or email</li>
            <li>Submit an enquiry or request for services</li>
            <li>Subscribe to our newsletter or updates</li>
          </ul>
          <p>This information may include your name, email address, phone number, and any details you include in your message.</p>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and provide requested services</li>
            <li>Send you project updates and relevant communications</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services (e.g., trusted service providers who assist us in operating our website).
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings; however, this may affect the functionality of parts of our website.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p>To exercise any of these rights, please contact us at the details below.</p>
        </section>

        <section className="privacy-section">
          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <address className="privacy-address">
            Paraflux<br />
            Email: <a href="mailto:info@paraflux.com">info@paraflux.com</a>
          </address>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyInfo
