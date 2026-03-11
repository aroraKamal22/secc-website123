'use client';

import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'NABH Certified',
    desc: 'First certified eye hospital in Jind district'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Expert Specialists',
    desc: '4 highly qualified eye specialists'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Advanced Technology',
    desc: 'Latest diagnostic & surgical equipment'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Compassionate Care',
    desc: 'Patient-first approach always'
  },
];

export default function AboutSection() {
  return (
    <section className="home-about-section">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content">
          <div className="section-label">
            <span className="label-line"></span>
            <span>About Us</span>
          </div>

          <h2 className="about-title">
            Excellence in <span className="highlight">Eye Care</span> Since 2010
          </h2>

          <p className="about-desc">
            <strong>Saraswati Eye Care Centre</strong> is the most trusted and highest-rated
            eye hospital in Jind, Haryana. We take pride in being the <span className="text-gold">first NABH-certified</span> eye care hospital in District Jind, offering comprehensive, ethical, and technology-driven eye care services under one roof.
          </p>

          <p className="about-desc">
            Founded by <span className="text-gold">Dr. Rajesh Garg</span>, a renowned anterior segment surgeon and expert in customized cataract surgery, the hospital has grown from a small clinic into a state-of-the-art super-speciality eye centre.
          </p>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-buttons">
            <Link href="/about" className="btn-primary">
              Learn More
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/appointment" className="btn-secondary">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Right Side - Image & Stats */}
        <div className="about-visual">
          <div className="image-wrapper">
            <div className="image-main">
              <Image
                src="/images/Front.JPG"
                alt="Saraswati Eye Care Centre Building"
                fill
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="image-accent"></div>
          </div>

          {/* Floating Stats Card */}
          <div className="floating-card">
            <div className="card-icon">🎯</div>
            <h3>Our Vision</h3>
            <p>To provide world-class, affordable eye care and become a leading name in super-speciality ophthalmology.</p>
          </div>

          {/* Stats Row */}
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-num">50K+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">15+</span>
              <span className="stat-label">Years Trust</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">4.9★</span>
              <span className="stat-label">Google Rating</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-about-section {
          padding: 100px 20px;
          background: linear-gradient(180deg, #fff 0%, #f8f6fc 100%);
          position: relative;
          overflow: hidden;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #7157A0;
          font-weight: 600;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .label-line {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #7157A0, #FFD600);
          border-radius: 2px;
        }

        .about-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 25px;
          line-height: 1.2;
        }

        .highlight {
          color: #7157A0;
          position: relative;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          right: 0;
          height: 12px;
          background: rgba(255, 214, 0, 0.3);
          z-index: -1;
        }

        .about-desc {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.8;
          margin: 0 0 20px;
        }

        .text-gold {
          color: #d4a00a;
          font-weight: 600;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 35px 0;
        }

        .feature-item {
          display: flex;
          gap: 15px;
          padding: 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(113, 87, 160, 0.08);
          transition: all 0.3s;
          border: 1px solid rgba(113, 87, 160, 0.08);
        }

        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.15);
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
        }

        .feature-icon :global(svg) {
          width: 24px;
          height: 24px;
        }

        .feature-text h4 {
          margin: 0 0 4px;
          font-size: 1rem;
          color: #1a1a2e;
          font-weight: 700;
        }

        .feature-text p {
          margin: 0;
          font-size: 0.85rem;
          color: #777;
        }

        .about-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(113, 87, 160, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(113, 87, 160, 0.4);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          background: white;
          color: #7157A0;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid #7157A0;
        }

        .btn-secondary:hover {
          background: #7157A0;
          color: white;
        }

        /* Visual Side */
        .about-visual {
          position: relative;
        }

        .image-wrapper {
          position: relative;
        }

        .image-main {
          position: relative;
          height: 450px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .image-accent {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-radius: 24px;
          z-index: -1;
        }

        .floating-card {
          position: absolute;
          bottom: -30px;
          left: -30px;
          background: white;
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.15);
          max-width: 280px;
          z-index: 10;
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .floating-card h3 {
          color: #7157A0;
          margin: 0 0 8px;
          font-size: 1.3rem;
        }

        .floating-card p {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .stats-row {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }

        .stat-box {
          flex: 1;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          padding: 20px 15px;
          border-radius: 16px;
          text-align: center;
          color: white;
        }

        .stat-num {
          display: block;
          font-size: 1.6rem;
          font-weight: 800;
          color: #FFD600;
        }

        .stat-label {
          font-size: 0.75rem;
          opacity: 0.9;
        }

        @media (max-width: 1100px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .about-visual {
            max-width: 550px;
            margin: 0 auto;
          }
        }

        @media (max-width: 700px) {
          .about-title { font-size: 2.2rem; }
          .features-grid { grid-template-columns: 1fr; }
          .floating-card {
            position: relative;
            left: 0;
            bottom: 0;
            margin-top: 20px;
            max-width: 100%;
          }
          .image-accent { display: none; }
          .image-main { height: 300px; }
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
