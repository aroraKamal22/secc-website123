'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: 'Himantika Choudhary',
    location: 'Jind, Haryana',
    rating: 5,
    text: 'It has been great experience with Saraswati Eye Care Centre. My father had his cataract surgery with FLACS. The staff is well-behaved and the doctors are very experienced. Dr. Rajesh Garg is an excellent surgeon. Highly recommended!',
    treatment: 'Cataract Surgery',
  },
  {
    name: 'Anjali Sharma',
    location: 'Karnal, Haryana',
    rating: 5,
    text: 'Excellent care and service at Saraswati Eye Care Centre. The doctors are highly skilled and the staff is very supportive. My vision has improved significantly after the treatment. The hospital has state-of-the-art equipment.',
    treatment: 'Eye Treatment',
  },
  {
    name: 'Rahul Kumar',
    location: 'Rohtak, Haryana',
    rating: 5,
    text: 'The facilities are top-notch and the doctors are very professional. They explained everything clearly and made me feel comfortable throughout the process. The staff is very helpful and the waiting time is minimal.',
    treatment: 'Eye Checkup',
  },
  {
    name: 'Priya Singh',
    location: 'Hisar, Haryana',
    rating: 5,
    text: "Very happy with the treatment for my child's eye issue. Dr. Khushboo Gupta is amazing with kids and very knowledgeable. The pediatric section is well-equipped and child-friendly.",
    treatment: 'Pediatric Eye Care',
  },
  {
    name: 'Sanjay Verma',
    location: 'Panipat, Haryana',
    rating: 5,
    text: 'Had my retina checked by Dr. Ajay Garg. He is a true expert in his field. The technology used is very advanced, and the examination was thorough. I feel confident in their care.',
    treatment: 'Retina Treatment',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % testimonials.length);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2>What Our <span>Patients</span> Say</h2>
          <p>Real stories from real patients who trusted us with their vision</p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="testimonial-wrapper">
          {/* Quote Icon */}
          <div className="quote-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Slider */}
          <div className="slider-container">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card">
                    {/* Stars */}
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="testimonial-text">"{testimonial.text}"</p>

                    {/* Author Info */}
                    <div className="author-info">
                      <div className="author-avatar">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="author-details">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.location}</p>
                      </div>
                      <span className="treatment-tag">{testimonial.treatment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button className="nav-btn prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="nav-btn next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="dots-container">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Google Review Link */}
        <div className="google-cta">
          <div className="google-info">
            <svg width="30" height="30" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Read more reviews on Google</span>
          </div>
          <a
            href="https://www.google.com/maps/place/Saraswati+Eye+Care+and+Retina+Centre/@29.313969,76.325329,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="google-btn"
          >
            View All Reviews
          </a>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 100px 20px;
          background: linear-gradient(180deg, #f8f6fc 0%, #fff 100%);
        }

        .testimonials-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
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
          margin-bottom: 15px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 10px;
        }

        .section-header h2 span {
          color: #7157A0;
        }

        .section-header p {
          color: #666;
          font-size: 1.1rem;
          margin: 0;
        }

        .testimonial-wrapper {
          position: relative;
          padding: 0 60px;
        }

        .quote-icon {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.3);
        }

        .quote-icon svg {
          width: 30px;
          height: 30px;
          transform: rotate(180deg);
        }

        .slider-container {
          overflow: hidden;
          border-radius: 24px;
        }

        .slider-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .testimonial-slide {
          width: 100%;
          flex-shrink: 0;
          padding: 0 10px;
        }

        .testimonial-card {
          background: white;
          border-radius: 24px;
          padding: 50px 40px 40px;
          box-shadow: 0 15px 50px rgba(113, 87, 160, 0.1);
          border: 1px solid rgba(113, 87, 160, 0.08);
        }

        .stars {
          text-align: center;
          margin-bottom: 25px;
        }

        .stars span {
          color: #FFD600;
          font-size: 1.5rem;
          margin: 0 2px;
        }

        .testimonial-text {
          font-size: 1.2rem;
          color: #444;
          line-height: 1.9;
          text-align: center;
          margin: 0 0 30px;
          font-style: italic;
        }

        .author-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .author-avatar {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .author-details h4 {
          margin: 0;
          color: #1a1a2e;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .author-details p {
          margin: 3px 0 0;
          color: #888;
          font-size: 0.9rem;
        }

        .treatment-tag {
          background: #f8f6fc;
          color: #7157A0;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          border: none;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7157A0;
          transition: all 0.3s;
          z-index: 5;
        }

        .nav-btn:hover {
          background: #7157A0;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }

        .nav-btn svg {
          width: 24px;
          height: 24px;
        }

        .nav-btn.prev { left: 0; }
        .nav-btn.next { right: 0; }

        .dots-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: #ddd;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          width: 35px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
        }

        .google-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-top: 50px;
          padding: 25px 35px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(113, 87, 160, 0.1);
          flex-wrap: wrap;
        }

        .google-info {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #444;
          font-weight: 500;
        }

        .google-btn {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 14px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s;
        }

        .google-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.3);
        }

        @media (max-width: 768px) {
          .testimonial-wrapper {
            padding: 0;
          }
          .nav-btn {
            display: none;
          }
          .testimonial-card {
            padding: 50px 25px 30px;
          }
          .testimonial-text {
            font-size: 1rem;
          }
          .section-header h2 {
            font-size: 2rem;
          }
          .google-cta {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
