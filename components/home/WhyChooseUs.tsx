'use client';

import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    id: 1,
    icon: 'fa-certificate',
    title: 'NABH Certified',
    desc: 'First NABH certified eye hospital in Jind district',
    color: '#10B981',
  },
  {
    id: 2,
    icon: 'fa-user-md',
    title: 'Expert Specialists',
    desc: '4 super-specialist doctors with advanced training',
    color: '#8B5CF6',
  },
  {
    id: 3,
    icon: 'fa-microchip',
    title: 'Advanced Technology',
    desc: 'Latest diagnostic & surgical equipment from global brands',
    color: '#3B82F6',
  },
  {
    id: 4,
    icon: 'fa-hand-holding-medical',
    title: 'Cashless Treatment',
    desc: 'Empaneled with Ayushman, Haryana Govt, ECHS & major TPAs',
    color: '#F59E0B',
  },
  {
    id: 5,
    icon: 'fa-heart',
    title: 'Ethical Practice',
    desc: 'Honest advice & transparent treatment plans',
    color: '#EF4444',
  },
  {
    id: 6,
    icon: 'fa-star',
    title: '4.9 Google Rating',
    desc: 'Trusted by 50,000+ happy patients',
    color: '#06B6D4',
  },
];

const stats = [
  { number: '15+', label: 'Years' },
  { number: '50K+', label: 'Patients' },
  { number: '4', label: 'Doctors' },
  { number: '4.9', label: 'Rating' },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Side - Content */}
        <div className="why-content">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Why Choose Us
          </div>
          <h2>The Most Trusted <span className="gradient-text">Eye Hospital</span> in Jind</h2>
          <p className="section-desc">
            With over 15 years of excellence, we combine advanced technology with compassionate care to deliver the best outcomes for your eyes.
          </p>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link href="/about" className="btn-primary">
              Learn More About Us
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="/appointment" className="btn-secondary">
              <i className="fas fa-calendar-check"></i>
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="why-visual">
          <div className="visual-wrapper">
            {/* Main Image */}
            <div className="main-image">
              <Image
                src="/frontimage.png"
                alt="Saraswati Eye Care Centre"
                fill
                quality={90}
                style={{ objectFit: 'contain' }}
              />
              <div className="image-overlay"></div>
            </div>

            {/* NABH Badge */}
            <div className="nabh-badge">
              <Image
                src="/images/nabhLOGO.png"
                alt="NABH Certified"
                width={60}
                height={60}
                quality={100}
                style={{ objectFit: 'contain' }}
              />
              <div className="nabh-text">
                <span className="nabh-title">NABH</span>
                <span className="nabh-subtitle">Certified</span>
              </div>
            </div>

            {/* Stats Card */}
            <div className="stats-card">
              <div className="stats-grid">
                {stats.map((stat, i) => (
                  <div key={i} className="stat-item">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Badge */}
            <div className="experience-badge">
              <span className="exp-number">15+</span>
              <span className="exp-text">Years of Excellence</span>
            </div>

            {/* Decorative Elements */}
            <div className="deco-ring"></div>
            <div className="deco-dots"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-section {
          padding: 60px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          position: relative;
          overflow: hidden;
        }

        .why-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
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
          margin-bottom: 20px;
        }

        .tag-dot {
          width: 8px;
          height: 8px;
          background: #FFD600;
          border-radius: 50%;
        }

        .why-content h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: white;
          margin: 0 0 20px;
          line-height: 1.2;
        }

        .gradient-text {
          color: #FFD600;
        }

        .section-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.8;
          margin: 0 0 35px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 35px;
        }

        .feature-card {
          display: flex;
          gap: 15px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.2rem;
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }

        .feature-text h4 {
          margin: 0 0 4px;
          font-size: 0.95rem;
          color: white;
          font-weight: 700;
        }

        .feature-text p {
          margin: 0;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #7157A0;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.4);
          color: white;
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
        }

        /* Visual Side */
        .why-visual {
          position: relative;
        }

        .visual-wrapper {
          position: relative;
          height: 600px;
        }

        .main-image {
          position: absolute;
          top: 30px;
          right: 0;
          width: 90%;
          height: 450px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.2), transparent);
        }

        .nabh-badge {
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(255, 255, 255, 0.95);
          padding: 15px 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .nabh-text {
          display: flex;
          flex-direction: column;
        }

        .nabh-title {
          font-size: 1rem;
          font-weight: 800;
          color: #7157A0;
          line-height: 1;
        }

        .nabh-subtitle {
          font-size: 0.75rem;
          color: #666;
          font-weight: 600;
        }

        .stats-card {
          position: absolute;
          bottom: 40px;
          left: 0;
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.9), rgba(139, 107, 196, 0.9));
          backdrop-filter: blur(20px);
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          z-index: 10;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.6rem;
          font-weight: 800;
          color: #FFD600;
        }

        .stat-label {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .experience-badge {
          position: absolute;
          bottom: 160px;
          right: 0;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          padding: 18px 22px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(255, 214, 0, 0.3);
          z-index: 10;
        }

        .exp-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1;
        }

        .exp-text {
          font-size: 0.7rem;
          color: #5a4a7a;
          font-weight: 600;
        }

        .deco-ring {
          position: absolute;
          top: 50px;
          right: 20px;
          width: 300px;
          height: 300px;
          border: 2px dashed rgba(113, 87, 160, 0.2);
          border-radius: 50%;
          animation: spin 30s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .deco-dots {
          position: absolute;
          bottom: 250px;
          left: 50px;
          width: 80px;
          height: 80px;
          background-image: radial-gradient(rgba(113, 87, 160, 0.4) 2px, transparent 2px);
          background-size: 12px 12px;
        }

        @media (max-width: 1100px) {
          .why-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .why-visual {
            max-width: 550px;
            margin: 0 auto;
          }
          .visual-wrapper {
            height: 500px;
          }
          .main-image {
            width: 100%;
            height: 350px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .why-section {
            padding: 40px 15px;
            overflow-x: hidden;
          }

          .why-container {
            gap: 35px;
          }

          .section-tag {
            padding: 8px 18px;
            font-size: 0.8rem;
            margin-bottom: 15px;
          }

          .why-content h2 {
            font-size: 1.8rem;
            margin-bottom: 15px;
          }

          .section-desc {
            font-size: 0.95rem;
            margin-bottom: 25px;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-bottom: 25px;
          }

          .feature-card {
            padding: 12px;
            border-radius: 12px;
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .feature-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            font-size: 0.95rem;
            margin: 0 auto;
          }

          .feature-text h4 {
            font-size: 0.8rem;
          }

          .feature-text p {
            font-size: 0.7rem;
            line-height: 1.3;
          }

          .why-visual {
            order: -1;
          }

          .visual-wrapper {
            height: auto;
            min-height: auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .main-image {
            position: relative;
            height: 200px;
            width: 100%;
            top: 0;
            border-radius: 16px;
            overflow: hidden;
          }

          .nabh-badge {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            padding: 12px 16px;
            border-radius: 12px;
            gap: 10px;
            align-self: flex-start;
            display: inline-flex;
          }

          .nabh-badge :global(img) {
            width: 35px !important;
            height: 35px !important;
          }

          .nabh-title {
            font-size: 0.9rem;
          }

          .nabh-subtitle {
            font-size: 0.7rem;
          }

          .experience-badge {
            display: none;
          }

          .stats-card {
            position: relative;
            margin-top: 0;
            width: 100%;
            padding: 16px;
            border-radius: 14px;
          }

          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
          }

          .stat-number {
            font-size: 1.2rem;
          }

          .stat-label {
            font-size: 0.55rem;
          }

          .deco-ring, .deco-dots {
            display: none;
          }

          .cta-buttons {
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
          .why-section {
            padding: 30px 12px;
          }

          .why-container {
            gap: 25px;
          }

          .why-content h2 {
            font-size: 1.4rem;
          }

          .section-desc {
            font-size: 0.85rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .feature-card {
            padding: 10px;
          }

          .feature-icon {
            width: 36px;
            height: 36px;
            font-size: 0.85rem;
          }

          .feature-text h4 {
            font-size: 0.75rem;
          }

          .feature-text p {
            font-size: 0.65rem;
          }

          .main-image {
            height: 160px;
          }

          .nabh-badge {
            padding: 10px 14px;
          }

          .nabh-badge :global(img) {
            width: 30px !important;
            height: 30px !important;
          }

          .stats-card {
            padding: 14px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .stat-item {
            padding: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }

          .stat-number {
            font-size: 1rem;
          }

          .stat-label {
            font-size: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
