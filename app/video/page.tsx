'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@saraswatieyecarecentre6185';

const videos = [
  {
    id: 1,
    title: 'Cataract Story',
    doctor: 'Dr. Rajesh Garg',
    videoId: 'qJtzwMhX8YE',
  },
  {
    id: 2,
    title: 'Role of AI in selection of IOL for Cataract Patients',
    doctor: 'Dr. Rajesh Garg',
    videoId: 'fRlWgvoY5j0',
  },
  {
    id: 3,
    title: 'Discussion on Cataract',
    doctor: 'Dr. Rajesh Garg',
    videoId: 'hJr2OcPPToE',
  },
  {
    id: 4,
    title: 'Discussion on Myopia',
    doctor: 'Dr. Rajesh Garg',
    videoId: 'mGu0hqoljlU',
  },
  {
    id: 5,
    title: 'Discussion on Diabetic Retinopathy',
    doctor: 'Dr. Ajay Garg',
    videoId: 'VRdPb0DiQmA',
  },
  {
    id: 6,
    title: 'Discussion on Myopia',
    doctor: 'Dr. Khushboo Gupta',
    videoId: 'R_84fIlWqxo',
  },
  {
    id: 7,
    title: 'Welcome to Saraswati Eye Care Centre',
    doctor: 'Hospital Tour',
    description: 'Take a virtual tour of our state-of-the-art facility and meet our expert team',
    videoId: 'e80ZY4bwvQE',
  },
  {
    id: 8,
    title: 'Myopia – Is Your Vision At Risk?',
    doctor: 'Dr. Khushboo Gupta',
    videoId: 'cAtNadhm0Uc',
  },
  {
    id: 9,
    title: 'जब LASIK Surgery संभव न हो, तो घबराने की आवश्यकता नहीं',
    doctor: 'Dr. Rajesh Garg',
    videoId: '0XILC7RSc0g',
  },
];

export default function VideoPage() {
  return (
    <>
      <Header />
      <main className="video-page">
        {/* Hero Section */}
        <section className="video-hero">
          <div className="hero-content">
            <h1>Our Video <span>Gallery</span></h1>
            <p>Explore our collection of informative and educational videos about eye care and treatments</p>
          </div>
        </section>

        {/* Video Grid */}
        <section className="videos-section">
          <div className="videos-container">
            <div className="videos-grid">
              {videos.map((video) => (
                <div key={video.id} className="video-card">
                  <div className="video-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="video-info">
                    <h3>{video.title}</h3>
                    {video.description ? (
                      <p className="video-desc">{video.description}</p>
                    ) : (
                      <p className="doctor-name">By {video.doctor}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="back-section">
          <Link href="/" className="back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .video-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #7157A0 0%, #8B6FC3 100%);
        }

        .video-hero {
          padding: 140px 20px 60px;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin: 0 0 15px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .hero-content h1 span {
          color: #FFD600;
        }

        .hero-content p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.9);
          margin: 0;
        }

        .videos-section {
          padding: 0 20px 60px;
        }

        .videos-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .video-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          background: #000;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-info {
          padding: 20px;
          background: white;
        }

        .video-info h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #333;
          margin: 0 0 10px;
          line-height: 1.4;
        }

        .doctor-name {
          color: #666;
          font-size: 0.95rem;
          margin: 0;
        }

        .video-desc {
          color: #666;
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.5;
        }

        .back-section {
          text-align: center;
          padding: 0 20px 60px;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #7157A0;
          padding: 15px 35px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .back-btn:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 1.8rem;
          }
          .videos-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}
