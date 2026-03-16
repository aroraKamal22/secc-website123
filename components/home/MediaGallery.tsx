'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryItems = [
  { src: '/images/Front.JPG', title: 'Hospital Building', icon: 'fa-hospital' },
  { src: '/images/front11.JPG', title: 'Front View', icon: 'fa-building' },
  { src: '/images/fronteView1.jpg', title: 'Main Entrance', icon: 'fa-door-open' },
  { src: '/images/Reception.png', title: 'Reception Area', icon: 'fa-concierge-bell' },
  { src: '/images/AdvancedMachine.jpg', title: 'Advanced Equipment', icon: 'fa-microscope' },
  { src: '/images/media4.png', title: 'Treatment Room', icon: 'fa-procedures' },
];

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <div className="header-left">
            <div className="section-tag">
              <i className="fas fa-images"></i>
              Gallery
            </div>
            <h2>Our <span>Facility</span></h2>
            <p>Modern eye care centre with state-of-the-art technology</p>
          </div>
          <Link href="/gallery" className="view-all-btn">
            View All
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${index === 0 ? 'large' : ''}`}
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                quality={85}
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="item-overlay">
                <div className="overlay-content">
                  <div className="zoom-icon">
                    <i className="fas fa-search-plus"></i>
                  </div>
                  <span className="item-title">
                    <i className={`fas ${item.icon}`}></i>
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="close-btn" onClick={() => setSelectedImage(null)}>
            <i className="fas fa-times"></i>
          </button>

          <div className="lightbox-image" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              quality={100}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className="lightbox-caption">
            <i className={`fas ${selectedImage.icon}`}></i>
            <h3>{selectedImage.title}</h3>
          </div>

          {/* Navigation arrows */}
          <button
            className="nav-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryItems.findIndex(item => item.src === selectedImage.src);
              const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
              setSelectedImage(galleryItems[prevIndex]);
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="nav-btn next"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryItems.findIndex(item => item.src === selectedImage.src);
              const nextIndex = (currentIndex + 1) % galleryItems.length;
              setSelectedImage(galleryItems[nextIndex]);
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}

      <style jsx>{`
        .gallery-section {
          padding: 60px 20px;
          background: #fff;
        }

        .gallery-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .gallery-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
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

        .gallery-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 10px;
        }

        .gallery-header h2 span {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gallery-header p {
          color: #666;
          margin: 0;
          font-size: 1.05rem;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.25);
        }

        .view-all-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(113, 87, 160, 0.35);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .gallery-item {
          position: relative;
          height: 280px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .gallery-item.large {
          grid-column: span 2;
          grid-row: span 2;
          height: 580px;
        }

        .item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(113, 87, 160, 0.95) 0%, rgba(113, 87, 160, 0.4) 40%, transparent 70%);
          opacity: 0;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 25px;
        }

        .gallery-item:hover .item-overlay {
          opacity: 1;
        }

        .gallery-item:hover :global(img) {
          transform: scale(1.1);
        }

        .gallery-item :global(img) {
          transition: transform 0.5s ease;
        }

        .overlay-content {
          text-align: center;
        }

        .zoom-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FFD600, #FFA500);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a1a2e;
          font-size: 1.3rem;
          margin: 0 auto 15px;
          transform: scale(0);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .zoom-icon {
          transform: scale(1);
        }

        .item-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
        }

        .close-btn {
          position: absolute;
          top: 25px;
          right: 25px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 2px solid rgba(255,255,255,0.3);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          transition: all 0.3s;
          z-index: 10;
        }

        .close-btn:hover {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-color: transparent;
        }

        .lightbox-image {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 75vh;
        }

        .lightbox-caption {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          padding: 14px 35px;
          border-radius: 50px;
          color: white;
        }

        .lightbox-caption i {
          font-size: 1.1rem;
        }

        .lightbox-caption h3 {
          font-size: 1.1rem;
          margin: 0;
          font-weight: 600;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 2px solid rgba(255,255,255,0.3);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s;
        }

        .nav-btn:hover {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-color: transparent;
        }

        .nav-btn.prev { left: 25px; }
        .nav-btn.next { right: 25px; }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-item.large {
            grid-column: span 2;
            grid-row: span 1;
            height: 300px;
          }
          .gallery-item {
            height: 220px;
          }
          .gallery-header h2 { font-size: 2rem; }
        }

        @media (max-width: 600px) {
          .gallery-section {
            padding: 50px 15px;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-item.large {
            grid-column: span 1;
            height: 250px;
          }
          .gallery-item {
            height: 220px;
          }
          .gallery-header {
            text-align: center;
          }
          .header-left {
            width: 100%;
          }
          .view-all-btn {
            width: 100%;
            justify-content: center;
          }
          .nav-btn { display: none; }
        }
      `}</style>
    </section>
  );
}
