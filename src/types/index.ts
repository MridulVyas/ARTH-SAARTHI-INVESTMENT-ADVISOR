export type Language = 
  | 'en' // English
  | 'hi' // Hindi (हिंदी)
  | 'mr' // Marathi (मराठी)
  | 'ta' // Tamil (தமிழ்)
  | 'te' // Telugu (తెలుగు)
  | 'bn' // Bengali (বাংলা)
  | 'gu' // Gujarati (ગુજરાતી)
  | 'kn' // Kannada (ಕನ್ನಡ)
  | 'ml' // Malayalam (മലയാളം)
  | 'pa' // Punjabi (ਪੰਜਾਬੀ)
  | 'or' // Odia (ଓଡ଼ିଆ)
  | 'ur' // Urdu (اردو)
  | 'as'; // Assamese (অসমীয়া)

export interface LanguageMeta {
  code: Language;
  name: string;
  nativeName: string;
  script: string;
  dir?: 'ltr' | 'rtl';
}

export type Screen = 'home' | 'learn' | 'tutor' | 'claims';

export interface LessonQuizOption {
  id: string;
  textEn: string;
  textHi: string;
  translations?: Partial<Record<Language, string>>;
}

export interface LessonQuiz {
  id: string;
  questionEn: string;
  questionHi: string;
  options: LessonQuizOption[];
  correctOptionId: string;
  explanationEn: string;
  explanationHi: string;
  translations?: Partial<Record<Language, { question: string; explanation: string }>>;
}

export interface Lesson {
  id: string;
  titleEn: string;
  titleHi: string;
  duration: string;
  category: 'saving' | 'inflation' | 'stocks' | 'mutual_funds' | 'risk' | 'fraud';
  summaryEn: string;
  summaryHi: string;
  contentEn: {
    introduction: string;
    keyPoints: string[];
    mythVsFact: { myth: string; fact: string };
    proTip: string;
  };
  contentHi: {
    introduction: string;
    keyPoints: string[];
    mythVsFact: { myth: string; fact: string };
    proTip: string;
  };
  translations?: Partial<Record<Language, {
    title: string;
    summary: string;
    introduction: string;
    keyPoints: string[];
    mythVsFact: { myth: string; fact: string };
    proTip: string;
  }>>;
  quiz: LessonQuiz;
  quizzes?: LessonQuiz[];
}

export interface LearningModule {
  id: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  iconName: string;
  badgeEn: string;
  badgeHi: string;
  translations?: Partial<Record<Language, {
    title: string;
    subtitle: string;
    badge: string;
  }>>;
  lessons: Lesson[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  timestamp: string;
  category?: string;
  disclaimer?: string;
  followUps?: string[];
}

export interface ClaimVerificationResult {
  verdict: 'SCAM_ALERT' | 'HIGH_RISK' | 'CAUTION' | 'LEGITIMATE_BENCHMARK';
  score: number; // 0 - 100 risk score
  headlineEn: string;
  headlineHi: string;
  explanationEn: string;
  explanationHi: string;
  redFlagsEn: string[];
  redFlagsHi: string[];
  regulatoryNoteEn: string;
  regulatoryNoteHi: string;
  theMathEn: string;
  theMathHi: string;
  actionAdviceEn: string[];
  actionAdviceHi: string[];
  translations?: Partial<Record<Language, {
    headline: string;
    explanation: string;
    redFlags: string[];
    regulatoryNote: string;
    theMath: string;
    actionAdvice: string[];
  }>>;
}

export interface PresetClaim {
  id: string;
  titleEn: string;
  titleHi: string;
  sampleClaim: string;
  category: string;
  result: ClaimVerificationResult;
  translations?: Partial<Record<Language, {
    title: string;
    sampleClaim: string;
    category: string;
  }>>;
}
