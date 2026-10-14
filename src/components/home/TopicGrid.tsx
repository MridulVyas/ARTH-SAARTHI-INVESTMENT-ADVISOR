import React from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../data/translations';
import { 
  ShieldCheck, 
  TrendingDown, 
  LineChart, 
  PieChart, 
  Scale, 
  AlertOctagon, 
  ArrowUpRight 
} from 'lucide-react';

interface TopicGridProps {
  onNavigateToModule: (moduleId: string) => void;
  lang: Language;
}

export const TopicGrid: React.FC<TopicGridProps> = ({ onNavigateToModule, lang }) => {
  const t = getTranslation(lang);

  const topics = [
    {
      id: 'module-saving',
      icon: ShieldCheck,
      pillarText: 'Pillar 01',
      title: t.topics.saving.title,
      desc: t.topics.saving.desc,
      stats: '6 Months Expenses Buffer',
    },
    {
      id: 'module-inflation',
      icon: TrendingDown,
      pillarText: 'Pillar 02',
      title: t.topics.inflation.title,
      desc: t.topics.inflation.desc,
      stats: 'Doubles Cost in 12 Yrs (Rule of 72)',
    },
    {
      id: 'module-mutual-funds',
      icon: PieChart,
      pillarText: 'Pillar 03',
      title: t.topics.mutual_funds.title,
      desc: t.topics.mutual_funds.desc,
      stats: 'Start with ₹500/month',
    },
    {
      id: 'module-stocks',
      icon: LineChart,
      pillarText: 'Pillar 04',
      title: t.topics.stocks.title,
      desc: t.topics.stocks.desc,
      stats: 'Own Business, Avoid F&O Gambling',
    },
    {
      id: 'module-risk',
      icon: Scale,
      pillarText: 'Pillar 05',
      title: t.topics.risk.title,
      desc: t.topics.risk.desc,
      stats: 'Equities + Debt (PPF) + Gold (SGB)',
    },
    {
      id: 'module-fraud',
      icon: AlertOctagon,
      pillarText: 'Pillar 06',
      title: t.topics.fraud.title,
      desc: t.topics.fraud.desc,
      stats: 'Verify on SEBI (sebi.gov.in)',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F2EB] border-y border-[#E8E3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
          <span className="text-xs font-semibold text-[#8C7A52] tracking-wider uppercase">
            Foundation Curriculum
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#153E2B]">
            {t.topics.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#4E5E56] leading-relaxed">
            {t.topics.sectionSubtitle}
          </p>
        </div>

        {/* Grid of 6 Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                onClick={() => onNavigateToModule(topic.id)}
                className="group cursor-pointer bg-white rounded-2xl border border-[#E3DDD1] p-6 hover:border-[#153E2B] transition-all hover:shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E3DDD1] flex items-center justify-center text-[#153E2B] group-hover:bg-[#153E2B] group-hover:text-[#C5A059] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8C7A52] tracking-wider uppercase">
                      {topic.pillarText}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#153E2B] group-hover:text-[#0A261A] transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-[#52635B] mt-2 leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F2EFE8] flex items-center justify-between text-xs">
                  <span className="font-medium text-[#153E2B]/80 truncate">
                    {topic.stats}
                  </span>
                  <div className="inline-flex items-center gap-1 font-semibold text-[#153E2B] group-hover:text-[#C5A059] transition-colors shrink-0">
                    <span>{t.topics.viewModule}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
