'use client';

import Image from 'next/image';

export default function HeroSlider() {
  return (
    <section className="hero-section">
      {/* Sky Background with Static Cloud Shade from Right */}
      <div className="hero-bg">
        <div className="cloud-shade"></div>
        <div className="cloud-shade-2"></div>
        <div className="cloud-shade-3"></div>
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="badge-wrapper">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>First NABH Accredited Eye Hospital in Jind</span>
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
              NABH Accredited
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
          background: linear-gradient(180deg, #87CEEB 0%, #B0E0E6 30%, #E0F4FF 60%, #F0F9FF 100%);
          overflow: hidden;
          padding: 120px 20px 80px;
        }

        /* Sky Background with Static Cloud Shades from Right */
        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .cloud-shade {
          position: absolute;
          top: -5%;
          right: -10%;
          width: 50%;
          height: 45%;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.2) 60%, transparent 80%);
          border-radius: 50%;
          filter: blur(40px);
        }

        .cloud-shade-2 {
          position: absolute;
          top: 25%;
          right: -5%;
          width: 40%;
          height: 35%;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.15) 65%, transparent 85%);
          border-radius: 50%;
          filter: blur(50px);
        }

        .cloud-shade-3 {
          position: absolute;
          top: 55%;
          right: -8%;
          width: 45%;
          height: 40%;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.1) 70%, transparent 90%);
          border-radius: 50%;
          filter: blur(45px);
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
          color: #1a365d;
        }

        .badge-wrapper {
          margin-bottom: 25px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          backdrop-filter: blur(10px);
          border: none;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          color: #FFD600;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(113, 87, 160, 0.3);
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
          color: #1a365d;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
        }

        .gradient-text {
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 50%, #7157A0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #7157A0;
          margin: 0 0 20px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #2d4a6f;
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
          background: white;
          border: 2px solid #7157A0;
          padding: 10px 18px;
          border-radius: 50px;
          font-size: 0.9rem;
          color: #7157A0;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(113, 87, 160, 0.15);
        }

        .pill:hover {
          background: #7157A0;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.3);
        }

        .pill i {
          color: #FFD600;
        }

        .pill:hover i {
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
          background: #7157A0;
          color: white;
          padding: 18px 30px;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          border: none;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.3);
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          background: #5a4080;
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.4);
        }

        /* Trust Stats */
        .trust-stats {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 25px 30px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: none;
          box-shadow: 0 10px 40px rgba(113, 87, 160, 0.3);
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
          color: rgba(255, 255, 255, 0.9);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.3);
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
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            align-items: start;
            text-align: left;
          }

          .hero-content {
            order: 1;
          }

          .hero-visual {
            order: 0;
          }

          .title-line {
            font-size: 1.3rem;
            letter-spacing: -0.5px;
          }

          /* Make gradient text visible on mobile */
          .gradient-text {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: #7157A0 !important;
            background-clip: unset !important;
            color: #7157A0 !important;
            position: relative;
            display: inline-block;
            padding-bottom: 2px;
            border-bottom: 2px solid #FFD600;
          }

          .hero-subtitle {
            font-size: 0.8rem;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }

          .hero-description {
            font-size: 0.75rem;
            line-height: 1.5;
            margin-bottom: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .trust-stats {
            flex-direction: column;
            gap: 0;
            padding: 10px;
            border-radius: 12px;
            background: linear-gradient(135deg, #7157A0, #8B6BC4);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: none;
            box-shadow: 0 8px 30px rgba(113, 87, 160, 0.3);
          }

          .stat {
            flex-direction: row;
            text-align: left;
            gap: 6px;
            padding: 6px 4px;
            position: relative;
          }

          /* Subtle divider between stats */
          .stat:not(:last-child)::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 10%;
            width: 80%;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
          }

          .stat-divider {
            display: none;
          }

          .stat-value {
            font-size: 1.1rem;
          }

          .stat-info {
            align-items: flex-start;
          }

          .stars {
            font-size: 0.5rem;
          }

          .stat-label {
            font-size: 0.6rem;
            text-align: left;
          }

          .main-image {
            height: 180px;
            max-width: 100%;
          }

          .nabh-badge {
            display: none;
          }

          .badge-wrapper {
            margin-bottom: 10px;
          }

          .badge {
            font-size: 9px;
            padding: 6px 10px;
            gap: 5px;
          }

          .badge-dot {
            width: 5px;
            height: 5px;
          }

          .feature-pills {
            margin-bottom: 12px;
            gap: 4px;
            flex-wrap: wrap;
          }

          .pill {
            padding: 4px 8px;
            font-size: 0.65rem;
            border-radius: 20px;
            gap: 4px;
          }

          .pill i {
            font-size: 0.6rem;
          }

          .hero-cta {
            flex-direction: column;
            gap: 8px;
            margin-bottom: 15px;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 10px 16px;
            font-size: 0.75rem;
            border-radius: 12px;
            gap: 6px;
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
            grid-template-columns: 1fr 1.2fr;
            gap: 12px;
          }

          .title-line {
            font-size: 1.1rem;
          }

          .badge {
            font-size: 8px;
            padding: 5px 8px;
            gap: 4px;
          }

          .badge-dot {
            width: 4px;
            height: 4px;
          }

          .feature-pills {
            gap: 4px;
          }

          .pill {
            padding: 3px 6px;
            font-size: 0.6rem;
            border-radius: 15px;
          }

          .pill i {
            font-size: 0.55rem;
          }

          .hero-cta {
            gap: 6px;
          }

          .btn-primary, .btn-secondary {
            padding: 8px 12px;
            font-size: 0.7rem;
            border-radius: 10px;
          }

          .main-image {
            height: 160px;
            border-radius: 12px;
          }

          .trust-stats {
            padding: 8px 6px;
            border-radius: 10px;
          }

          .stat {
            padding: 4px 2px;
          }

          .stat-value {
            font-size: 1rem;
          }

          .stat-label {
            font-size: 0.55rem;
          }

          .hero-subtitle {
            font-size: 0.7rem;
            margin-bottom: 8px;
          }

          .hero-description {
            font-size: 0.7rem;
            margin-bottom: 10px;
            -webkit-line-clamp: 2;
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
