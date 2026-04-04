import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/TermsAndConditions.css'

function TermsAndConditions() {
  return (
    <div className="terms-page">
      <Navbar />
      <main className="terms-content">
        <h1 className="terms-heading">Terms &amp; Conditions</h1>
        <p className="terms-updated">Last updated: April 2026</p>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the ParaFlux Architects website (&ldquo;Site&rdquo;), you accept
            and agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). If you do not
            agree to these Terms, please do not use the Site. These Terms apply to all visitors,
            users, and others who access or use the Site.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes and in a manner that does not:</p>
          <ul>
            <li>Infringe the rights of any other person or entity</li>
            <li>Restrict or inhibit anyone else&apos;s use or enjoyment of the Site</li>
            <li>Introduce viruses, Trojans, or other malicious or harmful code</li>
            <li>Send unsolicited commercial communications or spam</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its related systems</li>
          </ul>
          <p>
            We reserve the right to restrict or terminate your access to the Site at any time
            without notice if we believe you have violated these Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Intellectual Property</h2>
          <p>
            All content on this Site — including but not limited to text, images, architectural
            renders, photographs, drawings, logos, icons, and software — is the property of
            ParaFlux Architects or its licensors and is protected by applicable intellectual
            property laws.
          </p>
          <p>
            You may view, download, and print content from the Site for your own personal,
            non-commercial use only. You may not reproduce, republish, distribute, transmit,
            display, sell, license, alter, or otherwise exploit any content from this Site without
            our prior written permission.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Project Portfolios and Design Work</h2>
          <p>
            The architectural projects, designs, renders, and related materials displayed on this
            Site are provided for illustrative and marketing purposes only. They represent completed
            or proposed projects and do not constitute professional architectural advice.
          </p>
          <p>
            All architectural designs, drawings, and documentation produced by ParaFlux remain
            the intellectual property of ParaFlux unless expressly agreed otherwise in a signed
            professional services agreement.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Professional Services</h2>
          <p>
            Nothing on this Site constitutes professional architectural, engineering, planning, or
            legal advice. The information provided is general in nature. For professional advice
            tailored to your specific circumstances, please contact us directly.
          </p>
          <p>
            Any engagement of ParaFlux for professional architectural services will be governed
            by a separate written agreement between you and ParaFlux, which will set out the
            scope of services, fees, and terms applicable to that engagement.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. These links are provided for your
            convenience only. We have no control over the content of those sites and accept no
            responsibility for them or for any loss or damage that may arise from your use of them.
            Inclusion of a link does not imply endorsement by ParaFlux of the linked site.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Disclaimer of Warranties</h2>
          <p>
            This Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
            without any representations or warranties, express or implied. We make no warranties
            or representations about the accuracy, completeness, or suitability of the information
            and materials found on this Site.
          </p>
          <p>
            We do not warrant that the Site will be available uninterrupted, error-free, or free
            from viruses or other harmful components.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, ParaFlux shall not be liable for any direct,
            indirect, incidental, special, consequential, or punitive damages arising from your use
            of or inability to use the Site or its content. This includes, without limitation, any
            loss of data, profits, or business opportunity.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Privacy</h2>
          <p>
            Your use of the Site is also subject to our{' '}
            <a href="/privacy-info">Privacy Policy</a>, which is incorporated into these Terms by
            reference. Please review our Privacy Policy to understand our practices regarding the
            collection and use of your personal information.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. Modifications to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will be posted on this
            page with an updated revision date. Your continued use of the Site after any such
            changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India.
            Any disputes arising in connection with these Terms shall be subject to the exclusive
            jurisdiction of the courts of Noida, Uttar Pradesh, India.
          </p>
        </section>

        <section className="terms-section">
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <address className="terms-address">
            ParaFlux<br />
            Email: <a href="mailto:info@paraflux.com">info@paraflux.com</a>
          </address>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TermsAndConditions
