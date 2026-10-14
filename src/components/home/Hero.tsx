import React from 'react';
import { Screen, Language } from '../../types';
import { getTranslation } from '../../data/translations';
import { ArrowRight, Bot, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (screen: Screen) => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, lang }) => {
  const t = getTranslation(lang);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[#E8E3D9]">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 opacity-40">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#153E2B]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          
          {/* Subtle Editorial Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#153E2B]/90 bg-[#153E2B]/5 px-3.5 py-1.5 rounded-full border border-[#153E2B]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>{t.hero.kicker}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#153E2B] leading-[1.15]">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#4A5951] leading-relaxed max-w-2xl mx-auto font-normal">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('learn')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#153E2B] hover:bg-[#0E2C1E] text-white px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary CTA: Ask ArthMitra */}
            <button
              onClick={() => onNavigate('tutor')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F3EFE6] text-[#153E2B] border border-[#D5CEC0] px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-xs transition-all active:scale-[0.98]"
            >
              <Bot className="w-4 h-4 text-[#C5A059]" />
              <span>{t.hero.secondaryCta}</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs font-medium text-[#5E6D66]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#153E2B]" />
              <span>{t.hero.trustBadge1}</span>
            </div>
            <span className="hidden sm:inline text-[#C0B9AA]" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#153E2B]" />
              <span>{t.hero.trustBadge2}</span>
            </div>
            <span className="hidden sm:inline text-[#C0B9AA]" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#153E2B]" />
              <span>{t.hero.trustBadge3}</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner / Mini Stats Grid */}
        <div className="mt-14 max-w-4xl mx-auto bg-white rounded-2xl border border-[#E5DFD3] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#EFECE5]">
            
            <div className="space-y-1.5 md:pr-4">
              <span className="text-[11px] font-semibold text-[#8C7A52] tracking-wider uppercase">
                {t.hero.stat1Label}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-editorial text-3xl font-bold text-[#153E2B]">16+ Cr</span>
                <span className="text-xs text-[#2A7550] font-medium">+24% YoY</span>
              </div>
              <p className="text-xs text-[#5C6B63] leading-snug">
                {t.hero.stat1Desc}
              </p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0 md:px-4">
              <span className="text-[11px] font-semibold text-[#8C7A52] tracking-wider uppercase">
                {t.hero.stat2Label}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-editorial text-3xl font-bold text-[#A63628]">93%</span>
                <span className="text-xs text-[#A63628] font-medium">Net Loss</span>
              </div>
              <p className="text-xs text-[#5C6B63] leading-snug">
                {t.hero.stat2Desc}
              </p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0 md:pl-4">
              <span className="text-[11px] font-semibold text-[#8C7A52] tracking-wider uppercase">
                {t.hero.stat3Label}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-editorial text-3xl font-bold text-[#153E2B]">₹25,000+ Cr</span>
              </div>
              <p className="text-xs text-[#5C6B63] leading-snug">
                {t.hero.stat3Desc}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
