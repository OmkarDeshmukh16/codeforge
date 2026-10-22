import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

const reasons = [
  { label: 'General Inquiry', desc: 'Questions about CodeForge, our services or how we work.' },
  { label: 'Start a Project', desc: 'Discuss a product or software project you want to build.' },
  { label: 'Technology Consulting', desc: 'Need independent technical guidance or a second opinion.' },
  { label: 'Partnership', desc: 'Collaboration or partnership opportunities.' },
];

function ContactForm() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const update = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  return (
    <section ref={ref} className="relative bg-slate-50/60 dark:bg-[#070913] py-24 sm:py-32 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/[0.04] dark:bg-blue-600/[0.08] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-subtle-grid opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Context */}
          <div className="reveal">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400 mb-5">
              How Can We Help?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
              Let's start a{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                conversation.
              </span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              Tell us what you're building, what you're solving, or where you'd like to go next.
            </p>

            {/* Reason cards */}
            <div className="space-y-3">
              {reasons.map((r) => (
                <div key={r.label} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#0B0F1B]/70 border border-slate-200/80 dark:border-white/[0.07]">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-600/20 border border-blue-100 dark:border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white text-sm">{r.label}</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <div className="bg-white dark:bg-[#0C101D] rounded-2xl border border-slate-200 dark:border-white/[0.08] shadow-xl dark:shadow-[0_0_40px_rgba(37,99,235,0.15)] overflow-hidden">

              {/* Form Header */}
              <div className="px-7 py-5 border-b border-slate-200/80 dark:border-white/[0.06] bg-slate-50 dark:bg-[#090D18]">
                <h3 className="font-semibold text-slate-900 dark:text-white">Send us a message</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">We'll respond within one business day.</p>
              </div>

              {/* Form Body */}
              <div className="p-7">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Message Received</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. We'll review your message and get back to you shortly.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', reason: '', message: '' }); }}
                      className="mt-2 px-6 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.12] text-slate-800 dark:text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Name *</label>
                        <input type="text" required value={formData.name} onChange={update('name')} placeholder="Rahul Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/[0.06] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Company</label>
                        <input type="text" value={formData.company} onChange={update('company')} placeholder="Your Company"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/[0.06] transition-all" />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Email *</label>
                        <input type="email" required value={formData.email} onChange={update('email')} placeholder="rahul@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/[0.06] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Phone <span className="text-slate-400 normal-case font-normal">(optional)</span></label>
                        <input type="tel" value={formData.phone} onChange={update('phone')} placeholder="+91 9876543210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/[0.06] transition-all" />
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">What can we help with?</label>
                      <select value={formData.reason} onChange={update('reason')}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-all cursor-pointer">
                        <option value="">Select a reason...</option>
                        {reasons.map((r) => <option key={r.label} value={r.label}>{r.label}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Message *</label>
                      <textarea rows={4} required value={formData.message} onChange={update('message')} placeholder="Tell us about your project, idea or challenge..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/[0.06] transition-all resize-none" />
                    </div>

                    <button type="submit" disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all duration-200 disabled:opacity-60 cursor-pointer group">
                      {loading ? <span>Sending...</span> : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's start a"
        titleAccent="conversation."
        subtitle="Tell us what you're building, what you're solving, or where you'd like to go next. We'll take it from there."
      />
      <ContactForm />
    </>
  );
}
