'use client';

import Link from 'next/link';

export default function GoogleReviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        {/* Header */}
        <div className="reviews-header">
          <span className="section-tag">Patient Reviews</span>
          <h2>Trusted by <span>Thousands</span></h2>
          <p>See what our patients say about their experience</p>
        </div>

        {/* Main Content Grid */}
        <div className="reviews-grid">
          {/* Google Rating Card */}
          <div className="rating-card">
            <div className="google-logo">
              <svg width="80" height="80" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div className="rating-score">
              <span className="score">4.9</span>
              <div className="stars">★★★★★</div>
            </div>
            <p className="review-count">Based on <strong>1000+</strong> reviews</p>
            <a
              href="https://g.page/r/CcGjKywuRqrPEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="review-btn"
            >
              Write a Review
            </a>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">50,000+</span>
                <span className="stat-label">Successful Treatments</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">4</span>
                <span className="stat-label">Expert Specialists</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon yellow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
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
            Book Appointment
          </Link>
          <Link href="/about" className="cta-secondary">
            Learn More About Us
          </Link>
        </div>
      </div>

      <style jsx>{`
        .reviews-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #9b7ed4 100%);
          position: relative;
        }

        .reviews-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 80%, rgba(255,214,0,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%);
        }

        .reviews-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .reviews-header {
          text-align: center;
          color: white;
          margin-bottom: 50px;
        }

        .section-tag {
          display: inline-block;
          background: rgba(255, 214, 0, 0.2);
          border: 1px solid rgba(255, 214, 0, 0.4);
          color: #FFD600;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .reviews-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          margin: 0 0 10px;
        }

        .reviews-header h2 span {
          color: #FFD600;
        }

        .reviews-header p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 30px;
          margin-bottom: 40px;
        }

        /* Rating Card */
        .rating-card {
          background: white;
          border-radius: 24px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }

        .google-logo {
          margin-bottom: 20px;
        }

        .rating-score {
          margin-bottom: 15px;
        }

        .score {
          font-size: 4rem;
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1;
        }

        .stars {
          color: #FFD600;
          font-size: 1.8rem;
          letter-spacing: 2px;
          margin-top: 5px;
        }

        .review-count {
          color: #666;
          margin: 0 0 25px;
        }

        .review-btn {
          display: inline-block;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 14px 35px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }

        .review-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.4);
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .stat-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 18px;
          transition: all 0.3s;
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-5px);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-icon :global(svg) {
          width: 30px;
          height: 30px;
        }

        .stat-icon.green { background: rgba(16, 185, 129, 0.2); color: #10B981; }
        .stat-icon.purple { background: rgba(139, 92, 246, 0.2); color: #A78BFA; }
        .stat-icon.blue { background: rgba(59, 130, 246, 0.2); color: #60A5FA; }
        .stat-icon.yellow { background: rgba(255, 214, 0, 0.2); color: #FFD600; }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.8);
          margin-top: 4px;
          display: block;
        }

        .cta-row {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .cta-primary {
          display: inline-block;
          background: #FFD600;
          color: #5a4a7a;
          padding: 16px 35px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(255, 214, 0, 0.3);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(255, 214, 0, 0.4);
        }

        .cta-secondary {
          display: inline-block;
          background: transparent;
          color: white;
          padding: 16px 35px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.5);
          transition: all 0.3s;
        }

        .cta-secondary:hover {
          background: white;
          color: #7157A0;
          border-color: white;
        }

        @media (max-width: 900px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
          .rating-card {
            max-width: 350px;
            margin: 0 auto;
          }
          .stats-grid {
            max-width: 500px;
            margin: 0 auto;
          }
          .reviews-header h2 { font-size: 2.2rem; }
        }

        @media (max-width: 550px) {
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
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
