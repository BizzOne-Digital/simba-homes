'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#131929', borderTop: '3px solid #D01C2A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: '48px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Image src="/logo1.png" alt="Simba Homes" width={60} height={60} style={{ objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#fff' }}>SIMBA HOMES LTD</div>
                <div style={{ fontSize: '10px', color: '#D01C2A', letterSpacing: '0.2em', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>METRO VANCOUVER · BC CANADA</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.7, maxWidth: '280px', marginBottom: '28px' }}>
              End-to-end custom home construction engineered with milestone-driven timelines and total budget transparency across Metro Vancouver.
            </p>

            {/* Warranty logos block */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A5568', marginBottom: '12px' }}>Warranty Protected By</div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                {/* WBI Logo badge */}
                <div style={{ background: '#D01C2A', padding: '8px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '0.05em' }}>WBI</div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '7px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1px' }}>HOME WARRANTY</div>
                </div>
                {/* BC Housing Logo badge */}
                <div style={{ background: '#2F3A52', border: '1px solid rgba(255,255,255,0.15)', padding: '8px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '0.05em' }}>BC HOUSING</div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '7px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1px' }}>REGISTERED BUILDER</div>
                </div>
                {/* 2-5-10 badge */}
                <div style={{ background: '#1E2533', border: '1px solid rgba(208,28,42,0.4)', padding: '8px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 800, color: '#D01C2A', lineHeight: 1 }}>2·5·10</div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '7px', color: '#718096', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1px' }}>YEAR WARRANTY</div>
                </div>
              </div>
            </div>

            {/* Google rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ color: '#F5A623', fontSize: '14px' }}>★★★★★</div>
              <span style={{ fontSize: '12px', color: '#718096' }}>4.9 Google Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>Services</div>
            {['Custom & Spec Homes', 'Laneway Homes', 'Multiplexes', 'Land Development', 'Renovation', 'Design & Permitting'].map(s => (
              <Link key={s} href="/services" style={{ display: 'block', fontSize: '13px', color: '#718096', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#718096'}
              >{s}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>Company</div>
            {[['About Us', '/about'], ['Our Projects', '/projects'], ['Warranty', '/warranty'], ['Contact', '/contact']].map(([l, h]) => (
              <Link key={l} href={h} style={{ display: 'block', fontSize: '13px', color: '#718096', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#718096'}
              >{l}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>Contact Us</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>, href: 'tel:+17787077325', text: '+1 778 707 7325' },
                { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, href: 'mailto:info@simbahomes.ca', text: 'info@simbahomes.ca' },
                { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>, href: '#', text: 'Metro Vancouver, BC' },
              ].map((c, i) => (
                <a key={i} href={c.href} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#CBD5E0', textDecoration: 'none', fontSize: '14px' }}>
                  <svg style={{ marginTop: '2px', flexShrink: 0 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D01C2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                  {c.text}
                </a>
              ))}
              {/* WhatsApp */}
              <a href="https://wa.me/17787077325" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#25D366', textDecoration: 'none', fontSize: '14px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}>
                <svg style={{ marginTop: '2px', flexShrink: 0 }} width="15" height="15" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 48px', maxWidth: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ fontSize: '12px', color: '#4A5568', maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>© {new Date().getFullYear()} Simba Homes Ltd. All rights reserved. BC Licensed Residential Builder.</span>
          <span style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#4A5568', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#D01C2A'} onMouseLeave={e => e.currentTarget.style.color = '#4A5568'}>Privacy Policy</a>
            <a href="#" style={{ color: '#4A5568', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#D01C2A'} onMouseLeave={e => e.currentTarget.style.color = '#4A5568'}>Terms</a>
          </span>
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) { footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { footer > div > div:first-child { grid-template-columns: 1fr !important; } footer > div { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </footer>
  );
}
