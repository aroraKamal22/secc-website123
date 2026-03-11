'use client';

import Link from 'next/link';

const services = [
  {
    icon: '👁️',
    title: 'Cataract Surgery',
    desc: 'Advanced phaco surgery with premium IOL options',
    href: '/services#cataract',
  },
  {
    icon: '🔬',
    title: 'Retina Services',
    desc: 'Comprehensive retinal diagnosis and treatment',
    href: '/services#retina',
  },
  {
    icon: '💧',
    title: 'Glaucoma',
    desc: 'Early detection and advanced management',
    href: '/services#glaucoma',
  },
  {
    icon: '👶',
    title: 'Pediatric Eye Care',
    desc: 'Specialized care for children\'s eye health',
    href: '/services#pediatric',
  },
  {
    icon: '👓',
    title: 'Refractive Services',
    desc: 'Specs removal and vision correction',
    href: '/services#refractive',
  },
  {
    icon: '🩺',
    title: 'Eye Examination',
    desc: 'Comprehensive eye checkup and diagnosis',
    href: '/services#examination',
  },
];

export default function ServicesGrid() {
  return (
    <section className="services">
      <div className="container">
        <span className="label">Our Services</span>
        <h2>Comprehensive Eye Care</h2>
        <p className="subtitle">All eye care services under one roof</p>

        <div className="grid">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="service-card">
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Link>
          ))}
        </div>

        <div className="view-all">
          <Link href="/services" className="view-all-link">
            View All Services →
          </Link>
        </div>
      </div>

      <style jsx>{`
        .services {
          padding: 80px 20px;
          background: #f9f8fc;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
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
          margin: 0 0 8px;
          font-weight: 700;
        }

        .subtitle {
          color: #666;
          font-size: 1.05rem;
          margin: 0 0 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .service-card {
          background: white;
          padding: 32px 24px;
          border-radius: 16px;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s;
          border: 1px solid #eee;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.12);
          border-color: #7157A0;
        }

        .icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 16px;
        }

        .service-card h3 {
          font-size: 1.1rem;
          color: #1a1a2e;
          margin: 0 0 8px;
          font-weight: 600;
        }

        .service-card p {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .view-all {
          text-align: center;
        }

        .view-all-link {
          color: #7157A0;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
        }

        .view-all-link:hover {
          color: #5a4a7f;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services {
            padding: 60px 20px;
          }
          h2 {
            font-size: 1.8rem;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
