
function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-header">
        <h1>Contact Us 📩</h1>
        <p>Have questions? We are here to help!</p>
      </section>

      <div className="contact-grid">

        <div className="contact-card">
          <h2>📧 Email</h2>
          <p>techfest2026@mbcet.ac.in</p>
        </div>

        <div className="contact-card">
          <h2>📞 Phone</h2>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card">
          <h2>📍 Venue</h2>
          <p>MBCET Campus</p>
          <p>Thiruvananthapuram</p>
        </div>

      </div>

      <section className="contact-footer">
        <h2>We Can't Wait to See You! 🎉</h2>
        <p>Join us and be part of TechFest 2026.</p>
      </section>

    </div>
  );
}

export default Contact;