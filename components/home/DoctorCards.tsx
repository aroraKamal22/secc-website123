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
    qualifications: 'MBBS (PGIMS Rohtak), MS Ophthalmology (GMC Patiala), Fellowship in Glaucoma (Aravind Eye Hospital, Madurai)',
    experience: '17+ Years',
    description: 'Dr. Rajesh Garg is the visionary founder and chairman of Saraswati Eye Care Centre, Jind. A distinguished anterior segment surgeon with a passion for innovation, he completed his MBBS from PGIMS Rohtak, MS in Ophthalmology from GMC Patiala, and Fellowship in Glaucoma from the world-renowned Aravind Eye Hospital, Madurai. Inspired by his grandmother Saraswati Devi, he established this centre which expanded to its current state-of-the-art premises in 2016. Dr. Garg has a special interest in advanced, customized cataract surgeries, using cutting-edge technologies to provide high-definition visual outcomes tailored to each patient. His love for technology and innovation reflects in every aspect of the hospital\'s infrastructure and clinical services. Under his leadership, Saraswati Eye Care Centre has evolved into a super-speciality eye hospital. He envisions expanding the legacy by establishing a world-class super-speciality eye hospital in Haryana and scaling advanced eye care across India.',
    specializations: ['Customized Cataract Surgery', 'Phacoemulsification', 'Premium IOL Implantation', 'FLACS (Femto Laser Cataract)', 'Glaucoma Management'],
    achievements: ['Founded First NABH Certified Eye Hospital in Jind', 'Fellowship from Aravind Eye Hospital', 'Pioneer in AI-based IOL Selection', '50,000+ Happy Patients'],
  },
  {
    name: 'Dr. Ajay Garg',
    designation: 'Vice Chairman & Vitreo-Retina Surgeon',
    specialty: 'Vitreo-Retinal Surgeon',
    image: '/images/Saraswati DR Ajay Garg[1].png',
    qualifications: 'MBBS, DOMS Ophthalmology (PGIMS Rohtak), Fellowship in Vitreo-Retina (M.M. Joshi Eye Institute, Hubli)',
    experience: '10+ Years',
    description: 'Dr. Ajay Garg is the Vice Chairman and senior Vitreo-Retina Surgeon at Saraswati Eye Care Centre. A dynamic and highly skilled surgeon, Dr. Garg is known for his speed, precision, and courage in performing complex retinal surgeries. He completed both his MBBS and DOMS in Ophthalmology from the prestigious PGIMS, Rohtak, and pursued advanced training in Vitreo-Retinal surgery from M.M. Joshi Eye Institute, one of India\'s premier retina training centers in Hubli. Dr. Garg joined Saraswati Eye Care Centre in 2017, significantly expanding the hospital\'s capabilities in managing retinal diseases such as diabetic retinopathy, retinal detachments, macular disorders, and intraocular infections. He is deeply committed to restoring sight in some of the most challenging cases and has earned a reputation for surgical excellence and compassionate care.',
    specializations: ['Vitreo-Retinal Surgery', 'Diabetic Retinopathy', 'Retinal Detachment Repair', 'Macular Disorders', 'Intraocular Infections'],
    achievements: ['Vice Chairman of SECC', 'Fellowship from M.M. Joshi Eye Institute', 'Expert in Complex Retinal Surgeries', 'Known for Speed & Precision'],
  },
  {
    name: 'Dr. Khushboo Gupta',
    designation: 'Pediatric Ophthalmologist',
    specialty: 'Pediatric Eye & Squint Specialist',
    image: '/images/Saraswati DR Khushboo Gupta[1].png',
    qualifications: 'MBBS (GMC Patiala), MS Ophthalmology (GMC Amritsar), Fellowship in Pediatric Ophthalmology & Strabismus (Sankara Eye Hospital, Bangalore)',
    experience: '10+ Years',
    description: 'Dr. Khushboo Gupta is a skilled Pediatric Ophthalmologist and Strabismus Specialist at Saraswati Eye Care Centre. She offers a gentle, child-friendly approach to treating a wide range of pediatric eye conditions including refractive errors, amblyopia (lazy eye), squint, and congenital cataracts. She completed her MBBS from GMC Patiala, MS in Ophthalmology from GMC Amritsar, and Fellowship from the prestigious Sankara Eye Hospital, Bangalore, where she received extensive training in both medical and surgical management of childhood eye disorders. In addition to her pediatric expertise, Dr. Khushboo is a highly efficient cataract surgeon with a strong track record using modern phacoemulsification techniques. She has been instrumental in expanding the hospital\'s subspecialty offerings and is committed to providing quality, ethical care to children, adults, and elderly patients alike.',
    specializations: ['Pediatric Eye Care', 'Squint (Strabismus) Surgery', 'Amblyopia Treatment', 'Congenital Cataracts', 'Phacoemulsification Cataract Surgery'],
    achievements: ['Fellowship from Sankara Eye Hospital Bangalore', 'Expert in Pediatric & Adult Cataract Surgery', 'Child-Friendly Care Excellence', 'Subspecialty Expansion Leader'],
  },
  {
    name: 'Dr. Yogendra Gupta',
    designation: 'Consultant Anaesthesiologist',
    specialty: 'Ophthalmic Anaesthesia',
    image: '/images/dryogendergupt.png',
    qualifications: 'MBBS (SBHGMC Dhule), DA (Lady Hardinge Medical College, Delhi), DNB Anaesthesiology (Sterling Hospitals, Ahmedabad)',
    experience: '12+ Years',
    description: 'Dr. Yogendra Gupta is a highly qualified and experienced Consultant Anaesthesiologist at Saraswati Eye Care Centre. With advanced training and a calm, precise approach, he ensures the highest standards of safety and comfort for surgical patients. He completed his MBBS from SBHGMC, Dhule (Maharashtra), followed by a Diploma in Anaesthesia from Lady Hardinge Medical College, New Delhi, and DNB in Anaesthesiology from Sterling Hospitals, Ahmedabad. Dr. Gupta has previously served at premier institutions including Medanta – The Medicity and Artemis Hospital, Gurugram, where he gained extensive experience in managing high-risk cases, advanced anesthesia techniques, and critical care. At Saraswati Eye Care Centre, he leads the Pre-Anaesthesia Check-up (PAC) process, assesses patient fitness for surgery, manages perioperative care for high-risk patients, and ensures complete surgical comfort. His presence brings an added layer of safety, especially in pediatric and geriatric cases requiring general anaesthesia.',
    specializations: ['Pre-Anaesthesia Check-up (PAC)', 'Pediatric Anaesthesia', 'Geriatric Anaesthesia', 'High-Risk Patient Management', 'Perioperative Care'],
    achievements: ['Ex-Medanta & Artemis Hospital', 'DNB from Sterling Hospitals', 'DA from Lady Hardinge Medical College', 'Expert in Critical Care'],
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
          padding: 60px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          position: relative;
          overflow: hidden;
        }

        .doctors-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .doctors-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: rgba(255, 214, 0, 0.08);
          border-radius: 50%;
        }

        .doctors-container {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          color: white;
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
          color: #FFD600;
        }

        .section-header p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.1rem;
          margin: 0;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .doctor-card {
          position: relative;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .doctor-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .card-glow {
          display: none;
        }

        .card-image-section {
          position: relative;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8f6fc 0%, #ede9f7 100%);
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
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 4px solid white;
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.2);
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
          box-shadow: 0 4px 15px rgba(255, 214, 0, 0.4);
        }

        .card-content {
          padding: 20px;
          text-align: center;
          background: white;
        }

        .card-content h3 {
          font-size: 1.15rem;
          color: #7157A0;
          margin: 0 0 5px;
          font-weight: 700;
        }

        .designation {
          color: #FFD600;
          font-size: 0.85rem;
          font-weight: 700;
          margin: 0 0 3px;
          text-shadow: 0 0 1px rgba(0,0,0,0.1);
        }

        .specialty {
          color: #666;
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
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.1), rgba(139, 107, 196, 0.15));
          color: #7157A0;
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .view-profile-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border: none;
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(113, 87, 160, 0.4);
        }

        .view-all-wrap {
          text-align: center;
          margin-top: 50px;
        }

        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s;
          padding: 14px 35px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
        }

        .view-all-link:hover {
          background: white;
          color: #7157A0;
          gap: 15px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(113, 87, 160, 0.9);
          backdrop-filter: blur(10px);
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
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(113, 87, 160, 0.1);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7157A0;
          z-index: 10;
          transition: all 0.3s;
        }

        .modal-close:hover {
          background: #7157A0;
          color: white;
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
          border: 4px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .modal-title h2 {
          color: white;
          font-size: 1.5rem;
          margin: 0 0 5px;
        }

        .modal-designation {
          color: #FFD600;
          font-weight: 700;
          margin: 0 0 3px;
        }

        .modal-specialty {
          color: rgba(255, 255, 255, 0.85);
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
          background: linear-gradient(135deg, #f8f6fc 0%, #ede9f7 100%);
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

        .modal-achievements {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .modal-achievements h4 {
          color: #7157A0;
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
          color: #555;
          font-size: 0.9rem;
        }

        .achievement-item i {
          color: #FFD600;
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
          box-shadow: 0 8px 25px rgba(255, 214, 0, 0.4);
        }

        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(255, 214, 0, 0.5);
        }

        @media (max-width: 1100px) {
          .doctors-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .doctors-section {
            padding: 40px 15px;
          }

          .section-header {
            margin-bottom: 30px;
          }

          .section-header h2 {
            font-size: 1.8rem;
          }

          .section-header p {
            font-size: 0.95rem;
          }

          .section-tag {
            padding: 8px 18px;
            font-size: 0.8rem;
          }

          .doctors-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 15px;
            padding: 10px 5px 20px;
            margin: 0 -15px;
            padding-left: 15px;
            padding-right: 15px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .doctors-grid::-webkit-scrollbar {
            display: none;
          }

          .doctor-card {
            flex: 0 0 280px;
            scroll-snap-align: start;
            border-radius: 20px;
            background: linear-gradient(145deg, #ffffff 0%, #faf9fc 100%);
            border: 1px solid rgba(113, 87, 160, 0.1);
            box-shadow: 0 8px 32px rgba(113, 87, 160, 0.12);
            transition: all 0.3s ease;
          }

          .doctor-card:active {
            transform: scale(0.98);
          }

          .card-image-section {
            height: 170px;
            padding-top: 15px;
            background: linear-gradient(180deg, rgba(113, 87, 160, 0.08) 0%, rgba(139, 107, 196, 0.04) 100%);
            border-radius: 20px 20px 0 0;
          }

          .doctor-image {
            width: 110px;
            height: 110px;
          }

          .image-ring {
            width: 120px;
            height: 120px;
          }

          .card-content {
            padding: 16px;
          }

          .card-content h3 {
            font-size: 1.05rem;
          }

          .designation {
            font-size: 0.8rem;
          }

          .specialty {
            font-size: 0.75rem;
            margin-bottom: 12px;
          }

          .specializations {
            gap: 5px;
            margin-bottom: 12px;
          }

          .spec-tag {
            padding: 3px 8px;
            font-size: 0.65rem;
          }

          .view-profile-btn {
            padding: 8px 16px;
            font-size: 0.8rem;
            border-radius: 20px;
          }

          .experience-badge {
            padding: 5px 12px;
            font-size: 0.7rem;
          }

          .view-all-wrap {
            margin-top: 30px;
          }

          .view-all-link {
            padding: 12px 28px;
            font-size: 0.9rem;
          }

          /* Modal Mobile */
          .modal-overlay {
            padding: 15px;
            align-items: flex-end;
          }

          .modal-content {
            border-radius: 20px 20px 0 0;
            max-height: 85vh;
          }

          .modal-header {
            flex-direction: column;
            text-align: center;
            padding: 25px 20px;
            gap: 15px;
          }

          .modal-image {
            width: 80px;
            height: 80px;
          }

          .modal-title h2 {
            font-size: 1.3rem;
          }

          .modal-body {
            padding: 20px;
          }

          .modal-info-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .info-item {
            padding: 12px;
          }

          .info-icon {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
          }

          .info-value {
            font-size: 0.8rem;
          }

          .modal-description {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .specs-list {
            gap: 6px;
          }

          .spec-badge {
            padding: 6px 12px;
            font-size: 0.75rem;
          }

          .modal-footer {
            padding: 0 20px 20px;
          }

          .book-btn {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
            border-radius: 14px;
          }
        }

        @media (max-width: 480px) {
          .doctors-section {
            padding: 35px 12px;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }

          .doctor-card {
            flex: 0 0 260px;
          }

          .card-image-section {
            height: 150px;
          }

          .doctor-image {
            width: 95px;
            height: 95px;
          }
        }
      `}</style>
    </section>
  );
}
