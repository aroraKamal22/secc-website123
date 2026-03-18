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
      <div className="section-header">
        <div className="section-tag">
          <span className="tag-dot"></span>
          Empanelments
        </div>
        <h2 className="section-title">Insurance & Government Partners</h2>
        <p className="section-desc">Cashless treatment available with 11+ leading insurance providers</p>
      </div>

      <div className="logos-container">
        <div className="logos-track">
          {[...insurancePartners, ...insurancePartners].map((partner, index) => (
            <div key={index} className="logo-card">
              <div className="logo-icon">
                <i className="fas fa-hospital-alt"></i>
              </div>
              <span className="logo-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="badges-row">
        <div className="badge">
          <i className="fas fa-check-circle"></i>
          <span>NABH Accredited</span>
        </div>
        <div className="badge">
          <i className="fas fa-check-circle"></i>
          <span>Haryana Govt. Empanelled</span>
        </div>
        <div className="badge">
          <i className="fas fa-check-circle"></i>
          <span>100% Cashless Treatment</span>
        </div>
      </div>

      <style jsx>{`
        .insurance-section {
          padding: 60px 20px;
          background: linear-gradient(180deg, #1a1230 0%, #0f0a1f 100%);
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(113, 87, 160, 0.2);
          border: 1px solid rgba(113, 87, 160, 0.3);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          color: #a78bfa;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .tag-dot {
          width: 8px;
          height: 8px;
          background: #FFD600;
          border-radius: 50%;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: white;
          margin: 0 0 15px;
        }

        .section-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .logos-container {
          max-width: 100%;
          overflow: hidden;
          margin: 0 auto 50px;
          padding: 20px 0;
          mask-image: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
        }

        .logos-track {
          display: flex;
          gap: 25px;
          animation: scroll 40s linear infinite;
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

        .logo-card {
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 25px 35px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          min-width: 180px;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
        }

        .logo-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(113, 87, 160, 0.5);
          transform: translateY(-5px);
        }

        .logo-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7157A0, #9b7bc7);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }

        .logo-name {
          font-size: 0.9rem;
          color: white;
          font-weight: 600;
          text-align: center;
        }

        .badges-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.3), rgba(113, 87, 160, 0.1));
          border: 1px solid rgba(113, 87, 160, 0.3);
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .badge:hover {
          background: linear-gradient(135deg, #7157A0, #9b7bc7);
          transform: translateY(-3px);
        }

        .badge i {
          color: #FFD600;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .insurance-section {
            padding: 40px 15px;
            overflow-x: hidden;
          }

          .section-header {
            margin-bottom: 25px;
          }

          .section-tag {
            padding: 8px 16px;
            font-size: 0.8rem;
            margin-bottom: 15px;
          }

          .section-title {
            font-size: 1.5rem;
            line-height: 1.3;
          }

          .section-desc {
            font-size: 0.9rem;
            padding: 0 10px;
          }

          .logos-container {
            margin-bottom: 30px;
            padding: 15px 0;
            overflow: hidden;
          }

          .logos-track {
            gap: 12px;
            animation-duration: 25s;
          }

          .logo-card {
            padding: 14px 16px;
            min-width: 120px;
            border-radius: 12px;
            gap: 8px;
          }

          .logo-icon {
            width: 42px;
            height: 42px;
            border-radius: 10px;
            font-size: 1.1rem;
          }

          .logo-name {
            font-size: 0.75rem;
          }

          .badges-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            padding: 0;
            margin: 0;
          }

          .badge {
            padding: 10px 14px;
            font-size: 0.75rem;
            border-radius: 12px;
            white-space: nowrap;
          }

          .badge i {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .insurance-section {
            padding: 30px 12px;
          }

          .section-title {
            font-size: 1.3rem;
          }

          .section-desc {
            font-size: 0.85rem;
          }

          .logo-card {
            padding: 12px 14px;
            min-width: 110px;
          }

          .logo-icon {
            width: 38px;
            height: 38px;
            font-size: 1rem;
          }

          .logo-name {
            font-size: 0.7rem;
          }

          .badges-row {
            gap: 6px;
          }

          .badge {
            padding: 8px 12px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}
