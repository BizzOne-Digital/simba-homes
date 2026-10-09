'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const stats = [
  { num: '4.9★', label: 'Google Rating' },
  { num: '2-5-10', label: 'Year Warranty' },
  { num: 'BC', label: 'Lower Mainland' },
];

const services = [
  { title: 'Custom & Spec Homes', img: '/img1.png', href: '/services' },
  { title: 'Laneway & Multiplex', img: '/img2.jpeg', href: '/services' },
  { title: 'Land Development', img: '/img3.png', href: '/services' },
  { title: 'Renovation & Additions', img: '/img4.png', href: '/services' },
];

const process = [
  { num: '01', title: 'Feasibility Deep-Dive', desc: 'We analyse your property\'s zoning bylaws, setbacks, floor area ratios, and tree protection. You know exactly what is buildable before we draw a single line.' },
  { num: '02', title: 'Compliance-First Design', desc: 'We design to BC Building Code and local municipal requirements from day one — integrating energy modeling (Step Code) and engineering early to eliminate costly revisions.' },
  { num: '03', title: 'City Liaison', desc: 'We become the point of contact for City Hall. We handle plan checkers, technical questions, and inspectors. You never chase bureaucrats — we do it for you.' },
  { num: '04', title: 'Permit Secured & Build', desc: 'Once the Building Permit is issued, we break ground immediately. Budget and schedule are locked during permitting — so construction starts without delay.' },
];

export default function HomePage() {
  const s1 = useVisible();
  const s2 = useVisible();
  const s3 = useVisible();
  const s4 = useVisible();

  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/hero.png" alt="Luxury custom home BC" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority unoptimized />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(30,37,51,0.88) 0%, rgba(30,37,51,0.72) 50%, rgba(30,37,51,0.35) 100%)' }} />
        </div>
        <div style={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: '4px', background: '#D01C2A', zIndex: 2 }} />

        <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 48px 0 64px' }}>
          <div style={{ maxWidth: '700px', animation: 'fadeUp 0.9s ease 0.1s both' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span className="section-label">Lower Mainland British Columbia · British Columbia</span>
            </div>

            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(42px, 6.5vw, 82px)', marginBottom: '8px', color: '#fff', textTransform: 'uppercase', lineHeight: 1.05 }}>
              WE DON'T JUST
            </h1>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(42px, 6.5vw, 82px)', marginBottom: '28px', color: '#D01C2A', textTransform: 'uppercase', lineHeight: 1.05 }}>
              BUILD HOMES
            </h1>

            <p style={{ fontSize: '17px', color: '#CBD5E0', lineHeight: 1.8, maxWidth: '540px', marginBottom: '40px', fontWeight: 300 }}>
              End-to-end custom home construction, delivered with milestone-driven timelines and complete budget transparency across the Lower Mainland, British Columbia — licensed builder registered with BC Housing, backed by the 2-5-10 Warranty on all new homes
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
              <Link href="/contact" className="btn-primary">Start Your Project</Link>
              <Link href="/services" className="btn-outline">Our Services</Link>
            </div>

            {/* Stats */}
            <div className="grid-4" style={{ display: 'grid', gap: '0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ paddingRight: '24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: i > 0 ? '24px' : '0' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '28px', fontWeight: 800, color: '#D01C2A', lineHeight: 1, whiteSpace: 'pre-line' }}>{s.num}</div>
                  <div style={{ fontSize: '11px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'fadeIn 2s ease 1s both', zIndex: 2 }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#718096' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #D01C2A, transparent)' }} />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section ref={s1.ref} style={{ background: '#F4F6F9', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px', opacity: s1.visible ? 1 : 0, transform: s1.visible ? 'none' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '10px' }}>Specialized Services</div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#1E2533' }}>WHAT WE BUILD</h2>
            </div>
            <Link href="/services" style={{ color: '#D01C2A', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
              All Services
              <svg width="16" height="10" viewBox="0 0 16 10"><path d="M0 5h14M10 1l4 4-4 4" stroke="#D01C2A" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </Link>
          </div>
          <div className="grid-4" style={{ display: 'grid', gap: '2px', opacity: s1.visible ? 1 : 0, transition: 'opacity 0.7s ease 0.2s' }}>
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', display: 'block' }}>
                <Image src={s.img} alt={s.title} fill style={{ objectFit: 'cover' }} unoptimized />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,37,51,0.97) 0%, rgba(30,37,51,0.15) 60%)' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '20px', right: '20px' }}>
                  <div style={{ width: '28px', height: '3px', background: '#D01C2A', marginBottom: '10px' }} />
                  <h3 style={{ fontSize: '18px', color: '#fff', letterSpacing: '0.03em', lineHeight: 1.2 }}>{s.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section ref={s2.ref} style={{ background: '#FFFFFF', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px', opacity: s2.visible ? 1 : 0, transform: s2.visible ? 'none' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>How We Work</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#1E2533', marginBottom: '16px' }}>FROM RED TAPE TO GREEN LIGHT</h2>
            <p style={{ color: '#4A5568', fontSize: '15px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              We don't just submit plans and hope for the best — we manage the permitting process proactively so your build starts on time, every time.
            </p>
          </div>
          <div className="grid-4" style={{ display: 'grid', gap: '2px', opacity: s2.visible ? 1 : 0, transition: 'opacity 0.7s ease 0.3s' }}>
            {process.map((p, i) => (
              <div key={i} style={{ background: '#F4F6F9', padding: '36px 28px', borderTop: '3px solid #D01C2A', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '72px', fontWeight: 800, color: 'rgba(208,28,42,0.08)', position: 'absolute', top: '-8px', right: '8px', lineHeight: 1 }}>{p.num}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#D01C2A', marginBottom: '12px' }}>STEP {p.num}</div>
                <h3 style={{ fontSize: '18px', color: '#1E2533', marginBottom: '14px', position: 'relative', lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: '#4A5568', lineHeight: 1.7, position: 'relative' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE ZONING REPORT */}
      <section style={{ background: '#1E2533', padding: '90px 48px' }}>
        <div className="grid-2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '64px', alignItems: 'center' }}>
          <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
            <Image src="/img3.png" alt="Free property zoning report" fill style={{ objectFit: 'cover' }} unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(208,28,42,0.18) 0%, transparent 55%)' }} />
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Free For Property Owners</div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: '#fff', marginBottom: '10px', lineHeight: 1.1 }}>FREE PROPERTY ZONING REPORT</h2>
            <p style={{ fontSize: '16px', color: '#D01C2A', fontWeight: 600, marginBottom: '20px' }}>Find out how many units you can build.</p>
            <p style={{ fontSize: '15px', color: '#CBD5E0', lineHeight: 1.8, marginBottom: '28px' }}>
              If you own a building lot or residential property, we will create a free Property Zoning &amp; Density Analysis for your specific property — no strings attached.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
              {[
                'A full planning & development breakdown — zoning, density and options for your property.',
                'Special government grants and incentives that may be available to help fund your project.',
                'A clear development opinion so you can pursue the most promising, profitable path forward.',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '22px', height: '22px', background: '#D01C2A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3L9 1" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontSize: '14px', color: '#CBD5E0', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary">Get My Free Zoning Report</Link>
          </div>
        </div>
      </section>

      {/* WHY SIMBA */}
      <section ref={s3.ref} style={{ background: '#F4F6F9', padding: '100px 48px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gap: '80px', alignItems: 'center' }}>
            <div style={{ position: 'relative', opacity: s3.visible ? 1 : 0, transform: s3.visible ? 'none' : 'translateX(-30px)', transition: 'all 0.8s ease', maxWidth: '100%' }}>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                <Image src="/per.jpeg" alt="Simba Homes construction" fill style={{ objectFit: 'cover' }} unoptimized />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(208,28,42,0.15) 0%, transparent 60%)' }} />
              </div>
              <div className="review-badge" style={{ position: 'absolute', bottom: '-24px', right: '-24px', background: '#D01C2A', padding: '28px 32px', minWidth: '180px' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', color: '#fff', lineHeight: 1.5, textTransform: 'uppercase' }}>See Our<br />Google Reviews</div>
                <div style={{ fontSize: '24px', marginTop: '6px' }}>★★★★★</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>4.9 / 5.0 Rating</div>
              </div>
            </div>

            <div style={{ opacity: s3.visible ? 1 : 0, transform: s3.visible ? 'none' : 'translateX(30px)', transition: 'all 0.8s ease 0.2s' }}>
              <div className="section-label" style={{ marginBottom: '12px' }}>Why Simba Homes</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', color: '#1E2533', marginBottom: '24px' }}>PRECISION BUILDING FOR THE BC LIFESTYLE.</h2>
              <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.8, marginBottom: '16px' }}>
                Simba Homes was established to set a new standard for residential construction in BC. In an industry often plagued by delays and budget overruns, we distinguish ourselves through meticulous planning and unwavering accountability.
              </p>
              <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.8, marginBottom: '32px' }}>
                We specialize in high-performance homes designed to meet modern energy standards. Our team has deep knowledge of local zoning bylaws and permitting — solving potential issues before they ever reach the job site.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
                {[
                  'Milestone-driven timelines — no surprise delays',
                  'Transparent, milestone-driven budgeting — no surprise change orders',
                  'Deep zoning & BC Building Code expertise',
                  'BC Housing 2-5-10 Warranty on all new homes',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', background: '#D01C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3L9 1" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: '14px', color: '#1E2533', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE PROJECT DELIVERY */}
      <section style={{ background: '#FFFFFF', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Start To Finish</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#1E2533', marginBottom: '16px' }}>COMPLETE PROJECT DELIVERY</h2>
            <p style={{ color: '#4A5568', fontSize: '15px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              From the foundation up to the finishing touches — we manage every stage of your project under one roof.
            </p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              {
                title: 'Foundation & Structural',
                desc: 'A licensed builder pours every foundation — engineered footings, structural framing, and code-compliant work you can trust from day one.',
                icon: <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />,
              },
              {
                title: 'Renovation & Additions',
                desc: 'Flooring, siding, kitchens and complete home renovations — built with care, precision and professionalism, one project at a time.',
                icon: <><path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" /><path d="M9 21V12h6v9" /></>,
              },
              {
                title: 'Interior Design & Living Spaces',
                desc: 'From concept to completion, we design and build custom interiors that fit your lifestyle — we manage every detail.',
                icon: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 10h18M9 10v10" /></>,
              },
            ].map((f, i) => (
              <div key={i} style={{ background: '#F4F6F9', padding: '40px 32px', borderTop: '3px solid #D01C2A' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D01C2A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}>{f.icon}</svg>
                <h3 style={{ fontSize: '18px', color: '#1E2533', marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ fontSize: '13px', color: '#4A5568', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 900px) { .grid-3 { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* CTA BANNER */}
      <section ref={s4.ref} style={{ position: 'relative', padding: '80px 48px', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80" alt="Start your project" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(244,246,249,0.93)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px', opacity: s4.visible ? 1 : 0, transform: s4.visible ? 'none' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Ready to Start?</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#1E2533' }}>YOUR DREAM. OUR EXPERTISE.</h2>
            <p style={{ fontSize: '15px', color: '#4A5568', marginTop: '8px' }}>Contact us today — free project consultation.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get Free Quote</Link>
            <a href="tel:+17787077325" className="btn-outline" style={{ color: '#1E2533', borderColor: 'rgba(30,37,51,0.3)' }}>+1 778 707 7325</a>
          </div>
        </div>
      </section>

      <style>{`
        .grid-4 { grid-template-columns: repeat(4, 1fr); }
        .grid-2 { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .grid-2 { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          .grid-4 { grid-template-columns: 1fr !important; }
          .review-badge { position: static !important; margin-top: 16px !important; width: 100% !important; box-sizing: border-box !important; }
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </>
  );
}
