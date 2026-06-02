'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '380px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80" alt="Contact Simba Homes" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.9)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Get In Touch</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff' }}>CONTACT US</h1>
          <p style={{ color: '#718096', fontSize: '16px', marginTop: '12px' }}>
            Ready to start your project? We'd love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Reach Out</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '16px' }}>
              LET'S BUILD SOMETHING GREAT
            </h2>
            <p style={{ color: '#718096', fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Contact Parminder directly via email, phone, or WhatsApp. We respond to all inquiries within 24 hours.
            </p>
          </div>

          {/* 3 contact cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginBottom: '64px' }}>

            {/* Email */}
            <a href="mailto:info@simbahomes.ca" style={{
              background: '#252D3D', padding: '48px 36px', textDecoration: 'none',
              borderTop: '4px solid #D01C2A', display: 'flex', flexDirection: 'column',
              alignItems: 'center', textAlign: 'center', gap: '20px',
              transition: 'background 0.25s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#2F3A52'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#252D3D'}
            >
              <div style={{ width: '64px', height: '64px', background: '#D01C2A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D01C2A', marginBottom: '10px' }}>Email Us</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>info@simbahomes.ca</div>
                <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.6 }}>Send us your project details and we'll get back to you within 24 hours.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D01C2A', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 'auto' }}>
                Send Email
                <svg width="14" height="8" viewBox="0 0 16 10"><path d="M0 5h14M10 1l4 4-4 4" stroke="#D01C2A" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+17787077325" style={{
              background: '#252D3D', padding: '48px 36px', textDecoration: 'none',
              borderTop: '4px solid #4A5568', display: 'flex', flexDirection: 'column',
              alignItems: 'center', textAlign: 'center', gap: '20px',
              transition: 'background 0.25s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#2F3A52'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#252D3D'}
            >
              <div style={{ width: '64px', height: '64px', background: '#4A5568', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#718096', marginBottom: '10px' }}>Call Us</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>778 707 7325</div>
                <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.6 }}>Speak directly with Parminder about your project. Available Mon–Sat.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#718096', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 'auto' }}>
                Call Now
                <svg width="14" height="8" viewBox="0 0 16 10"><path d="M0 5h14M10 1l4 4-4 4" stroke="#718096" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/17787077325" target="_blank" rel="noopener noreferrer" style={{
              background: '#252D3D', padding: '48px 36px', textDecoration: 'none',
              borderTop: '4px solid #25D366', display: 'flex', flexDirection: 'column',
              alignItems: 'center', textAlign: 'center', gap: '20px',
              transition: 'background 0.25s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#2F3A52'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#252D3D'}
            >
              <div style={{ width: '64px', height: '64px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#25D366', marginBottom: '10px' }}>WhatsApp</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>778 707 7325</div>
                <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.6 }}>Message us on WhatsApp for quick replies and project photos.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#25D366', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 'auto' }}>
                Message Us
                <svg width="14" height="8" viewBox="0 0 16 10"><path d="M0 5h14M10 1l4 4-4 4" stroke="#25D366" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </div>
            </a>
          </div>

          {/* Bottom info strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {[
              { label: 'Location', value: 'British Columbia, Canada' },
              { label: 'Hours', value: 'Mon – Sat · 8AM to 6PM' },
              { label: 'Response Time', value: 'Within 24 Business Hours' },
            ].map(item => (
              <div key={item.label} style={{ background: '#1E2533', padding: '24px 32px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D01C2A', marginBottom: '8px' }}>{item.label}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '16px', fontWeight: 600, color: '#CBD5E0' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#D01C2A', padding: '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '16px' }}>READY TO START YOUR PROJECT?</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>
          Call or WhatsApp Parminder today for a free consultation.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+17787077325" style={{ background: '#fff', color: '#D01C2A', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block' }}>
            Call Now
          </a>
          <a href="https://wa.me/17787077325" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#fff', padding: '14px 40px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block', border: '2px solid rgba(255,255,255,0.5)' }}>
            WhatsApp Us
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="repeat(3"] { grid-template-columns: 1fr !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </>
  );
}