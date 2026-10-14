import { Language, LanguageMeta } from '../types';

export const supportedLanguages: LanguageMeta[] = [
  { code: 'en', name: 'English', nativeName: 'English', script: 'Latin' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', script: 'Devanagari' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', script: 'Devanagari' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', script: 'Tamil' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', script: 'Telugu' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', script: 'Bengali' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', script: 'Gujarati' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', script: 'Kannada' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', script: 'Malayalam' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', script: 'Gurmukhi' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', script: 'Odia' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', script: 'Arabic', dir: 'rtl' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', script: 'Bengali-Assamese' },
];

export interface TranslationBundle {
  brandName: string;
  brandTagline: string;
  tutorName: string;
  tutorSubtitle: string;
  nav: {
    home: string;
    learn: string;
    tutor: string;
    claims: string;
    startLearning: string;
    askAi: string;
    selectLanguage: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustBadge1: string;
    trustBadge2: string;
    trustBadge3: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Label: string;
    stat3Desc: string;
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    tutorCard: {
      title: string;
      description: string;
      cta: string;
    };
    claimCard: {
      title: string;
      description: string;
      cta: string;
    };
    learnCard: {
      title: string;
      description: string;
      cta: string;
    };
  };
  topics: {
    sectionTitle: string;
    sectionSubtitle: string;
    saving: { title: string; desc: string };
    inflation: { title: string; desc: string };
    stocks: { title: string; desc: string };
    mutual_funds: { title: string; desc: string };
    risk: { title: string; desc: string };
    fraud: { title: string; desc: string };
    viewModule: string;
  };
  simulator: {
    title: string;
    subtitle: string;
    monthlyInvestment: string;
    investmentPeriod: string;
    expectedReturn: string;
    inflationRate: string;
    investedAmount: string;
    compoundedValue: string;
    cashValueErosion: string;
    insight: string;
    insightText: string;
  };
  resources: {
    sectionTitle: string;
    sectionSubtitle: string;
    sebiTitle: string;
    sebiDesc: string;
    rbiTitle: string;
    rbiDesc: string;
    amfiTitle: string;
    amfiDesc: string;
    bseNseTitle: string;
    bseNseDesc: string;
  };
  footer: {
    disclaimerTitle: string;
    disclaimerText: string;
    copyright: string;
    quickLinks: string;
    authorities: string;
    reportFrauds: string;
  };
}

export const translations: Record<Language, TranslationBundle> = {
  en: {
    brandName: "Arth Saarthi",
    brandTagline: "Investing made simple for Bharat",
    tutorName: "ArthMitra",
    tutorSubtitle: "Your friendly financial learning companion",
    nav: {
      home: "Home",
      learn: "Learn Hub",
      tutor: "ArthMitra",
      claims: "Claim Checker",
      startLearning: "Start Learning",
      askAi: "Ask ArthMitra",
      selectLanguage: "Choose Language",
    },
    hero: {
      kicker: "Free & Independent Investor Education for 1.4 Billion Citizens",
      title: "Investing made simple for Bharat.",
      subtitle: "Understand money. Question financial claims. Make informed decisions.",
      primaryCta: "Start Learning",
      secondaryCta: "Ask ArthMitra",
      trustBadge1: "Aligned with SEBI Investor Charter",
      trustBadge2: "Zero Product Sales · 100% Unbiased",
      trustBadge3: "Available in 13 Indian Languages",
      stat1Label: "Retail Investor Boom",
      stat1Desc: "Indian demat accounts at an all-time high, but true literacy lags behind hype.",
      stat2Label: "SEBI Retail Study",
      stat2Desc: "93% of individual derivative traders lose capital. We teach sustainable compounding.",
      stat3Label: "Monthly Discipline",
      stat3Desc: "Monthly retail SIP inflow steadily building long-term domestic ownership.",
    },
    features: {
      sectionTitle: "Three Pillars of Financial Independence",
      sectionSubtitle: "Simple, honest tools built to protect your hard-earned savings and grow long-term wealth.",
      tutorCard: {
        title: "ArthMitra — AI Finance Tutor",
        description: "Ask any financial question in plain language. From 'What is an SIP?' to 'How does inflation erode my savings?' — get clear, jargon-free explanations.",
        cta: "Chat with ArthMitra",
      },
      claimCard: {
        title: "Financial Claim Checker",
        description: "Before investing in a viral WhatsApp forward, YouTube stock tip, or Telegram trading group, run it through our fraud detection engine.",
        cta: "Verify a Claim",
      },
      learnCard: {
        title: "Curated Learning Hub",
        description: "Structured, beginner-friendly lessons with real Indian examples. Master savings, mutual funds, risk management, and test your knowledge with interactive quizzes.",
        cta: "Explore Lessons",
      },
    },
    topics: {
      sectionTitle: "Beginner Learning Topics",
      sectionSubtitle: "Master the 6 foundational concepts every Indian citizen needs before putting ₹1 into the market.",
      saving: {
        title: "Saving & Emergency Fund",
        desc: "Why keeping 6 months of expenses in a liquid fund or savings account is your first financial shield.",
      },
      inflation: {
        title: "Inflation & Purchasing Power",
        desc: "Why leaving money idle under the mattress or in a low-interest account actually makes you poorer every year.",
      },
      stocks: {
        title: "Stocks & Equity Ownership",
        desc: "Owning a share means owning a slice of a growing Indian business, not gambling on daily casino price swings.",
      },
      mutual_funds: {
        title: "Mutual Funds & SIPs",
        desc: "How pooling money with professional fund managers through disciplined monthly SIPs builds generational wealth.",
      },
      risk: {
        title: "Investment Risk & Asset Mix",
        desc: "The universal law of finance: higher potential returns always demand higher risk. Diversification is your defense.",
      },
      fraud: {
        title: "Fraud & Scam Awareness",
        desc: "Recognizing Ponzi schemes, unregistered Telegram tipsters, fake algorithmic bots, and dabba trading traps.",
      },
      viewModule: "View Module",
    },
    simulator: {
      title: "Interactive Wealth Reality Simulator",
      subtitle: "See what happens when you invest in compounding assets vs leaving cash in a standard savings account against 6% inflation.",
      monthlyInvestment: "Monthly Contribution",
      investmentPeriod: "Time Horizon (Years)",
      expectedReturn: "Expected Equity Return (e.g. Nifty 50 historical avg)",
      inflationRate: "Expected Inflation Rate",
      investedAmount: "Total Amount Invested by You",
      compoundedValue: "Estimated SIP Portfolio Value",
      cashValueErosion: "Purchasing Power if left in Cash (at 6% inflation)",
      insight: "Key Takeaway",
      insightText: "Compounding rewards patience, not timing. In 15-20 years, the gains generated by compounding dwarf your original principal contributions, whereas inflation halves cash purchasing power every 12 years (Rule of 72).",
    },
    resources: {
      sectionTitle: "Trusted Educational Resources",
      sectionSubtitle: "Always verify regulations with India's official statutory authorities and registered market bodies.",
      sebiTitle: "SEBI Investor Charter & SCORES",
      sebiDesc: "Official grievance redressal platform and rights guaranteed to Indian retail investors by SEBI.",
      rbiTitle: "RBI Kehta Hai (Reserve Bank of India)",
      rbiDesc: "Official public awareness initiative warning against unauthorized deposit schemes and fraudulent lending apps.",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "Comprehensive educational materials, NAV calculations, and investor awareness programs by mutual fund associations.",
      bseNseTitle: "NSE & BSE Investor Protection Funds",
      bseNseDesc: "Educational modules and investor protection safeguards created by premier Indian stock exchanges.",
    },
    footer: {
      disclaimerTitle: "Statutory Educational Disclaimer",
      disclaimerText: "Arth Saarthi is an independent, non-commercial investor education portal designed solely for informational and literacy purposes. We do not provide personalized financial advisory, stock recommendations, or portfolio management services. We are not registered as an Investment Adviser (RIA) or Research Analyst (RA) with SEBI. Securities markets involve market risks. Please read all scheme-related offer documents carefully and consult a qualified, SEBI-registered financial professional before making investment decisions.",
      copyright: "Arth Saarthi — Built for the financial empowerment of Bharat.",
      quickLinks: "Quick Navigation",
      authorities: "Official Regulatory Portals",
      reportFrauds: "Report Cyber Financial Frauds: Call 1930 (National Cyber Crime Portal)",
    },
  },

  hi: {
    brandName: "अर्थ सारथी",
    brandTagline: "भारत के लिए निवेश हुआ आसान",
    tutorName: "अर्थमित्र",
    tutorSubtitle: "आपका स्नेही वित्तीय शिक्षण साथी",
    nav: {
      home: "मुख्य पृष्ठ",
      learn: "लर्निंग हब",
      tutor: "अर्थमित्र",
      claims: "दावा चेकर",
      startLearning: "सीखना शुरू करें",
      askAi: "अर्थमित्र से पूछें",
      selectLanguage: "भाषा चुनें",
    },
    hero: {
      kicker: "140 करोड़ नागरिकों के लिए निःशुल्क और निष्पक्ष वित्तीय शिक्षा",
      title: "भारत के लिए निवेश हुआ आसान।",
      subtitle: "पैसे को समझें। वित्तीय दावों पर सवाल उठाएं। सही और सुरक्षित फैसले लें।",
      primaryCta: "सीखना शुरू करें",
      secondaryCta: "अर्थमित्र से पूछें",
      trustBadge1: "सेबी (SEBI) इन्वेस्टर चार्टर के अनुरूप",
      trustBadge2: "कोई प्रोडक्ट बेचना नहीं · 100% निष्पक्ष",
      trustBadge3: "13 भारतीय भाषाओं में उपलब्ध",
      stat1Label: "भारतीय खुदरा निवेशक",
      stat1Desc: "डीमैट खातों की संख्या रिकॉर्ड स्तर पर, पर वित्तीय शिक्षा की सबसे ज्यादा जरूरत है।",
      stat2Label: "F&O में नुकसान का सच",
      stat2Desc: "वायदा कारोबार में 93% खुदरा ट्रेडर्स ने पूंजी गंवाई। हम सुरक्षित कंपाउंडिंग सिखाते हैं।",
      stat3Label: "मासिक अनुशासन",
      stat3Desc: "हर महीने भारतीय परिवार सुरक्षित म्यूचुअल फंड में नियमित बचत जोड़ रहे हैं।",
    },
    features: {
      sectionTitle: "वित्तीय स्वतंत्रता के तीन मजबूत स्तंभ",
      sectionSubtitle: "आपकी गाढ़ी कमाई को ठगी से बचाने और सुरक्षित संपत्ति बनाने के लिए सरल व ईमानदार टूल्स।",
      tutorCard: {
        title: "अर्थमित्र — एआई फाइनेंस ट्यूटर",
        description: "सरल भाषा में कोई भी सवाल पूछें। 'SIP क्या है?' से लेकर 'महंगाई मेरी बचत कैसे घटाती है?' तक — हर बात का आसान और स्पष्ट जवाब।",
        cta: "अर्थमित्र से बात करें",
      },
      claimCard: {
        title: "वित्तीय दावा चेकर",
        description: "व्हाट्सएप मैसेज, यूट्यूब रील या टेलीग्राम चैनल के 'गारंटीड मुनाफे' के झांसे में आने से पहले, हमारे फ्रॉड चेकर से जांचें।",
        cta: "दावा परखें",
      },
      learnCard: {
        title: "सरल लर्निंग हब",
        description: "भारतीय उदाहरणों के साथ बनाए गए आसान पाठ। बचत, म्यूचुअल फंड, रिस्क मैनेजमेंट समझें और क्विज़ से अपनी समझ परखें।",
        cta: "पाठ देखें",
      },
    },
    topics: {
      sectionTitle: "शुरुआती निवेशकों के लिए बुनियादी विषय",
      sectionSubtitle: "बाजार में ₹1 भी लगाने से पहले हर भारतीय नागरिक को इन 6 बुनियादी बातों की समझ होनी चाहिए।",
      saving: {
        title: "बचत और इमरजेंसी फंड",
        desc: "कम से कम 6 महीने के खर्च को लिक्विड फंड या बचत खाते में रखना आपका पहला वित्तीय सुरक्षा कवच है।",
      },
      inflation: {
        title: "महंगाई और पैसे की असली ताकत",
        desc: "बैंक में या घर पर नकद पैसा पड़े रहने से उसकी खरीदने की क्षमता हर साल कैसे कम होती जाती है।",
      },
      stocks: {
        title: "शेयर बाजार और इक्विटी ओनरशिप",
        desc: "शेयर खरीदने का मतलब किसी बढ़ते भारतीय व्यवसाय में हिस्सेदारी है, कोई सट्टा या लॉटरी नहीं।",
      },
      mutual_funds: {
        title: "म्यूचुअल फंड और एसआईपी (SIP)",
        desc: "अनुभवी फंड मैनेजरों के जरिए हर महीने थोड़ी-थोड़ी रकम जोड़कर लंबी अवधि में बड़ी संपत्ति कैसे बनती है।",
      },
      risk: {
        title: "निवेश जोखिम और विविधीकरण",
        desc: "वित्त का बुनियादी नियम: जहां ज्यादा रिटर्न की उम्मीद है, वहां जोखिम भी अधिक होगा। सभी अंडे एक टोकरी में न रखें।",
      },
      fraud: {
        title: "धोखाधड़ी और फर्जी स्कीमों से बचाव",
        desc: "पोंजी स्कीम, अनरजिस्टर्ड टेलीग्राम टिप्स, नकली ट्रेडिंग बॉट्स और डब्बा ट्रेडिंग के जाल से कैसे बचें।",
      },
      viewModule: "मॉड्यूल खोलें",
    },
    simulator: {
      title: "चक्रवृद्धि (Compounding) और महंगाई का सच",
      subtitle: "देखें कि हर महीने नियमित निवेश करने और सिर्फ नकद पैसे रखने में 6% महंगाई के असर से क्या फर्क पड़ता है।",
      monthlyInvestment: "मासिक निवेश (रुपये)",
      investmentPeriod: "समय अवधि (वर्ष)",
      expectedReturn: "अपेक्षित इक्विटी रिटर्न (निफ्टी 50 का औसत)",
      inflationRate: "अपेक्षित महंगाई दर",
      investedAmount: "आपके द्वारा जमा की गई कुल राशि",
      compoundedValue: "एसआईपी से बनने वाला अनुमानित फंड",
      cashValueErosion: "6% महंगाई के बाद नकद पैसे की असल क्रय शक्ति",
      insight: "मुख्य सीख",
      insightText: "कंपाउंडिंग में समय सबसे बड़ा जादूगर है। 15-20 साल में आपका मुनाफा मूल राशि से कई गुना बड़ा हो जाता है, जबकि महंगाई हर 12 साल में नकद पैसे की ताकत आधी कर देती है।",
    },
    resources: {
      sectionTitle: "विश्वसनीय और आधिकारिक स्रोत",
      sectionSubtitle: "किसी भी वित्तीय नियम या कंपनी की सत्यता हमेशा भारत की अधिकृत संस्थाओं से जांचें।",
      sebiTitle: "सेबी इन्वेस्टर चार्टर एवं SCORES",
      sebiDesc: "भारतीय निवेशकों के अधिकार और धोखाधड़ी की शिकायत दर्ज करने का आधिकारिक सेबी पोर्टल।",
      rbiTitle: "आरबीआई कहता है (RBI Kehta Hai)",
      rbiDesc: "फर्जी लोन ऐप और गैरकानूनी जमा योजनाओं के खिलाफ भारतीय रिज़र्व बैंक का आधिकारिक जागरूकता अभियान।",
      amfiTitle: "एम्फी (म्यूचुअल फंड्स सही है)",
      amfiDesc: "म्यूचुअल फंड कंपनियों के संघ द्वारा संचालित विश्वसनीय निवेशक शिक्षा और जागरूकता।",
      bseNseTitle: "एनएसई और बीएसई इन्वेस्टर प्रोटेक्शन फंड",
      bseNseDesc: "भारत के प्रमुख स्टॉक एक्सचेंजों द्वारा संचालित निवेशक सुरक्षा और प्रशिक्षण कार्यक्रम।",
    },
    footer: {
      disclaimerTitle: "वैधानिक शैक्षणिक डिस्क्लेमर",
      disclaimerText: "अर्थ सारथी केवल वित्तीय साक्षरता और शैक्षणिक जागरूकता के उद्देश्य से बनाया गया है। हम कोई स्टॉक टिप, निवेश सलाह या पोर्टफोलियो मैनेजमेंट सेवाएं प्रदान नहीं करते हैं। हम सेबी (SEBI) के पास रजिस्टर्ड इन्वेस्टमेंट एडवाइजर नहीं हैं। वित्तीय बाजार में निवेश जोखिमों के अधीन है। निवेश करने से पहले सभी दस्तावेजों को ध्यान से पढ़ें और किसी सेबी-रजिस्टर्ड पेशेवर से सलाह लें।",
      copyright: "अर्थ सारथी — भारत के नागरिकों के वित्तीय सशक्तिकरण हेतु समर्पित।",
      quickLinks: "त्वरित नेविगेशन",
      authorities: "आधिकारिक नियामक संस्थाएं",
      reportFrauds: "साइबर वित्तीय धोखाधड़ी की शिकायत: 1930 पर कॉल करें (नेशनल साइबर क्राइम पोर्टल)",
    },
  },

  mr: {
    brandName: "अर्थ सारथी",
    brandTagline: "भारतासाठी सोपी आणि सुरक्षित गुंतवणूक",
    tutorName: "अर्थमित्र",
    tutorSubtitle: "तुमचा विश्वासू आर्थिक मार्गदर्शक मित्र",
    nav: {
      home: "मुख्यपृष्ठ",
      learn: "लर्निंग हब",
      tutor: "अर्थमित्र",
      claims: "दावा चेकर",
      startLearning: "शिकणे सुरू करा",
      askAi: "अर्थमित्राला विचारा",
      selectLanguage: "भाषा निवडा",
    },
    hero: {
      kicker: "140 कोटी नागरिकांसाठी विनामूल्य व निष्पक्ष आर्थिक शिक्षण",
      title: "भारतासाठी गुंतवणूक आता झाली सोपी.",
      subtitle: "पैसा समजून घ्या. खोट्या दाव्यांवर प्रश्न विचारा. विचारपूर्वक योग्य निर्णय घ्या.",
      primaryCta: "शिकणे सुरू करा",
      secondaryCta: "अर्थमित्राला विचारा",
      trustBadge1: "सेबी (SEBI) गुंतवणूकदार चार्टरच्या नियमांनुसार",
      trustBadge2: "कोणतेही प्रॉडक्ट विक्री नाही · 100% निःपक्षपाती",
      trustBadge3: "13 भारतीय भाषांमध्ये उपलब्ध",
      stat1Label: "भारतीय किरकोळ गुंतवणूकदार",
      stat1Desc: "डिमॅट खात्यांची संख्या विक्रमी पातळीवर, पण खरी गरज योग्य शिक्षणाची आहे.",
      stat2Label: "सेबी अहवाल",
      stat2Desc: "एफ अँड ओ (F&O) मध्ये 93% लोकांनी पैसे गमावले. आम्ही शाश्वत संपत्तीनिर्मिती शिकवतो.",
      stat3Label: "मासिक शिस्त",
      stat3Desc: "दरमहा भारतीय कुटुंबे शिस्तबद्ध एसआयपीद्वारे संपत्ती वाढवत आहेत.",
    },
    features: {
      sectionTitle: "आर्थिक स्वातंत्र्याचे तीन महत्त्वाचे आधारस्तंभ",
      sectionSubtitle: "तुमची कष्टाची कमाई फसवणुकीपासून वाचवण्यासाठी आणि दीर्घकालीन संपत्ती घडवण्यासाठी सोपी साधने.",
      tutorCard: {
        title: "अर्थमित्र — एआय फायनान्स ट्यूटर",
        description: "मराठीत किंवा सोप्या भाषेत कोणताही प्रश्न विचारा. 'SIP म्हणजे काय?' पासून 'महागाई बचत कशी कमी करते?' पर्यंत स्पष्ट उत्तरे मिळवा.",
        cta: "अर्थमित्राशी बोला",
      },
      claimCard: {
        title: "आर्थिक दावा चेकर",
        description: "व्हॉट्सॲप, युट्यूब किंवा टेलिग्रामवर मिळणाऱ्या हमखास नफ्याच्या खोट्या दाव्यांची आमच्या फॉरेन्सिक इंजिनद्वारे खात्री करा.",
        cta: "दावा तपासा",
      },
      learnCard: {
        title: "अभ्यासपूर्ण लर्निंग हब",
        description: "भारतीय उदाहरणांसह तयार केलेले सोपे धडे. बचत, म्युच्युअल फंड, जोखीम व्यवस्थापन शिका आणि प्रश्नमंजूषेद्वारे ज्ञान तपासा.",
        cta: "धडे पहा",
      },
    },
    topics: {
      sectionTitle: "नवीन गुंतवणूकदारांसाठी मूलभूत विषय",
      sectionSubtitle: "बाजारात ₹1 गुंतवण्यापूर्वी प्रत्येक भारतीय नागरिकाला या 6 मूलभूत गोष्टी समजणे आवश्यक आहे.",
      saving: {
        title: "बचत आणि आपत्कालीन निधी",
        desc: "किमान 6 महिन्यांचा घरखर्च लिक्विड फंड किंवा बचत खात्यात ठेवणे ही तुमची पहिली आर्थिक ढाल आहे.",
      },
      inflation: {
        title: "महागाई आणि पैशांची खरेदी क्षमता",
        desc: "कपाटात किंवा कमी व्याजाच्या खात्यात पडून राहिलेला पैसा दरवर्षी महागाईमुळे कसा कमी होत जातो.",
      },
      stocks: {
        title: "शेअर बाजार आणि कंपनी मालकी",
        desc: "शेअर खरेदी करणे म्हणजे वाढत्या भारतीय व्यवसायात भागीदारी मिळवणे, कोणताही जुगार किंवा लॉटरी नाही.",
      },
      mutual_funds: {
        title: "म्यूच्युअल फंड आणि एसआयपी (SIP)",
        desc: "दरमहा ठराविक रक्कम अनुभवी फंड मॅनेजर्सद्वारे चांगल्या कंपन्यांमध्ये गुंतवून संपत्ती कशी तयार होते.",
      },
      risk: {
        title: "गुंतवणूक जोखीम आणि विविधता",
        desc: "वित्ताचा मूलभूत नियम: जास्त परताव्याची अपेक्षा तिथे जास्त जोखीम. सर्व अंडी एकाच टोपलीत ठेवू नका.",
      },
      fraud: {
        title: "फसवणूक आणि घोटाळ्यांविषयी जागरूकता",
        desc: "पोंझी स्कीम्स, अनधिकृत टेलिग्राम टिप्स, बनावट ट्रेडिंग बॉट्स आणि डब्बा ट्रेडिंगपासून सावध राहा.",
      },
      viewModule: "मॉड्यूल उघडा",
    },
    simulator: {
      title: "चक्रवाढ व्याज (Compounding) आणि महागाईचे वास्तव",
      subtitle: "दरमहा नियमित एसआयपी आणि फक्त रोख रक्कम ठेवणे यात 6% महागाईमुळे होणारा फरक स्वतः पाहा.",
      monthlyInvestment: "मासिक गुंतवणूक (रुपये)",
      investmentPeriod: "कालावधी (वर्षे)",
      expectedReturn: "अपेक्षित इक्विटी परतावा (निफ्टी 50 सरासरी)",
      inflationRate: "अपेक्षित महागाई दर",
      investedAmount: "तुम्ही जमा केलेली एकूण रक्कम",
      compoundedValue: "एसआयपीतून तयार होणारा अंदाजे निधी",
      cashValueErosion: "6% महागाईनंतर रोख पैशांची प्रत्यक्ष खरेदी क्षमता",
      insight: "महत्त्वाची शिकवण",
      insightText: "चक्रवाढ व्याजात वेळेला सर्वाधिक महत्त्व आहे. 15-20 वर्षांत तुमचा नफा मूळ रकमेपेक्षा कित्येक पटीने मोठा होतो, तर महागाई दर 12 वर्षांत रोख पैशांचे मूल्य निम्मे करते (72 चा नियम).",
    },
    resources: {
      sectionTitle: "अधिकृत आणि विश्वासार्ह स्रोत",
      sectionSubtitle: "कोणत्याही वित्तीय नियमांची आणि मध्यस्थांची खात्री अधिकृत सरकारी संस्थांकडूनच करून घ्या.",
      sebiTitle: "सेबी इन्व्हेस्टर चार्टर आणि SCORES",
      sebiDesc: "गुंतवणूकदारांचे अधिकार आणि फसवणुकीची ऑनलाइन तक्रार नोंदवण्याचे अधिकृत सेबी पोर्टल.",
      rbiTitle: "आरबीआय सांगते (RBI Kehta Hai)",
      rbiDesc: "बनावट कर्ज ॲप्स आणि बेकायदेशीर ठेव योजनांविरुद्ध भारतीय रिझर्व्ह बँकेची जनजागृती मोहीम.",
      amfiTitle: "ॲम्फी (Mutual Funds Sahi Hai)",
      amfiDesc: "म्यूच्युअल फंड कंपन्यांच्या संघटनेतर्फे चालवली जाणारी अधिकृत गुंतवणूकदार शिक्षण मोहीम.",
      bseNseTitle: "एनएसई आणि बीएसई गुंतवणूकदार संरक्षण निधी",
      bseNseDesc: "भारतातील प्रमुख स्टॉक एक्स्चेंजद्वारे चालवले जाणारे सुरक्षा आणि प्रशिक्षण उपक्रम.",
    },
    footer: {
      disclaimerTitle: "वैधानिक शैक्षणिक अस्वीकरण (Disclaimer)",
      disclaimerText: "अर्थ सारथी हे केवळ वित्तीय साक्षरता आणि शैक्षणिक मार्गदर्शनासाठी तयार केलेले व्यासपीठ आहे. आम्ही कोणतीही स्टॉक टिप किंवा वैयक्तिक गुंतवणूक सल्ला देत नाही. आम्ही सेबी नोंदणीकृत सल्लागार नाही. बाजारातील गुंतवणूक जोखमीच्या अधीन आहे. गुंतवणूक करण्यापूर्वी सर्व अधिकृत कागदपत्रे काळजीपूर्वक वाचा.",
      copyright: "अर्थ सारथी — भारतातील नागरिकांच्या आर्थिक सक्षमीकरणासाठी समर्पित.",
      quickLinks: "द्रुत नेव्हिगेशन",
      authorities: "अधिकृत नियामक संस्था",
      reportFrauds: "सायबर फसवणुकीची तक्रार: 1930 वर कॉल करा (राष्ट्रीय सायबर गुन्हे पोर्टल)",
    },
  },

  ta: {
    brandName: "அர்த்த சாரதி",
    brandTagline: "பாரதத்திற்கான எளிய முதலீட்டுக் கல்வி",
    tutorName: "அர்த்தமித்ரா",
    tutorSubtitle: "உங்கள் அன்பான நிதி வழிகாட்டி நண்பர்",
    nav: {
      home: "முகப்பு",
      learn: "கற்றல் மையம்",
      tutor: "அர்த்தமித்ரா",
      claims: "மோசடி சரிபார்ப்பு",
      startLearning: "கற்க தொடங்குங்கள்",
      askAi: "அர்த்தமித்ராவிடம் கேளுங்கள்",
      selectLanguage: "மொழியைத் தேர்வுசெய்க",
    },
    hero: {
      kicker: "140 கோடி இந்திய மக்களுக்கான இலவச நிதி விழிப்புணர்வு",
      title: "பாரதத்திற்கு முதலீடு இப்போது எளிது.",
      subtitle: "பணத்தை புரிந்து கொள்ளுங்கள். சந்தேகமான வாக்குறுதிகளை கேள்வி கேளுங்கள். சிறந்த முடிவுகளை எடுங்கள்.",
      primaryCta: "கற்க தொடங்குங்கள்",
      secondaryCta: "அர்த்தமித்ராவிடம் கேளுங்கள்",
      trustBadge1: "SEBI முதலீட்டாளர் சாசனத்தின் வழிகாட்டுதல்",
      trustBadge2: "தயாரிப்பு விற்பனை இல்லை · 100% நேர்மை",
      trustBadge3: "13 இந்திய மொழிகளில் கிடைக்கிறது",
      stat1Label: "இந்திய சில்லறை முதலீட்டாளர்கள்",
      stat1Desc: "டீமேட் கணக்குகள் அதிகரித்துள்ளன, ஆனால் உண்மையான விழிப்புணர்வே மிக அவசியம்.",
      stat2Label: "SEBI அதிகாரப்பூர்வ அறிக்கை",
      stat2Desc: "F&O வர்த்தகத்தில் 93% மக்கள் நஷ்டமடைகிறார்கள். நாங்கள் நிலையான சேமிப்பை கற்பிக்கிறோம்.",
      stat3Label: "மாதாந்திர ஒழுக்கம்",
      stat3Desc: "ஒவ்வொரு மாதமும் இந்திய குடும்பங்கள் SIP மூலம் செல்வத்தை வளர்க்கின்றன.",
    },
    features: {
      sectionTitle: "நிதி சுதந்திரத்திற்கான 3 முக்கிய தூண்கள்",
      sectionSubtitle: "உங்கள் உழைப்பின் வருவாயை மோசடிகளிலிருந்து பாதுகாத்து நீண்டகால செல்வம் சேர்க்க உதவும் கருவிகள்.",
      tutorCard: {
        title: "அர்த்தமித்ரா — AI நிதி ஆசிரியர்",
        description: "எளிய தமிழில் உங்கள் கேள்விகளை கேளுங்கள். 'SIP என்றால் என்ன?' முதல் பணவீக்கம் வரை தெளிவான பதில்கள்.",
        cta: "அர்த்தமித்ராவிடம் பேசுங்கள்",
      },
      claimCard: {
        title: "நிதி மோசடி சரிபார்ப்பு",
        description: "வாட்ஸ்அப், டெலிகிராம் அல்லது யூடியூப் வழியே வரும் 'உறுதி அளிக்கப்பட்ட லாபம்' குறித்த தகவல்களை உடனே சரிபார்க்கவும்.",
        cta: "சரிபார்க்கவும்",
      },
      learnCard: {
        title: "கற்றல் மையம்",
        description: "எளிய பாடங்கள் மற்றும் வினாடி வினாக்கள் மூலம் சேமிப்பு, மியூச்சுவல் ஃபண்டுகள் மற்றும் இடர் மேலாண்மையை கற்கவும்.",
        cta: "பாடங்களைப் பார்க்கவும்",
      },
    },
    topics: {
      sectionTitle: "தொடக்க முதலீட்டாளர்களுக்கான பாடங்கள்",
      sectionSubtitle: "சந்தையில் ₹1 முதலீடு செய்யும் முன்பும் தெரிந்து கொள்ள வேண்டிய 6 அடிப்படைக் கருத்துக்கள்.",
      saving: {
        title: "சேமிப்பு & அவசர கால நிதி",
        desc: "குறைந்தது 6 மாத செலவுக்கான நிதியை லிக்விட் ஃபண்ட் அல்லது வங்கிக் கணக்கில் வைத்திருப்பதே உங்கள் முதல் கவசம்.",
      },
      inflation: {
        title: "பணவீக்கம் & வாங்கும் திறன்",
        desc: "பணத்தை சும்மா வைத்திருந்தால் அதன் வாங்கும் சக்தி எவ்வாறு ஆண்டுதோறும் குறைகிறது என்பதை அறியுங்கள்.",
      },
      stocks: {
        title: "பங்குச் சந்தை & நிறுவன உரிமை",
        desc: "பங்கு வாங்குவது என்பது வளரும் இந்திய தொழிலில் ஒரு பகுதியைப் பெறுவதாகும், சூதாட்டம் அல்ல.",
      },
      mutual_funds: {
        title: "மியூச்சுவல் ஃபண்டுகள் & SIP",
        desc: "மாதாந்திர ஒழுங்குமுறை முதலீடுகள் (SIP) மூலம் நிபுணர்களின் வழிகாட்டுதலில் செல்வம் பெருக்குவது எப்படி.",
      },
      risk: {
        title: "இடர் & சொத்து ஒதுக்கீடு",
        desc: "அதிக லாபத்திற்கு அதிக இடர் உண்டு. அனைத்து முதலீடுகளையும் ஒரே இடத்தில் வைக்காதீர்கள்.",
      },
      fraud: {
        title: "மோசடி விழிப்புணர்வு",
        desc: "போன்சி திட்டங்கள், போலி டெலிகிராம் டிப்ஸ்கள் மற்றும் உரிமமில்லாத செயலிகளை எளிதாகக் கண்டறியுங்கள்.",
      },
      viewModule: "பாடத்தைத் திறக்கவும்",
    },
    simulator: {
      title: "கூட்டு வட்டி (Compounding) & பணவீக்க கணக்கீடு",
      subtitle: "மாதாந்திர SIP செய்வதற்கும், வெறும் ரொக்கத்தை வைத்திருப்பதற்கும் உள்ள மிகப்பெரிய வித்தியாசத்தைக் காணுங்கள்.",
      monthlyInvestment: "மாதாந்திர முதலீடு (ரூபாய்)",
      investmentPeriod: "கால அளவு (ஆண்டுகள்)",
      expectedReturn: "எதிர்பார்க்கப்படும் வருவாய் (நிஃப்டி 50 சராசரி)",
      inflationRate: "பணவீக்க விகிதம்",
      investedAmount: "நீங்கள் செலுத்திய மொத்தத் தொகை",
      compoundedValue: "SIP மூலம் கிடைக்கும் மதிப்பீடு",
      cashValueErosion: "பணவீக்கத்திற்குப் பின் ரொக்கத்தின் உண்மை மதிப்பு",
      insight: "முக்கிய பாடம்",
      insightText: "கூட்டு வட்டியில் பொறுமையே மிக முக்கியம். 15-20 ஆண்டுகளில் உங்கள் லாபம் நீங்கள் செலுத்திய அசல் தொகையை விட பன்மடங்கு பெருகும் (72-ன் விதி).",
    },
    resources: {
      sectionTitle: "அங்கீகரிக்கப்பட்ட அதிகாரப்பூர்வ அமைப்புகள்",
      sectionSubtitle: "எந்தவொரு நிதி விதியையும் இந்தியாவின் அதிகாரப்பூர்வ அமைப்புகள் மூலம் மட்டுமே சரிபார்க்கவும்.",
      sebiTitle: "SEBI முதலீட்டாளர் சாசனம் & SCORES",
      sebiDesc: "முதலீட்டாளர் உரிமைகள் மற்றும் ஆன்லைன் புகார் பதிவுக்கான SEBI தளம்.",
      rbiTitle: "ஆர்பிஐ கூறுகிறது (RBI Kehta Hai)",
      rbiDesc: "போலி கடன் செயலிகள் மற்றும் சட்டவிரோத முதலீட்டு திட்டங்களுக்கு எதிரான விழிப்புணர்வு.",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "இந்திய மியூச்சுவல் ஃபண்ட் சங்கத்தின் அதிகாரப்பூர்வ கல்வி முயற்சிகள்.",
      bseNseTitle: "NSE & BSE முதலீட்டாளர் பாதுகாப்பு நிதி",
      bseNseDesc: "பங்குச் சந்தைகள் வழங்கும் முதலீட்டாளர் பாதுகாப்பு மற்றும் பயிற்சி.",
    },
    footer: {
      disclaimerTitle: "சட்டப்பூர்வ கல்வி மறுப்புரை",
      disclaimerText: "அர்த்த சாரதி என்பது நிதி விழிப்புணர்வுக்கான ஒரு கல்வி தளம் மட்டுமே. நாங்கள் எந்தவிதமான பங்குப் பரிந்துரைகளையோ தனிப்பட்ட நிதி ஆலோசனைகளையோ வழங்குவதில்லை. சந்தை முதலீடுகள் இடர்களுக்கு உட்பட்டவை.",
      copyright: "அர்த்த சாரதி — இந்திய குடிமக்களின் நிதி அதிகாரமளித்தலுக்காக உருவாக்கப்பட்டது.",
      quickLinks: "விரைவு இணைப்புகள்",
      authorities: "ஒழுங்குமுறை போர்ட்டல்கள்",
      reportFrauds: "நிதி மோசடி புகார் எண்: 1930 (தேசிய சைபர் குற்றப்பிரிவு)",
    },
  },

  te: {
    brandName: "అర్థ సారథి",
    brandTagline: "భారతదేశం కోసం సులభమైన పెట్టుబడి విద్య",
    tutorName: "అర్థమిత్ర",
    tutorSubtitle: "మీ ఆత్మీయ ఆర్థిక విద్యా మార్గదర్శి",
    nav: {
      home: "హోమ్",
      learn: "లెర్నింగ్ హబ్",
      tutor: "అర్థమిత్ర",
      claims: "మోసాల గుర్తింపు",
      startLearning: "నేర్చుకోవడం ప్రారంభించండి",
      askAi: "అర్థమిత్రను అడగండి",
      selectLanguage: "భాషను ఎంచుకోండి",
    },
    hero: {
      kicker: "140 కోట్ల మంది భారతీయ పౌరుల కోసం ఉచిత ఆర్థిక విద్య",
      title: "భారతదేశం కోసం పెట్టుబడులు ఇకపై సులభం.",
      subtitle: "డబ్బును అర్థం చేసుకోండి. తప్పుడు వాగ్దానాలను ప్రశ్నించండి. సరైన నిర్ణయాలు తీసుకోండి.",
      primaryCta: "నేర్చుకోవడం ప్రారంభించండి",
      secondaryCta: "అర్థమిత్రను అడగండి",
      trustBadge1: "SEBI ఇన్వెస్టర్ చార్టర్ మార్గదర్శకాల ప్రకారం",
      trustBadge2: "ఉత్పత్తుల అమ్మకాలు లేవు · 100% నిష్పాక్షికం",
      trustBadge3: "13 భారతీయ భాషలలో అందుబాటులో ఉంది",
      stat1Label: "భారతీయ రిటైల్ ఇన్వెస్టర్లు",
      stat1Desc: "డీమ్యాట్ ఖాతాలు రికార్డు స్థాయికి చేరాయి, కానీ సరైన అవగాహన చాలా ముఖ్యం.",
      stat2Label: "SEBI అధికారిక నివేదిక",
      stat2Desc: "F&O ట్రేడింగ్‌లో 93% మంది నష్టపోతున్నారు. మేము సురక్షిత సంపద సృష్టిని నేర్పుతాము.",
      stat3Label: "నెలవారీ క్రమశిక్షణ",
      stat3Desc: "ప్రతి నెలా భారతీయ కుటుంబాలు క్రమశిక్షణతో కూడిన SIPల ద్వారా సంపదను పెంచుకుంటున్నాయి.",
    },
    features: {
      sectionTitle: "ఆర్థిక స్వాతంత్ర్యానికి 3 బలమైన స్తంభాలు",
      sectionSubtitle: "మీ కష్టార్జితాన్ని మోసాల నుండి కాపాడి, దీర్ఘకాలిక సంపదను నిర్మించే నమ్మకమైన సాధనాలు.",
      tutorCard: {
        title: "అర్థమిత్ర — AI ఫైనాన్స్ ట్యూటర్",
        description: "సరళమైన తెలుగులో ఏదైనా ఆర్థిక సందేహం అడగండి. 'SIP అంటే ఏమిటి?' నుండి ద్రవ్యోల్బణం ప్రభావం వరకు స్పష్టమైన వివరణలు.",
        cta: "అర్థమిత్రతో మాట్లాడండి",
      },
      claimCard: {
        title: "ఆర్థిక క్లెయిమ్ చెకర్",
        description: "వాట్సాప్, టెలిగ్రామ్ లేదా యూట్యూబ్‌లో వచ్చే 'గ్యారెంటీడ్ రిటర్న్స్' మోసాలను మా ఫోరెన్సిక్ ఇంజిన్ ద్వారా తనిఖీ చేయండి.",
        cta: "క్లెయిమ్ తనిఖీ చేయండి",
      },
      learnCard: {
        title: "లెర్నింగ్ హబ్",
        description: "పొదుపు, మ్యూచువల్ ఫండ్స్, రిస్క్ మేనేజ్‌మెంట్ గురించి సులభమైన పాఠాలు మరియు క్విజ్‌ల ద్వారా నేర్చుకోండి.",
        cta: "పాఠాలను చూడండి",
      },
    },
    topics: {
      sectionTitle: "ప్రారంభ ఇన్వెస్టర్ల కోసం ప్రాథమిక అంశాలు",
      sectionSubtitle: "మార్కెట్లో ₹1 పెట్టే ముందే ప్రతి పౌరుడు తెలుసుకోవలసిన 6 ముఖ్యమైన సూత్రాలు.",
      saving: {
        title: "పొదుపు & అత్యవసర నిధి",
        desc: "కనీసం 6 నెలల ఖర్చులను లిక్విడ్ ఫండ్ లేదా పొదుపు ఖాతాలో ఉంచడమే మీ మొదటి ఆర్థిక రక్షణ.",
      },
      inflation: {
        title: "ద్రవ్యోల్బణం & కొనుగోలు శక్తి",
        desc: "డబ్బును ఖాళీగా ఉంచితే ద్రవ్యోల్బణం వల్ల దాని విలువ ప్రతి సంవత్సరం ఎలా తగ్గిపోతుందో తెలుసుకోండి.",
      },
      stocks: {
        title: "స్టాక్ మార్కెట్ & కంపెనీ యాజమాన్యం",
        desc: "షేర్లు కొనడం అంటే పెరుగుతున్న భారతీయ వ్యాపారంలో భాగస్వామి కావడం, జూదం కాదు.",
      },
      mutual_funds: {
        title: "మ్యూచువల్ ఫండ్స్ & SIP",
        desc: "క్రమశిక్షణతో కూడిన నెలవారీ SIP ద్వారా దీర్ఘకాలంలో పెద్ద సంపదను ఎలా నిర్మించవచ్చో చూడండి.",
      },
      risk: {
        title: "రిస్క్ & ఆస్తి కేటాయింపు",
        desc: "ఎక్కువ రాబడి ఉన్నచోట ఎక్కువ రిస్క్ ఉంటుంది. మీ పెట్టుబడులన్నింటినీ ఒకే చోట పెట్టకండి.",
      },
      fraud: {
        title: "మోసాలపై అవగాహన",
        desc: "పోంజీ స్కీమ్‌లు, అనధికార టెలిగ్రామ్ టిప్స్ మరియు నకిలీ ట్రేడింగ్ యాప్‌ల బారిన పడకుండా ఉండండి.",
      },
      viewModule: "మాడ్యూల్ తెరవండి",
    },
    simulator: {
      title: "చక్రవడ్డీ (Compounding) & ద్రవ్యోల్బణ వాస్తవికత",
      subtitle: "నెలవారీ క్రమశిక్షణతో కూడిన SIP పెట్టుబడి మరియు నగదును అలాగే ఉంచడం మధ్య వ్యత్యాసాన్ని చూడండి.",
      monthlyInvestment: "నెలవారీ పెట్టుబడి (రూపాయలు)",
      investmentPeriod: "సమయం (సంవత్సరాలు)",
      expectedReturn: "ఆశించిన ఈక్విటీ రాబడి (నిఫ్టీ 50 సగటు)",
      inflationRate: "ద్రవ్యోల్బణ రేటు",
      investedAmount: "మీరు జమ చేసిన మొత్తం",
      compoundedValue: "SIP ద్వారా వచ్చే అంచనా సంపద",
      cashValueErosion: "ద్రవ్యోల్బణం తర్వాత నగదు కొనుగోలు శక్తి",
      insight: "ముఖ్యమైన పాఠం",
      insightText: "చక్రవడ్డీలో సమయమే అత్యుత్తమ సంపద సృష్టికర్త. 15-20 ఏళ్లలో మీ లాభాలు మీ అసలు కంటే ఎన్నో రెట్లు పెరుగుతాయి (72 సూత్రం).",
    },
    resources: {
      sectionTitle: "అధికారిక మరియు విశ్వసనీయ వనరులు",
      sectionSubtitle: "ఎల్లప్పుడూ భారతదేశ అధికారిక సంస్థల ద్వారా మాత్రమే నియమాలను ధృవీకరించుకోండి.",
      sebiTitle: "SEBI ఇన్వెస్టర్ చార్టర్ & SCORES",
      sebiDesc: "ఇన్వెస్టర్ల హక్కులు మరియు మోసాలపై ఆన్‌లైన్ ఫిర్యాదు చేయడానికి అధికారిక పోర్టల్.",
      rbiTitle: "ఆర్బీఐ చెబుతోంది (RBI Kehta Hai)",
      rbiDesc: "నకిలీ లోన్ యాప్‌లు మరియు మోసపూరిత డిపాజిట్ స్కీమ్‌లపై రిజర్వ్ బ్యాంక్ అవగాహన.",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "మ్యూచువల్ ఫండ్ అసోసియేషన్ నడిపే అధికారిక ఇన్వెస్టర్ విద్యా కార్యక్రమం.",
      bseNseTitle: "NSE & BSE ఇన్వెస్టర్ ప్రొటెక్షన్ ఫండ్స్",
      bseNseDesc: "ప్రధాన స్టాక్ ఎక్స్ఛేంజ్‌లు అందించే ఇన్వెస్టర్ రక్షణ మరియు శిక్షణ.",
    },
    footer: {
      disclaimerTitle: "చట్టబద్ధమైన విద్యా ప్రకటన (Disclaimer)",
      disclaimerText: "అర్థ సారథి అనేది ఆర్థిక అక్షరాస్యత కోసం మాత్రమే రూపొందించబడిన స్వతంత్ర విద్యా వేదిక. మేము ఎలాంటి స్టాక్ సిఫార్సులు లేదా వ్యక్తిగత పెట్టుబడి సలహాలను అందించము.",
      copyright: "అర్థ సారథి — భారతీయ పౌరుల ఆర్థిక సాధికారత కోసం అంకితం.",
      quickLinks: "త్వరిత నావిగేషన్",
      authorities: "అధికారిక నియంత్రణ పోర్టల్స్",
      reportFrauds: "సైబర్ మోసాల ఫిర్యాదు హెల్ప్‌లైన్: 1930 (నేషనల్ సైబర్ క్రైమ్ పోర్టల్)",
    },
  },

  bn: {
    brandName: "অর্থ সারথী",
    brandTagline: "ভারতের জন্য সহজ ও নিরাপদ বিনিয়োগ শিক্ষা",
    tutorName: "অর্থবন্ধু",
    tutorSubtitle: "আপনার বিশ্বস্ত আর্থিক শিক্ষার সাথী",
    nav: {
      home: "হোম",
      learn: "লার্নিং হাব",
      tutor: "অর্থবন্ধু",
      claims: "দাবি যাচাই",
      startLearning: "শেখা শুরু করুন",
      askAi: "অর্থবন্ধুকে জিজ্ঞাসা করুন",
      selectLanguage: "ভাষা বেছে নিন",
    },
    hero: {
      kicker: "১৪০ কোটি ভারতীয় নাগরিকদের জন্য বিনামূল্যে আর্থিক শিক্ষা",
      title: "ভারতের জন্য বিনিয়োগ এখন সহজ।",
      subtitle: "টাকার মূল্য বুঝুন। আর্থিক দাবির সত্যতা যাচাই করুন। সঠিক সিদ্ধান্ত নিন।",
      primaryCta: "শেখা শুরু করুন",
      secondaryCta: "অর্থবন্ধুকে জিজ্ঞাসা করুন",
      trustBadge1: "SEBI ইনভেস্টর চার্টারের নির্দেশিকা অনুযায়ী",
      trustBadge2: "কোনো পণ্য বিক্রি নয় · ১০০% নিরপেক্ষ",
      trustBadge3: "১৩টি ভারতীয় ভাষায় উপলব্ধ",
      stat1Label: "ভারতীয় খুচরো বিনিয়োগকারী",
      stat1Desc: "ডিম্যাট অ্যাকাউন্টের সংখ্যা রেকর্ড মাত্রায়, কিন্তু সঠিক শিক্ষার প্রয়োজন সবচেয়ে বেশি।",
      stat2Label: "SEBI-র সমীক্ষা",
      stat2Desc: "F&O ট্রেডিংয়ে ৯৩% মানুষ মূলধন হারান। আমরা দীর্ঘমেয়াদী সম্পদ তৈরি শেখাই।",
      stat3Label: "মাসিক শৃঙ্খলা",
      stat3Desc: "প্রতি মাসে ভারতীয় পরিবারগুলি SIP-এর মাধ্যমে ভবিষ্যৎ সুরক্ষিত করছে।",
    },
    features: {
      sectionTitle: "আর্থিক স্বাধীনতার ৩টি মজবুত স্তম্ভ",
      sectionSubtitle: "আপনার কষ্টার্জিত সঞ্চয়কে প্রতারণা থেকে বাঁচাতে এবং দীর্ঘমেয়াদী সম্পদ গড়তে সাহায্যকারী মাধ্যম।",
      tutorCard: {
        title: "অর্থবন্ধু — AI ফিন্যান্স টিউটর",
        description: "সহজ বাংলায় যেকোনো আর্থিক প্রশ্ন করুন। 'SIP কি?' থেকে মুদ্রাস্ফীতির প্রভাব পর্যন্ত সহজ ব্যাখ্যা।",
        cta: "অর্থবন্ধুর সাথে কথা বলুন",
      },
      claimCard: {
        title: "আর্থিক দাবি পরীক্ষক",
        description: "হোয়াটসঅ্যাপ বা টেলিগ্রামের 'নিশ্চিত লাভ'-এর ফাঁদে পা দেওয়ার আগে আমাদের প্রতারণা সনাক্তকরণ ইঞ্জিনে পরীক্ষা করুন।",
        cta: "দাবি যাচাই করুন",
      },
      learnCard: {
        title: "লার্নিং হাব",
        description: "বাস্তব উদাহরণের সাহায্যে সঞ্চয়, মিউচুয়াল ফান্ড এবং ঝুঁকি ব্যবস্থাপনা শিখুন এবং কুইজ দিয়ে জ্ঞান পরীক্ষা করুন।",
        cta: "পাঠ দেখুন",
      },
    },
    topics: {
      sectionTitle: "নতুন বিনিয়োগকারীদের জন্য মৌলিক বিষয়",
      sectionSubtitle: "বাজারে ₹১ বিনিয়োগ করার আগেও প্রতিটি নাগরিকের এই ৬টি মূল বিষয় জানা প্রয়োজন।",
      saving: {
        title: "সঞ্চয় ও জরুরি তহবিল",
        desc: "কমপক্ষে ৬ মাসের খরচ লিকুইড ফান্ড বা সেভিংস অ্যাকাউন্টে রাখা আপনার প্রথম আর্থিক ঢাল।",
      },
      inflation: {
        title: "মুদ্রাস্ফীতি ও ক্রয়ক্ষমতা",
        desc: "নগদ টাকা ফেলে রাখলে মুদ্রাস্ফীতির কারণে তার প্রকৃত মূল্য কীভাবে প্রতি বছর কমে যায়।",
      },
      stocks: {
        title: "শেয়ার বাজার ও মালিকানা",
        desc: "শেয়ার কেনার অর্থ ভারতের ক্রমবর্ধমান ব্যবসায় অংশীদার হওয়া, কোনো জুয়া খেলা নয়।",
      },
      mutual_funds: {
        title: "মিউচুয়াল ফান্ড ও SIP",
        desc: "পেশাদার ফান্ড ম্যানেজারদের মাধ্যমে সুশৃঙ্খল মাসিক SIP কীভাবে দীর্ঘমেয়াদী সম্পদ তৈরি করে।",
      },
      risk: {
        title: "বিনিয়োগের ঝুঁকি ও বৈচিত্র্য",
        desc: "বেশি লাভের আশায় বেশি ঝুঁকি থাকে। আপনার সমস্ত সঞ্চয় এক জায়গায় রাখবেন না।",
      },
      fraud: {
        title: "প্রতারণা সচেতনতা",
        desc: "পনজি স্কিম, ভুয়ো টেলিগ্রাম টিপস এবং অনিবন্ধিত ট্রেডিং অ্যাপের ফাঁদ থেকে সতর্ক থাকুন।",
      },
      viewModule: "মডিউল খুলুন",
    },
    simulator: {
      title: "চক্রবৃদ্ধি (Compounding) ও মুদ্রাস্ফীতি ক্যালকুলেটর",
      subtitle: "নিয়মিত মাসিক SIP এবং নগদ টাকা রেখে দেওয়ার মধ্যে ৬% মুদ্রাস্ফীতিজনিত বিরাট পার্থক্য দেখুন।",
      monthlyInvestment: "মাসিক বিনিয়োগ (টাকা)",
      investmentPeriod: "সময়সীমা (বছর)",
      expectedReturn: "প্রত্যাশিত ইক্যুইটি রিটার্ন (নিফটি ৫০ গড়)",
      inflationRate: "মুদ্রাস্ফীতির হার",
      investedAmount: "আপনার জমা করা মোট টাকা",
      compoundedValue: "SIP-এর মাধ্যমে সম্ভাব্য মোট সম্পদ",
      cashValueErosion: "মুদ্রাস্ফীতির পর নগদ টাকার প্রকৃত মূল্য",
      insight: "মূল শিক্ষা",
      insightText: "চক্রবৃদ্ধিতে সময়ই আসল জাদুকর। ১৫-২০ বছরে আপনার মুনাফা মূল আসলের চেয়ে কয়েক গুণ বেশি হয়ে যায় (৭২-এর নিয়ম)।",
    },
    resources: {
      sectionTitle: "বিশ্বস্ত এবং সরকারি সূত্র",
      sectionSubtitle: "যেকোনো আর্থিক নিয়ম ও তথ্যের সত্যতা ভারতের সরকারি সংস্থার মাধ্যমে যাচাই করুন।",
      sebiTitle: "SEBI ইনভেস্টর চার্টার ও SCORES",
      sebiDesc: "বিনিয়োগকারীদের অধিকার এবং প্রতারণার অভিযোগ জানানোর অফিসিয়াল SEBI পোর্টাল।",
      rbiTitle: "রিজার্ভ ব্যাংক বলছে (RBI Kehta Hai)",
      rbiDesc: "অবৈধ লোন অ্যাপ ও ভুয়ো ডিপোজিট স্কিমের বিরুদ্ধে সচেতনতা অভিযান।",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "মিউচুয়াল ফান্ড সংক্রান্ত প্রাতিষ্ঠানিক বিনিয়োগকারী সচেতনতা।",
      bseNseTitle: "NSE ও BSE ইনভেস্টর সুরক্ষা ফান্ড",
      bseNseDesc: "দেশের শীর্ষ স্টক এক্সচেঞ্জ পরিচালিত বিনিয়োগকারী সুরক্ষা প্রকল্প।",
    },
    footer: {
      disclaimerTitle: "সংবিধিবদ্ধ শিক্ষামূলক দাবিত্যাগ",
      disclaimerText: "অর্থ সারথী শুধুমাত্র আর্থিক সচেতনতা ও শিক্ষার উদ্দেশ্যে তৈরি। আমরা কোনো স্টক টিপ বা ব্যক্তিগত বিনিয়োগ পরামর্শ দিই না।",
      copyright: "অর্থ সারথী — ভারতের নাগরিকদের আর্থিক ক্ষমতায়নের লক্ষ্যে নিবেদিত।",
      quickLinks: "দ্রুত নেভিগেশন",
      authorities: "নিয়ামক সংস্থাগুলি",
      reportFrauds: "সাইবার প্রতারণার হেল্পলাইন: 1930 (ন্যাশনাল সাইবার ক্রাইম পোর্টাল)",
    },
  },

  gu: {
    brandName: "અર્થ સારથી",
    brandTagline: "ભારત માટે સરળ અને સુરક્ષિત રોકાણ શિક્ષણ",
    tutorName: "અર્થમિત્ર",
    tutorSubtitle: "તમારો વિશ્વસનીય નાણાકીય શિક્ષણ મિત્ર",
    nav: {
      home: "હોમ",
      learn: "લર્નિંગ હબ",
      tutor: "અર્થમિત્ર",
      claims: "દાવા ચકાસણી",
      startLearning: "શીખવાનું શરૂ કરો",
      askAi: "અર્થમિત્રને પૂછો",
      selectLanguage: "ભાષા પસંદ કરો",
    },
    hero: {
      kicker: "૧૪૦ કરોડ ભારતીય નાગરિકો માટે નિઃશુલ્ક નાણાકીય શિક્ષણ",
      title: "ભારત માટે રોકાણ હવે બન્યું સરળ.",
      subtitle: "પૈસાને સમજો. શંકાસ્પદ દાવાઓ સામે સવાલ કરો. યોગ્ય અને સુરક્ષિત નિર્ણયો લો.",
      primaryCta: "શીખવાનું શરૂ કરો",
      secondaryCta: "અર્થમિત્રને પૂછો",
      trustBadge1: "SEBI ઇન્વેસ્ટર ચાર્ટર અનુસાર",
      trustBadge2: "કોઈ પ્રોડક્ટ વેચાણ નહીં · ૧૦૦% નિષ્પક્ષ",
      trustBadge3: "૧૩ ભારતીય ભાષાઓમાં ઉપલબ્ધ",
      stat1Label: "રિટેલ ઇન્વેસ્ટર્સ",
      stat1Desc: "ડીમેટ એકાઉન્ટ્સની સંખ્યા વધી છે, પરંતુ સાચા શિક્ષણની સૌથી વધુ જરૂર છે.",
      stat2Label: "SEBI નો રિપોર્ટ",
      stat2Desc: "F&O ટ્રેડિંગમાં ૯૩% લોકો મૂડી ગુમાવે છે. અમે સ્થિર સંપત્તિ સર્જન શીખવીએ છીએ.",
      stat3Label: "માસિક શિસ્ત",
      stat3Desc: "દર મહિને ભારતીય પરિવારો શિસ્તબદ્ધ SIP દ્વારા સંપત્તિ બનાવી રહ્યા છે.",
    },
    features: {
      sectionTitle: "નાણાકીય સ્વતંત્રતાના ૩ મજબૂત આધારસ્તંભ",
      sectionSubtitle: "તમારી મહેનતની કમાણીને છેતરપિંડીથી બચાવવા અને લાંબા ગાળે સંપત્તિ બનાવવા માટેના સરળ સાધનો.",
      tutorCard: {
        title: "અર્થમિત્ર — AI ફાઇનાન્સ ટ્યુટર",
        description: "સરળ ગુજરાતીમાં કોઈપણ નાણાકીય સવાલ પૂછો. 'SIP શું છે?' થી લઈને મોંઘવારી સુધીના તમામ જવાબો.",
        cta: "અર્થમિત્ર સાથે વાત કરો",
      },
      claimCard: {
        title: "નાણાકીય દાવા ચેકર",
        description: "વોટ્સએપ કે ટેલિગ્રામ પર મળતી 'ગેરંટીડ નફા'ની લાલચને અમારા ફ્રોડ ચેકર દ્વારા ચકાસો.",
        cta: "દાવો ચકાસો",
      },
      learnCard: {
        title: "લર્નિંગ હબ",
        description: "વાસ્તવિક ઉદાહરણો સાથે બચત, મ્યુચ્યુઅલ ફંડ અને જોખમ વ્યવસ્થાપન સમજો અને ક્વિઝ રમો.",
        cta: "પાઠ જુઓ",
      },
    },
    topics: {
      sectionTitle: "નવા રોકાણકારો માટે મૂળભૂત વિષયો",
      sectionSubtitle: "બજારમાં ₹૧ રોકતા પહેલા દરેક નાગરિકને આ ૬ પાયાની વાતો સમજવી જરૂરી છે.",
      saving: {
        title: "બચત અને ઇમરજન્સી ફંડ",
        desc: "ઓછામાં ઓછા ૬ મહિનાનો ઘરખર્ચ લિક્વિડ ફંડ કે બચત ખાતામાં રાખવો એ તમારી પ્રથમ ઢાલ છે.",
      },
      inflation: {
        title: "મોંઘવારી અને ખરીદશક્તિ",
        desc: "ઘરમાં કે ઓછા વ્યાજવાળા ખાતામાં રોકડ પડી રહેવાથી દર વર્ષે તેની ખરીદશક્તિ કેવી રીતે ઘટે છે.",
      },
      stocks: {
        title: "શેરબજાર અને માલિકી",
        desc: "શેર ખરીદવાનો અર્થ ભારતીય વ્યવસાયમાં ભાગીદારી મેળવવાનો છે, કોઈ જુગાર કે લોટરી નથી.",
      },
      mutual_funds: {
        title: "મ્યુચ્યુઅલ ફંડ અને SIP",
        desc: "દર મહિને થોડી રકમ શિસ્તબદ્ધ રીતે રોકીને લાંબા ગાળે મોટી સંપત્તિ કેવી રીતે બને છે.",
      },
      risk: {
        title: "જોખમ અને વિવિધતા",
        desc: "જ્યાં વધુ વળતરની અપેક્ષા હોય ત્યાં જોખમ પણ વધુ હોય છે. બધા ઈંડા એક ટોપલીમાં ન મૂકો.",
      },
      fraud: {
        title: "છેતરપિંડી અંગે જાગૃતિ",
        desc: "પોન્ઝી સ્કીમ, ટેલિગ્રામ ટિપ્સ અને ફેક ટ્રેડિંગ એપ્સથી કેવી રીતે બચવું.",
      },
      viewModule: "મોડ્યુલ ખોલો",
    },
    simulator: {
      title: "ચક્રવૃદ્ધિ વ્યાજ (Compounding) અને મોંઘવારી",
      subtitle: "દર મહિને નિયમિત SIP કરવા અને માત્ર રોકડ રાખવા વચ્ચે ૬% મોંઘવારીના કારણે થતો તફાવત જુઓ.",
      monthlyInvestment: "માસિક રોકાણ (રૂપિયા)",
      investmentPeriod: "સમયગાળો (વર્ષ)",
      expectedReturn: "અપેક્ષિત રિટર્ન (નિફ્ટી ૫૦ સરેરાશ)",
      inflationRate: "મોંઘવારી દર",
      investedAmount: "તમારા દ્વારા જમા થયેલી કુલ રકમ",
      compoundedValue: "SIP દ્વારા બનનાર અંદાજિત ફંડ",
      cashValueErosion: "૬% મોંઘવારી પછી રોકડની ખરીદશક્તિ",
      insight: "મુખ્ય શીખ",
      insightText: "ચક્રવૃદ્ધિમાં સમય સૌથી મોટો જાદુગર છે. ૧૫-૨૦ વર્ષમાં તમારો નફો મૂળ રકમ કરતા ઘણો મોટો થઈ જાય છે (૭૨ નો નિયમ).",
    },
    resources: {
      sectionTitle: "સત્તાવાર અને વિશ્વસનીય સ્ત્રોત",
      sectionSubtitle: "કોઈપણ નાણાકીય નિયમ કે સંસ્થાની સત્યતા સરકારી સંસ્થાઓ મારફત જ તપાસો.",
      sebiTitle: "SEBI ઇન્વેસ્ટર ચાર્ટર & SCORES",
      sebiDesc: "રોકાણકારોના હકો અને છેતરપિંડીની ફરિયાદ નોંધાવવાનું સત્તાવાર SEBI પોર્ટલ.",
      rbiTitle: "આરબીઆઈ કહે છે (RBI Kehta Hai)",
      rbiDesc: "ગેરકાયદેસર ડિપોઝિટ યોજનાઓ અને ફેક લોન એપ્સ સામે રિઝર્વ બેંકનું જાગૃતિ અભિયાન.",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "મ્યુચ્યુઅલ ફંડ એસોસિએશન દ્વારા સંચાલિત વિશ્વસનીય રોકાણકાર શિક્ષણ.",
      bseNseTitle: "NSE & BSE ઇન્વેસ્ટર પ્રોટેક્શન ફંડ",
      bseNseDesc: "ભારતના અગ્રણી સ્ટોક એક્સચેન્જ દ્વારા રોકાણકારોની સુરક્ષાના પ્રયાસો.",
    },
    footer: {
      disclaimerTitle: "કાનૂની શૈક્ષણિક ડિસ્ક્લેમર",
      disclaimerText: "અર્થ સારથી માત્ર નાણાકીય જાગૃતિ માટેનું શૈક્ષણિક પ્લેટફોર્મ છે. અમે કોઈ સ્ટોક ટિપ કે રોકાણ સલાહ આપતા નથી.",
      copyright: "અર્થ સારથી — ભારતીય નાગરિકોના નાણાકીય સશક્તિકરણ માટે સમર્પિત.",
      quickLinks: "ઝડપી નેવિગેશન",
      authorities: "નિયામક સંસ્થાઓ",
      reportFrauds: "સાયબર છેતરપિંડી હેલ્પલાઇન: 1930 (નેશનલ સાયબર ક્રાઇમ પોર્ટલ)",
    },
  },

  kn: {
    brandName: "ಅರ್ಥ ಸಾರಥಿ",
    brandTagline: "ಭಾರತಕ್ಕಾಗಿ ಸರಳ ಹೂಡಿಕೆ ಶಿಕ್ಷಣ",
    tutorName: "ಅರ್ಥಮಿತ್ರ",
    tutorSubtitle: "ನಿಮ್ಮ ಆತ್ಮೀಯ ಆರ್ಥಿಕ ಕಲಿಕೆಯ ಗೆಳೆಯ",
    nav: {
      home: "ಮುಖಪುಟ",
      learn: "ಕಲಿಕಾ ಕೇಂದ್ರ",
      tutor: "ಅರ್ಥಮಿತ್ರ",
      claims: "ವಂಚನೆ ಪರೀಕ್ಷಕ",
      startLearning: "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
      askAi: "ಅರ್ಥಮಿತ್ರನನ್ನು ಕೇಳಿ",
      selectLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
    },
    hero: {
      kicker: "140 ಕೋಟಿ ಭಾರತೀಯರಿಗಾಗಿ ಉಚಿತ ಆರ್ಥಿಕ ಸಾಕ್ಷರತೆ",
      title: "ಭಾರತಕ್ಕಾಗಿ ಹೂಡಿಕೆ ಈಗ ಸುಲಭ.",
      subtitle: "ಹಣವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ಸಂಶಯಾಸ್ಪದ ಆಶ್ವಾಸನೆಗಳನ್ನು ಪ್ರಶ್ನಿಸಿ. ಸರಿಯಾದ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.",
      primaryCta: "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
      secondaryCta: "ಅರ್ಥಮಿತ್ರನನ್ನು ಕೇಳಿ",
      trustBadge1: "SEBI ಹೂಡಿಕೆದಾರರ ನಿಯಮಾವಳಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿದೆ",
      trustBadge2: "ಯಾವುದೇ ಉತ್ಪನ್ನ ಮಾರಾಟವಿಲ್ಲ · 100% ಪ್ರಾಮಾಣಿಕ",
      trustBadge3: "13 ಭಾರತೀಯ ಭಾಷೆಗಳಲ್ಲಿ ಲಭ್ಯವಿದೆ",
      stat1Label: "ಚಿಲ್ಲರೆ ಹೂಡಿಕೆದಾರರು",
      stat1Desc: "ಡಿಮ್ಯಾಟ್ ಖಾತೆಗಳ ಸಂಖ್ಯೆ ಹೆಚ್ಚಾಗಿದೆ, ಆದರೆ ನಿಜವಾದ ಶಿಕ್ಷಣದ ಅಗತ್ಯತೆ ಹೆಚ್ಚಾಗಿದೆ.",
      stat2Label: "SEBI ವರದಿ",
      stat2Desc: "F&O ನಲ್ಲಿ 93% ಜನರು ಹಣ ಕಳೆದುಕೊಳ್ಳುತ್ತಾರೆ. ನಾವು ಸುರಕ್ಷಿತ ಹೂಡಿಕೆಯನ್ನು ಕಲಿಸುತ್ತೇವೆ.",
      stat3Label: "ಮಾಸಿಕ ಶಿಸ್ತು",
      stat3Desc: "ಪ್ರತಿ ತಿಂಗಳು ಭಾರತೀಯ ಕುಟುಂಬಗಳು SIP ಮೂಲಕ ಭವಿಷ್ಯವನ್ನು ಕಟ್ಟಿಕೊಳ್ಳುತ್ತಿವೆ.",
    },
    features: {
      sectionTitle: "ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯದ 3 ಬಲವಾದ ಸ್ತಂಭಗಳು",
      sectionSubtitle: "ನಿಮ್ಮ ಕಷ್ಟದ ಗಳಿಕೆಯನ್ನು ವಂಚನೆಯಿಂದ ರಕ್ಷಿಸಲು ಮತ್ತು ದೀರ್ಘಾವಧಿಯ ಸಂಪತ್ತು ನಿರ್ಮಿಸಲು ಸರಳ ಪರಿಕರಗಳು.",
      tutorCard: {
        title: "ಅರ್ಥಮಿತ್ರ — AI ಫೈನಾನ್ಸ್ ಟ್ಯೂಟರ್",
        description: "ಸರಳ ಕನ್ನಡದಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ. 'SIP ಎಂದರೇನು?' ನಿಂದ ಹಿಡಿದು ಹಣದುಬ್ಬರದವರೆಗೂ ಸ್ಪಷ್ಟ ವಿವರಣೆ.",
        cta: "ಅರ್ಥಮಿತ್ರನೊಂದಿಗೆ ಮಾತನಾಡಿ",
      },
      claimCard: {
        title: "ಆರ್ಥಿಕ ವಂಚನೆ ಪರೀಕ್ಷಕ",
        description: "ವಾಟ್ಸಾಪ್, ಟೆಲಿಗ್ರಾಮ್ ಅಥವಾ ಯೂಟ್ಯೂಬ್ ಮೂಲಕ ಬರುವ 'ಖಾತರಿಯ ಲಾಭ'ದ ಸುಳ್ಳು ಭರವಸೆಗಳನ್ನು ತಕ್ಷಣ ಪರಿಶೀಲಿಸಿ.",
        cta: "ಪರಿಶೀಲಿಸಿ",
      },
      learnCard: {
        title: "ಕಲಿಕಾ ಕೇಂದ್ರ",
        description: "ಉಳಿತಾಯ, ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಮತ್ತು ರಿಸ್ಕ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಕುರಿತು ಸರಳ ಪಾಠಗಳನ್ನು ಕಲಿಯಿರಿ.",
        cta: "ಪಾಠಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
      },
    },
    topics: {
      sectionTitle: "ಹೊಸ ಹೂಡಿಕೆದಾರರಿಗಾಗಿ ಮೂಲಭೂತ ವಿಷಯಗಳು",
      sectionSubtitle: "ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ₹1 ಹೂಡುವ ಮುನ್ನ ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನೂ ತಿಳಿಯಬೇಕಾದ 6 ಪ್ರಮುಖ ವಿಷಯಗಳು.",
      saving: {
        title: "ಉಳಿತಾಯ ಮತ್ತು ತುರ್ತು ನಿಧಿ",
        desc: "ಕನಿಷ್ಠ 6 ತಿಂಗಳ ವೆಚ್ಚವನ್ನು ಲಿಕ್ವಿಡ್ ಫಂಡ್ ಅಥವಾ ಉಳಿತಾಯ ಖಾತೆಯಲ್ಲಿ ಇಡುವುದು ನಿಮ್ಮ ಮೊದಲ ರಕ್ಷಣೆ.",
      },
      inflation: {
        title: "ಹಣದುಬ್ಬರ ಮತ್ತು ಕೊಳ್ಳುವ ಶಕ್ತಿ",
        desc: "ಹಣವನ್ನು ಹಾಗೆಯೇ ಇಟ್ಟರೆ ಹಣದುಬ್ಬರದಿಂದ ಅದರ ನಿಜವಾದ ಮೌಲ್ಯ ವರ್ಷದಿಂದ ವರ್ಷಕ್ಕೆ ಹೇಗೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ.",
      },
      stocks: {
        title: "ಷೇರು ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಮಾಲೀಕತ್ವ",
        desc: "ಷೇರು ಖರೀದಿಸುವುದು ಎಂದರೆ ಭಾರತೀಯ ಕಂಪನಿಯಲ್ಲಿ ಪಾಲುದಾರರಾಗುವುದು, ಜೂಜಾಟವಲ್ಲ.",
      },
      mutual_funds: {
        title: "ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಮತ್ತು SIP",
        desc: "ಪ್ರತಿ ತಿಂಗಳು ಶಿಸ್ತುಬದ್ಧವಾಗಿ ಹಣ ತೊಡಗಿಸಿ ದೀರ್ಘಾವಧಿಯಲ್ಲಿ ದೊಡ್ಡ ಸಂಪತ್ತನ್ನು ಹೇಗೆ ಸೃಷ್ಟಿಸಬಹುದು.",
      },
      risk: {
        title: "ಹೂಡಿಕೆ ರಿಸ್ಕ್ ಮತ್ತು ವೈವಿಧ್ಯತೆ",
        desc: "ಹೆಚ್ಚಿನ ಲಾಭಕ್ಕೆ ಹೆಚ್ಚಿನ ರಿಸ್ಕ್ ಇರುತ್ತದೆ. ನಿಮ್ಮ ಎಲ್ಲಾ ಹಣವನ್ನು ಒಂದೇ ಕಡೆ ತೊಡಗಿಸಬೇಡಿ.",
      },
      fraud: {
        title: "ವಂಚನೆ ಜಾಗೃತಿ",
        desc: "ಪೊಂಜಿ ಯೋಜನೆಗಳು ಮತ್ತು ನಕಲಿ ಟ್ರೇಡಿಂಗ್ ಆ್ಯಪ್‌ಗಳಿಂದ ಸುರಕ್ಷಿತವಾಗಿರುವುದು ಹೇಗೆ.",
      },
      viewModule: "ಪಾಠ ತೆರೆಯಿರಿ",
    },
    simulator: {
      title: "ಚಕ್ರಬಡ್ಡಿ (Compounding) ಮತ್ತು ಹಣದುಬ್ಬರದ ಲೆಕ್ಕಾಚಾರ",
      subtitle: "ಪ್ರತಿ ತಿಂಗಳು SIP ಮಾಡುವುದಕ್ಕೂ, ಕೇವಲ ನಗದು ಹಣ ಇಡುವುದಕ್ಕೂ ಇರುವ 6% ಹಣದುಬ್ಬರದ ವ್ಯತ್ಯಾಸವನ್ನು ನೋಡಿ.",
      monthlyInvestment: "ಮಾಸಿಕ ಹೂಡಿಕೆ (ರೂಪಾಯಿ)",
      investmentPeriod: "ಅವಧಿ (ವರ್ಷಗಳು)",
      expectedReturn: "ನಿರೀಕ್ಷಿತ ರಿಟರ್ನ್ (ನಿಫ್ಟಿ 50 ಸರಾಸರಿ)",
      inflationRate: "ಹಣದುಬ್ಬರ ದರ",
      investedAmount: "ನೀವು ಹೂಡಿದ ಒಟ್ಟು ಹಣ",
      compoundedValue: "SIP ಮೂಲಕ ದೊರೆಯುವ ಅಂದಾಜು ಸಂಪತ್ತು",
      cashValueErosion: "ಹಣದುಬ್ಬರದ ನಂತರ ನಗದು ಹಣದ ಕೊಳ್ಳುವ ಶಕ್ತಿ",
      insight: "ಮುಖ್ಯ ಪಾಠ",
      insightText: "ಚಕ್ರಬಡ್ಡಿಯಲ್ಲಿ ಸಮಯವೇ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ. 15-20 ವರ್ಷಗಳಲ್ಲಿ ನಿಮ್ಮ ಲಾಭವು ನಿಮ್ಮ ಅಸಲಿಗಿಂತ ಹಲವು ಪಟ್ಟು ಹೆಚ್ಚಾಗುತ್ತದೆ (72 ರ ನಿಯಮ).",
    },
    resources: {
      sectionTitle: "ಅಧಿಕೃತ ಮತ್ತು ನಂಬಿಕಸ್ಥ ಮೂಲಗಳು",
      sectionSubtitle: "ಯಾವುದೇ ಆರ್ಥಿಕ ನಿಯಮಗಳನ್ನು ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಸಂಸ್ಥೆಗಳಿಂದ ಮಾತ್ರ ಪರಿಶೀಲಿಸಿ.",
      sebiTitle: "SEBI ಹೂಡಿಕೆದಾರರ ಚಾರ್ಟರ್ ಮತ್ತು SCORES",
      sebiDesc: "ಹೂಡಿಕೆದಾರರ ಹಕ್ಕುಗಳು ಮತ್ತು ಆನ್‌ಲೈನ್ ದೂರು ನೀಡುವ ಅಧಿಕೃತ SEBI ಪೋರ್ಟಲ್.",
      rbiTitle: "ಆರ್‌ಬಿಐ ಹೇಳುತ್ತದೆ (RBI Kehta Hai)",
      rbiDesc: "ನಕಲಿ ಲೋನ್ ಆ್ಯಪ್‌ಗಳು ಮತ್ತು ಅಕ್ರಮ ಠೇವಣಿ ಯೋಜನೆಗಳ ವಿರುದ್ಧ ರಿಸರ್ವ್ ಬ್ಯಾಂಕ್ ಜಾಗೃತಿ.",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಅಸೋಸಿಯೇಷನ್ ನಡೆಸುವ ಅಧಿಕೃತ ಹೂಡಿಕೆದಾರ ಶಿಕ್ಷಣ.",
      bseNseTitle: "NSE ಮತ್ತು BSE ಹೂಡಿಕೆದಾರರ ರಕ್ಷಣಾ ನಿಧಿ",
      bseNseDesc: "ಭಾರತದ ಪ್ರಮುಖ ಸ್ಟಾಕ್ ಎಕ್ಸ್‌ಚೇಂಜ್‌ಗಳು ನೀಡುವ ಸುರಕ್ಷತಾ ತರಬೇತಿ.",
    },
    footer: {
      disclaimerTitle: "ಶಾಸನಬದ್ಧ ಶೈಕ್ಷಣಿಕ ಹಕ್ಕುತ್ಯಾಗ",
      disclaimerText: "ಅರ್ಥ ಸಾರಥಿಯು ಕೇವಲ ಆರ್ಥಿಕ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ರೂಪಿಸಲಾದ ವೇದಿಕೆಯಾಗಿದೆ. ನಾವು ಯಾವುದೇ ಷೇರು ಶಿಫಾರಸುಗಳನ್ನು ನೀಡುವುದಿಲ್ಲ.",
      copyright: "ಅರ್ಥ ಸಾರಥಿ — ಭಾರತೀಯ ನಾಗರಿಕರ ಆರ್ಥಿಕ ಸಬಲೀಕರಣಕ್ಕಾಗಿ ಸಮರ್ಪಿತ.",
      quickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
      authorities: "ನಿಯಂತ್ರಣ ಮಂಡಳಿಗಳು",
      reportFrauds: "ಸೈಬರ್ ವಂಚನೆ ದೂರು ಸಹಾಯವಾಣಿ: 1930 (ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಕ್ರೈಮ್ ಪೋರ್ಟಲ್)",
    },
  },

  ml: {
    brandName: "അർത്ഥ സാരഥി",
    brandTagline: "ഭാരതത്തിനായി ലളിതമായ നിക്ഷേപ വിദ്യാഭ്യാസം",
    tutorName: "അർത്ഥമിത്ര",
    tutorSubtitle: "നിങ്ങളുടെ വിശ്വസ്ത സാമ്പത്തിക കൂട്ടുകാരൻ",
    nav: {
      home: "ഹോം",
      learn: "ലേണിംഗ് ഹബ്ബ്",
      tutor: "അർത്ഥമിത്ര",
      claims: "തട്ടിപ്പ് പരിശോധന",
      startLearning: "പഠിക്കാൻ തുടങ്ങൂ",
      askAi: "അർത്ഥമിത്രയോട് ചോദിക്കൂ",
      selectLanguage: "ഭാഷ തിരഞ്ഞെടുക്കൂ",
    },
    hero: {
      kicker: "140 കോടി ഇന്ത്യൻ പൗരന്മാർക്കായി സൗജന്യ സാമ്പത്തിക വിദ്യാഭ്യാസം",
      title: "ഭാരതത്തിന് നിക്ഷേപം ഇനി ലളിതം.",
      subtitle: "പണത്തെ മനസ്സിലാക്കൂ. തെറ്റായ അവകാശവാദങ്ങളെ ചോദ്യം ചെയ്യൂ. സുരക്ഷിതമായ തീരുമാനങ്ങളെടുക്കൂ.",
      primaryCta: "പഠിക്കാൻ തുടങ്ങൂ",
      secondaryCta: "അർത്ഥമിത്രയോട് ചോദിക്കൂ",
      trustBadge1: "SEBI നിക്ഷേപക ചാർട്ടർ പ്രകാരം",
      trustBadge2: "ഉൽപ്പന്ന വിൽപ്പനയില്ല · 100% നിഷ്പക്ഷം",
      trustBadge3: "13 ഇന്ത്യൻ ഭാഷകളിൽ ലഭ്യമാണ്",
      stat1Label: "ചില്ലറ നിക്ഷേപകർ",
      stat1Desc: "ഡീമാറ്റ് അക്കൗണ്ടുകൾ വർധിച്ചു, പക്ഷെ കൃത്യമായ സാമ്പത്തിക സാക്ഷരതയാണ് പ്രധാനം.",
      stat2Label: "SEBI റിപ്പോർട്ട്",
      stat2Desc: "F&O യിൽ 93% ആളുകൾക്കും നഷ്ടം സംഭവിക്കുന്നു. ഞങ്ങൾ സുരക്ഷിത സമ്പാദ്യം പഠിപ്പിക്കുന്നു.",
      stat3Label: "പ്രതിമാസ അച്ചടക്കം",
      stat3Desc: "എല്ലാ മാസവും ഇന്ത്യൻ കുടുംബങ്ങൾ SIP വഴി സമ്പത്ത് വർദ്ധിപ്പിക്കുന്നു.",
    },
    features: {
      sectionTitle: "സാമ്പത്തിക സ്വാതന്ത്ര്യത്തിന്റെ 3 ശക്തമായ തൂണുകൾ",
      sectionSubtitle: "നിങ്ങളുടെ അധ്വാനത്തിന്റെ ഫലം തട്ടിപ്പുകളിൽ നിന്ന് സംരക്ഷിക്കാനും ദീർഘകാല സമ്പത്ത് ഉണ്ടാക്കാനുമുള്ള ലളിതമായ വഴികൾ.",
      tutorCard: {
        title: "അർത്ഥമിത്ര — AI ഫിനാൻസ് ട്യൂട്ടർ",
        description: "ലളിതമായ മലയാളത്തിൽ സംശയങ്ങൾ ചോദിക്കൂ. 'SIP എന്താണ്?' മുതൽ പണപ്പെരുപ്പത്തിന്റെ ആഘാതം വരെ വ്യക്തമായ മറുപടികൾ.",
        cta: "അർത്ഥമിത്രയോട് സംസാരിക്കൂ",
      },
      claimCard: {
        title: "സാമ്പത്തിക ക്ലെയിം ചെക്കർ",
        description: "വാട്ട്‌സ്ആപ്പിലും ടെലിഗ്രാമിലും വരുന്ന 'ഗ്യാരണ്ടീഡ് റിട്ടേൺ' വാഗ്ദാനങ്ങൾ ഞങ്ങളുടെ ടൂൾ വഴി പരിശോധിക്കൂ.",
        cta: "പരിശോധിക്കൂ",
      },
      learnCard: {
        title: "ലേണിംഗ് ഹബ്ബ്",
        description: "സമ്പാദ്യം, മ്യൂച്വൽ ഫണ്ടുകൾ, റിസ്ക് മാനേജ്മെന്റ് എന്നിവയെക്കുറിച്ച് ലളിതമായ പാഠങ്ങളും ക്വിസുകളും.",
        cta: "പാഠങ്ങൾ കാണൂ",
      },
    },
    topics: {
      sectionTitle: "തുടക്കക്കാർക്കായി അടിസ്ഥാന പാഠങ്ങൾ",
      sectionSubtitle: "മാർക്കറ്റിൽ ₹1 നിക്ഷേപിക്കുന്നതിന് മുമ്പും ഓരോ പൗരനും അറിഞ്ഞിരിക്കേണ്ട 6 പ്രധാന കാര്യങ്ങൾ.",
      saving: {
        title: "സമ്പാദ്യവും അടിയന്തര ഫണ്ടും",
        desc: "കുറഞ്ഞത് 6 മാസത്തെ ചെലവുകൾ ലിക്വിഡ് ഫണ്ടിലോ സേവിംഗ്സ് അക്കൗണ്ടിലോ സൂക്ഷിക്കുന്നത് നിങ്ങളുടെ ആദ്യ രക്ഷാകവചമാണ്.",
      },
      inflation: {
        title: "പണപ്പെരുപ്പവും വാങ്ങൽ ശേഷിയും",
        desc: "പണം വെറുതെ വെച്ചിരുന്നാൽ പണപ്പെരുപ്പം കാരണം അതിന്റെ മൂല്യം എങ്ങനെ കുറയുന്നു എന്ന് മനസ്സിലാക്കൂ.",
      },
      stocks: {
        title: "ഓഹരി വിപണിയും ഉടമസ്ഥതയും",
        desc: "ഓഹരി വാങ്ങുന്നത് വളരുന്ന ഇന്ത്യൻ ബിസിനസ്സിൽ പങ്കാളിയാകലാണ്, ചൂതാട്ടമല്ല.",
      },
      mutual_funds: {
        title: "മ്യൂച്വൽ ഫണ്ടുകളും SIP യും",
        desc: "പ്രതിമാസ SIP വഴി നിക്ഷേപകർക്ക് ദീർഘകാലത്തിൽ വലിയ സമ്പത്ത് ഉണ്ടാക്കാൻ സാധിക്കുന്നത് എങ്ങനെ.",
      },
      risk: {
        title: "റിസ്കും അസറ്റ് അലോക്കേഷനും",
        desc: "കൂടുതൽ വരുമാനം ആഗ്രഹിക്കുമ്പോൾ കൂടുതൽ റിസ്ക് ഉണ്ടാകും. എല്ലാ പണവും ഒരിടത്ത് മാത്രം നിക്ഷേപിക്കരുത്.",
      },
      fraud: {
        title: "തട്ടിപ്പുകളെക്കുറിച്ചുള്ള അവബോധം",
        desc: "പോൺസി സ്കീമുകൾ, വ്യാജ ടെലിഗ്രാം ഗ്രൂപ്പുകൾ, അനധികൃത ട്രേഡിംഗ് ആപ്പുകൾ എന്നിവ തിരിച്ചറിയൂ.",
      },
      viewModule: "പാഠം തുറക്കൂ",
    },
    simulator: {
      title: "കൂട്ടുപലിശയും (Compounding) പണപ്പെരുപ്പവും",
      subtitle: "പ്രതിമാസം കൃത്യമായി SIP ചെയ്യുന്നതും പണം വെറുതെ സൂക്ഷിക്കുന്നതും തമ്മിലുള്ള 6% പണപ്പെരുപ്പ വ്യത്യാസം കാണൂ.",
      monthlyInvestment: "പ്രതിമാസ നിക്ഷേപം (രൂപ)",
      investmentPeriod: "കാലാവധി (വർഷം)",
      expectedReturn: "പ്രതീക്ഷിക്കുന്ന വളർച്ച (നിഫ്റ്റി 50 ശരാശരി)",
      inflationRate: "പണപ്പെരുപ്പ നിരക്ക്",
      investedAmount: "നിങ്ങൾ നിക്ഷേപിച്ച ആകെ തുക",
      compoundedValue: "SIP വഴി ലഭിക്കുന്ന ഏകദേശ സമ്പത്ത്",
      cashValueErosion: "പണപ്പെരുപ്പത്തിന് ശേഷമുള്ള യഥാർത്ഥ മൂല്യം",
      insight: "പ്രധാന പാഠം",
      insightText: "കൂട്ടുപലിശയിൽ സമയത്തിനാണ് ഏറ്റവും പ്രാധാന്യം. 15-20 വർഷത്തിൽ നിങ്ങളുടെ ലാഭം നിങ്ങളുടെ മുതലിനേക്കാൾ പലമടങ്ങ് വലുതാകും (റൂൾ ഓഫ് 72).",
    },
    resources: {
      sectionTitle: "ഔദ്യോഗികവും വിശ്വസനീയവുമായ സ്രോതസ്സുകൾ",
      sectionSubtitle: "സാമ്പത്തിക വിവരങ്ങൾ ഇന്ത്യയുടെ ഔദ്യോഗിക റെഗുലേറ്ററി ബോഡികൾ വഴി മാത്രം പരിശോധിക്കുക.",
      sebiTitle: "SEBI ഇൻവെസ്റ്റർ ചാർട്ടർ & SCORES",
      sebiDesc: "നിക്ഷേപകരുടെ അവകാശങ്ങളും ഓൺലൈൻ പരാതി പരിഹാര പോർട്ടലും.",
      rbiTitle: "ആർബിഐ പറയുന്നു (RBI Kehta Hai)",
      rbiDesc: "വ്യാജ ലോൺ ആപ്പുകൾക്കും അവിഹിത നിക്ഷേപങ്ങൾക്കുമെതിരെയുള്ള ബോധവൽക്കരണം.",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "മ്യൂച്വൽ ഫണ്ട് അസോസിയേഷൻ നടത്തുന്ന നിക്ഷേപക ബോധവൽക്കരണം.",
      bseNseTitle: "NSE & BSE ഇൻവെസ്റ്റർ പ്രൊട്ടക്ഷൻ ഫണ്ട്",
      bseNseDesc: "പ്രമുഖ സ്റ്റോക്ക് എക്സ്ചേഞ്ചുകൾ നൽകുന്ന നിക്ഷേപക സുരക്ഷാ പരിശീലനങ്ങൾ.",
    },
    footer: {
      disclaimerTitle: "നിയമപരമായ വിദ്യാഭ്യാസ നിരാകരണം",
      disclaimerText: "അർത്ഥ സാരഥി സാമ്പത്തിക സാക്ഷരതയ്ക്ക് വേണ്ടിയുള്ള ഒരു വിദ്യാഭ്യാസ പ്ലാറ്റ്‌ഫോം മാത്രമാണ്. ഞങ്ങൾ യാതൊരുവിധ സ്റ്റോക്ക് നിർദ്ദേശങ്ങളും നൽകുന്നില്ല.",
      copyright: "അർത്ഥ സാരഥി — ഇന്ത്യൻ പൗരന്മാരുടെ സാമ്പത്തിക ശാക്തീകരണത്തിനായി സമർപ്പിച്ചത്.",
      quickLinks: "പ്രധാന ലിങ്കുകൾ",
      authorities: "റെഗുലേറ്ററി പോർട്ടലുകൾ",
      reportFrauds: "സൈബർ തട്ടിപ്പ് ഹെൽപ്പ് ലൈൻ: 1930 (നാഷണൽ സൈബർ ക്രൈം പോർട്ടൽ)",
    },
  },

  pa: {
    brandName: "ਅਰਥ ਸਾਰਥੀ",
    brandTagline: "ਭਾਰਤ ਲਈ ਸਰਲ ਅਤੇ ਸੁਰੱਖਿਅਤ ਨਿਵੇਸ਼ ਸਿੱਖਿਆ",
    tutorName: "ਅਰਥਮਿੱਤਰ",
    tutorSubtitle: "ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਵਿੱਤੀ ਸਿੱਖਿਆ ਸਾਥੀ",
    nav: {
      home: "ਮੁੱਖ ਪੰਨਾ",
      learn: "ਲਰਨਿੰਗ ਹੱਬ",
      tutor: "ਅਰਥਮਿੱਤਰ",
      claims: "ਦਾਅਵਾ ਚੈੱਕਰ",
      startLearning: "ਸਿੱਖਣਾ ਸ਼ੁਰੂ ਕਰੋ",
      askAi: "ਅਰਥਮਿੱਤਰ ਨੂੰ ਪੁੱਛੋ",
      selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
    },
    hero: {
      kicker: "140 ਕਰੋੜ ਭਾਰਤੀਆਂ ਲਈ ਮੁਫ਼ਤ ਵਿੱਤੀ ਸਿੱਖਿਆ",
      title: "ਭਾਰਤ ਲਈ ਨਿਵੇਸ਼ ਹੁਣ ਹੋਇਆ ਆਸਾਨ।",
      subtitle: "ਪੈਸੇ ਨੂੰ ਸਮਝੋ। ਸ਼ੱਕੀ ਦਾਅਵਿਆਂ 'ਤੇ ਸਵਾਲ ਚੁੱਕੋ। ਸਹੀ ਅਤੇ ਸੁਰੱਖਿਅਤ ਫ਼ੈਸਲੇ ਲਓ।",
      primaryCta: "ਸਿੱਖਣਾ ਸ਼ੁਰੂ ਕਰੋ",
      secondaryCta: "ਅਰਥਮਿੱਤਰ ਨੂੰ ਪੁੱਛੋ",
      trustBadge1: "SEBI ਨਿਵੇਸ਼ਕ ਚਾਰਟਰ ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ",
      trustBadge2: "ਕੋਈ ਪ੍ਰੋਡਕਟ ਵਿਕਰੀ ਨਹੀਂ · 100% ਨਿਰਪੱਖ",
      trustBadge3: "13 ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਉਪਲਬਧ",
      stat1Label: "ਰਿਟੇਲ ਨਿਵੇਸ਼ਕ",
      stat1Desc: "ਡੀਮੈਟ ਖਾਤੇ ਵਧੇ ਹਨ, ਪਰ ਅਸਲ ਵਿੱਤੀ ਸਿੱਖਿਆ ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਲੋੜ ਹੈ।",
      stat2Label: "SEBI ਰਿਪੋਰਟ",
      stat2Desc: "F&O ਟਰੇਡਿੰਗ ਵਿੱਚ 93% ਲੋਕ ਪੂੰਜੀ ਗੁਆ ਲੈਂਦੇ ਹਨ। ਅਸੀਂ ਸੁਰੱਖਿਅਤ ਨਿਵੇਸ਼ ਸਿਖਾਉਂਦੇ ਹਾਂ।",
      stat3Label: "ਮਾਸਿਕ ਅਨੁਸ਼ਾਸਨ",
      stat3Desc: "ਹਰ ਮਹੀਨੇ ਭਾਰਤੀ ਪਰਿਵਾਰ ਅਨੁਸ਼ਾਸਿਤ SIP ਰਾਹੀਂ ਆਪਣੀ ਦੌਲਤ ਵਧਾ ਰਹੇ ਹਨ।",
    },
    features: {
      sectionTitle: "ਵਿੱਤੀ ਆਜ਼ਾਦੀ ਦੇ 3 ਮਜ਼ਬੂਤ ਥੰਮ੍ਹ",
      sectionSubtitle: "ਤੁਹਾਡੀ ਮਿਹਨਤ ਦੀ ਕਮਾਈ ਨੂੰ ਠੱਗੀਆਂ ਤੋਂ ਬਚਾਉਣ ਅਤੇ ਲੰਬੇ ਸਮੇਂ ਦੀ ਦੌਲਤ ਬਣਾਉਣ ਲਈ ਸਰਲ ਸਾਧਨ।",
      tutorCard: {
        title: "ਅਰਥਮਿੱਤਰ — AI ਫ਼ਾਈਨਾਂਸ ਟਿਊਟਰ",
        description: "ਸਰਲ ਪੰਜਾਬੀ ਵਿੱਚ ਕੋਈ ਵੀ ਸਵਾਲ ਪੁੱਛੋ। 'SIP ਕੀ ਹੈ?' ਤੋਂ ਲੈ ਕੇ ਮਹਿੰਗਾਈ ਦੇ ਅਸਰ ਤੱਕ ਸਪਸ਼ਟ ਜਵਾਬ।",
        cta: "ਅਰਥਮਿੱਤਰ ਨਾਲ ਗੱਲ ਕਰੋ",
      },
      claimCard: {
        title: "ਵਿੱਤੀ ਦਾਅਵਾ ਚੈੱਕਰ",
        description: "ਵਟਸਐਪ ਜਾਂ ਟੈਲੀਗ੍ਰਾਮ 'ਤੇ 'ਗਾਰੰਟੀਸ਼ੁਦਾ ਮੁਨਾਫ਼ੇ' ਦੇ ਝੂਠੇ ਦਾਅਵਿਆਂ ਨੂੰ ਸਾਡੇ ਸਿਸਟਮ ਰਾਹੀਂ ਪਰਖੋ।",
        cta: "ਦਾਅਵਾ ਪਰਖੋ",
      },
      learnCard: {
        title: "ਲਰਨਿੰਗ ਹੱਬ",
        description: "ਬੱਚਤ, ਮਿਊਚਲ ਫ਼ੰਡ ਅਤੇ ਰਿਸਕ ਮੈਨੇਜਮੈਂਟ ਦੇ ਆਸਾਨ ਪਾਠ ਅਤੇ ਕੁਇਜ਼ ਰਾਹੀਂ ਆਪਣੀ ਸਮਝ ਪਰਖੋ।",
        cta: "ਪਾਠ ਦੇਖੋ",
      },
    },
    topics: {
      sectionTitle: "ਨਵੇਂ ਨਿਵੇਸ਼ਕਾਂ ਲਈ ਬੁਨਿਆਦੀ ਵਿਸ਼ੇ",
      sectionSubtitle: "ਮਾਰਕੀਟ ਵਿੱਚ ₹1 ਲਗਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਹਰੇਕ ਨਾਗਰਿਕ ਨੂੰ ਇਹ 6 ਨਿਯਮ ਜਾਣਨੇ ਚਾਹੀਦੇ ਹਨ।",
      saving: {
        title: "ਬੱਚਤ ਅਤੇ ਐਮਰਜੈਂਸੀ ਫ਼ੰਡ",
        desc: "ਘੱਟੋ-ਘੱਟ 6 ਮਹੀਨਿਆਂ ਦਾ ਖ਼ਰਚਾ ਬੱਚਤ ਖਾਤੇ ਵਿੱਚ ਰੱਖਣਾ ਤੁਹਾਡੀ ਪਹਿਲੀ ਸੁਰੱਖਿਆ ਢਾਲ ਹੈ।",
      },
      inflation: {
        title: "ਮਹਿੰਗਾਈ ਅਤੇ ਖ਼ਰੀਦ ਸ਼ਕਤੀ",
        desc: "ਨਕਦ ਪੈਸਾ ਰੱਖਣ ਨਾਲ ਮਹਿੰਗਾਈ ਦੇ ਕਾਰਨ ਉਸਦੀ ਖ਼ਰੀਦ ਸ਼ਕਤੀ ਹਰ ਸਾਲ ਕਿਵੇਂ ਘੱਟ ਜਾਂਦੀ ਹੈ।",
      },
      stocks: {
        title: "ਸ਼ੇਅਰ ਬਾਜ਼ਾਰ ਅਤੇ ਹਿੱਸੇਦਾਰੀ",
        desc: "ਸ਼ੇਅਰ ਖ਼ਰੀਦਣਾ ਭਾਰਤੀ ਕੰਪਨੀ ਵਿੱਚ ਹਿੱਸੇਦਾਰ ਬਣਨਾ ਹੈ, ਕੋਈ ਜੂਆ ਜਾਂ ਲਾਟਰੀ ਨਹੀਂ।",
      },
      mutual_funds: {
        title: "ਮਿਊਚਲ ਫ਼ੰਡ ਅਤੇ SIP",
        desc: "ਹਰ ਮਹੀਨੇ ਥੋੜ੍ਹੀ-ਥੋੜ੍ਹੀ ਰਕਮ ਜੋੜ ਕੇ ਲੰਬੇ ਸਮੇਂ ਵਿੱਚ ਵੱਡੀ ਦੌਲਤ ਕਿਵੇਂ ਬਣਦੀ ਹੈ।",
      },
      risk: {
        title: "ਨਿਵੇਸ਼ ਜੋਖਮ ਅਤੇ ਵਿਭਿੰਨਤਾ",
        desc: "ਜਿੱਥੇ ਵੱਧ ਰਿਟਰਨ ਦੀ ਉਮੀਦ ਹੁੰਦੀ ਹੈ, ਉੱਥੇ ਜੋਖਮ ਵੀ ਵੱਧ ਹੁੰਦਾ ਹੈ। ਸਾਰੇ ਆਂਡੇ ਇੱਕ ਟੋਕਰੀ ਵਿੱਚ ਨਾ ਰੱਖੋ।",
      },
      fraud: {
        title: "ਧੋਖਾਧੜੀ ਤੋਂ ਬਚਾਅ",
        desc: "ਪੋਂਜ਼ੀ ਸਕੀਮਾਂ, ਨਕਲੀ ਟੈਲੀਗ੍ਰਾਮ ਟਿਪਸ ਅਤੇ ਫ਼ਰਜ਼ੀ ਟਰੇਡਿੰਗ ਐਪਸ ਦੇ ਜਾਲ ਤੋਂ ਬਚੋ।",
      },
      viewModule: "ਮੌਡਿਊਲ ਖੋਲ੍ਹੋ",
    },
    simulator: {
      title: "ਚੱਕਰਵਰਧੀ ਵਿਆਜ (Compounding) ਅਤੇ ਮਹਿੰਗਾਈ",
      subtitle: "ਹਰ ਮਹੀਨੇ ਨਿਯਮਿਤ SIP ਕਰਨ ਅਤੇ ਨਕਦ ਰੱਖਣ ਵਿੱਚ 6% ਮਹਿੰਗਾਈ ਕਾਰਨ ਪੈਣ ਵਾਲਾ ਫ਼ਰਕ ਦੇਖੋ।",
      monthlyInvestment: "ਮਹੀਨਾਵਾਰ ਨਿਵੇਸ਼ (ਰੁਪਏ)",
      investmentPeriod: "ਸਮਾਂ (ਸਾਲ)",
      expectedReturn: "ਸੰਭਾਵਿਤ ਰਿਟਰਨ (ਨਿਫ਼ਟੀ 50 ਔਸਤ)",
      inflationRate: "ਮਹਿੰਗਾਈ ਦਰ",
      investedAmount: "ਤੁਹਾਡੇ ਵੱਲੋਂ ਜਮ੍ਹਾਂ ਕੀਤੀ ਕੁੱਲ ਰਕਮ",
      compoundedValue: "SIP ਰਾਹੀਂ ਬਣਨ ਵਾਲਾ ਅੰਦਾਜ਼ਨ ਫ਼ੰਡ",
      cashValueErosion: "ਮਹਿੰਗਾਈ ਤੋਂ ਬਾਅਦ ਨਕਦ ਪੈਸੇ ਦੀ ਅਸਲ ਖ਼ਰੀਦ ਸ਼ਕਤੀ",
      insight: "ਮੁੱਖ ਸਿੱਖਿਆ",
      insightText: "ਚੱਕਰਵਰਧੀ ਵਿਆਜ ਵਿੱਚ ਸਮਾਂ ਸਭ ਤੋਂ ਵੱਡਾ ਜਾਦੂਗਰ ਹੈ। 15-20 ਸਾਲਾਂ ਵਿੱਚ ਤੁਹਾਡਾ ਮੁਨਾਫ਼ਾ ਮੂਲ ਨਾਲੋਂ ਕਈ ਗੁਣਾ ਵੱਧ ਜਾਂਦਾ ਹੈ (72 ਦਾ ਨਿਯਮ)।",
    },
    resources: {
      sectionTitle: "ਭਰੋਸੇਮੰਦ ਅਤੇ ਸਰਕਾਰੀ ਸਰੋਤ",
      sectionSubtitle: "ਕਿਸੇ ਵੀ ਵਿੱਤੀ ਨਿਯਮ ਜਾਂ ਕੰਪਨੀ ਦੀ ਸੱਚਾਈ ਹਮੇਸ਼ਾ ਭਾਰਤ ਦੀਆਂ ਅਧਿਕਾਰਤ ਸੰਸਥਾਵਾਂ ਤੋਂ ਜਾਂਚੋ।",
      sebiTitle: "SEBI ਇਨਵੈਸਟਰ ਚਾਰਟਰ ਅਤੇ SCORES",
      sebiDesc: "ਨਿਵੇਸ਼ਕਾਂ ਦੇ ਅਧਿਕਾਰ ਅਤੇ ਆਨਲਾਈਨ ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰਨ ਲਈ ਅਧਿਕਾਰਤ ਪੋਰਟਲ।",
      rbiTitle: "ਆਰਬੀਆਈ ਕਹਿੰਦਾ ਹੈ (RBI Kehta Hai)",
      rbiDesc: "ਫ਼ਰਜ਼ੀ ਲੋਨ ਐਪਸ ਅਤੇ ਗ਼ੈਰ-ਕਾਨੂੰਨੀ ਜਮ੍ਹਾਂ ਸਕੀਮਾਂ ਖ਼ਿਲਾਫ਼ ਜਾਗਰੂਕਤਾ ਮੁਹਿੰਮ।",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "ਮਿਊਚਲ ਫ਼ੰਡ ਐਸੋਸੀਏਸ਼ਨ ਵੱਲੋਂ ਚਲਾਈ ਗਈ ਨਿਵੇਸ਼ਕ ਜਾਗਰੂਕਤਾ।",
      bseNseTitle: "NSE & BSE ਇਨਵੈਸਟਰ ਪ੍ਰੋਟੈਕਸ਼ਨ ਫ਼ੰਡ",
      bseNseDesc: "ਭਾਰਤ ਦੇ ਪ੍ਰਮੁੱਖ ਸਟਾਕ ਐਕਸਚੇਂਜਾਂ ਵੱਲੋਂ ਨਿਵੇਸ਼ਕ ਸੁਰੱਖਿਆ ਸਿਖਲਾਈ।",
    },
    footer: {
      disclaimerTitle: "ਕਾਨੂੰਨੀ ਵਿੱਦਿਅਕ ਬੇਦਾਅਵਾ",
      disclaimerText: "ਅਰਥ ਸਾਰਥੀ ਸਿਰਫ਼ ਵਿੱਤੀ ਸਾਖਰਤਾ ਅਤੇ ਸਿੱਖਿਆ ਦੇ ਮਕਸਦ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ। ਅਸੀਂ ਕੋਈ ਸਟਾਕ ਟਿਪ ਜਾਂ ਨਿਵੇਸ਼ ਸਲਾਹ ਨਹੀਂ ਦਿੰਦੇ।",
      copyright: "ਅਰਥ ਸਾਰਥੀ — ਭਾਰਤੀ ਨਾਗਰਿਕਾਂ ਦੇ ਵਿੱਤੀ ਸਸ਼ਕਤੀਕਰਨ ਲਈ ਸਮਰਪਿਤ।",
      quickLinks: "ਤੁਰੰਤ ਲਿੰਕ",
      authorities: "ਰੈਗੂਲੇਟਰੀ ਅਥਾਰਟੀਆਂ",
      reportFrauds: "ਸਾਈਬਰ ਧੋਖਾਧੜੀ ਹੈਲਪਲਾਈਨ: 1930 (ਨੈਸ਼ਨਲ ਸਾਈਬਰ ਕ੍ਰਾਈਮ ਪੋਰਟਲ)",
    },
  },

  or: {
    brandName: "ଅର୍ଥ ସାରଥୀ",
    brandTagline: "ଭାରତ ପାଇଁ ସରଳ ଓ ନିରାପଦ ନିବେଶ ଶିକ୍ଷା",
    tutorName: "ଅର୍ଥମିତ୍ର",
    tutorSubtitle: "ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ ଆର୍ଥିକ ଶିକ୍ଷା ସାଥୀ",
    nav: {
      home: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
      learn: "ଲର୍ଣ୍ଣିଂ ହବ୍",
      tutor: "ଅର୍ଥମିତ୍ର",
      claims: "ଦାବି ଯାଞ୍ଚ",
      startLearning: "ଶିଖିବା ଆରମ୍ଭ କରନ୍ତୁ",
      askAi: "ଅର୍ଥମିତ୍ରଙ୍କୁ ପଚାରନ୍ତୁ",
      selectLanguage: "ଭାଷା ବାଛନ୍ତୁ",
    },
    hero: {
      kicker: "୧୪୦ କୋଟି ଭାରତୀୟ ନାଗରିକଙ୍କ ପାଇଁ ମାଗଣା ଆର୍ଥିକ ଶିକ୍ଷା",
      title: "ଭାରତ ପାଇଁ ନିବେଶ ଏବେ ହେଲା ସହଜ।",
      subtitle: "ଟଙ୍କାର ମୂଲ୍ୟ ବୁଝନ୍ତୁ। ମିଥ୍ୟା ଦାବି ଉପରେ ପ୍ରଶ୍ନ କରନ୍ତୁ। ସଠିକ୍ ଓ ନିରାପଦ ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ।",
      primaryCta: "ଶିଖିବା ଆରମ୍ଭ କରନ୍ତୁ",
      secondaryCta: "ଅର୍ଥମିତ୍ରଙ୍କୁ ପଚାରନ୍ତୁ",
      trustBadge1: "SEBI ନିବେଶକ ଚାର୍ଟର ଅନୁଯାୟୀ",
      trustBadge2: "କୌଣସି ପ୍ରଡକ୍ଟ ବିକ୍ରି ନାହିଁ · ୧୦୦% ନିରପେକ୍ଷ",
      trustBadge3: "୧୩ଟି ଭାରତୀୟ ଭାଷାରେ ଉପଲବ୍ଧ",
      stat1Label: "ଖୁଚୁରା ନିବେଶକ",
      stat1Desc: "ଡିମାଟ୍ ଆକାଉଣ୍ଟ ସଂଖ୍ୟା ବୃଦ୍ଧି ପାଇଛି, କିନ୍ତୁ ସଠିକ୍ ଆର୍ଥିକ ଶିକ୍ଷା ସବୁଠାରୁ ଜରୁରୀ।",
      stat2Label: "SEBI ରିପୋର୍ଟ",
      stat2Desc: "F&O ଟ୍ରେଡିଂରେ ୯୩% ଲୋକ ଟଙ୍କା ହରାନ୍ତି। ଆମେ ସୁରକ୍ଷିତ ସମ୍ପତ୍ତି ସୃଷ୍ଟି ଶିଖାଉ।",
      stat3Label: "ମାସିକ ଶୃଙ୍ଖଳା",
      stat3Desc: "ପ୍ରତି ମାସରେ ଭାରତୀୟ ପରିବାର ନିୟମିତ SIP ମାଧ୍ୟମରେ ସମ୍ପତ୍ତି ବଢାଉଛନ୍ତି।",
    },
    features: {
      sectionTitle: "ଆର୍ଥିକ ସ୍ୱାଧୀନତାର ୩ଟି ମୁଖ୍ୟ ସ୍ତମ୍ଭ",
      sectionSubtitle: "ଆପଣଙ୍କ କଷ୍ଟଲବ୍ଧ ଉପାର୍ଜନକୁ ଠକେଇରୁ ରକ୍ଷା କରିବା ଏବଂ ଦୀର୍ଘକାଳୀନ ସମ୍ପତ୍ତି ଗଠନ କରିବା ପାଇଁ ସରଳ ଉପାୟ।",
      tutorCard: {
        title: "ଅର୍ଥମିତ୍ର — AI ଫାଇନାନ୍ସ ଟ୍ୟୁଟର",
        description: "ସରଳ ଓଡ଼ିଆରେ ଯେକୌଣସି ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ। 'SIP କ’ଣ?' ଠାରୁ ଆରମ୍ଭ କରି ମୁଦ୍ରାସ୍ଫୀତି ପର୍ଯ୍ୟନ୍ତ ସ୍ପଷ୍ଟ ଉତ୍ତର।",
        cta: "ଅର୍ଥମିତ୍ରଙ୍କ ସହ କଥା ହୁଅନ୍ତୁ",
      },
      claimCard: {
        title: "ଆର୍ଥିକ ଦାବି ପରୀକ୍ଷକ",
        description: "ହ୍ୱାଟ୍ସଆପ୍ କିମ୍ବା ଟେଲିଗ୍ରାମରେ ମିଳୁଥିବା 'ନିଶ୍ଚିତ ଲାଭ'ର ପ୍ରଲୋଭନକୁ ଆମ ଟୁଲ୍ ମାଧ୍ୟମରେ ଯାଞ୍ଚ କରନ୍ତୁ।",
        cta: "ଦାବି ଯାଞ୍ଚ କରନ୍ତୁ",
      },
      learnCard: {
        title: "ଲର୍ଣ୍ଣିଂ ହବ୍",
        description: "ସଞ୍ଚୟ, ମ୍ୟୁଚୁଆଲ୍ ଫଣ୍ଡ ଏବଂ ରିସ୍କ ମ୍ୟାନେଜମେଣ୍ଟ ବିଷୟରେ ସରଳ ପାଠ ଏବଂ କୁଇଜ୍।",
        cta: "ପାଠ ଦେଖନ୍ତୁ",
      },
    },
    topics: {
      sectionTitle: "ନୂତନ ନିବେଶକଙ୍କ ପାଇଁ ମୌଳିକ ବିଷୟ",
      sectionSubtitle: "ବଜାରରେ ₹୧ ଲଗାଇବା ପୂର୍ବରୁ ପ୍ରତ୍ୟେକ ନାଗରିକଙ୍କୁ ଏହି ୬ଟି ମୂଳ ନିୟମ ଜାଣିବା ଆବଶ୍ୟକ।",
      saving: {
        title: "ସଞ୍ଚୟ ଏବଂ ଜରୁରୀକାଳୀନ ପାଣ୍ଠି",
        desc: "ଅତି କମରେ ୬ ମାସର ଖର୍ଚ୍ଚ ସଞ୍ଚୟ ଖାତାରେ ରଖିବା ଆପଣଙ୍କ ପ୍ରଥମ ଆର୍ଥିକ ଢାଲ।",
      },
      inflation: {
        title: "ମୁଦ୍ରାସ୍ଫୀତି ଏବଂ କ୍ରୟ କ୍ଷମତା",
        desc: "ଟଙ୍କା ନଗଦ ରଖିଲେ ମୁଦ୍ରାସ୍ଫୀତି ଯୋଗୁଁ ତାର କ୍ରୟ କ୍ଷମତା ପ୍ରତିବର୍ଷ କିପରି ହ୍ରାସ ପାଏ।",
      },
      stocks: {
        title: "ଷ୍ଟକ୍ ମାର୍କେଟ୍ ଏବଂ ମାଲିକାନା",
        desc: "ଶେୟାର କିଣିବା ମାନେ ବୃଦ୍ଧି ପାଉଥିବା ଭାରତୀୟ ବ୍ୟବସାୟରେ ଅଂଶୀଦାର ହେବା, କୌଣସି ଜୁଆ ନୁହେଁ।",
      },
      mutual_funds: {
        title: "ମ୍ୟୁଚୁଆଲ୍ ଫଣ୍ଡ ଏବଂ SIP",
        desc: "ପ୍ରତି ମାସରେ ଶୃଙ୍ଖଳିତ SIP ମାଧ୍ୟମରେ ଦୀର୍ଘକାଳୀନ ସମ୍ପତ୍ତି କିପରି ଗଢିହୁଏ।",
      },
      risk: {
        title: "ନିବେଶ ବିପଦ ଏବଂ ବିବିଧତା",
        desc: "ଯେଉଁଠି ଅଧିକ ଲାଭର ଆଶା ଥାଏ ସେଠି ଅଧିକ ବିପଦ ମଧ୍ୟ ଥାଏ। ସମସ୍ତ ଟଙ୍କା ଗୋଟିଏ ସ୍ଥାନରେ ରଖନ୍ତୁ ନାହିଁ।",
      },
      fraud: {
        title: "ଠକେଇ ସଚେତନତା",
        desc: "ପୋଞ୍ଜି ସ୍କିମ୍, ନକଲି ଟେଲିଗ୍ରାମ୍ ଟିପ୍ସ ଏବଂ ଅଣପଞ୍ଜୀକୃତ ଆପ୍ସରୁ ନିଜକୁ ସୁରକ୍ଷିତ ରଖନ୍ତୁ।",
      },
      viewModule: "ମଡ୍ୟୁଲ୍ ଖୋଲନ୍ତୁ",
    },
    simulator: {
      title: "ଚକ୍ରବୃଦ୍ଧି ସୁଧ (Compounding) ଓ ମୁଦ୍ରାସ୍ଫୀତି କାଲକୁଲେଟର",
      subtitle: "ପ୍ରତି ମାସ ନିୟମିତ SIP କରିବା ଏବଂ କେବଳ ନଗଦ ଟଙ୍କା ରଖିବା ମଧ୍ୟରେ ୬% ମୁଦ୍ରାସ୍ଫୀତିର ପ୍ରଭାବ ଦେଖନ୍ତୁ।",
      monthlyInvestment: "ମାସିକ ନିବେଶ (ଟଙ୍କା)",
      investmentPeriod: "ସମୟସୀମା (ବର୍ଷ)",
      expectedReturn: "ସମ୍ଭାବ୍ୟ ରିଟର୍ଣ୍ଣ (ନିଫ୍ଟି ୫୦ ହାରାହାରି)",
      inflationRate: "ମୁଦ୍ରାସ୍ଫୀତି ହାର",
      investedAmount: "ଆପଣଙ୍କ ଦ୍ୱାରା ଜମା ହୋଇଥିବା ମୋଟ ଟଙ୍କା",
      compoundedValue: "SIP ମାଧ୍ୟମରେ ମିଳିବାକୁ ଥିବା ଆନୁମାନିକ ପାଣ୍ଠି",
      cashValueErosion: "ମୁଦ୍ରାସ୍ଫୀତି ପରେ ନଗଦ ଟଙ୍କାର ପ୍ରକୃତ କ୍ରୟ କ୍ଷମତା",
      insight: "ମୁଖ୍ୟ ଶିକ୍ଷା",
      insightText: "ଚକ୍ରବୃଦ୍ଧି ସୁଧରେ ସମୟ ହିଁ ସବୁଠାରୁ ବଡ଼ ଶକ୍ତି। ୧୫-୨୦ ବର୍ଷରେ ଆପଣଙ୍କ ଲାଭ ମୂଳ ଧନଠାରୁ କେତେ ଗୁଣ ବଢ଼ିଯାଏ (୭୨ ର ନିୟମ)।",
    },
    resources: {
      sectionTitle: "ବିଶ୍ୱସ୍ତ ଏବଂ ସରକାରୀ ଉତ୍ସ",
      sectionSubtitle: "ଯେକୌଣସି ଆର୍ଥିକ ନିୟମର ସତ୍ୟତା ସରକାରୀ ସଂସ୍ଥା ମାଧ୍ୟମରେ ହିଁ ଯାଞ୍ଚ କରନ୍ତୁ।",
      sebiTitle: "SEBI ନିବେଶକ ଚାର୍ଟର ଓ SCORES",
      sebiDesc: "ନିବେଶକଙ୍କ ଅଧିକାର ଏବଂ ଅନଲାଇନ୍ ଅଭିଯୋଗ ପାଇଁ ଅଫିସିଆଲ୍ ପୋର୍ଟାଲ୍।",
      rbiTitle: "ଆରବିଆଇ କହୁଛି (RBI Kehta Hai)",
      rbiDesc: "ନକଲି ଋଣ ଆପ୍ ଏବଂ ବେଆଇନ ଜମା ଯୋଜନା ବିରୋଧରେ ସଚେତନତା ଅଭିଯାନ।",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "ମ୍ୟୁଚୁଆଲ୍ ଫଣ୍ଡ ସଂଘ ଦ୍ୱାରା ପରିଚାଳିତ ନିବେଶକ ଶିକ୍ଷା।",
      bseNseTitle: "NSE & BSE ନିବେଶକ ସୁରକ୍ଷା ପାଣ୍ଠି",
      bseNseDesc: "ଭାରତର ପ୍ରମୁଖ ଷ୍ଟକ୍ ଏକ୍ସଚେଞ୍ଜ ଦ୍ୱାରା ନିବେଶକ ସୁରକ୍ଷା ପଦକ୍ଷେପ।",
    },
    footer: {
      disclaimerTitle: "ଆଇନଗତ ଶିକ୍ଷାମୂଳକ ଡିସକ୍ଲେମର",
      disclaimerText: "ଅର୍ଥ ସାରଥୀ କେବଳ ଆର୍ଥିକ ସଚେତନତା ପାଇଁ ଉଦ୍ଦିଷ୍ଟ। ଆମେ କୌଣସି ଷ୍ଟକ୍ ପରାମର୍ଶ ଦେଉନାହୁଁ।",
      copyright: "ଅର୍ଥ ସାରଥୀ — ଭାରତୀୟ ନାଗରିକଙ୍କ ଆର୍ଥିକ ସଶକ୍ତୀକରଣ ପାଇଁ ଉତ୍ସର୍ଗୀକୃତ।",
      quickLinks: "ଦ୍ରୁତ ଲିଙ୍କସ୍",
      authorities: "ନିୟାମକ ସଂସ୍ଥା",
      reportFrauds: "ସାଇବର ଠକେଇ ହେଲ୍ପଲାଇନ: 1930 (ଜାତୀୟ ସାଇବର ଅପରାଧ ପୋର୍ଟାଲ୍)",
    },
  },

  ur: {
    brandName: "ارتھ سارتھی",
    brandTagline: "بھارت کے لیے سرمایہ کاری کی آسان تعلیم",
    tutorName: "ارتھ مترا",
    tutorSubtitle: "آپ کا مخلص مالیاتی تعلیمی ساتھی",
    nav: {
      home: "ہوم",
      learn: "لرننگ ہب",
      tutor: "ارتھ مترا",
      claims: "فراڈ چیکر",
      startLearning: "سیکھنا شروع کریں",
      askAi: "ارتھ مترا سے پوچھیں",
      selectLanguage: "زبان منتخب کریں",
    },
    hero: {
      kicker: "140 کروڑ ہندوستانی شہریوں کے لیے مفت مالیاتی تعلیم",
      title: "بھارت کے لیے سرمایہ کاری اب آسان۔",
      subtitle: "پیسے کو سمجھیں۔ مشتبہ دعووں پر سوال اٹھائیں۔ درست اور محفوظ فیصلے لیں۔",
      primaryCta: "سیکھنا شروع کریں",
      secondaryCta: "ارتھ مترا سے پوچھیں",
      trustBadge1: "SEBI انویسٹر چارٹر کے عین مطابق",
      trustBadge2: "کوئی پراڈکٹ فروخت نہیں · 100% غیر جانبدار",
      trustBadge3: "13 ہندوستانی زبانوں میں دستیاب",
      stat1Label: "خردہ سرمایہ کار",
      stat1Desc: "ڈی میٹ کھاتوں میں ریکارڈ اضافہ، مگر درست مالیاتی تعلیم کی سب سے زیادہ ضرورت ہے۔",
      stat2Label: "SEBI کی رپورٹ",
      stat2Desc: "F&O ٹریڈنگ میں 93% افراد نقصان اٹھاتے ہیں۔ ہم محفوظ دولت بنانا سکھاتے ہیں۔",
      stat3Label: "ماہانہ نظم و ضبط",
      stat3Desc: "ہر ماہ ہندوستانی خاندان باقاعدہ SIP کے ذریعے اپنی دولت بڑھا رہے ہیں۔",
    },
    features: {
      sectionTitle: "مالیاتی آزادی کے 3 مضبوط ستون",
      sectionSubtitle: "اپنی محنت کی کمائی کو دھوکہ دہی سے بچانے اور دیرپا دولت بنانے کے آسان ٹولز۔",
      tutorCard: {
        title: "ارتھ مترا — AI فنانس ٹیوٹر",
        description: "آسان اردو میں کوئی بھی مالیاتی سوال پوچھیں۔ 'SIP کیا ہے؟' سے لے کر مہنگائی کے اثرات تک واضح جوابات۔",
        cta: "ارتھ مترا سے بات کریں",
      },
      claimCard: {
        title: "مالیاتی کلیم چیکر",
        description: "واٹس ایپ یا ٹیلیگرام پر 'گارنٹی شدہ منافع' کے جھوٹے دعووں کو ہمارے سسٹم سے جانچیں۔",
        cta: "دعویٰ جانچیں",
      },
      learnCard: {
        title: "لرننگ ہب",
        description: "بچت، میوچل فنڈز اور رسک مینجمنٹ کے آسان اسباق اور کوئز کے ذریعے اپنی معلومات بڑھائیں۔",
        cta: "اسباق دیکھیں",
      },
    },
    topics: {
      sectionTitle: "نئے سرمایہ کاروں کے لیے بنیادی موضوعات",
      sectionSubtitle: "مارکیٹ میں ایک روپیہ لگانے سے پہلے ہر شہری کے لیے ان 6 بنیادی باتوں کا جاننا ضروری ہے۔",
      saving: {
        title: "بچت اور ایمرجنسی فنڈ",
        desc: "کم از کم 6 ماہ کے اخراجات سیونگز اکاؤنٹ میں رکھنا آپ کی پہلی مالیاتی ڈھال ہے۔",
      },
      inflation: {
        title: "مہنگائی اور قوت خرید",
        desc: "نقدی کو یونہی رکھنے سے مہنگائی کی وجہ سے اس کی حقیقی قوت خرید کس طرح کم ہوتی ہے۔",
      },
      stocks: {
        title: "اسٹاک مارکیٹ اور ملکیت",
        desc: "شیئرز خریدنے کا مطلب ہندوستانی کاروبار میں حصہ دار بننا ہے، کوئی جوا نہیں۔",
      },
      mutual_funds: {
        title: "میوچل فنڈز اور SIP",
        desc: "ماہانہ باقاعدہ SIP کے ذریعے طویل مدت میں بڑی دولت کیسے بنتی ہے۔",
      },
      risk: {
        title: "سرمایہ کاری کا رسک اور تنوع",
        desc: "جہاں زیادہ منافع کی امید ہو وہاں خطرہ بھی زیادہ ہوتا ہے۔ سارے انڈے ایک ٹوکری میں نہ رکھیں۔",
      },
      fraud: {
        title: "دھوکہ دہی سے ہوشیاری",
        desc: "پونزی اسکیموں، ٹیلیگرام ٹپس اور جعلی ٹریڈنگ ایپس کے جال سے بچیں۔",
      },
      viewModule: "ماڈیول کھولیں",
    },
    simulator: {
      title: "مرکب منافع (Compounding) اور مہنگائی کی حقیقت",
      subtitle: "ماہانہ باقاعدہ SIP اور صرف نقد رقم رکھنے میں 6% مہنگائی کی وجہ سے آنے والا فرق دیکھیں۔",
      monthlyInvestment: "ماہانہ سرمایہ کاری (روپے)",
      investmentPeriod: "مدت (سال)",
      expectedReturn: "متوقع ریٹرن (निفٹی 50 اوسط)",
      inflationRate: "مہنگائی کی شرح",
      investedAmount: "آپ کی کل جمع کردہ رقم",
      compoundedValue: "SIP کے ذریعے بننے والا تخمینہ فنڈ",
      cashValueErosion: "مہنگائی کے بعد نقد رقم کی اصل قوت خرید",
      insight: "اہم سبق",
      insightText: "مرکب منافع میں وقت سب سے بڑا جادوگر ہے۔ 15-20 سالوں میں آپ کا منافع اصل رقم سے کئی گنا بڑھ جاتا ہے (72 کا اصول)۔",
    },
    resources: {
      sectionTitle: "قابل اعتماد اور سرکاری ذرائع",
      sectionSubtitle: "کسی بھی مالیاتی اصول کی تصدیق ہمیشہ بھارت کے سرکاری اداروں سے کریں۔",
      sebiTitle: "SEBI انویسٹر چارٹر اور SCORES",
      sebiDesc: "سرمایہ کاروں کے حقوق اور آن لائن شکایات درج کرنے کا سرکاری پورٹل۔",
      rbiTitle: "آر بی آئی کہتا ہے (RBI Kehta Hai)",
      rbiDesc: "جعلی لون ایپس اور غیر قانونی اسکیموں کے خلاف آگاہی مہم۔",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "میوچل فنڈ ایسوسی ایشن کے زیر اہتمام آگاہی۔",
      bseNseTitle: "NSE اور BSE انویسٹر پروٹیکشن فنڈز",
      bseNseDesc: "اسٹاک ایکسچینجز کی جانب سے سرمایہ کاروں کی حفاظت کے اقدامات۔",
    },
    footer: {
      disclaimerTitle: "قانونی تعلیمی ڈس کلیمر",
      disclaimerText: "ارتھ سارتھی صرف مالیاتی آگاہی اور تعلیم کے لیے بنایا گیا ہے۔ ہم کوئی اسٹاک ٹپ یا سرمایہ کاری کا مشورہ نہیں دیتے ہیں۔",
      copyright: "ارتھ سارتھی — ہندوستانی شہریوں کے مالیاتی استحکام کے لیے وقف۔",
      quickLinks: "فوری روابط",
      authorities: "ریگولیٹری پورٹلز",
      reportFrauds: "سائبر فراڈ ہیلپ لائن: 1930 (نیشنل سائبر کرائم پورٹل)",
    },
  },

  as: {
    brandName: "অৰ্থ সাৰথী",
    brandTagline: "ভাৰতৰ বাবে সহজ আৰু সুৰক্ষিত বিনিয়োগ শিক্ষা",
    tutorName: "অৰ্থমিত্ৰ",
    tutorSubtitle: "আপোনাৰ বিশ্বাসী আৰ্থিক শিক্ষাৰ সংগী",
    nav: {
      home: "মুখ্য পৃষ্ঠা",
      learn: "লাৰ্নিং হাব",
      tutor: "অৰ্থমিত্ৰ",
      claims: "দাবী পৰীক্ষক",
      startLearning: "শিকা আৰম্ভ কৰক",
      askAi: "অৰ্থমিত্ৰক সোধক",
      selectLanguage: "ভাষা বাছক",
    },
    hero: {
      kicker: "১৪০ কোটি ভাৰতীয় নাগৰিকৰ বাবে বিনামূলীয়া আৰ্থিক শিক্ষা",
      title: "ভাৰতৰ বাবে বিনিয়োগ এতিয়া সহজ।",
      subtitle: "টকাৰ মূল্য বুজক। ভুৱা দাবীক প্ৰশ্ন কৰক। সঠিক আৰু সুৰক্ষিত সিদ্ধান্ত লওক।",
      primaryCta: "শিকা আৰম্ভ কৰক",
      secondaryCta: "অৰ্থমিত্ৰক সোধক",
      trustBadge1: "SEBI বিনিয়োগকাৰী চাৰ্টাৰৰ নীতি অনুসৰি",
      trustBadge2: "কোনো সামগ্ৰী বিক্ৰী নহয় · ১০০% নিৰপেক্ষ",
      trustBadge3: "১৩ টা ভাৰতীয় ভাষাত উপলব্ধ",
      stat1Label: "খুচুৰা বিনিয়োগকাৰী",
      stat1Desc: "ডিমেট একাউণ্টৰ সংখ্যা বৃদ্ধি পাইছে, কিন্তু সঠিক শিক্ষাৰ প্ৰয়োজনীয়তা সৰ্বাধিক।",
      stat2Label: "SEBI ৰ প্ৰতিবেদন",
      stat2Desc: "F&O ব্যৱসায়ত ৯৩% লোকে মূলধন হেৰুৱায়। আমি সুৰক্ষিত সম্পদ গঠন শিকাওঁ।",
      stat3Label: "মাহেকীয়া অনুশাসন",
      stat3Desc: "প্ৰতি মাহে ভাৰতীয় পৰিয়ালে শৃংখলাবদ্ধ SIP ৰ জৰিয়তে সম্পদ গঢ়ি তুলিছে।",
    },
    features: {
      sectionTitle: "আৰ্থিক স্বাধীনতাৰ ৩ টা মজবুত স্তম্ভ",
      sectionSubtitle: "আপোনাৰ কষ্টোপাৰ্জিত ধনক প্ৰৱঞ্চনাৰ পৰা ৰক্ষা কৰিবলৈ আৰু দীৰ্ঘম্যাদী সম্পদ গঢ়িবলৈ সহজ উপায়।",
      tutorCard: {
        title: "অৰ্থমিত্ৰ — AI ফাইনেন্স টিউটৰ",
        description: "সহজ অসমীয়াত যিকোনো আৰ্থিক প্ৰশ্ন সোধক। 'SIP কি?' ৰ পৰা মুদ্ৰাস্ফীতিৰ প্ৰভাৱলৈকে স্পষ্ট উত্তৰ।",
        cta: "অৰ্থমিত্ৰৰ সৈতে কথা পাতক",
      },
      claimCard: {
        title: "আৰ্থিক দাবী পৰীক্ষক",
        description: "হোৱাটছএপ বা টেলিগ্ৰামৰ 'নিশ্চিত লাভ'ৰ ভুৱা প্ৰলোভনক আমাৰ ইঞ্জিনৰ জৰিয়তে পৰীক্ষা কৰক।",
        cta: "দাবী পৰীক্ষা কৰক",
      },
      learnCard: {
        title: "লাৰ্নিং হাব",
        description: "সঞ্চয়, মিউচুৱেল ফাণ্ড আৰু ৰিস্ক ব্যৱস্থাপনাৰ সহজ পাঠ আৰু কুইজৰ জৰিয়তে জ্ঞান বৃদ্ধি কৰক।",
        cta: "পাঠসমূহ চাওক",
      },
    },
    topics: {
      sectionTitle: "নতুন বিনিয়োগকাৰীৰ বাবে প্ৰাথমিক পাঠ",
      sectionSubtitle: "বজাৰত ₹১ বিনিয়োগ কৰাৰ আগতেও প্ৰতিজন নাগৰিকে এই ৬ টা মূল নীতি জনাটো প্ৰয়োজনীয়।",
      saving: {
        title: "সঞ্চয় আৰু জৰুৰীকালীন পুঁজি",
        desc: "কমপক্ষে ৬ মাহৰ খৰচ লিকুইড ফাণ্ড বা চেভিংছ একাউণ্টত ৰখাটোৱেই আপোনাৰ প্ৰথম সুৰক্ষা কৱচ।",
      },
      inflation: {
        title: "মুদ্ৰাস্ফীতি আৰু ক্ৰয় ক্ষমতা",
        desc: "টকা নগদ পেলাই থলে মুদ্ৰাস্ফীতিৰ বাবে প্ৰতি বছৰে তাৰ প্ৰকৃত ক্ৰয় ক্ষমতা কেনেদৰে হ্ৰাস পায়।",
      },
      stocks: {
        title: "ষ্টক মাৰ্কেট আৰু মালিকীস্বত্ব",
        desc: "শ্বেয়াৰ কিনা মানে ভাৰতীয় ব্যৱসায়ত অংশীদাৰ হোৱা, কোনো জুৱা খেলা নহয়।",
      },
      mutual_funds: {
        title: "মিউচুৱেল ফাণ্ড আৰু SIP",
        desc: "মাহেকীয়া শৃংখলাবদ্ধ SIP ৰ জৰিয়তে দীৰ্ঘম্যাদী সময়ত কেনেকৈ বৃহৎ সম্পদ গঢ়িব পাৰি।",
      },
      risk: {
        title: "বিনিয়োগৰ বিপদ আৰু বৈচিত্ৰ্য",
        desc: "য’ত অধিক লাভৰ আশা থাকে তাত বিপদো অধিক হয়। সকলো টকা একে ঠাইতে বিনিয়োগ নকৰিব।",
      },
      fraud: {
        title: "প্ৰৱঞ্চনাৰ বিষয়ে সজাগতা",
        desc: "পঞ্জী আঁচনি, ভুৱা টেলিগ্ৰাম টিপছ আৰু অনিবন্ধিত ট্ৰেডিং এপৰ পৰা নিজকে বচাওক।",
      },
      viewModule: "মডিউল খোলক",
    },
    simulator: {
      title: "চক্ৰবৃদ্ধি সূত (Compounding) আৰু মুদ্ৰাস্ফীতি",
      subtitle: "মাহেকীয়া নিয়মীয়া SIP কৰা আৰু কেৱল নগদ টকা ৰখাৰ মাজত ৬% মুদ্ৰাস্ফীতিৰ পাৰ্থক্য চাওক।",
      monthlyInvestment: "মাহেকীয়া বিনিয়োগ (টকা)",
      investmentPeriod: "সময়সীমা (বছৰ)",
      expectedReturn: "সম্ভাব্য ৰিটাৰ্ণ (নিফটি ৫০ গড়)",
      inflationRate: "মুদ্ৰাস্ফীতিৰ হাৰ",
      investedAmount: "আপুনি জমা কৰা মুঠ ধন",
      compoundedValue: "SIP ৰ জৰিয়তে লাভ কৰিবলগীয়া আনুমানিক পুঁজি",
      cashValueErosion: "মুদ্ৰাস্ফীতিৰ পিছত নগদ টকাৰ প্ৰকৃত ক্ৰয় ক্ষমতা",
      insight: "মূল শিক্ষা",
      insightText: "চক্ৰবৃদ্ধিত সময় আটাইতকৈ ডাঙৰ যাদুকৰ। ১৫-২০ বছৰত আপোনাৰ লাভ মূল ধনতকৈ বহু গুণে বাঢ়ি যায় (৭২ ৰ নিয়ম)।",
    },
    resources: {
      sectionTitle: "বিশ্বস্ত আৰু চৰকাৰী উৎস",
      sectionSubtitle: "যিকোনো আৰ্থিক নিয়মৰ সত্যতা চৰকাৰী সংস্থাৰ জৰিয়তেহে পৰীক্ষা কৰক।",
      sebiTitle: "SEBI বিনিয়োগকাৰী চাৰ্টাৰ আৰু SCORES",
      sebiDesc: "বিনিয়োগকাৰীৰ অধিকাৰ আৰু অনলাইন অভিযোগ দাখিলৰ অফিচিয়েল প’ৰ্টেল।",
      rbiTitle: "আৰবিআইয়ে কৈছে (RBI Kehta Hai)",
      rbiDesc: "ভুৱা ঋণ এপ আৰু অবৈধ জমা আঁচনিৰ বিৰুদ্ধে সজাগতা অভিযান।",
      amfiTitle: "AMFI (Mutual Funds Sahi Hai)",
      amfiDesc: "মিউচুৱেল ফাণ্ড সংস্থাই চলোৱা সজাগতা কাৰ্যসূচী।",
      bseNseTitle: "NSE আৰু BSE বিনিয়োগকাৰী সুৰক্ষা পুঁজি",
      bseNseDesc: "দেশৰ শীৰ্ষ ষ্টক এক্সচেঞ্জে আগবঢ়োৱা বিনিয়োগকাৰী সুਰক্ষা ব্যৱস্থা।",
    },
    footer: {
      disclaimerTitle: "আইনগত শিক্ষামূলক দায়িত্বহীনতা",
      disclaimerText: "অৰ্থ সাৰথী কেৱল আৰ্থিক সজাগতা আৰু শিক্ষাৰ উদ্দেশ্যহে প্ৰস্তুত কৰা হৈছে। আমি কোনো ষ্টক পৰামৰ্শ নিদিওঁ।",
      copyright: "অৰ্থ সাৰথী — ভাৰতীয় নাগৰিকৰ আৰ্থিক সৱলীকৰণৰ বাবে উৎসৰ্গিত।",
      quickLinks: "দ্ৰুত লিংকসমূহ",
      authorities: "নিয়ন্ত্ৰক সংস্থাসমূহ",
      reportFrauds: "চাইবাৰ প্ৰৱঞ্চনা হেল্পলাইন: 1930 (ৰাষ্ট্ৰীয় চাইবাৰ ক্ৰাইম প’ৰ্টেল)",
    },
  },
};

export function getTranslation(lang: Language): TranslationBundle {
  return translations[lang] || translations.en;
}
