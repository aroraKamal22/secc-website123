'use client';

import { useEffect, useState, useRef } from 'react';

const stats = [
  { number: 15, suffix: '+', label: 'Years Experience', icon: 'fa-calendar-check' },
  { number: 50000, suffix: '+', label: 'Happy Patients', icon: 'fa-users' },
  { number: 4, suffix: '', label: 'Expert Doctors', icon: 'fa-user-md' },
  { number: 
    25000, suffix: '+', label: 'Surgeries Done', icon: 'fa-procedures' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString('en-IN');
    }
    return num;
  };

  return (
    <div ref={ref} className="stat-number">
      {formatNumber(count)}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-bg">
        <div className="gradient-blur"></div>
      </div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              <i className={`fas ${stat.icon}`}></i>
            </div>
            <AnimatedNumber target={stat.number} suffix={stat.suffix} />
            <div className="stat-label">{stat.label}</div>
            <div className="stat-line"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .stats-section {
          position: relative;
          padding: 60px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          overflow: hidden;
        }

        .stats-bg {
          position: absolute;
          inset: 0;
        }

        .gradient-blur {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 214, 0, 0.1) 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
          filter: blur(60px);
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          position: relative;
          z-index: 1;
        }

        .stat-card {
          text-align: center;
          padding: 35px 20px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .stat-card::before {
          display: none;
        }

        .stat-icon {
          width: 65px;
          height: 65px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          font-size: 1.6rem;
          color: #FFD600;
          transition: all 0.3s;
        }

        .stat-card:hover .stat-icon {
          background: white;
          color: #7157A0;
          transform: scale(1.1);
        }

        .stat-card :global(.stat-number) {
          font-size: 2.8rem;
          font-weight: 800;
          color: white;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .stat-line {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FFD600, transparent);
          margin: 12px auto 0;
          border-radius: 2px;
        }

        @media (max-width: 1024px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .stats-section {
            padding: 60px 15px;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .stat-card {
            padding: 30px 15px;
          }

          .stat-icon {
            width: 55px;
            height: 55px;
            font-size: 1.4rem;
          }

          .stat-card :global(.stat-number) {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
