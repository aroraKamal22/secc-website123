'use client';

import Link from 'next/link';

const features = [
  { icon: '🏆', title: 'NABH Certified', desc: 'First certified eye hospital in Jind' },
  { icon: '👨‍⚕️', title: 'Expert Doctors', desc: '4 super-specialist eye surgeons' },
  { icon: '🔬', title: 'Advanced Technology', desc: 'Latest diagnostic equipment' },
  { icon: '💳', title: 'Cashless Treatment', desc: 'Ayushman, ECHS & major TPAs' },
  { icon: '⭐', title: '4.9 Rating', desc: 'Highest rated in the region' },
  { icon: '🏥', title: '15+ Years', desc: 'Trusted since 2010' },
];

export default function WhyChooseUs() {
  return (
    <section className="why-us">
      <div className="container">
        <span className="label">Why Choose Us</span>
        <h2>Trusted Eye Care in Jind</h2>

        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <span className="icon">{feature.icon}</span>
              <div className="content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta">
          <Link href="/about" className="link">Learn more about us →</Link>
        </div>
      </div>

      <style jsx>{`
        .why-us {
          padding: 80px 20px;
          background: #7157A0;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .label {
          display: inline-block;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        h2 {
          font-size: 2.2rem;
          color: white;
          margin: 0 0 40px;
          font-weight: 700;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .feature {
          background: rgba(255, 255, 255, 0.1);
          padding: 24px 20px;
          border-radius: 12px;
          text-align: left;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          backdrop-filter: blur(10px);
        }

        .icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .content h3 {
          font-size: 1rem;
          color: white;
          margin: 0 0 4px;
          font-weight: 600;
        }

        .content p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.4;
        }

        .cta {
          text-align: center;
        }

        .link {
          color: #FFD600;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
        }

        .link:hover {
          color: white;
        }

        @media (max-width: 800px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .why-us {
            padding: 60px 20px;
          }
          h2 {
            font-size: 1.8rem;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .feature {
            padding: 20px 16px;
          }
        }
      `}</style>
    </section>
  );
}
