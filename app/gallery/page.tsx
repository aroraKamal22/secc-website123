'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'facility', label: 'Our Facility' },
  { id: 'equipment', label: 'Equipment' },
  { id: 'patients', label: 'Patient Care' },
];

const galleryImages = [
  { src: '/frontimage.png', title: 'Hospital Exterior', description: 'Saraswati Eye Care Centre Building', category: 'facility' },
  { src: '/images/front11.JPG', title: 'Saraswati Eye Care Centre', description: 'Our Modern Healthcare Facility', category: 'facility' },
  { src: '/frontimage.png', title: 'Main Entrance', description: 'State-of-the-art Infrastructure', category: 'facility' },
  { src: '/k.jpeg', title: 'Patient Ward', description: 'Private Patient Rooms 4-6', category: 'patients' },
  { src: '/kk.jpeg', title: 'Patient Ward', description: 'Private Patient Rooms 1-3', category: 'patients' },
  { src: '/kkk.jpeg', title: 'Patient Ward', description: 'Comfortable Hospital Beds with IV Facility', category: 'patients' },
  { src: '/kkkkk.jpeg', title: 'Patient Room', description: 'Private Room with Attendant Seating', category: 'patients' },
  { src: '/images/AdvancedMachine.jpg', title: 'AI-Based Optical Biometer', description: 'Advanced IOL Calculation Technology', category: 'equipment' },
  { src: '/images/media4.png', title: 'Refraction Room', description: 'Vision Testing Area', category: 'facility' },
  { src: '/images/media5.png', title: 'Operation Theatre', description: 'Modern Surgical Suite', category: 'facility' },
  { src: '/images/media6.png', title: 'Corridor', description: 'Hospital Corridor', category: 'facility' },
  { src: '/images/media7.png', title: 'Reception Area', description: 'Patient Welcome Desk', category: 'facility' },
  { src: '/images/media8.png', title: 'Carl Zeiss Microscope', description: 'Advanced Surgical Microscope', category: 'equipment' },
  { src: '/images/media9.png', title: 'Happy Patient', description: 'Satisfied Patient Experience', category: 'patients' },
  { src: '/images/Reception.png', title: 'Nursing Station', description: 'Patient Care Station', category: 'facility' },
  { src: '/images/glasses.png', title: 'Optical Shop', description: 'Premium Eyewear Collection', category: 'facility' },
  { src: '/h.jpeg', title: 'PAC Room', description: 'Pre-Anaesthesia Check-up Room', category: 'facility' },
  { src: '/m.jpg', title: 'OPD Consultation Room 1', description: 'Patient Eye Examination', category: 'facility' },
  { src: '/mmm.jpg', title: 'OPD Consultation Room 2', description: 'Patient Eye Examination', category: 'facility' },
  { src: '/j.jpg', title: 'OPD Consultation Room 3', description: 'Patient Eye Examination', category: 'facility' },
];

const stats = [
  { icon: '📸', number: '50+', label: 'Gallery Photos' },
  { icon: '🏥', number: '10,000', label: 'Sq. Ft. Facility' },
  { icon: '🔬', number: '20+', label: 'Equipment Units' },
  { icon: '👨‍⚕️', number: '4', label: 'Expert Doctors' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentFilteredIndex = filteredImages.findIndex(
      img => img.src === galleryImages[selectedImage].src
    );
    if (direction === 'prev') {
      const newIndex = currentFilteredIndex > 0 ? currentFilteredIndex - 1 : filteredImages.length - 1;
      const globalIndex = galleryImages.findIndex(img => img.src === filteredImages[newIndex].src);
      setSelectedImage(globalIndex);
    } else {
      const newIndex = currentFilteredIndex < filteredImages.length - 1 ? currentFilteredIndex + 1 : 0;
      const globalIndex = galleryImages.findIndex(img => img.src === filteredImages[newIndex].src);
      setSelectedImage(globalIndex);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <span className="hero-badge">Visual Tour</span>
          <h1>Our Gallery</h1>
          <p>
            Take a virtual tour of our state-of-the-art facility, advanced equipment,
            and meet our expert team dedicated to your eye care.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="gallery-stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="gallery-filter">
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <span className="filter-count">{filteredImages.length}</span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => {
              const globalIndex = galleryImages.findIndex(img => img.src === image.src);
              return (
                <div
                  key={index}
                  className={`gallery-item ${image.category === 'team' ? 'team-item' : ''}`}
                  onClick={() => setSelectedImage(globalIndex)}
                >
                  <div className="image-wrapper">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      style={{ objectFit: image.category === 'team' ? 'contain' : 'cover' }}
                    />
                  </div>
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="image-category">{categories.find(c => c.id === image.category)?.label}</span>
                      <h3>{image.title}</h3>
                      {image.description && <p>{image.description}</p>}
                      <span className="view-btn">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="cta-content">
          <h2>Want to Visit Our Facility?</h2>
          <p>Schedule an appointment and experience our world-class eye care services in person.</p>
          <div className="cta-buttons">
            <Link href="/appointment" className="cta-btn-primary">
              Book Appointment
            </Link>
            <Link href="/contact" className="cta-btn-secondary">
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation */}
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="lightbox-image-container">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Caption */}
            <div className="lightbox-caption">
              <h3>{galleryImages[selectedImage].title}</h3>
              {galleryImages[selectedImage].description && (
                <p>{galleryImages[selectedImage].description}</p>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="lightbox-thumbnails">
              {filteredImages.slice(0, 8).map((img, idx) => {
                const globalIdx = galleryImages.findIndex(g => g.src === img.src);
                return (
                  <button
                    key={idx}
                    className={`thumbnail ${globalIdx === selectedImage ? 'active' : ''}`}
                    onClick={() => setSelectedImage(globalIdx)}
                  >
                    <Image src={img.src} alt="" fill style={{ objectFit: 'cover' }} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Hero Section */
        .gallery-hero {
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
          background-image: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%),
                            radial-gradient(circle at 70% 30%, rgba(255,214,0,0.15) 0%, transparent 40%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
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

        .gallery-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin: 0 0 15px;
        }

        .gallery-hero p {
          font-size: 1.15rem;
          opacity: 0.95;
          line-height: 1.7;
          margin: 0;
        }

        /* Stats Section */
        .gallery-stats {
          background: white;
          padding: 0 20px;
          margin-top: -40px;
          position: relative;
          z-index: 10;
        }

        .stats-container {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(113, 87, 160, 0.15);
        }

        .stat-card {
          text-align: center;
        }

        .stat-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 8px;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #7157A0;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #888;
        }

        /* Category Filter */
        .gallery-filter {
          padding: 40px 20px 20px;
          background: #f8f6fc;
        }

        .filter-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: white;
          border: 2px solid #e0e0e0;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
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
          background: rgba(255,255,255,0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.8rem;
        }

        /* Gallery Section */
        .gallery-section {
          padding: 40px 20px 80px;
          background: #f8f6fc;
        }

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .gallery-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
        }

        .gallery-item.team-item {
          background: #f8f6fc;
        }

        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.25);
        }

        .image-wrapper {
          position: absolute;
          inset: 0;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(113, 87, 160, 0.95) 0%, rgba(113, 87, 160, 0.4) 50%, transparent 100%);
          opacity: 0;
          transition: all 0.4s ease;
          display: flex;
          align-items: flex-end;
          padding: 25px;
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          color: white;
          width: 100%;
        }

        .image-category {
          display: inline-block;
          background: rgba(255, 214, 0, 0.3);
          color: #FFD600;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .overlay-content h3 {
          font-size: 1.2rem;
          margin: 0 0 5px;
          font-weight: 700;
        }

        .overlay-content p {
          font-size: 0.9rem;
          margin: 0;
          opacity: 0.9;
        }

        .view-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 45px;
          height: 45px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7157A0;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s;
        }

        .gallery-item:hover .view-btn {
          opacity: 1;
          transform: scale(1);
        }

        /* CTA Section */
        .gallery-cta {
          padding: 80px 20px;
          background: linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%);
          text-align: center;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .gallery-cta h2 {
          color: white;
          font-size: 2.5rem;
          margin: 0 0 15px;
          font-weight: 700;
        }

        .gallery-cta p {
          color: rgba(255,255,255,0.9);
          font-size: 1.15rem;
          margin: 0 0 30px;
          line-height: 1.7;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFD600;
          color: #7157A0;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
        }

        .cta-btn-primary:hover {
          background: white;
          transform: translateY(-2px);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid white;
        }

        .cta-btn-secondary:hover {
          background: white;
          color: #7157A0;
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px 120px;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 10;
        }

        .lightbox-close:hover {
          background: rgba(255,255,255,0.2);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 10;
        }

        .lightbox-nav:hover {
          background: rgba(255,255,255,0.2);
        }

        .lightbox-nav.prev { left: 20px; }
        .lightbox-nav.next { right: 20px; }

        .lightbox-image-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          height: 60vh;
        }

        .lightbox-caption {
          text-align: center;
          color: white;
          margin-top: 20px;
        }

        .lightbox-caption h3 {
          font-size: 1.5rem;
          margin: 0 0 5px;
        }

        .lightbox-caption p {
          opacity: 0.8;
          margin: 0;
        }

        .lightbox-thumbnails {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          padding: 15px;
          background: rgba(0,0,0,0.5);
          border-radius: 12px;
        }

        .thumbnail {
          position: relative;
          width: 60px;
          height: 45px;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.3s;
          padding: 0;
          background: none;
        }

        .thumbnail:hover {
          border-color: rgba(255,255,255,0.5);
        }

        .thumbnail.active {
          border-color: #FFD600;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-hero h1 { font-size: 2rem; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
          .gallery-cta h2 { font-size: 2rem; }
          .lightbox-thumbnails { display: none; }
          .lightbox-nav { width: 40px; height: 40px; }
          .lightbox-nav.prev { left: 10px; }
          .lightbox-nav.next { right: 10px; }
        }

        @media (max-width: 500px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            padding: 20px;
          }
          .stat-number { font-size: 1.4rem; }
          .gallery-grid { grid-template-columns: 1fr; }
          .filter-btn { padding: 8px 15px; font-size: 0.85rem; }
        }
      `}</style>
    </>
  );
}
