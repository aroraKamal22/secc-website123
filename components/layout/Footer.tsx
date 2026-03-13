'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  'Eye Examination',
  'Cataract Services',
  'Retina Services',
  'Glaucoma Treatment',
  'Pediatric Ophthalmology',
  'Squint Services',
  'Branded Optical Shop',
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/video', label: 'Videos' },
  { href: '/blog', label: 'Blog' },
  { href: '/career', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-conditions', label: 'Terms of Use' },
  { href: '/cancellation-refund', label: 'Cancellation & Refund' },
  { href: '/shipping-delivery', label: 'Shipping & Delivery' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer style={{ background: '#1a1a2e', color: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '50px 24px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '35px'
        }}>
          {/* Logo & About */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Image
                src="/images/sarsawati__logo_21.png"
                alt="Saraswati Eye Care Centre Logo"
                width={80}
                height={80}
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 3px 12px rgba(113, 87, 160, 0.3))'
                }}
              />
            </div>
            <p style={{ color: '#999', fontSize: '0.95rem', lineHeight: 1.8 }}>
              Saraswati Eye Care Centre, established in 2010, is committed to providing the best eye care services with advanced technology and experienced professionals.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#FFD600', fontWeight: 600 }}>Our Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service) => (
                <li key={service} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: '#999', fontSize: '0.9rem', marginBottom: '10px'
                }}>
                  <svg width="12" height="12" fill="#7157A0" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#FFD600', fontWeight: 600 }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '10px' }}>
                  <Link href={link.href} style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    color: '#999', fontSize: '0.9rem', textDecoration: 'none',
                    transition: 'all 0.3s'
                  }} className="footer-link">
                    <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#FFD600', fontWeight: 600 }}>Connect With Us</h3>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {[
                { href: 'https://www.youtube.com/channel/UC20N0oFtFyMSQimvvfKUFzA', color: '#ff0000', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                { href: 'https://www.facebook.com/people/Saraswati-Eye-care-And-Retina-Centre/100057587073474/', color: '#1877f2', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { href: 'https://www.instagram.com/saraswatieyecarecentre/', color: '#e4405f', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="social-icon-footer"
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: '#2a2a40', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}>
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d={social.icon}/></svg>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <h4 style={{ fontSize: '0.9rem', marginBottom: '12px', color: '#ddd', fontWeight: 500 }}>Subscribe to Newsletter</h4>
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: '50px 0 0 50px',
                  background: '#2a2a40', border: '1px solid #3a3a50', borderRight: 'none',
                  color: 'white', fontSize: '0.9rem', outline: 'none'
                }}
              />
              <button type="submit" style={{
                padding: '12px 16px', background: '#7157A0',
                borderRadius: '0 50px 50px 0', border: 'none', color: 'white', cursor: 'pointer'
              }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Contact & Map */}
        <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #2a2a40' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#FFD600', fontWeight: 600 }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="tel:+919729236700" style={{
                  display: 'flex', alignItems: 'center', gap: '10px', color: '#999', textDecoration: 'none'
                }}>
                  <svg width="16" height="16" fill="#7157A0" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 97292-36700
                </a>
                <a href="mailto:saraswatieyecarecentre@gmail.com" style={{
                  display: 'flex', alignItems: 'center', gap: '10px', color: '#999', textDecoration: 'none'
                }}>
                  <svg width="16" height="16" fill="#7157A0" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  saraswatieyecarecentre@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '18px', color: '#FFD600', fontWeight: 600 }}>Our Location</h3>
              <div style={{ borderRadius: '12px', overflow: 'hidden', height: '180px', border: '1px solid #2a2a40' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13915.68726212107!2d76.325329!3d29.313969000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391204530f997803%3A0xcfaa462e2c2ba3c1!2sSaraswati%20Eye%20Care%20and%20Retina%20Centre!5e0!3m2!1sen!2sin!4v1746867451317!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        background: '#12121f', padding: '16px 24px', textAlign: 'center',
        color: '#666', fontSize: '0.85rem', borderTop: '1px solid #2a2a40'
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Saraswati Eye Care Centre. All rights reserved.</p>
      </div>

      <style jsx global>{`
        .footer-link:hover { color: white !important; transform: translateX(3px); }
        .social-icon-footer:hover { background: #7157A0 !important; transform: scale(1.1); }
      `}</style>
    </footer>
  );
}
