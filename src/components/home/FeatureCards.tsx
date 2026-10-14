import React from 'react';
import { Screen, Language } from '../../types';
import { getTranslation } from '../../data/translations';
import { getFeatureSnippets } from '../../data/featureSnippets';
import { Bot, ShieldAlert, BookOpen, ArrowRight } from 'lucide-react';

interface FeatureCardsProps {
  onNavigate: (screen: Screen) => void;
  lang: Language;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({ onNavigate, lang }) => {
  const t = getTranslation(lang);
  const snip = getFeatureSnippets(lang);

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold text-[#8C7A52] tracking-wider uppercase">
            {snip.kicker}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#153E2B]">
            {t.features.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#4E5E56] leading-relaxed">
            {t.features.sectionSubtitle}
          </p>
        </div>

        {/* 3 Polished Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: ArthMitra AI Finance Tutor */}
          <div className="group relative bg-white rounded-2xl border border-[#E5DFD3] p-8 flex flex-col justify-between hover:border-[#C5A059] transition-all hover:shadow-md">
            <div className="space-y-5">
              <div className="w-13 h-13 rounded-xl bg-[#153E2B] flex items-center justify-center text-[#C5A059] shadow-xs group-hover:scale-105 transition-transform">
                <Bot className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-[#8C7A52] tracking-wider uppercase">
                  {t.tutorSubtitle}
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#153E2B]">
                  {t.features.tutorCard.title}
                </h3>
                <p className="text-sm text-[#4E5E56] leading-relaxed">
                  {t.features.tutorCard.description}
                </p>
              </div>

              {/* Sample Prompts Preview */}
              <div className="pt-2 border-t border-[#F2EFE8] space-y-1.5 text-xs text-[#5E6E66]">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                  <span>{snip.tutorPrompt1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                  <span>{snip.tutorPrompt2}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#F2EFE8]">
              <button
                onClick={() => onNavigate('tutor')}
                className="w-full inline-flex items-center justify-between text-sm font-semibold text-[#153E2B] group-hover:text-[#0D291C] transition-colors"
              >
                <span>{t.features.tutorCard.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Financial Claim Checker */}
          <div className="group relative bg-white rounded-2xl border border-[#E5DFD3] p-8 flex flex-col justify-between hover:border-[#C5A059] transition-all hover:shadow-md">
            <div className="space-y-5">
              <div className="w-13 h-13 rounded-xl bg-[#9E3929]/10 border border-[#9E3929]/20 flex items-center justify-center text-[#9E3929] shadow-xs group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-[#9E3929] tracking-wider uppercase">
                  {snip.claimTag}
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#153E2B]">
                  {t.features.claimCard.title}
                </h3>
                <p className="text-sm text-[#4E5E56] leading-relaxed">
                  {t.features.claimCard.description}
                </p>
              </div>

              {/* Sample Red Flags */}
              <div className="pt-2 border-t border-[#F2EFE8] space-y-1.5 text-xs text-[#5E6E66]">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#9E3929]" />
                  <span>{snip.claimSample1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#9E3929]" />
                  <span>{snip.claimSample2}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#F2EFE8]">
              <button
                onClick={() => onNavigate('claims')}
                className="w-full inline-flex items-center justify-between text-sm font-semibold text-[#153E2B] group-hover:text-[#0D291C] transition-colors"
              >
                <span>{t.features.claimCard.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Learning Hub */}
          <div className="group relative bg-white rounded-2xl border border-[#E5DFD3] p-8 flex flex-col justify-between hover:border-[#C5A059] transition-all hover:shadow-md">
            <div className="space-y-5">
              <div className="w-13 h-13 rounded-xl bg-[#153E2B]/10 border border-[#153E2B]/20 flex items-center justify-center text-[#153E2B] shadow-xs group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-[#8C7A52] tracking-wider uppercase">
                  {snip.academyTag}
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#153E2B]">
                  {t.features.learnCard.title}
                </h3>
                <p className="text-sm text-[#4E5E56] leading-relaxed">
                  {t.features.learnCard.description}
                </p>
              </div>

              {/* Sample Topics */}
              <div className="pt-2 border-t border-[#F2EFE8] space-y-1.5 text-xs text-[#5E6E66]">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#153E2B]" />
                  <span>{snip.academyFeature1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#153E2B]" />
                  <span>{snip.academyFeature2}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#F2EFE8]">
              <button
                onClick={() => onNavigate('learn')}
                className="w-full inline-flex items-center justify-between text-sm font-semibold text-[#153E2B] group-hover:text-[#0D291C] transition-colors"
              >
                <span>{t.features.learnCard.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
