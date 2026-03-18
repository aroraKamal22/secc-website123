'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { src: '/images/fullslide1.jpg', alt: 'Saraswati Eye Care Centre' },
  { src: '/images/front11.JPG', alt: 'Hospital Building' },
  { src: '/images/15years.jpg', alt: '15 Years of Excellence' },
  { src: '/images/front1234.jpg', alt: 'Front View' },
];

export default function HospitalShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hospital-showcase">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`showcase-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="showcase-overlay" />

      {/* Content */}
      <div className="showcase-content">
        <div className="content-wrapper">
          <span className="showcase-badge">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            NABH Accredited Eye Hospital
          </span>

          <h2 className="showcase-title">
            Saraswati Eye Care Centre
          </h2>

          <p className="showcase-subtitle">
            Super Speciality Eye Hospital, Jind
          </p>

          <p className="showcase-desc">
            Leading eye care hospital with world-class technology and compassionate care.
            Trusted by <strong>50,000+</strong> patients across Haryana since 2010.
          </p>

          <div className="showcase-stats">
            <div className="stat-box">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">4</span>
              <span className="stat-label">Expert Doctors</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Google Rating</span>
            </div>
          </div>

          <div className="showcase-buttons">
            <button
              type="button"
              className="btn-primary"
              onClick={() => window.location.href = '/appointment'}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Book Appointment
            </button>
            <Link href="/about" className="btn-secondary">
              Know More About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="showcase-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .hospital-showcase {
          position: relative;
          width: 100%;
          min-height: 600px;
          overflow: hidden;
          background: #1a1a2e;
          margin-top: 60px;
          padding: 80px 0;
        }

        .showcase-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 1s ease-in-out, transform 8s ease-out;
          z-index: 1;
        }

        .showcase-slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .showcase-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(113, 87, 160, 0.85) 0%,
            rgba(113, 87, 160, 0.7) 50%,
            rgba(0, 0, 0, 0.6) 100%
          );
          z-index: 5;
        }

        .showcase-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: left;
          color: white;
          padding: 0 5%;
        }

        .content-wrapper {
          max-width: 700px;
        }

        .showcase-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, rgba(255, 214, 0, 0.3), rgba(255, 214, 0, 0.15));
          border: 1px solid rgba(255, 214, 0, 0.6);
          color: #FFD600;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 25px;
          letter-spacing: 0.5px;
        }

        .showcase-title {
          font-size: 4rem;
          font-weight: 800;
          margin: 0 0 15px;
          line-height: 1.1;
          color: #fff;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .showcase-subtitle {
          font-size: 1.6rem;
          color: #FFD600;
          margin: 0 0 25px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .showcase-desc {
          font-size: 1.25rem;
          opacity: 0.95;
          margin: 0 0 40px;
          line-height: 1.8;
          max-width: 600px;
        }

        .showcase-desc strong {
          color: #FFD600;
          font-weight: 700;
        }

        .showcase-stats {
          display: flex;
          justify-content: flex-start;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .stat-box {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 20px;
          padding: 25px 35px;
          min-width: 140px;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .stat-box:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.18);
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: #FFD600;
          line-height: 1;
        }

        .stat-label {
          display: block;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.85);
          margin-top: 8px;
          font-weight: 500;
        }

        .showcase-buttons {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 25px;
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
          gap: 8px;
          background: transparent;
          color: white;
          padding: 0;
          font-weight: 600;
          font-size: 1.05rem;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          position: relative;
        }

        .btn-secondary::after {
          content: '→';
          transition: transform 0.3s ease;
        }

        .btn-secondary:hover {
          color: #FFD600;
        }

        .btn-secondary:hover::after {
          transform: translateX(5px);
        }

        .showcase-indicators {
          position: absolute;
          bottom: 30px;
          left: 5%;
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          width: 45px;
          background: linear-gradient(135deg, #FFD600, #FFC107);
          box-shadow: 0 0 20px rgba(255, 214, 0, 0.7);
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 768px) {
          .hospital-showcase {
            margin-top: 40px;
            padding: 60px 0;
            min-height: auto;
          }

          .showcase-title {
            font-size: 2.5rem;
          }

          .showcase-subtitle {
            font-size: 1.2rem;
          }

          .showcase-desc {
            font-size: 1.05rem;
            margin-bottom: 30px;
          }

          .showcase-stats {
            gap: 15px;
            margin-bottom: 30px;
          }

          .stat-box {
            padding: 18px 22px;
            min-width: 110px;
          }

          .stat-number {
            font-size: 1.8rem;
          }

          .stat-label {
            font-size: 0.75rem;
          }

          .btn-primary {
            padding: 14px 30px;
            font-size: 0.95rem;
          }

          .showcase-indicators {
            bottom: 20px;
          }
        }

        @media (max-width: 500px) {
          .hospital-showcase {
            margin-top: 30px;
            padding: 50px 0;
          }

          .showcase-content {
            padding: 0 20px;
          }

          .showcase-badge {
            padding: 10px 20px;
            font-size: 0.85rem;
            margin-bottom: 20px;
          }

          .showcase-title {
            font-size: 1.9rem;
          }

          .showcase-subtitle {
            font-size: 1rem;
            margin-bottom: 20px;
          }

          .showcase-desc {
            font-size: 0.95rem;
            margin-bottom: 25px;
          }

          .showcase-stats {
            gap: 10px;
            margin-bottom: 25px;
          }

          .stat-box {
            padding: 14px 18px;
            min-width: 85px;
          }

          .stat-number {
            font-size: 1.4rem;
          }

          .showcase-buttons {
            flex-direction: row;
            align-items: center;
            gap: 20px;
          }

          .btn-primary {
            padding: 12px 24px;
            font-size: 0.9rem;
          }

          .showcase-indicators {
            bottom: 15px;
            left: 20px;
          }
        }
      `}</style>
    </section>
  );
}
