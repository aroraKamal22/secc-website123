'use client';

import { useState } from 'react';
import Link from 'next/link';

// SVG Icons for each service - crisp at any size
const ServiceIcons = {
  cataract: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="#7157A0" strokeWidth="3" fill="#f8f6fc"/>
      <circle cx="32" cy="32" r="18" stroke="#7157A0" strokeWidth="2.5" fill="white"/>
      <circle cx="32" cy="32" r="10" fill="#7157A0"/>
      <circle cx="28" cy="28" r="3" fill="white" opacity="0.8"/>
      <path d="M8 32C8 32 18 16 32 16C46 16 56 32 56 32C56 32 46 48 32 48C18 48 8 32 8 32Z" stroke="#8B6BC4" strokeWidth="2" fill="none"/>
    </svg>
  ),
  retina: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="#7157A0" strokeWidth="3" fill="#f8f6fc"/>
      <circle cx="32" cy="32" r="14" stroke="#8B6BC4" strokeWidth="2" fill="#e8e4ff"/>
      <circle cx="32" cy="32" r="6" fill="#7157A0"/>
      <path d="M32 8V18" stroke="#7157A0" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 46V56" stroke="#7157A0" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 32H18" stroke="#7157A0" strokeWidth="2" strokeLinecap="round"/>
      <path d="M46 32H56" stroke="#7157A0" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 15L22 22" stroke="#8B6BC4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M42 42L49 49" stroke="#8B6BC4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 49L22 42" stroke="#8B6BC4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M42 22L49 15" stroke="#8B6BC4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  glaucoma: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="#7157A0" strokeWidth="3" fill="#f8f6fc"/>
      <ellipse cx="32" cy="32" rx="20" ry="14" stroke="#7157A0" strokeWidth="2.5" fill="white"/>
      <circle cx="32" cy="32" r="8" fill="#7157A0"/>
      <circle cx="29" cy="30" r="2" fill="white"/>
      <path d="M16 20L20 24" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M48 20L44 24" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 12V16" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="24" stroke="#e74c3c" strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>
    </svg>
  ),
  pediatric: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="28" r="16" stroke="#7157A0" strokeWidth="3" fill="#f8f6fc"/>
      <circle cx="27" cy="26" r="4" fill="#7157A0"/>
      <circle cx="37" cy="26" r="4" fill="#7157A0"/>
      <circle cx="26" cy="25" r="1.5" fill="white"/>
      <circle cx="36" cy="25" r="1.5" fill="white"/>
      <path d="M28 34C28 34 30 36 32 36C34 36 36 34 36 34" stroke="#7157A0" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 48C20 48 24 44 32 44C40 44 44 48 44 48" stroke="#7157A0" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 52L24 56" stroke="#8B6BC4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M40 52L40 56" stroke="#8B6BC4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  myopia: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="26" width="22" height="14" rx="7" stroke="#7157A0" strokeWidth="2.5" fill="#f8f6fc"/>
      <rect x="36" y="26" width="22" height="14" rx="7" stroke="#7157A0" strokeWidth="2.5" fill="#f8f6fc"/>
      <path d="M28 33H36" stroke="#7157A0" strokeWidth="2.5"/>
      <path d="M6 33H2" stroke="#8B6BC4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M62 33H58" stroke="#8B6BC4" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="17" cy="33" r="4" fill="#7157A0"/>
      <circle cx="47" cy="33" r="4" fill="#7157A0"/>
      <circle cx="16" cy="32" r="1.5" fill="white"/>
      <circle cx="46" cy="32" r="1.5" fill="white"/>
      <path d="M17 20L17 24" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M47 20L47 24" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 18L14 22" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 18L20 22" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  uveitis: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="#7157A0" strokeWidth="3" fill="#f8f6fc"/>
      <circle cx="32" cy="32" r="18" stroke="#e74c3c" strokeWidth="2" strokeDasharray="3 3" fill="none"/>
      <circle cx="32" cy="32" r="12" stroke="#7157A0" strokeWidth="2" fill="white"/>
      <circle cx="32" cy="32" r="6" fill="#7157A0"/>
      <circle cx="30" cy="30" r="2" fill="white"/>
      <path d="M20 20L24 24" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 20L40 24" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 44L24 40" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 44L40 40" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="10" r="3" fill="#3498db"/>
      <circle cx="54" cy="32" r="3" fill="#3498db"/>
      <circle cx="32" cy="54" r="3" fill="#3498db"/>
      <circle cx="10" cy="32" r="3" fill="#3498db"/>
    </svg>
  ),
};

const services = [
  {
    id: 'cataract',
    title: 'Cataract Services',
    icon: ServiceIcons.cataract,
    shortDesc: 'Advanced, safe, and customized cataract surgery with premium IOL options.',
    highlight: 'Led by Dr. Rajesh Garg - Founder & Chairman',
    fullDesc: 'Cataract is a cloudiness of the eye\'s natural lens that affects vision. At Saraswati Eye Care Centre, we offer the most advanced cataract surgeries using state-of-the-art phacoemulsification technology.',
    features: [
      'Micro-Incision Cataract Surgery (MICS)',
      'Phacoemulsification with Foldable IOL',
      'Premium Multifocal & Toric IOLs',
      'Topical Anesthesia (Painless)',
      'High-Risk & Complex Cataract Surgery'
    ],
  },
  {
    id: 'retina',
    title: 'Retina Services',
    icon: ServiceIcons.retina,
    shortDesc: 'Comprehensive diagnosis and treatment of vitreoretinal diseases.',
    highlight: 'Led by Dr. Ajay Garg - Vice Chairman & Retina Specialist',
    fullDesc: 'Our Retina Services are dedicated to the diagnosis, treatment, and long-term care of vitreoretinal diseases including diabetic retinopathy, macular degeneration, and retinal detachments.',
    features: [
      'Diabetic Retinopathy Management',
      'Retinal Detachment Surgery',
      'Intravitreal Anti-VEGF Injections',
      'Laser Photocoagulation',
      'OCT & OCT Angiography'
    ],
  },
  {
    id: 'glaucoma',
    title: 'Glaucoma Services',
    icon: ServiceIcons.glaucoma,
    shortDesc: 'Expert glaucoma diagnosis and management to preserve vision.',
    highlight: 'Led by Dr. Rajesh Garg - Fellowship in Glaucoma',
    fullDesc: 'Glaucoma is a serious eye condition that damages the optic nerve due to increased eye pressure. Early detection and treatment are crucial for preserving vision.',
    features: [
      'Advanced OCT for Nerve Analysis',
      'Visual Field (Perimetry) Testing',
      'Medical Management',
      'Laser Trabeculoplasty (SLT/ALT)',
      'Glaucoma Filtering Surgery'
    ],
  },
  {
    id: 'pediatric',
    title: 'Pediatric Ophthalmology',
    icon: ServiceIcons.pediatric,
    shortDesc: 'Specialized eye care for children from infancy to adolescence.',
    highlight: 'Led by Dr. Khushboo Gupta - Pediatric Ophthalmologist',
    fullDesc: 'Our Pediatric Ophthalmology services are dedicated to diagnosing and treating eye problems in infants, children, and adolescents with a gentle, child-friendly approach.',
    features: [
      'Pediatric Eye Examination',
      'Squint (Strabismus) Surgery',
      'Amblyopia (Lazy Eye) Treatment',
      'Congenital Cataract Management',
      'ROP Screening & Treatment'
    ],
  },
  {
    id: 'myopia',
    title: 'Myopia Control Clinic',
    icon: ServiceIcons.myopia,
    shortDesc: 'Specialized clinic for myopia management and progression control.',
    fullDesc: 'Our Myopia Clinic specializes in diagnosing, treating, and managing myopia (nearsightedness), especially in children where early intervention can slow progression.',
    features: [
      'Comprehensive Myopia Assessment',
      'Atropine Therapy',
      'Specialized Myopia Control Glasses',
      'Orthokeratology Consultation',
      'Regular Vision Monitoring'
    ],
  },
  {
    id: 'uveitis',
    title: 'Uveitis & Ocular Immunology',
    icon: ServiceIcons.uveitis,
    shortDesc: 'Multidisciplinary care for inflammatory eye diseases.',
    fullDesc: 'The Uveitis & Ocular Immunology Service provides comprehensive care for patients with inflammatory eye conditions including uveitis, scleritis, and immune-related disorders.',
    features: [
      'Comprehensive Uveitis Evaluation',
      'Immunosuppressive Therapy',
      'Steroid Management',
      'Systemic Disease Correlation',
      'Long-term Follow-up Care'
    ],
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section style={{
      margin: '40px 16px',
      padding: '50px 30px',
      background: 'linear-gradient(135deg, #7157A0 0%, #8e6fc4 100%)',
      borderRadius: '24px',
      boxShadow: '0 10px 40px rgba(113, 87, 160, 0.25)',
      maxWidth: '1600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        color: 'white',
        marginBottom: '40px',
        fontWeight: 700,
        position: 'relative',
        paddingBottom: '15px'
      }}>
        SERVICES WE OFFER
        <span style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '4px',
          background: 'linear-gradient(to right, white, #e8e4ff)',
          borderRadius: '2px'
        }} />
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '25px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            style={{
              background: 'rgba(255,255,255,0.97)',
              borderRadius: '20px',
              padding: '25px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="service-card-hover"
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(to right, #7157A0, #8B6BC4)',
              transform: 'scaleX(0)',
              transition: 'transform 0.4s ease',
              transformOrigin: 'left'
            }} className="accent-line" />

            {/* Service Icon */}
            <div style={{
              width: '100px',
              height: '100px',
              margin: '0 auto 20px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(113, 87, 160, 0.25)',
              background: 'white',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ width: '76px', height: '76px' }}>
                {service.icon}
              </div>
            </div>

            <h3 style={{
              color: '#7157A0',
              fontSize: '1.3rem',
              marginBottom: '10px',
              fontWeight: 700,
              textAlign: 'center'
            }}>{service.title}</h3>

            <p style={{
              color: '#555',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              textAlign: 'center',
              marginBottom: '12px'
            }}>{service.shortDesc}</p>

            {service.highlight && (
              <span style={{
                display: 'block',
                background: '#fff3cd',
                color: '#856404',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 500,
                textAlign: 'center',
                marginBottom: '12px'
              }}>{service.highlight}</span>
            )}

            <span style={{
              display: 'block',
              color: '#7157A0',
              fontWeight: 600,
              textAlign: 'center',
              fontSize: '0.95rem'
            }}>Read More...</span>
          </div>
        ))}
      </div>

      {/* View All Services Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/services" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'white',
          color: '#7157A0',
          padding: '16px 40px',
          borderRadius: '50px',
          fontWeight: 700,
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          transition: 'all 0.3s'
        }} className="view-all-btn">
          View All Services
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '20px',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
          >
            <button
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#f5f5f5',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <svg width="20" height="20" fill="none" stroke="#333" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header with gradient */}
            <div style={{
              background: 'linear-gradient(135deg, #7157A0, #8B6BC4)',
              padding: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ width: '60px', height: '60px' }}>
                  {selectedService.icon}
                </div>
              </div>
              <div>
                <h2 style={{ color: 'white', fontSize: '1.6rem', margin: 0 }}>{selectedService.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: '5px 0 0', fontSize: '0.95rem' }}>Saraswati Eye Care Centre</p>
              </div>
            </div>

            <div style={{ padding: '25px' }}>
              {selectedService.highlight && (
                <div style={{
                  background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)',
                  border: '1px solid #ffc107',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <svg width="20" height="20" fill="#f9a825" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span style={{ color: '#5d4037', fontWeight: 600, fontSize: '0.95rem' }}>
                    {selectedService.highlight}
                  </span>
                </div>
              )}

              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>{selectedService.fullDesc}</p>

              <div style={{ background: '#f8f6fc', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
                <h4 style={{ color: '#7157A0', marginBottom: '15px' }}>Key Features & Treatments:</h4>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedService.features.map((f, i) => (
                    <li key={i} style={{ color: '#555', marginBottom: '8px', lineHeight: 1.6 }}>{f}</li>
                  ))}
                </ul>
              </div>

              <div style={{ textAlign: 'center', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href={`/services#${selectedService.id}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#7157A0',
                  color: 'white',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}>
                  Learn More
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/appointment" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#FFD600',
                  color: '#7157A0',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .service-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.18) !important;
        }
        .service-card-hover:hover .accent-line {
          transform: scaleX(1) !important;
        }
        .view-all-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2) !important;
          background: #FFD600 !important;
        }
      `}</style>
    </section>
  );
}
