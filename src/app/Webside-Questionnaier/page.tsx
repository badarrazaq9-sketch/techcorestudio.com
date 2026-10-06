'use client';

import { useState, useRef } from 'react';
import Head from 'next/head';
import {
  CheckCircle,
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  Globe,
  Link2,
  Palette,
  CreditCard,
  FileText,
  Lightbulb,
  MessageSquare,
  Server,
  Send,
  Upload,
  Check,
  X
} from 'lucide-react';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function WorkbookPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [logoChoice, setLogoChoice] = useState('');
  const [hasWebsite, setHasWebsite] = useState('');
  const [hasDomain, setHasDomain] = useState('');
  const [hasHosting, setHasHosting] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    clientName: '',
    email: '',
    phone: '',
    industry: '',

    businessName: '',
    businessSlogan: '',

    purpose: '',
    existingWebsiteUrl: '',
    colorPreferences: '',

    competitors: '',
    paymentIntegration: '',
    specificRequirements: '',

    contentPages: '',
    otherSuggestions: '',

    domainProvider: '',
    domainUsername: '',

    hostingProvider: '',
    hostingUsername: '',

    notes: ''
  });

  const update = (k: string, v: string) => {
    setForm((p) => ({
      ...p,
      [k]: v
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      console.log('📤 Sending website questionnaire...');

      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          logoChoice,
          hasWebsite,
          hasDomain,
          hasHosting
        })
      });

      const data = await res.json();

      console.log('📥 API response:', data);

      if (data.success) {
        setDone(true);
      } else {
        console.error('❌ Submission failed:', data.error);

        alert(
          data.error ||
          'Something went wrong while submitting the questionnaire.'
        );
      }
    } catch (error) {
      console.error('❌ Network error:', error);

      alert(
        'Unable to submit the questionnaire. Please try again.'
      );
    }

    setLoading(false);
  };

  if (done) {
    return (
      <>
        <Head>
          <title>Thank You - TechCore Studio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-8 relative z-10">
          <div className="glass rounded-3xl p-10 max-w-md w-full text-center">

            <div className="w-20 h-20 bg-[#5d67f2] rounded-full flex items-center justify-center mx-auto mb-6 glow-blue">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl font-black text-white mb-3">
              Thank You!
            </h2>

            <p className="text-white/60 mb-6">
              We received your requirements. We'll contact you within{' '}
              <span className="font-bold text-[#5d67f2]">
                24 hours
              </span>.
            </p>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-wide">
                Reference ID
              </p>

              <p className="font-mono font-bold text-white text-lg mt-1">
                DL-{Date.now().toString(36).toUpperCase()}
              </p>
            </div>

          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Website Requirements - TechCore Studio</title>

        <meta
          name="description"
          content="TechCore Studio Website Requirements Workbook"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="min-h-screen px-4 pt-24 pb-8 relative z-10">

        <div className="max-w-3xl mx-auto">

          {/* HEADER */}

          <div className="text-center mb-10">

            <h1 className="text-3xl font-black gradient-text mb-2">
              Website Workbook
            </h1>

            <p className="text-white/60 font-medium">
              Fill everything below. We'll handle the rest.
            </p>

          </div>

          <form
            onSubmit={submit}
            className="space-y-6"
          >

            {/* CLIENT INFORMATION */}

            <div className="glass rounded-2xl p-6">

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">

                <div className="w-10 h-10 bg-[#5d67f2]/20 rounded-xl flex items-center justify-center">

                  <User className="w-5 h-5 text-[#5d67f2]" />

                </div>

                <h2 className="text-xl font-black text-white">
                  Client Information
                </h2>

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                {/* CLIENT NAME */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <User className="w-4 h-4 text-[#5d67f2]" />

                    Client Name

                  </label>

                  <input
                    placeholder="Enter your full name"
                    value={form.clientName}
                    onChange={(e) =>
                      update('clientName', e.target.value)
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30"
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <Mail className="w-4 h-4 text-[#5d67f2]" />

                    Email Address

                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      update('email', e.target.value)
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30"
                  />

                </div>

                {/* PHONE */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <Phone className="w-4 h-4 text-[#5d67f2]" />

                    Phone Number

                  </label>

                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) =>
                      update('phone', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30"
                  />

                </div>

                {/* INDUSTRY */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <Briefcase className="w-4 h-4 text-[#5d67f2]" />

                    Industry

                  </label>

                  <select
                    value={form.industry}
                    onChange={(e) =>
                      update('industry', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0a0a14] text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium"
                  >

                    <option value="">
                      Select your industry
                    </option>

                    <option value="technology">
                      Technology & Software
                    </option>

                    <option value="healthcare">
                      Healthcare & Medical
                    </option>

                    <option value="finance">
                      Finance & Banking
                    </option>

                    <option value="retail">
                      Retail & E-commerce
                    </option>

                    <option value="education">
                      Education & Training
                    </option>

                    <option value="real-estate">
                      Real Estate
                    </option>

                    <option value="hospitality">
                      Hospitality & Tourism
                    </option>

                    <option value="restaurant">
                      Restaurant & Food
                    </option>

                    <option value="fitness">
                      Fitness & Wellness
                    </option>

                    <option value="fashion">
                      Fashion & Beauty
                    </option>

                    <option value="construction">
                      Construction & Trades
                    </option>

                    <option value="consulting">
                      Consulting & Coaching
                    </option>

                    <option value="non-profit">
                      Non-Profit
                    </option>

                    <option value="other">
                      Other
                    </option>

                  </select>

                </div>

              </div>

            </div>


            {/* BUSINESS SPECIFICATIONS */}

            <div className="glass rounded-2xl p-6">

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">

                <div className="w-10 h-10 bg-[#5d67f2]/20 rounded-xl flex items-center justify-center">

                  <Building2 className="w-5 h-5 text-[#5d67f2]" />

                </div>

                <h2 className="text-xl font-black text-white">
                  Business Specifications
                </h2>

              </div>

              <div className="space-y-5">

                {/* BUSINESS NAME */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <Building2 className="w-4 h-4 text-[#5d67f2]" />

                    What is your Business Name?

                  </label>

                  <input
                    placeholder="Enter your business or brand name"
                    value={form.businessName}
                    onChange={(e) =>
                      update('businessName', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30"
                  />

                </div>


                {/* LOGO */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-3">

                    <Upload className="w-4 h-4 text-[#5d67f2]" />

                    Do you have a Business Logo?

                  </label>

                  <div className="grid grid-cols-3 gap-3">

                    {[
                      {
                        key: 'yes',
                        label: 'Yes',
                        icon: Check
                      },
                      {
                        key: 'no',
                        label: 'No',
                        icon: X
                      },
                      {
                        key: 'attach',
                        label: 'Attach',
                        icon: Upload
                      }
                    ].map(({ key, label, icon: Icon }) => (

                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setLogoChoice(key);

                          if (key === 'attach') {
                            fileInputRef.current?.click();
                          }
                        }}
                        className={`py-3 px-2 rounded-xl border-2 font-bold text-xs transition-all flex flex-col items-center gap-1 ${
                          logoChoice === key
                            ? 'border-[#5d67f2] bg-[#5d67f2] text-white shadow-lg shadow-[#5d67f2]/25'
                            : 'border-white/10 bg-white/5 text-white/70 hover:border-[#5d67f2]/50'
                        }`}
                      >

                        <Icon className="w-4 h-4" />

                        {label}

                      </button>

                    ))}

                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />

                </div>


                {/* SLOGAN */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <MessageSquare className="w-4 h-4 text-[#5d67f2]" />

                    Do you have a Business Slogan?

                  </label>

                  <input
                    placeholder="Enter your tagline or slogan"
                    value={form.businessSlogan}
                    onChange={(e) =>
                      update('businessSlogan', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30"
                  />

                </div>

              </div>

            </div>


            {/* WEBSITE QUESTIONS */}

            <div className="glass rounded-2xl p-6">

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">

                <div className="w-10 h-10 bg-[#5d67f2]/20 rounded-xl flex items-center justify-center">

                  <Globe className="w-5 h-5 text-[#5d67f2]" />

                </div>

                <h2 className="text-xl font-black text-white">
                  Website Related Questions
                </h2>

              </div>

              <div className="space-y-6">

                {/* PURPOSE */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <Globe className="w-4 h-4 text-[#5d67f2]" />

                    1. What is the Principal Purpose of the Website?

                  </label>

                  <textarea
                    rows={4}
                    placeholder="Describe the main goal: generate leads, sell products, showcase portfolio..."
                    value={form.purpose}
                    onChange={(e) =>
                      update('purpose', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30 resize-none"
                  />

                </div>


                {/* EXISTING WEBSITE */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-3">

                    <Link2 className="w-4 h-4 text-[#5d67f2]" />

                    2. Is there an Existing Website?

                  </label>

                  <div className="flex gap-3 mb-3">

                    <button
                      type="button"
                      onClick={() => setHasWebsite('yes')}
                      className={`flex-1 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                        hasWebsite === 'yes'
                          ? 'border-[#5d67f2] bg-[#5d67f2] text-white'
                          : 'border-white/10 bg-white/5 text-white/70'
                      }`}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      onClick={() => setHasWebsite('no')}
                      className={`flex-1 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                        hasWebsite === 'no'
                          ? 'border-[#5d67f2] bg-[#5d67f2] text-white'
                          : 'border-white/10 bg-white/5 text-white/70'
                      }`}
                    >
                      No
                    </button>

                  </div>

                  {hasWebsite === 'yes' && (

                    <input
                      placeholder="Please share your website URL"
                      value={form.existingWebsiteUrl}
                      onChange={(e) =>
                        update(
                          'existingWebsiteUrl',
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30"
                    />

                  )}

                </div>


                {/* COLORS */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <Palette className="w-4 h-4 text-[#5d67f2]" />

                    3. Any Color Preferences?

                  </label>

                  <input
                    placeholder="e.g. Blue & white, dark theme, warm earth tones..."
                    value={form.colorPreferences}
                    onChange={(e) =>
                      update(
                        'colorPreferences',
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30"
                  />

                </div>


                {/* COMPETITORS */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <Globe className="w-4 h-4 text-[#5d67f2]" />

                    4. Top 3 Competitors or Websites You Inspire

                  </label>

                  <textarea
                    rows={3}
                    placeholder="Paste URLs of websites you like or compete with..."
                    value={form.competitors}
                    onChange={(e) =>
                      update('competitors', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30 resize-none"
                  />

                </div>


                {/* PAYMENT */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <CreditCard className="w-4 h-4 text-[#5d67f2]" />

                    5. Any Payment Integration Needed?

                  </label>

                  <input
                    placeholder="e.g. Stripe, PayPal, Square, or none..."
                    value={form.paymentIntegration}
                    onChange={(e) =>
                      update(
                        'paymentIntegration',
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30"
                  />

                </div>


                {/* SPECIFIC REQUIREMENTS */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <Lightbulb className="w-4 h-4 text-[#5d67f2]" />

                    6. Specific Requirements or Preferences

                  </label>

                  <textarea
                    rows={3}
                    placeholder="Any special features, integrations, or requirements..."
                    value={form.specificRequirements}
                    onChange={(e) =>
                      update(
                        'specificRequirements',
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30 resize-none"
                  />

                </div>


                {/* CONTENT PAGES */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <FileText className="w-4 h-4 text-[#5d67f2]" />

                    7. Content Pages You Will Have

                  </label>

                  <textarea
                    rows={3}
                    placeholder="e.g. Home, About Us, Services, Portfolio, Contact, FAQs..."
                    value={form.contentPages}
                    onChange={(e) =>
                      update(
                        'contentPages',
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30 resize-none"
                  />

                </div>


                {/* OTHER SUGGESTIONS */}

                <div>

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-2">

                    <MessageSquare className="w-4 h-4 text-[#5d67f2]" />

                    8. Any Other Suggestions or Ideas?

                  </label>

                  <textarea
                    rows={3}
                    placeholder="Share any additional thoughts, features, or special requests..."
                    value={form.otherSuggestions}
                    onChange={(e) =>
                      update(
                        'otherSuggestions',
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30 resize-none"
                  />

                </div>

              </div>

            </div>


            {/* INFRASTRUCTURE */}

            <div className="glass rounded-2xl p-6">

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">

                <div className="w-10 h-10 bg-[#5d67f2]/20 rounded-xl flex items-center justify-center">

                  <Server className="w-5 h-5 text-[#5d67f2]" />

                </div>

                <h2 className="text-xl font-black text-white">
                  Infrastructure
                </h2>

              </div>

              <div className="space-y-6">

                {/* DOMAIN */}

                <div className="bg-white/5 rounded-xl p-5 border border-white/10">

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-3">

                    <Globe className="w-4 h-4 text-[#5d67f2]" />

                    Do you have a Domain?

                  </label>

                  <div className="flex gap-3 mb-4">

                    <button
                      type="button"
                      onClick={() => setHasDomain('yes')}
                      className={`flex-1 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                        hasDomain === 'yes'
                          ? 'border-[#5d67f2] bg-[#5d67f2] text-white'
                          : 'border-white/10 bg-white/5 text-white/70'
                      }`}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      onClick={() => setHasDomain('no')}
                      className={`flex-1 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                        hasDomain === 'no'
                          ? 'border-[#5d67f2] bg-[#5d67f2] text-white'
                          : 'border-white/10 bg-white/5 text-white/70'
                      }`}
                    >
                      No
                    </button>

                  </div>

                  {hasDomain === 'yes' && (

                    <div className="grid md:grid-cols-2 gap-3">

                      <input
                        placeholder="Domain Provider"
                        value={form.domainProvider}
                        onChange={(e) =>
                          update(
                            'domainProvider',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] outline-none text-sm font-medium placeholder:text-white/30"
                      />

                      <input
                        placeholder="Domain Username"
                        value={form.domainUsername}
                        onChange={(e) =>
                          update(
                            'domainUsername',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] outline-none text-sm font-medium placeholder:text-white/30"
                      />

                    </div>

                  )}

                </div>


                {/* HOSTING */}

                <div className="bg-white/5 rounded-xl p-5 border border-white/10">

                  <label className="text-sm font-bold text-white/90 flex items-center gap-2 mb-3">

                    <Server className="w-4 h-4 text-[#5d67f2]" />

                    Do you have Hosting?

                  </label>

                  <div className="flex gap-3 mb-4">

                    <button
                      type="button"
                      onClick={() => setHasHosting('yes')}
                      className={`flex-1 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                        hasHosting === 'yes'
                          ? 'border-[#5d67f2] bg-[#5d67f2] text-white'
                          : 'border-white/10 bg-white/5 text-white/70'
                      }`}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      onClick={() => setHasHosting('no')}
                      className={`flex-1 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                        hasHosting === 'no'
                          ? 'border-[#5d67f2] bg-[#5d67f2] text-white'
                          : 'border-white/10 bg-white/5 text-white/70'
                      }`}
                    >
                      No
                    </button>

                  </div>

                  {hasHosting === 'yes' && (

                    <div className="grid md:grid-cols-2 gap-3">

                      <input
                        placeholder="Hosting Provider"
                        value={form.hostingProvider}
                        onChange={(e) =>
                          update(
                            'hostingProvider',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] outline-none text-sm font-medium placeholder:text-white/30"
                      />

                      <input
                        placeholder="Hosting Username"
                        value={form.hostingUsername}
                        onChange={(e) =>
                          update(
                            'hostingUsername',
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] outline-none text-sm font-medium placeholder:text-white/30"
                      />

                    </div>

                  )}

                </div>

              </div>

            </div>


            {/* EXTRA NOTES */}

            <div className="glass rounded-2xl p-6">

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">

                <div className="w-10 h-10 bg-[#5d67f2]/20 rounded-xl flex items-center justify-center">

                  <MessageSquare className="w-5 h-5 text-[#5d67f2]" />

                </div>

                <h2 className="text-xl font-black text-white">
                  Anything Else?
                </h2>

              </div>

              <textarea
                rows={4}
                placeholder="Any extra notes, questions, or details..."
                value={form.notes}
                onChange={(e) =>
                  update('notes', e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#5d67f2] focus:ring-2 focus:ring-[#5d67f2]/20 outline-none font-medium placeholder:text-white/30 resize-none"
              />

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#5d67f2] hover:bg-[#4c55d6] text-white rounded-2xl font-black text-lg transition-all shadow-lg shadow-[#5d67f2]/25 disabled:opacity-50 flex items-center justify-center gap-3"
            >

              {loading ? (

                <>
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />

                  Sending...
                </>

              ) : (

                <>
                  <Send className="w-6 h-6" />

                  Submit Website Requirements
                </>

              )}

            </button>


            <p className="text-center text-white/40 text-xs font-medium pb-4">
              © 2026 TechCore Studio. All information is strictly confidential.
            </p>

          </form>

        </div>

      </div>

      <Footer />

    </>
  );
}