'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/video', label: 'Videos' },
  { href: '/blog', label: 'Blog' },
  { href: '/equipment', label: 'Equipments' },
  { href: '/empanelment', label: 'Empanelment' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'white',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s'
      }}>
        {/* Top Bar */}
        <div style={{
          background: 'linear-gradient(135deg, #7157A0 0%, #8B6BC4 100%)',
          padding: '10px 20px'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            {/* Contact Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="mailto:saraswatieyecarecentre@gmail.com" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: 'white', textDecoration: 'none', fontSize: '0.9rem'
              }}>
                <svg width="16" height="16" fill="#FFD600" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="hide-on-small">saraswatieyecarecentre@gmail.com</span>
              </a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }} className="hide-on-small">|</span>
              <a href="tel:+919729236700" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: 'white', textDecoration: 'none', fontSize: '0.9rem'
              }}>
                <svg width="16" height="16" fill="#FFD600" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 97292-36700
              </a>
            </div>

            {/* Social & Appointment */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {[
                { href: 'https://www.youtube.com/channel/UC20N0oFtFyMSQimvvfKUFzA', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                { href: 'https://www.facebook.com/people/Saraswati-Eye-care-And-Retina-Centre/100057587073474/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { href: 'https://www.instagram.com/saraswatieyecarecentre/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d={social.icon}/></svg>
                </a>
              ))}
              <Link href="/appointment" style={{
                marginLeft: '8px', background: '#FFD600', color: '#7157A0',
                padding: '8px 20px', borderRadius: '50px', fontWeight: 600,
                fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px',
                textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <span className="hide-on-small">Appointment</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 20px'
        }}>
          {/* Logo */}
          <Link href="/" className="logo-link">
            <Image
              src="/images/sarsawati__logo_21.png"
              alt="Saraswati Eye Care Centre"
              width={280}
              height={80}
              quality={100}
              priority
              className="header-logo-img"
              style={{
                objectFit: 'contain',
                height: '70px',
                width: 'auto',
                maxWidth: '260px'
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                color: '#444', fontWeight: 500, fontSize: '0.95rem',
                padding: '10px 14px', borderRadius: '8px', textDecoration: 'none',
                transition: 'all 0.3s'
              }} className="nav-link">{link.label}</Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="mobile-menu-btn" style={{
            display: 'none', padding: '8px', borderRadius: '8px',
            border: 'none', background: '#f5f5f5', color: '#7157A0', cursor: 'pointer'
          }} aria-label="Open menu">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Scroll indicator */}
        {isScrolled && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
            background: 'linear-gradient(90deg, #7157A0, #FFD600, #8B6BC4)'
          }} />
        )}
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navLinks={navLinks} />

      {/* Spacer */}
      <div style={{ height: '115px' }} />

      <style jsx global>{`
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .logo-link:hover .header-logo-img {
          transform: scale(1.03);
          filter: drop-shadow(0 4px 12px rgba(113, 87, 160, 0.25));
        }
        .header-logo-img {
          transition: all 0.3s ease;
        }
        .nav-link:hover { color: #7157A0 !important; background: rgba(113, 87, 160, 0.08) !important; }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
          .header-logo-img { height: 55px !important; max-width: 200px !important; }
        }
        @media (max-width: 600px) {
          .hide-on-small { display: none !important; }
          .header-logo-img { height: 50px !important; max-width: 180px !important; }
        }
        @media (max-width: 400px) {
          .header-logo-img { height: 45px !important; max-width: 160px !important; }
        }
      `}</style>
    </>
  );
}
