import React, { useState } from 'react';
import {
  hero,
  about,
  caseStudies,
  earlierWork,
  community,
  writingAndInterests,
  contact,
} from '../data/content';
import { MetricBox } from '../components/MetricBox';
import { VelocityStrip } from '../components/VelocityStrip';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { QuoteCarousel } from '../components/QuoteCarousel';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { LearningSection } from '../components/LearningSection';
import { MusicSection } from '../components/MusicSection';
import { Lightbox } from '../components/Lightbox';
import {
  Download,
  Mail,
  ExternalLink,
  Phone,
  CheckCircle2,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [lightboxData, setLightboxData] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxData({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C0C0E] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors">
      {/* 1. HERO SECTION: Compact, Executive, Directly Leads into Work */}
      <section id="hero" className="relative pt-6 pb-8 md:pt-10 md:pb-10 border-b border-[#E8E8ED] dark:border-[#27272A] bg-white dark:bg-[#0C0C0E] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          {/* Header Row: DP + Name/Title + Actions */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            {/* Mobile Header: Photo + Name/Title side-by-side */}
            <div className="flex items-center sm:items-start gap-4 sm:gap-6 w-full sm:w-auto">
              {/* DP / Profile Photo - Clean, subtle squircle */}
              <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#F5F5F7] dark:bg-[#18181C] border border-[#E2E2E8] dark:border-[#2E2E34] shadow-xs">
                <img
                  src={hero.photo}
                  alt="Bharat Kalra portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile-only parallel Name + Title (fills the blank space to the right of photo) */}
              <div className="sm:hidden flex-1 min-w-0">
                <h1 className="text-2xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white leading-tight">
                  {hero.name}
                </h1>
                <p className="text-xs font-semibold text-[#6E6E73] dark:text-[#A1A1A8] mt-1 leading-snug">
                  {hero.title}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Immediate joining</span>
                </div>
              </div>
            </div>

            {/* Content block */}
            <div className="flex-1 min-w-0 w-full">
              {/* Desktop Name & Title */}
              <div className="hidden sm:flex flex-wrap items-baseline gap-3 mb-1.5">
                <h1 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white">
                  {hero.name}
                </h1>
                <span className="text-sm text-[#86868B] dark:text-[#8E8E93]">·</span>
                <span className="text-sm font-semibold text-[#6E6E73] dark:text-[#A1A1A8]">
                  {hero.title}
                </span>
              </div>

              {/* Status pill: Location & Availability (Desktop) */}
              <div className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-[#48484A] dark:text-[#C4C4CC] bg-[#F5F5F7] dark:bg-[#18181C] border border-[#E2E2E8] dark:border-[#2E2E34] px-3.5 py-1.5 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>{hero.statusPill}</span>
              </div>

              {/* Mobile Location & Availability Sub-bar */}
              <div className="sm:hidden text-[11px] text-[#6E6E73] dark:text-[#9A9AA2] mb-3">
                {hero.statusPill}
              </div>

              {/* Subline */}
              <p className="text-sm text-[#55555A] dark:text-[#A8A8B2] leading-relaxed max-w-2xl mb-4 text-justify sm:text-left">
                {hero.subline}
              </p>

              {/* Primary Action Buttons: Resume, LinkedIn, GitHub, Substack, Contact */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="/docs/resume.pdf"
                  download="Bharat_Kalra_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1D1D1F] dark:bg-white dark:text-[#1D1D1F] hover:bg-black dark:hover:bg-neutral-200 px-3.5 py-2 rounded-full transition-all duration-150 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume PDF</span>
                </a>

                <a
                  href={hero.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] dark:text-white bg-[#F5F5F7] dark:bg-[#18181C] hover:bg-[#EAEAEF] dark:hover:bg-[#222226] border border-[#D8D8DF] dark:border-[#2E2E34] px-3 py-2 rounded-full transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Bharatkalra-PM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] dark:text-white bg-[#F5F5F7] dark:bg-[#18181C] hover:bg-[#EAEAEF] dark:hover:bg-[#222226] border border-[#D8D8DF] dark:border-[#2E2E34] px-3 py-2 rounded-full transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://open.substack.com/pub/bharatkalra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] dark:text-white bg-[#F5F5F7] dark:bg-[#18181C] hover:bg-[#EAEAEF] dark:hover:bg-[#222226] border border-[#D8D8DF] dark:border-[#2E2E34] px-3 py-2 rounded-full transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-[#FF6719] shrink-0" viewBox="0 0 24 24">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                  </svg>
                  <span>Substack</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#55555A] dark:text-[#A1A1A8] hover:text-[#1D1D1F] dark:hover:text-white px-3 py-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#86868B] dark:text-[#A1A1A8]" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>

          {/* Product Principle & Key Metrics: Compact strip */}
          <div className="mt-6 pt-5 border-t border-[#E8E8ED] dark:border-[#27272A] grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Signature Product Principle (Restrained, refined quote) */}
            <div className="lg:col-span-5 rounded-xl bg-[#F5F5F7] dark:bg-[#141417] p-4 border border-[#E2E2E8] dark:border-[#28282D]">
              <p className="text-sm font-serif italic text-[#1D1D1F] dark:text-white leading-snug">
                "{hero.headline}"
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {hero.metrics.map((m, idx) => (
                <MetricBox
                  key={idx}
                  value={m.value}
                  label={m.label}
                  size="compact"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK SECTION */}
      <section id="work" className="py-10 md:py-14 bg-white dark:bg-[#0C0C0E] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white">
              Selected Work
            </h2>
          </div>

          {/* 4 Featured Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {caseStudies.map((cs, idx) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} index={idx} />
            ))}
          </div>

          {/* Velocity Strip (Execution timeline) */}
          <VelocityStrip />

          {/* Where it started (2022–2023) - Clean list rows, always visible */}
          <div className="mt-14 pt-10 border-t border-[#E8E8ED] dark:border-[#27272A]">
            <h3 className="text-2xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white mb-6">
              Where it started (2022–2023)
            </h3>
            <div className="divide-y divide-[#E8E8ED] dark:divide-[#27272A] border-y border-[#E8E8ED] dark:border-[#27272A]">
              {earlierWork.map((item) => (
                <div
                  key={item.title}
                  className="py-5 flex flex-col md:flex-row md:items-baseline justify-between gap-4"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h4 className="text-base font-semibold text-[#1D1D1F] dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs text-[#86868B] dark:text-[#A1A1A8] font-mono">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-[#55555A] dark:text-[#A8A8B2] leading-relaxed">
                      {item.oneLine}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 flex-wrap">
                    {item.buttons.map((btn) => (
                      <a
                        key={btn.label}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] dark:text-white bg-[#F5F5F7] dark:bg-[#1E1E22] hover:bg-[#EAEAEF] dark:hover:bg-[#28282D] border border-[#E2E2E8] dark:border-[#333338] px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <span>{btn.label}</span>
                        <ExternalLink className="w-3 h-3 text-[#86868B] dark:text-[#A1A1A8]" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="py-10 md:py-14 bg-[#F5F5F7] dark:bg-[#111114] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white">
              Experience & Impact
            </h2>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* 4. ABOUT SECTION: Exact Brief Text Word for Word */}
      <section id="about" className="py-10 md:py-14 bg-white dark:bg-[#0C0C0E] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white">
              {about.heading}
            </h2>
            <p className="text-base sm:text-lg font-normal text-[#6E6E73] dark:text-[#A1A1A8] leading-snug mt-1">
              {about.leadLine}
            </p>
          </div>

          {/* Symmetrical 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card: Core Body Paragraphs & Thread Line */}
            <div className="bg-[#F5F5F7] dark:bg-[#18181C] rounded-[24px] border border-[#E2E2E8] dark:border-[#2C2C32] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <div className="space-y-3.5 text-sm sm:text-base text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
                  {about.body.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                  <p className="italic text-[#6E6E73] dark:text-[#A1A1A8] pt-1">
                    {about.threadLine}
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-5 border-t border-[#E8E8ED] dark:border-[#26262B] text-xs text-[#86868B] dark:text-[#A1A1A8] italic">
                {about.fiveYearsLine}
              </div>
            </div>

            {/* Right Card: Currently */}
            <div className="bg-[#F5F5F7] dark:bg-[#18181C] rounded-[24px] border border-[#E2E2E8] dark:border-[#2C2C32] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <ul className="space-y-3.5">
                  {about.currently.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 select-none" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "HOW I THINK" QUOTE CAROUSEL ON DARK BAND */}
      <QuoteCarousel />

      {/* 6. LEARNING & CERTIFICATIONS */}
      <section id="learning" className="py-10 md:py-14 bg-[#F5F5F7] dark:bg-[#111114] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white">
              Learning & certifications
            </h2>
          </div>

          <LearningSection onOpenLightbox={openLightbox} />
        </div>
      </section>

      {/* 7. BEYOND WORK */}
      <section id="beyond-work" className="py-10 md:py-14 bg-white dark:bg-[#0C0C0E] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white">
              Beyond work
            </h2>
          </div>

          {/* 7a. Music Gallery & Pull Quote */}
          <MusicSection onOpenLightbox={openLightbox} />

          {/* 7b. Community: In the room */}
          <div className="bg-[#F5F5F7] dark:bg-[#18181C] rounded-[24px] border border-[#E2E2E8] dark:border-[#2C2C32] p-5 sm:p-7 mb-8 shadow-xs transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white mb-2">
                  {community.heading}
                </h3>
                <p className="text-sm text-[#55555A] dark:text-[#A8A8B2] leading-relaxed mb-4">
                  {community.text}
                </p>
                <div className="p-3 rounded-xl bg-white dark:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs text-[#55555A] dark:text-[#A1A1A8]">
                  <strong className="text-[#1D1D1F] dark:text-white font-semibold">Also: </strong>
                  {community.also}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  onClick={() => openLightbox(community.image, community.imageAlt)}
                  className="rounded-xl overflow-hidden bg-slate-900 border border-[#E2E2E8] dark:border-[#2C2C32] cursor-pointer group shadow-sm"
                >
                  <img
                    src={community.image}
                    alt={community.imageAlt}
                    className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 7c. Writing & Other Interests */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white">
                Writing & other interests
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {writingAndInterests.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-[#18181C] rounded-[20px] border border-[#E2E2E8] dark:border-[#2C2C32] p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F5F5F7] dark:bg-[#25252A] text-slate-800 dark:text-[#E4E4EB]">
                        {item.tag}
                      </span>
                      {item.year && (
                        <span className="text-xs font-mono text-[#86868B] dark:text-[#A1A1A8]">
                          {item.year}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-semibold text-[#1D1D1F] dark:text-white mb-1.5">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#55555A] dark:text-[#A8A8B2] leading-relaxed">
                      {item.label}
                    </p>
                  </div>

                  {item.url && (
                    <div className="pt-3 mt-3 border-t border-slate-100 dark:border-[#2C2C32]">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#1D1D1F] dark:text-white hover:underline"
                      >
                        <span>Read on Substack</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION: Email, Phone, LinkedIn, GitHub, Substack */}
      <section id="contact" className="py-10 md:py-14 bg-[#F5F5F7] dark:bg-[#111114] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#1D1D1F] dark:text-white mb-2">
              {contact.heading}
            </h2>
            <p className="text-sm text-[#55555A] dark:text-[#A8A8B2] leading-relaxed mb-6">
              {contact.line}
            </p>

            {/* Direct Contact & Social methods */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white dark:bg-[#18181C] hover:bg-[#F2F2F5] dark:hover:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-[#1D1D1F] dark:text-white shrink-0" />
                <span>{contact.email}</span>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white dark:bg-[#18181C] hover:bg-[#F2F2F5] dark:hover:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#1D1D1F] dark:text-white shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pm-bharat-kalra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white dark:bg-[#18181C] hover:bg-[#F2F2F5] dark:hover:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Bharatkalra-PM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white dark:bg-[#18181C] hover:bg-[#F2F2F5] dark:hover:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://open.substack.com/pub/bharatkalra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white dark:bg-[#18181C] hover:bg-[#F2F2F5] dark:hover:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-[#FF6719] shrink-0" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
                <span>Substack</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        src={lightboxData?.src || null}
        alt={lightboxData?.alt}
        onClose={closeLightbox}
      />
    </div>
  );
};
