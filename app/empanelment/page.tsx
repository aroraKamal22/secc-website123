'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const empanelmentCategories = [
  { id: 'all', name: 'All Partners' },
  { id: 'government', name: 'Government Schemes' },
  { id: 'insurance', name: 'Insurance Companies' },
  { id: 'tpa', name: 'TPA Partners' },
];

const empanelments = [
  {
    name: 'Haryana Government',
    logo: '/images/government.png',
    category: 'government',
    type: 'Government Scheme',
    description: 'State government healthcare scheme for Haryana residents providing comprehensive eye care coverage.',
    benefits: ['Full coverage for eligible beneficiaries', 'No referral required', 'Direct empanelment'],
  },
  {
    name: 'ECHS',
    logo: '/images/echs.png',
    category: 'government',
    type: 'Ex-Servicemen Scheme',
    description: 'Ex-Servicemen Contributory Health Scheme providing healthcare to retired armed forces personnel and their dependents.',
    benefits: ['Complete eye care coverage', 'Includes surgeries & treatments', 'Family coverage available'],
  },
  {
    name: 'PM-JAY (Ayushman Bharat)',
    logo: '/images/pmjay.png',
    category: 'government',
    type: 'Central Government Scheme',
    description: 'Pradhan Mantri Jan Arogya Yojana - India\'s flagship health insurance scheme covering 50+ crore beneficiaries.',
    benefits: ['Up to ₹5 lakh coverage', 'Cashless treatment', 'Pre-existing conditions covered'],
    featured: true,
  },
  {
    name: 'Star Health Insurance',
    logo: '/images/StarHealth.png',
    category: 'insurance',
    type: 'Health Insurance',
    description: 'India\'s first standalone health insurance company offering comprehensive health coverage plans.',
    benefits: ['Cashless hospitalization', 'Day care procedures', 'No claim bonus'],
  },
  {
    name: 'Medi Assist',
    logo: '/images/mediaassist.png',
    category: 'tpa',
    type: 'Third Party Administrator',
    description: 'Leading TPA in India providing health insurance claims management services.',
    benefits: ['Fast claim processing', '24/7 support', 'Network of 10,000+ hospitals'],
  },
  {
    name: 'ICICI Lombard',
    logo: '/images/icicilombard.png',
    category: 'insurance',
    type: 'General Insurance',
    description: 'One of India\'s largest private sector general insurance companies with comprehensive health policies.',
    benefits: ['Cashless claims', 'Quick settlement', 'Wide network coverage'],
  },
  {
    name: 'Aditya Birla Health Insurance',
    logo: '/images/adityabirla.png',
    category: 'insurance',
    type: 'Health Insurance',
    description: 'Offers innovative health insurance solutions with focus on preventive healthcare.',
    benefits: ['Chronic management program', 'Health returns benefit', 'Day 1 coverage'],
  },
  {
    name: 'Manipal Cigna',
    logo: '/images/manipalcigna.png',
    category: 'insurance',
    type: 'Health Insurance',
    description: 'Joint venture bringing global health insurance expertise with comprehensive coverage options.',
    benefits: ['Global coverage options', 'Lifetime renewability', 'Wellness programs'],
  },
  {
    name: 'Max Bupa (Niva Bupa)',
    logo: '/images/maxbupa.png',
    category: 'insurance',
    type: 'Health Insurance',
    description: 'Specialized health insurance company offering a range of health protection plans.',
    benefits: ['ReAssure plans', 'Critical illness cover', 'Maternity benefits'],
  },
  {
    name: 'Safeway TPA',
    logo: '/images/rakshatpa.png',
    category: 'tpa',
    type: 'Third Party Administrator',
    description: 'Professional TPA services ensuring smooth claim settlement and customer support.',
    benefits: ['Dedicated support', 'Quick authorizations', 'Pan-India presence'],
  },
  {
    name: 'Chola MS Insurance',
    logo: '/images/chola.png',
    category: 'insurance',
    type: 'General Insurance',
    description: 'Trusted insurance partner offering comprehensive health coverage with flexible plans.',
    benefits: ['Flexible sum insured', 'No medical check-up', 'Easy renewal'],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Verify Eligibility',
    description: 'Check your insurance card or scheme ID to confirm coverage at our centre.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Pre-Authorization',
    description: 'Our team handles all pre-authorization paperwork with your insurer.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Cashless Treatment',
    description: 'Receive world-class eye care without any upfront payment.',
    icon: '🏥',
  },
  {
    step: '04',
    title: 'Easy Discharge',
    description: 'Walk out with only minimal paperwork - we handle the rest.',
    icon: '✅',
  },
];

const faqs = [
  {
    question: 'What documents do I need for cashless treatment?',
    answer: 'You need to bring your insurance card/policy document, a valid photo ID (Aadhaar/PAN), Family ID, and your health card if applicable (ECHS/PM-JAY).',
  },
  {
    question: 'How long does pre-authorization take?',
    answer: 'Most pre-authorizations are processed within 2-4 hours. For planned surgeries, we recommend applying 24-48 hours in advance.',
  },
  {
    question: 'What if my insurance claim is rejected?',
    answer: 'Our dedicated insurance desk will help you understand the reason and guide you through the appeal process or alternative payment options.',
  },
  {
    question: 'Are all eye treatments covered under insurance?',
    answer: 'Coverage varies by policy. Most policies cover cataract surgery, glaucoma treatment, and retinal procedures. Cosmetic procedures may not be covered.',
  },
];

export default function EmpanelmentPage() {
  const [selectedEmpanelment, setSelectedEmpanelment] = useState<typeof empanelments[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredEmpanelments = activeCategory === 'all'
    ? empanelments
    : empanelments.filter(emp => emp.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="empanelment-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🏛️</span>
            <span>NABH Accredited Hospital</span>
          </div>
          <h1>Insurance & Government Empanelments</h1>
          <p>Saraswati Eye Care Centre is empanelled with leading insurance companies, TPAs, and government healthcare schemes, ensuring hassle-free cashless treatment for all eligible patients.</p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">11+</span>
              <span className="stat-label">Empanelments</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Govt. Schemes</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Cashless</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How Cashless Treatment Works</h2>
          <p className="section-subtitle">Simple 4-step process for hassle-free eye care</p>

          <div className="steps-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container">
          <div className="filter-buttons">
            {empanelmentCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                {activeCategory === category.id && (
                  <span className="filter-count">
                    {category.id === 'all'
                      ? empanelments.length
                      : empanelments.filter(emp => emp.category === category.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Empanelments Grid */}
      <section className="empanelments-section">
        <div className="container">
          <div className="empanelments-grid">
            {filteredEmpanelments.map((item, index) => (
              <div
                key={index}
                className={`empanelment-card ${item.featured ? 'featured' : ''}`}
                onClick={() => setSelectedEmpanelment(item)}
              >
                {item.featured && <div className="featured-badge">Popular</div>}
                <div className="card-logo">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="card-content">
                  <span className="card-type">{item.type}</span>
                  <h3>{item.name}</h3>
                  <div className="card-benefits">
                    {item.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="benefit-tag">
                        <span className="check">✓</span> {benefit}
                      </span>
                    ))}
                  </div>
                  <button className="view-details-btn">
                    View Details <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Empanelled Services</h2>
          <p className="section-subtitle">Experience hassle-free healthcare with these advantages</p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Fast Pre-Authorization</h3>
              <p>Our dedicated insurance desk ensures quick approval, usually within 2-4 hours for most cases.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for all insurance and claim-related queries.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📄</div>
              <h3>Minimal Paperwork</h3>
              <p>We handle all documentation and coordination with insurance companies on your behalf.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>NABH Accredited</h3>
              <p>Our accreditation ensures highest quality standards accepted by all major insurers.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Dedicated Insurance Desk</h3>
              <p>Expert team to guide you through the entire process from admission to discharge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Common queries about insurance and empanelments</p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="empanelment-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Help with Insurance?</h2>
            <p>Our insurance desk is ready to assist you with eligibility verification, pre-authorization, and claim processing.</p>
            <div className="cta-buttons">
              <Link href="/appointment" className="cta-btn primary">
                Book Appointment
              </Link>
              <a href="tel:+919729236700" className="cta-btn secondary">
                <span>📞</span> Call Insurance Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedEmpanelment && (
        <div className="empanelment-modal-overlay" onClick={() => setSelectedEmpanelment(null)}>
          <div className="empanelment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedEmpanelment(null)}>
              ✕
            </button>

            <div className="modal-header">
              {selectedEmpanelment.featured && <span className="modal-badge">Popular Choice</span>}
              <div className="modal-logo">
                <Image
                  src={selectedEmpanelment.logo}
                  alt={selectedEmpanelment.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <span className="modal-type">{selectedEmpanelment.type}</span>
              <h2>{selectedEmpanelment.name}</h2>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedEmpanelment.description}</p>

              <div className="modal-benefits">
                <h3>Coverage Benefits</h3>
                <div className="benefits-list">
                  {selectedEmpanelment.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-row">
                      <span className="benefit-check">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-info">
                <div className="info-item">
                  <span className="info-icon">📋</span>
                  <div>
                    <h4>Documents Required</h4>
                    <p>Insurance Card, Photo ID, Health Card (if applicable)</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <div>
                    <h4>Processing Time</h4>
                    <p>Pre-authorization within 2-4 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Link href="/appointment" className="modal-cta">
                Book Cashless Appointment <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .empanelment-hero {
          background: linear-gradient(135deg, #7157A0 0%, #9b7bc7 50%, #7157A0 100%);
          padding: 80px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .empanelment-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 20px;
          border-radius: 50px;
          color: white;
          font-size: 14px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          font-size: 18px;
        }

        .empanelment-hero h1 {
          font-size: 48px;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .empanelment-hero p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 36px;
          font-weight: 800;
          color: #FFD700;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: #7157A0;
          text-align: center;
          margin-bottom: 10px;
        }

        .section-subtitle {
          font-size: 16px;
          color: #666;
          text-align: center;
          margin-bottom: 40px;
        }

        /* How It Works */
        .how-it-works {
          padding: 80px 20px;
          background: #f8f6fc;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          position: relative;
        }

        .step-card {
          background: white;
          padding: 35px 25px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          position: relative;
        }

        .step-number {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #7157A0, #9b7bc7);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
        }

        .step-icon {
          font-size: 48px;
          margin: 20px 0;
        }

        .step-card h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .step-card p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        .step-connector {
          display: none;
        }

        /* Category Filter */
        .category-filter {
          padding: 40px 20px;
          background: white;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 12px 24px;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          background: white;
          color: #666;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .filter-btn:hover {
          border-color: #7157A0;
          color: #7157A0;
        }

        .filter-btn.active {
          background: #7157A0;
          border-color: #7157A0;
          color: white;
        }

        .filter-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 12px;
        }

        /* Empanelments Grid */
        .empanelments-section {
          padding: 60px 20px;
          background: white;
        }

        .empanelments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .empanelment-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          border: 2px solid transparent;
        }

        .empanelment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.15);
          border-color: #7157A0;
        }

        .empanelment-card.featured {
          border-color: #FFD700;
        }

        .featured-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #333;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          z-index: 10;
        }

        .card-logo {
          height: 140px;
          position: relative;
          background: #f8f6fc;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .card-content {
          padding: 20px;
        }

        .card-type {
          display: inline-block;
          background: #f0f0f0;
          color: #666;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .card-content h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .card-benefits {
          margin-bottom: 15px;
        }

        .benefit-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #555;
          margin-bottom: 6px;
        }

        .benefit-tag .check {
          color: #22c55e;
          font-weight: bold;
        }

        .view-details-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .view-details-btn:hover {
          background: linear-gradient(135deg, #5d4785, #7157A0);
        }

        /* Benefits Section */
        .benefits-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f8f6fc 0%, #efe8f8 100%);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .benefit-card {
          background: white;
          padding: 35px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.15);
        }

        .benefit-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .benefit-card h3 {
          font-size: 20px;
          color: #7157A0;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .benefit-card p {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
        }

        /* FAQ Section */
        .faq-section {
          padding: 80px 20px;
          background: white;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: #f8f6fc;
          border-radius: 16px;
          margin-bottom: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          box-shadow: 0 4px 15px rgba(113, 87, 160, 0.1);
        }

        .faq-item.open {
          background: white;
          box-shadow: 0 4px 20px rgba(113, 87, 160, 0.15);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          font-weight: 600;
          color: #333;
        }

        .faq-icon {
          width: 30px;
          height: 30px;
          background: #7157A0;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .faq-answer {
          padding: 0 25px 20px;
        }

        .faq-answer p {
          color: #666;
          line-height: 1.7;
          font-size: 14px;
        }

        /* CTA Section */
        .empanelment-cta {
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B7AB5 100%);
          text-align: center;
        }

        .cta-content h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .cta-content p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 30px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cta-btn.primary {
          background: #FFD700;
          color: #333;
        }

        .cta-btn.primary:hover {
          background: #FFC000;
          transform: translateY(-2px);
        }

        .cta-btn.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-btn.secondary:hover {
          background: white;
          color: #7157A0;
        }

        /* Modal */
        .empanelment-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(5px);
        }

        .empanelment-modal {
          background: white;
          border-radius: 24px;
          max-width: 550px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlideIn 0.3s ease;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .modal-header {
          background: linear-gradient(135deg, #7157A0 0%, #8B7AB5 100%);
          padding: 40px 30px 30px;
          text-align: center;
        }

        .modal-badge {
          display: inline-block;
          background: #FFD700;
          color: #333;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .modal-logo {
          background: white;
          width: 100px;
          height: 100px;
          border-radius: 20px;
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
        }

        .modal-type {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .modal-header h2 {
          color: white;
          font-size: 24px;
          font-weight: 700;
        }

        .modal-body {
          padding: 30px;
        }

        .modal-description {
          font-size: 15px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .modal-benefits {
          margin-bottom: 25px;
        }

        .modal-benefits h3 {
          font-size: 18px;
          color: #7157A0;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .benefits-list {
          background: #f8f6fc;
          padding: 20px;
          border-radius: 16px;
        }

        .benefit-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #e8e0f0;
        }

        .benefit-row:last-child {
          border-bottom: none;
        }

        .benefit-check {
          color: #22c55e;
          font-weight: bold;
          font-size: 16px;
        }

        .benefit-row span:last-child {
          color: #555;
          font-size: 14px;
        }

        .modal-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .info-item {
          display: flex;
          gap: 12px;
          padding: 15px;
          background: #f8f6fc;
          border-radius: 12px;
        }

        .info-icon {
          font-size: 24px;
        }

        .info-item h4 {
          font-size: 14px;
          color: #333;
          margin-bottom: 4px;
          font-weight: 600;
        }

        .info-item p {
          font-size: 12px;
          color: #666;
        }

        .modal-footer {
          padding: 20px 30px 30px;
        }

        .modal-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .modal-cta:hover {
          background: linear-gradient(135deg, #5d4785, #7157A0);
        }

        @media (max-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .empanelment-hero h1 {
            font-size: 32px;
          }

          .hero-stats {
            gap: 20px;
          }

          .stat-number {
            font-size: 28px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
          }

          .empanelments-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 28px;
          }

          .filter-buttons {
            gap: 8px;
          }

          .filter-btn {
            padding: 10px 16px;
            font-size: 13px;
          }

          .modal-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
