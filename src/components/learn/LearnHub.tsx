import React, { useState, useRef } from 'react';
import { Language, Screen } from '../../types';
import { learningModules } from '../../data/lessonsData';
import { getTranslation } from '../../data/translations';
import { 
  getModuleBadge, 
  getModuleTitle, 
  getLessonTitle, 
  getLessonSummary, 
  getLessonContent,
  getQuizQuestion,
  getQuizOption,
  getQuizExplanation,
  getLessonQuizzes,
  getLessonUI
} from '../../data/lessonLocalizer';
import { 
  BookOpen, 
  CheckCircle, 
  HelpCircle, 
  ArrowRight, 
  AlertTriangle, 
  Lightbulb, 
  RotateCcw,
  Award,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUp,
  Check,
  Bot
} from 'lucide-react';

interface LearnHubProps {
  lang: Language;
  onNavigate: (screen: Screen) => void;
  selectedModuleId?: string;
}

export const LearnHub: React.FC<LearnHubProps> = ({ lang, onNavigate, selectedModuleId }) => {
  const t = getTranslation(lang);
  const ui = getLessonUI(lang);

  const lessonTopRef = useRef<HTMLDivElement>(null);
  const quizSectionRef = useRef<HTMLDivElement>(null);

  // Active module
  const [activeModuleId, setActiveModuleId] = useState<string>(
    selectedModuleId || learningModules[0].id
  );

  // Active lesson inside module
  const currentModule = learningModules.find(m => m.id === activeModuleId) || learningModules[0];
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const currentLesson = currentModule.lessons[activeLessonIndex] || currentModule.lessons[0];

  // 5 Questions for the current lesson
  const quizzes = getLessonQuizzes(currentLesson);

  // Multi-question Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [hasSubmittedQuiz, setHasSubmittedQuiz] = useState<boolean>(false);
  const [showUnansweredWarning, setShowUnansweredWarning] = useState<boolean>(false);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});

  const handleModuleSelect = (modId: string) => {
    setActiveModuleId(modId);
    setActiveLessonIndex(0);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setHasSubmittedQuiz(false);
    setShowUnansweredWarning(false);
  };

  const handleOptionSelect = (optId: string) => {
    if (hasSubmittedQuiz) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optId
    }));
    setShowUnansweredWarning(false);
  };

  const handleNextQuestion = () => {
    if (!userAnswers[currentQuestionIndex]) {
      setShowUnansweredWarning(true);
      return;
    }
    setShowUnansweredWarning(false);
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowUnansweredWarning(false);
    }
  };

  const handleJumpToQuestion = (targetIdx: number) => {
    if (hasSubmittedQuiz) return;
    // Allow jumping back to any previous question, or jumping forward if currently answered
    if (targetIdx <= currentQuestionIndex || userAnswers[currentQuestionIndex]) {
      setCurrentQuestionIndex(targetIdx);
      setShowUnansweredWarning(false);
    } else {
      setShowUnansweredWarning(true);
    }
  };

  const handleSubmitQuiz = () => {
    // Check if any question remains unanswered
    const unansweredIndex = quizzes.findIndex((_, idx) => !userAnswers[idx]);
    if (unansweredIndex !== -1) {
      setCurrentQuestionIndex(unansweredIndex);
      setShowUnansweredWarning(true);
      return;
    }

    setHasSubmittedQuiz(true);
    setShowUnansweredWarning(false);

    // Calculate score based on actual user answers
    const finalScore = quizzes.reduce((acc, q, idx) => {
      return acc + (userAnswers[idx] === q.correctOptionId ? 1 : 0);
    }, 0);

    if (finalScore >= 3) {
      setCompletedLessons(prev => ({ ...prev, [currentLesson.id]: true }));
    }

    quizSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setHasSubmittedQuiz(false);
    setShowUnansweredWarning(false);
  };

  const handleBackToLesson = () => {
    lessonTopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentQuiz = quizzes[currentQuestionIndex] || quizzes[0];
  const progressPercent = ((currentQuestionIndex + 1) / quizzes.length) * 100;

  const score = quizzes.reduce((acc, q, idx) => {
    return acc + (userAnswers[idx] === q.correctOptionId ? 1 : 0);
  }, 0);
  const scorePercentage = Math.round((score / quizzes.length) * 100);

  const lessonContent = getLessonContent(currentLesson, lang);

  return (
    <div className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="border-b border-[#E8E3D9] pb-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/5 px-3 py-1 rounded-full border border-[#153E2B]/10">
              <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.nav.learn}</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#153E2B]">
              {t.topics.sectionTitle}
            </h1>
            <p className="text-sm text-[#4E5E56] max-w-2xl">
              {t.topics.sectionSubtitle}
            </p>
          </div>

          {/* Progress Counter */}
          <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E5DFD3] shadow-xs shrink-0">
            <div className="w-10 h-10 rounded-lg bg-[#153E2B]/10 flex items-center justify-center text-[#153E2B]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#8C7A52] uppercase">
                {ui.progress}
              </div>
              <div className="text-sm font-bold text-[#153E2B]">
                {Object.keys(completedLessons).length} / {learningModules.length} {ui.mastered}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Module Selector */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-xs font-bold text-[#8C7A52] tracking-wider uppercase px-1">
            {ui.foundationModules}
          </h2>

          <div className="space-y-2">
            {learningModules.map((module) => {
              const isActive = module.id === activeModuleId;
              const isDone = module.lessons.some(l => completedLessons[l.id]);

              return (
                <button
                  key={module.id}
                  onClick={() => handleModuleSelect(module.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    isActive
                      ? 'bg-white border-[#153E2B] shadow-xs'
                      : 'bg-white/60 border-[#E8E3D9] hover:bg-white hover:border-[#D5CEC0]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#8C7A52] uppercase">
                        {getModuleBadge(module, lang)}
                      </span>
                      {isDone && (
                        <CheckCircle className="w-3.5 h-3.5 text-[#2A7550]" />
                      )}
                    </div>
                    <div className="text-sm font-bold font-editorial text-[#153E2B]">
                      {getModuleTitle(module, lang)}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 mt-1 transition-transform ${
                    isActive ? 'text-[#153E2B] translate-x-0.5' : 'text-[#8C9C93]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Ask ArthMitra Promo Card */}
          <div className="p-5 rounded-2xl bg-[#153E2B] text-white space-y-3 mt-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
              <Bot className="w-4 h-4 text-[#C5A059]" />
              <span>{t.tutorName}</span>
            </div>
            <p className="text-xs text-[#EAE5D9] leading-relaxed">
              {ui.tutorPromoDesc}
            </p>
            <button
              onClick={() => onNavigate('tutor')}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/20 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{ui.askTutor}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>
        </div>

        {/* Right Column: Full Lesson Reading & Interactive Multi-Question Quiz */}
        <div ref={lessonTopRef} className="lg:col-span-8 bg-white rounded-2xl border border-[#E5DFD3] p-6 sm:p-10 shadow-xs space-y-8">
          
          {/* Lesson Header */}
          <div className="space-y-3 border-b border-[#F2EFE8] pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#718078]">
              <span className="font-semibold text-[#8C7A52] uppercase tracking-wider">
                {getModuleBadge(currentModule, lang)}
              </span>
              <span>{currentLesson.duration}</span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#153E2B] leading-tight">
              {getLessonTitle(currentLesson, lang)}
            </h2>

            <p className="text-sm font-medium text-[#4E5E56] leading-relaxed italic border-l-2 border-[#C5A059] pl-3 py-0.5">
              {getLessonSummary(currentLesson, lang)}
            </p>
          </div>

          {/* Lesson Content */}
          <div className="space-y-6 text-[#2D3B34] text-sm leading-relaxed">
            
            {/* Introduction */}
            <p className="text-base text-[#192620] leading-relaxed">
              {lessonContent.introduction}
            </p>

            {/* Key Points */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-[#153E2B] uppercase tracking-wider">
                {ui.keyRules}
              </h3>
              <div className="space-y-2.5">
                {lessonContent.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#EFECE5]">
                    <span className="w-5 h-5 rounded-full bg-[#153E2B] text-[#C5A059] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#3A4A41] leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Myth vs Fact Box */}
            <div className="bg-[#FAF6F2] rounded-2xl border border-[#E8DFD5] p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C7A52]">
                <HelpCircle className="w-4 h-4 text-[#8C7A52]" />
                <span>{ui.mythVsReality}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white border border-[#EADED2] space-y-1.5">
                  <span className="text-[11px] font-bold text-[#A63628] uppercase tracking-wider">
                    {ui.commonMyth}
                  </span>
                  <p className="text-[#4E5E56] leading-relaxed">
                    "{lessonContent.mythVsFact.myth}"
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D0E2D8] space-y-1.5">
                  <span className="text-[11px] font-bold text-[#206945] uppercase tracking-wider">
                    {ui.financialReality}
                  </span>
                  <p className="text-[#192620] font-medium leading-relaxed">
                    {lessonContent.mythVsFact.fact}
                  </p>
                </div>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="p-4 rounded-xl bg-[#153E2B]/5 border border-[#153E2B]/15 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#153E2B] uppercase tracking-wider block mb-0.5">
                  {ui.proTip}
                </span>
                <p className="text-xs sm:text-sm text-[#3E4E45] leading-relaxed">
                  {lessonContent.proTip}
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Multiple Choice Quiz (5 Questions per Quiz) */}
          <div ref={quizSectionRef} className="pt-8 border-t border-[#F2EFE8] space-y-6">
            
            {!hasSubmittedQuiz ? (
              /* ACTIVE QUIZ SCREEN */
              <div className="space-y-5">
                
                {/* Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#153E2B]" />
                    <h3 className="text-sm font-bold text-[#153E2B] uppercase tracking-wider">
                      {ui.knowledgeQuiz}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8C7A52] uppercase bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#E8E3D9]">
                    <span>
                      {ui.questionCounter.replace('{current}', String(currentQuestionIndex + 1)).replace('{total}', String(quizzes.length))}
                    </span>
                  </div>
                </div>

                {/* Progress Bar & Stepper Pager */}
                <div className="space-y-2.5">
                  <div className="w-full bg-[#EFECE5] h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#153E2B] h-full transition-all duration-300 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  {/* Stepper Buttons 1 to 5 */}
                  <div className="flex items-center justify-between gap-1.5 pt-1">
                    {quizzes.map((q, idx) => {
                      const isCurrent = idx === currentQuestionIndex;
                      const isAnswered = !!userAnswers[idx];

                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => handleJumpToQuestion(idx)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                            isCurrent
                              ? 'bg-[#153E2B] text-white shadow-xs ring-2 ring-[#C5A059]'
                              : isAnswered
                              ? 'bg-[#EBF7EE] text-[#12422A] border border-[#B7E2C4] hover:bg-[#D7EFE0]'
                              : 'bg-[#FAF8F5] text-[#718078] border border-[#DDD7CB] hover:border-[#153E2B]'
                          }`}
                          title={`Question ${idx + 1}`}
                        >
                          {isAnswered && !isCurrent ? (
                            <Check className="w-3.5 h-3.5 text-[#2A7550]" />
                          ) : (
                            <span>Q{idx + 1}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question Box */}
                <div className="bg-[#FAF8F5] p-5 sm:p-7 rounded-2xl border border-[#EAE5D9] space-y-5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#8C7A52] uppercase tracking-wider">
                      {ui.questionCounter.replace('{current}', String(currentQuestionIndex + 1)).replace('{total}', String(quizzes.length))}
                    </span>
                    <p className="text-base sm:text-lg font-semibold text-[#153E2B] leading-snug">
                      {getQuizQuestion(currentQuiz, lang)}
                    </p>
                  </div>

                  {/* 4 Multiple-Choice Options */}
                  <div className="space-y-3">
                    {currentQuiz.options.map((option, optIdx) => {
                      const isSelected = userAnswers[currentQuestionIndex] === option.id;
                      const optionLabel = String.fromCharCode(65 + optIdx); // A, B, C, D

                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => handleOptionSelect(option.id)}
                          className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 group ${
                            isSelected
                              ? 'bg-white border-[#153E2B] ring-2 ring-[#153E2B]/15 shadow-xs text-[#153E2B] font-semibold'
                              : 'bg-white border-[#E2DDD3] text-[#34423A] hover:border-[#153E2B] hover:bg-white/90'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#153E2B] text-white'
                                : 'bg-[#FAF8F5] text-[#5C6B63] border border-[#DDD7CB] group-hover:border-[#153E2B]'
                            }`}>
                              {optionLabel}
                            </span>
                            <span className="leading-relaxed">
                              {getQuizOption(option, lang)}
                            </span>
                          </div>

                          <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'border-[#153E2B] bg-[#153E2B] text-white'
                              : 'border-[#CCC6BA] bg-white group-hover:border-[#153E2B]'
                          }`}>
                            {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Warning banner if unanswered */}
                  {showUnansweredWarning && !userAnswers[currentQuestionIndex] && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FDF2F0] border border-[#F2C1B8] text-xs text-[#A63628] font-medium">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{ui.selectAnswerWarning}</span>
                    </div>
                  )}

                  {/* Navigation Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#EAE5D9] gap-3">
                    <button
                      type="button"
                      onClick={handlePrevQuestion}
                      disabled={currentQuestionIndex === 0}
                      className="px-4 py-2.5 rounded-xl border border-[#DDD7CB] hover:border-[#153E2B] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-[#3E4E45] transition-colors flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>{ui.prevQuestion}</span>
                    </button>

                    {currentQuestionIndex < quizzes.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNextQuestion}
                        className="px-5 py-2.5 rounded-xl bg-[#153E2B] hover:bg-[#0E2C1E] text-white text-xs font-semibold tracking-wide shadow-xs transition-colors flex items-center gap-1.5"
                      >
                        <span>{ui.nextQuestion}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmitQuiz}
                        className="px-6 py-2.5 rounded-xl bg-[#153E2B] hover:bg-[#0E2C1E] text-white text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-2 border border-[#C5A059]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                        <span>{ui.submitQuiz}</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            ) : (
              /* FINAL RESULTS SCREEN */
              <div className="bg-[#FAF8F5] rounded-2xl border border-[#E5DFD3] p-6 sm:p-8 space-y-6 shadow-xs">
                
                {/* Result Header & Score Metric */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#E8E3D9] pb-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/10 px-3 py-1 rounded-full border border-[#153E2B]/20">
                      <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{ui.quizResults}</span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#153E2B]">
                      {score === quizzes.length ? 'Mastery Achieved!' : score >= 3 ? 'Concept Passed!' : 'Learning in Progress'}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4E5E56] max-w-xl leading-relaxed">
                      {score === quizzes.length
                        ? ui.encouragingGreat
                        : score >= 3
                        ? ui.encouragingGood
                        : ui.encouragingNeedsWork}
                    </p>
                  </div>

                  {/* Score Card Metric */}
                  <div className="flex sm:flex-col items-center justify-center bg-white p-4 sm:p-5 rounded-2xl border border-[#DDD7CB] shadow-xs text-center shrink-0 min-w-[140px]">
                    <div className="text-[11px] font-bold text-[#8C7A52] uppercase tracking-wider mb-1">
                      {ui.scoreLabel}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-editorial text-4xl sm:text-5xl font-bold text-[#153E2B]">{score}</span>
                      <span className="text-lg font-semibold text-[#8C9C93]">/ {quizzes.length}</span>
                    </div>
                    <div className="mt-2 text-xs font-bold text-[#153E2B] bg-[#153E2B]/10 px-2.5 py-0.5 rounded-full">
                      {scorePercentage}% {ui.percentageLabel}
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    className="px-4 py-2.5 rounded-xl bg-[#153E2B] hover:bg-[#0E2C1E] text-white text-xs font-semibold tracking-wide shadow-xs transition-colors flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4 text-[#C5A059]" />
                    <span>{ui.tryAgain}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleBackToLesson}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#DDD7CB] text-[#153E2B] text-xs font-semibold transition-colors flex items-center gap-2"
                  >
                    <ArrowUp className="w-4 h-4 text-[#8C7A52]" />
                    <span>{ui.backToLesson}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('tutor')}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#DDD7CB] text-[#153E2B] text-xs font-semibold transition-colors flex items-center gap-2 sm:ml-auto"
                  >
                    <Bot className="w-4 h-4 text-[#153E2B]" />
                    <span>{ui.askTutor}</span>
                  </button>
                </div>

                {/* Detailed Review Section for all 5 questions */}
                <div className="space-y-4 pt-4 border-t border-[#E8E3D9]">
                  <h4 className="text-xs font-bold text-[#153E2B] uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <span>{ui.reviewTitle}</span>
                  </h4>

                  <div className="space-y-4">
                    {quizzes.map((quiz, qIdx) => {
                      const isCorrect = userAnswers[qIdx] === quiz.correctOptionId;
                      const userSelectedOpt = quiz.options.find(o => o.id === userAnswers[qIdx]);
                      const correctOpt = quiz.options.find(o => o.id === quiz.correctOptionId);

                      return (
                        <div 
                          key={quiz.id}
                          className={`p-4 sm:p-5 rounded-xl border text-xs sm:text-sm space-y-3 ${
                            isCorrect
                              ? 'bg-white border-[#B7E2C4]'
                              : 'bg-white border-[#F2C1B8]'
                          }`}
                        >
                          {/* Question Header & Badge */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-bold text-[#8C7A52] uppercase">
                              {ui.questionCounter.replace('{current}', String(qIdx + 1)).replace('{total}', String(quizzes.length))}
                            </span>
                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                              isCorrect
                                ? 'bg-[#EBF7EE] text-[#12422A] border border-[#B7E2C4]'
                                : 'bg-[#FDF2F0] text-[#7A2116] border border-[#F2C1B8]'
                            }`}>
                              {isCorrect ? (
                                <>
                                  <CheckCircle className="w-3.5 h-3.5 text-[#2A7550]" />
                                  <span>{ui.correctLabel}</span>
                                </>
                              ) : (
                                <>
                                  <AlertTriangle className="w-3.5 h-3.5 text-[#A63628]" />
                                  <span>{ui.incorrectLabel}</span>
                                </>
                              )}
                            </span>
                          </div>

                          {/* Question Text */}
                          <p className="font-semibold text-[#153E2B] text-sm leading-snug">
                            {getQuizQuestion(quiz, lang)}
                          </p>

                          {/* Answers breakdown */}
                          <div className="space-y-1.5 text-xs">
                            {/* User Selected Option */}
                            <div className={`p-2.5 rounded-lg flex items-start gap-2 ${
                              isCorrect
                                ? 'bg-[#EBF7EE]/60 text-[#12422A]'
                                : 'bg-[#FDF2F0]/60 text-[#7A2116]'
                            }`}>
                              <span className="font-bold shrink-0">
                                {lang === 'hi' ? 'आपका उत्तर:' : 'Your Answer:'}
                              </span>
                              <span>
                                {userSelectedOpt ? getQuizOption(userSelectedOpt, lang) : '—'}
                              </span>
                            </div>

                            {/* Correct Option if incorrect */}
                            {!isCorrect && correctOpt && (
                              <div className="p-2.5 rounded-lg bg-[#EBF7EE] text-[#12422A] flex items-start gap-2 border border-[#B7E2C4]">
                                <span className="font-bold shrink-0 flex items-center gap-1">
                                  <Check className="w-3.5 h-3.5 text-[#2A7550]" />
                                  <span>{lang === 'hi' ? 'सही उत्तर:' : 'Correct Answer:'}</span>
                                </span>
                                <span>
                                  {getQuizOption(correctOpt, lang)}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Beginner-friendly explanation */}
                          <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EAE5D9] text-xs text-[#3E4E45] leading-relaxed flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                            <p>{getQuizExplanation(quiz, lang)}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
