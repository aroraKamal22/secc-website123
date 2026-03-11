'use client';

import Link from 'next/link';
import { useState } from 'react';

const sections = [
  {
    id: 'collection',
    title: 'Information We Collect',
    icon: '📊',
    content: {
      intro: 'We collect information to provide you with the best possible eye care services:',
      items: [
        { label: 'Personal Information', desc: 'Name, age, gender, contact details, address' },
        { label: 'Medical Information', desc: 'Medical history, current symptoms, diagnosis, treatment plans' },
        { label: 'Financial Information', desc: 'Payment details, insurance information, billing records' },
        { label: 'Technical Information', desc: 'Website usage data, cookies, device information' },
        { label: 'Communication Records', desc: 'Appointment bookings, follow-up communications' },
      ],
      howCollect: [
        'Directly from you during consultations and appointments',
        'Through our website and online booking systems',
        'From referrals and medical reports',
        'Through phone calls, emails, and WhatsApp communications',
        'From insurance companies and third-party service providers',
      ],
    },
  },
  {
    id: 'usage',
    title: 'How We Use Your Information',
    icon: '⚙️',
    content: {
      intro: 'Your information is used exclusively for providing quality eye care services:',
      items: [
        { label: 'Medical Care', desc: 'Diagnosis, treatment planning, and follow-up care' },
        { label: 'Appointment Management', desc: 'Scheduling, reminders, and rescheduling' },
        { label: 'Communication', desc: 'Health updates, appointment confirmations, and emergency contacts' },
        { label: 'Quality Improvement', desc: 'Enhancing our services and patient care standards' },
        { label: 'Legal Compliance', desc: 'Meeting regulatory requirements and medical standards' },
        { label: 'Insurance Processing', desc: 'Claims processing and verification' },
      ],
      weNever: [
        'Sell your personal information to third parties',
        'Use your data for marketing without consent',
        'Share medical information without your permission',
        'Use your data for purposes unrelated to healthcare',
      ],
    },
  },
  {
    id: 'sharing',
    title: 'Information Sharing & Disclosure',
    icon: '🔗',
    content: {
      intro: 'We may share your information only in specific circumstances:',
      items: [
        { label: 'With Your Consent', desc: 'When you explicitly authorize us to share information' },
        { label: 'Medical Emergencies', desc: 'To emergency responders when necessary for your safety' },
        { label: 'Legal Requirements', desc: 'When required by law or court orders' },
        { label: 'Insurance Claims', desc: 'To process your insurance claims and verifications' },
        { label: 'Referral Services', desc: 'To other healthcare providers when referring you for specialized care' },
        { label: 'Quality Assurance', desc: 'For medical audits and quality improvement programs' },
      ],
    },
  },
  {
    id: 'security',
    title: 'Data Security & Protection',
    icon: '🔒',
    content: {
      intro: 'We implement comprehensive security measures to protect your information:',
      items: [
        { label: 'Physical Security', desc: 'Secure premises with controlled access to medical records' },
        { label: 'Digital Security', desc: 'Encrypted databases, secure servers, and firewalls' },
        { label: 'Access Controls', desc: 'Role-based access with unique user credentials' },
        { label: 'Regular Audits', desc: 'Security assessments and vulnerability testing' },
        { label: 'Staff Training', desc: 'Regular privacy and security awareness training' },
        { label: 'Incident Response', desc: 'Procedures for handling security breaches' },
      ],
    },
  },
  {
    id: 'retention',
    title: 'Data Retention & Deletion',
    icon: '⏰',
    content: {
      intro: 'We retain your information for appropriate periods as required by law:',
      items: [
        { label: 'Medical Records', desc: 'Retained for 7 years from last visit (as per medical council guidelines)' },
        { label: 'Financial Records', desc: 'Retained for 6 years (as per tax regulations)' },
        { label: 'Insurance Records', desc: 'Retained for 3 years after claim settlement' },
        { label: 'Website Data', desc: 'Retained for 2 years unless you request deletion' },
        { label: 'Communication Records', desc: 'Retained for 3 years for quality assurance' },
      ],
    },
  },
  {
    id: 'rights',
    title: 'Your Privacy Rights',
    icon: '✅',
    content: {
      intro: 'You have several rights regarding your personal information:',
      items: [
        { label: 'Access Rights', desc: 'Request copies of your medical and personal records' },
        { label: 'Correction Rights', desc: 'Request updates to inaccurate or incomplete information' },
        { label: 'Portability Rights', desc: 'Request transfer of your data to another healthcare provider' },
        { label: 'Restriction Rights', desc: 'Request limitations on how we use your information' },
        { label: 'Objection Rights', desc: 'Object to certain types of data processing' },
        { label: 'Deletion Rights', desc: 'Request deletion of non-medical personal information' },
      ],
    },
  },
  {
    id: 'cookies',
    title: 'Cookies & Website Tracking',
    icon: '🍪',
    content: {
      intro: 'Our website uses cookies and tracking technologies to improve your experience:',
      items: [
        { label: 'Essential Cookies', desc: 'Required for website functionality and security' },
        { label: 'Analytics Cookies', desc: 'Help us understand website usage and improve services' },
        { label: 'Preference Cookies', desc: 'Remember your settings and preferences' },
        { label: 'Marketing Cookies', desc: 'Only used with your explicit consent' },
      ],
    },
  },
  {
    id: 'children',
    title: "Children's Privacy Protection",
    icon: '👶',
    content: {
      intro: 'We take special care to protect the privacy of children under 18:',
      items: [
        { label: 'Parental Consent', desc: 'Required for collecting information from children under 18' },
        { label: 'Limited Data Collection', desc: 'Only collect information necessary for medical care' },
        { label: 'Parental Rights', desc: "Parents can access and control their child's information" },
        { label: 'Age Verification', desc: 'We verify age before collecting personal information' },
        { label: 'Special Protections', desc: "Enhanced security measures for children's data" },
      ],
    },
  },
];

export default function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState<string | null>('collection');

  return (
    <>
      {/* Hero Section */}
      <section className="policy-hero">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span>🛡️</span>
            <span>Your Data is Safe With Us</span>
          </div>
          <h1>Privacy Policy</h1>
          <p>Your Privacy and Data Protection is Our Priority</p>
        </div>
      </section>

      <div className="policy-container">
        {/* Hospital Info Card */}
        <div className="hospital-card">
          <div className="hospital-icon">🏥</div>
          <h2>Saraswati Eye Care Centre, Jind</h2>
          <p>NABH Certified | Committed to Protecting Your Personal Information and Medical Data</p>
          <div className="trust-badges">
            <span className="badge">🔒 Secure Data</span>
            <span className="badge">📋 HIPAA Compliant</span>
            <span className="badge">🏆 NABH Certified</span>
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
                  <p className="intro-text">{section.content.intro}</p>
                  <div className="items-grid">
                    {section.content.items.map((item, index) => (
                      <div key={index} className="policy-item">
                        <span className="item-check">✓</span>
                        <div>
                          <strong>{item.label}</strong>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {section.content.howCollect && (
                    <div className="sub-section">
                      <h4>How We Collect Information:</h4>
                      <ul>
                        {section.content.howCollect.map((item, index) => (
                          <li key={index}><span>•</span> {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {section.content.weNever && (
                    <div className="sub-section warning">
                      <h4>We Never:</h4>
                      <ul>
                        {section.content.weNever.map((item, index) => (
                          <li key={index}><span className="cross">✗</span> {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="notice-card">
          <div className="notice-icon">⚠️</div>
          <h3>Important Privacy Notice</h3>
          <ul>
            <li>This privacy policy applies to all services provided by Saraswati Eye Care Centre</li>
            <li>Medical information is protected by doctor-patient confidentiality laws</li>
            <li>We never sell, rent, or trade your personal information</li>
            <li>All staff members are trained in privacy and data protection</li>
            <li>Regular privacy audits ensure compliance with our policies</li>
            <li>Your privacy rights are protected under Indian law and medical council guidelines</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>Privacy Concerns? Contact Us</h3>
          <p>Our Privacy Officer is here to address all your privacy and data protection concerns.</p>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">👨‍⚕️</span>
              <h4>Privacy Officer</h4>
              <p>Dr. Rajesh Garg</p>
              <span className="contact-label">Chief Medical Officer</span>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <h4>Phone</h4>
              <p>+91 97292-36700</p>
              <span className="contact-label">Mon-Sat, 9AM-6PM</span>
            </div>
            <div className="contact-card">
              <span className="contact-icon">✉️</span>
              <h4>Email</h4>
              <p>saraswatieyecarecentre@gmail.com</p>
              <span className="contact-label">24-48 hr response</span>
            </div>
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
          margin-bottom: 40px;
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

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .trust-badges .badge {
          background: #f8f6fc;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          color: #7157A0;
          font-weight: 500;
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

        .intro-text {
          color: #555;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .items-grid {
          display: grid;
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

        .policy-item strong {
          color: #7157A0;
          display: block;
          margin-bottom: 4px;
        }

        .policy-item p {
          color: #666;
          font-size: 14px;
          margin: 0;
        }

        .sub-section {
          margin-top: 24px;
          padding: 20px;
          background: #f8f8f8;
          border-radius: 12px;
        }

        .sub-section.warning {
          background: #fff5f5;
        }

        .sub-section h4 {
          color: #7157A0;
          margin-bottom: 12px;
          font-size: 16px;
        }

        .sub-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sub-section li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #555;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .sub-section li span {
          color: #7157A0;
        }

        .sub-section li .cross {
          color: #ef4444;
        }

        .notice-card {
          background: linear-gradient(135deg, #f8f6fc, #efe8f8);
          padding: 30px;
          border-radius: 20px;
          margin-bottom: 40px;
          border-left: 4px solid #7157A0;
        }

        .notice-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .notice-card h3 {
          color: #7157A0;
          margin-bottom: 16px;
          font-size: 20px;
        }

        .notice-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .notice-card li {
          color: #555;
          margin-bottom: 10px;
          padding-left: 20px;
          position: relative;
          font-size: 14px;
        }

        .notice-card li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #7157A0;
        }

        .contact-section {
          background: white;
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          margin-bottom: 40px;
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
          margin-bottom: 4px;
          font-size: 14px;
        }

        .contact-label {
          font-size: 12px;
          color: #888;
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

          .trust-badges {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
