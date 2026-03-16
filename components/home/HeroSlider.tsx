'use client';

import Image from 'next/image';

export default function HeroSlider() {
  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="badge-wrapper">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>Highest Google Rated Eye Hospital in Jind</span>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="title-line">The Highest</span>
            <span className="title-line gradient-text">Google Reviewed</span>
            <span className="title-line">Eye Hospital</span>
          </h1>

          <p className="hero-subtitle">Saraswati Eye Care Centre</p>

          <p className="hero-description">
            Experience world-class eye care with cutting-edge technology,
            expert doctors, and compassionate treatment at Jind's most trusted eye hospital.
          </p>

          {/* Features Pills */}
          <div className="feature-pills">
            <div className="pill">
              <i className="fas fa-certificate"></i>
              NABH Certified
            </div>
            <div className="pill">
              <i className="fas fa-hand-holding-medical"></i>
              Cashless Treatment
            </div>
            <div className="pill">
              <i className="fas fa-award"></i>
              15+ Years
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button
              type="button"
              className="btn-primary"
              onClick={() => window.location.href = '/appointment'}
            >
              <span>Book Appointment</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <a href="tel:+919729236700" className="btn-secondary">
              <i className="fas fa-phone-alt"></i>
              <span>+91 97292 36700</span>
            </a>
          </div>

          {/* Trust Stats */}
          <div className="trust-stats">
            <div className="stat">
              <span className="stat-value">4.9</span>
              <div className="stat-info">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="stat-label">Google Rating</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">50K+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">5K+</span>
              <span className="stat-label">Surgeries</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="visual-wrapper">
            {/* Main Image */}
            <div className="main-image">
              <Image
                src="/images/sarswati_rajesh.png"
                alt="Dr. Rajesh Garg"
                fill
                className="doctor-img"
                priority
              />
            </div>

            {/* Floating Elements */}
            <div className="float-card card-1">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="card-content">
                <span className="card-number">5000+</span>
                <span className="card-label">Successful Surgeries</span>
              </div>
            </div>

            <div className="float-card card-2">
              <div className="card-icon green">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="card-content">
                <span className="card-title">Expert Care</span>
                <span className="card-label">Latest Technology</span>
              </div>
            </div>

            {/* Decorative Ring */}
            <div className="deco-ring"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #0f0a1f;
          overflow: hidden;
          padding: 120px 20px 80px;
        }

        /* Animated Background */
        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #7157A0, #9b7bc7);
          top: -200px;
          left: -200px;
          animation: float1 15s ease-in-out infinite;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          bottom: -150px;
          right: -150px;
          animation: float2 12s ease-in-out infinite;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #7157A0, #4a3680);
          top: 50%;
          left: 50%;
          animation: float3 10s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.1); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -30px) scale(1.05); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Container */
        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        /* Content */
        .hero-content {
          color: white;
        }

        .badge-wrapper {
          margin-bottom: 25px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          color: #FFD600;
          font-weight: 500;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .hero-title {
          margin: 0 0 20px;
        }

        .title-line {
          display: block;
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FFD600 0%, #FFA500 50%, #FFD600 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #a78bfa;
          margin: 0 0 20px;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin: 0 0 30px;
          max-width: 500px;
        }

        /* Feature Pills */
        .feature-pills {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 35px;
        }

        .pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(113, 87, 160, 0.3);
          border: 1px solid rgba(113, 87, 160, 0.5);
          padding: 10px 18px;
          border-radius: 50px;
          font-size: 0.9rem;
          color: white;
          transition: all 0.3s;
        }

        .pill:hover {
          background: rgba(113, 87, 160, 0.5);
          transform: translateY(-2px);
        }

        .pill i {
          color: #FFD600;
        }

        /* CTA Buttons */
        .hero-cta {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #FFD600 0%, #FFA500 100%);
          color: #1a1a1a;
          padding: 18px 35px;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 10px 40px rgba(255, 214, 0, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(255, 214, 0, 0.4);
        }

        .btn-primary i {
          transition: transform 0.3s;
        }

        .btn-primary:hover i {
          transform: translateX(5px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          padding: 18px 30px;
          border-radius: 60px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px);
        }

        /* Trust Stats */
        .trust-stats {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 25px 30px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: #FFD600;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stars {
          color: #FFD600;
          font-size: 0.7rem;
          display: flex;
          gap: 2px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Visual Side */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .main-image {
          position: relative;
          width: 100%;
          height: 550px;
          border-radius: 30px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(113, 87, 160, 0.3) 0%, rgba(113, 87, 160, 0.1) 100%);
        }

        .main-image :global(.doctor-img) {
          object-fit: contain;
          object-position: center bottom;
        }

        .deco-ring {
          position: absolute;
          width: 120%;
          height: 120%;
          top: -10%;
          left: -10%;
          border: 2px dashed rgba(255, 214, 0, 0.2);
          border-radius: 50%;
          animation: spin 30s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Floating Cards */
        .float-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          padding: 15px 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          animation: float-card 4s ease-in-out infinite;
          z-index: 20;
        }

        .card-1 {
          bottom: 100px;
          left: -30px;
          animation-delay: 0s;
        }

        .card-2 {
          top: 80px;
          right: -20px;
          animation-delay: 1s;
        }

        @keyframes float-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .card-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7157A0, #9b7bc7);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        .card-icon.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
        }

        .card-content {
          display: flex;
          flex-direction: column;
        }

        .card-number {
          font-size: 1.3rem;
          font-weight: 800;
          color: #1a1a1a;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
        }

        .card-label {
          font-size: 0.8rem;
          color: #666;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .title-line {
            font-size: 3.2rem;
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
          }

          .hero-content {
            order: 1;
          }

          .hero-visual {
            order: 0;
          }

          .hero-description {
            max-width: 100%;
          }

          .feature-pills {
            justify-content: center;
          }

          .hero-cta {
            justify-content: center;
          }

          .trust-stats {
            justify-content: center;
          }

          .main-image {
            height: 450px;
          }

          .float-card {
            display: none;
          }

          .deco-ring {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 15px 60px;
          }

          .title-line {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .trust-stats {
            flex-direction: column;
            gap: 20px;
            padding: 20px;
          }

          .stat-divider {
            width: 100%;
            height: 1px;
          }

          .main-image {
            height: 380px;
          }
        }

        @media (max-width: 480px) {
          .title-line {
            font-size: 2rem;
          }

          .badge {
            font-size: 12px;
            padding: 8px 15px;
          }

          .feature-pills {
            flex-direction: column;
            align-items: center;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
