'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const stats = [
  { number: '15+', label: 'Years of Excellence', icon: '📅' },
  { number: '50,000+', label: 'Happy Patients', icon: '😊' },
  { number: '10,000+', label: 'Surgeries Performed', icon: '🏥' },
  { number: '4', label: 'Expert Doctors', icon: '👨‍⚕️' },
];

const doctors = [
  {
    name: 'Dr. Rajesh Garg',
    role: 'Director & Senior Consultant',
    specialty: 'Anterior Segment, Cataract & Refractive Surgeon',
    image: '/images/doctor1.jpg',
    experience: '17+ Years',
    qualifications: 'MBBS, MS (Ophthalmology)',
    description: 'Pioneer in customized cataract surgery with premium IOLs and refractive surgery. Founder of Saraswati Eye Care Centre.',
  },
  {
    name: 'Dr. Ajay Garg',
    role: 'Vitreo-Retinal Surgeon',
    specialty: 'Retina & Vitreous Surgery',
    image: '/images/doctor2.jpg',
    experience: '15+ Years',
    qualifications: 'MBBS, MS, Fellowship (Retina)',
    description: 'Expert in diabetic retinopathy, retinal detachment, and macular surgeries.',
  },
  {
    name: 'Dr. Khushboo Gupta',
    role: 'Pediatric Ophthalmologist',
    specialty: 'Pediatric Eye Care & Squint',
    image: '/images/doctor4.jpg',
    experience: '10+ Years',
    qualifications: 'MBBS, MS, Fellowship (Pediatric)',
    description: 'Specialist in children\'s eye care, squint correction, and myopia control.',
  },
];

const specialties = [
  { icon: '👁️', title: 'Cataract Surgery', desc: 'Premium IOLs and HD vision solutions' },
  { icon: '🔬', title: 'Vitreo-Retinal Services', desc: 'Advanced retinal diagnosis & treatment' },
  { icon: '👶', title: 'Pediatric Ophthalmology', desc: 'Specialized care for children' },
  { icon: '💧', title: 'Glaucoma Management', desc: 'Early detection & treatment' },
  { icon: '👓', title: 'Refractive Services', desc: 'Contact lens & vision correction' },
  { icon: '🩺', title: 'Diabetic Eye Care', desc: 'Comprehensive diabetic screening' },
];

const values = [
  { icon: '🎯', title: 'Precision', desc: 'State-of-the-art technology for accurate diagnosis' },
  { icon: '💜', title: 'Compassion', desc: 'Patient-centered care with empathy' },
  { icon: '✨', title: 'Excellence', desc: 'Committed to the highest standards' },
  { icon: '🤝', title: 'Trust', desc: 'Transparent and ethical practices' },
];

const milestones = [
  { year: '2010', event: 'Founded as a small eye clinic in Jind', icon: '🏠' },
  { year: '2015', event: 'Expanded to full-fledged eye hospital', icon: '🏥' },
  { year: '2017', event: 'Introduced advanced retina services', icon: '🔬' },
  { year: '2019', event: 'Achieved NABH Certification', icon: '🏆' },
  { year: '2025', event: 'Introduced Paediatric Ophthalmology services', icon: '👶' },
];

const accreditations = [
  { name: 'NABH Certified', icon: '🏆', desc: 'National Accreditation Board for Hospitals' },
  { name: 'PM-JAY Empanelled', icon: '🏛️', desc: 'Ayushman Bharat Scheme' },
  { name: 'Haryana Govt', icon: '🏛️', desc: 'Haryana Government Health Scheme' },
  { name: 'ECHS Approved', icon: '⭐', desc: 'Ex-Servicemen Healthcare' },
  { name: 'All Major TPAs', icon: '🤝', desc: 'Insurance Partners' },
];

export default function AboutPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🏆</span>
            <span>NABH Certified Eye Hospital</span>
          </div>
          <h1>Saraswati Eye Care Centre</h1>
          <h2>Leading Super-Speciality Eye Hospital in Jind, Haryana</h2>
          <p>
            Where advanced technology meets compassionate care. We are committed to providing
            world-class eye care services with transparency, ethics, and precision.
          </p>
          <div className="hero-buttons">
            <Link href="/appointment" className="hero-btn primary">Book Appointment</Link>
            <Link href="/contact" className="hero-btn secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-badge">Our Story</span>
              <h2>A Legacy of Excellence in Eye Care</h2>
              <p>
                Saraswati Eye Care Centre is the most trusted and highest-rated eye hospital in Jind, Haryana.
                We take pride in being the <strong>first NABH-certified</strong> eye care hospital in District Jind,
                offering comprehensive, ethical, and technology-driven eye care services under one roof.
              </p>
              <p>
                Founded by <strong>Dr. Rajesh Garg</strong>, a renowned anterior segment surgeon and expert in
                customized cataract surgery, the hospital has grown from a small clinic into a state-of-the-art
                super-speciality eye centre, serving thousands of patients with compassion and precision.
              </p>
              <div className="story-features">
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>First NABH Certified Eye Hospital in Jind</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Highest Google Rated in the Region</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>State-of-the-Art Equipment</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Fellowship Trained Specialists</span>
                </div>
              </div>
            </div>
            <div className="story-visual">
              <div className="visual-card">
                <div className="visual-icon">👁️</div>
                <h3>Caring for Your Vision</h3>
                <p>Since 2010</p>
              </div>
              <div className="rating-badge">
                <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                <span className="rating-text">#1 Rated in Jind</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-card">
              <div className="vision-icon">🎯</div>
              <h3>Our Vision</h3>
              <p>
                To provide world-class, affordable, and comprehensive eye care services to all,
                and to become a leading name in super-speciality ophthalmology across North India.
              </p>
            </div>
            <div className="vision-card mission">
              <div className="vision-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional eye care with cutting-edge technology, while maintaining
                the highest standards of ethics, transparency, and patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="doctors-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Team</span>
            <h2>Meet Our Expert Doctors</h2>
            <p>Fellowship-trained specialists dedicated to your eye health</p>
          </div>

          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="doctor-card"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <div className="doctor-image">
                  <div className="image-placeholder">👨‍⚕️</div>
                  <div className="experience-badge">{doctor.experience}</div>
                </div>
                <div className="doctor-content">
                  <h3>{doctor.name}</h3>
                  <span className="doctor-role">{doctor.role}</span>
                  <span className="doctor-specialty">{doctor.specialty}</span>
                  <button className="view-profile">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge-light">What Drives Us</span>
            <h2 className="white">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">What We Offer</span>
            <h2>Our Specialties</h2>
            <p>Comprehensive eye care services under one roof</p>
          </div>
          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <div key={index} className="specialty-card">
                <div className="specialty-icon">{specialty.icon}</div>
                <h3>{specialty.title}</h3>
                <p>{specialty.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Growth</span>
            <h2>Our Journey</h2>
            <p>From a small clinic to a super-speciality hospital</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot">
                  <span>{milestone.icon}</span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="accreditations-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Recognition</span>
            <h2>Accreditations & Empanelments</h2>
          </div>
          <div className="accreditations-grid">
            {accreditations.map((item, index) => (
              <div key={index} className="accreditation-card">
                <span className="accreditation-icon">{item.icon}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to See the World Clearly?</h2>
            <p>Book an appointment today and take the first step towards better vision.</p>
            <div className="cta-buttons">
              <Link href="/appointment" className="cta-btn primary">Book Appointment</Link>
              <Link href="/contact" className="cta-btn secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Modal */}
      {selectedDoctor && (
        <div className="doctor-modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="doctor-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDoctor(null)}>✕</button>

            <div className="modal-header">
              <div className="modal-image">👨‍⚕️</div>
              <div className="modal-info">
                <h2>{selectedDoctor.name}</h2>
                <span className="modal-role">{selectedDoctor.role}</span>
                <span className="modal-qualifications">{selectedDoctor.qualifications}</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-detail">
                <span className="detail-icon">🎯</span>
                <div>
                  <strong>Specialty</strong>
                  <p>{selectedDoctor.specialty}</p>
                </div>
              </div>
              <div className="modal-detail">
                <span className="detail-icon">📅</span>
                <div>
                  <strong>Experience</strong>
                  <p>{selectedDoctor.experience}</p>
                </div>
              </div>
              <div className="modal-description">
                <p>{selectedDoctor.description}</p>
              </div>
            </div>

            <div className="modal-footer">
              <Link href="/appointment" className="modal-cta">
                Book Appointment with {selectedDoctor.name.split(' ').slice(0, 2).join(' ')}
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .about-hero {
          background: linear-gradient(135deg, #7157A0 0%, #9b7bc7 50%, #7157A0 100%);
          padding: 100px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          padding: 10px 24px;
          border-radius: 50px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          font-size: 18px;
        }

        .about-hero h1 {
          font-size: 52px;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
        }

        .about-hero h2 {
          font-size: 22px;
          color: #FFD700;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .about-hero p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .hero-btn.primary {
          background: #FFD700;
          color: #333;
        }

        .hero-btn.primary:hover {
          background: #FFC000;
          transform: translateY(-2px);
        }

        .hero-btn.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .hero-btn.secondary:hover {
          background: white;
          color: #7157A0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Stats Section */
        .stats-section {
          padding: 0 20px;
          margin-top: -50px;
          position: relative;
          z-index: 10;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .stat-card {
          text-align: center;
        }

        .stat-icon {
          font-size: 32px;
          display: block;
          margin-bottom: 10px;
        }

        .stat-number {
          display: block;
          font-size: 36px;
          font-weight: 800;
          color: #7157A0;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-badge {
          display: inline-block;
          background: #7157A0;
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .section-badge-light {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .section-header h2 {
          font-size: 40px;
          color: #7157A0;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .section-header h2.white {
          color: white;
        }

        .section-header p {
          font-size: 16px;
          color: #666;
        }

        /* Story Section */
        .story-section {
          padding: 100px 20px;
          background: white;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .story-content .section-badge {
          margin-bottom: 20px;
        }

        .story-content h2 {
          font-size: 36px;
          color: #7157A0;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .story-content p {
          color: #555;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .story-features {
          margin-top: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #555;
          font-size: 14px;
        }

        .feature-icon {
          color: #22c55e;
          font-weight: bold;
          font-size: 16px;
        }

        .story-visual {
          position: relative;
        }

        .visual-card {
          background: linear-gradient(135deg, #f8f6fc 0%, #efe8f8 100%);
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
        }

        .visual-icon {
          font-size: 80px;
          margin-bottom: 20px;
        }

        .visual-card h3 {
          font-size: 24px;
          color: #7157A0;
          margin-bottom: 8px;
        }

        .visual-card p {
          color: #666;
          font-size: 16px;
        }

        .rating-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: #FFD700;
          padding: 16px 24px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .rating-stars {
          display: block;
          font-size: 16px;
          margin-bottom: 4px;
        }

        .rating-text {
          font-weight: 700;
          color: #333;
          font-size: 14px;
        }

        /* Vision Section */
        .vision-section {
          padding: 80px 20px;
          background: #f8f6fc;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .vision-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }

        .vision-card.mission {
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
        }

        .vision-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .vision-card h3 {
          font-size: 24px;
          margin-bottom: 16px;
          font-weight: 700;
          color: #7157A0;
        }

        .vision-card.mission h3 {
          color: white;
        }

        .vision-card p {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
        }

        .vision-card.mission p {
          color: rgba(255, 255, 255, 0.9);
        }

        /* Doctors Section */
        .doctors-section {
          padding: 80px 20px;
          background: white;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        .doctor-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .doctor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.2);
        }

        .doctor-image {
          height: 180px;
          background: linear-gradient(135deg, #f8f6fc, #efe8f8);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .image-placeholder {
          font-size: 80px;
        }

        .experience-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #FFD700;
          color: #333;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .doctor-content {
          padding: 25px;
          text-align: center;
        }

        .doctor-content h3 {
          font-size: 20px;
          color: #333;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .doctor-role {
          display: block;
          font-size: 14px;
          color: #7157A0;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .doctor-specialty {
          display: block;
          font-size: 13px;
          color: #888;
          margin-bottom: 16px;
        }

        .view-profile {
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-profile:hover {
          background: linear-gradient(135deg, #5d4785, #7157A0);
        }

        /* Values Section */
        .values-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B7AB5 100%);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 35px 25px;
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }

        .value-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .value-card h3 {
          font-size: 20px;
          color: white;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .value-card p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        /* Specialties Section */
        .specialties-section {
          padding: 80px 20px;
          background: #f8f6fc;
        }

        .specialties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
        }

        .specialty-card {
          background: white;
          padding: 30px 20px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .specialty-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.15);
        }

        .specialty-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .specialty-card h3 {
          font-size: 16px;
          color: #7157A0;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .specialty-card p {
          font-size: 13px;
          color: #666;
        }

        /* Journey Section */
        .journey-section {
          padding: 80px 20px;
          background: white;
        }

        .timeline {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #7157A0, #9b7bc7);
          border-radius: 3px;
        }

        .timeline-item {
          display: flex;
          gap: 25px;
          margin-bottom: 30px;
          position: relative;
        }

        .timeline-dot {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
          z-index: 1;
        }

        .timeline-content {
          background: #f8f6fc;
          padding: 20px 25px;
          border-radius: 16px;
          flex: 1;
        }

        .timeline-year {
          display: inline-block;
          background: #7157A0;
          color: white;
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .timeline-content p {
          color: #555;
          margin: 0;
          font-size: 15px;
        }

        /* Accreditations Section */
        .accreditations-section {
          padding: 80px 20px;
          background: #f8f6fc;
        }

        .accreditations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .accreditation-card {
          background: white;
          padding: 35px 25px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .accreditation-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.15);
        }

        .accreditation-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 16px;
        }

        .accreditation-card h3 {
          font-size: 18px;
          color: #7157A0;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .accreditation-card p {
          font-size: 13px;
          color: #666;
        }

        /* CTA Section */
        .about-cta {
          padding: 80px 20px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          text-align: center;
        }

        .cta-content h2 {
          font-size: 40px;
          color: #333;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .cta-content p {
          font-size: 18px;
          color: #555;
          margin-bottom: 30px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-btn.primary {
          background: #7157A0;
          color: white;
        }

        .cta-btn.primary:hover {
          background: #5d4785;
          transform: translateY(-2px);
        }

        .cta-btn.secondary {
          background: white;
          color: #7157A0;
        }

        .cta-btn.secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        /* Doctor Modal */
        .doctor-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(5px);
        }

        .doctor-modal {
          background: white;
          border-radius: 24px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlideIn 0.3s ease;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 18px;
          cursor: pointer;
          z-index: 10;
        }

        .modal-header {
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .modal-image {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
        }

        .modal-info h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 6px;
        }

        .modal-role {
          display: block;
          color: #FFD700;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .modal-qualifications {
          color: rgba(255, 255, 255, 0.8);
          font-size: 13px;
        }

        .modal-body {
          padding: 30px;
        }

        .modal-detail {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f6fc;
          border-radius: 12px;
        }

        .detail-icon {
          font-size: 24px;
        }

        .modal-detail strong {
          display: block;
          color: #7157A0;
          margin-bottom: 4px;
          font-size: 14px;
        }

        .modal-detail p {
          color: #555;
          margin: 0;
          font-size: 15px;
        }

        .modal-description {
          margin-top: 20px;
        }

        .modal-description p {
          color: #555;
          line-height: 1.8;
        }

        .modal-footer {
          padding: 20px 30px 30px;
        }

        .modal-cta {
          display: block;
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
          border-radius: 12px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .modal-cta:hover {
          background: linear-gradient(135deg, #5d4785, #7157A0);
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .accreditations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 36px;
          }
          .about-hero h2 {
            font-size: 18px;
          }
          .story-grid {
            grid-template-columns: 1fr;
          }
          .vision-grid {
            grid-template-columns: 1fr;
          }
          .story-features {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .accreditations-grid {
            grid-template-columns: 1fr;
          }
          .section-header h2 {
            font-size: 28px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}
