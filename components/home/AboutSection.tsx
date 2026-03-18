'use client';

import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: 'fa-certificate',
    title: 'NABH Accredited',
    desc: 'First certified eye hospital in Jind district'
  },
  {
    icon: 'fa-user-md',
    title: 'Expert Specialists',
    desc: '4 highly qualified eye specialists'
  },
  {
    icon: 'fa-microchip',
    title: 'Advanced Technology',
    desc: 'Latest diagnostic & surgical equipment'
  },
  {
    icon: 'fa-heart',
    title: 'Compassionate Care',
    desc: 'Patient-first approach always'
  },
];

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Visual */}
        <div className="about-visual">
          <div className="image-stack">
            <div className="image-main">
              <Image
                src="/images/front11.JPG"
                alt="Saraswati Eye Care Centre - Our Modern Healthcare Facility"
                fill
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Experience Badge */}
          <div className="experience-badge">
            <span className="exp-number">15+</span>
            <span className="exp-text">Years of Excellence</span>
          </div>

          {/* Decorative Elements */}
          <div className="deco-dots"></div>
          <div className="deco-circle"></div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <div className="section-tag">
            <span className="tag-dot"></span>
            About Us
          </div>

          <h2 className="about-title">
            Excellence in <span className="gradient-text">Eye Care</span>
            <br />Since 2010
          </h2>

          <p className="about-desc">
            <strong>Saraswati Eye Care Centre</strong> is the most trusted and highest-rated
            eye hospital in Jind, Haryana. We take pride in being the <span className="highlight">first NABH-certified</span> eye care hospital in District Jind.
          </p>

          <p className="about-desc">
            Founded by <span className="highlight">Dr. Rajesh Garg</span>, a renowned anterior segment surgeon and expert in customized cataract surgery, the hospital has grown into a state-of-the-art super-speciality eye centre.
          </p>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <div className="feature-info">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cta">
            <Link href="/about" className="btn-primary">
              Learn More About Us
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="/appointment" className="btn-outline">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 60px 20px;
          background: linear-gradient(180deg, #fff 0%, #f8f6fc 100%);
          position: relative;
          overflow: hidden;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* Visual Side */
        .about-visual {
          position: relative;
        }

        .image-stack {
          position: relative;
        }

        .image-main {
          position: relative;
          height: 500px;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }


        .experience-badge {
          position: absolute;
          top: -40px;
          left: -30px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          padding: 25px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(255, 214, 0, 0.3);
          z-index: 10;
        }

        .exp-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1;
        }

        .exp-text {
          display: block;
          font-size: 0.9rem;
          color: #333;
          font-weight: 600;
          margin-top: 5px;
        }

        .deco-dots {
          position: absolute;
          width: 100px;
          height: 100px;
          bottom: 60px;
          left: 40px;
          background-image: radial-gradient(#7157A0 2px, transparent 2px);
          background-size: 15px 15px;
          opacity: 0.5;
        }

        .deco-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          top: -50px;
          right: -50px;
          border: 2px dashed rgba(113, 87, 160, 0.3);
          border-radius: 50%;
          z-index: -1;
        }

        /* Content Side */
        .about-content {
          color: #333;
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
          margin-bottom: 25px;
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.3);
        }

        .tag-dot {
          width: 8px;
          height: 8px;
          background: #FFD600;
          border-radius: 50%;
        }

        .about-title {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 30px;
          color: #1a1a2e;
        }

        .gradient-text {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-desc {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.9;
          margin: 0 0 20px;
        }

        .highlight {
          color: #7157A0;
          font-weight: 600;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 40px 0;
        }

        .feature-card {
          display: flex;
          gap: 15px;
          padding: 20px;
          background: white;
          border: 1px solid rgba(113, 87, 160, 0.1);
          border-radius: 16px;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(113, 87, 160, 0.08);
        }

        .feature-card:hover {
          border-color: rgba(113, 87, 160, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(113, 87, 160, 0.15);
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
          font-size: 1.2rem;
        }

        .feature-info h4 {
          margin: 0 0 5px;
          font-size: 1rem;
          color: #1a1a2e;
          font-weight: 700;
        }

        .feature-info p {
          margin: 0;
          font-size: 0.85rem;
          color: #666;
        }

        /* CTA Buttons */
        .about-cta {
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
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.4);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #7157A0;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid rgba(113, 87, 160, 0.3);
          transition: all 0.3s;
        }

        .btn-outline:hover {
          background: rgba(113, 87, 160, 0.1);
          border-color: #7157A0;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .about-visual {
            max-width: 500px;
            margin: 0 auto;
          }


          .experience-badge {
            left: -10px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 40px 15px;
          }

          .about-container {
            gap: 40px;
          }

          .about-title {
            font-size: 1.8rem;
            margin-bottom: 20px;
          }

          .about-desc {
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 15px;
          }

          .section-tag {
            padding: 8px 18px;
            font-size: 0.8rem;
            margin-bottom: 15px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 25px 0;
          }

          .feature-card {
            padding: 16px;
            border-radius: 14px;
            gap: 12px;
          }

          .feature-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            font-size: 1rem;
          }

          .feature-info h4 {
            font-size: 0.9rem;
          }

          .feature-info p {
            font-size: 0.8rem;
          }

          .image-main {
            height: 280px;
            border-radius: 20px;
          }


          .deco-dots, .deco-circle {
            display: none;
          }

          .experience-badge {
            top: auto;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 14px;
          }

          .exp-number {
            font-size: 2rem;
          }

          .exp-text {
            font-size: 0.8rem;
          }

          .about-cta {
            flex-direction: column;
            gap: 10px;
          }

          .btn-primary, .btn-outline {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
            border-radius: 14px;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 35px 12px;
          }

          .about-title {
            font-size: 1.5rem;
          }

          .about-desc {
            font-size: 0.9rem;
          }

          .image-main {
            height: 220px;
          }

          .features-grid {
            gap: 10px;
          }

          .feature-card {
            padding: 14px;
          }

          .experience-badge {
            padding: 12px 16px;
          }

          .exp-number {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </section>
  );
}
