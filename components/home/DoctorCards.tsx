'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const doctors = [
  {
    name: 'Dr. Rajesh Garg',
    designation: 'Founder & Chairman',
    specialty: 'Anterior Segment & Cataract Surgeon',
    image: '/images/sarswati_rajesh.png',
    qualifications: 'MBBS, MS (Ophthalmology), FICS, Fellowship in Phaco & IOL',
    experience: '17+ Years',
    description: 'Renowned anterior segment surgeon and expert in customized cataract surgery. Founded Saraswati Eye Care Centre and transformed it from a small clinic into a state-of-the-art super-speciality eye centre. Pioneer in introducing latest phacoemulsification techniques and premium IOL implantation in the region.',
    specializations: ['Phaco Cataract Surgery', 'Premium IOLs', 'FLACS (Femto Laser)', 'Refractive Surgery', 'Glaucoma Management'],
    achievements: ['50,000+ Successful Surgeries', 'Pioneer in FLACS Technology', 'International Fellowship Trained'],
  },
  {
    name: 'Dr. Ajay Garg',
    designation: 'Retina & Vitreous Specialist',
    specialty: 'Vitreo-Retinal Surgeon',
    image: '/images/Saraswati DR Ajay Garg[1].png',
    qualifications: 'MBBS, DOMS, DNB (Ophthalmology), Fellowship Vitreo-Retina',
    experience: '12+ Years',
    description: 'Expert vitreo-retina surgeon specializing in complex retinal surgeries, diabetic retinopathy management, and retinal detachment repairs. Skilled in advanced diagnostic techniques and intravitreal injections for various retinal disorders.',
    specializations: ['Retina Surgery', 'Diabetic Retinopathy', 'Retinal Detachment', 'Intravitreal Injections', 'Macular Disorders'],
    achievements: ['Advanced Retina Fellowship', 'Expert in Complex Retinal Cases', 'Latest OCT & Angiography'],
  },
  {
    name: 'Dr. Kamal Garg',
    designation: 'Glaucoma Specialist',
    specialty: 'Glaucoma & Anterior Segment',
    image: '/images/kamalgarg.png',
    qualifications: 'MBBS, MS (Ophthalmology), Fellowship in Glaucoma',
    experience: '10+ Years',
    description: 'Specialized in diagnosis and management of all types of glaucoma including medical management, laser procedures, and glaucoma surgeries. Expert in early detection and prevention of vision loss due to glaucoma using advanced diagnostic equipment.',
    specializations: ['Glaucoma Surgery', 'Laser Trabeculoplasty', 'Glaucoma Diagnosis', 'Visual Field Analysis', 'IOP Management'],
    achievements: ['Fellowship in Glaucoma', 'Advanced Glaucoma Lasers', 'Expert in Complex Glaucoma'],
  },
  {
    name: 'Dr. Khushboo Gupta',
    designation: 'Pediatric Ophthalmologist',
    specialty: 'Pediatric Eye & Squint Specialist',
    image: '/images/Saraswati DR Khushboo Gupta[1].png',
    qualifications: 'MBBS, MS (Ophthalmology), Fellowship in Pediatric Ophthalmology & Strabismus',
    experience: '10+ Years',
    description: 'Specialist in pediatric eye care with expertise in squint correction, amblyopia (lazy eye) treatment, and childhood eye disorders. Known for child-friendly approach and comprehensive vision screening programs for children.',
    specializations: ['Pediatric Eye Care', 'Squint Surgery', 'Amblyopia Treatment', 'ROP Screening', 'Vision Therapy'],
    achievements: ['Pediatric Fellowship Trained', 'Child-Friendly Approach', 'School Vision Programs'],
  },
  {
    name: 'Dr. Yogendra Gupta',
    designation: 'Consultant Anaesthesiologist',
    specialty: 'Ophthalmic Anaesthesia',
    image: '/images/dryogendergupt.png',
    qualifications: 'MBBS, DA, DNB (Anaesthesiology)',
    experience: '15+ Years',
    description: 'Highly experienced anaesthesiologist ensuring highest safety standards for all surgical procedures. Expert in ophthalmic anaesthesia including local, regional and general anaesthesia for eye surgeries with special focus on high-risk and pediatric patients.',
    specializations: ['Ophthalmic Anaesthesia', 'Pediatric Anaesthesia', 'High-Risk Patients', 'Sedation', 'Pain Management'],
    achievements: ['15000+ Safe Anaesthesia Cases', 'Expert in High-Risk Cases', 'Zero Complication Record'],
  },
];

type Doctor = {
  name: string;
  designation: string;
  specialty: string;
  image: string;
  qualifications: string;
  experience: string;
  description: string;
  specializations: string[];
  achievements?: string[];
};

export default function DoctorCards() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="doctors-section">
      <div className="doctors-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Expert Team
          </div>
          <h2>Meet Our <span className="gradient-text">Specialists</span></h2>
          <p>Highly qualified doctors dedicated to your eye health</p>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card" onClick={() => setSelectedDoctor(doctor)}>
              {/* Glow Effect */}
              <div className="card-glow"></div>

              {/* Image Section */}
              <div className="card-image-section">
                <div className="image-ring"></div>
                <div className="doctor-image">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={160}
                    height={160}
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
                  {doctor.specializations.slice(0, 3).map((spec, i) => (
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
                  <span className="info-icon"><i className="fas fa-graduation-cap"></i></span>
                  <div>
                    <span className="info-label">Qualifications</span>
                    <span className="info-value">{selectedDoctor.qualifications}</span>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><i className="fas fa-clock"></i></span>
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

              {selectedDoctor.achievements && (
                <div className="modal-achievements">
                  <h4>Achievements & Highlights</h4>
                  <div className="achievements-list">
                    {selectedDoctor.achievements.map((achievement, i) => (
                      <div key={i} className="achievement-item">
                        <i className="fas fa-check-circle"></i>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="book-btn"
                onClick={() => window.location.href = '/appointment'}
              >
                <i className="fas fa-calendar-check"></i>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .doctors-section {
          padding: 100px 20px;
          background: linear-gradient(180deg, #1a1230 0%, #0f0a1f 100%);
          position: relative;
          overflow: hidden;
        }

        .doctors-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(113, 87, 160, 0.3), transparent);
        }

        .doctors-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
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

        .section-header h2 {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin: 0 0 15px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FFD600, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1rem;
          margin: 0;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .doctor-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .doctor-card:hover {
          transform: translateY(-10px);
          border-color: rgba(113, 87, 160, 0.5);
          background: rgba(255, 255, 255, 0.06);
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(113, 87, 160, 0.4) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .doctor-card:hover .card-glow {
          opacity: 1;
        }

        .card-image-section {
          position: relative;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 20px;
        }

        .image-ring {
          position: absolute;
          width: 140px;
          height: 140px;
          border: 2px dashed rgba(113, 87, 160, 0.3);
          border-radius: 50%;
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .doctor-image {
          position: relative;
          z-index: 2;
          width: 130px;
          height: 130px;
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.3), rgba(139, 107, 196, 0.2));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.1);
        }

        .experience-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          color: #1a1a2e;
          padding: 6px 14px;
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
          font-size: 1.15rem;
          color: white;
          margin: 0 0 5px;
          font-weight: 700;
        }

        .designation {
          color: #FFD600;
          font-size: 0.85rem;
          font-weight: 600;
          margin: 0 0 3px;
        }

        .specialty {
          color: rgba(255, 255, 255, 0.5);
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
          background: rgba(113, 87, 160, 0.2);
          border: 1px solid rgba(113, 87, 160, 0.3);
          color: #a78bfa;
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
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-profile-btn:hover {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-color: transparent;
        }

        .view-all-wrap {
          text-align: center;
          margin-top: 50px;
        }

        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #FFD600;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s;
          padding: 12px 30px;
          border: 2px solid rgba(255, 214, 0, 0.3);
          border-radius: 50px;
        }

        .view-all-link:hover {
          background: rgba(255, 214, 0, 0.1);
          gap: 15px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: linear-gradient(180deg, #1a1230 0%, #0f0a1f 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          background: rgba(255, 255, 255, 0.1);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 10;
          transition: all 0.3s;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .modal-header {
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.3), rgba(139, 107, 196, 0.2));
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .modal-image {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid rgba(255, 255, 255, 0.2);
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
          color: rgba(255, 255, 255, 0.6);
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
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 15px;
          border-radius: 12px;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
        }

        .info-label {
          display: block;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 2px;
        }

        .info-value {
          font-size: 0.85rem;
          color: white;
          font-weight: 600;
        }

        .modal-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .modal-specs h4 {
          color: #FFD600;
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

        .modal-achievements {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-achievements h4 {
          color: #FFD600;
          margin: 0 0 12px;
          font-size: 1rem;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .achievement-item i {
          color: #4ade80;
          font-size: 1rem;
        }

        .modal-footer {
          padding: 0 25px 25px;
          text-align: center;
        }

        .book-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          color: #1a1a2e;
          padding: 14px 35px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 214, 0, 0.4);
        }

        @media (max-width: 1300px) {
          .doctors-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 900px) {
          .doctors-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .card-image-section {
            height: 180px;
          }
          .doctor-image {
            width: 110px;
            height: 110px;
          }
          .image-ring {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 600px) {
          .doctors-section {
            padding: 60px 15px;
          }
          .doctors-grid {
            grid-template-columns: 1fr;
            max-width: 350px;
            margin: 0 auto;
          }
          .section-header h2 { font-size: 2rem; }
          .modal-header { flex-direction: column; text-align: center; }
          .modal-info-row { grid-template-columns: 1fr; }
          .info-value { font-size: 0.8rem; }
        }
      `}</style>
    </section>
  );
}
