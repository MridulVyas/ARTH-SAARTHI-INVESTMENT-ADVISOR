/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Screen, Language } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { FeatureCards } from './components/home/FeatureCards';
import { TopicGrid } from './components/home/TopicGrid';
import { CompoundingSimulator } from './components/home/CompoundingSimulator';
import { TrustedResources } from './components/home/TrustedResources';
import { LearnHub } from './components/learn/LearnHub';
import { AiTutor } from './components/tutor/AiTutor';
import { ClaimChecker } from './components/claims/ClaimChecker';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedModuleId, setSelectedModuleId] = useState<string | undefined>(undefined);
  const [lang, setLang] = useState<Language>(() => {
    const validLangs: Language[] = ['en', 'hi', 'mr', 'ta', 'te', 'bn', 'gu', 'kn', 'ml', 'pa', 'or', 'ur', 'as'];
    const saved = localStorage.getItem('arth_saarthi_lang') || localStorage.getItem('nivesh_saathi_lang');
    return (saved && validLangs.includes(saved as Language)) ? (saved as Language) : 'en';
  });

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('arth_saarthi_lang', newLang);
  };

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    if (screen !== 'learn') {
      setSelectedModuleId(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setCurrentScreen('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#26332D]">
      {/* Top Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Screen Content */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <div>
            <Hero onNavigate={handleNavigate} lang={lang} />
            <FeatureCards onNavigate={handleNavigate} lang={lang} />
            <TopicGrid onNavigateToModule={handleNavigateToModule} lang={lang} />
            <CompoundingSimulator lang={lang} />
            <TrustedResources lang={lang} />
          </div>
        )}

        {currentScreen === 'learn' && (
          <LearnHub
            lang={lang}
            onNavigate={handleNavigate}
            selectedModuleId={selectedModuleId}
          />
        )}

        {currentScreen === 'tutor' && (
          <AiTutor lang={lang} />
        )}

        {currentScreen === 'claims' && (
          <ClaimChecker lang={lang} />
        )}
      </main>

      {/* Institutional Educational Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />
    </div>
  );
}
