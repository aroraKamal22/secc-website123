'use client';

import Link from 'next/link';

const highlights = [
  { icon: '🏆', text: 'NABH Certified' },
  { icon: '👨‍⚕️', text: '4 Specialists' },
  { icon: '⭐', text: '4.9 Google Rating' },
  { icon: '❤️', text: '50,000+ Patients' },
];

export default function AboutSection() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <span className="label">About Us</span>
          <h2>Excellence in Eye Care Since 2010</h2>
          <p>
            Saraswati Eye Care Centre is the most trusted eye hospital in Jind, Haryana.
            We are the <strong>first NABH-certified</strong> eye care hospital in the district,
            offering comprehensive eye care services with advanced technology and experienced specialists.
          </p>
          <p>
            Founded by Dr. Rajesh Garg, we have grown from a small clinic to a leading
            super-speciality eye centre, serving patients with compassion and precision.
          </p>

          <div className="highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="icon">{item.icon}</span>
                <span className="text">{item.text}</span>
              </div>
            ))}
          </div>

          <Link href="/about" className="learn-more">
            Learn More About Us →
          </Link>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 80px 20px;
          background: #fff;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
        }

        .about-content {
          text-align: center;
        }

        .label {
          display: inline-block;
          color: #7157A0;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        h2 {
          font-size: 2.2rem;
          color: #1a1a2e;
          margin: 0 0 24px;
          font-weight: 700;
        }

        p {
          color: #555;
          font-size: 1.05rem;
          line-height: 1.8;
          margin: 0 0 16px;
        }

        p strong {
          color: #7157A0;
        }

        .highlights {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin: 32px 0;
          flex-wrap: wrap;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f8f6fc;
          padding: 12px 20px;
          border-radius: 50px;
        }

        .icon {
          font-size: 1.2rem;
        }

        .text {
          font-size: 0.9rem;
          font-weight: 600;
          color: #333;
        }

        .learn-more {
          display: inline-block;
          color: #7157A0;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .learn-more:hover {
          color: #5a4a7f;
        }

        @media (max-width: 768px) {
          .about {
            padding: 60px 20px;
          }
          h2 {
            font-size: 1.8rem;
          }
          p {
            font-size: 1rem;
          }
          .highlights {
            gap: 12px;
          }
          .highlight-item {
            padding: 10px 16px;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.5rem;
          }
          .highlights {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
