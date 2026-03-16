'use client';

import { useEffect, useState, useRef } from 'react';

const stats = [
  { number: 15, suffix: '+', label: 'Years Experience', icon: 'fa-calendar-check' },
  { number: 50000, suffix: '+', label: 'Happy Patients', icon: 'fa-users' },
  { number: 4, suffix: '', label: 'Expert Doctors', icon: 'fa-user-md' },
  { number: 5000, suffix: '+', label: 'Surgeries Done', icon: 'fa-procedures' },
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
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">
              <i className={`fas ${stat.icon}`}></i>
            </div>
            <AnimatedNumber target={stat.number} suffix={stat.suffix} />
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .stats-section {
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          padding: 3rem 1rem;
          position: relative;
          overflow: hidden;
        }

        .stats-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .stat-item {
          text-align: center;
          color: white;
        }

        .stat-icon {
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 1.8rem;
          color: #FFD600;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .stat-item :global(.stat-number) {
          font-size: 2.8rem;
          font-weight: 700;
          color: #FFD600;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stat-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .stat-item :global(.stat-number) {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .stats-section {
            padding: 2rem 1rem;
          }

          .stat-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .stat-item :global(.stat-number) {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
}
