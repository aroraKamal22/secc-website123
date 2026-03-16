'use client';

import Link from 'next/link';

export default function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav">
      <Link href="/#doctors" className="nav-item">
        <div className="nav-icon">
          <i className="fas fa-user-md"></i>
        </div>
        <span>Doctors</span>
      </Link>

      <Link href="/appointment" className="nav-item">
        <div className="nav-icon">
          <i className="fas fa-calendar-check"></i>
        </div>
        <span>Book Appt.</span>
      </Link>

      <a
        href="https://wa.me/919729236700"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item whatsapp"
      >
        <div className="nav-icon">
          <i className="fab fa-whatsapp"></i>
        </div>
        <span>Chat</span>
      </a>

      <a href="tel:+919729236700" className="nav-item call">
        <div className="nav-icon">
          <span className="badge-24-7">24/7</span>
          <i className="fas fa-phone-alt"></i>
        </div>
        <span>Call Us</span>
      </a>
    </nav>
  );
}
