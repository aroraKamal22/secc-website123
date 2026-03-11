'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const doctors = [
  {
    name: 'Dr. Rajesh Garg',
    designation: 'Founder & Chairman',
    specialty: 'Cataract & Glaucoma',
    image: '/images/sarswati_rajesh.png',
    qualifications: 'MBBS, MS Ophthalmology, Fellowship Glaucoma',
    experience: '15+ Years',
    description: 'Senior anterior segment surgeon with expertise in customized cataract surgery and glaucoma management.',
    specializations: ['Cataract Surgery', 'Glaucoma', 'Premium IOLs'],
  },
  {
    name: 'Dr. Ajay Garg',
    designation: 'Vice Chairman',
    specialty: 'Retina Specialist',
    image: '/images/Saraswati DR Ajay Garg[1].png',
    qualifications: 'MBBS, DOMS, Fellowship Vitreo-Retina',
    experience: '10+ Years',
    description: 'Expert vitreo-retina surgeon specializing in diabetic retinopathy and retinal detachment surgeries.',
    specializations: ['Retina Surgery', 'Diabetic Eye', 'Injections'],
  },
  {
    name: 'Dr. Khushboo Gupta',
    designation: 'Pediatric Ophthalmologist',
    specialty: 'Pediatric & Squint',
    image: '/images/Saraswati DR Khushboo Gupta[1].png',
    qualifications: 'MBBS, MS, Fellowship Pediatric',
    experience: '8+ Years',
    description: 'Specialist in pediatric eye care, squint correction, and amblyopia treatment with child-friendly approach.',
    specializations: ['Pediatric Eye', 'Squint', 'Lazy Eye'],
  },
  {
    name: 'Dr. Yogendra Gupta',
    designation: 'Consultant Anaesthesiologist',
    specialty: 'Anaesthesia',
    image: '/images/dryogendergupt.png',
    qualifications: 'MBBS, DA, DNB Anaesthesiology',
    experience: '12+ Years',
    description: 'Expert anaesthesiologist ensuring highest safety standards for all surgical procedures.',
    specializations: ['Eye Surgery', 'High-Risk', 'Pediatric'],
  },
];

export default function DoctorCards() {
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);

  return (
    <section className="doctors-section">
      <div className="doctors-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Expert Team</span>
          <h2>Meet Our <span className="highlight">Specialists</span></h2>
          <p>Highly qualified doctors dedicated to your eye health</p>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card" onClick={() => setSelectedDoctor(doctor)}>
              {/* Image Section */}
              <div className="card-image-section">
                <div className="image-bg"></div>
                <div className="doctor-image">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={180}
                    height={180}
                    quality={100}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="experience-badge">{doctor.experience}</div>
              </div>

              {/* Content Section */}
              <div className="card-content">
                <h3>{doctor.name}</h3>
                <p className="designation">{doctor.designation}</p>
                <p className="specialty">{doctor.specialty}</p>

                <div className="specializations">
                  {doctor.specializations.map((spec, i) => (
                    <span key={i} className="spec-tag">{spec}</span>
                  ))}
                </div>

                <button className="view-profile-btn">
                  View Profile
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="view-all-wrap">
          <Link href="/about#doctors" className="view-all-link">
            View All Team Members
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDoctor(null)}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-image">
                <Image
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  width={120}
                  height={120}
                  quality={100}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="modal-title">
                <h2>{selectedDoctor.name}</h2>
                <p className="modal-designation">{selectedDoctor.designation}</p>
                <p className="modal-specialty">{selectedDoctor.specialty}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-info-row">
                <div className="info-item">
                  <span className="info-icon">🎓</span>
                  <div>
                    <span className="info-label">Qualifications</span>
                    <span className="info-value">{selectedDoctor.qualifications}</span>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <div>
                    <span className="info-label">Experience</span>
                    <span className="info-value">{selectedDoctor.experience}</span>
                  </div>
                </div>
              </div>

              <p className="modal-description">{selectedDoctor.description}</p>

              <div className="modal-specs">
                <h4>Specializations</h4>
                <div className="specs-list">
                  {selectedDoctor.specializations.map((spec, i) => (
                    <span key={i} className="spec-badge">{spec}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Link href="/appointment" className="book-btn">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .doctors-section {
          padding: 80px 20px;
          background: linear-gradient(180deg, #f8f6fc 0%, #fff 100%);
        }

        .doctors-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 10px;
        }

        .highlight {
          color: #7157A0;
        }

        .section-header p {
          color: #666;
          font-size: 1.1rem;
          margin: 0;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .doctor-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(113, 87, 160, 0.1);
          cursor: pointer;
          transition: all 0.4s ease;
          border: 1px solid rgba(113, 87, 160, 0.08);
        }

        .doctor-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(113, 87, 160, 0.2);
        }

        .card-image-section {
          position: relative;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .image-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-radius: 0 0 50% 50% / 0 0 30px 30px;
        }

        .doctor-image {
          position: relative;
          z-index: 2;
          width: 150px;
          height: 150px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          overflow: hidden;
          padding: 5px;
        }

        .experience-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #FFD600;
          color: #5a4a7a;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          z-index: 3;
        }

        .card-content {
          padding: 20px;
          text-align: center;
        }

        .card-content h3 {
          font-size: 1.2rem;
          color: #1a1a2e;
          margin: 0 0 5px;
          font-weight: 700;
        }

        .designation {
          color: #7157A0;
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0 0 3px;
        }

        .specialty {
          color: #888;
          font-size: 0.8rem;
          margin: 0 0 15px;
        }

        .specializations {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          justify-content: center;
          margin-bottom: 15px;
        }

        .spec-tag {
          background: #f8f6fc;
          color: #7157A0;
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .view-profile-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 2px solid #7157A0;
          color: #7157A0;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-profile-btn:hover {
          background: #7157A0;
          color: white;
        }

        .view-all-wrap {
          text-align: center;
          margin-top: 40px;
        }

        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #7157A0;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .view-all-link:hover {
          gap: 15px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 24px;
          max-width: 550px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f5f5f5;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s;
        }

        .modal-close:hover {
          background: #eee;
        }

        .modal-header {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .modal-image {
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 5px;
        }

        .modal-title h2 {
          color: white;
          font-size: 1.5rem;
          margin: 0 0 5px;
        }

        .modal-designation {
          color: #FFD600;
          font-weight: 600;
          margin: 0 0 3px;
        }

        .modal-specialty {
          color: rgba(255,255,255,0.8);
          font-size: 0.9rem;
          margin: 0;
        }

        .modal-body {
          padding: 25px;
        }

        .modal-info-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 20px;
        }

        .info-item {
          display: flex;
          gap: 12px;
          background: #f8f6fc;
          padding: 15px;
          border-radius: 12px;
        }

        .info-icon {
          font-size: 1.5rem;
        }

        .info-label {
          display: block;
          font-size: 0.75rem;
          color: #888;
          margin-bottom: 2px;
        }

        .info-value {
          font-size: 0.85rem;
          color: #333;
          font-weight: 600;
        }

        .modal-description {
          color: #555;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .modal-specs h4 {
          color: #7157A0;
          margin: 0 0 12px;
          font-size: 1rem;
        }

        .specs-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .spec-badge {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .modal-footer {
          padding: 0 25px 25px;
          text-align: center;
        }

        .book-btn {
          display: inline-block;
          background: #FFD600;
          color: #5a4a7a;
          padding: 14px 35px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }

        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 214, 0, 0.4);
        }

        @media (max-width: 1100px) {
          .doctors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .doctors-grid {
            grid-template-columns: 1fr;
            max-width: 350px;
            margin: 0 auto;
          }
          .section-header h2 { font-size: 2rem; }
          .modal-header { flex-direction: column; text-align: center; }
          .modal-info-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
