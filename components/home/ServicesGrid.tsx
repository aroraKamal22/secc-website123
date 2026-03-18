'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'cataract',
    title: 'Cataract Services',
    icon: 'fa-eye',
    color: '#8B5CF6',
    shortDesc: 'Advanced, safe, and customized cataract surgery with premium IOL options.',
    highlight: 'Led by Dr. Rajesh Garg - Founder & Chairman',
    fullDesc: 'Cataract is a cloudiness of the eye\'s natural lens that affects vision. At Saraswati Eye Care Centre, we offer the most advanced cataract surgeries using state-of-the-art phacoemulsification technology.',
    features: [
      'Micro-Incision Cataract Surgery (MICS)',
      'Phacoemulsification with Foldable IOL',
      'Premium Multifocal & Toric IOLs',
      'Topical Anesthesia (Painless)',
      'High-Risk & Complex Cataract Surgery'
    ],
  },
  {
    id: 'retina',
    title: 'Retina Services',
    icon: 'fa-bullseye',
    color: '#EC4899',
    shortDesc: 'Comprehensive diagnosis and treatment of vitreoretinal diseases.',
    highlight: 'Led by Dr. Ajay Garg - Vice Chairman & Retina Specialist',
    fullDesc: 'Our Retina Services are dedicated to the diagnosis, treatment, and long-term care of vitreoretinal diseases including diabetic retinopathy, macular degeneration, and retinal detachments.',
    features: [
      'Diabetic Retinopathy Management',
      'Retinal Detachment Surgery',
      'Intravitreal Anti-VEGF Injections',
      'Laser Photocoagulation',
      'OCT & OCT Angiography'
    ],
  },
  {
    id: 'glaucoma',
    title: 'Glaucoma Services',
    icon: 'fa-compress',
    color: '#10B981',
    shortDesc: 'Expert glaucoma diagnosis and management to preserve vision.',
    highlight: 'Led by Dr. Rajesh Garg - Fellowship in Glaucoma',
    fullDesc: 'Glaucoma is a serious eye condition that damages the optic nerve due to increased eye pressure. Early detection and treatment are crucial for preserving vision.',
    features: [
      'Advanced OCT for Nerve Analysis',
      'Visual Field (Perimetry) Testing',
      'Medical Management',
      'Laser Trabeculoplasty (SLT/ALT)',
      'Glaucoma Filtering Surgery'
    ],
  },
  {
    id: 'pediatric',
    title: 'Pediatric Ophthalmology',
    icon: 'fa-child',
    color: '#F59E0B',
    shortDesc: 'Specialized eye care for children from infancy to adolescence.',
    highlight: 'Led by Dr. Khushboo Gupta - Pediatric Ophthalmologist',
    fullDesc: 'Our Pediatric Ophthalmology services are dedicated to diagnosing and treating eye problems in infants, children, and adolescents with a gentle, child-friendly approach.',
    features: [
      'Pediatric Eye Examination',
      'Squint (Strabismus) Surgery',
      'Amblyopia (Lazy Eye) Treatment',
      'Congenital Cataract Management',
      'ROP Screening & Treatment'
    ],
  },
  {
    id: 'myopia',
    title: 'Myopia Control Clinic',
    icon: 'fa-glasses',
    color: '#3B82F6',
    shortDesc: 'Specialized clinic for myopia management and progression control.',
    fullDesc: 'Our Myopia Clinic specializes in diagnosing, treating, and managing myopia (nearsightedness), especially in children where early intervention can slow progression.',
    features: [
      'Comprehensive Myopia Assessment',
      'Atropine Therapy',
      'Specialized Myopia Control Glasses',
      'Orthokeratology Consultation',
      'Regular Vision Monitoring'
    ],
  },
  {
    id: 'uveitis',
    title: 'Uveitis & Immunology',
    icon: 'fa-shield-virus',
    color: '#EF4444',
    shortDesc: 'Multidisciplinary care for inflammatory eye diseases.',
    fullDesc: 'The Uveitis & Ocular Immunology Service provides comprehensive care for patients with inflammatory eye conditions including uveitis, scleritis, and immune-related disorders.',
    features: [
      'Comprehensive Uveitis Evaluation',
      'Immunosuppressive Therapy',
      'Steroid Management',
      'Systemic Disease Correlation',
      'Long-term Follow-up Care'
    ],
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Our Expertise
          </div>
          <h2>Services We <span className="gradient-text">Offer</span></h2>
          <p>Comprehensive eye care solutions with world-class technology</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
              <div className="card-glow" style={{ background: `radial-gradient(circle, ${service.color}30 0%, transparent 70%)` }}></div>

              <div className="service-icon" style={{ background: `${service.color}20`, color: service.color }}>
                <i className={`fas ${service.icon}`}></i>
              </div>

              <h3>{service.title}</h3>
              <p className="service-desc">{service.shortDesc}</p>

              {service.highlight && (
                <div className="service-highlight">
                  <i className="fas fa-user-md"></i>
                  <span>{service.highlight.split(' - ')[1]}</span>
                </div>
              )}

              <button className="learn-more">
                Learn More
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* View All Services */}
        <div className="view-all-wrap">
          <Link href="/services" className="view-all-btn">
            View All Services
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-header" style={{ background: `linear-gradient(135deg, ${selectedService.color}40, ${selectedService.color}20)` }}>
              <div className="modal-icon" style={{ background: selectedService.color }}>
                <i className={`fas ${selectedService.icon}`}></i>
              </div>
              <div className="modal-title">
                <h2>{selectedService.title}</h2>
                <p>Saraswati Eye Care Centre</p>
              </div>
            </div>

            <div className="modal-body">
              {selectedService.highlight && (
                <div className="highlight-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>{selectedService.highlight}</span>
                </div>
              )}

              <p className="modal-desc">{selectedService.fullDesc}</p>

              <div className="features-box">
                <h4><i className="fas fa-list-check"></i> Key Features & Treatments</h4>
                <ul>
                  {selectedService.features.map((f, i) => (
                    <li key={i}>
                      <i className="fas fa-check"></i>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions">
                <Link href={`/services#${selectedService.id}`} className="btn-secondary">
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="/appointment" className="btn-primary">
                  <i className="fas fa-calendar-check"></i>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .services-section {
          padding: 60px 20px;
          background: linear-gradient(180deg, #f8f6fc 0%, #fff 100%);
          position: relative;
          overflow: hidden;
        }

        .services-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          color: white;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.3);
        }

        .tag-dot {
          width: 8px;
          height: 8px;
          background: #FFD600;
          border-radius: 50%;
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 15px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          color: #666;
          font-size: 1.1rem;
          margin: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .service-card {
          position: relative;
          background: white;
          border: 1px solid rgba(113, 87, 160, 0.1);
          border-radius: 24px;
          padding: 30px;
          cursor: pointer;
          transition: all 0.4s ease;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(113, 87, 160, 0.08);
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(113, 87, 160, 0.2);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.15);
        }

        .card-glow {
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }

        .service-card:hover .card-glow {
          opacity: 0.5;
        }

        .service-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 20px;
          transition: transform 0.3s;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1);
        }

        .service-card h3 {
          color: #1a1a2e;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 12px;
        }

        .service-desc {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 15px;
        }

        .service-highlight {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(113, 87, 160, 0.08);
          border: 1px solid rgba(113, 87, 160, 0.15);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        .service-highlight i {
          color: #7157A0;
          font-size: 0.9rem;
        }

        .service-highlight span {
          color: #7157A0;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: #7157A0;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s;
        }

        .learn-more:hover {
          color: #8B6BC4;
          gap: 12px;
        }

        .view-all-wrap {
          text-align: center;
          margin-top: 50px;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.3);
        }

        .view-all-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.4);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(113, 87, 160, 0.9);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 24px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 10;
          transition: all 0.3s;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .modal-header {
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .modal-icon {
          width: 70px;
          height: 70px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .modal-title h2 {
          color: white;
          font-size: 1.5rem;
          margin: 0 0 5px;
        }

        .modal-title p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin: 0;
        }

        .modal-body {
          padding: 25px;
        }

        .highlight-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(113, 87, 160, 0.1);
          border: 1px solid rgba(113, 87, 160, 0.2);
          border-radius: 12px;
          padding: 12px 16px;
          margin-bottom: 20px;
        }

        .highlight-badge i {
          color: #7157A0;
          font-size: 1.1rem;
        }

        .highlight-badge span {
          color: #7157A0;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .modal-desc {
          color: #555;
          line-height: 1.8;
          margin: 0 0 25px;
        }

        .features-box {
          background: #f8f6fc;
          border: 1px solid rgba(113, 87, 160, 0.1);
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 25px;
        }

        .features-box h4 {
          color: #1a1a2e;
          font-size: 1rem;
          margin: 0 0 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .features-box h4 i {
          color: #7157A0;
        }

        .features-box ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .features-box li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #555;
          padding: 8px 0;
          border-bottom: 1px solid rgba(113, 87, 160, 0.1);
        }

        .features-box li:last-child {
          border-bottom: none;
        }

        .features-box li i {
          color: #10B981;
          font-size: 0.8rem;
        }

        .modal-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          color: #1a1a2e;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 8px 25px rgba(255, 214, 0, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(255, 214, 0, 0.4);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 2px solid rgba(113, 87, 160, 0.3);
          color: #7157A0;
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(113, 87, 160, 0.1);
          border-color: #7157A0;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 40px 15px;
          }

          .section-header {
            margin-bottom: 20px;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }

          .section-header p {
            font-size: 0.85rem;
          }

          .section-tag {
            padding: 6px 14px;
            font-size: 0.7rem;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .service-card {
            padding: 14px;
            border-radius: 14px;
            background: linear-gradient(145deg, #ffffff 0%, #fcfbfe 100%);
            border: 1px solid rgba(113, 87, 160, 0.1);
            box-shadow: 0 6px 20px rgba(113, 87, 160, 0.08);
          }

          .service-card:active {
            transform: scale(0.98);
          }

          .card-glow {
            display: none;
          }

          .service-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            font-size: 1rem;
            margin-bottom: 10px;
          }

          .service-card h3 {
            font-size: 0.8rem;
            margin-bottom: 6px;
          }

          .service-desc {
            font-size: 0.7rem;
            margin-bottom: 8px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .service-highlight {
            display: none;
          }

          .learn-more {
            font-size: 0.7rem;
            padding: 6px 12px;
            background: linear-gradient(135deg, #7157A0, #8B6BC4);
            color: white;
            border-radius: 15px;
            width: 100%;
            justify-content: center;
          }

          .view-all-wrap {
            margin-top: 25px;
          }

          .view-all-btn {
            padding: 12px 28px;
            font-size: 0.85rem;
          }

          /* Modal Mobile */
          .modal-overlay {
            padding: 15px;
            align-items: flex-end;
          }

          .modal-content {
            border-radius: 20px 20px 0 0;
            max-height: 85vh;
          }

          .modal-header {
            flex-direction: column;
            text-align: center;
            padding: 25px 20px;
            gap: 15px;
          }

          .modal-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .modal-title h2 {
            font-size: 1.3rem;
          }

          .modal-body {
            padding: 20px;
          }

          .highlight-badge {
            padding: 10px 14px;
            border-radius: 10px;
          }

          .highlight-badge span {
            font-size: 0.8rem;
          }

          .modal-desc {
            font-size: 0.9rem;
            line-height: 1.7;
          }

          .features-box {
            padding: 16px;
            border-radius: 14px;
          }

          .features-box h4 {
            font-size: 0.9rem;
          }

          .features-box li {
            font-size: 0.85rem;
            padding: 6px 0;
          }

          .modal-actions {
            flex-direction: column;
            gap: 10px;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
            border-radius: 14px;
          }
        }

        @media (max-width: 480px) {
          .services-section {
            padding: 30px 12px;
          }

          .section-header h2 {
            font-size: 1.3rem;
          }

          .services-grid {
            gap: 10px;
          }

          .service-card {
            padding: 12px;
            border-radius: 12px;
          }

          .service-icon {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
            margin-bottom: 8px;
          }

          .service-card h3 {
            font-size: 0.75rem;
          }

          .service-desc {
            font-size: 0.65rem;
            -webkit-line-clamp: 2;
          }

          .learn-more {
            font-size: 0.65rem;
            padding: 5px 10px;
          }
        }
      `}</style>
    </section>
  );
}
