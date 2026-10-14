import React from 'react';
import { Screen, Language } from '../../types';
import { getTranslation } from '../../data/translations';
import { ShieldCheck, PhoneCall, ExternalLink, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: Screen) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const t = getTranslation(lang);

  return (
    <footer className="bg-[#0E281C] text-[#D8E2DC] border-t border-[#1C4834]">
      {/* Statutory Disclaimer Banner */}
      <div className="border-b border-[#1C4834] bg-[#0A1F16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-[#143B2A] p-5 rounded-2xl border border-[#23583F]">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 flex items-center justify-center shrink-0 text-[#C5A059]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#EAE6DE] tracking-wide uppercase">
                {t.footer.disclaimerTitle}
              </h4>
              <p className="text-xs leading-relaxed text-[#B7C7BF]">
                {t.footer.disclaimerText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C5A059] flex items-center justify-center text-[#0E281C] font-bold font-editorial text-xl">
                ₹
              </div>
              <span className="font-editorial text-2xl font-bold text-white tracking-tight">
                {t.brandName}
              </span>
            </div>
            <p className="text-xs text-[#A1B3AA] leading-relaxed">
              {t.brandTagline} — Built for everyday Indian households, salaried earners, and first-time retail investors across Bharat.
            </p>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C5A059]">
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span className="font-medium">{t.footer.reportFrauds}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h5 className="text-xs font-bold tracking-wider text-white uppercase mb-4">
              {t.footer.quickLinks}
            </h5>
            <ul className="space-y-2.5 text-xs text-[#B7C7BF]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('learn')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.learn}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tutor')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>{t.nav.tutor}</span>
                  <span className="text-[10px] bg-[#C5A059]/20 text-[#C5A059] px-1 py-0.2 rounded font-bold">AI</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('claims')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.claims}
                </button>
              </li>
            </ul>
          </div>

          {/* Official Regulatory Portals */}
          <div className="md:col-span-2">
            <h5 className="text-xs font-bold tracking-wider text-white uppercase mb-4">
              {t.footer.authorities}
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#143B2A]/60 border border-[#23583F] hover:bg-[#143B2A] transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="font-semibold text-white block">SEBI SCORES Portal</span>
                  <span className="text-[11px] text-[#A1B3AA]">Lodge Investor Complaints</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059] opacity-70 group-hover:opacity-100" />
              </a>

              <a
                href="https://www.rbi.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#143B2A]/60 border border-[#23583F] hover:bg-[#143B2A] transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="font-semibold text-white block">RBI Kehta Hai</span>
                  <span className="text-[11px] text-[#A1B3AA]">Banking & Fraud Warnings</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059] opacity-70 group-hover:opacity-100" />
              </a>

              <a
                href="https://www.amfiindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#143B2A]/60 border border-[#23583F] hover:bg-[#143B2A] transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="font-semibold text-white block">AMFI India</span>
                  <span className="text-[11px] text-[#A1B3AA]">Mutual Funds Sahi Hai</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059] opacity-70 group-hover:opacity-100" />
              </a>

              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#143B2A]/60 border border-[#23583F] hover:bg-[#143B2A] transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="font-semibold text-white block">Cyber Crime Portal (1930)</span>
                  <span className="text-[11px] text-[#A1B3AA]">Financial Fraud Redressal</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059] opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1C4834] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8BA095]">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-1.5">
            <span>Crafted with integrity for</span>
            <span className="font-semibold text-[#EAE6DE]">Bharat 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
