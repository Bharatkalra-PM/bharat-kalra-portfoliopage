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
import { EarlierWorkCard } from '../components/EarlierWorkCard';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { LearningSection } from '../components/LearningSection';
import { MusicSection } from '../components/MusicSection';
import { Lightbox } from '../components/Lightbox';
import {
  Download,
  Mail,
  ExternalLink,
  Phone,
  Layers,
  Sparkles,
  CheckCircle2,
  FolderKanban,
  History,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [lightboxData, setLightboxData] = useState<{ src: string; alt: string } | null>(null);
  const [workFilter, setWorkFilter] = useState<'2026' | 'earlier' | 'all'>('2026');

  const openLightbox = (src: string, alt: string) => {
    setLightboxData({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C0C0E] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors">
      {/* 1. HERO SECTION: Compact, Executive, Directly Leads into Work */}
      <section id="hero" className="relative pt-6 pb-8 md:pt-10 md:pb-10 border-b border-[#E8E8ED] dark:border-[#27272A] bg-gradient-to-b from-[#FAFAFC] via-white to-white dark:from-[#0E0E12] dark:via-[#0C0C0E] dark:to-[#0C0C0E] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          {/* Header Row: DP + Name/Title + Actions */}
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
            {/* DP / Profile Photo - Clean, subtle squircle */}
            <div className="shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-white dark:bg-[#18181C] border border-[#E2E2E8] dark:border-[#2E2E34] shadow-sm">
                <img
                  src={hero.photo}
                  alt="Bharat Kalra portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name, Title, and Location */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                {/* Bharat Kalra font made refined and tasteful */}
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                  {hero.name}
                </h1>
                <span className="text-sm text-[#86868B] dark:text-[#8E8E93]">·</span>
                <span className="text-sm font-semibold text-[#6E6E73] dark:text-[#A1A1A8]">
                  {hero.title}
                </span>
              </div>

              {/* Status pill: Location & Availability */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#48484A] dark:text-[#C4C4CC] bg-[#F5F5F8] dark:bg-[#18181C] border border-[#E2E2E8] dark:border-[#2E2E34] px-3 py-1 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Open to roles · Mumbai, Pune, Bengaluru, Remote or Outside India</span>
              </div>

              {/* Subline */}
              <p className="text-sm text-[#55555A] dark:text-[#A8A8B2] leading-relaxed max-w-2xl mb-4">
                {hero.subline}
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="/docs/resume.pdf"
                  download="Bharat_Kalra_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#1D1D1F] dark:bg-white dark:text-[#1D1D1F] hover:bg-black dark:hover:bg-neutral-200 px-4 py-2 rounded-full transition-all duration-150 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume PDF</span>
                </a>

                <a
                  href={hero.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] dark:text-white bg-[#F5F5F8] dark:bg-[#18181C] hover:bg-[#EAEAEF] dark:hover:bg-[#222226] border border-[#D8D8DF] dark:border-[#2E2E34] px-3.5 py-2 rounded-full transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-[#0A66C2] shrink-0" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
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

          {/* Product Principle & Key Metrics: Compact 2-column strip */}
          <div className="mt-6 pt-5 border-t border-[#E8E8ED] dark:border-[#27272A] grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Signature Product Principle (Restrained, elegant, italic quote) */}
            <div className="lg:col-span-5 rounded-xl bg-[#F7F7FA] dark:bg-[#141417] p-3.5 sm:p-4 border border-[#E2E2E8] dark:border-[#28282D]">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-[#86868B] dark:text-[#8E8E93] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Product Principle</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1D1D1F] dark:text-white leading-snug">
                "You don't build <strong className="font-semibold text-[#1D1D1F] dark:text-white">what your users ask for</strong>. You build for the problems they face."
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

      {/* 2. SELECTED WORK SECTION: BROUGHT TO FIRST FOLD */}
      <section id="work" className="py-10 md:py-14 bg-white dark:bg-[#0C0C0E] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          {/* Header & Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Portfolio & Case Studies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                Selected Work
              </h2>
            </div>

            {/* View Filter: Keeps page concise & gives user control */}
            <div className="inline-flex p-1 rounded-xl bg-[#F2F2F5] dark:bg-[#18181C] border border-[#E2E2E8] dark:border-[#2C2C32] self-start sm:self-auto">
              <button
                onClick={() => setWorkFilter('2026')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  workFilter === '2026'
                    ? 'bg-white dark:bg-[#25252A] text-[#1D1D1F] dark:text-white shadow-xs'
                    : 'text-[#6E6E73] dark:text-[#A1A1A8] hover:text-[#1D1D1F] dark:hover:text-white'
                }`}
              >
                2026 Builds (4)
              </button>
              <button
                onClick={() => setWorkFilter('earlier')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  workFilter === 'earlier'
                    ? 'bg-white dark:bg-[#25252A] text-[#1D1D1F] dark:text-white shadow-xs'
                    : 'text-[#6E6E73] dark:text-[#A1A1A8] hover:text-[#1D1D1F] dark:hover:text-white'
                }`}
              >
                Earlier Work (4)
              </button>
              <button
                onClick={() => setWorkFilter('all')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  workFilter === 'all'
                    ? 'bg-white dark:bg-[#25252A] text-[#1D1D1F] dark:text-white shadow-xs'
                    : 'text-[#6E6E73] dark:text-[#A1A1A8] hover:text-[#1D1D1F] dark:hover:text-white'
                }`}
              >
                All 8 Studies
              </button>
            </div>
          </div>

          {/* 2026 Builds View */}
          {(workFilter === '2026' || workFilter === 'all') && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {caseStudies.map((cs, idx) => (
                  <CaseStudyCard key={cs.slug} caseStudy={cs} index={idx} />
                ))}
              </div>

              {/* Velocity Strip (Compact & factual execution timeline) */}
              <VelocityStrip />
            </div>
          )}

          {/* Earlier Work View */}
          {(workFilter === 'earlier' || workFilter === 'all') && (
            <div className={workFilter === 'all' ? 'mt-10 pt-8 border-t border-[#E8E8ED] dark:border-[#27272A]' : ''}>
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-wider text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
                  Earlier Product Assignments & MVPs
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                  Where it started (2022–2023)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {earlierWork.map((item) => (
                  <EarlierWorkCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. EXPERIENCE & TRACK RECORD SECTION */}
      <section id="experience" className="py-10 md:py-14 bg-[#F7F7FA] dark:bg-[#111114] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
              Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
              Experience & Impact
            </h2>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* 4. ABOUT SECTION: Fully Symmetrical 2-Column Grid (Zero Empty Space on Right) */}
      <section id="about" className="py-10 md:py-14 bg-white dark:bg-[#0C0C0E] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="mb-6">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
              Background & Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
              {about.heading}
            </h2>
            <p className="text-base sm:text-lg font-normal text-[#6E6E73] dark:text-[#A1A1A8] leading-snug mt-1">
              {about.leadLine}
            </p>
          </div>

          {/* Symmetrical 2-Column Grid spanning the full container width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card: Core Philosophy & Track Record */}
            <div className="bg-[#F7F7FA] dark:bg-[#18181C] rounded-[24px] border border-[#E2E2E8] dark:border-[#2C2C32] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-3">
                  Philosophy & Conviction
                </span>
                <div className="space-y-3.5 text-sm sm:text-base text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
                  <p>
                    I believe living in the grey keeps you open, able to hold more than one perspective at once. But it is the binary calls, the clear yes or no, that actually move things forward.
                  </p>
                  <p>
                    Over 8+ years, I have built and scaled digital products across B2B and B2C. The roles that shaped me most were at <strong className="text-black dark:text-white font-semibold">Axis Max Life</strong>, owning partner bank journeys and the SME business insurance ecosystem end to end (generating expected additional revenue of ₹30 Cr), and <strong className="text-black dark:text-white font-semibold">Tata AIA</strong>, leading a ground-up D2C revamp on the Adobe stack (AEM, Analytics, Target) that doubled month-on-month traffic.
                  </p>
                  <p>
                    My goal is to build products that solve real friction rather than copy what already exists. Looking back, one consistent theme runs through my work: people change more easily when they have the right people beside them.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-5 border-t border-[#E8E8ED] dark:border-[#26262B] text-xs text-[#86868B] dark:text-[#A1A1A8] italic">
                {about.fiveYearsLine}
              </div>
            </div>

            {/* Right Card: Currently & Active Research */}
            <div className="bg-[#F7F7FA] dark:bg-[#18181C] rounded-[24px] border border-[#E2E2E8] dark:border-[#2C2C32] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                  <span className="text-xs font-semibold tracking-wider text-[#86868B] dark:text-[#A1A1A8] uppercase">
                    Currently & Focus Areas
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {about.currently.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 select-none" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-5 border-t border-[#E8E8ED] dark:border-[#26262B] p-3.5 rounded-xl bg-white dark:bg-[#121215] border border-[#E8E8ED] dark:border-[#27272A] text-xs text-[#6E6E73] dark:text-[#A1A1A8] leading-relaxed">
                <strong className="text-[#1D1D1F] dark:text-white font-semibold">Core Focus: </strong>
                Generative & Agentic AI systems, discovery-to-delivery execution, and behavioural customer journeys.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEARNING & CERTIFICATIONS */}
      <section id="learning" className="py-10 md:py-14 bg-[#F7F7FA] dark:bg-[#111114] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
              Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
              Learning & certifications
            </h2>
          </div>

          <LearningSection onOpenLightbox={openLightbox} />
        </div>
      </section>

      {/* 6. BEYOND WORK (Authentic, Focused, No Fake Quotes) */}
      <section id="beyond-work" className="py-10 md:py-14 bg-white dark:bg-[#0C0C0E] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
              Personal Pursuits
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
              Beyond work
            </h2>
          </div>

          {/* 6a. Music Gallery */}
          <MusicSection onOpenLightbox={openLightbox} />

          {/* 6b. Community: In the room */}
          <div className="bg-[#F7F7FA] dark:bg-[#18181C] rounded-[24px] border border-[#E2E2E8] dark:border-[#2C2C32] p-5 sm:p-7 mb-8 shadow-xs transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
                  Community
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mb-2">
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

          {/* 6c. Writing & Other Interests */}
          <div>
            <div className="mb-4">
              <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
                Perspectives
              </span>
              <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
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
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#25252A] text-slate-800 dark:text-[#E4E4EB]">
                        {item.tag}
                      </span>
                      {item.year && (
                        <span className="text-xs font-mono text-[#86868B] dark:text-[#A1A1A8]">
                          {item.year}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-[#1D1D1F] dark:text-white mb-1.5 group-hover:text-blue-500 transition-colors">
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
                        className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
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

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="py-10 md:py-14 bg-[#F7F7FA] dark:bg-[#111114] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mb-2">
              {contact.heading}
            </h2>
            <p className="text-sm text-[#55555A] dark:text-[#A8A8B2] leading-relaxed mb-5">
              {contact.line}
            </p>

            {/* Direct Contact methods: Email & Phone */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 p-3.5 rounded-xl bg-white dark:bg-[#18181C] hover:bg-[#F2F2F5] dark:hover:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{contact.email}</span>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2.5 p-3.5 rounded-xl bg-white dark:bg-[#18181C] hover:bg-[#F2F2F5] dark:hover:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Social Links: LinkedIn, GitHub, Substack */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D1D1F] dark:text-white bg-white dark:bg-[#18181C] hover:bg-[#F2F2F5] dark:hover:bg-[#222226] border border-[#D8D8DF] dark:border-[#2C2C32] px-3.5 py-2 rounded-xl shadow-xs transition-colors"
                >
                  {link.label === 'LinkedIn' ? (
                    <svg className="w-3.5 h-3.5 fill-[#0A66C2] shrink-0" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  ) : (
                    <ExternalLink className="w-3.5 h-3.5 text-[#86868B] dark:text-[#A1A1A8] shrink-0" />
                  )}
                  <span>{link.label}</span>
                </a>
              ))}
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
