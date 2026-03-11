'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { src: '/images/fullslide1.jpg', alt: 'Saraswati Eye Care Centre' },
  { src: '/images/front11.JPG', alt: 'Hospital Building' },
  { src: '/images/front1234.jpg', alt: 'Front View' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div key={index} className={`hero-bg ${index === currentSlide ? 'active' : ''}`}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            quality={85}
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span>✓ NABH Certified</span>
          <span className="divider">|</span>
          <span>Since 2010</span>
        </div>

        <h1>Your Vision, Our Care</h1>
        <p className="hero-subtitle">Saraswati Eye Care Centre, Jind</p>
        <p className="hero-desc">
          Advanced eye care with compassion. Trusted by 50,000+ patients.
        </p>

        <div className="hero-actions">
          <Link href="/appointment" className="btn-primary">
            Book Appointment
          </Link>
          <a href="tel:+919729236700" className="btn-secondary">
            Call: +91 97292-36700
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 85vh;
          min-height: 500px;
          max-height: 750px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease;
        }

        .hero-bg.active {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(113, 87, 160, 0.85) 0%,
            rgba(113, 87, 160, 0.7) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          padding: 0 20px;
          max-width: 700px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.15);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .hero-badge .divider {
          opacity: 0.5;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin: 0 0 12px;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.95;
          margin: 0 0 8px;
          font-weight: 500;
        }

        .hero-desc {
          font-size: 1.1rem;
          opacity: 0.85;
          margin: 0 0 32px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #FFD600;
          color: #5a4a7f;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #fff;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          border: 2px solid rgba(255, 255, 255, 0.5);
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: white;
          color: #7157A0;
          border-color: white;
        }

        .indicators {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .indicator.active {
          background: #FFD600;
          width: 30px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .hero {
            height: 75vh;
            min-height: 450px;
          }
          h1 {
            font-size: 2.2rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .hero-desc {
            font-size: 1rem;
          }
          .btn-primary, .btn-secondary {
            padding: 12px 24px;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem;
          }
          .hero-badge {
            font-size: 0.8rem;
            padding: 8px 16px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
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
