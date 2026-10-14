import React, { useState } from 'react';
import { Language, ClaimVerificationResult } from '../../types';
import { getTranslation } from '../../data/translations';
import { presetClaims, analyzeCustomClaim } from '../../data/claimsData';
import { 
  getPresetTitle, 
  getClaimHeadline, 
  getClaimExplanation, 
  getClaimRedFlags, 
  getClaimMath, 
  getClaimRegulatoryNote, 
  getClaimActionAdvice,
  getClaimUI
} from '../../data/claimLocalizer';
import { 
  ShieldAlert, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Scale, 
  ExternalLink,
  ShieldCheck,
  PhoneCall,
  RotateCcw
} from 'lucide-react';

interface ClaimCheckerProps {
  lang: Language;
}

export const ClaimChecker: React.FC<ClaimCheckerProps> = ({ lang }) => {
  const t = getTranslation(lang);
  const ui = getClaimUI(lang);

  const [inputClaim, setInputClaim] = useState<string>('');
  const [selectedPresetId, setSelectedPresetId] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<ClaimVerificationResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const handleSelectPreset = (presetId: string) => {
    const preset = presetClaims.find(p => p.id === presetId);
    if (!preset) return;

    setSelectedPresetId(presetId);
    setInputClaim(preset.sampleClaim);
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setAnalysisResult(preset.result);
      setIsAnalyzing(false);
    }, 600);
  };

  const handleVerifyCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputClaim.trim()) return;

    setSelectedPresetId(null);
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      const res = analyzeCustomClaim(inputClaim);
      setAnalysisResult(res);
      setIsAnalyzing(false);
    }, 700);
  };

  const handleReset = () => {
    setInputClaim('');
    setSelectedPresetId(null);
    setAnalysisResult(null);
  };

  return (
    <div className="py-10 md:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="border-b border-[#E8E3D9] pb-8 mb-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9E3929] bg-[#9E3929]/5 px-3 py-1 rounded-full border border-[#9E3929]/15">
            <ShieldAlert className="w-3.5 h-3.5 text-[#9E3929]" />
            <span>{ui.labBadge}</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#153E2B]">
            {t.features.claimCard.title}
          </h1>
          <p className="text-sm text-[#4E5E56] leading-relaxed">
            {t.features.claimCard.description}
          </p>
        </div>

        {/* Mode Clarity Banner */}
        <div className="mt-4 p-3 bg-white rounded-xl border border-[#E5DFD3] flex items-center justify-between text-xs text-[#52635B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#153E2B]" />
            <span className="font-medium text-[#192620]">
              {ui.engineTitle}
            </span>
            <span className="text-[#5C6B63]">
              {ui.engineDesc}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[#8C7A52] uppercase shrink-0">
            {ui.safetyFirst}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Input Form & Preset Case Studies */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Submission Form */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5DFD3] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="claim-text" className="text-xs font-bold text-[#153E2B] uppercase tracking-wider">
                {ui.enterClaim}
              </label>
              {(inputClaim || analysisResult) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-[#718078] hover:text-[#153E2B] inline-flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{ui.clear}</span>
                </button>
              )}
            </div>

            <form onSubmit={handleVerifyCustom} className="space-y-4">
              <textarea
                id="claim-text"
                rows={5}
                value={inputClaim}
                onChange={(e) => setInputClaim(e.target.value)}
                placeholder={ui.placeholder}
                className="w-full bg-[#FAF8F5] border border-[#DDD7CB] focus:border-[#153E2B] focus:ring-1 focus:ring-[#153E2B] rounded-xl p-3.5 text-xs sm:text-sm text-[#192620] placeholder-[#8C9C93] outline-none transition-all resize-none leading-relaxed"
              />

              <button
                type="submit"
                disabled={!inputClaim.trim() || isAnalyzing}
                className="w-full py-3.5 rounded-xl bg-[#153E2B] hover:bg-[#0E2C1E] disabled:bg-[#CCC6BA] disabled:cursor-not-allowed text-white text-xs font-semibold tracking-wide shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>
                  {isAnalyzing ? ui.verifyingButton : ui.verifyButton}
                </span>
              </button>
            </form>
          </div>

          {/* Real Indian Case Studies (Preset Chips) */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#8C7A52] tracking-wider uppercase px-1">
              {ui.caseStudiesTitle}
            </span>

            <div className="space-y-2.5">
              {presetClaims.map((preset) => {
                const isSelected = selectedPresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-white border-[#153E2B] shadow-xs'
                        : 'bg-white/70 border-[#E8E3D9] hover:bg-white hover:border-[#D5CEC0]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-[#8C7A52] uppercase">
                        {preset.category}
                      </span>
                      <span className={`font-bold ${
                        preset.result.verdict === 'SCAM_ALERT'
                          ? 'text-[#A63628]'
                          : preset.result.verdict === 'HIGH_RISK'
                          ? 'text-[#C85A17]'
                          : 'text-[#206945]'
                      }`}>
                        {preset.result.verdict.replace('_', ' ')}
                      </span>
                    </div>
                    <span className="text-xs font-bold font-editorial text-[#153E2B]">
                      {getPresetTitle(preset, lang)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Forensic Analysis Report */}
        <div className="lg:col-span-7">
          
          {isAnalyzing ? (
            /* Loading State */
            <div className="bg-white rounded-2xl border border-[#E5DFD3] p-12 text-center space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-full border-3 border-[#153E2B] border-t-transparent animate-spin mx-auto" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#153E2B]">
                  {ui.runningRules}
                </h3>
                <p className="text-xs text-[#62736A]">
                  {ui.runningDesc}
                </p>
              </div>
            </div>
          ) : analysisResult ? (
            /* Full Verification Result Card */
            <div className="bg-white rounded-2xl border border-[#E5DFD3] p-6 sm:p-8 shadow-xs space-y-7">
              
              {/* Verdict Banner */}
              <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                analysisResult.verdict === 'SCAM_ALERT'
                  ? 'bg-[#FDF2F0] border-[#F2C1B8]'
                  : analysisResult.verdict === 'HIGH_RISK'
                  ? 'bg-[#FFF7ED] border-[#FED7AA]'
                  : analysisResult.verdict === 'CAUTION'
                  ? 'bg-[#FEFCE8] border-[#FEF08A]'
                  : 'bg-[#EBF7EE] border-[#B7E2C4]'
              }`}>
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    analysisResult.verdict === 'SCAM_ALERT'
                      ? 'bg-[#A63628] text-white'
                      : analysisResult.verdict === 'HIGH_RISK'
                      ? 'bg-[#C85A17] text-white'
                      : analysisResult.verdict === 'CAUTION'
                      ? 'bg-[#B88A44] text-white'
                      : 'bg-[#206945] text-white'
                  }`}>
                    {analysisResult.verdict === 'LEGITIMATE_BENCHMARK' ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <AlertTriangle className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6B63]">
                      {ui.forensicVerdict}
                    </span>
                    <h2 className="font-editorial text-xl font-bold text-[#192620]">
                      {getClaimHeadline(analysisResult, lang)}
                    </h2>
                  </div>
                </div>

                {/* Risk Score Pill */}
                <div className="text-right shrink-0 bg-white/80 px-4 py-2 rounded-xl border border-black/5">
                  <div className="text-[10px] font-semibold text-[#718078] uppercase">
                    {ui.riskIndex}
                  </div>
                  <div className={`text-2xl font-black font-editorial ${
                    analysisResult.score > 70 ? 'text-[#A63628]' : analysisResult.score > 40 ? 'text-[#C85A17]' : 'text-[#206945]'
                  }`}>
                    {analysisResult.score} / 100
                  </div>
                </div>
              </div>

              {/* Forensic Explanation */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-[#153E2B] uppercase tracking-wider">
                  {ui.forensicBreakdown}
                </h3>
                <p className="text-xs sm:text-sm text-[#2F3D35] leading-relaxed">
                  {getClaimExplanation(analysisResult, lang)}
                </p>
              </div>

              {/* Red Flags Identified */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold text-[#A63628] uppercase tracking-wider">
                  {ui.identifiedFlags}
                </h3>
                <div className="space-y-2">
                  {getClaimRedFlags(analysisResult, lang).map((rf, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE5] text-xs text-[#324139]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A63628] shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{rf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Math Doesn't Lie Box */}
              <div className="p-4 rounded-xl bg-[#FAF6F2] border border-[#EADED2] space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8C7A52] uppercase">
                  <Scale className="w-4 h-4 text-[#8C7A52]" />
                  <span>{ui.mathCheck}</span>
                </div>
                <p className="text-xs text-[#3E4E45] leading-relaxed">
                  {getClaimMath(analysisResult, lang)}
                </p>
              </div>

              {/* Official SEBI Reference */}
              <div className="p-4 rounded-xl bg-[#153E2B]/5 border border-[#153E2B]/15 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#153E2B] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#153E2B]" />
                  <span>{ui.regulatoryBenchmark}</span>
                </div>
                <p className="text-xs text-[#2A3B32] leading-relaxed">
                  {getClaimRegulatoryNote(analysisResult, lang)}
                </p>
              </div>

              {/* Action Advice */}
              <div className="space-y-2 pt-2 border-t border-[#F2EFE8]">
                <h3 className="text-xs font-bold text-[#153E2B] uppercase tracking-wider">
                  {ui.actionAdvice}
                </h3>
                <ul className="space-y-1.5 text-xs text-[#324139]">
                  {getClaimActionAdvice(analysisResult, lang).map((advice, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#206945] font-bold">✓</span>
                      <span>{advice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Report Fraud Helpline CTA */}
              <div className="pt-4 border-t border-[#F2EFE8] flex items-center justify-between text-xs text-[#5C6B63]">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#A63628]" />
                  <span>{ui.helpline}</span>
                </div>
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#153E2B] hover:underline flex items-center gap-1"
                >
                  <span>SEBI SCORES</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-2xl border border-[#E5DFD3] p-12 text-center space-y-4 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E8E3D9] flex items-center justify-center text-[#8C7A52] mx-auto">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <div className="space-y-1 max-w-sm mx-auto">
                <h3 className="text-base font-bold text-[#153E2B] font-editorial">
                  {ui.readyTitle}
                </h3>
                <p className="text-xs text-[#5C6B63] leading-relaxed">
                  {ui.readyDesc}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
