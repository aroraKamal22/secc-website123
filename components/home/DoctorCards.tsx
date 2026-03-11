'use client';

import Image from 'next/image';
import Link from 'next/link';

const doctors = [
  {
    name: 'Dr. Rajesh Garg',
    role: 'Founder & Cataract Specialist',
    experience: '15+ Years',
    image: '/images/sarswati_rajesh.png',
  },
  {
    name: 'Dr. Ajay Garg',
    role: 'Retina Specialist',
    experience: '10+ Years',
    image: '/images/Saraswati DR Ajay Garg[1].png',
  },
  {
    name: 'Dr. Khushboo Gupta',
    role: 'Pediatric Ophthalmologist',
    experience: '8+ Years',
    image: '/images/Saraswati DR Khushboo Gupta[1].png',
  },
  {
    name: 'Dr. Yogendra Gupta',
    role: 'Consultant Anaesthesiologist',
    experience: '12+ Years',
    image: '/images/dryogendergupt.png',
  },
];

export default function DoctorCards() {
  return (
    <section className="doctors">
      <div className="container">
        <span className="label">Our Team</span>
        <h2>Expert Eye Specialists</h2>
        <p className="subtitle">Experienced doctors dedicated to your eye health</p>

        <div className="grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="image-wrap">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={120}
                  height={120}
                  quality={90}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3>{doctor.name}</h3>
              <p className="role">{doctor.role}</p>
              <span className="experience">{doctor.experience}</span>
            </div>
          ))}
        </div>

        <div className="cta">
          <Link href="/appointment" className="book-btn">
            Book Appointment
          </Link>
        </div>
      </div>

      <style jsx>{`
        .doctors {
          padding: 80px 20px;
          background: white;
        }

        .container {
          max-width: 1000px;
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
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .doctor-card {
          background: #f9f8fc;
          padding: 32px 20px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s;
        }

        .doctor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.1);
        }

        .image-wrap {
          width: 100px;
          height: 100px;
          margin: 0 auto 16px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .doctor-card h3 {
          font-size: 1rem;
          color: #1a1a2e;
          margin: 0 0 4px;
          font-weight: 600;
        }

        .role {
          font-size: 0.85rem;
          color: #7157A0;
          margin: 0 0 8px;
          font-weight: 500;
        }

        .experience {
          display: inline-block;
          font-size: 0.75rem;
          color: #666;
          background: white;
          padding: 4px 12px;
          border-radius: 20px;
        }

        .cta {
          text-align: center;
        }

        .book-btn {
          display: inline-block;
          background: #7157A0;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .book-btn:hover {
          background: #5a4a7f;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .doctors {
            padding: 60px 20px;
          }
          h2 {
            font-size: 1.8rem;
          }
          .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .doctor-card {
            padding: 24px 16px;
          }
        }

        @media (max-width: 400px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
