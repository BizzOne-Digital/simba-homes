'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const steps = [
  { id: 1, title: 'Service' },
  { id: 2, title: 'Timeline' },
  { id: 3, title: 'Budget' },
  { id: 4, title: 'Details' },
];

const serviceOptions = ['Custom Home', 'Spec Home', 'Laneway Home', 'Backyard Studio', 'Multiplex / Duplex', 'Home Addition', 'Major Renovation', 'Land Development', 'Subdivision', 'Design & Permitting Only'];
const timelineOptions = ['Within 3 months', '3 – 6 months', '6 – 12 months', '1 – 2 years', 'Just exploring'];
const budgetOptions = ['Under $250K', '$250K – $500K', '$500K – $750K', '$750K – $1M', '$1M – $2M', '$2M+', 'Not sure yet'];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ service: '', timeline: '', budget: '', name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const next = () => setStep(s => Math.min(s + 1, 4));
  const back = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    if (!form.name || !form.email) { setError('Please fill in your name and email.'); return; }
    setSubmitting(true); setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) { setSent(true); } else { setError(data.error || 'Something went wrong. Please try again.'); }
    } catch { setError('Network error. Please call us directly.'); }
    finally { setSubmitting(false); }
  };

  const chipStyle = (selected: boolean): React.CSSProperties => ({
    padding: '12px 20px',
    border: selected ? '2px solid #D01C2A' : '1px solid rgba(255,255,255,0.12)',
    background: selected ? 'rgba(208,28,42,0.12)' : '#1E2533',
    color: selected ? '#fff' : '#718096',
    cursor: 'pointer',
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    transition: 'all 0.2s',
  });

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#1E2533', border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff', padding: '14px 18px', fontSize: '14px',
    fontFamily: 'Inter, sans-serif', outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '360px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80" alt="Contact Simba Homes" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.92)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Let's Build Together</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff' }}>START YOUR PROJECT</h1>
          <p style={{ color: '#718096', fontSize: '16px', marginTop: '12px' }}>Tell us about your project in 4 quick steps — we'll get back to you within 24 hours.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#718096' }}>Home</Link>
            <span style={{ color: '#4A5568' }}>/</span>
            <span style={{ fontSize: '13px', color: '#D01C2A' }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Main section */}
      <section style={{ background: '#1E2533', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '64px', alignItems: 'start' }}>

          {/* Left — contact info */}
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Direct Contact</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: '#fff', marginBottom: '24px' }}>REACH US DIRECTLY</h2>
            <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.8, marginBottom: '36px' }}>Prefer to talk? Contact Parminder directly via phone, email, or WhatsApp.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <a href="mailto:info@simbahomes.ca" style={{ display: 'flex', gap: '14px', alignItems: 'center', background: '#252D3D', padding: '18px 20px', borderLeft: '3px solid #D01C2A', textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D01C2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', color: '#4A5568', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2px' }}>Email</div>
                  <div style={{ fontSize: '14px', color: '#fff' }}>info@simbahomes.ca</div>
                </div>
              </a>
              <a href="tel:+17787077325" style={{ display: 'flex', gap: '14px', alignItems: 'center', background: '#252D3D', padding: '18px 20px', borderLeft: '3px solid #D01C2A', textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D01C2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', color: '#4A5568', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2px' }}>Phone</div>
                  <div style={{ fontSize: '14px', color: '#fff' }}>778 707 7325</div>
                </div>
              </a>
              <a href="https://wa.me/17787077325" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '14px', alignItems: 'center', background: '#252D3D', padding: '18px 20px', borderLeft: '3px solid #25D366', textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', color: '#4A5568', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2px' }}>WhatsApp</div>
                  <div style={{ fontSize: '14px', color: '#fff' }}>778 707 7325</div>
                </div>
              </a>
            </div>

            <div style={{ background: '#252D3D', padding: '20px', borderTop: '2px solid #D01C2A' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D01C2A', marginBottom: '8px' }}>Response Time</div>
              <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.7 }}>We respond to all inquiries within <strong style={{ color: '#CBD5E0' }}>24 business hours</strong>.</p>
            </div>
          </div>

          {/* Right — Multi-step form */}
          <div style={{ background: '#252D3D', borderTop: '4px solid #D01C2A' }}>
            {sent ? (
              <div style={{ padding: '56px 40px', textAlign: 'center' }}>
                <div style={{ width: '72px', height: '72px', background: '#D01C2A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="32" height="24" viewBox="0 0 32 24"><path d="M2 12l8 8L30 2" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '12px' }}>PROJECT SUBMITTED!</h3>
                <p style={{ color: '#718096', fontSize: '15px', lineHeight: 1.7, marginBottom: '8px' }}>Thank you, <strong style={{ color: '#CBD5E0' }}>{form.name}</strong>. Parminder will contact you within 24 business hours.</p>
                <p style={{ color: '#718096', fontSize: '13px' }}>Service: {form.service} &nbsp;·&nbsp; Budget: {form.budget}</p>
              </div>
            ) : (
              <div style={{ padding: '40px' }}>
                {/* Step indicator */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '36px' }}>
                  {steps.map((s, i) => (
                    <div key={s.id} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 0 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '50%',
                          background: step > s.id ? '#D01C2A' : step === s.id ? '#D01C2A' : '#1E2533',
                          border: step >= s.id ? 'none' : '1px solid rgba(255,255,255,0.15)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700,
                          color: step >= s.id ? '#fff' : '#4A5568',
                        }}>
                          {step > s.id ? <svg width="12" height="10" viewBox="0 0 12 10"><path d="M1 5l4 4L11 1" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg> : s.id}
                        </div>
                        <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: step >= s.id ? '#D01C2A' : '#4A5568', whiteSpace: 'nowrap' }}>{s.title}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div style={{ flex: 1, height: '1px', background: step > s.id ? '#D01C2A' : 'rgba(255,255,255,0.1)', margin: '0 8px', marginBottom: '20px' }} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1 — Service */}
                {step === 1 && (
                  <div>
                    <h3 style={{ fontSize: '22px', color: '#fff', marginBottom: '6px' }}>WHAT CAN WE BUILD FOR YOU?</h3>
                    <p style={{ fontSize: '13px', color: '#718096', marginBottom: '24px' }}>Select the service that best fits your project.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '32px' }}>
                      {serviceOptions.map(opt => (
                        <button key={opt} onClick={() => setForm({...form, service: opt})} style={chipStyle(form.service === opt)}>
                          {opt}
                        </button>
                      ))}
                    </div>
                    <button onClick={next} disabled={!form.service} className="btn-primary" style={{ width: '100%', border: 'none', cursor: form.service ? 'pointer' : 'not-allowed', opacity: form.service ? 1 : 0.4 }}>
                      Next: Timeline →
                    </button>
                  </div>
                )}

                {/* Step 2 — Timeline */}
                {step === 2 && (
                  <div>
                    <h3 style={{ fontSize: '22px', color: '#fff', marginBottom: '6px' }}>WHAT'S YOUR TIMELINE?</h3>
                    <p style={{ fontSize: '13px', color: '#718096', marginBottom: '24px' }}>When are you looking to start your project?</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
                      {timelineOptions.map(opt => (
                        <button key={opt} onClick={() => setForm({...form, timeline: opt})} style={chipStyle(form.timeline === opt)}>
                          {opt}
                        </button>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button onClick={back} style={{ flex: 1, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#718096', padding: '14px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>← Back</button>
                      <button onClick={next} disabled={!form.timeline} className="btn-primary" style={{ flex: 2, border: 'none', cursor: form.timeline ? 'pointer' : 'not-allowed', opacity: form.timeline ? 1 : 0.4 }}>Next: Budget →</button>
                    </div>
                  </div>
                )}

                {/* Step 3 — Budget */}
                {step === 3 && (
                  <div>
                    <h3 style={{ fontSize: '22px', color: '#fff', marginBottom: '6px' }}>ESTIMATED BUDGET RANGE?</h3>
                    <p style={{ fontSize: '13px', color: '#718096', marginBottom: '24px' }}>This helps us tailor our recommendation to your project.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '32px' }}>
                      {budgetOptions.map(opt => (
                        <button key={opt} onClick={() => setForm({...form, budget: opt})} style={chipStyle(form.budget === opt)}>
                          {opt}
                        </button>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button onClick={back} style={{ flex: 1, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#718096', padding: '14px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>← Back</button>
                      <button onClick={next} disabled={!form.budget} className="btn-primary" style={{ flex: 2, border: 'none', cursor: form.budget ? 'pointer' : 'not-allowed', opacity: form.budget ? 1 : 0.4 }}>Next: Your Info →</button>
                    </div>
                  </div>
                )}

                {/* Step 4 — Details */}
                {step === 4 && (
                  <div>
                    <h3 style={{ fontSize: '22px', color: '#fff', marginBottom: '6px' }}>YOUR CONTACT DETAILS</h3>
                    <p style={{ fontSize: '13px', color: '#718096', marginBottom: '24px' }}>Almost done — how should we reach you?</p>

                    {/* Summary */}
                    <div style={{ background: '#1E2533', padding: '14px 16px', marginBottom: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      {[['Service', form.service], ['Timeline', form.timeline], ['Budget', form.budget]].map(([k, v]) => (
                        <div key={k}>
                          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '9px', color: '#4A5568', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{k}</div>
                          <div style={{ fontSize: '12px', color: '#D01C2A', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>{v}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#718096', marginBottom: '6px' }}>Full Name *</label>
                        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="John Smith" style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#D01C2A'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#718096', marginBottom: '6px' }}>Email *</label>
                        <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@email.com" style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#D01C2A'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                      </div>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <label style={{ display: 'block', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#718096', marginBottom: '6px' }}>Phone / WhatsApp</label>
                      <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+1 (778) 000-0000" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#D01C2A'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#718096', marginBottom: '6px' }}>Additional Details</label>
                      <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                        placeholder="Property address, lot size, any specific requirements..." style={{...inputStyle, resize: 'vertical' as const}}
                        onFocus={e => e.target.style.borderColor = '#D01C2A'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>

                    {error && <div style={{ background: 'rgba(208,28,42,0.1)', border: '1px solid rgba(208,28,42,0.3)', color: '#ff6b6b', padding: '10px 14px', fontSize: '13px', marginBottom: '14px' }}>{error}</div>}

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button onClick={back} style={{ flex: 1, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#718096', padding: '14px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>← Back</button>
                      <button onClick={handleSubmit} disabled={submitting} className="btn-primary" style={{ flex: 2, border: 'none', cursor: submitting ? 'wait' : 'pointer', opacity: submitting ? 0.7 : 1 }}>
                        {submitting ? 'Submitting...' : 'Submit Project →'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1.8fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </>
  );
}
