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
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="badge-wrapper">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>NABH Certified Eye Hospital in Jind</span>
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
            expert doctors, and compassionate treatment at Jind&apos;s most trusted eye hospital.
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
              <span className="stat-value">25K+</span>
              <span className="stat-label">Surgeries</span>
            </div>
          </div>
        </div>

        {/* Right Visual - Hospital Image */}
        <div className="hero-visual">
          <div className="visual-wrapper">
            {/* Main Image - Hospital Building */}
            <div className="main-image">
              <Image
                src="/frontimage.png"
                alt="Saraswati Eye Care Centre"
                fill
                className="hospital-img"
                priority
              />
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #7157A0 0%, #5a4080 50%, #8B6BC4 100%);
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
          filter: blur(120px);
          opacity: 0.4;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.2);
          top: -150px;
          left: -150px;
          animation: float1 15s ease-in-out infinite;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          bottom: -100px;
          right: -100px;
          animation: float2 12s ease-in-out infinite;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.15);
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
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          color: #FFD600;
          font-weight: 600;
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
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 20px;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
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
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 18px;
          border-radius: 50px;
          font-size: 0.9rem;
          color: white;
          transition: all 0.3s;
        }

        .pill:hover {
          background: rgba(255, 255, 255, 0.25);
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
          box-shadow: 0 10px 40px rgba(255, 214, 0, 0.35);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(255, 214, 0, 0.45);
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
          background: white;
          color: #7157A0;
          padding: 18px 30px;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          border: none;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        /* Trust Stats */
        .trust-stats {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 25px 30px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
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
          color: rgba(255, 255, 255, 0.8);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
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
          max-width: 550px;
        }

        .main-image {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 0;
          overflow: visible;
          box-shadow: none;
          background: transparent;
        }

        .main-image :global(.hospital-img) {
          object-fit: contain;
          object-position: center;
        }


        /* Floating Cards */
        .float-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.98);
          padding: 15px 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          animation: float-card 4s ease-in-out infinite;
          z-index: 20;
        }

        .card-1 {
          bottom: 80px;
          left: -20px;
          animation-delay: 0s;
        }

        .card-2 {
          top: 60px;
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

        /* NABH Badge */
        .nabh-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: white;
          padding: 12px 18px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          z-index: 20;
        }

        .nabh-badge span {
          font-size: 1rem;
          font-weight: 800;
          color: #7157A0;
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
            gap: 40px;
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
            height: 350px;
            max-width: 450px;
            margin: 0 auto;
          }

          .float-card {
            display: none;
          }

          .nabh-badge {
            bottom: 15px;
            right: 15px;
            padding: 10px 15px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 15px 40px;
            min-height: auto;
          }

          .hero-container {
            gap: 25px;
          }

          .title-line {
            font-size: 2.2rem;
            letter-spacing: -0.5px;
          }

          /* Make gradient text visible on mobile - white with golden underline */
          .gradient-text {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: #ffffff !important;
            background-clip: unset !important;
            color: #ffffff !important;
            position: relative;
            display: inline-block;
            padding-bottom: 4px;
            border-bottom: 3px solid #FFD600;
          }

          .hero-subtitle {
            font-size: 1rem;
            letter-spacing: 1px;
          }

          .hero-description {
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 20px;
          }

          .trust-stats {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0;
            padding: 16px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .stat {
            flex: 1;
            min-width: 80px;
            flex-direction: column;
            text-align: center;
            gap: 4px;
            padding: 8px 4px;
            position: relative;
          }

          /* Subtle divider between stats */
          .stat:not(:last-child)::after {
            content: '';
            position: absolute;
            right: 0;
            top: 20%;
            height: 60%;
            width: 1px;
            background: rgba(255, 255, 255, 0.2);
          }

          .stat-divider {
            display: none;
          }

          .stat-value {
            font-size: 1.5rem;
          }

          .stat-info {
            align-items: center;
          }

          .stars {
            font-size: 0.6rem;
          }

          .stat-label {
            font-size: 0.65rem;
            text-align: center;
          }

          .main-image {
            height: 200px;
            max-width: 100%;
          }

          .nabh-badge {
            padding: 8px 12px;
          }

          .nabh-badge span {
            font-size: 0.85rem;
          }

          .badge-wrapper {
            margin-bottom: 15px;
          }

          .badge {
            animation: float-subtle 3s ease-in-out infinite;
          }

          @keyframes float-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }

          .feature-pills {
            margin-bottom: 20px;
          }

          .hero-cta {
            margin-bottom: 25px;
          }

          /* Enhanced button styles for mobile */
          .btn-primary {
            position: relative;
            overflow: hidden;
          }

          .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: btn-shine 2s infinite;
          }

          @keyframes btn-shine {
            0% { left: -100%; }
            50%, 100% { left: 100%; }
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 90px 12px 35px;
          }

          .hero-container {
            gap: 20px;
          }

          .title-line {
            font-size: 1.75rem;
          }

          .badge {
            font-size: 10px;
            padding: 8px 12px;
            gap: 6px;
          }

          .badge-dot {
            width: 6px;
            height: 6px;
          }

          .feature-pills {
            gap: 6px;
            justify-content: center;
          }

          .pill {
            padding: 6px 12px;
            font-size: 0.75rem;
            border-radius: 30px;
          }

          .pill i {
            font-size: 0.7rem;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 14px 20px;
            font-size: 0.9rem;
            border-radius: 14px;
          }

          .main-image {
            height: 180px;
            border-radius: 16px;
          }

          .trust-stats {
            padding: 12px 8px;
            border-radius: 14px;
          }

          .stat {
            padding: 6px 2px;
          }

          .stat-value {
            font-size: 1.3rem;
          }

          .stat-label {
            font-size: 0.6rem;
          }

          .hero-subtitle {
            font-size: 0.9rem;
            margin-bottom: 12px;
          }

          .hero-description {
            font-size: 0.85rem;
            margin-bottom: 15px;
          }
        }

        @media (max-width: 360px) {
          .title-line {
            font-size: 1.5rem;
          }

          .pill {
            padding: 5px 10px;
            font-size: 0.7rem;
          }

          .stat-value {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
