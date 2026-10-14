import React, { useState, useRef, useEffect } from 'react';
import { Screen, Language } from '../../types';
import { getTranslation, supportedLanguages } from '../../data/translations';
import { BookOpen, Bot, ShieldAlert, Menu, X, ArrowRight, Globe, ChevronDown, Check } from 'lucide-react';

interface NavbarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  lang,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const t = getTranslation(lang);
  const currentLangMeta = supportedLanguages.find(l => l.code === lang) || supportedLanguages[0];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (screen: Screen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLang = (code: Language) => {
    onLanguageChange(code);
    setLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Arth Saarthi */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-[#153E2B] flex items-center justify-center text-[#C5A059] shadow-sm group-hover:bg-[#102F21] transition-colors">
              <span className="font-editorial text-2xl font-bold tracking-tight">₹</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-editorial text-2xl font-bold text-[#153E2B] tracking-tight">
                  {t.brandName}
                </span>
                <span className="text-[11px] font-semibold text-[#C5A059] tracking-wider uppercase">
                  Bharat
                </span>
              </div>
              <p className="text-xs text-[#5C6B63] -mt-0.5">
                {t.brandTagline}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNav('home')}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                currentScreen === 'home'
                  ? 'text-[#153E2B] bg-[#153E2B]/8 font-semibold'
                  : 'text-[#44524B] hover:text-[#153E2B] hover:bg-[#EFECE5]'
              }`}
            >
              {t.nav.home}
            </button>

            <button
              onClick={() => handleNav('learn')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                currentScreen === 'learn'
                  ? 'text-[#153E2B] bg-[#153E2B]/8 font-semibold'
                  : 'text-[#44524B] hover:text-[#153E2B] hover:bg-[#EFECE5]'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#153E2B]" />
              <span>{t.nav.learn}</span>
            </button>

            {/* AI Tutor renamed to ArthMitra */}
            <button
              onClick={() => handleNav('tutor')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                currentScreen === 'tutor'
                  ? 'text-[#153E2B] bg-[#153E2B]/8 font-semibold'
                  : 'text-[#44524B] hover:text-[#153E2B] hover:bg-[#EFECE5]'
              }`}
            >
              <Bot className="w-4 h-4 text-[#153E2B]" />
              <span className="flex items-center gap-1.5">
                <span>{t.nav.tutor}</span>
                <span className="text-[10px] bg-[#153E2B]/10 text-[#153E2B] px-1.5 py-0.5 rounded font-bold border border-[#153E2B]/20">AI</span>
              </span>
            </button>

            <button
              onClick={() => handleNav('claims')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                currentScreen === 'claims'
                  ? 'text-[#153E2B] bg-[#153E2B]/8 font-semibold'
                  : 'text-[#44524B] hover:text-[#153E2B] hover:bg-[#EFECE5]'
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-[#153E2B]" />
              <span>{t.nav.claims}</span>
            </button>
          </nav>

          {/* Right Controls: 13-Language Selector + Quick CTA */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-xs font-semibold text-[#153E2B] border border-[#DDD7CB] hover:border-[#153E2B] shadow-2xs transition-all"
                aria-expanded={langMenuOpen}
                aria-haspopup="true"
              >
                <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-bold">{currentLangMeta.nativeName}</span>
                <span className="text-[#687B72] text-[11px]">({currentLangMeta.name})</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#687B72] transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* 13 Languages Popover Menu */}
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 max-h-96 overflow-y-auto bg-white rounded-2xl border border-[#DDD7CB] shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3 py-2 border-b border-[#F0ECE1] mb-1">
                    <span className="text-[11px] font-bold text-[#8C7A52] uppercase tracking-wider block">
                      {t.nav.selectLanguage} (13 Languages)
                    </span>
                    <span className="text-[11px] text-[#6E8076]">
                      Choose your preferred Indian language
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-1">
                    {supportedLanguages.map((langItem) => {
                      const isSelected = lang === langItem.code;
                      return (
                        <button
                          key={langItem.code}
                          type="button"
                          onClick={() => handleSelectLang(langItem.code)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                            isSelected
                              ? 'bg-[#153E2B]/10 text-[#153E2B] font-bold'
                              : 'text-[#384841] hover:bg-[#FAF8F5] hover:text-[#153E2B]'
                          }`}
                        >
                          <div className="flex items-baseline gap-2">
                            <span className="text-sm font-semibold">{langItem.nativeName}</span>
                            <span className="text-[11px] text-[#718278]">({langItem.name})</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#153E2B] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => handleNav('learn')}
              className="inline-flex items-center gap-2 bg-[#153E2B] hover:bg-[#0E2C1E] text-white px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide shadow-xs transition-colors"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Quick language toggle pill for mobile */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#153E2B] text-xs font-semibold border border-[#DDD7CB] shadow-2xs"
              >
                <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-bold truncate max-w-[80px]">{currentLangMeta.nativeName}</span>
                <ChevronDown className="w-3 h-3 text-[#687B72]" />
              </button>

              {/* Mobile language dropdown */}
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto bg-white rounded-2xl border border-[#DDD7CB] shadow-2xl p-2 z-50">
                  <div className="px-3 py-1.5 border-b border-[#F0ECE1] mb-1 text-[11px] font-bold text-[#8C7A52] uppercase">
                    {t.nav.selectLanguage}
                  </div>
                  {supportedLanguages.map((langItem) => (
                    <button
                      key={langItem.code}
                      onClick={() => handleSelectLang(langItem.code)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between ${
                        lang === langItem.code
                          ? 'bg-[#153E2B]/10 text-[#153E2B] font-bold'
                          : 'text-[#384841] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span>{langItem.nativeName} ({langItem.name})</span>
                      {lang === langItem.code && <Check className="w-3.5 h-3.5 text-[#153E2B]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#153E2B] hover:bg-[#EFECE5] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E3D9] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => handleNav('home')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                currentScreen === 'home'
                  ? 'bg-[#153E2B] text-white'
                  : 'text-[#192620] hover:bg-[#EFECE5]'
              }`}
            >
              <span>{t.nav.home}</span>
              <span className="text-xs opacity-70">01</span>
            </button>

            <button
              onClick={() => handleNav('learn')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                currentScreen === 'learn'
                  ? 'bg-[#153E2B] text-white'
                  : 'text-[#192620] hover:bg-[#EFECE5]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4" />
                <span>{t.nav.learn}</span>
              </div>
              <span className="text-xs opacity-70">02</span>
            </button>

            {/* AI Tutor as ArthMitra in Mobile Drawer */}
            <button
              onClick={() => handleNav('tutor')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                currentScreen === 'tutor'
                  ? 'bg-[#153E2B] text-white'
                  : 'text-[#192620] hover:bg-[#EFECE5]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Bot className="w-4 h-4" />
                <span>{t.nav.tutor} (AI Tutor)</span>
              </div>
              <span className="text-xs opacity-70">03</span>
            </button>

            <button
              onClick={() => handleNav('claims')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                currentScreen === 'claims'
                  ? 'bg-[#153E2B] text-white'
                  : 'text-[#192620] hover:bg-[#EFECE5]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4" />
                <span>{t.nav.claims}</span>
              </div>
              <span className="text-xs opacity-70">04</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
