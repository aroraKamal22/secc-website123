'use client';

import Link from 'next/link';
import { useState } from 'react';

// SVG Icons for each service - crisp at any size
const ServiceIcons: { [key: string]: JSX.Element } = {
  cataract: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="#7157A0" strokeWidth="3" fill="#f8f6fc"/>
      <circle cx="32" cy="32" r="18" stroke="#7157A0" strokeWidth="2.5" fill="white"/>
      <circle cx="32" cy="32" r="10" fill="#7157A0"/>
      <circle cx="28" cy="28" r="3" fill="white" opacity="0.8"/>
      <path d="M8 32C8 32 18 16 32 16C46 16 56 32 56 32C56 32 46 48 32 48C18 48 8 32 8 32Z" stroke="#8B6BC4" strokeWidth="2" fill="none"/>
    </svg>
  ),
  vitreoretinal: (
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
    icon: '👁️',
    image: '/images/cataractServices.png',
    shortDesc: 'Advanced, safe, and customized cataract treatments using state-of-the-art technology.',
    fullDesc: 'At Saraswati Eye Care Centre, we understand that every eye is unique — and so is every cataract. As a super-speciality NABH-certified eye hospital, we offer advanced, safe, and customized cataract treatments using state-of-the-art technology and expert care. Our team is led by Dr. Rajesh Garg, a senior anterior segment surgeon with special expertise in customized cataract surgery.',
    whatIs: 'A cataract occurs when the natural lens of the eye becomes cloudy, leading to blurred or foggy vision, glare and halos around lights, difficulty reading or driving, and fading of colors. Cataracts are common in people over 50 but can also occur earlier due to diabetes, trauma, or congenital causes.',
    surgeryTypes: [
      'Phacoemulsification (stitchless, injection-less technique)',
      'MICS (Microincision Cataract Surgery) for faster healing',
      'SICS (Small Incision Cataract Surgery) for mature cataracts',
      'Topical Anesthesia-Based Surgery – No injection required',
      'High-Risk Cataract Surgery with full anesthetic support',
    ],
    iolOptions: [
      'Monofocal IOLs – for distance vision',
      'Toric IOLs – for patients with astigmatism',
      'Multifocal IOLs – for distance and near vision',
      'Trifocal IOLs – for distance, intermediate, and near vision',
      'EDOF (Extended Depth of Focus) IOLs',
      'Blue-light filtering and Aspheric IOLs',
    ],
    features: [
      'R-Evolution Phacoemulsification Machine (Italian technology)',
      'Anterion Optical Biometry for accurate IOL calculation',
      'NABH-certified Modular Operation Theatres',
      'Full-time anaesthesiologist for safety',
      'Same-day discharge',
      '24x7 emergency support after surgery',
    ],
    doctor: 'Dr. Rajesh Garg',
    highlight: 'Most Popular',
  },
  {
    id: 'vitreoretinal',
    title: 'Retina Services',
    icon: '🔬',
    image: '/images/RetinaServies.png',
    shortDesc: 'Diagnosis, treatment, and long-term care of vitreoretinal diseases affecting the light-sensitive layer.',
    fullDesc: 'At Saraswati Eye Care Centre, our Retina Services are dedicated to the diagnosis, treatment, and long-term care of vitreoretinal diseases — conditions that affect the light-sensitive layer at the back of the eye. Under the expert leadership of Dr. Ajay Garg, a highly skilled Vitreo-Retina Surgeon, we provide cutting-edge care for complex retinal problems.',
    conditions: [
      'Diabetic Retinopathy - diabetes-related retinal complications',
      'Retinal Detachment - emergency surgical intervention',
      'Macular Disorders - AMD, Macular Hole, Macular Pucker',
      'Central Serous Retinopathy (CSR)',
      'Retinal Vein Occlusion (RVO)',
      'Vitreous Hemorrhage',
    ],
    diagnostics: [
      'Fundus Photography',
      'Optical Coherence Tomography (OCT)',
      'OCT-Angiography',
      'Fundus Fluorescein Angiography (FFA)',
      'Indirect Ophthalmoscopy',
      'Anterion Biometry for posterior segment planning',
    ],
    treatments: [
      'Intravitreal Injections (Anti-VEGF)',
      'Pan-Retinal Photocoagulation (PRP)',
      'Vitrectomy for Retinal Detachment',
      'Membrane Peeling (ERM/ILM)',
      'Combined Phaco-Vitrectomy',
      'Scleral Buckling',
    ],
    features: [
      'Expert retina specialist with fellowship training',
      'State-of-the-art modular OT with retina instruments',
      'Anaesthesiology backup for complex surgeries',
      'Comprehensive patient counseling',
      'Support for Ayushman Bharat, ECHS, and TPA',
    ],
    doctor: 'Dr. Ajay Garg',
    highlight: 'Advanced Care',
  },
  {
    id: 'glaucoma',
    title: 'Glaucoma Services',
    icon: '💧',
    image: '/images/glaucomaManagement.png',
    shortDesc: 'Early detection, precise diagnosis, and personalized treatment to preserve your vision.',
    fullDesc: 'At Saraswati Eye Care Centre, we understand that glaucoma is often called the "silent thief of sight" because it can cause irreversible vision loss without any warning signs. Our glaucoma specialists are dedicated to early detection, precise diagnosis, and personalized treatment to preserve your vision.',
    types: [
      'Open-Angle Glaucoma - develops slowly over time',
      'Angle-Closure Glaucoma - can develop suddenly',
      'Normal-Tension Glaucoma - occurs with normal eye pressure',
      'Congenital Glaucoma - present at birth',
    ],
    diagnostics: [
      'Optical Coherence Tomography (OCT) for optic nerve analysis',
      'Automated Perimetry for visual field testing',
      'Pachymetry for corneal thickness measurement',
      'Fundus Photography for optic nerve documentation',
      'Gonioscopy for angle structure evaluation',
    ],
    treatments: [
      'Eye drops to reduce pressure',
      'Selective Laser Trabeculoplasty (SLT)',
      'Laser Peripheral Iridotomy (LPI)',
      'Trabeculectomy with Mitomycin C',
      'Minimally Invasive Glaucoma Surgery (MIGS)',
      'Glaucoma Drainage Devices',
    ],
    riskFactors: [
      'Age over 40',
      'Family history of glaucoma',
      'High blood pressure',
      'Diabetes',
      'High myopia',
    ],
    features: [
      'Expert glaucoma specialist',
      'State-of-the-art diagnostic equipment',
      'Regular monitoring and follow-up care',
      'Comprehensive treatment planning',
      'Patient education and support',
    ],
    doctor: 'Dr. Rajesh Garg',
    highlight: 'Expert Care',
  },
  {
    id: 'pediatric',
    title: 'Pediatric Ophthalmology',
    icon: '👶',
    image: '/images/pediatricEye.png',
    shortDesc: 'Specialized care for infants, children, and adolescents with utmost care and patience.',
    fullDesc: 'At Saraswati Eye Care Centre, we understand that children are not just small adults – their eye care requires a different level of sensitivity, skill, and approach. Led by Dr. Khushboo Gupta, our Pediatric Ophthalmology and Strabismus unit is dedicated to the diagnosis and treatment of eye problems in infants, children, and adolescents.',
    conditions: [
      'Refractive Errors - Myopia, Hyperopia, Astigmatism',
      'Amblyopia (Lazy Eye) & Strabismus (Squint)',
      'Congenital Conditions - Cataracts, Glaucoma, Ptosis',
      'Retinopathy of Prematurity (ROP)',
      'Nystagmus',
      'Eye Injuries in children',
    ],
    diagnostics: [
      'Pediatric Visual Acuity Charts (Lea symbols, Snellen)',
      'Orthoptic Evaluation and Binocular Vision Testing',
      'Synoptophore and Prism Bar Testing for Squint',
      'Pediatric OCT and Fundus Imaging',
      'Refraction under cycloplegia',
      'Retinoscopy for non-verbal children',
    ],
    treatments: [
      'Glasses prescription and follow-up',
      'Patching therapy for Amblyopia',
      'Eye muscle training exercises',
      'Strabismus Surgery',
      'Botox injection for squint',
      'Pediatric cataract surgery with IOL',
    ],
    whenToVisit: [
      'At 6 months, 3 years, and before school admission',
      'If showing signs like squinting or eye rubbing',
      'In premature babies – ROP screening within first month',
      'Family history of eye conditions',
    ],
    features: [
      'Expert pediatric ophthalmologist',
      'Child-friendly environment with toys',
      'NABH-compliant safety standards',
      'In-house anesthesiologist for safe surgery',
      'Comprehensive parent counseling',
    ],
    doctor: 'Dr. Khushboo Gupta',
    highlight: 'Child-Friendly',
  },
  {
    id: 'myopia',
    title: 'Myopia Control Clinic',
    icon: '👓',
    image: '/images/MyphiaClinic.png',
    shortDesc: 'Specialized clinic for diagnosing, treating, and managing myopia (nearsightedness).',
    fullDesc: 'Our specialized Myopia Clinic offers comprehensive care for nearsightedness (myopia) in both children and adults. We provide advanced diagnostic tools and personalized treatment plans to manage and control myopia progression, which is crucial given the increasing prevalence of myopia worldwide.',
    services: [
      'Comprehensive Myopia Assessment',
      'Pediatric Myopia Control',
      'Specialized Contact Lens Fitting',
      'Myopia Progression Monitoring',
    ],
    treatments: [
      'Atropine Eye Drops Therapy',
      'Orthokeratology (Ortho-K) - overnight contact lenses',
      'Multifocal Contact Lenses',
      'Specialized Myopia Control Glasses',
      'Regular Vision Monitoring',
      'Lifestyle Counseling',
    ],
    features: [
      'Advanced diagnostic equipment for precise measurements',
      'Experienced pediatric ophthalmologists',
      'Personalized treatment plans',
      'Regular follow-up care',
      'Family education and support',
    ],
    doctor: 'Dr. Khushboo Gupta',
    highlight: 'Prevention Focus',
  },
  {
    id: 'uveitis',
    title: 'Uveitis & Ocular Immunology',
    icon: '🩺',
    image: '/images/ocular.png',
    shortDesc: 'Specialized care for inflammatory eye diseases and immune system-related eye conditions.',
    fullDesc: 'Our Uveitis and Ocular Immunology service provides specialized care for inflammatory eye diseases and immune system-related eye conditions. We work in close coordination with rheumatologists and immunologists to provide comprehensive, multidisciplinary care.',
    conditions: [
      'Anterior Uveitis',
      'Intermediate Uveitis',
      'Posterior Uveitis',
      'Panuveitis',
      'Autoimmune Eye Diseases',
      'Scleritis and Episcleritis',
    ],
    treatments: [
      'Anti-inflammatory Medications',
      'Immunosuppressive Therapy',
      'Biologic Agents',
      'Intravitreal Steroid Injections',
      'Systemic Disease Correlation',
      'Long-term Management Plans',
    ],
    features: [
      'Multidisciplinary approach',
      'Coordination with rheumatologists',
      'Comprehensive uveitis evaluation',
      'Long-term monitoring',
      'Patient education',
    ],
    doctor: 'Dr. Rajesh Garg',
    highlight: 'Specialized',
  },
];

const stats = [
  { number: '10,000+', label: 'Surgeries Performed', icon: '🏥' },
  { number: '6', label: 'Specialized Services', icon: '⚕️' },
  { number: '4', label: 'Expert Doctors', icon: '👨‍⚕️' },
  { number: '100%', label: 'NABH Standards', icon: '🏆' },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">⚕️</span>
            <span>Comprehensive Eye Care</span>
          </div>
          <h1>Our Specialized Services</h1>
          <p>
            Experience world-class eye care with our comprehensive range of specialized services,
            delivered by expert ophthalmologists using cutting-edge technology.
          </p>

          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">What We Offer</span>
            <h2>Our Eye Care Services</h2>
            <p>Click on any service to learn more about our treatments and expertise</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card"
                onClick={() => setSelectedService(service)}
              >
                {service.highlight && (
                  <span className="service-badge">{service.highlight}</span>
                )}
                <div className="service-icon-large">
                  {ServiceIcons[service.id]}
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                  <div className="service-meta">
                    <div className="doctor-info">
                      <span className="doctor-icon">👨‍⚕️</span>
                      <span>{service.doctor}</span>
                    </div>
                    <button className="learn-more">
                      Learn More <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <span className="section-badge-light">Why Choose Us</span>
              <h2>Excellence in Every Treatment</h2>
              <p>
                At Saraswati Eye Care Centre, we combine expertise, technology, and compassion
                to deliver the best possible outcomes for our patients.
              </p>

              <div className="why-features">
                <div className="why-feature">
                  <div className="feature-icon">🏆</div>
                  <div className="feature-content">
                    <strong>NABH Certified</strong>
                    <span>First certified eye hospital in Jind district</span>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="feature-icon">🔬</div>
                  <div className="feature-content">
                    <strong>Latest Technology</strong>
                    <span>R-Evolution Phaco, Anterion, OCT, FFA & more</span>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="feature-icon">👨‍⚕️</div>
                  <div className="feature-content">
                    <strong>Expert Team</strong>
                    <span>Fellowship-trained specialists in each field</span>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="feature-icon">💜</div>
                  <div className="feature-content">
                    <strong>Patient-First Care</strong>
                    <span>Ethical, transparent, and compassionate approach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-visual">
              <div className="visual-card">
                <div className="visual-icon">👁️</div>
                <h3>Your Vision, Our Mission</h3>
                <p>Trusted by 50,000+ patients for world-class eye care</p>
                <div className="visual-stats">
                  <div className="v-stat">
                    <span className="v-number">15+</span>
                    <span className="v-label">Years</span>
                  </div>
                  <div className="v-stat">
                    <span className="v-number">50K+</span>
                    <span className="v-label">Patients</span>
                  </div>
                  <div className="v-stat">
                    <span className="v-number">10K+</span>
                    <span className="v-label">Surgeries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Better Vision?</h2>
            <p>Book your appointment today and take the first step towards clearer vision.</p>
            <div className="cta-buttons">
              <Link href="/appointment" className="cta-btn primary">
                Book Appointment
              </Link>
              <Link href="/contact" className="cta-btn secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>✕</button>

            <div className="modal-header">
              {selectedService.highlight && (
                <span className="modal-badge">{selectedService.highlight}</span>
              )}
              <div className="modal-icon">{selectedService.icon}</div>
              <h2>{selectedService.title}</h2>
              <span className="modal-doctor">Led by {selectedService.doctor}</span>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedService.fullDesc}</p>

              {selectedService.whatIs && (
                <div className="modal-section">
                  <h4>Understanding the Condition</h4>
                  <p>{selectedService.whatIs}</p>
                </div>
              )}

              {selectedService.surgeryTypes && (
                <div className="modal-section">
                  <h4>Surgery Types Available</h4>
                  <div className="features-grid">
                    {selectedService.surgeryTypes.map((item, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.iolOptions && (
                <div className="modal-section">
                  <h4>Premium IOL Options</h4>
                  <div className="features-grid">
                    {selectedService.iolOptions.map((item, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.conditions && (
                <div className="modal-section">
                  <h4>Conditions We Treat</h4>
                  <div className="features-grid">
                    {selectedService.conditions.map((item, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.types && (
                <div className="modal-section">
                  <h4>Types We Treat</h4>
                  <div className="features-grid">
                    {selectedService.types.map((item, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.diagnostics && (
                <div className="modal-section">
                  <h4>Advanced Diagnostics</h4>
                  <div className="features-grid">
                    {selectedService.diagnostics.map((item, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.treatments && (
                <div className="modal-section">
                  <h4>Treatment Options</h4>
                  <div className="features-grid">
                    {selectedService.treatments.map((item, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.services && (
                <div className="modal-section">
                  <h4>Our Services</h4>
                  <div className="features-grid">
                    {selectedService.services.map((item, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.riskFactors && (
                <div className="modal-section warning">
                  <h4>Risk Factors to Watch</h4>
                  <div className="features-grid">
                    {selectedService.riskFactors.map((item, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-warning">⚠</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.whenToVisit && (
                <div className="modal-section info">
                  <h4>When to Visit</h4>
                  <div className="features-grid">
                    {selectedService.whenToVisit.map((item, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-info">ℹ</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-section highlight">
                <h4>Why Choose Us</h4>
                <div className="features-grid">
                  {selectedService.features.map((item, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Link href="/appointment" className="modal-cta primary">
                Book Appointment for {selectedService.title}
              </Link>
              <Link href="/contact" className="modal-cta secondary">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .services-hero {
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
          background: rgba(255, 215, 0, 0.2);
          border: 1px solid rgba(255, 215, 0, 0.5);
          padding: 10px 24px;
          border-radius: 50px;
          color: #FFD700;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .badge-icon {
          font-size: 18px;
        }

        .services-hero h1 {
          font-size: 52px;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .services-hero p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 30px 50px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .stat-item {
          text-align: center;
        }

        .stat-icon {
          display: block;
          font-size: 28px;
          margin-bottom: 8px;
        }

        .stat-number {
          display: block;
          font-size: 32px;
          font-weight: 800;
          color: #FFD700;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

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
          background: rgba(255, 215, 0, 0.2);
          border: 1px solid rgba(255, 215, 0, 0.5);
          color: #FFD700;
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

        .section-header p {
          color: #666;
        }

        /* Services Grid */
        .services-grid-section {
          padding: 80px 20px;
          background: #f8f6fc;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.2);
        }

        .service-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #333;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          z-index: 10;
        }

        .service-icon-large {
          width: 120px;
          height: 120px;
          margin: 25px auto 10px;
          padding: 15px;
          background: linear-gradient(135deg, #f8f6fc, #fff);
          border-radius: 50%;
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.15);
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon-large {
          transform: scale(1.1);
        }

        .service-icon-large svg {
          width: 100%;
          height: 100%;
        }

        .service-content {
          padding: 25px;
        }

        .service-content h3 {
          font-size: 20px;
          color: #7157A0;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .service-content p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .service-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .doctor-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #888;
        }

        .doctor-icon {
          font-size: 16px;
        }

        .learn-more {
          background: none;
          border: none;
          color: #7157A0;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.3s ease;
        }

        .service-card:hover .learn-more {
          gap: 10px;
        }

        /* Why Section */
        .why-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B7AB5 100%);
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .why-content {
          color: white;
        }

        .why-content h2 {
          font-size: 40px;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .why-content > p {
          font-size: 16px;
          opacity: 0.9;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .why-features {
          display: grid;
          gap: 16px;
        }

        .why-feature {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 18px 22px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .feature-icon {
          font-size: 28px;
        }

        .feature-content strong {
          display: block;
          font-size: 16px;
          margin-bottom: 4px;
        }

        .feature-content span {
          font-size: 13px;
          opacity: 0.8;
        }

        .why-visual {
          display: flex;
          justify-content: center;
        }

        .visual-card {
          background: white;
          padding: 50px 40px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .visual-icon {
          font-size: 80px;
          margin-bottom: 20px;
        }

        .visual-card h3 {
          font-size: 24px;
          color: #7157A0;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .visual-card > p {
          color: #666;
          margin-bottom: 30px;
        }

        .visual-stats {
          display: flex;
          justify-content: center;
          gap: 30px;
        }

        .v-stat {
          text-align: center;
        }

        .v-number {
          display: block;
          font-size: 28px;
          font-weight: 800;
          color: #7157A0;
        }

        .v-label {
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
        }

        /* CTA Section */
        .services-cta {
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

        /* Modal */
        .service-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(5px);
          overflow-y: auto;
        }

        .service-modal {
          background: white;
          border-radius: 24px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlideIn 0.3s ease;
          margin: auto;
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
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .modal-header {
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          padding: 40px 30px;
          text-align: center;
          color: white;
        }

        .modal-badge {
          display: inline-block;
          background: #FFD700;
          color: #333;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .modal-icon {
          font-size: 56px;
          margin-bottom: 15px;
        }

        .modal-header h2 {
          font-size: 28px;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .modal-doctor {
          font-size: 14px;
          opacity: 0.9;
        }

        .modal-body {
          padding: 30px;
        }

        .modal-description {
          font-size: 15px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .modal-section {
          background: #f8f6fc;
          padding: 25px;
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .modal-section.warning {
          background: #fff5f5;
          border-left: 4px solid #ef4444;
        }

        .modal-section.info {
          background: #f0f9ff;
          border-left: 4px solid #3b82f6;
        }

        .modal-section.highlight {
          background: linear-gradient(135deg, #f8f6fc, #efe8f8);
          border: 2px solid #7157A0;
        }

        .modal-section h4 {
          font-size: 18px;
          color: #7157A0;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .modal-section p {
          color: #555;
          line-height: 1.7;
          font-size: 14px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #555;
          padding: 8px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .feature-item:last-child {
          border-bottom: none;
        }

        .feature-check {
          color: #22c55e;
          font-weight: bold;
          font-size: 16px;
        }

        .feature-warning {
          color: #ef4444;
          font-size: 16px;
        }

        .feature-info {
          color: #3b82f6;
          font-size: 16px;
        }

        .modal-footer {
          padding: 20px 30px 30px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .modal-cta {
          flex: 1;
          min-width: 180px;
          padding: 14px 24px;
          border-radius: 50px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .modal-cta.primary {
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
        }

        .modal-cta.primary:hover {
          background: linear-gradient(135deg, #5d4785, #7157A0);
        }

        .modal-cta.secondary {
          background: #f5f5f5;
          color: #7157A0;
        }

        .modal-cta.secondary:hover {
          background: #eee;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .why-visual {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .services-hero h1 {
            font-size: 32px;
          }
          .hero-stats {
            gap: 20px;
            padding: 20px;
          }
          .stat-number {
            font-size: 24px;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .section-header h2 {
            font-size: 28px;
          }
          .why-content h2 {
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
