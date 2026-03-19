'use client';

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
      <main className="video-page">
        {/* Hero Section */}
        <section className="video-hero">
          <div className="hero-pattern"></div>
          <div className="hero-content">
            <span className="hero-badge">
              <span className="badge-icon">🎬</span>
              <span>Educational Content</span>
            </span>
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

        {/* CTA Section */}
        <section className="video-cta">
          <div className="cta-content">
            <h2>Want to Learn More About Eye Care?</h2>
            <p>Subscribe to our YouTube channel for the latest educational videos and eye care tips.</p>
            <div className="cta-buttons">
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </a>
              <Link href="/appointment" className="cta-btn secondary">
                Book Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .video-page {
          min-height: 100vh;
          background: #f8f6fc;
        }

        .video-hero {
          padding: 80px 20px;
          text-align: center;
          background: linear-gradient(135deg, #7157A0 0%, #9b7bc7 50%, #7157A0 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 214, 0, 0.2);
          border: 1px solid rgba(255, 214, 0, 0.5);
          padding: 10px 24px;
          border-radius: 50px;
          color: #FFD600;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .badge-icon {
          font-size: 18px;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin: 0 0 15px;
        }

        .hero-content h1 span {
          color: #FFD600;
        }

        .hero-content p {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.9);
          margin: 0;
          line-height: 1.7;
        }

        .videos-section {
          padding: 60px 20px 80px;
          background: #f8f6fc;
        }

        .videos-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .video-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(113, 87, 160, 0.08);
          transition: all 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.2);
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
          padding: 25px;
          background: white;
        }

        .video-info h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #333;
          margin: 0 0 10px;
          line-height: 1.4;
        }

        .doctor-name {
          color: #7157A0;
          font-size: 0.9rem;
          margin: 0;
          font-weight: 500;
        }

        .video-desc {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.6;
        }

        .back-section {
          text-align: center;
          padding: 0 20px 80px;
          background: #f8f6fc;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 16px 36px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(113, 87, 160, 0.2);
        }

        .back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.3);
        }

        .video-cta {
          background: linear-gradient(135deg, #7157A0 0%, #9b7bc7 50%, #7157A0 100%);
          padding: 80px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .video-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .cta-content {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-content h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: white;
          margin: 0 0 15px;
        }

        .cta-content p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.9);
          margin: 0 0 30px;
          line-height: 1.7;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-btn.primary {
          background: #FF0000;
          color: white;
          box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
        }

        .cta-btn.primary:hover {
          background: #CC0000;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 0, 0, 0.4);
        }

        .cta-btn.secondary {
          background: white;
          color: #7157A0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .cta-btn.secondary:hover {
          background: #FFD600;
          color: #333;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 214, 0, 0.3);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          .videos-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 1.6rem;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .cta-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
