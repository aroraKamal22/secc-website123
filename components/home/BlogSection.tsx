'use client';

import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    image: '/images/blog1.png',
    title: 'How to Manage Dry Eyes in Air-Conditioned Environments',
    excerpt: 'Learn effective strategies to prevent and manage dry eyes in air-conditioned spaces.',
    category: 'Eye Care',
    color: '#10B981',
    icon: 'fa-eye-dropper',
  },
  {
    image: '/images/blog2.png',
    title: 'Myopia in Children: Causes, Signs & Prevention',
    excerpt: 'Understanding childhood myopia, its causes, and effective prevention methods.',
    category: 'Pediatric',
    color: '#F59E0B',
    icon: 'fa-child',
  },
  {
    image: '/images/Blog4.png',
    title: 'Premium IOLs: Are They Right for You?',
    excerpt: 'Explore the advantages of premium intraocular lenses for cataract surgery.',
    category: 'Cataract',
    color: '#8B5CF6',
    icon: 'fa-gem',
  },
  {
    image: '/images/Blog5.png',
    title: 'Anaesthesia in Cataract Surgery: What is Safer?',
    excerpt: 'Comparing topical vs injection anesthesia methods in cataract surgery.',
    category: 'Cataract',
    color: '#3B82F6',
    icon: 'fa-syringe',
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-newspaper"></i>
            Doctor&apos;s Blog
          </div>
          <h2>Expert <span>Insights</span></h2>
          <p>Stay informed with tips and advice from our eye care specialists</p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <Link href="/blog" key={index} className="blog-card">
              <div className="card-image">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="image-overlay"></div>
                <span className="category" style={{ background: blog.color }}>
                  <i className={`fas ${blog.icon}`}></i>
                  {blog.category}
                </span>
              </div>

              <div className="card-body">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <span className="read-more">
                  Read Article
                  <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="view-all-wrap">
          <Link href="/blog" className="view-all-btn">
            View All Articles
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          padding: 60px 20px 10px;
          background: linear-gradient(180deg, #fff 0%, #f8f6fc 100%);
        }

        .blog-container {
          max-width: 1300px;
          margin: 0 auto;
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
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 15px;
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

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 10px 40px rgba(113, 87, 160, 0.08);
          border: 1px solid rgba(113, 87, 160, 0.05);
          transition: all 0.4s ease;
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(113, 87, 160, 0.15);
        }

        .card-image {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .blog-card:hover .image-overlay {
          opacity: 1;
        }

        .blog-card:hover .card-image :global(img) {
          transform: scale(1.1);
        }

        .category {
          position: absolute;
          top: 12px;
          left: 12px;
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .category i {
          font-size: 0.7rem;
        }

        .card-body {
          padding: 22px 20px;
        }

        .card-body h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 10px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s;
        }

        .blog-card:hover .card-body h3 {
          color: #7157A0;
        }

        .card-body p {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          margin: 0 0 15px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #7157A0;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s;
        }

        .blog-card:hover .read-more {
          gap: 12px;
        }

        .view-all-wrap {
          text-align: center;
          margin-top: 30px;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.05rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.3);
        }

        .view-all-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(113, 87, 160, 0.4);
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .blog-section {
            padding: 40px 15px 10px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .card-image {
            height: 200px;
          }
        }
      `}</style>

      <style jsx global>{`
        .blog-card .card-image img {
          transition: transform 0.5s ease;
        }
      `}</style>
    </section>
  );
}
