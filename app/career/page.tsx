'use client';

import { useState } from 'react';
import Link from 'next/link';

const jobOpenings = [
  {
    id: 1,
    title: 'Ophthalmologist',
    icon: '👨‍⚕️',
    department: 'Medical',
    experience: '2+ years',
    type: 'Full-time',
    location: 'Jind, Haryana',
    qualification: 'MS/MD Ophthalmology',
    responsibilities: ['Patient consultations', 'Surgical procedures', 'Post-operative care'],
    urgent: true,
  },
  {
    id: 2,
    title: 'Optometrist',
    icon: '🔬',
    department: 'Clinical',
    experience: '1+ years',
    type: 'Full-time',
    location: 'Jind, Haryana',
    qualification: 'B.Optom / Diploma in Optometry',
    responsibilities: ['Eye examinations', 'Vision testing', 'Contact lens fitting'],
    urgent: false,
  },
  {
    id: 3,
    title: 'B.Sc Nurse',
    icon: '👩‍⚕️',
    department: 'Nursing',
    experience: 'Fresher/Experienced',
    type: 'Full-time',
    location: 'Jind, Haryana',
    qualification: 'B.Sc Nursing',
    responsibilities: ['Patient care', 'OT assistance', 'Post-operative monitoring'],
    urgent: false,
  },
  {
    id: 4,
    title: 'Receptionist',
    icon: '👩‍💼',
    department: 'Front Office',
    experience: 'Fresher/Experienced',
    type: 'Full-time',
    location: 'Jind, Haryana',
    qualification: 'Graduate preferred',
    responsibilities: ['Patient registration', 'Appointment scheduling', 'Query handling'],
    urgent: true,
  },
  {
    id: 5,
    title: 'OPD Assistant',
    icon: '🏥',
    department: 'Operations',
    experience: 'Fresher/Experienced',
    type: 'Full-time',
    location: 'Jind, Haryana',
    qualification: '12th Pass',
    responsibilities: ['Patient assistance', 'Record management', 'OPD support'],
    urgent: false,
  },
];

const benefits = [
  { icon: '💰', title: 'Competitive Salary', desc: 'Industry-standard pay with regular increments' },
  { icon: '🏥', title: 'ESI Coverage', desc: 'Employee State Insurance for you and family' },
  { icon: '💼', title: 'Provident Fund', desc: 'PF contribution for your secure future' },
  { icon: '📚', title: 'Training & Growth', desc: 'In-house training and career development' },
  { icon: '🤝', title: 'Supportive Team', desc: 'Collaborative and friendly work environment' },
  { icon: '⏰', title: 'Work-Life Balance', desc: 'Fixed working hours with weekly offs' },
];

const whyJoinUs = [
  { number: '01', title: 'NABH Accredited', desc: 'Work at a nationally accredited healthcare facility' },
  { number: '02', title: 'Modern Equipment', desc: 'Access to state-of-the-art medical technology' },
  { number: '03', title: 'Expert Team', desc: 'Learn from experienced specialists' },
  { number: '04', title: 'Patient Impact', desc: 'Make a real difference in people\'s lives' },
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="career-hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <span className="hero-badge">Join Our Team</span>
          <h1>Careers at Saraswati Eye Care</h1>
          <p>
            Be a part of our dedicated healthcare team and make a difference in people's lives.
            We're looking for passionate individuals to join our growing family.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">{jobOpenings.length}</span>
              <span className="stat-label">Open Positions</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Team Members</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Legacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="why-join-section">
        <div className="why-join-container">
          <div className="section-header">
            <span className="section-badge">Why Join Us</span>
            <h2>Build Your Career With Us</h2>
            <p>Join a team that values excellence, compassion, and professional growth</p>
          </div>
          <div className="why-join-grid">
            {whyJoinUs.map((item, index) => (
              <div key={index} className="why-join-card">
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="jobs-section">
        <div className="jobs-container">
          <div className="section-header">
            <span className="section-badge">Opportunities</span>
            <h2>Current Job Openings</h2>
            <p>Find your perfect role and start your journey with us</p>
          </div>

          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card" onClick={() => setSelectedJob(job)}>
                {job.urgent && <span className="urgent-badge">Urgent Hiring</span>}
                <div className="job-icon">{job.icon}</div>
                <h3>{job.title}</h3>
                <span className="job-department">{job.department}</span>

                <div className="job-details">
                  <div className="job-detail">
                    <span className="detail-icon">📍</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="job-detail">
                    <span className="detail-icon">💼</span>
                    <span>{job.type}</span>
                  </div>
                  <div className="job-detail">
                    <span className="detail-icon">⏱️</span>
                    <span>{job.experience}</span>
                  </div>
                </div>

                <button className="view-btn">
                  View Details
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <div className="section-header light">
            <span className="section-badge-light">Perks & Benefits</span>
            <h2>What We Offer</h2>
            <p>We believe in taking care of those who take care of our patients</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <span className="benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="apply-section">
        <div className="apply-container">
          <div className="apply-content">
            <div className="apply-info">
              <span className="section-badge">Apply Now</span>
              <h2>Ready to Join Us?</h2>
              <p>
                Submit your application and take the first step towards a rewarding career
                in healthcare. We'll review your application and get back to you soon.
              </p>

              <div className="contact-info">
                <h4>Have Questions?</h4>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:saraswatieyecarecentre@gmail.com">saraswatieyecarecentre@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+919729236700">+91 97292-36700</a>
                </div>
              </div>

              <div className="note-card">
                <span className="note-icon">💡</span>
                <div>
                  <strong>Pro Tip</strong>
                  <p>Attach your updated resume for faster processing of your application.</p>
                </div>
              </div>
            </div>

            <div className="apply-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Application Submitted!</h3>
                  <p>Thank you for your interest. We'll review your application and contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="apply-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="Your contact number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Position Applying For *</label>
                      <select
                        required
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      >
                        <option value="">Select Position</option>
                        {jobOpenings.map((job) => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Years of Experience</label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      >
                        <option value="">Select Experience</option>
                        <option value="fresher">Fresher</option>
                        <option value="1-2">1-2 Years</option>
                        <option value="2-5">2-5 Years</option>
                        <option value="5+">5+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Why do you want to join us?</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about yourself and why you'd be a great fit..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Upload Resume (PDF, DOC)</label>
                    <div className="file-upload">
                      <input type="file" accept=".pdf,.doc,.docx" id="resume" />
                      <label htmlFor="resume" className="file-label">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span>Choose file or drag here</span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedJob(null)}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-header">
              <span className="modal-icon">{selectedJob.icon}</span>
              <div>
                <h2>{selectedJob.title}</h2>
                <span className="modal-department">{selectedJob.department} Department</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-meta">
                <div className="meta-item">
                  <span className="meta-icon">📍</span>
                  <span>{selectedJob.location}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">💼</span>
                  <span>{selectedJob.type}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">⏱️</span>
                  <span>{selectedJob.experience}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🎓</span>
                  <span>{selectedJob.qualification}</span>
                </div>
              </div>

              <div className="modal-section">
                <h4>Key Responsibilities</h4>
                <ul>
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>What We Offer</h4>
                <ul>
                  <li>Competitive salary package</li>
                  <li>ESI & PF benefits</li>
                  <li>Professional development opportunities</li>
                  <li>Friendly work environment</li>
                </ul>
              </div>

              <a href="#apply-section" className="modal-apply-btn" onClick={() => {
                setSelectedJob(null);
                setFormData({ ...formData, position: selectedJob.title });
              }}>
                Apply for this Position
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Hero Section */
        .career-hero {
          position: relative;
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 50%, #9b7ed4 100%);
          color: white;
          text-align: center;
          overflow: hidden;
        }

        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255,214,0,0.15) 0%, transparent 40%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 214, 0, 0.2);
          border: 1px solid rgba(255, 214, 0, 0.5);
          color: #FFD600;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .career-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin: 0 0 15px;
        }

        .career-hero p {
          font-size: 1.15rem;
          opacity: 0.95;
          line-height: 1.7;
          margin: 0 0 30px;
        }

        .hero-stats {
          display: inline-flex;
          align-items: center;
          gap: 30px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 20px 40px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .hero-stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #FFD600;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.9;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.3);
        }

        /* Section Styles */
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-badge {
          display: inline-block;
          background: #7157A0;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .section-badge-light {
          display: inline-block;
          background: rgba(255, 214, 0, 0.2);
          border: 1px solid rgba(255, 214, 0, 0.5);
          color: #FFD600;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #333;
          margin: 0 0 10px;
          font-weight: 700;
        }

        .section-header.light h2 {
          color: white;
        }

        .section-header p {
          color: #666;
          font-size: 1.1rem;
          margin: 0;
        }

        .section-header.light p {
          color: rgba(255,255,255,0.9);
        }

        /* Why Join Us */
        .why-join-section {
          padding: 80px 20px;
          background: #f8f6fc;
        }

        .why-join-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .why-join-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .why-join-card {
          background: white;
          border-radius: 16px;
          padding: 30px 25px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: all 0.3s;
        }

        .why-join-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.15);
        }

        .card-number {
          display: inline-block;
          font-size: 2rem;
          font-weight: 800;
          color: #7157A0;
          opacity: 0.3;
          margin-bottom: 15px;
        }

        .why-join-card h3 {
          color: #333;
          font-size: 1.1rem;
          margin: 0 0 10px;
        }

        .why-join-card p {
          color: #888;
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.5;
        }

        /* Jobs Section */
        .jobs-section {
          padding: 80px 20px;
          background: white;
        }

        .jobs-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .job-card {
          background: white;
          border: 2px solid #eee;
          border-radius: 20px;
          padding: 30px;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
        }

        .job-card:hover {
          border-color: #7157A0;
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.15);
        }

        .urgent-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #e74c3c;
          color: white;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .job-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .job-card h3 {
          color: #333;
          font-size: 1.3rem;
          margin: 0 0 5px;
        }

        .job-department {
          display: inline-block;
          background: #f8f6fc;
          color: #7157A0;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .job-details {
          margin-bottom: 20px;
        }

        .job-detail {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .detail-icon {
          font-size: 1rem;
        }

        .view-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #7157A0;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.95rem;
          padding: 0;
          transition: gap 0.3s;
        }

        .job-card:hover .view-btn {
          gap: 12px;
        }

        /* Benefits Section */
        .benefits-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
        }

        .benefits-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .benefit-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          color: white;
          transition: all 0.3s;
        }

        .benefit-card:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-5px);
        }

        .benefit-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 15px;
        }

        .benefit-card h3 {
          margin: 0 0 10px;
          font-size: 1.1rem;
        }

        .benefit-card p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Apply Section */
        .apply-section {
          padding: 80px 20px;
          background: #f8f6fc;
        }

        .apply-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .apply-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 50px;
          align-items: start;
        }

        .apply-info h2 {
          color: #333;
          font-size: 2rem;
          margin: 15px 0;
        }

        .apply-info > p {
          color: #666;
          line-height: 1.7;
          margin: 0 0 30px;
        }

        .contact-info {
          background: white;
          border-radius: 16px;
          padding: 25px;
          margin-bottom: 20px;
        }

        .contact-info h4 {
          color: #333;
          margin: 0 0 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .contact-icon {
          font-size: 1.2rem;
        }

        .contact-item a {
          color: #7157A0;
          text-decoration: none;
          font-weight: 500;
        }

        .note-card {
          display: flex;
          gap: 15px;
          background: #fff9e6;
          border: 1px solid #ffe082;
          border-radius: 12px;
          padding: 15px;
        }

        .note-icon {
          font-size: 1.5rem;
        }

        .note-card strong {
          color: #333;
          display: block;
          margin-bottom: 5px;
        }

        .note-card p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }

        .apply-form-wrapper {
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .apply-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          color: #555;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 14px 16px;
          border: 2px solid #e8e8e8;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s;
          background: #fafafa;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #7157A0;
          background: white;
        }

        .file-upload {
          position: relative;
        }

        .file-upload input {
          position: absolute;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .file-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 30px;
          border: 2px dashed #ccc;
          border-radius: 10px;
          text-align: center;
          color: #888;
          cursor: pointer;
          transition: all 0.3s;
        }

        .file-upload:hover .file-label {
          border-color: #7157A0;
          color: #7157A0;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .submit-btn:hover:not(:disabled) {
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.3);
          transform: translateY(-2px);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .success-message {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #4CAF50;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto 20px;
        }

        .success-message h3 {
          color: #333;
          margin: 0 0 10px;
        }

        .success-message p {
          color: #666;
          margin: 0;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
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
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(255,255,255,0.3);
        }

        .modal-header {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .modal-icon {
          font-size: 3rem;
        }

        .modal-header h2 {
          margin: 0 0 5px;
          font-size: 1.5rem;
        }

        .modal-department {
          opacity: 0.9;
          font-size: 0.9rem;
        }

        .modal-body {
          padding: 30px;
        }

        .modal-meta {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 25px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #555;
          font-size: 0.9rem;
        }

        .meta-icon {
          font-size: 1.2rem;
        }

        .modal-section {
          margin-bottom: 25px;
        }

        .modal-section h4 {
          color: #7157A0;
          margin: 0 0 12px;
        }

        .modal-section ul {
          margin: 0;
          padding-left: 20px;
        }

        .modal-section li {
          color: #555;
          margin-bottom: 8px;
          line-height: 1.5;
        }

        .modal-apply-btn {
          display: block;
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          text-align: center;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }

        .modal-apply-btn:hover {
          box-shadow: 0 4px 15px rgba(113, 87, 160, 0.3);
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .why-join-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .apply-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .career-hero h1 { font-size: 2rem; }
          .hero-stats { flex-direction: column; gap: 15px; padding: 20px 30px; }
          .stat-divider { width: 50px; height: 1px; }
          .why-join-grid { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; }
          .section-header h2 { font-size: 2rem; }
          .form-row { grid-template-columns: 1fr; }
          .modal-meta { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
