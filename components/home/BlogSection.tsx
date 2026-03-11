'use client';

import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    image: '/images/blog1.png',
    title: 'How to Manage Dry Eyes in Air-Conditioned Environments',
    excerpt: 'Learn effective strategies to prevent and manage dry eyes in air-conditioned spaces during summer season.',
    category: 'Eye Care',
  },
  {
    image: '/images/blog2.png',
    title: 'Myopia in Children: Causes, Signs & Prevention',
    excerpt: 'Understanding childhood myopia, its causes, early warning signs, and effective prevention methods.',
    category: 'Pediatric',
  },
  {
    image: '/images/Blog4.png',
    title: 'Premium IOLs: Are They Right for You?',
    excerpt: 'Explore the advantages of premium intraocular lenses and make an informed decision for cataract surgery.',
    category: 'Cataract',
  },
  {
    image: '/images/Blog5.png',
    title: 'Anaesthesia in Cataract Surgery: What is Safer?',
    excerpt: 'Comparing topical vs injection anesthesia methods in cataract surgery and their safety profiles.',
    category: 'Cataract',
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h2>DOCTOR&apos;S <span>BLOG</span></h2>
          <p>Expert insights and tips from our eye care specialists</p>
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
                <span className="category">{blog.category}</span>
              </div>
              <div className="card-body">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <span className="read-more">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="view-all">
          <Link href="/blog" className="btn">
            View All Articles
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          padding: 80px 20px;
          background: #f8f6fc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 50px;
        }

        .header h2 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 12px;
        }

        .header h2 span {
          color: #7157A0;
        }

        .header p {
          color: #666;
          font-size: 1.05rem;
          margin: 0;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .blog-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(113, 87, 160, 0.15);
        }

        .card-image {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .blog-card:hover .card-image img {
          transform: scale(1.05);
        }

        .category {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #7157A0;
          color: white;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .card-body {
          padding: 20px;
        }

        .card-body h3 {
          font-size: 1rem;
          font-weight: 600;
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
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #7157A0;
          font-weight: 600;
          font-size: 0.9rem;
          transition: gap 0.3s;
        }

        .blog-card:hover .read-more {
          gap: 10px;
        }

        .view-all {
          text-align: center;
          margin-top: 45px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #7157A0;
          color: white;
          padding: 14px 35px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn:hover {
          background: #5d4787;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(113, 87, 160, 0.3);
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .blog-section {
            padding: 50px 15px;
          }

          .header h2 {
            font-size: 1.8rem;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .card-image {
            height: 200px;
          }
        }
      `}</style>

      <style jsx global>{`
        .blog-card .card-image img {
          transition: transform 0.4s ease;
        }
      `}</style>
    </section>
  );
}
