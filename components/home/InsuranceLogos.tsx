'use client';

const insurancePartners = [
  { name: 'Haryana Government', logo: '/images/government.png' },
  { name: 'ECHS', logo: '/images/echs.png' },
  { name: 'PM-JAY (Ayushman Bharat)', logo: '/images/pmjay.png' },
  { name: 'Star Health Insurance', logo: '/images/StarHealth.png' },
  { name: 'Medi Assist', logo: '/images/mediaassist.png' },
  { name: 'ICICI Lombard', logo: '/images/icicilombard.png' },
  { name: 'Aditya Birla Health Insurance', logo: '/images/adityabirla.png' },
  { name: 'Manipal Cigna', logo: '/images/manipalcigna.png' },
  { name: 'Max Bupa (Niva Bupa)', logo: '/images/maxbupa.png' },
  { name: 'Safeway TPA', logo: '/images/rakshatpa.png' },
  { name: 'Chola MS Insurance', logo: '/images/chola.png' },
];

export default function InsuranceLogos() {
  return (
    <section className="insurance-section">
      <h2 className="section-title">Insurance & Empanelment Partners</h2>
      <p className="section-subtitle">Cashless treatment available with leading insurance providers</p>

      <div className="logos-container">
        <div className="logos-track">
          {[...insurancePartners, ...insurancePartners].map((partner, index) => (
            <div key={index} className="logo-item">
              <div className="logo-box">
                <i className="fas fa-hospital-alt logo-placeholder"></i>
                <span>{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="empanelment-badges">
        <div className="badge">
          <i className="fas fa-check-circle"></i>
          <span>NABH Certified</span>
        </div>
        <div className="badge">
          <i className="fas fa-check-circle"></i>
          <span>Haryana Govt. Empanelled</span>
        </div>
        <div className="badge">
          <i className="fas fa-check-circle"></i>
          <span>Cashless Treatment</span>
        </div>
      </div>

      <style jsx>{`
        .insurance-section {
          padding: 4rem 1rem;
          background: #f8f6fc;
          text-align: center;
        }

        .section-subtitle {
          color: #666;
          font-size: 1.1rem;
          margin-top: -2rem;
          margin-bottom: 2.5rem;
        }

        .logos-container {
          max-width: 100%;
          overflow: hidden;
          margin: 0 auto 2rem;
          padding: 1rem 0;
        }

        .logos-track {
          display: flex;
          gap: 2rem;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .logos-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-item {
          flex-shrink: 0;
        }

        .logo-box {
          background: white;
          padding: 1.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          min-width: 150px;
          transition: all 0.3s ease;
        }

        .logo-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.15);
        }

        .logo-placeholder {
          font-size: 2.5rem;
          color: #7157A0;
        }

        .logo-box span {
          font-size: 0.85rem;
          color: #444;
          font-weight: 500;
        }

        .empanelment-badges {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .badge i {
          color: #FFD600;
        }

        @media (max-width: 768px) {
          .section-subtitle {
            font-size: 0.95rem;
            margin-top: -1.5rem;
          }

          .logo-box {
            padding: 1rem 1.5rem;
            min-width: 120px;
          }

          .logo-placeholder {
            font-size: 2rem;
          }

          .empanelment-badges {
            gap: 0.75rem;
          }

          .badge {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .insurance-section {
            padding: 3rem 0.5rem;
          }

          .badge {
            font-size: 0.75rem;
            padding: 0.5rem 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
