'use client';

import Link from 'next/link';

const videos = [
  {
    id: 'e80ZY4bwvQE',
    title: 'Welcome to Saraswati Eye Care Centre',
    description: 'Take a virtual tour of our state-of-the-art facility and meet our expert team',
  },
  {
    id: 'fRlWgvoY5j0',
    title: 'Role of AI in selection of IOL for Cataract Patients',
    description: 'By Dr. Rajesh Garg',
  },
  {
    id: 'mGu0hqoljlU',
    title: 'Discussion on Myopia',
    description: 'By Dr. Rajesh Garg',
  },
];

export default function VideoGallery() {
  return (
    <section className="video-section">
      <h2 className="section-title">Our Video Gallery</h2>
      <p style={{ textAlign: 'center', color: '#555', maxWidth: '600px', margin: '-1.5rem auto 2rem', fontSize: '1.1rem' }}>
        Explore our collection of informative and educational videos about eye care and treatments
      </p>

      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href="/video" className="cta-btn-primary" style={{ textDecoration: 'none' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          See More Videos
        </Link>
      </div>
    </section>
  );
}
