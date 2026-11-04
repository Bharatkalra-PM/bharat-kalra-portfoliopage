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
import { QuoteCarousel } from '../components/QuoteCarousel';
import { Lightbox } from '../components/Lightbox';
import {
  ArrowDown,
  Download,
  Mail,
  ExternalLink,
  Phone,
  BookOpen,
  Headphones,
  Activity,
  Layers,
  Sparkles,
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
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-10 pb-14 md:pt-14 md:pb-16 bg-gradient-to-b from-[#FAFAFC] via-white to-white dark:from-[#0E0E12] dark:via-[#0C0C0E] dark:to-[#0C0C0E] border-b border-[#E8E8ED] dark:border-[#27272A] overflow-hidden transition-colors">
        {/* Subtle monochrome ambient glow */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-slate-200/20 dark:bg-slate-800/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8 lg:gap-12">
            <div className="flex-1 max-w-2xl">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1D1D1F] dark:text-[#E4E4EB] bg-white dark:bg-[#16161A] border border-[#E2E2E8] dark:border-[#2C2C32] px-4 py-2 rounded-full mb-5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="leading-snug">{hero.statusPill}</span>
              </div>

              {/* Name and Title */}
              <div className="mb-4">
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
                  {hero.title}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-[1.1]">
                  {hero.name}
                </h1>
              </div>

              {/* PM NOTEPAD / PRODUCT PRINCIPLE CARD (Sophisticated Monochrome, Zero Yellow) */}
              <div className="my-5 relative rounded-2xl bg-[#141416] dark:bg-[#121215] text-white p-5 sm:p-6 border border-[#27272A] dark:border-[#26262B] shadow-lg overflow-hidden">
                {/* Header of notepad - clean, muted, sophisticated */}
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#27272A] text-[10px] sm:text-[11px] tracking-wider text-[#8E8E93]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                    <span className="font-medium uppercase tracking-wider text-[#D1D1D6]">Product Principle</span>
                  </div>
                  <span className="font-mono text-[#71717A] text-[10px]">Core Thesis</span>
                </div>

                {/* The Signature Quote with italicized "what your users ask for" in pure crisp white */}
                <blockquote className="text-lg sm:text-xl md:text-[22px] font-normal tracking-tight text-white leading-snug">
                  "You don't build{' '}
                  <span className="font-serif italic text-white font-normal underline decoration-white/30 decoration-1 underline-offset-4">
                    what your users ask for
                  </span>
                  . You build for the problems they face."
                </blockquote>

                {/* Micro note footer */}
                <div className="mt-3 text-xs text-[#8E8E93] leading-relaxed flex items-center justify-between">
                  <span>Discovery uncovers the unarticulated friction. Delivery solves it.</span>
                  <span className="text-[11px] text-[#71717A] hidden sm:inline font-mono">Bharat Kalra</span>
                </div>
              </div>

              {/* Subline */}
              <p className="text-sm sm:text-base text-[#55555A] dark:text-[#A8A8B2] leading-relaxed mb-6 max-w-xl">
                {hero.subline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#1D1D1F] dark:bg-white dark:text-[#1D1D1F] hover:bg-black dark:hover:bg-neutral-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  <span>See my work (8 case studies)</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href="/docs/resume.pdf"
                  download="Bharat_Kalra_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D1D1F] dark:text-[#E4E4EB] bg-white dark:bg-[#18181C] hover:bg-[#F5F5F8] dark:hover:bg-[#222226] border border-[#D8D8DF] dark:border-[#2E2E34] px-4.5 py-2.5 rounded-full shadow-xs transition-all duration-200"
                >
                  <Download className="w-4 h-4 text-[#86868B] dark:text-[#A1A1A8]" />
                  <span>Download resume</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#55555A] dark:text-[#A1A1A8] hover:text-[#1D1D1F] dark:hover:text-white px-3.5 py-2.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#86868B] dark:text-[#A1A1A8]" />
                  <span>Say hello</span>
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="shrink-0 flex justify-start md:justify-center">
              <div className="relative group">
                {/* Decorative subtle border ring */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-white/20 via-slate-500/20 to-white/10 rounded-[28px] blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-[24px] overflow-hidden bg-white dark:bg-[#18181C] border border-[#E8E8ED] dark:border-[#2C2C32] shadow-lg">
                  <img
                    src={hero.photo}
                    alt="Bharat Kalra portrait"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Metric Strip (Analytics Board) */}
          <div className="mt-8 pt-6 border-t border-[#E8E8ED] dark:border-[#27272A] grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {hero.metrics.map((m, idx) => (
              <MetricBox
                key={idx}
                value={m.value}
                label={m.label}
                size="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-12 md:py-16 bg-[#F7F7FA] dark:bg-[#111114] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-2.5">
              About
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white mb-3">
              {about.heading}
            </h2>

            {/* Lead line */}
            <p className="text-lg sm:text-xl font-normal text-[#6E6E73] dark:text-[#A1A1A8] leading-snug mb-6">
              {about.leadLine}
            </p>

            {/* Body paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
              {about.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Thread line */}
            <div className="my-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#18181C] border border-[#E4E4EC] dark:border-[#2C2C32] shadow-xs">
              <p className="text-sm italic text-[#1D1D1F] dark:text-[#E4E4EB] leading-relaxed">
                {about.threadLine}
              </p>
            </div>

            {/* "Currently" card */}
            <div className="bg-white dark:bg-[#18181C] rounded-[22px] border border-[#E4E4EC] dark:border-[#2C2C32] p-5 sm:p-6 my-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase">
                  Currently
                </span>
              </div>
              <ul className="space-y-3">
                {about.currently.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 select-none" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Five-years line */}
            <p className="text-xs sm:text-sm text-[#86868B] dark:text-[#A1A1A8] italic leading-relaxed pt-1">
              {about.fiveYearsLine}
            </p>
          </div>
        </div>
      </section>

      {/* 3. WORK SECTION */}
      <section id="work" className="py-12 md:py-16 bg-white dark:bg-[#0C0C0E] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          {/* Header with Case Study Count Breakdown */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-5 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full mb-2.5 border border-blue-200/60 dark:border-blue-900/60">
                <Layers className="w-3.5 h-3.5" />
                <span>8 Total Product Case Studies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                Selected Work
              </h2>
            </div>

            <div className="flex items-center gap-3 text-xs font-medium text-[#6E6E73] dark:text-[#A1A1A8]">
              <span className="px-3 py-1.5 rounded-lg bg-[#F5F5F8] dark:bg-[#18181C] border border-[#E4E4EB] dark:border-[#2C2C32] font-semibold text-[#1D1D1F] dark:text-white">
                4 Built in 2026
              </span>
              <span>·</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#F5F5F8] dark:bg-[#18181C] border border-[#E4E4EB] dark:border-[#2C2C32] text-[#6E6E73] dark:text-[#A1A1A8]">
                4 Earlier Studies
              </span>
            </div>
          </div>

          {/* 3a. Velocity Strip (Dark Band) */}
          <VelocityStrip />

          {/* 3b. Featured Case Study Cards (4 products in 2026) */}
          <div className="mt-10 mb-4">
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-0.5">
                  2026 Product Builds (4)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                  Recent End-to-End AI & Product Builds
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {caseStudies.map((cs, idx) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} index={idx} />
              ))}
            </div>
          </div>

          {/* 3c. Earlier Work (4 earlier case studies - Tightly integrated, zero dead gap) */}
          <div className="mt-12 pt-8 border-t border-[#E8E8ED] dark:border-[#27272A]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-0.5">
                  Earlier Case Studies (4)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                  Where it started
                </h3>
              </div>
              <span className="text-xs font-medium text-[#86868B] dark:text-[#A1A1A8]">
                4 In-depth product assignments & MVPs (2022–2023)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {earlierWork.map((item) => (
                <EarlierWorkCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE SECTION */}
      <section id="experience" className="py-12 md:py-16 bg-[#F7F7FA] dark:bg-[#111114] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1.5">
              Career History
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
              Experience
            </h2>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* 5. LEARNING & CERTIFICATIONS */}
      <section id="learning" className="py-12 md:py-16 bg-white dark:bg-[#0C0C0E] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1.5">
              Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
              Learning & certifications
            </h2>
          </div>

          <LearningSection onOpenLightbox={openLightbox} />
        </div>
      </section>

      {/* 6. BEYOND WORK */}
      <section id="beyond-work" className="py-12 md:py-16 bg-[#F7F7FA] dark:bg-[#111114] border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1.5">
              Personal Pursuits
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
              Beyond work
            </h2>
          </div>

          {/* 7a. Music */}
          <MusicSection onOpenLightbox={openLightbox} />

          {/* 7b. Community: In the room */}
          <div className="bg-white dark:bg-[#18181C] rounded-[24px] border border-[#E2E2E8] dark:border-[#2C2C32] p-6 sm:p-8 mb-8 shadow-sm transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1.5">
                  Community
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mb-3">
                  {community.heading}
                </h3>
                <p className="text-sm sm:text-base text-[#55555A] dark:text-[#A8A8B2] leading-relaxed mb-5">
                  {community.text}
                </p>
                <div className="p-3.5 rounded-xl bg-[#F5F5F8] dark:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm text-[#55555A] dark:text-[#A1A1A8]">
                  <strong className="text-[#1D1D1F] dark:text-white font-semibold">Also: </strong>
                  {community.also}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  onClick={() => openLightbox(community.image, community.imageAlt)}
                  className="rounded-2xl overflow-hidden bg-slate-900 border border-[#E2E2E8] dark:border-[#2C2C32] cursor-pointer group shadow-md"
                >
                  <img
                    src={community.image}
                    alt={community.imageAlt}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 7c. How I think Quote Carousel (Dark Band) */}
          <QuoteCarousel />

          {/* 7d. Writing & other interests */}
          <div className="mt-8">
            <div className="mb-5">
              <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1">
                Perspectives & Hobbies
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                Writing & other interests
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {writingAndInterests.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-[#18181C] rounded-[22px] border border-[#E2E2E8] dark:border-[#2C2C32] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#25252A] text-slate-800 dark:text-[#E4E4EB]">
                        {item.tag}
                      </span>
                      {item.year && (
                        <span className="text-xs font-mono text-[#86868B] dark:text-[#A1A1A8]">
                          {item.year}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#55555A] dark:text-[#A8A8B2] leading-relaxed">
                      {item.label}
                    </p>
                  </div>

                  {item.url && (
                    <div className="pt-4 mt-3 border-t border-slate-100 dark:border-[#2C2C32]">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 group-hover:underline"
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
      <section id="contact" className="py-12 md:py-16 bg-white dark:bg-[#0C0C0E] transition-colors">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-1.5">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mb-3">
              {contact.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#55555A] dark:text-[#A8A8B2] leading-relaxed mb-6">
              {contact.line}
            </p>

            {/* Direct Contact methods: Email & Phone */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-[#F5F5F8] dark:bg-[#18181C] hover:bg-[#EAEAEF] dark:hover:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{contact.email}</span>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-[#F5F5F8] dark:bg-[#18181C] hover:bg-[#EAEAEF] dark:hover:bg-[#202024] border border-[#E2E2E8] dark:border-[#2C2C32] text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Social Links: EXACTLY ONE LinkedIn, ONE GitHub, ONE Substack (Cleanly indented, no double link) */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D1D1F] dark:text-white bg-[#F5F5F8] dark:bg-[#18181C] hover:bg-[#EAEAEF] dark:hover:bg-[#222226] border border-[#D8D8DF] dark:border-[#2C2C32] px-4 py-2.5 rounded-xl shadow-xs transition-colors"
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
