'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready for Better Vision?</h2>
        <p>Book your appointment today</p>
        <div className="actions">
          <Link href="/appointment" className="btn-primary">
            Book Appointment
          </Link>
          <a href="tel:+919729236700" className="btn-secondary">
            Call: +91 97292-36700
          </a>
        </div>
      </div>

      <style jsx>{`
        .cta {
          padding: 60px 20px;
          background: linear-gradient(135deg, #FFD600 0%, #FFC107 100%);
        }

        .container {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        h2 {
          font-size: 2rem;
          color: #1a1a2e;
          margin: 0 0 8px;
          font-weight: 700;
        }

        p {
          font-size: 1.1rem;
          color: #555;
          margin: 0 0 24px;
        }

        .actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #7157A0;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #5a4a7f;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: white;
          color: #7157A0;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: #f8f6fc;
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .cta {
            padding: 50px 20px;
          }
          h2 {
            font-size: 1.6rem;
          }
          .actions {
            flex-direction: column;
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
