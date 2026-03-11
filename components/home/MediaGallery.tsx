'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryItems = [
  { src: '/images/Front.JPG', title: 'Hospital Building' },
  { src: '/images/front11.JPG', title: 'Front View' },
  { src: '/images/fronteView1.jpg', title: 'Main Entrance' },
  { src: '/images/Reception.png', title: 'Reception Area' },
  { src: '/images/AdvancedMachine.jpg', title: 'Advanced Equipment' },
  { src: '/images/media4.png', title: 'Treatment Room' },
];

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <div className="header-left">
            <span className="section-tag">Gallery</span>
            <h2>Our State-of-the-Art <span>Facility</span></h2>
            <p>Take a look at our modern eye care centre equipped with the latest technology</p>
          </div>
          <Link href="/gallery" className="view-all-btn">
            View All
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
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
                <span className="item-title">{item.title}</span>
                <span className="zoom-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="close-btn" onClick={() => setSelectedImage(null)}>
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
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
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
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
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      <style jsx>{`
        .gallery-section {
          padding: 80px 20px;
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
          display: inline-block;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .gallery-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 8px;
        }

        .gallery-header h2 span {
          color: #7157A0;
        }

        .gallery-header p {
          color: #666;
          margin: 0;
          font-size: 1rem;
          max-width: 500px;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #7157A0;
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .view-all-btn:hover {
          background: #5a4a80;
          transform: translateY(-2px);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .gallery-item {
          position: relative;
          height: 280px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
        }

        .gallery-item:first-child {
          grid-column: span 2;
          grid-row: span 2;
          height: 580px;
        }

        .item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(113, 87, 160, 0.9) 0%, transparent 50%);
          opacity: 0;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
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

        .item-title {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .zoom-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7157A0;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .zoom-icon {
          transform: translate(-50%, -50%) scale(1);
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

        .close-btn:hover {
          background: rgba(255,255,255,0.2);
        }

        .lightbox-image {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 75vh;
        }

        .lightbox-caption {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        .lightbox-caption h3 {
          color: white;
          font-size: 1.3rem;
          margin: 0;
          background: rgba(113, 87, 160, 0.8);
          padding: 12px 30px;
          border-radius: 50px;
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
          transition: all 0.3s;
        }

        .nav-btn:hover {
          background: rgba(255,255,255,0.2);
        }

        .nav-btn.prev { left: 20px; }
        .nav-btn.next { right: 20px; }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-item:first-child {
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
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-item:first-child {
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
