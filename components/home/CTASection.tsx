'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <>
      {/* Primary CTA */}
      <section className="cta-section">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
        <div className="bg-pattern"></div>

        <div className="cta-container">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Ready to Start?
          </div>

          <h2>Experience Better <span className="gradient-text">Vision</span></h2>
          <p>
            Book your appointment today and take the first step towards clearer vision
            with our expert eye care services.
          </p>

          <div className="cta-buttons">
            <Link href="/appointment" className="btn-primary">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Book Appointment
            </Link>
            <Link href="/contact" className="btn-secondary">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-cards">
            <a href="tel:+919729236700" className="contact-card">
              <div className="contact-icon call">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="contact-text">
                <span className="contact-label">Call Us</span>
                <span className="contact-value">+91 97292-36700</span>
              </div>
            </a>

            <a href="https://wa.me/919729236700" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon whatsapp">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="contact-text">
                <span className="contact-label">WhatsApp</span>
                <span className="contact-value">Message Us</span>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-icon location">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="contact-text">
                <span className="contact-label">Location</span>
                <span className="contact-value">Jind, Haryana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="commit-banner">
        <div className="commit-content">
          <div className="commit-text">
            <h2>WE COMMIT TO DELIVER <span>QUALITY EYE CARE</span></h2>
            <p>Expert advice and treatment for all your eye problems</p>
          </div>
          <Link href="/appointment" className="commit-btn">
            BOOK APPOINTMENT
          </Link>
        </div>
      </section>

      <style jsx>{`
        .cta-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.2;
          pointer-events: none;
        }

        .glow-1 {
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.3);
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
        }

        .glow-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          bottom: -100px;
          right: -50px;
        }

        .bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(255, 214, 0, 0.1) 0%, transparent 40%);
        }

        .cta-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          color: white;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 25px;
        }

        .tag-dot {
          width: 8px;
          height: 8px;
          background: #FFD600;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .cta-section h2 {
          color: white;
          font-size: 3.2rem;
          font-weight: 800;
          margin: 0 0 20px;
        }

        .gradient-text {
          color: #FFD600;
        }

        .cta-section p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.2rem;
          max-width: 650px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }

        .cta-buttons {
          display: flex;
          gap: 18px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          color: #1a1a2e;
          padding: 18px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 35px rgba(255, 214, 0, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 45px rgba(255, 214, 0, 0.5);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          color: #7157A0;
          padding: 18px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-decoration: none;
          color: white;
          transition: all 0.3s;
        }

        .contact-card:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-5px);
        }

        .contact-icon {
          width: 55px;
          height: 55px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon.call {
          background: rgba(255, 255, 255, 0.2);
        }

        .contact-icon.whatsapp {
          background: #25D366;
        }

        .contact-icon.location {
          background: linear-gradient(135deg, #FFD600, #FFA500);
        }

        .contact-text {
          text-align: left;
        }

        .contact-label {
          display: block;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 3px;
        }

        .contact-value {
          display: block;
          font-weight: 700;
          font-size: 1rem;
          color: white;
        }

        /* Commitment Banner */
        .commit-banner {
          background: linear-gradient(135deg, #FFD600 0%, #FFA500 100%);
          padding: 50px 20px;
        }

        .commit-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
        }

        .commit-text h2 {
          color: #1a1a2e;
          font-size: 1.9rem;
          margin: 0 0 8px;
          font-weight: 800;
        }

        .commit-text h2 span {
          color: #7157A0;
        }

        .commit-text p {
          color: #5a4a7f;
          margin: 0;
          font-size: 1.05rem;
        }

        .commit-btn {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 18px 45px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          white-space: nowrap;
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.4);
        }

        .commit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.5);
        }

        @media (max-width: 900px) {
          .contact-cards {
            grid-template-columns: 1fr;
            max-width: 350px;
          }
          .cta-section h2 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 700px) {
          .cta-section {
            padding: 60px 15px;
          }
          .commit-content {
            flex-direction: column;
            text-align: center;
          }
          .commit-text {
            text-align: center;
          }
          .commit-text h2 {
            font-size: 1.5rem;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
