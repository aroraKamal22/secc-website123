'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const contactInfo = [
  {
    icon: '📞',
    title: 'Phone',
    details: ['+91 97292-36700'],
    action: 'tel:+919729236700',
    actionLabel: 'Call Now',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    details: ['+91 97292-36700'],
    action: 'https://wa.me/919729236700',
    actionLabel: 'Chat Now',
  },
  {
    icon: '📧',
    title: 'Email',
    details: ['saraswatieyecarecentre@gmail.com'],
    action: 'mailto:saraswatieyecarecentre@gmail.com',
    actionLabel: 'Send Email',
  },
  {
    icon: '📍',
    title: 'Address',
    details: ['66/6, Rajwaha Road,', 'Opp. Bus Stand, Jind,', 'Haryana - 126102'],
    action: 'https://maps.google.com/?q=Saraswati+Eye+Care+Centre+Jind',
    actionLabel: 'Get Directions',
  },
];

const workingHours = [
  { day: 'Monday - Saturday', time: '9:00 AM - 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
  { day: 'Emergency', time: '24/7 Available' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', contact: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <span className="hero-badge">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>
            Have questions about our services? We're here to help.
            Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-cards-section">
        <div className="cards-container">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.action}
              target={info.action.startsWith('http') ? '_blank' : undefined}
              rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card"
            >
              <span className="card-icon">{info.icon}</span>
              <h3>{info.title}</h3>
              <div className="card-details">
                {info.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
              <span className="card-action">
                {info.actionLabel}
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section">
        <div className="contact-container">
          {/* Form Side */}
          <div className="form-wrapper">
            <div className="form-header">
              <span className="form-badge">Send Message</span>
              <h2>We'd Love to Hear From You</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Number *</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Your Message</label>
                  <textarea
                    placeholder="Write your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="info-wrapper">
            {/* Working Hours */}
            <div className="info-card hours-card">
              <div className="info-card-header">
                <span className="info-icon">🕐</span>
                <h3>Working Hours</h3>
              </div>
              <div className="hours-list">
                {workingHours.map((item, index) => (
                  <div key={index} className={`hours-item ${item.day === 'Sunday' ? 'closed' : ''} ${item.day === 'Emergency' ? 'emergency' : ''}`}>
                    <span className="day">{item.day}</span>
                    <span className="time">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="info-card actions-card">
              <div className="info-card-header">
                <span className="info-icon">⚡</span>
                <h3>Quick Actions</h3>
              </div>
              <div className="actions-list">
                <Link href="/appointment" className="action-btn primary">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Book Appointment
                </Link>
                <a href="https://wa.me/919729236700" target="_blank" rel="noopener noreferrer" className="action-btn whatsapp">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
                <a href="tel:+919729236700" className="action-btn call">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

            {/* Hospital Image */}
            <div className="hospital-image-card">
              <Image
                src="/images/fronteView1.jpg"
                alt="Saraswati Eye Care Centre"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="image-overlay">
                <h4>Visit Our Hospital</h4>
                <p>State-of-the-art facility in Jind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-header">
          <span className="map-badge">Find Us</span>
          <h2>Our Location</h2>
          <p>Conveniently located opposite Bus Stand, Jind</p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13915.68726212107!2d76.325329!3d29.313969000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391204530f997803%3A0xcfaa462e2c2ba3c1!2sSaraswati%20Eye%20Care%20and%20Retina%20Centre!5e0!3m2!1sen!2sin!4v1746867451317!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="map-footer">
          <a
            href="https://maps.google.com/?q=Saraswati+Eye+Care+Centre+Jind"
            target="_blank"
            rel="noopener noreferrer"
            className="directions-btn"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Open in Google Maps
          </a>
        </div>
      </section>

      <style jsx>{`
        /* Hero Section */
        .contact-hero {
          position: relative;
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 50%, #9b7ed4 100%);
          color: white;
          text-align: center;
          overflow: hidden;
        }

        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255,214,0,0.15) 0%, transparent 40%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 214, 0, 0.2);
          border: 1px solid rgba(255, 214, 0, 0.5);
          color: #FFD600;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .contact-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin: 0 0 15px;
        }

        .contact-hero p {
          font-size: 1.15rem;
          opacity: 0.95;
          line-height: 1.7;
          margin: 0;
        }

        /* Contact Cards Section */
        .contact-cards-section {
          background: white;
          padding: 0 20px;
          margin-top: -40px;
          position: relative;
          z-index: 10;
        }

        .cards-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(113, 87, 160, 0.12);
          text-decoration: none;
          transition: all 0.3s;
          border: 1px solid #f0f0f0;
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(113, 87, 160, 0.2);
        }

        .card-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 15px;
        }

        .contact-card h3 {
          color: #7157A0;
          font-size: 1.1rem;
          margin: 0 0 10px;
          font-weight: 700;
        }

        .card-details p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.5;
        }

        .card-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #7157A0;
          font-weight: 600;
          font-size: 0.85rem;
          margin-top: 15px;
        }

        /* Main Contact Section */
        .main-contact-section {
          padding: 80px 20px;
          background: #f8f6fc;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
        }

        .form-wrapper {
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .form-header {
          margin-bottom: 30px;
        }

        .form-badge {
          display: inline-block;
          background: #7157A0;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .form-header h2 {
          color: #333;
          font-size: 1.8rem;
          margin: 0 0 10px;
        }

        .form-header p {
          color: #888;
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-group label {
          color: #555;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          padding: 14px 18px;
          border: 2px solid #e8e8e8;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s;
          background: #fafafa;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #7157A0;
          background: white;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .success-message {
          text-align: center;
          padding: 40px;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #4CAF50;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto 20px;
        }

        .success-message h3 {
          color: #333;
          margin: 0 0 10px;
        }

        .success-message p {
          color: #666;
          margin: 0;
        }

        /* Info Side */
        .info-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card {
          background: white;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .info-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .info-icon {
          font-size: 1.5rem;
        }

        .info-card h3 {
          color: #333;
          font-size: 1.1rem;
          margin: 0;
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 15px;
          background: #f8f8f8;
          border-radius: 10px;
        }

        .hours-item.closed {
          background: #fff3f3;
        }

        .hours-item.closed .time {
          color: #e74c3c;
        }

        .hours-item.emergency {
          background: #e8f5e9;
        }

        .hours-item.emergency .time {
          color: #4CAF50;
          font-weight: 600;
        }

        .day {
          color: #555;
          font-weight: 500;
        }

        .time {
          color: #7157A0;
          font-weight: 600;
        }

        .actions-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .action-btn.primary {
          background: #7157A0;
          color: white;
        }

        .action-btn.primary:hover {
          background: #5a4a7f;
        }

        .action-btn.whatsapp {
          background: #25D366;
          color: white;
        }

        .action-btn.whatsapp:hover {
          background: #128C7E;
        }

        .action-btn.call {
          background: #f8f8f8;
          color: #7157A0;
          border: 2px solid #7157A0;
        }

        .action-btn.call:hover {
          background: #7157A0;
          color: white;
        }

        .hospital-image-card {
          position: relative;
          height: 200px;
          border-radius: 20px;
          overflow: hidden;
        }

        .hospital-image-card .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(113, 87, 160, 0.9), transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          color: white;
        }

        .hospital-image-card h4 {
          margin: 0 0 5px;
          font-size: 1.1rem;
        }

        .hospital-image-card p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.9rem;
        }

        /* Map Section */
        .map-section {
          padding: 60px 20px 80px;
          background: white;
        }

        .map-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .map-badge {
          display: inline-block;
          background: #7157A0;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .map-header h2 {
          color: #7157A0;
          font-size: 2rem;
          margin: 0 0 10px;
        }

        .map-header p {
          color: #888;
          margin: 0;
        }

        .map-container {
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .map-footer {
          text-align: center;
          margin-top: 25px;
        }

        .directions-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #7157A0;
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .directions-btn:hover {
          background: #5a4a7f;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .cards-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .contact-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-hero h1 { font-size: 2rem; }
          .form-row { grid-template-columns: 1fr; }
          .form-group.full-width { grid-column: span 1; }
          .map-header h2 { font-size: 1.6rem; }
        }

        @media (max-width: 500px) {
          .cards-container { grid-template-columns: 1fr; }
          .form-wrapper { padding: 25px; }
        }
      `}</style>
    </>
  );
}
