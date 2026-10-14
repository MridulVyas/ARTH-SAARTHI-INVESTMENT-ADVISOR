import React, { useState, useMemo } from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../data/translations';
import { Calculator, ShieldCheck, Flame, Info } from 'lucide-react';

interface CompoundingSimulatorProps {
  lang: Language;
}

export const CompoundingSimulator: React.FC<CompoundingSimulatorProps> = ({ lang }) => {
  const t = getTranslation(lang);

  const [monthlyAmount, setMonthlyAmount] = useState<number>(5000);
  const [years, setYears] = useState<number>(15);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [inflationRate, setInflationRate] = useState<number>(6);

  const calculations = useMemo(() => {
    const totalMonths = years * 12;
    const monthlyRate = returnRate / 100 / 12;
    const totalInvested = monthlyAmount * totalMonths;

    let sipValue = 0;
    if (monthlyRate > 0) {
      sipValue =
        monthlyAmount *
        ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
        (1 + monthlyRate);
    } else {
      sipValue = totalInvested;
    }

    const wealthGained = sipValue - totalInvested;
    const erodedCashValue = totalInvested / Math.pow(1 + inflationRate / 100, years);
    const inflationLoss = totalInvested - erodedCashValue;

    return {
      totalInvested: Math.round(totalInvested),
      sipValue: Math.round(sipValue),
      wealthGained: Math.round(wealthGained),
      erodedCashValue: Math.round(erodedCashValue),
      inflationLoss: Math.round(inflationLoss),
    };
  }, [monthlyAmount, years, returnRate, inflationRate]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/5 px-3 py-1 rounded-full border border-[#153E2B]/10">
            <Calculator className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'hi' ? 'इंटरैक्टिव सिम्युलेटर' : 'Interactive Math'}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#153E2B]">
            {t.simulator.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4E5E56] leading-relaxed">
            {t.simulator.subtitle}
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DFD3] shadow-xs space-y-6">
            
            {/* Monthly SIP Amount */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-[#324139]">{t.simulator.monthlyInvestment}</span>
                <span className="text-sm font-bold text-[#153E2B] font-editorial">
                  {formatINR(monthlyAmount)}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                className="w-full accent-[#153E2B] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#718078]">
                <span>₹500</span>
                <span>₹25,000</span>
                <span>₹50,000</span>
              </div>
            </div>

            {/* Time Horizon */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-[#324139]">{t.simulator.investmentPeriod}</span>
                <span className="text-sm font-bold text-[#153E2B]">
                  {years} {lang === 'hi' ? 'वर्ष' : 'Years'}
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-[#153E2B] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#718078]">
                <span>3 Yrs</span>
                <span>15 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>

            {/* Expected Equity Return */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-[#324139]">{t.simulator.expectedReturn}</span>
                <span className="text-sm font-bold text-[#206945]">{returnRate}% CAGR</span>
              </div>
              <input
                type="range"
                min="8"
                max="15"
                step="0.5"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-full accent-[#206945] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#718078]">
                <span>8% (Conservative)</span>
                <span>12% (Nifty Historical)</span>
                <span>15%</span>
              </div>
            </div>

            {/* Inflation Rate */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-[#324139]">{t.simulator.inflationRate}</span>
                <span className="text-sm font-bold text-[#9E3929]">{inflationRate}% / year</span>
              </div>
              <input
                type="range"
                min="4"
                max="9"
                step="0.5"
                value={inflationRate}
                onChange={(e) => setInflationRate(Number(e.target.value))}
                className="w-full accent-[#9E3929] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#718078]">
                <span>4%</span>
                <span>6% (Indian CPI Avg)</span>
                <span>9%</span>
              </div>
            </div>

            {/* Rule of 72 Note */}
            <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EBE6DB] flex items-start gap-2.5 text-xs text-[#52635B]">
              <Info className="w-4 h-4 text-[#8C7A52] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                By the Rule of 72, at {inflationRate}% annual inflation, prices double every {(72 / inflationRate).toFixed(1)} years.
              </p>
            </div>

          </div>

          {/* Results Comparison Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Card 1: Disciplined SIP Result with Rich Forest Green Border */}
              <div className="bg-white rounded-2xl border-2 border-[#153E2B] p-6 space-y-4 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#153E2B]/5 rounded-bl-full pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#153E2B] uppercase tracking-wider">
                    {lang === 'hi' ? 'अनुशासित एसआईपी (इक्विटी)' : 'Disciplined Equity SIP'}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#153E2B]" />
                </div>

                <div>
                  <div className="text-xs text-[#5C6B63]">{t.simulator.compoundedValue}</div>
                  <div className="font-editorial text-3xl font-bold text-[#153E2B] mt-1">
                    {formatINR(calculations.sipValue)}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F2EFE8] space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#5C6B63]">
                    <span>{t.simulator.investedAmount}:</span>
                    <span className="font-semibold text-[#192620]">{formatINR(calculations.totalInvested)}</span>
                  </div>
                  <div className="flex justify-between text-[#206945]">
                    <span>Compounding Gain:</span>
                    <span className="font-bold">+{formatINR(calculations.wealthGained)}</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Cash in Bank / Mattress with Inflation Loss */}
              <div className="bg-white rounded-2xl border border-[#D9C4BE] p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#9E3929] uppercase tracking-wider">
                    {lang === 'hi' ? 'अलमारी या नकद बचत' : 'Idle Cash in Locker'}
                  </span>
                  <Flame className="w-4 h-4 text-[#9E3929]" />
                </div>

                <div>
                  <div className="text-xs text-[#5C6B63]">{t.simulator.cashValueErosion}</div>
                  <div className="font-editorial text-3xl font-bold text-[#9E3929] mt-1">
                    {formatINR(calculations.erodedCashValue)}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F2EFE8] space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#5C6B63]">
                    <span>{t.simulator.investedAmount}:</span>
                    <span className="font-semibold text-[#192620]">{formatINR(calculations.totalInvested)}</span>
                  </div>
                  <div className="flex justify-between text-[#9E3929]">
                    <span>Inflation Loss:</span>
                    <span className="font-bold">-{formatINR(calculations.inflationLoss)}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Visual Ratio Comparison Bar */}
            <div className="bg-white rounded-2xl border border-[#E5DFD3] p-6 space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold text-[#324139]">
                <span>Wealth Comparison Scale:</span>
                <span className="text-[#153E2B]">
                  SIP yields {(calculations.sipValue / Math.max(1, calculations.erodedCashValue)).toFixed(1)}x greater purchasing power
                </span>
              </div>

              <div className="w-full h-4 bg-[#EAE5D9] rounded-full overflow-hidden flex">
                <div 
                  className="bg-[#153E2B] h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (calculations.sipValue / (calculations.sipValue + calculations.erodedCashValue)) * 100)}%` }}
                />
                <div 
                  className="bg-[#C97B70] h-full transition-all duration-300"
                  style={{ width: `${Math.max(0, (calculations.erodedCashValue / (calculations.sipValue + calculations.erodedCashValue)) * 100)}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] text-[#63736B] pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#153E2B]" />
                  <span>Compounded Equity Portfolio</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C97B70]" />
                  <span>Devalued Cash Purchasing Power</span>
                </div>
              </div>
            </div>

            {/* Rich Dark-Green Editorial Insight Card */}
            <div className="bg-[#153E2B] text-white rounded-2xl p-6 border border-[#22583F] space-y-2">
              <span className="text-[11px] font-semibold text-[#C5A059] uppercase tracking-wider block">
                {t.simulator.insight}
              </span>
              <p className="text-xs sm:text-sm text-[#D8E4DD] leading-relaxed">
                {t.simulator.insightText}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
