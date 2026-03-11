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

const quickServices = [
  { icon: '👁️', label: 'Cataract', href: '/services#cataract' },
  { icon: '🔬', label: 'Retina', href: '/services#vitreoretinal' },
  { icon: '👶', label: 'Pediatric', href: '/services#pediatric' },
  { icon: '💧', label: 'Glaucoma', href: '/services#glaucoma' },
];

export default function HeroSlider() {
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

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero-slider-wrapper">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Animated Background Elements */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Content Overlay */}
      <div className="hero-content">
        <div className="hero-badge-wrap">
          <span className="hero-badge">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            NABH Certified Eye Hospital
          </span>
          <span className="hero-badge-secondary">Since 2006</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">Your Vision,</span>
          <span className="title-line title-highlight">Our Priority</span>
        </h1>

        <p className="hero-subtitle">Saraswati Eye Care Centre, Jind</p>

        <p className="hero-desc">
          Leading super-speciality eye hospital with world-class technology and compassionate care.
          Trusted by <strong>50,000+</strong> patients across Haryana.
        </p>

        <div className="hero-buttons">
          <Link href="/appointment" className="hero-btn-primary">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Book Appointment
          </Link>
          <a href="tel:+919729236700" className="hero-btn-secondary">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Quick Services */}
        <div className="quick-services">
          <span className="quick-label">Quick Access:</span>
          <div className="quick-items">
            {quickServices.map((service, i) => (
              <Link key={i} href={service.href} className="quick-item">
                <span className="quick-icon">{service.icon}</span>
                <span className="quick-text">{service.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Stats Card */}
      <div className="hero-stats-card">
        <div className="stats-header">
          <span className="stats-icon">🏆</span>
          <span>Why Choose Us?</span>
        </div>
        <div className="stats-list">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-text">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-text">Expert Doctors</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-text">Happy Patients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9</span>
            <span className="stat-text">Google Rating</span>
          </div>
        </div>
        <Link href="/about" className="stats-link">
          Learn More →
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="hero-nav hero-nav-prev" aria-label="Previous slide">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={nextSlide} className="hero-nav hero-nav-next" aria-label="Next slide">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .hero-slider-wrapper {
          position: relative;
          width: 100%;
          height: calc(100vh - 100px);
          min-height: 600px;
          max-height: 900px;
          overflow: hidden;
          background: #1a1a2e;
        }

        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(1.1);
          transition: opacity 0.7s ease-in-out, transform 6s ease-out;
          z-index: 1;
        }

        .hero-slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(113, 87, 160, 0.92) 0%,
            rgba(113, 87, 160, 0.75) 40%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: 5;
        }

        .hero-bg-shapes {
          position: absolute;
          inset: 0;
          z-index: 6;
          overflow: hidden;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 214, 0, 0.08);
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: -50px;
          left: 10%;
          animation: float 10s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 200px;
          height: 200px;
          top: 40%;
          right: 25%;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        .hero-content {
          position: absolute;
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          max-width: 600px;
          color: white;
        }

        .hero-badge-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(255, 214, 0, 0.25), rgba(255, 214, 0, 0.15));
          border: 1px solid rgba(255, 214, 0, 0.5);
          color: #FFD600;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          animation: fadeInDown 0.8s ease-out;
        }

        .hero-badge-secondary {
          background: rgba(255,255,255,0.15);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          animation: fadeInDown 0.8s ease-out 0.1s both;
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          margin: 0 0 15px;
          line-height: 1.1;
          animation: fadeInUp 0.8s ease-out;
        }

        .title-line {
          display: block;
        }

        .title-highlight {
          background: linear-gradient(135deg, #FFD600, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255,255,255,0.9);
          margin: 0 0 15px;
          font-weight: 500;
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }

        .hero-desc {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0 0 25px;
          line-height: 1.7;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-desc strong {
          color: #FFD600;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 30px;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #FFD600, #FFC107);
          color: #5a4a7a;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 25px rgba(255, 214, 0, 0.4);
        }

        .hero-btn-primary:hover {
          background: linear-gradient(135deg, #FFC107, #FFD600);
          transform: translateY(-3px);
          box-shadow: 0 8px 35px rgba(255, 214, 0, 0.5);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid rgba(255,255,255,0.3);
        }

        .hero-btn-secondary:hover {
          background: white;
          color: #7157A0;
          border-color: white;
        }

        .quick-services {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .quick-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .quick-items {
          display: flex;
          gap: 10px;
        }

        .quick-item {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.1);
          padding: 8px 14px;
          border-radius: 25px;
          text-decoration: none;
          color: white;
          font-size: 0.85rem;
          transition: all 0.3s;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .quick-item:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        .quick-icon {
          font-size: 1rem;
        }

        /* Stats Card */
        .hero-stats-card {
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 30px;
          width: 280px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: fadeInRight 0.8s ease-out 0.5s both;
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateY(-50%) translateX(30px); }
          to { opacity: 1; transform: translateY(-50%) translateX(0); }
        }

        .stats-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
          font-weight: 700;
          color: #7157A0;
          font-size: 1.1rem;
        }

        .stats-icon {
          font-size: 1.5rem;
        }

        .stats-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: #7157A0;
          line-height: 1;
        }

        .stat-text {
          font-size: 0.75rem;
          color: #888;
          margin-top: 4px;
          display: block;
        }

        .stats-link {
          display: block;
          text-align: center;
          color: #7157A0;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 12px;
          background: #f8f6fc;
          border-radius: 12px;
          transition: all 0.3s;
        }

        .stats-link:hover {
          background: #7157A0;
          color: white;
        }

        .hero-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.3);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s;
        }

        .hero-nav:hover {
          background: rgba(255,255,255,0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .hero-nav-prev { left: 20px; }
        .hero-nav-next { right: 340px; }

        .hero-indicators {
          position: absolute;
          bottom: 30px;
          left: 5%;
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .hero-indicator {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: rgba(255,255,255,0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-indicator.active {
          width: 40px;
          background: linear-gradient(135deg, #FFD600, #FFC107);
          box-shadow: 0 0 20px rgba(255, 214, 0, 0.6);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: white;
          opacity: 0.7;
          font-size: 0.8rem;
          animation: bounce 2s infinite;
        }

        .scroll-arrow {
          width: 30px;
          height: 30px;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1200px) {
          .hero-stats-card {
            display: none;
          }
          .hero-nav-next { right: 20px; }
        }

        @media (max-width: 900px) {
          .hero-slider-wrapper {
            height: 85vh;
            min-height: 650px;
          }
          .hero-content {
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 90%;
            max-width: 500px;
          }
          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(113, 87, 160, 0.8) 0%,
              rgba(113, 87, 160, 0.9) 100%
            );
          }
          .hero-title { font-size: 2.8rem; }
          .hero-subtitle { font-size: 1.1rem; }
          .hero-buttons { justify-content: center; }
          .quick-services { justify-content: center; }
          .hero-badge-wrap { justify-content: center; }
          .hero-nav { display: none; }
          .hero-indicators { left: 50%; transform: translateX(-50%); }
          .scroll-indicator { display: none; }
        }

        @media (max-width: 500px) {
          .hero-title { font-size: 2.2rem; }
          .hero-subtitle { font-size: 1rem; }
          .hero-desc { font-size: 0.95rem; }
          .hero-btn-primary, .hero-btn-secondary {
            padding: 14px 24px;
            font-size: 0.9rem;
            width: 100%;
            justify-content: center;
          }
          .quick-services { display: none; }
        }
      `}</style>
    </section>
  );
}
