'use client';

import Link from 'next/link';

const deliveryInfo = [
  {
    icon: '📍',
    title: 'Service Area',
    description: 'Jind city and surrounding areas within 50 km radius',
  },
  {
    icon: '🕐',
    title: 'Delivery Hours',
    description: 'Monday to Saturday, 9:00 AM to 6:00 PM',
  },
  {
    icon: '📦',
    title: 'Processing Time',
    description: '5-7 days for standard orders, may vary for complex orders',
  },
  {
    icon: '🚨',
    title: 'Emergency Deliveries',
    description: 'Available for critical medical supplies with priority handling',
  },
];

const deliverableItems = [
  { item: 'Prescription Eyeglasses', time: '5-7 Business Days', icon: '👓' },
  { item: 'Contact Lenses', time: '2-3 Business Days', icon: '👁️' },
  { item: 'Eye Drops & Medications', time: 'Same Day/Next Day', icon: '💊' },
  { item: 'Optical Accessories', time: '3-5 Business Days', icon: '🎒' },
  { item: 'Post-Surgery Kits', time: 'Same Day', icon: '🏥' },
  { item: 'Diagnostic Reports', time: 'Digital: Instant / Physical: 1-2 Days', icon: '📋' },
];

const deliveryCharges = [
  { range: 'Within Jind City', charge: 'Free', highlight: true },
  { range: '0-10 km from hospital', charge: 'Free' },
  { range: '10-25 km from hospital', charge: '₹50' },
  { range: '25-50 km from hospital', charge: '₹100' },
  { range: 'Emergency Delivery', charge: '₹150 (Priority)' },
];

const importantNotes = [
  'Always verify your delivery address and contact number before confirming',
  'Keep someone available at the delivery location during scheduled time',
  'Check all items carefully before signing the delivery receipt',
  'Report any damage or discrepancy within 2 hours of delivery',
  'Store medications and eye drops as per instructions provided',
  'Contact us immediately for any delivery-related concerns',
];

export default function ShippingDeliveryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="policy-hero">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚚</span>
            <span>Fast & Reliable Delivery</span>
          </div>
          <h1>Shipping & Delivery Policy</h1>
          <p>Delivering Quality Eye Care Products with Care and Precision</p>
        </div>
      </section>

      <div className="policy-container">
        {/* Hospital Info Card */}
        <div className="hospital-card">
          <div className="hospital-icon">🏥</div>
          <h2>Saraswati Eye Care Centre, Jind</h2>
          <p>NABH Accredited Hospital | Trusted Delivery of Optical Products & Medications</p>
        </div>

        {/* Delivery Overview */}
        <div className="delivery-overview">
          <h3>Delivery Information</h3>
          <div className="overview-grid">
            {deliveryInfo.map((info, index) => (
              <div key={index} className="overview-card">
                <span className="overview-icon">{info.icon}</span>
                <h4>{info.title}</h4>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Deliver */}
        <div className="deliverables-section">
          <h3>What We Deliver</h3>
          <div className="deliverables-grid">
            {deliverableItems.map((item, index) => (
              <div key={index} className="deliverable-card">
                <span className="deliverable-icon">{item.icon}</span>
                <div className="deliverable-content">
                  <h4>{item.item}</h4>
                  <span className="delivery-time">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Charges */}
        <div className="charges-section">
          <h3>Delivery Charges</h3>
          <div className="charges-table">
            {deliveryCharges.map((charge, index) => (
              <div key={index} className={`charge-row ${charge.highlight ? 'highlight' : ''}`}>
                <span className="charge-range">{charge.range}</span>
                <span className="charge-amount">{charge.charge}</span>
              </div>
            ))}
          </div>
          <p className="charges-note">* Free delivery on orders above ₹500 within 25 km radius</p>
        </div>

        {/* Delivery Process */}
        <div className="process-section">
          <h3>How Delivery Works</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Order Confirmation</h4>
                <p>Your order is confirmed and processed by our team</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Quality Check</h4>
                <p>All items undergo thorough quality inspection</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Secure Packaging</h4>
                <p>Products are carefully packed for safe transit</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Delivery</h4>
                <p>Our delivery partner brings your order to your doorstep</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="notice-card">
          <div className="notice-header">
            <span className="notice-icon">ℹ️</span>
            <h3>Important Delivery Notice</h3>
          </div>
          <ul className="notice-list">
            {importantNotes.map((note, index) => (
              <li key={index}>
                <span className="bullet">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>Delivery Support & Contact</h3>
          <p>Our delivery team is here to assist you with all delivery-related queries and concerns.</p>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <h4>Delivery Hotline</h4>
              <p>+91 97292-36700</p>
              <span className="contact-time">9:00 AM - 6:00 PM</span>
            </div>
            <div className="contact-card">
              <span className="contact-icon">💬</span>
              <h4>WhatsApp Support</h4>
              <p>+91 97292-36700</p>
              <span className="contact-time">24/7 Chat Support</span>
            </div>
            <div className="contact-card">
              <span className="contact-icon">✉️</span>
              <h4>Email Support</h4>
              <p>saraswatieyecarecentre@gmail.com</p>
              <span className="contact-time">24-48 hr response</span>
            </div>
            <div className="contact-card">
              <span className="contact-icon">🏢</span>
              <h4>Pickup Center</h4>
              <p>Saraswati Eye Hospital</p>
              <span className="contact-time">Jind, Haryana</span>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="related-links">
          <h4>Related Policies</h4>
          <div className="links-grid">
            <Link href="/cancellation-refund" className="policy-link">
              <span>💰</span>
              <span>Refund Policy</span>
            </Link>
            <Link href="/terms-conditions" className="policy-link">
              <span>📄</span>
              <span>Terms & Conditions</span>
            </Link>
            <Link href="/privacy-policy" className="policy-link">
              <span>🛡️</span>
              <span>Privacy Policy</span>
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
        }

        /* Delivery Overview */
        .delivery-overview {
          margin-bottom: 40px;
        }

        .delivery-overview h3 {
          font-size: 28px;
          color: #7157A0;
          text-align: center;
          margin-bottom: 30px;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .overview-card {
          background: white;
          padding: 30px 20px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .overview-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.15);
        }

        .overview-icon {
          font-size: 40px;
          display: block;
          margin-bottom: 16px;
        }

        .overview-card h4 {
          color: #7157A0;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .overview-card p {
          color: #666;
          font-size: 13px;
          line-height: 1.5;
        }

        /* Deliverables Section */
        .deliverables-section {
          background: linear-gradient(135deg, #f8f6fc, #efe8f8);
          padding: 40px;
          border-radius: 24px;
          margin-bottom: 40px;
        }

        .deliverables-section h3 {
          font-size: 28px;
          color: #7157A0;
          text-align: center;
          margin-bottom: 30px;
        }

        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .deliverable-card {
          background: white;
          padding: 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .deliverable-icon {
          font-size: 32px;
        }

        .deliverable-content h4 {
          color: #333;
          font-size: 15px;
          margin-bottom: 4px;
        }

        .delivery-time {
          color: #7157A0;
          font-size: 13px;
          font-weight: 500;
        }

        /* Charges Section */
        .charges-section {
          background: white;
          padding: 40px;
          border-radius: 24px;
          margin-bottom: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        .charges-section h3 {
          font-size: 28px;
          color: #7157A0;
          text-align: center;
          margin-bottom: 30px;
        }

        .charges-table {
          max-width: 600px;
          margin: 0 auto;
        }

        .charge-row {
          display: flex;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .charge-row:hover {
          background: #f8f6fc;
        }

        .charge-row.highlight {
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
          border-radius: 12px;
          border: none;
          margin-bottom: 8px;
        }

        .charge-range {
          font-size: 15px;
        }

        .charge-amount {
          font-weight: 700;
          color: #7157A0;
        }

        .charge-row.highlight .charge-amount {
          color: #FFD700;
        }

        .charges-note {
          text-align: center;
          color: #888;
          font-size: 13px;
          margin-top: 20px;
        }

        /* Process Section */
        .process-section {
          margin-bottom: 40px;
        }

        .process-section h3 {
          font-size: 28px;
          color: #7157A0;
          text-align: center;
          margin-bottom: 30px;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .process-step {
          text-align: center;
          position: relative;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          margin: 0 auto 16px;
        }

        .step-content h4 {
          color: #333;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .step-content p {
          color: #666;
          font-size: 13px;
          line-height: 1.5;
        }

        /* Notice Card */
        .notice-card {
          background: linear-gradient(135deg, #e3f2fd, #bbdefb);
          padding: 30px;
          border-radius: 20px;
          margin-bottom: 40px;
          border-left: 4px solid #2196f3;
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
          color: #1565c0;
          font-size: 20px;
          margin: 0;
        }

        .notice-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .notice-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #1565c0;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .bullet {
          color: #2196f3;
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
          margin-bottom: 4px;
        }

        .contact-time {
          font-size: 11px;
          color: #888;
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
          .overview-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .process-steps {
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

          .overview-grid,
          .deliverables-grid,
          .process-steps,
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
