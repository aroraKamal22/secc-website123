'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>

      <style jsx>{`
        .back-to-top {
          position: fixed;
          bottom: 90px;
          right: 25px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(113, 87, 160, 0.4);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .back-to-top:hover {
          background: linear-gradient(135deg, #5a4580 0%, #7157A0 100%);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(113, 87, 160, 0.5);
        }

        .back-to-top:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .back-to-top {
            bottom: 140px;
            right: 15px;
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
