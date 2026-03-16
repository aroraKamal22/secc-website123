'use client';

import Link from 'next/link';

export default function GoogleReviews() {
  return (
    <section className="reviews-section">
      {/* Background Elements */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="reviews-container">
        {/* Header */}
        <div className="reviews-header">
          <span className="section-tag">Patient Reviews</span>
          <h2>Trusted by <span className="gradient-text">Thousands</span></h2>
          <p>See what our patients say about their experience</p>
        </div>

        {/* Main Content Grid */}
        <div className="reviews-grid">
          {/* Google Rating Card */}
          <div className="rating-card">
            <div className="rating-glow"></div>
            <div className="google-logo">
              <svg width="70" height="70" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div className="rating-score">
              <span className="score">4.9</span>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <p className="review-count">Based on <strong>1000+</strong> reviews</p>
            <a
              href="https://g.page/r/CcGjKywuRqrPEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="review-btn"
            >
              <i className="fas fa-edit"></i>
              Write a Review
            </a>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon green">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">50,000+</span>
                <span className="stat-label">Successful Treatments</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon purple">
                <i className="fas fa-clock"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">4</span>
                <span className="stat-label">Expert Specialists</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon yellow">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">NABH</span>
                <span className="stat-label">Certified Hospital</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-row">
          <Link href="/appointment" className="cta-primary">
            <i className="fas fa-calendar-check"></i>
            Book Appointment
          </Link>
          <Link href="/about" className="cta-secondary">
            Learn More About Us
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .reviews-section {
          padding: 80px 20px;
          background: linear-gradient(180deg, #fff 0%, #f8f6fc 100%);
          position: relative;
          overflow: hidden;
        }

        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .glow-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          top: -150px;
          right: -100px;
        }

        .glow-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          bottom: -100px;
          left: -50px;
        }

        .reviews-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .reviews-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-tag {
          display: inline-block;
          color: #7157A0;
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .tag-dot {
          width: 8px;
          height: 8px;
          background: #FFD600;
          border-radius: 50%;
        }

        .reviews-header h2 {
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

        .reviews-header p {
          font-size: 1.1rem;
          color: #666;
          margin: 0;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 30px;
          margin-bottom: 50px;
        }

        /* Rating Card */
        .rating-card {
          position: relative;
          background: white;
          border: 1px solid rgba(113, 87, 160, 0.1);
          border-radius: 24px;
          padding: 40px 30px;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(113, 87, 160, 0.1);
        }

        .rating-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(113, 87, 160, 0.1) 0%, transparent 70%);
        }

        .google-logo {
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .rating-score {
          margin-bottom: 15px;
          position: relative;
          z-index: 2;
        }

        .score {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stars {
          color: #FFD600;
          font-size: 1.5rem;
          letter-spacing: 4px;
          margin-top: 8px;
        }

        .review-count {
          color: #666;
          margin: 0 0 25px;
          position: relative;
          z-index: 2;
        }

        .review-count strong {
          color: #1a1a2e;
        }

        .review-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 14px 30px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          position: relative;
          z-index: 2;
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.3);
        }

        .review-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(113, 87, 160, 0.4);
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .stat-card {
          background: white;
          border: 1px solid rgba(113, 87, 160, 0.1);
          border-radius: 20px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 18px;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(113, 87, 160, 0.08);
        }

        .stat-card:hover {
          border-color: rgba(113, 87, 160, 0.2);
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(113, 87, 160, 0.15);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.5rem;
        }

        .stat-icon.green { background: rgba(16, 185, 129, 0.15); color: #10B981; }
        .stat-icon.purple { background: rgba(113, 87, 160, 0.15); color: #7157A0; }
        .stat-icon.blue { background: rgba(59, 130, 246, 0.15); color: #3B82F6; }
        .stat-icon.yellow { background: rgba(255, 214, 0, 0.2); color: #D4A800; }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #666;
          margin-top: 4px;
          display: block;
        }

        .cta-row {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          color: #1a1a2e;
          padding: 16px 35px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(255, 214, 0, 0.3);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 214, 0, 0.4);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #7157A0;
          padding: 16px 35px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          border: 2px solid rgba(113, 87, 160, 0.3);
          transition: all 0.3s;
        }

        .cta-secondary:hover {
          background: rgba(113, 87, 160, 0.1);
          border-color: #7157A0;
        }

        @media (max-width: 900px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
          .rating-card {
            max-width: 320px;
            margin: 0 auto;
          }
          .stats-grid {
            max-width: 500px;
            margin: 0 auto;
          }
          .reviews-header h2 { font-size: 2.2rem; }
        }

        @media (max-width: 550px) {
          .reviews-section {
            padding: 60px 15px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .cta-row {
            flex-direction: column;
            align-items: center;
          }
          .cta-primary, .cta-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
