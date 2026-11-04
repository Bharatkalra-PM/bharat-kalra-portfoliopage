import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/content';
import { MetricBox } from '../components/MetricBox';

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/#work" replace />;
  }

  return (
    <article className="min-h-screen bg-white dark:bg-[#0C0C0E] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-[#E8E8ED] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#111114]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-4">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6E6E73] dark:text-[#A1A1A8] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to work</span>
          </Link>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* 1. Header */}
        <header className="mb-12">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#86868B] dark:text-[#A1A1A8] uppercase tracking-wider mb-4 flex-wrap">
            <span>{caseStudy.meta}</span>
            <span aria-hidden="true">·</span>
            <span>Solo project</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white leading-[1.15] mb-5">
            {caseStudy.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#6E6E73] dark:text-[#A8A8B2] leading-relaxed max-w-3xl">
            {caseStudy.hook}
          </p>

          {/* Action Buttons at top */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {caseStudy.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#1D1D1F] dark:bg-white dark:text-[#1D1D1F] hover:bg-black dark:hover:bg-neutral-200 px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs"
              >
                <span>{link.label}</span>
                {link.isExternal && <ExternalLink className="w-4 h-4 text-white/70 dark:text-[#1D1D1F]/70" />}
              </a>
            ))}
          </div>

          {/* Note under buttons if any (e.g. People Like Me login note) */}
          {caseStudy.links.some((l) => l.note) && (
            <div className="mt-3 text-xs text-[#86868B] dark:text-[#A1A1A8] leading-relaxed">
              {caseStudy.links.find((l) => l.note)?.note}
            </div>
          )}
        </header>

        {/* Visual Product Showcase / Creative Banner */}
        <section className="mb-14">
          {caseStudy.thumbnail ? (
            <div className="relative rounded-[26px] overflow-hidden border border-[#E2E2E8] shadow-lg bg-slate-950">
              <img
                src={caseStudy.thumbnail}
                alt={caseStudy.title}
                className="w-full max-h-[460px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          ) : caseStudy.slug === 'claude' ? (
            <div className="relative rounded-[26px] overflow-hidden border border-stone-800 p-8 sm:p-10 bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#0C0A09] text-white shadow-xl">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D97757]/25 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-stone-300">
                    Anthropic Claude Artifacts Diff Specification
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  Version Diff & Section-Level Accept / Reject
                </h3>
                <p className="text-sm sm:text-base text-stone-300 mb-6">
                  Transforming Artifacts from an overwrite-in-place canvas into a persistent, diffable collaborative environment with version memory.
                </p>
                <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-700 font-mono text-xs space-y-2">
                  <div className="text-stone-400 text-[11px] pb-1 border-b border-stone-800 flex justify-between">
                    <span>Artifact Diff Review · Version 2 vs Version 1</span>
                    <span className="text-[#D97757]">COMPARE MODE</span>
                  </div>
                  <div className="text-red-400/90 bg-red-950/40 px-2.5 py-1.5 rounded line-through">
                    - Pursuant to our review of available vendor options and a comprehensive analysis...
                  </div>
                  <div className="text-emerald-300 bg-emerald-950/40 px-2.5 py-1.5 rounded font-medium">
                    + After digging into your infrastructure needs and comparing vendors, here is where we landed...
                  </div>
                </div>
              </div>
            </div>
          ) : caseStudy.slug === 'amazon' ? (
            <div className="relative rounded-[26px] overflow-hidden border border-slate-800 p-8 sm:p-10 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0A0F1D] text-white shadow-xl">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/25 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-amber-200">
                    Amazon Pre-Purchase Trust Engine
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  Behavioural Signals & Contextual Rufus Assistant
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mb-6">
                  Resolving doubt at the buying moment through Seller Trust Signals, Product Longevity metrics, and in-context AI verification.
                </p>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 text-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Seller Trust Signal: Tier 1</span>
                    <span className="font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">Score 94</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-300 text-[11px] pt-1 border-t border-slate-800">
                    <div>• 96% buyer-confirmed complaint resolution</div>
                    <div>• 92% kept past 90 days with no claim</div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </section>

        {/* Optional Walkthrough Video */}
        {caseStudy.videoUrl && (
          <section className="mb-14">
            <div className="rounded-[24px] overflow-hidden border border-[#E8E8ED] bg-[#F5F5F7] aspect-video">
              <iframe
                src={caseStudy.videoUrl}
                title={`${caseStudy.title} Walkthrough Video`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* 2. Metric board */}
        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <section className="mb-16">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] uppercase block mb-4">
              Metric Board
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              {caseStudy.metrics.map((m, idx) => (
                <MetricBox
                  key={idx}
                  value={m.value}
                  label={m.label}
                  size="default"
                />
              ))}
            </div>
          </section>
        )}

        {/* 3. The problem */}
        {caseStudy.problem && (
          <section className="mb-14 pb-14 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-3">
              The problem
            </span>
            <div className="p-7 sm:p-8 rounded-[22px] bg-[#F5F5F7] dark:bg-[#18181C] border border-[#E8E8ED] dark:border-[#2C2C32]">
              <p className="text-base sm:text-lg text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </section>
        )}

        {/* 4. What I did (timeline / process) */}
        {caseStudy.timeline && caseStudy.timeline.length > 0 && (
          <section className="mb-14 pb-14 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-6">
              What I did (process timeline)
            </span>
            <div className="flex flex-col space-y-3">
              {caseStudy.timeline.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E8E8ED] dark:bg-[#25252A] text-[11px] font-semibold text-[#1D1D1F] dark:text-white shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="text-sm sm:text-base text-[#1D1D1F] dark:text-[#D1D1D6] font-normal leading-relaxed">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why RAG (Agent Copilot specific) */}
        {caseStudy.whyRag && (
          <section className="mb-14 pb-14 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-3">
              Why RAG
            </span>
            <div className="p-6 sm:p-7 rounded-[22px] bg-[#FAFAFA] dark:bg-[#18181C] border border-[#E8E8ED] dark:border-[#2C2C32]">
              <p className="text-sm sm:text-base text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
                {caseStudy.whyRag}
              </p>
            </div>
          </section>
        )}

        {/* 5. The solution */}
        {caseStudy.solution && caseStudy.solution.length > 0 && (
          <section className="mb-14 pb-14 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-4">
              The solution
            </span>
            <div className="space-y-4">
              {caseStudy.solution.map((sol, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-[20px] bg-white dark:bg-[#18181C] border border-[#E8E8ED] dark:border-[#2C2C32] shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
                >
                  <p className="text-sm sm:text-base text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
                    {sol}
                  </p>
                </div>
              ))}
            </div>

            {/* Built with if present */}
            {caseStudy.builtWith && (
              <div className="mt-5 p-4 rounded-xl bg-[#F5F5F7] dark:bg-[#18181C] border border-[#E8E8ED] dark:border-[#2C2C32] text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A8]">
                <strong className="text-[#1D1D1F] dark:text-white font-semibold">Built with: </strong>
                {caseStudy.builtWith}
              </div>
            )}
          </section>
        )}

        {/* 6. Results / testing / What testers changed */}
        {caseStudy.whatTestersChanged && caseStudy.whatTestersChanged.length > 0 && (
          <section className="mb-14 pb-14 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-4">
              What testers changed
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {caseStudy.whatTestersChanged.map((t, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181C] border border-[#E8E8ED] dark:border-[#2C2C32]"
                >
                  {t.tester && (
                    <div className="text-xs font-semibold text-[#86868B] dark:text-[#A1A1A8] uppercase tracking-wider mb-1">
                      {t.tester}
                    </div>
                  )}
                  <div className="text-sm text-[#1D1D1F] dark:text-[#D1D1D6] leading-relaxed">
                    {t.change}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Evaluation and testing (Agent Copilot) */}
        {caseStudy.evaluationTesting && caseStudy.evaluationTesting.length > 0 && (
          <section className="mb-14 pb-14 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-4">
              Evaluation and testing
            </span>
            <div className="space-y-3">
              {caseStudy.evaluationTesting.map((item, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#6E6E73] dark:text-[#A8A8B2] leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Cost and value (Agent Copilot) */}
        {caseStudy.costAndValue && caseStudy.costAndValue.length > 0 && (
          <section className="mb-14 pb-14 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-4">
              Cost and value
            </span>
            <div className="space-y-3">
              {caseStudy.costAndValue.map((item, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#6E6E73] dark:text-[#A8A8B2] leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Go to market (People Like Me) */}
        {caseStudy.goToMarket && caseStudy.goToMarket.length > 0 && (
          <section className="mb-14 pb-14 border-b border-[#E8E8ED] dark:border-[#27272A]">
            <span className="text-[11px] font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A8] uppercase block mb-4">
              Go-to-market
            </span>
            <div className="space-y-3">
              {caseStudy.goToMarket.map((item, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#6E6E73] dark:text-[#A8A8B2] leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Footer Navigation within Work */}
        <section className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D1D1F] dark:text-white hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all work</span>
          </Link>

          <div className="flex flex-wrap gap-2.5">
            {caseStudy.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] dark:text-white bg-[#F5F5F7] dark:bg-[#18181C] hover:bg-[#E8E8ED] dark:hover:bg-[#25252A] border border-[#E8E8ED] dark:border-[#2C2C32] px-4 py-2 rounded-lg transition-colors"
              >
                <span>{link.label}</span>
                {link.isExternal && <ExternalLink className="w-3.5 h-3.5 text-[#86868B] dark:text-[#A1A1A8]" />}
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
