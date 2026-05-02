import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div className="section-header reveal">
        <span className="section-label">✦ Get In Touch</span>
        <h2 className="section-title">
          Book Your <em>Bridal Consultation</em>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="contact-inner">

        {/* INFO */}
        <div className="contact-info reveal">
          <h3>Visit Our Bridal Studio</h3>

          <p>
            Discover elegant modest bridal collections including hijab bridal wear,
            bridesmaid outfits, and luxury accessories designed for your special day.
          </p>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <div className="info-label">Address</div>
              <div className="info-val">
                Periyapalam Mutur-05,Trincomalee,
                <br />
                Eastern Province, Sri Lanka
              </div>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <div className="info-label">Phone / WhatsApp</div>
              <div className="info-val">+94 77 XXX XXXX</div>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">🕐</div>
            <div>
              <div className="info-label">Opening Hours</div>
              <div className="info-val">
                Mon – Sat: 9:00 AM – 7:00 PM
                <br />
                Sun: 10:00 AM – 4:00 PM
              </div>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">✉️</div>
            <div>
              <div className="info-label">Email</div>
              <div className="info-val">hello@bridalqueenMarker.lk</div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form reveal">
          <h3 className="form-title">Book a Bridal Appointment ✨</h3>

          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Ayesha" required />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Mohamed" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="ayesha@email.com" required />
            </div>

            <div className="form-group">
              <label>Phone / WhatsApp</label>
              <input type="tel" placeholder="+94 77 " />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Nikah / Wedding Date</label>
                <input type="date" required />
              </div>

              <div className="form-group">
                <label>Bridal Style Preference</label>
                <select>
                  <option value="">Select style...</option>
                  <option>Hijab Bridal Gown</option>
                  <option>Modest A-Line Dress</option>
                  <option>Luxury Islamic Bridal Wear</option>
                  <option>Traditional Muslim Wedding Dress</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Additional Notes</label>
              <textarea placeholder="Tell us your modest bridal vision..." />
            </div>

            <button type="submit" className="form-submit">
              {submitted ? '✓ Request Sent!' : 'Send Booking Request 💌'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}