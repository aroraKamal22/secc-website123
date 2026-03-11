'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <>
      {/* Primary CTA */}
      <section className="cta-section-home">
        <div className="cta-bg-pattern" />
        <div className="cta-content">
          <span className="cta-badge">Your Vision Matters</span>
          <h2>Ready to Experience Better Vision?</h2>
          <p>
            Book your appointment today and take the first step towards clearer vision
            with our expert eye care services.
          </p>
          <div className="cta-buttons">
            <Link href="/appointment" className="cta-btn-primary">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Book Appointment
            </Link>
            <Link href="/contact" className="cta-btn-secondary">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-cards">
            <a href="tel:+919729236700" className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
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
              <div>
                <span className="contact-label">WhatsApp</span>
                <span className="contact-value">Message Us</span>
              </div>
            </a>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
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
        .cta-section-home {
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(255, 214, 0, 0.1) 0%, transparent 40%);
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .cta-badge {
          display: inline-block;
          background: rgba(255, 214, 0, 0.2);
          border: 1px solid rgba(255, 214, 0, 0.5);
          color: #FFD600;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .cta-section-home h2 {
          color: white;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 15px;
        }

        .cta-section-home p {
          color: rgba(255,255,255,0.9);
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.7;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFD600;
          color: #7157A0;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(255, 214, 0, 0.4);
        }

        .cta-btn-primary:hover {
          background: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(255, 214, 0, 0.5);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid white;
        }

        .cta-btn-secondary:hover {
          background: white;
          color: #7157A0;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          border: 1px solid rgba(255,255,255,0.15);
          text-decoration: none;
          color: white;
          transition: all 0.3s;
        }

        .contact-card:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-3px);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: rgba(255,255,255,0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon.whatsapp {
          background: #25D366;
        }

        .contact-label {
          display: block;
          font-size: 0.8rem;
          opacity: 0.8;
          margin-bottom: 2px;
        }

        .contact-value {
          display: block;
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* Commitment Banner */
        .commit-banner {
          background: #FFD600;
          padding: 40px 20px;
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

        .commit-text {
          text-align: left;
        }

        .commit-text h2 {
          color: #7157A0;
          font-size: 1.8rem;
          margin: 0 0 5px;
          font-weight: 700;
        }

        .commit-text h2 span {
          color: #333;
        }

        .commit-text p {
          color: #7157A0;
          margin: 0;
          opacity: 0.8;
        }

        .commit-btn {
          background: #7157A0;
          color: white;
          padding: 16px 35px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .commit-btn:hover {
          background: #5a4a7f;
          transform: translateY(-2px);
        }

        @media (max-width: 800px) {
          .contact-cards {
            grid-template-columns: 1fr;
            max-width: 300px;
          }
          .cta-section-home h2 {
            font-size: 2rem;
          }
          .commit-content {
            flex-direction: column;
            text-align: center;
          }
          .commit-text {
            text-align: center;
          }
          .commit-text h2 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}
