'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'NABH Certified',
    desc: 'First NABH certified eye hospital in Jind district',
    color: '#10B981',
    link: '#'
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Expert Specialists',
    desc: '4 super-specialist doctors with advanced training',
    color: '#8B5CF6',
    link: '/about#doctors'
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Advanced Technology',
    desc: 'Latest diagnostic & surgical equipment from global brands',
    color: '#3B82F6',
    link: '/equipment'
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Cashless Treatment',
    desc: 'Empaneled with Ayushman, ECHS & major TPAs',
    color: '#F59E0B',
    link: '/empanelment'
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Ethical Practice',
    desc: 'Honest advice & transparent treatment plans',
    color: '#EF4444',
    link: '#'
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: '4.9★ Google Rating',
    desc: 'Trusted by 50,000+ happy patients',
    color: '#06B6D4',
    link: '#'
  },
];

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '50K+', label: 'Happy Patients' },
  { number: '4', label: 'Specialists' },
  { number: '4.9', label: 'Google Rating' },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Side - Content */}
        <div className="why-content">
          <span className="section-tag">Why Choose Us</span>
          <h2>The Most Trusted <span>Eye Hospital</span> in Jind</h2>
          <p className="section-desc">
            With over 15 years of excellence, we combine advanced technology with compassionate care to deliver the best outcomes for your eyes.
          </p>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature) => (
              <Link key={feature.id} href={feature.link} className="feature-card">
                <div className="feature-icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                  {feature.icon}
                </div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="why-visual">
          <div className="visual-wrapper">
            {/* Main Image */}
            <div className="main-image">
              <Image
                src="/images/Front.JPG"
                alt="Saraswati Eye Care Centre"
                fill
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Floating Badge */}
            <div className="nabh-badge">
              <Image
                src="/images/nabhLOGO.png"
                alt="NABH Certified"
                width={70}
                height={70}
                quality={100}
                style={{ objectFit: 'contain' }}
              />
              <span>NABH<br/>Certified</span>
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
              <span className="exp-text">Years of<br/>Excellence</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-section {
          padding: 100px 20px;
          background: linear-gradient(180deg, #fff 0%, #f8f6fc 100%);
          overflow: hidden;
        }

        .why-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .section-tag {
          display: inline-block;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .why-content h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 20px;
          line-height: 1.2;
        }

        .why-content h2 span {
          color: #7157A0;
        }

        .section-desc {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
          margin: 0 0 35px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .feature-card {
          display: flex;
          gap: 15px;
          padding: 20px;
          background: white;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.12);
          border-color: transparent;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-icon :global(svg) {
          width: 26px;
          height: 26px;
        }

        .feature-text h4 {
          margin: 0 0 4px;
          font-size: 0.95rem;
          color: #1a1a2e;
          font-weight: 700;
        }

        .feature-text p {
          margin: 0;
          font-size: 0.8rem;
          color: #888;
          line-height: 1.4;
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
          top: 0;
          right: 0;
          width: 90%;
          height: 480px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(113, 87, 160, 0.25);
        }

        .main-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.1), transparent);
        }

        .nabh-badge {
          position: absolute;
          top: 30px;
          left: 0;
          background: white;
          padding: 15px 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          z-index: 10;
        }

        .nabh-badge span {
          font-size: 0.85rem;
          font-weight: 700;
          color: #7157A0;
          line-height: 1.2;
        }

        .stats-card {
          position: absolute;
          bottom: 0;
          left: 0;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(113, 87, 160, 0.35);
          z-index: 10;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: #FFD600;
        }

        .stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.85);
        }

        .experience-badge {
          position: absolute;
          bottom: 120px;
          right: 0;
          background: #FFD600;
          padding: 20px 25px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 15px 40px rgba(255, 214, 0, 0.35);
          z-index: 10;
        }

        .exp-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: #7157A0;
        }

        .exp-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: #5a4a7a;
          line-height: 1.2;
        }

        @media (max-width: 1100px) {
          .why-container {
            grid-template-columns: 1fr;
            gap: 60px;
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
            height: 380px;
          }
        }

        @media (max-width: 700px) {
          .why-content h2 { font-size: 2rem; }
          .features-grid { grid-template-columns: 1fr; }
          .visual-wrapper { height: 450px; }
          .main-image { height: 320px; }
          .nabh-badge {
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
          }
          .stats-card {
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
          }
          .experience-badge {
            right: 10px;
            bottom: 160px;
            padding: 15px 18px;
          }
          .exp-number { font-size: 1.6rem; }
        }
      `}</style>
    </section>
  );
}
