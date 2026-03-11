'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const equipmentCategories = [
  { id: 'all', name: 'All Equipment' },
  { id: 'surgical', name: 'Surgical Systems' },
  { id: 'diagnostic', name: 'Diagnostic' },
  { id: 'laser', name: 'Laser Systems' },
  { id: 'imaging', name: 'Imaging' },
];

const equipmentList = [
  {
    id: 1,
    name: 'R-Evolution Phacoemulsification + Vitrectomy System',
    manufacturer: 'Optikon, Italy',
    category: 'surgical',
    image: '/images/equipment1.png',
    icon: '🔬',
    features: ['Advanced fluidics and ultrasound power modulation', 'Designed for Micro-Incision Cataract Surgery (MICS)', 'Posterior segment surgery capabilities', 'Enhanced surgical safety and visual outcomes'],
    description: 'A versatile and modern platform designed for Micro-Incision Cataract Surgery (MICS) and posterior segment surgeries. Known for its advanced fluidics and ultrasound power modulation, it enhances surgical safety and visual outcomes.',
    highlight: 'Premium',
  },
  {
    id: 2,
    name: 'Anterion',
    manufacturer: 'Heidelberg Engineering, Germany',
    category: 'imaging',
    image: '/images/Equipment2.jpg',
    icon: '👁️',
    features: ['High-end swept-source OCT-based analyzer', 'Detailed corneal and anterior chamber imaging', 'Premium IOL planning capabilities', 'Ideal for post-LASIK and irregular corneas'],
    description: 'A high-end swept-source OCT-based anterior segment analyzer. It delivers detailed corneal, anterior chamber, and lens imaging—essential for toric and premium IOL planning, especially in post-LASIK and irregular corneas.',
    highlight: 'Latest',
  },
  {
    id: 3,
    name: 'Topcon 3D OCT Maestro',
    manufacturer: 'Topcon',
    category: 'imaging',
    image: '/images/Eqipment3.png',
    icon: '📊',
    features: ['Fully automated 3D OCT system', 'True-color fundus camera integration', 'Advanced macular disease diagnosis', 'Optic nerve and glaucoma assessment'],
    description: 'A fully automated system that integrates 3D OCT and a true-color fundus camera. It plays a key role in diagnosing macular diseases, optic nerve pathologies, and glaucoma.',
    highlight: 'Advanced',
  },
  {
    id: 4,
    name: 'Topcon Fundus Fluorescein Angiography (FFA)',
    manufacturer: 'Topcon',
    category: 'diagnostic',
    image: '/images/equipment4.png',
    icon: '🩺',
    features: ['Real-time retinal circulation imaging', 'Diabetic retinopathy management', 'Retinal vein occlusion assessment', 'Wet AMD evaluation'],
    description: 'Provides real-time imaging of the retinal circulation. Vital for managing conditions like diabetic retinopathy, retinal vein occlusion, and wet AMD.',
  },
  {
    id: 5,
    name: 'ZEISS Green Laser (532 nm)',
    manufacturer: 'ZEISS',
    category: 'laser',
    image: '/images/equipment5.png',
    icon: '✨',
    features: ['Precision retinal photocoagulation', 'Panretinal photocoagulation capability', 'Focal laser treatment', 'Diabetic and vascular retinal disease management'],
    description: 'A precision laser for retinal photocoagulation procedures such as panretinal photocoagulation and focal laser in diabetic and vascular retinal diseases.',
    highlight: 'Premium',
  },
  {
    id: 6,
    name: 'Automated Visual Field Analyzer',
    manufacturer: 'Topcon',
    category: 'diagnostic',
    image: '/images/equipment6.png',
    icon: '📈',
    features: ['Peripheral vision assessment', 'Glaucoma monitoring', 'Neurological evaluation', 'Driving eligibility testing'],
    description: 'Detects and monitors changes in peripheral vision. A critical tool for glaucoma assessment, neurological evaluation, and driving eligibility tests.',
  },
  {
    id: 7,
    name: 'Topcon Slit Lamp',
    manufacturer: 'Topcon',
    category: 'diagnostic',
    image: '/images/equipment7.png',
    icon: '🔍',
    features: ['High-resolution front segment examination', 'Infection detection', 'Injury assessment', 'Lens opacity evaluation'],
    description: 'Offers detailed, high-resolution examination of the eye\'s front segment, helping detect infections, injuries, inflammations, and lens opacities.',
  },
  {
    id: 8,
    name: 'Non-Contact Tonometer',
    manufacturer: 'Topcon',
    category: 'diagnostic',
    image: '/images/equipment8.png',
    icon: '💨',
    features: ['Non-invasive IOP measurement', 'Gentle air puff technology', 'Fast glaucoma screening', 'Patient-friendly design'],
    description: 'Uses a gentle puff of air to measure intraocular pressure (IOP)—a fast and non-invasive glaucoma screening method.',
  },
  {
    id: 9,
    name: 'Goldmann Applanation Tonometer',
    manufacturer: 'Haag-Streit',
    category: 'diagnostic',
    image: '/images/equipment9.png',
    icon: '🎯',
    features: ['Gold standard IOP measurement', 'High accuracy readings', 'Critical for glaucoma diagnosis', 'Precise monitoring capability'],
    description: 'Recognized worldwide as the gold standard for accurate IOP measurement, critical in glaucoma diagnosis and monitoring.',
    highlight: 'Gold Standard',
  },
  {
    id: 10,
    name: 'YAG Laser (Nd:YAG)',
    manufacturer: 'ZEISS',
    category: 'laser',
    image: '/images/equipment10.png',
    icon: '⚡',
    features: ['Posterior capsulotomy treatment', 'Laser iridotomy capability', 'Quick recovery process', 'Clear vision restoration'],
    description: 'Used for posterior capsulotomy (clearing vision after cataract surgery) and laser iridotomy in narrow-angle glaucoma, offering quick recovery and clear vision.',
  },
  {
    id: 11,
    name: 'Quantel Immersion A-Scan',
    manufacturer: 'Quantel Medical',
    category: 'diagnostic',
    image: '/images/equipment11.png',
    icon: '📐',
    features: ['High-accuracy ultrasound biometry', 'Immersion technique measurement', 'Reduced corneal compression errors', 'Precise IOL power calculation'],
    description: 'A high-accuracy ultrasound biometer that provides axial length measurement with immersion technique, reducing corneal compression errors in IOL power calculation.',
  },
  {
    id: 12,
    name: 'ZEISS Lumera 300 Microscope with RESIGHT',
    manufacturer: 'ZEISS',
    category: 'surgical',
    image: '/images/equipment12.png',
    icon: '🔭',
    features: ['Premium surgical microscope', 'RESIGHT wide-angle viewing system', 'Enhanced visualization', 'Superior surgical control'],
    description: 'A premium surgical microscope designed for both cataract and retina surgeries, equipped with RESIGHT wide-angle viewing system for enhanced visualization and surgical control.',
    highlight: 'Premium',
  },
];

const technologyHighlights = [
  {
    icon: '🇮🇹',
    country: 'Italy',
    brand: 'Optikon',
    specialty: 'Surgical Systems',
  },
  {
    icon: '🇩🇪',
    country: 'Germany',
    brand: 'ZEISS & Heidelberg',
    specialty: 'Precision Optics',
  },
  {
    icon: '🇯🇵',
    country: 'Japan',
    brand: 'Topcon',
    specialty: 'Diagnostic Imaging',
  },
  {
    icon: '🇨🇭',
    country: 'Switzerland',
    brand: 'Haag-Streit',
    specialty: 'Gold Standard Tonometry',
  },
];

export default function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState<typeof equipmentList[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEquipment = activeCategory === 'all'
    ? equipmentList
    : equipmentList.filter(eq => eq.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="equipment-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🔬</span>
            <span>World-Class Technology</span>
          </div>
          <h1>Advanced Technology & Equipment</h1>
          <p>Experience world-class eye care with our state-of-the-art diagnostic and surgical equipment from leading global manufacturers, ensuring precise, safe, and effective treatment for all eye conditions.</p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Advanced Machines</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Global Brands</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Precision Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Technology Partners */}
      <section className="tech-partners">
        <div className="container">
          <h2 className="section-title">Technology from World Leaders</h2>
          <p className="section-subtitle">We partner with the finest medical equipment manufacturers across the globe</p>

          <div className="partners-grid">
            {technologyHighlights.map((partner, index) => (
              <div key={index} className="partner-card">
                <span className="partner-flag">{partner.icon}</span>
                <h3>{partner.country}</h3>
                <p className="partner-brand">{partner.brand}</p>
                <p className="partner-specialty">{partner.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container">
          <div className="filter-buttons">
            {equipmentCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                {activeCategory === category.id && (
                  <span className="filter-count">
                    {category.id === 'all' ? equipmentList.length : equipmentList.filter(eq => eq.category === category.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="equipment-grid-section">
        <div className="container">
          <div className="equipment-grid">
            {filteredEquipment.map((equipment) => (
              <div
                key={equipment.id}
                className="equipment-card"
                onClick={() => setSelectedEquipment(equipment)}
              >
                {equipment.highlight && (
                  <div className="equipment-badge">{equipment.highlight}</div>
                )}
                <div className="equipment-image">
                  <Image
                    src={equipment.image}
                    alt={equipment.name}
                    fill
                    className="object-contain"
                  />
                  <div className="image-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                <div className="equipment-content">
                  <div className="equipment-icon">{equipment.icon}</div>
                  <h3>{equipment.name}</h3>
                  <div className="manufacturer-badge">
                    <span className="mfr-icon">🏭</span>
                    {equipment.manufacturer}
                  </div>
                  <div className="features-preview">
                    {equipment.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="learn-more-btn">
                    Learn More <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Equipment Section */}
      <section className="why-equipment">
        <div className="container">
          <h2 className="section-title">Why Our Equipment Matters</h2>
          <p className="section-subtitle">Advanced technology for superior patient outcomes</p>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Precision Diagnosis</h3>
              <p>Our advanced imaging systems detect eye conditions at their earliest stages, enabling timely and effective treatment.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>Enhanced Safety</h3>
              <p>State-of-the-art surgical equipment with advanced safety features minimizes risks and ensures optimal outcomes.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Faster Recovery</h3>
              <p>Micro-incision techniques and precise laser systems mean less trauma and quicker healing for our patients.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>Best-in-Class Results</h3>
              <p>Premium equipment from world-leading manufacturers delivers results that meet international standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="equipment-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Experience Advanced Eye Care</h2>
            <p>Get diagnosed and treated with the most advanced eye care technology available</p>
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

      {/* Modal */}
      {selectedEquipment && (
        <div className="equipment-modal-overlay" onClick={() => setSelectedEquipment(null)}>
          <div className="equipment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedEquipment(null)}>
              ✕
            </button>

            <div className="modal-header">
              {selectedEquipment.highlight && (
                <span className="modal-badge">{selectedEquipment.highlight}</span>
              )}
              <div className="modal-icon">{selectedEquipment.icon}</div>
              <h2>{selectedEquipment.name}</h2>
              <div className="modal-manufacturer">
                <span>🏭</span> {selectedEquipment.manufacturer}
              </div>
            </div>

            <div className="modal-image">
              <Image
                src={selectedEquipment.image}
                alt={selectedEquipment.name}
                width={400}
                height={300}
                className="object-contain"
              />
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedEquipment.description}</p>

              <div className="modal-features">
                <h3>Key Features & Capabilities</h3>
                <div className="features-list">
                  {selectedEquipment.features.map((feature, index) => (
                    <div key={index} className="feature-row">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Link href="/appointment" className="modal-cta">
                Book Consultation <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .equipment-hero {
          background: linear-gradient(135deg, #7157A0 0%, #9b7bc7 50%, #7157A0 100%);
          padding: 80px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .equipment-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
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
          padding: 8px 20px;
          border-radius: 50px;
          color: white;
          font-size: 14px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          font-size: 18px;
        }

        .equipment-hero h1 {
          font-size: 48px;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .equipment-hero p {
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
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 36px;
          font-weight: 800;
          color: #FFD700;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: #7157A0;
          text-align: center;
          margin-bottom: 10px;
        }

        .section-subtitle {
          font-size: 16px;
          color: #666;
          text-align: center;
          margin-bottom: 40px;
        }

        /* Technology Partners */
        .tech-partners {
          padding: 60px 20px;
          background: #f8f6fc;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .partner-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.15);
        }

        .partner-flag {
          font-size: 40px;
          display: block;
          margin-bottom: 15px;
        }

        .partner-card h3 {
          font-size: 20px;
          color: #333;
          margin-bottom: 8px;
        }

        .partner-brand {
          font-size: 14px;
          color: #7157A0;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .partner-specialty {
          font-size: 13px;
          color: #888;
        }

        /* Category Filter */
        .category-filter {
          padding: 40px 20px;
          background: white;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 12px 24px;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          background: white;
          color: #666;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .filter-btn:hover {
          border-color: #7157A0;
          color: #7157A0;
        }

        .filter-btn.active {
          background: #7157A0;
          border-color: #7157A0;
          color: white;
        }

        .filter-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 12px;
        }

        /* Equipment Grid */
        .equipment-grid-section {
          padding: 60px 20px;
          background: white;
        }

        .equipment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .equipment-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .equipment-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.2);
        }

        .equipment-badge {
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
          text-transform: uppercase;
        }

        .equipment-image {
          height: 220px;
          position: relative;
          background: linear-gradient(135deg, #f8f6fc 0%, #efe8f8 100%);
          padding: 20px;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(113, 87, 160, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .equipment-card:hover .image-overlay {
          opacity: 1;
        }

        .view-details {
          color: white;
          font-weight: 600;
          padding: 12px 28px;
          border: 2px solid white;
          border-radius: 50px;
        }

        .equipment-content {
          padding: 25px;
        }

        .equipment-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .equipment-content h3 {
          font-size: 18px;
          font-weight: 700;
          color: #333;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .manufacturer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f0f0f0;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          color: #666;
          margin-bottom: 16px;
        }

        .mfr-icon {
          font-size: 14px;
        }

        .features-preview {
          margin-bottom: 16px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          color: #666;
          margin-bottom: 8px;
        }

        .check-icon {
          color: #22c55e;
          font-weight: bold;
        }

        .learn-more-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .learn-more-btn:hover {
          background: linear-gradient(135deg, #5d4785, #7157A0);
        }

        /* Why Equipment Section */
        .why-equipment {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f8f6fc 0%, #efe8f8 100%);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .why-card {
          background: white;
          padding: 35px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.15);
        }

        .why-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .why-card h3 {
          font-size: 20px;
          color: #7157A0;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .why-card p {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
        }

        /* CTA Section */
        .equipment-cta {
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B7AB5 100%);
          text-align: center;
        }

        .cta-content h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .cta-content p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 30px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
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
          background: #FFD700;
          color: #333;
        }

        .cta-btn.primary:hover {
          background: #FFC000;
          transform: translateY(-2px);
        }

        .cta-btn.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-btn.secondary:hover {
          background: white;
          color: #7157A0;
        }

        /* Modal */
        .equipment-modal-overlay {
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

        .equipment-modal {
          background: white;
          border-radius: 24px;
          max-width: 600px;
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
          background: #f0f0f0;
          color: #666;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: #7157A0;
          color: white;
        }

        .modal-header {
          background: linear-gradient(135deg, #7157A0 0%, #8B7AB5 100%);
          padding: 40px 30px 30px;
          text-align: center;
          position: relative;
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
          text-transform: uppercase;
        }

        .modal-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .modal-header h2 {
          color: white;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .modal-manufacturer {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .modal-image {
          padding: 20px;
          background: #f8f6fc;
          display: flex;
          justify-content: center;
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

        .modal-features h3 {
          font-size: 18px;
          color: #7157A0;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .features-list {
          background: #f8f6fc;
          padding: 20px;
          border-radius: 16px;
        }

        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #e8e0f0;
        }

        .feature-row:last-child {
          border-bottom: none;
        }

        .feature-check {
          color: #22c55e;
          font-weight: bold;
          font-size: 16px;
        }

        .feature-row span:last-child {
          color: #555;
          font-size: 14px;
        }

        .modal-footer {
          padding: 20px 30px 30px;
        }

        .modal-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #7157A0, #8B7AB5);
          color: white;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .modal-cta:hover {
          background: linear-gradient(135deg, #5d4785, #7157A0);
        }

        @media (max-width: 768px) {
          .equipment-hero h1 {
            font-size: 32px;
          }

          .hero-stats {
            gap: 20px;
          }

          .stat-number {
            font-size: 28px;
          }

          .equipment-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 28px;
          }

          .filter-buttons {
            gap: 8px;
          }

          .filter-btn {
            padding: 10px 16px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}
