'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/warranty', label: 'Warranty' },
  { href: '/permitting', label: 'Permitting' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    fn();

    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      {/* ── TOP CONTACT STRIP ── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1001,
          background: '#D01C2A',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 48px',
        }}
      >
        <a
          href="mailto:info@simbahomes.ca"
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#fff', textDecoration: 'none',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em',
            padding: '0 16px', height: '36px',
            borderRight: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          info@simbahomes.ca
        </a>

        <a
          href="tel:+17787077325"
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#fff', textDecoration: 'none',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em',
            padding: '0 16px', height: '36px',
            borderRight: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          778 707 7325
        </a>

        <a
          href="https://wa.me/17787077325"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#fff', textDecoration: 'none',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em',
            padding: '0 16px', height: '36px',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>

      {/* ── ORIGINAL NAVBAR (unchanged) ── */}
      <nav
        style={{
          position: 'fixed',
          top: '36px',
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          background: scrolled
            ? 'rgba(255,255,255,0.98)'
            : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <Image
            src="/logo1.png"
            alt="Simba Homes Ltd"
            width={52}
            height={52}
            style={{ objectFit: 'contain' }}
          />

          <div style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 800,
                fontSize: '20px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#1E2533',
              }}
            >
              SIMBA HOMES
            </div>

            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.25em',
                color: '#D01C2A',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              LTD · BC CANADA
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div
          className="nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {links.map((l) => {
            const active = pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: '8px 16px',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: active ? '#D01C2A' : '#1E2533',
                  borderBottom: active
                    ? '2px solid #D01C2A'
                    : '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#D01C2A';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#1E2533';
                  }
                }}
              >
                {l.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            style={{
              marginLeft: '12px',
              padding: '12px 24px',
              background: '#D01C2A',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              transition: '0.3s',
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background:
                  i === 1 && open ? 'transparent' : '#1E2533',
                transition: 'all 0.3s ease',
                transform: open
                  ? i === 0
                    ? 'rotate(45deg) translate(5px,5px)'
                    : i === 2
                    ? 'rotate(-45deg) translate(5px,-5px)'
                    : ''
                  : '',
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '106px',
            background: '#ffffff',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '36px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color:
                  pathname === l.href ? '#D01C2A' : '#1E2533',
                padding: '8px 0',
              }}
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: '20px',
              padding: '14px 28px',
              background: '#D01C2A',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .nav-links {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }
        }

        @media (max-width: 600px) {
          nav {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </>
  );
}