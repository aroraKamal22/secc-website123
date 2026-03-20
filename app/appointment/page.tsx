'use client';

import { useState } from 'react';
import Link from 'next/link';

const doctors = [
  { id: 'dr-rajesh', name: 'Dr. Rajesh Garg', qualification: 'MBBS, MS Ophthalmology, Fellowship in Glaucoma' },
  { id: 'dr-ajay', name: 'Dr. Ajay Garg', qualification: 'MBBS, DOMS Ophthalmology, Fellowship in Vitreo-Retina' },
  { id: 'dr-khushboo', name: 'Dr. Khushboo Gupta', qualification: 'MBBS, MS Ophthalmology, Fellowship in Pediatric Ophthalmology' },
];

const services = [
  { id: 'consultation', name: 'General Consultation' },
  { id: 'cataract', name: 'Cataract Surgery' },
  { id: 'retina', name: 'Retina Treatment' },
  { id: 'glaucoma', name: 'Glaucoma Treatment' },
  { id: 'pediatric', name: 'Pediatric Eye Care' },
  { id: 'diabetic', name: 'Diabetic Eye Screening' },
  { id: 'squint', name: 'Squint Surgery' },
];

const timeSlots = [
  '10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM',
  '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM',
  '12:00 PM', '12:15 PM', '12:30 PM', '12:45 PM', '1:00 PM'
];

// Booked slots data per doctor (connect to backend API)
// Format: { doctorId: { date: [bookedSlots] } }
const bookedSlotsData: Record<string, Record<string, string[]>> = {};

// Helper function to format date as "19 March 2026"
const formatDateToDDMMYYYY = (dateString: string): string => {
  if (!dateString) return '';
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  const [year, month, day] = dateString.split('-');
  const monthName = months[parseInt(month) - 1];
  return `${parseInt(day)} ${monthName} ${year}`;
};

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    serviceType: '',
    symptoms: '',
    firstVisit: 'yes',
    doctor: '',
    patientType: 'new',
    uhid: '',
  });

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  // Get booked slots when date or doctor changes
  const updateBookedSlots = (doctor: string, date: string) => {
    if (doctor && date) {
      // In real app, fetch booked slots from API for this doctor and date
      const doctorSlots = bookedSlotsData[doctor] || {};
      const slots = doctorSlots[date] || [];
      setBookedSlots(slots);
    } else {
      setBookedSlots([]);
    }
  };

  const handleDateChange = (date: string) => {
    setFormData({ ...formData, appointmentDate: date, appointmentTime: '' });
    updateBookedSlots(formData.doctor, date);
  };

  const handleDoctorChange = (doctorId: string) => {
    setFormData({ ...formData, doctor: doctorId, appointmentTime: '' });
    updateBookedSlots(doctorId, formData.appointmentDate);
  };

  const isSlotBooked = (time: string) => bookedSlots.includes(time);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentModal(true);
  };

  const handleConfirmAppointment = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      patientName: '',
      age: '',
      gender: '',
      email: '',
      phone: '',
      appointmentDate: '',
      appointmentTime: '',
      serviceType: '',
      symptoms: '',
      firstVisit: 'yes',
      doctor: '',
      patientType: 'new',
      uhid: '',
    });
    setShowPaymentModal(false);
    setIsConfirmed(false);
    setStep(1);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const canProceedStep1 = formData.patientName && formData.age && formData.gender && formData.phone;
  const canProceedStep2 = formData.doctor && formData.appointmentDate && formData.appointmentTime && formData.serviceType;

  return (
    <>
      {/* Hero Section */}
      <section className="appointment-hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <span className="hero-badge">Easy Booking</span>
          <h1>Book Your Appointment</h1>
          <p>Schedule your visit with our expert ophthalmologists in just a few steps</p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="progress-section">
        <div className="progress-container">
          <div className="progress-steps">
            <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="step-number">{step > 1 ? '✓' : '1'}</div>
              <span>Patient Info</span>
            </div>
            <div className="progress-line" />
            <div className={`progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="step-number">{step > 2 ? '✓' : '2'}</div>
              <span>Schedule</span>
            </div>
            <div className="progress-line" />
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <span>Confirm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="form-container">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Patient Information */}
              {step === 1 && (
                <div className="form-step">
                  <div className="step-header">
                    <span className="step-icon">👤</span>
                    <div>
                      <h2>Patient Information</h2>
                      <p>Please provide your personal details</p>
                    </div>
                  </div>

                  <div className="patient-type-toggle">
                    <button
                      type="button"
                      className={`toggle-btn ${formData.patientType === 'new' ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, patientType: 'new' })}
                    >
                      <span className="toggle-icon">🆕</span>
                      New Patient
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${formData.patientType === 'old' ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, patientType: 'old' })}
                    >
                      <span className="toggle-icon">🔄</span>
                      Old Patient
                    </button>
                  </div>

                  {formData.patientType === 'old' && (
                    <div className="form-group">
                      <label>U-HID (Patient ID)</label>
                      <input
                        type="text"
                        placeholder="Enter your U-HID if you have one"
                        value={formData.uhid}
                        onChange={(e) => setFormData({ ...formData, uhid: e.target.value })}
                      />
                    </div>
                  )}

                  <div className="form-row three-col">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        placeholder="Enter patient name"
                        required
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Age *</label>
                      <input
                        type="number"
                        placeholder="Age"
                        required
                        min="0"
                        max="120"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Gender *</label>
                      <select
                        required
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email (Optional)</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={nextStep}
                      disabled={!canProceedStep1}
                    >
                      Continue
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Schedule */}
              {step === 2 && (
                <div className="form-step">
                  <div className="step-header">
                    <span className="step-icon">📅</span>
                    <div>
                      <h2>Schedule Your Visit</h2>
                      <p>Select doctor, date, time and service</p>
                    </div>
                  </div>

                  {/* Doctor Selection - FIRST */}
                  <div className="form-group">
                    <label>Select Preferred Doctor *</label>
                    <div className="doctor-grid">
                      {doctors.map((doctor) => (
                        <button
                          key={doctor.id}
                          type="button"
                          className={`doctor-card ${formData.doctor === doctor.id ? 'selected' : ''}`}
                          onClick={() => handleDoctorChange(doctor.id)}
                        >
                          <span className="doctor-avatar">👨‍⚕️</span>
                          <div className="doctor-info">
                            <span className="doctor-name">{doctor.name}</span>
                            <span className="doctor-qualification">{doctor.qualification}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    {formData.doctor && (
                      <div className="doctor-note">
                        <span className="note-icon">ℹ️</span>
                        <p><strong>Note:</strong> We will try our best to arrange consultation with your selected doctor. If the selected doctor is unavailable due to leave, surgery, or emergency, the patient will be consulted by another available qualified eye specialist to avoid delay in care.</p>
                      </div>
                    )}
                  </div>

                  {/* Date Selection - SECOND */}
                  <div className="form-group">
                    <label>Appointment Date *</label>
                    {formData.doctor ? (
                      <div className="date-input-wrapper">
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.appointmentDate}
                          onChange={(e) => handleDateChange(e.target.value)}
                        />
                        {formData.appointmentDate && (
                          <span className="selected-date-display">
                            📅 {formatDateToDDMMYYYY(formData.appointmentDate)}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="select-doctor-first">
                        <span>👨‍⚕️</span>
                        <p>Please select a doctor first</p>
                      </div>
                    )}
                  </div>

                  {/* Time Selection - THIRD */}
                  <div className="form-group">
                    <label>Preferred Time * <span className="time-range-hint">(10:00 AM - 1:00 PM)</span></label>
                    {formData.doctor && formData.appointmentDate ? (
                      <div className="time-slots-grid">
                        {timeSlots.map((time) => {
                          const isBooked = isSlotBooked(time);
                          return (
                            <button
                              key={time}
                              type="button"
                              className={`time-slot ${formData.appointmentTime === time ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
                              onClick={() => !isBooked && setFormData({ ...formData, appointmentTime: time })}
                              disabled={isBooked}
                            >
                              <span className="time-text">{time}</span>
                              {isBooked && <span className="booked-label">Booked</span>}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="select-date-first">
                        <span>📅</span>
                        <p>{!formData.doctor ? 'Please select a doctor first' : 'Please select a date to see available time slots'}</p>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Service Type *</label>
                    <div className="service-grid">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          className={`service-card ${formData.serviceType === service.id ? 'selected' : ''}`}
                          onClick={() => setFormData({ ...formData, serviceType: service.id })}
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={prevStep}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={nextStep}
                      disabled={!canProceedStep2}
                    >
                      Continue
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirm */}
              {step === 3 && (
                <div className="form-step">
                  <div className="step-header">
                    <span className="step-icon">✅</span>
                    <div>
                      <h2>Review & Confirm</h2>
                      <p>Please verify your appointment details</p>
                    </div>
                  </div>

                  <div className="summary-card">
                    <div className="summary-section">
                      <h4>Patient Details</h4>
                      <div className="summary-grid">
                        <div className="summary-item">
                          <span className="label">Name</span>
                          <span className="value">{formData.patientName}</span>
                        </div>
                        <div className="summary-item">
                          <span className="label">Age/Gender</span>
                          <span className="value">{formData.age} yrs / {formData.gender}</span>
                        </div>
                        <div className="summary-item">
                          <span className="label">Phone</span>
                          <span className="value">{formData.phone}</span>
                        </div>
                        <div className="summary-item">
                          <span className="label">Patient Type</span>
                          <span className="value">{formData.patientType === 'new' ? 'New Patient' : 'Returning Patient'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="summary-section">
                      <h4>Appointment Details</h4>
                      <div className="summary-grid">
                        <div className="summary-item">
                          <span className="label">Date</span>
                          <span className="value">{formatDateToDDMMYYYY(formData.appointmentDate)}</span>
                        </div>
                        <div className="summary-item">
                          <span className="label">Time</span>
                          <span className="value">{formData.appointmentTime}</span>
                        </div>
                        <div className="summary-item">
                          <span className="label">Service</span>
                          <span className="value">{services.find(s => s.id === formData.serviceType)?.name}</span>
                        </div>
                        <div className="summary-item">
                          <span className="label">Doctor</span>
                          <span className="value">{doctors.find(d => d.id === formData.doctor)?.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Additional Symptoms/Notes (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Describe any symptoms or special requirements..."
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    />
                  </div>

                  <div className="fee-card">
                    <div className="fee-info">
                      <span className="fee-label">Consultation Fee</span>
                      <span className="fee-note">Pay at clinic during visit</span>
                    </div>
                    <span className="fee-amount">₹300</span>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={prevStep}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                      Back
                    </button>
                    <button type="submit" className="btn-confirm">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Side Info */}
          <div className="side-info">
            <div className="info-card">
              <h3>📍 Hospital Location</h3>
              <p>66/6, Rajwaha Road, Opp. Bus Stand, Jind, Haryana - 126102</p>
              <a href="https://maps.google.com/?q=Saraswati+Eye+Care+Centre+Jind" target="_blank" rel="noopener noreferrer">
                Get Directions →
              </a>
            </div>

            <div className="info-card">
              <h3>🕐 Working Hours</h3>
              <p>Monday - Saturday</p>
              <p className="time">9:00 AM - 5:00 PM</p>
              <p className="opd-time">OPD: 10:00 AM - 1:00 PM</p>
              <p className="closed">Sunday: Closed</p>
            </div>

            <div className="info-card">
              <h3>📞 Need Help?</h3>
              <p>Call us for assistance</p>
              <a href="tel:+919729236700" className="phone-link">+91 97292-36700</a>
            </div>

            <div className="info-card highlight">
              <h3>💡 Quick Tips</h3>
              <ul>
                <li>Bring previous medical records if any</li>
                <li>Arrive 15 minutes before your slot</li>
                <li>Carry your ID proof</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showPaymentModal && (
        <div className="modal-overlay" onClick={() => !isSubmitting && !isConfirmed && setShowPaymentModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {!isConfirmed ? (
              <>
                <div className="modal-header">
                  <span className="modal-icon">📅</span>
                  <h2>Confirm Your Appointment</h2>
                </div>

                <div className="modal-body">
                  <div className="confirmation-details">
                    <div className="detail-row">
                      <span className="detail-label">Patient</span>
                      <span className="detail-value">{formData.patientName}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Date & Time</span>
                      <span className="detail-value">{formatDateToDDMMYYYY(formData.appointmentDate)} at {formData.appointmentTime}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Service</span>
                      <span className="detail-value">{services.find(s => s.id === formData.serviceType)?.name}</span>
                    </div>
                  </div>

                  <div className="payment-info">
                    <div className="payment-amount">
                      <span>Total Amount</span>
                      <span className="amount">₹300</span>
                    </div>
                    <p className="payment-note">💰 Pay at the clinic during your visit</p>
                  </div>

                  <button
                    className="btn-confirm-modal"
                    onClick={handleConfirmAppointment}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner" />
                        Confirming...
                      </>
                    ) : (
                      <>
                        ✓ Confirm Appointment
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className="success-state">
                <div className="success-icon">✓</div>
                <h2>Appointment Confirmed!</h2>
                <p>Your appointment has been successfully booked.</p>

                <div className="success-details">
                  <p><strong>{formData.patientName}</strong></p>
                  <p>{formatDateToDDMMYYYY(formData.appointmentDate)} at {formData.appointmentTime}</p>
                  <p>{services.find(s => s.id === formData.serviceType)?.name}</p>
                  <p>Doctor: {doctors.find(d => d.id === formData.doctor)?.name}</p>
                </div>

                <p className="success-note">
                  A confirmation SMS will be sent to {formData.phone}
                </p>

                <div className="success-actions">
                  <button className="btn-primary" onClick={resetForm}>
                    Book Another Appointment
                  </button>
                  <Link href="/" className="btn-secondary">
                    Go to Home
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        /* Hero */
        .appointment-hero {
          position: relative;
          padding: 60px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          color: white;
          text-align: center;
          overflow: hidden;
        }

        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 214, 0, 0.2);
          border: 1px solid rgba(255, 214, 0, 0.5);
          color: #FFD600;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .appointment-hero h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0 0 10px;
        }

        .appointment-hero p {
          opacity: 0.9;
          margin: 0;
        }

        /* Progress */
        .progress-section {
          background: white;
          padding: 30px 20px;
          border-bottom: 1px solid #eee;
        }

        .progress-container {
          max-width: 600px;
          margin: 0 auto;
        }

        .progress-steps {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e0e0e0;
          color: #888;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          transition: all 0.3s;
        }

        .progress-step.active .step-number {
          background: #7157A0;
          color: white;
        }

        .progress-step.completed .step-number {
          background: #4CAF50;
          color: white;
        }

        .progress-step span {
          font-size: 0.85rem;
          color: #888;
        }

        .progress-step.active span {
          color: #7157A0;
          font-weight: 600;
        }

        .progress-line {
          width: 80px;
          height: 3px;
          background: #e0e0e0;
          margin: 0 15px;
          margin-bottom: 25px;
        }

        /* Form Section */
        .form-section {
          padding: 40px 20px 80px;
          background: #f8f6fc;
        }

        .form-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
        }

        .form-card {
          background: white;
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }

        .step-icon {
          font-size: 2.5rem;
        }

        .step-header h2 {
          margin: 0 0 5px;
          color: #333;
          font-size: 1.5rem;
        }

        .step-header p {
          margin: 0;
          color: #888;
          font-size: 0.95rem;
        }

        .patient-type-toggle {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
        }

        .toggle-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 600;
          color: #666;
        }

        .toggle-btn:hover {
          border-color: #7157A0;
        }

        .toggle-btn.active {
          border-color: #7157A0;
          background: #f8f6fc;
          color: #7157A0;
        }

        .toggle-icon {
          font-size: 1.2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-row.three-col {
          grid-template-columns: 2fr 1fr 1fr;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #555;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
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

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .service-card {
          padding: 14px 16px;
          border: 2px solid #e8e8e8;
          border-radius: 10px;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.9rem;
          font-weight: 600;
          color: #555;
          text-align: center;
        }

        .service-card:hover {
          border-color: #7157A0;
          background: #faf8fc;
          color: #7157A0;
        }

        .service-card.selected {
          border-color: #7157A0;
          background: #7157A0;
          color: white;
        }

        .time-range-hint {
          font-weight: 400;
          color: #7157A0;
          font-size: 0.85rem;
        }

        .time-slots-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
        }

        .time-slot {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 14px 8px;
          border: 2px solid #e8e8e8;
          border-radius: 10px;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
        }

        .time-slot:hover:not(.booked) {
          border-color: #7157A0;
          background: #faf8fc;
        }

        .time-slot.selected {
          border-color: #7157A0;
          background: #7157A0;
        }

        .time-slot.selected .time-text {
          color: white;
          font-weight: 700;
        }

        .time-slot.booked {
          background: #f5f5f5;
          border-color: #e0e0e0;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .time-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: #333;
        }

        .time-slot.booked .time-text {
          color: #999;
          text-decoration: line-through;
        }

        .booked-label {
          font-size: 0.65rem;
          color: #e74c3c;
          font-weight: 600;
          text-transform: uppercase;
        }

        .select-date-first {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 30px;
          background: #f8f6fc;
          border: 2px dashed #d0c4e8;
          border-radius: 12px;
          text-align: center;
        }

        .select-date-first span {
          font-size: 2rem;
        }

        .select-date-first p {
          margin: 0;
          color: #7157A0;
          font-size: 0.9rem;
        }

        .select-doctor-first {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 30px;
          background: #f8f6fc;
          border: 2px dashed #d0c4e8;
          border-radius: 12px;
          text-align: center;
        }

        .select-doctor-first span {
          font-size: 2rem;
        }

        .select-doctor-first p {
          margin: 0;
          color: #7157A0;
          font-size: 0.9rem;
        }

        .date-format-hint {
          font-weight: 400;
          color: #7157A0;
          font-size: 0.85rem;
        }

        .date-input-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .selected-date-display {
          font-size: 0.9rem;
          color: #7157A0;
          font-weight: 600;
          padding: 8px 12px;
          background: #f8f6fc;
          border-radius: 8px;
          display: inline-block;
        }

        .doctor-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .doctor-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border: 2px solid #e8e8e8;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
          text-align: left;
        }

        .doctor-card:hover {
          border-color: #7157A0;
        }

        .doctor-card.selected {
          border-color: #7157A0;
          background: #f8f6fc;
        }

        .doctor-avatar {
          font-size: 2rem;
        }

        .doctor-info {
          display: flex;
          flex-direction: column;
        }

        .doctor-name {
          font-weight: 600;
          color: #333;
          font-size: 0.9rem;
        }

        .doctor-qualification {
          font-size: 0.75rem;
          color: #7157A0;
        }

        .doctor-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 15px;
          padding: 15px;
          background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
          border: 1px solid #ffc107;
          border-radius: 12px;
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .doctor-note .note-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .doctor-note p {
          margin: 0;
          font-size: 0.85rem;
          color: #5d4037;
          line-height: 1.5;
        }

        .doctor-note strong {
          color: #e65100;
        }

        .summary-card {
          background: #f8f6fc;
          border-radius: 16px;
          padding: 25px;
          margin-bottom: 25px;
        }

        .summary-section {
          margin-bottom: 20px;
        }

        .summary-section:last-child {
          margin-bottom: 0;
        }

        .summary-section h4 {
          color: #7157A0;
          margin: 0 0 15px;
          font-size: 1rem;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .summary-item {
          display: flex;
          flex-direction: column;
        }

        .summary-item .label {
          font-size: 0.8rem;
          color: #888;
        }

        .summary-item .value {
          font-weight: 600;
          color: #333;
        }

        .fee-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 20px 25px;
          border-radius: 12px;
          margin-bottom: 25px;
        }

        .fee-label {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .fee-note {
          font-size: 0.85rem;
          opacity: 0.9;
        }

        .fee-amount {
          font-size: 2rem;
          font-weight: 700;
        }

        .form-actions {
          display: flex;
          gap: 15px;
          justify-content: flex-end;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .btn-primary, .btn-secondary, .btn-confirm {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }

        .btn-primary {
          background: #7157A0;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background: #5a4a7f;
        }

        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-secondary {
          background: #f5f5f5;
          color: #666;
        }

        .btn-secondary:hover {
          background: #eee;
        }

        .btn-confirm {
          background: linear-gradient(135deg, #4CAF50, #45a049);
          color: white;
        }

        .btn-confirm:hover {
          box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
        }

        /* Side Info */
        .side-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .info-card {
          background: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .info-card h3 {
          margin: 0 0 10px;
          font-size: 1rem;
          color: #333;
        }

        .info-card p {
          margin: 0 0 5px;
          color: #666;
          font-size: 0.9rem;
        }

        .info-card .time {
          color: #7157A0;
          font-weight: 600;
        }

        .info-card .opd-time {
          color: #4CAF50;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .info-card .closed {
          color: #e74c3c;
        }

        .info-card a {
          color: #7157A0;
          font-weight: 600;
          text-decoration: none;
        }

        .phone-link {
          font-size: 1.1rem !important;
        }

        .info-card.highlight {
          background: #fff9e6;
          border: 1px solid #ffe082;
        }

        .info-card ul {
          margin: 0;
          padding-left: 20px;
        }

        .info-card li {
          color: #666;
          font-size: 0.85rem;
          margin-bottom: 5px;
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
          max-width: 450px;
          width: 100%;
          overflow: hidden;
        }

        .modal-header {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 25px;
          text-align: center;
        }

        .modal-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 10px;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 1.4rem;
        }

        .modal-body {
          padding: 25px;
        }

        .confirmation-details {
          background: #f8f8f8;
          border-radius: 12px;
          padding: 15px;
          margin-bottom: 20px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }

        .detail-row:last-child {
          border-bottom: none;
        }

        .detail-label {
          color: #888;
        }

        .detail-value {
          font-weight: 600;
          color: #333;
        }

        .payment-info {
          background: #f8f6fc;
          border: 2px solid #7157A0;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          margin-bottom: 20px;
        }

        .payment-amount {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .amount {
          font-size: 2rem;
          font-weight: 700;
          color: #7157A0;
        }

        .payment-note {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }

        .btn-confirm-modal {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #4CAF50, #45a049);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s;
        }

        .btn-confirm-modal:hover:not(:disabled) {
          box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
        }

        .btn-confirm-modal:disabled {
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

        .success-state {
          padding: 40px 25px;
          text-align: center;
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

        .success-state h2 {
          color: #333;
          margin: 0 0 10px;
        }

        .success-state > p {
          color: #666;
          margin: 0 0 20px;
        }

        .success-details {
          background: #f8f8f8;
          border-radius: 12px;
          padding: 15px;
          margin-bottom: 15px;
        }

        .success-details p {
          margin: 5px 0;
          color: #555;
        }

        .success-note {
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 25px;
        }

        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .success-actions .btn-primary,
        .success-actions .btn-secondary {
          width: 100%;
          justify-content: center;
          text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .form-container {
            grid-template-columns: 1fr;
          }
          .side-info {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
          .time-slots-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 700px) {
          .form-row, .form-row.three-col {
            grid-template-columns: 1fr;
          }
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .time-slots-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .doctor-grid {
            grid-template-columns: 1fr;
          }
          .side-info {
            grid-template-columns: 1fr;
          }
          .patient-type-toggle {
            flex-direction: column;
          }
          .appointment-hero h1 {
            font-size: 2rem;
          }
        }

        @media (max-width: 500px) {
          .time-slots-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}
