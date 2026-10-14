import React from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../data/translations';
import { ExternalLink, ShieldCheck, Landmark, FileText, Award } from 'lucide-react';

interface TrustedResourcesProps {
  lang: Language;
}

export const TrustedResources: React.FC<TrustedResourcesProps> = ({ lang }) => {
  const t = getTranslation(lang);

  const resources = [
    {
      icon: ShieldCheck,
      title: t.resources.sebiTitle,
      desc: t.resources.sebiDesc,
      url: 'https://scores.sebi.gov.in',
      tag: 'Statutory Regulator',
    },
    {
      icon: Landmark,
      title: t.resources.rbiTitle,
      desc: t.resources.rbiDesc,
      url: 'https://www.rbi.org.in',
      tag: 'Central Bank of India',
    },
    {
      icon: FileText,
      title: t.resources.amfiTitle,
      desc: t.resources.amfiDesc,
      url: 'https://www.amfiindia.com',
      tag: 'Industry Association',
    },
    {
      icon: Award,
      title: t.resources.bseNseTitle,
      desc: t.resources.bseNseDesc,
      url: 'https://www.nseindia.com/invest/investor-services',
      tag: 'Premier Stock Exchanges',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F2EB] border-t border-[#E8E3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
          <span className="text-xs font-semibold text-[#8C7A52] tracking-wider uppercase">
            Official Regulatory Authorities
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#153E2B]">
            {t.resources.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#4E5E56] leading-relaxed">
            {t.resources.sectionSubtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-[#E3DDD1] p-6 hover:border-[#153E2B] transition-all hover:shadow-xs flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E3DDD1] flex items-center justify-center text-[#153E2B] group-hover:bg-[#153E2B] group-hover:text-[#C5A059] transition-colors shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-[#8C7A52] tracking-wider uppercase">
                      {item.tag}
                    </span>
                    <h3 className="font-editorial text-lg font-bold text-[#153E2B] group-hover:text-[#0E281C]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#52635B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-[#C5A059] group-hover:text-[#153E2B] shrink-0 mt-1 transition-colors" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
