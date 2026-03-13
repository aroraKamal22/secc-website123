'use client';

import Link from 'next/link';

// Pre-computed particle positions using deterministic formula (avoids hydration mismatch)
const particles = [...Array(50)].map((_, i) => ({
  id: i,
  left: `${((i * 37 + 13) % 100)}%`,
  animationDelay: `${(i * 0.1) % 5}s`,
  animationDuration: `${3 + (i % 4)}s`
}));

export default function HeroSlider() {
  return (
    <section className="hero-section">
      {/* Particle Effects */}
      <div className="particles">
        {particles.map((particle) => (
          <div key={particle.id} className="particle" style={{
            left: particle.left,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration
          }} />
        ))}
      </div>

      {/* Golden Glow Effects */}
      <div className="glow-effects">
        <div className="glow glow-left"></div>
        <div className="glow glow-right"></div>
        <div className="glow glow-center"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Laurel Left */}
        <div className="laurel laurel-left">
          <svg viewBox="0 0 100 200" fill="none">
            <path d="M80 20 Q60 30 70 50 Q50 45 60 70 Q40 65 50 90 Q30 85 40 110 Q20 105 30 130 Q10 125 20 150 Q0 145 10 170 Q-10 165 5 190"
                  stroke="#D4A855" strokeWidth="2" fill="none"/>
            <ellipse cx="75" cy="25" rx="12" ry="20" fill="#D4A855" transform="rotate(-30 75 25)"/>
            <ellipse cx="65" cy="50" rx="12" ry="20" fill="#C49545" transform="rotate(-20 65 50)"/>
            <ellipse cx="55" cy="75" rx="12" ry="20" fill="#D4A855" transform="rotate(-15 55 75)"/>
            <ellipse cx="45" cy="100" rx="12" ry="20" fill="#B48535" transform="rotate(-10 45 100)"/>
            <ellipse cx="35" cy="125" rx="12" ry="20" fill="#D4A855" transform="rotate(-5 35 125)"/>
            <ellipse cx="25" cy="150" rx="12" ry="20" fill="#C49545" transform="rotate(0 25 150)"/>
            <ellipse cx="15" cy="175" rx="12" ry="20" fill="#D4A855" transform="rotate(5 15 175)"/>
          </svg>
        </div>

        {/* Main Text */}
        <div className="text-content">
          <h1 className="main-title">
            <span className="glow-text">The Highest</span>
            <span className="glow-text">Google Reviewed</span>
          </h1>
          <p className="subtitle">Eye Hospital In Jind</p>
          <p className="hospital-name">Saraswati Eye Care Centre</p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button
              type="button"
              className="btn-primary"
              onClick={() => window.location.href = '/appointment'}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Request Appointment
            </button>
            <a href="tel:+919729236700" className="btn-secondary">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>

        {/* Laurel Right */}
        <div className="laurel laurel-right">
          <svg viewBox="0 0 100 200" fill="none">
            <path d="M20 20 Q40 30 30 50 Q50 45 40 70 Q60 65 50 90 Q70 85 60 110 Q80 105 70 130 Q90 125 80 150 Q100 145 90 170 Q110 165 95 190"
                  stroke="#D4A855" strokeWidth="2" fill="none"/>
            <ellipse cx="25" cy="25" rx="12" ry="20" fill="#D4A855" transform="rotate(30 25 25)"/>
            <ellipse cx="35" cy="50" rx="12" ry="20" fill="#C49545" transform="rotate(20 35 50)"/>
            <ellipse cx="45" cy="75" rx="12" ry="20" fill="#D4A855" transform="rotate(15 45 75)"/>
            <ellipse cx="55" cy="100" rx="12" ry="20" fill="#B48535" transform="rotate(10 55 100)"/>
            <ellipse cx="65" cy="125" rx="12" ry="20" fill="#D4A855" transform="rotate(5 65 125)"/>
            <ellipse cx="75" cy="150" rx="12" ry="20" fill="#C49545" transform="rotate(0 75 150)"/>
            <ellipse cx="85" cy="175" rx="12" ry="20" fill="#D4A855" transform="rotate(-5 85 175)"/>
          </svg>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Particles */
        .particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #D4A855;
          border-radius: 50%;
          bottom: -10px;
          animation: rise linear infinite;
          box-shadow: 0 0 6px #D4A855, 0 0 12px #D4A855;
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }

        /* Glow Effects */
        .glow-effects {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .glow-left {
          width: 400px;
          height: 600px;
          background: rgba(212, 168, 85, 0.15);
          left: -100px;
          top: 50%;
          transform: translateY(-50%);
        }

        .glow-right {
          width: 400px;
          height: 600px;
          background: rgba(212, 168, 85, 0.15);
          right: -100px;
          top: 50%;
          transform: translateY(-50%);
        }

        .glow-center {
          width: 600px;
          height: 300px;
          background: rgba(212, 168, 85, 0.1);
          left: 50%;
          top: 30%;
          transform: translateX(-50%);
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          padding: 20px;
          max-width: 1200px;
          width: 100%;
        }

        /* Laurel Wreaths */
        .laurel {
          width: 120px;
          height: 240px;
          flex-shrink: 0;
        }

        .laurel svg {
          width: 100%;
          height: 100%;
        }

        /* Text Content */
        .text-content {
          text-align: center;
          flex: 1;
          max-width: 700px;
        }

        .main-title {
          margin: 0 0 20px;
        }

        .glow-text {
          display: block;
          font-family: 'Times New Roman', 'Playfair Display', serif;
          font-size: 4.5rem;
          font-weight: 700;
          color: #D4A855;
          text-transform: uppercase;
          letter-spacing: 4px;
          text-shadow:
            0 0 20px rgba(212, 168, 85, 0.8),
            0 0 40px rgba(212, 168, 85, 0.6),
            0 0 60px rgba(212, 168, 85, 0.4),
            0 0 80px rgba(212, 168, 85, 0.2);
          line-height: 1.1;
        }

        .subtitle {
          font-family: 'Times New Roman', 'Playfair Display', serif;
          font-size: 2rem;
          color: #E8DCC8;
          letter-spacing: 8px;
          text-transform: uppercase;
          margin: 0 0 15px;
          font-weight: 400;
        }

        .hospital-name {
          font-family: 'Times New Roman', 'Playfair Display', serif;
          font-size: 1.4rem;
          color: #D4A855;
          letter-spacing: 3px;
          margin: 0 0 50px;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(212, 168, 85, 0.5);
        }

        /* Buttons */
        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #D4A855;
          color: #1a1a1a;
          padding: 16px 35px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid #fff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(212, 168, 85, 0.4);
          cursor: pointer;
        }

        .btn-primary:hover {
          background: #E4B865;
          transform: translateY(-2px);
          border-color: #fff;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 168, 85, 0.6);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 0, 0, 0.5);
          color: #D4A855;
          padding: 16px 35px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid #fff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(212, 168, 85, 0.4);
        }

        .btn-secondary:hover {
          background: #D4A855;
          color: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 168, 85, 0.6);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .laurel {
            width: 80px;
            height: 160px;
          }
          .glow-text {
            font-size: 3.5rem;
          }
          .subtitle {
            font-size: 1.5rem;
            letter-spacing: 4px;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            gap: 20px;
          }
          .laurel {
            display: none;
          }
          .glow-text {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          .subtitle {
            font-size: 1.2rem;
            letter-spacing: 3px;
            margin-bottom: 10px;
          }
          .hospital-name {
            font-size: 1.1rem;
            margin-bottom: 30px;
          }
          .btn-primary, .btn-secondary {
            padding: 16px 32px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .glow-text {
            font-size: 1.8rem;
          }
          .subtitle {
            font-size: 1rem;
            letter-spacing: 2px;
          }
          .hospital-name {
            font-size: 0.95rem;
            letter-spacing: 1px;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            padding: 0 20px;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
