'use client';

import Link from 'next/link';

const videos = [
  {
    id: 'e80ZY4bwvQE',
    title: 'Welcome to Saraswati Eye Care Centre',
    description: 'Virtual tour of our facility',
    icon: 'fa-hospital',
    duration: '5:24',
    views: '12K',
  },
  {
    id: 'fRlWgvoY5j0',
    title: 'Role of AI in selection of IOL',
    description: 'By Dr. Rajesh Garg',
    icon: 'fa-robot',
    duration: '8:15',
    views: '8.5K',
  },
  {
    id: 'mGu0hqoljlU',
    title: 'Discussion on Myopia',
    description: 'By Dr. Rajesh Garg',
    icon: 'fa-eye',
    duration: '6:42',
    views: '10K',
  },
];

export default function VideoGallery() {
  return (
    <section className="video-section">
      {/* Decorative Elements */}
      <div className="bg-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="video-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-play-circle"></i>
            Video Gallery
          </div>
          <h2>Watch & <span>Learn</span></h2>
          <p>Educational videos about eye care from our expert doctors</p>
        </div>

        {/* Video Grid - Bento Style */}
        <div className="video-grid">
          {/* Featured Video */}
          <div className="video-card featured">
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${videos[0].id}`}
                title={videos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="video-badge featured-badge">
                <i className="fas fa-star"></i>
                Featured
              </div>
            </div>
            <div className="video-info">
              <div className="video-meta">
                <span className="duration"><i className="fas fa-clock"></i> {videos[0].duration}</span>
                <span className="views"><i className="fas fa-eye"></i> {videos[0].views} views</span>
              </div>
              <h3>{videos[0].title}</h3>
              <p>{videos[0].description}</p>
            </div>
          </div>

          {/* Side Videos */}
          <div className="side-videos">
            {videos.slice(1).map((video) => (
              <div key={video.id} className="video-card compact">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <div className="video-badge">
                    <i className="fas fa-clock"></i> {video.duration}
                  </div>
                </div>
                <div className="video-info">
                  <div className="info-content">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                  <div className="video-icon">
                    <i className={`fas ${video.icon}`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="view-all-wrap">
          <Link href="/video" className="view-all-btn">
            <span>Explore All Videos</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .video-section {
          padding: 40px 20px 60px;
          background: linear-gradient(180deg, #fff 0%, #f8f6fc 100%);
          position: relative;
          overflow: hidden;
        }

        .bg-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.15), rgba(139, 107, 196, 0.1));
          top: -100px;
          right: -100px;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, rgba(139, 107, 196, 0.12), rgba(113, 87, 160, 0.08));
          bottom: -50px;
          left: -50px;
        }

        .video-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.3);
        }

        .section-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 12px;
        }

        .section-header h2 span {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          color: #666;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Bento Grid Layout */
        .video-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
        }

        .side-videos {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Video Card Base */
        .video-card {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(113, 87, 160, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .video-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(113, 87, 160, 0.15);
          border-color: rgba(113, 87, 160, 0.15);
        }

        /* Featured Card */
        .video-card.featured {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .video-card.featured .video-wrapper {
          padding-top: 56.25%;
          flex: 1;
          min-height: 280px;
        }

        .video-card.featured .video-info {
          padding: 24px;
        }

        .video-card.featured h3 {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }

        /* Compact Card */
        .video-card.compact {
          display: flex;
          flex-direction: row;
          height: calc(50% - 12px);
          min-height: 140px;
        }

        .video-card.compact .video-wrapper {
          width: 45%;
          flex-shrink: 0;
          padding-top: 0;
          position: relative;
        }

        .video-card.compact .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-card.compact .video-info {
          flex: 1;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
          min-width: 0;
        }

        .video-card.compact .info-content {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .video-card.compact h3 {
          font-size: 0.9rem;
          margin-bottom: 4px;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .video-card.compact p {
          font-size: 0.8rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Video Wrapper */
        .video-wrapper {
          position: relative;
          padding-top: 56.25%;
          background: linear-gradient(135deg, #1a1a2e, #2d2d44);
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Video Badges */
        .video-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 2;
        }

        .video-badge.featured-badge {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          top: 12px;
          bottom: auto;
        }

        /* Video Info */
        .video-info {
          padding: 20px;
        }

        .video-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 12px;
        }

        .video-meta span {
          font-size: 0.8rem;
          color: #888;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .video-meta i {
          color: #7157A0;
          font-size: 0.7rem;
        }

        .video-info h3 {
          color: #1a1a2e;
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 8px;
          line-height: 1.4;
        }

        .video-info p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }

        .video-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(113, 87, 160, 0.1), rgba(139, 107, 196, 0.15));
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7157A0;
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .video-card:hover .video-icon {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
        }

        /* View All Button */
        .view-all-wrap {
          text-align: center;
          margin-top: 40px;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          color: #7157A0;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(113, 87, 160, 0.15);
          border: 2px solid rgba(113, 87, 160, 0.2);
        }

        .view-all-btn:hover {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(113, 87, 160, 0.35);
        }

        .view-all-btn i {
          transition: transform 0.3s;
        }

        .view-all-btn:hover i {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .video-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .side-videos {
            flex-direction: row;
            gap: 20px;
          }

          .video-card.compact {
            flex: 1;
            flex-direction: column;
            height: auto;
            min-height: auto;
          }

          .video-card.compact .video-wrapper {
            width: 100%;
            padding-top: 56.25%;
          }

          .video-card.compact .video-info {
            flex-direction: row-reverse;
            padding: 14px;
          }

          .video-card.compact h3 {
            -webkit-line-clamp: 2;
          }
        }

        @media (max-width: 640px) {
          .video-section {
            padding: 30px 15px 40px;
          }

          .section-header {
            margin-bottom: 25px;
          }

          .section-tag {
            padding: 8px 16px;
            font-size: 0.75rem;
          }

          .section-header h2 {
            font-size: 1.75rem;
          }

          .section-header p {
            font-size: 0.95rem;
          }

          .side-videos {
            flex-direction: column;
            gap: 16px;
          }

          .video-card.featured .video-info {
            padding: 16px;
          }

          .video-card.featured h3 {
            font-size: 1.05rem;
          }

          .video-card.compact .video-info {
            flex-direction: row;
            padding: 12px;
            gap: 10px;
          }

          .video-card.compact h3 {
            font-size: 0.85rem;
            -webkit-line-clamp: 2;
          }

          .video-card.compact p {
            font-size: 0.75rem;
          }

          .video-icon {
            width: 40px;
            height: 40px;
            font-size: 0.9rem;
            border-radius: 10px;
          }

          .view-all-wrap {
            margin-top: 30px;
          }

          .view-all-btn {
            padding: 12px 24px;
            font-size: 0.9rem;
            gap: 10px;
          }

          .video-meta {
            gap: 12px;
            margin-bottom: 8px;
          }

          .video-meta span {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
