'use client';

import Link from 'next/link';
import { useState } from 'react';

const sections = [
  {
    id: 'intro',
    title: 'Introduction',
    icon: 'ℹ️',
    content: 'These Terms & Conditions govern your access to and use of the services offered by Saraswati Eye Care Centre, Jind ("Hospital", "we", "us"). By accessing our website, booking appointments, or availing our services, you agree to be bound by these Terms.',
  },
  {
    id: 'definitions',
    title: 'Definitions',
    icon: '📖',
    items: [
      '"Patient" means any person who books or receives medical care from the Hospital.',
      '"Services" means consultations, diagnostics, surgeries, optical services, or any other offerings.',
      '"Website" refers to the official website and online booking portals of the Hospital.',
    ],
  },
  {
    id: 'services',
    title: 'Use of Services',
    icon: '🩺',
    items: [
      'All medical advice is personalized and based on the patient\'s clinical condition.',
      'Services may require valid identification and medical history for accurate diagnosis.',
      'We reserve the right to refuse service in case of inappropriate behavior or policy violations.',
    ],
  },
  {
    id: 'appointments',
    title: 'Appointments & Payments',
    icon: '📅',
    items: [
      'Appointments are subject to availability and may be rescheduled due to emergencies.',
      'Fees for consultations, diagnostics, and procedures must be paid as communicated.',
      'For cancellations and refunds, please refer to our Cancellation & Refund Policy.',
    ],
  },
  {
    id: 'disclaimer',
    title: 'Medical Disclaimer',
    icon: '⚕️',
    items: [
      'Information on the Website is for general awareness and not a substitute for professional medical advice.',
      'Outcomes may vary between patients based on clinical conditions and compliance.',
      'Emergency conditions require immediate attention at the nearest facility.',
    ],
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    icon: '©️',
    items: [
      'All content including text, images, logos, and videos are the property of Saraswati Eye Care Centre or respective owners.',
      'Unauthorized copying, distribution, or modification is prohibited without written consent.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & Data Protection',
    icon: '🔒',
    items: [
      'We collect and process personal data solely for providing medical services and improving patient care.',
      'Data is protected using reasonable security measures; however, no method is 100% secure.',
      'By using our Services, you consent to the collection and use of your information as outlined.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    icon: '⚖️',
    items: [
      'The Hospital is not liable for indirect, incidental, or consequential damages arising from the use of Services.',
      'Liability, if any, shall be limited to the amount paid by the Patient for the specific Service.',
    ],
  },
  {
    id: 'governing',
    title: 'Governing Law & Dispute Resolution',
    icon: '🔨',
    items: [
      'These Terms shall be governed by the laws of India.',
      'Courts at Jind, Haryana, shall have exclusive jurisdiction for disputes, subject to applicable law.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    icon: '🔄',
    content: 'We may update these Terms from time to time. Updated versions will be posted on this page with the effective date.',
  },
];

export default function TermsConditionsPage() {
  const [openSection, setOpenSection] = useState<string | null>('intro');

  return (
    <>
      {/* Hero Section */}
      <section className="policy-hero">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span>📄</span>
            <span>Legal Agreement</span>
          </div>
          <h1>Terms & Conditions</h1>
          <p>Rules that govern the use of Saraswati Eye Care Centre services</p>
        </div>
      </section>

      <div className="policy-container">
        {/* Hospital Info Card */}
        <div className="hospital-card">
          <div className="hospital-icon">🏥</div>
          <h2>Saraswati Eye Care Centre, Jind</h2>
          <p>Trusted eye care with advanced technology and experienced specialists</p>
          <div className="effective-date">
            <span>📅</span>
            <span>Effective Date: January 2024</span>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="summary-card">
          <h3>Quick Summary</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-icon">✓</span>
              <p>Appointments subject to availability</p>
            </div>
            <div className="summary-item">
              <span className="summary-icon">✓</span>
              <p>Medical advice is personalized</p>
            </div>
            <div className="summary-item">
              <span className="summary-icon">✓</span>
              <p>Your data is protected</p>
            </div>
            <div className="summary-item">
              <span className="summary-icon">✓</span>
              <p>Indian law governs disputes</p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="sections-container">
          {sections.map((section) => (
            <div key={section.id} className={`policy-section ${openSection === section.id ? 'open' : ''}`}>
              <button
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                className="section-header"
              >
                <div className="section-title">
                  <span className="section-icon">{section.icon}</span>
                  <h3>{section.title}</h3>
                </div>
                <span className="toggle-icon">{openSection === section.id ? '−' : '+'}</span>
              </button>
              {openSection === section.id && (
                <div className="section-content">
                  {section.content && <p className="content-text">{section.content}</p>}
                  {section.items && (
                    <div className="items-list">
                      {section.items.map((item, index) => (
                        <div key={index} className="policy-item">
                          <span className="item-check">✓</span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Agreement Notice */}
        <div className="agreement-card">
          <div className="agreement-icon">🤝</div>
          <h3>Your Agreement</h3>
          <p>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>Questions About Our Terms?</h3>
          <p>For any questions regarding these Terms & Conditions, please reach out:</p>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <h4>Phone</h4>
              <p>+91 97292-36700</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">✉️</span>
              <h4>Email</h4>
              <p>saraswatieyecarecentre@gmail.com</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">💬</span>
              <h4>WhatsApp</h4>
              <p>+91 97292-36700</p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="related-links">
          <h4>Related Policies</h4>
          <div className="links-grid">
            <Link href="/privacy-policy" className="policy-link">
              <span>🛡️</span>
              <span>Privacy Policy</span>
            </Link>
            <Link href="/cancellation-refund" className="policy-link">
              <span>💰</span>
              <span>Refund Policy</span>
            </Link>
            <Link href="/shipping-delivery" className="policy-link">
              <span>🚚</span>
              <span>Delivery Policy</span>
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <div className="back-section">
          <Link href="/" className="back-btn">
            <span>🏠</span> Back to Home
          </Link>
        </div>
      </div>

      <style jsx>{`
        .policy-hero {
          background: linear-gradient(135deg, #7157A0 0%, #9b7bc7 50%, #7157A0 100%);
          padding: 80px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          padding: 10px 24px;
          border-radius: 50px;
          color: white;
          font-size: 14px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .policy-hero h1 {
          font-size: 48px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
        }

        .policy-hero p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
        }

        .policy-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .hospital-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          margin-top: -60px;
          position: relative;
          z-index: 10;
        }

        .hospital-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .hospital-card h2 {
          font-size: 28px;
          color: #7157A0;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .hospital-card > p {
          color: #666;
          margin-bottom: 20px;
        }

        .effective-date {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f8f6fc;
          padding: 10px 20px;
          border-radius: 20px;
          color: #7157A0;
          font-size: 14px;
          font-weight: 500;
        }

        .summary-card {
          background: linear-gradient(135deg, #f8f6fc, #efe8f8);
          padding: 30px;
          border-radius: 20px;
          margin-bottom: 30px;
        }

        .summary-card h3 {
          color: #7157A0;
          margin-bottom: 20px;
          font-size: 20px;
          text-align: center;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          padding: 16px;
          border-radius: 12px;
        }

        .summary-icon {
          color: #22c55e;
          font-weight: bold;
          font-size: 18px;
        }

        .summary-item p {
          color: #555;
          font-size: 14px;
          margin: 0;
        }

        .sections-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .policy-section {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .policy-section:hover {
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.1);
        }

        .section-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .policy-section.open .section-header {
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-icon {
          font-size: 24px;
        }

        .section-title h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          color: #333;
        }

        .policy-section.open .section-title h3 {
          color: white;
        }

        .toggle-icon {
          font-size: 24px;
          font-weight: 300;
          color: #7157A0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f8f6fc;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .policy-section.open .toggle-icon {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .section-content {
          padding: 24px;
          border-top: 1px solid #f0f0f0;
        }

        .content-text {
          color: #555;
          line-height: 1.8;
        }

        .items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .policy-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: #f8f6fc;
          border-radius: 12px;
        }

        .item-check {
          color: #22c55e;
          font-weight: bold;
          font-size: 18px;
        }

        .policy-item p {
          color: #555;
          font-size: 14px;
          margin: 0;
          line-height: 1.6;
        }

        .agreement-card {
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          color: white;
          margin-bottom: 40px;
        }

        .agreement-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .agreement-card h3 {
          font-size: 24px;
          margin-bottom: 16px;
        }

        .agreement-card p {
          font-size: 15px;
          line-height: 1.8;
          opacity: 0.9;
        }

        .contact-section {
          background: white;
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          margin-bottom: 30px;
        }

        .contact-section h3 {
          font-size: 28px;
          color: #7157A0;
          margin-bottom: 10px;
        }

        .contact-section > p {
          color: #666;
          margin-bottom: 30px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .contact-card {
          background: #f8f6fc;
          padding: 24px;
          border-radius: 16px;
          text-align: center;
        }

        .contact-icon {
          font-size: 32px;
          display: block;
          margin-bottom: 12px;
        }

        .contact-card h4 {
          color: #7157A0;
          margin-bottom: 8px;
          font-size: 16px;
        }

        .contact-card p {
          color: #333;
          font-weight: 600;
          font-size: 14px;
          margin: 0;
        }

        .related-links {
          margin-bottom: 40px;
        }

        .related-links h4 {
          color: #7157A0;
          text-align: center;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .links-grid {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .policy-link {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 14px 24px;
          border-radius: 50px;
          color: #7157A0;
          text-decoration: none;
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .policy-link:hover {
          background: #7157A0;
          color: white;
          transform: translateY(-2px);
        }

        .back-section {
          text-align: center;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.3);
        }

        @media (max-width: 768px) {
          .policy-hero h1 {
            font-size: 32px;
          }

          .hospital-card {
            padding: 30px 20px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .summary-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
