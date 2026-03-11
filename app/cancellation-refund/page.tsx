'use client';

import Link from 'next/link';
import { useState } from 'react';

const appointmentCancellation = [
  { notice: '24+ Hours Notice', fee: 'Free', color: 'green', icon: '✓' },
  { notice: '12-24 Hours Notice', fee: '25% fee may apply', color: 'yellow', icon: '⚠️' },
  { notice: 'Less than 12 Hours', fee: '50% fee may apply', color: 'orange', icon: '⚠️' },
  { notice: 'No Show', fee: 'Full fee may be charged', color: 'red', icon: '✗' },
  { notice: 'Emergency Situations', fee: 'Special consideration', color: 'blue', icon: 'ℹ️' },
];

const refundPolicy = [
  { item: 'Pre-paid Services', policy: 'Full refund if cancelled 24+ hours before', icon: '💰' },
  { item: 'Partial Refunds', policy: 'Based on cancellation timing and service type', icon: '📊' },
  { item: 'Processing Time', policy: '7-14 business days for refund processing', icon: '⏱️' },
  { item: 'Refund Methods', policy: 'Same method as original payment', icon: '💳' },
  { item: 'Documentation', policy: 'Receipt and confirmation required', icon: '📄' },
];

const surgeryPolicy = [
  { notice: '7+ Days Notice', refund: '100% Refund', percentage: 100 },
  { notice: '3-7 Days Notice', refund: '80% Refund', percentage: 80 },
  { notice: '1-3 Days Notice', refund: '60% Refund', percentage: 60 },
  { notice: 'Less than 24 Hours', refund: '40% Refund', percentage: 40 },
  { notice: 'Medical Emergency', refund: '100% Refund*', percentage: 100 },
];

const nonRefundableItems = [
  'Completed diagnostic tests and reports',
  'Used medications and supplies',
  'Completed consultation sessions',
  'Administrative and processing fees',
  'Pre-operative tests and consultations',
  'Same-day surgery cancellations (partial)',
];

const cancellationMethods = [
  { method: 'Phone Call', contact: '+91 97292-36700', icon: '📞' },
  { method: 'WhatsApp', contact: '+91 97292-36700', icon: '💬' },
  { method: 'Email', contact: 'saraswatieyecarecentre@gmail.com', icon: '✉️' },
  { method: 'In Person', contact: 'Hospital Reception', icon: '🏥' },
];

export default function CancellationRefundPage() {
  const [activeTab, setActiveTab] = useState('appointment');

  return (
    <>
      {/* Hero Section */}
      <section className="policy-hero">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span>🛡️</span>
            <span>Fair & Transparent Policies</span>
          </div>
          <h1>Cancellation & Refund Policy</h1>
          <p>Transparent and Fair Policies for Your Peace of Mind</p>
        </div>
      </section>

      <div className="policy-container">
        {/* Hospital Info Card */}
        <div className="hospital-card">
          <div className="hospital-icon">🏥</div>
          <h2>Saraswati Eye Care Centre, Jind</h2>
          <p>Your Trusted Partner in Eye Care Excellence</p>
          <div className="policy-promise">
            <span>🤝</span>
            <span>We believe in fair and transparent refund policies</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'appointment' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointment')}
          >
            <span>📅</span>
            Appointments
          </button>
          <button
            className={`tab-btn ${activeTab === 'refund' ? 'active' : ''}`}
            onClick={() => setActiveTab('refund')}
          >
            <span>💰</span>
            Refunds
          </button>
          <button
            className={`tab-btn ${activeTab === 'surgery' ? 'active' : ''}`}
            onClick={() => setActiveTab('surgery')}
          >
            <span>🏥</span>
            Surgeries
          </button>
        </div>

        {/* Appointment Cancellation */}
        {activeTab === 'appointment' && (
          <div className="tab-content">
            <div className="content-header">
              <h3>Appointment Cancellation Policy</h3>
              <p>We understand that plans can change. Please notify us as early as possible for cancellations.</p>
            </div>

            <div className="cancellation-grid">
              {appointmentCancellation.map((item, index) => (
                <div key={index} className={`cancellation-card ${item.color}`}>
                  <span className="card-icon">{item.icon}</span>
                  <h4>{item.notice}</h4>
                  <p>{item.fee}</p>
                </div>
              ))}
            </div>

            <div className="how-to-cancel">
              <h4>How to Cancel Your Appointment</h4>
              <div className="methods-grid">
                {cancellationMethods.map((method, index) => (
                  <div key={index} className="method-card">
                    <span className="method-icon">{method.icon}</span>
                    <div>
                      <h5>{method.method}</h5>
                      <p>{method.contact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Refund Policy */}
        {activeTab === 'refund' && (
          <div className="tab-content">
            <div className="content-header">
              <h3>Refund Policy</h3>
              <p>Our refund policy ensures fair treatment in all financial transactions.</p>
            </div>

            <div className="refund-grid">
              {refundPolicy.map((item, index) => (
                <div key={index} className="refund-card">
                  <span className="refund-icon">{item.icon}</span>
                  <div>
                    <h4>{item.item}</h4>
                    <p>{item.policy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="non-refundable">
              <h4>Non-Refundable Items</h4>
              <div className="non-refundable-list">
                {nonRefundableItems.map((item, index) => (
                  <div key={index} className="non-refundable-item">
                    <span className="cross-icon">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Surgery Cancellation */}
        {activeTab === 'surgery' && (
          <div className="tab-content">
            <div className="content-header">
              <h3>Surgery & Procedure Cancellation</h3>
              <p>Special considerations apply for surgical procedures and major treatments.</p>
            </div>

            <div className="surgery-table">
              {surgeryPolicy.map((item, index) => (
                <div key={index} className="surgery-row">
                  <div className="surgery-info">
                    <h4>{item.notice}</h4>
                    <span className="refund-amount">{item.refund}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="surgery-notes">
              <h4>Important Notes for Surgery Cancellation</h4>
              <ul>
                <li>Pre-operative tests and consultations are non-refundable</li>
                <li>Hospital stay charges apply if cancelled on admission day</li>
                <li>Insurance claims may affect refund amounts</li>
                <li>Rescheduling is preferred over cancellation when possible</li>
                <li>* Medical emergency refunds require valid medical certificate</li>
              </ul>
            </div>
          </div>
        )}

        {/* Important Notice */}
        <div className="notice-card">
          <div className="notice-header">
            <span className="notice-icon">⚠️</span>
            <h3>Important Notice</h3>
          </div>
          <ul className="notice-list">
            <li>All cancellation requests must be made in writing or through official channels</li>
            <li>Refund processing time may vary based on payment method and bank processing</li>
            <li>Administrative fees of ₹50 may apply for processing cancellations</li>
            <li>In case of disputes, hospital management&apos;s decision will be final</li>
            <li>This policy is subject to change with prior notice to patients</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>Need Help? Contact Us</h3>
          <p>Our team is here to assist you with any questions about our policies.</p>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <h4>Phone</h4>
              <p>+91 97292-36700</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">💬</span>
              <h4>WhatsApp</h4>
              <p>+91 97292-36700</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">✉️</span>
              <h4>Email</h4>
              <p>saraswatieyecarecentre@gmail.com</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">🕐</span>
              <h4>Office Hours</h4>
              <p>Mon-Sat: 9AM-6PM</p>
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
            <Link href="/terms-conditions" className="policy-link">
              <span>📄</span>
              <span>Terms & Conditions</span>
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
          max-width: 1000px;
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

        .policy-promise {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f8f6fc;
          padding: 12px 24px;
          border-radius: 50px;
          color: #7157A0;
          font-weight: 500;
        }

        /* Tab Navigation */
        .tab-navigation {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          background: white;
          color: #666;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn:hover {
          border-color: #7157A0;
          color: #7157A0;
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          border-color: #7157A0;
          color: white;
        }

        /* Tab Content */
        .tab-content {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          margin-bottom: 30px;
        }

        .content-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .content-header h3 {
          font-size: 28px;
          color: #7157A0;
          margin-bottom: 12px;
        }

        .content-header p {
          color: #666;
        }

        /* Appointment Cancellation Grid */
        .cancellation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-bottom: 40px;
        }

        .cancellation-card {
          padding: 24px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .cancellation-card.green {
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
        }

        .cancellation-card.yellow {
          background: linear-gradient(135deg, #fef9c3, #fef08a);
        }

        .cancellation-card.orange {
          background: linear-gradient(135deg, #ffedd5, #fed7aa);
        }

        .cancellation-card.red {
          background: linear-gradient(135deg, #fee2e2, #fecaca);
        }

        .cancellation-card.blue {
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
        }

        .card-icon {
          font-size: 28px;
          display: block;
          margin-bottom: 12px;
        }

        .cancellation-card h4 {
          color: #333;
          font-size: 15px;
          margin-bottom: 8px;
        }

        .cancellation-card p {
          color: #555;
          font-size: 13px;
        }

        /* How to Cancel */
        .how-to-cancel {
          background: #f8f6fc;
          padding: 30px;
          border-radius: 20px;
        }

        .how-to-cancel h4 {
          color: #7157A0;
          margin-bottom: 20px;
          text-align: center;
          font-size: 18px;
        }

        .methods-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .method-card {
          background: white;
          padding: 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .method-icon {
          font-size: 28px;
        }

        .method-card h5 {
          color: #333;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .method-card p {
          color: #7157A0;
          font-size: 13px;
          font-weight: 500;
        }

        /* Refund Grid */
        .refund-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 40px;
        }

        .refund-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: #f8f6fc;
          border-radius: 16px;
        }

        .refund-icon {
          font-size: 36px;
        }

        .refund-card h4 {
          color: #7157A0;
          font-size: 16px;
          margin-bottom: 4px;
        }

        .refund-card p {
          color: #666;
          font-size: 14px;
        }

        /* Non-Refundable */
        .non-refundable {
          background: #fff5f5;
          padding: 30px;
          border-radius: 20px;
          border-left: 4px solid #ef4444;
        }

        .non-refundable h4 {
          color: #dc2626;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .non-refundable-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .non-refundable-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #555;
          font-size: 14px;
        }

        .cross-icon {
          color: #ef4444;
          font-weight: bold;
        }

        /* Surgery Table */
        .surgery-table {
          margin-bottom: 40px;
        }

        .surgery-row {
          background: #f8f6fc;
          padding: 24px;
          border-radius: 16px;
          margin-bottom: 12px;
        }

        .surgery-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .surgery-info h4 {
          color: #333;
          font-size: 16px;
        }

        .refund-amount {
          background: #7157A0;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .progress-bar {
          height: 8px;
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #16a34a);
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        /* Surgery Notes */
        .surgery-notes {
          background: linear-gradient(135deg, #f8f6fc, #efe8f8);
          padding: 30px;
          border-radius: 20px;
        }

        .surgery-notes h4 {
          color: #7157A0;
          margin-bottom: 16px;
          font-size: 18px;
        }

        .surgery-notes ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .surgery-notes li {
          color: #555;
          margin-bottom: 10px;
          padding-left: 20px;
          position: relative;
          font-size: 14px;
        }

        .surgery-notes li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #7157A0;
        }

        /* Notice Card */
        .notice-card {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          padding: 30px;
          border-radius: 20px;
          margin-bottom: 30px;
          border-left: 4px solid #f59e0b;
        }

        .notice-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .notice-icon {
          font-size: 28px;
        }

        .notice-card h3 {
          color: #92400e;
          font-size: 20px;
          margin: 0;
        }

        .notice-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .notice-list li {
          color: #92400e;
          margin-bottom: 10px;
          padding-left: 20px;
          position: relative;
          font-size: 14px;
        }

        .notice-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #f59e0b;
        }

        /* Contact Section */
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
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .contact-card {
          background: #f8f6fc;
          padding: 24px 16px;
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
          font-size: 14px;
        }

        .contact-card p {
          color: #333;
          font-weight: 600;
          font-size: 13px;
        }

        /* Related Links */
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

        @media (max-width: 1024px) {
          .methods-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .policy-hero h1 {
            font-size: 32px;
          }

          .hospital-card {
            padding: 30px 20px;
          }

          .tab-btn {
            padding: 12px 20px;
            font-size: 14px;
          }

          .methods-grid,
          .contact-grid,
          .non-refundable-list {
            grid-template-columns: 1fr;
          }

          .cancellation-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}
