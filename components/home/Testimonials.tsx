'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: 'Himantika Choudhary',
    location: 'Jind, Haryana',
    rating: 5,
    text: 'It has been great experience with Saraswati Eye Care Centre. My father had his cataract surgery with FLACS. The staff is well-behaved and the doctors are very experienced. Dr. Rajesh Garg is an excellent surgeon. Highly recommended!',
  },
  {
    name: 'Anjali Sharma',
    location: 'Karnal, Haryana',
    rating: 5,
    text: 'Excellent care and service at Saraswati Eye Care Centre. The doctors are highly skilled and the staff is very supportive. My vision has improved significantly after the treatment.',
  },
  {
    name: 'Rahul Kumar',
    location: 'Rohtak, Haryana',
    rating: 5,
    text: 'The facilities are top-notch and the doctors are very professional. They explained everything clearly and made me feel comfortable throughout the process.',
  },
  {
    name: 'Priya Singh',
    location: 'Hisar, Haryana',
    rating: 5,
    text: "Very happy with the treatment for my child's eye issue. Dr. Khushboo Gupta is amazing with kids and very knowledgeable. The pediatric section is well-equipped.",
  },
  {
    name: 'Sanjay Verma',
    location: 'Panipat, Haryana',
    rating: 5,
    text: 'Had my retina checked by Dr. Ajay Garg. He is a true expert in his field. The technology used is very advanced, and the examination was thorough.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, maxIndex]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  }, [currentIndex, goToSlide, maxIndex]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  }, [currentIndex, goToSlide, maxIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2>What Our <span>Patients</span> Say</h2>
          <p>With over 15+ years of excellence in eye care and more than 5000 surgeries performed annually, Saraswati Eye Hospital stands as a trusted name in advanced ophthalmic treatments. Our experienced specialists ensure expert care and consistently high-quality outcomes.

</p>
          <a
            href="https://www.google.com/maps/place/Saraswati+Eye+Care+Centre/@29.3139692,76.3253288,17z/data=!4m8!3m7!1s0x391204530f997803:0xcfaa462e2c2ba3c1!8m2!3d29.3139692!4d76.3253288!9m1!1b1!16s%2Fg%2F11d_cxyqmx?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="write-review-btn"
          >
            <i className="fas fa-star"></i>
            Read Reviews
          </a>
        </div>

        {/* Cards Container */}
        <div className="cards-wrapper">
          {/* Navigation Button - Previous */}
          <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous">
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="cards-container">
            <div
              className="cards-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <div className="card-inner">
                    {/* Quote Icon */}
                    <div className="quote-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>

                    {/* Stars */}
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>

                    {/* Profile Section */}
                    <div className="profile-section">
                      <div className="profile-avatar">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="profile-info">
                        <h4>{testimonial.name}</h4>
                        <p><i className="fas fa-map-marker-alt"></i> {testimonial.location}</p>
                      </div>
                      <div className="google-badge">
                        <svg width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Button - Next */}
          <button className="nav-btn next" onClick={nextSlide} aria-label="Next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="dots-container">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 30px 20px 40px;
          background: linear-gradient(180deg, #f8f6fc 0%, #fff 100%);
          position: relative;
          overflow: hidden;
        }

        .testimonials-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 35px;
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

        .section-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 15px;
        }

        .section-header h2 span {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          color: #666;
          font-size: 1.1rem;
          margin: 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .section-header :global(.write-review-btn) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          margin-top: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(113, 87, 160, 0.3);
        }

        .section-header :global(.write-review-btn:hover) {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.4);
          background: linear-gradient(135deg, #8B6BC4, #7157A0);
        }

        .section-header :global(.write-review-btn i) {
          font-size: 0.85rem;
        }

        .cards-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .cards-container {
          flex: 1;
          overflow: hidden;
        }

        .cards-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .testimonial-card {
          flex-shrink: 0;
          padding: 0 12px;
        }

        .card-inner {
          background: white;
          border-radius: 20px;
          padding: 30px 25px;
          height: 100%;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 10px 40px rgba(113, 87, 160, 0.1);
          border: 1px solid rgba(113, 87, 160, 0.08);
          transition: all 0.3s ease;
        }

        .card-inner:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(113, 87, 160, 0.18);
        }

        .quote-icon {
          position: absolute;
          top: 20px;
          right: 25px;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.1), rgba(139, 107, 196, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7157A0;
          font-size: 1rem;
        }

        .stars {
          margin-bottom: 18px;
          display: flex;
          gap: 4px;
        }

        .stars i {
          color: #FFD600;
          font-size: 1rem;
        }

        .testimonial-text {
          flex: 1;
          font-size: 0.98rem;
          color: #555;
          line-height: 1.8;
          margin: 0 0 20px;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid #f0f0f0;
        }

        .profile-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .profile-info {
          flex: 1;
        }

        .profile-info h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a2e;
        }

        .profile-info p {
          margin: 4px 0 0;
          font-size: 0.8rem;
          color: #888;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .profile-info p i {
          color: #7157A0;
          font-size: 0.7rem;
        }

        .google-badge {
          width: 36px;
          height: 36px;
          background: #f8f8f8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          border: 2px solid #7157A0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7157A0;
          transition: all 0.3s;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(113, 87, 160, 0.15);
        }

        .nav-btn:hover {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          border-color: transparent;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
          padding-bottom: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ddd;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          transform: scale(1.3);
        }

        .dot:hover {
          background: #7157A0;
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 35px 15px;
          }

          .section-header {
            margin-bottom: 25px;
          }

          .section-tag {
            font-size: 0.85rem;
            letter-spacing: 1.5px;
          }

          .section-header h2 {
            font-size: 1.8rem;
          }

          .section-header p {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .section-header :global(.write-review-btn) {
            padding: 10px 20px;
            font-size: 0.85rem;
            border-radius: 12px;
          }

          .cards-wrapper {
            gap: 10px;
          }

          .nav-btn {
            width: 40px;
            height: 40px;
            display: none;
          }

          .card-inner {
            padding: 20px 18px;
            min-height: 280px;
            border-radius: 18px;
            background: linear-gradient(145deg, #ffffff 0%, #faf9fc 100%);
            border: 1px solid rgba(113, 87, 160, 0.12);
          }

          .quote-icon {
            width: 38px;
            height: 38px;
            top: 16px;
            right: 18px;
            font-size: 0.85rem;
          }

          .stars {
            margin-bottom: 14px;
          }

          .stars i {
            font-size: 0.9rem;
          }

          .testimonial-text {
            font-size: 0.9rem;
            line-height: 1.7;
            margin-bottom: 16px;
          }

          .profile-section {
            padding-top: 14px;
            gap: 10px;
          }

          .profile-avatar {
            width: 42px;
            height: 42px;
            font-size: 1rem;
          }

          .profile-info h4 {
            font-size: 0.9rem;
          }

          .profile-info p {
            font-size: 0.75rem;
          }

          .google-badge {
            width: 32px;
            height: 32px;
          }

          .google-badge svg {
            width: 16px;
            height: 16px;
          }

          .testimonial-card {
            padding: 0 8px;
          }

          .dots-container {
            margin-top: 20px;
            gap: 8px;
          }

          .dot {
            width: 8px;
            height: 8px;
          }

          .dot.active {
            width: 24px;
            border-radius: 10px;
            transform: scale(1);
          }
        }

        @media (max-width: 480px) {
          .testimonials-section {
            padding: 30px 12px;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }

          .card-inner {
            padding: 18px 15px;
            min-height: 260px;
          }

          .testimonial-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
