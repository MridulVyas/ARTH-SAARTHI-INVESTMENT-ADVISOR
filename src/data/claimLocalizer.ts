import { Language, ClaimVerificationResult, PresetClaim } from '../types';

export const localizedVerdictHeadlines: Record<string, Partial<Record<Language, string>>> = {
  SCAM_ALERT: {
    en: 'High-Confidence Scam Warning: Ponzi Red Flags Detected',
    hi: 'गंभीर चेतावनी: पोंजी घोटाले और अवैध स्कीम के पक्के लक्षण',
    mr: 'धोका: पोंझी योजना आणि बेकायदेशीर योजनेचे स्पष्ट संकेत',
    ta: 'எச்சரிக்கை: போன்சி மோசடி மற்றும் சட்டவிரோத திட்டத்தின் அறிகுறிகள்',
    te: 'హెచ్చరిక: పోంజీ మోసం మరియు చట్టవిరుద్ధ పథకం సంకేతాలు',
    bn: 'সতর্কতা: পনজি স্কিম এবং অবৈধ প্রকল্পের স্পষ্ট লক্ষণ',
    gu: 'ચેતવણી: પોન્ઝી કૌભાંડ અને ગેરકાયદેસર સ્કીમના સ્પષ્ટ સંકેતો',
    kn: 'ಎಚ್ಚರಿಕೆ: ಪೊಂಜಿ ಹಗರಣ ಮತ್ತು ಕಾನೂನುಬಾಹಿರ ಯೋಜನೆಯ ಲಕ್ಷಣಗಳು',
    ml: 'മുന്നറിയിപ്പ്: പോൺസി തട്ടിപ്പും അനധികൃത പദ്ധതിയും',
    pa: 'ਚੇਤਾਵਨੀ: ਪੋਂਜ਼ੀ ਘੁਟਾਲੇ ਅਤੇ ਗ਼ੈਰ-ਕਾਨੂੰਨੀ ਸਕੀਮ ਦੇ ਸਪੱਸ਼ਟ ਲੱਛਣ',
    or: 'ସତର୍କତା: ପୋଞ୍ଜି ଠକେଇ ଏବଂ ବେଆଇନ ଯୋଜନାର ସ୍ପଷ୍ଟ ସଂକେତ',
    ur: 'انتباہ: پونزی اسکیم اور غیر قانونی منصوبے کے واضح اشارے',
    as: 'সাৱধান: পঞ্জী প্ৰৱঞ্চনা আৰু অবৈধ আঁচনিৰ স্পষ্ট লক্ষণ'
  },
  HIGH_RISK: {
    en: 'Severe Risk of Permanent Capital Destruction',
    hi: 'पूंजी डूबने का अत्यधिक गंभीर जोखिम',
    mr: 'भांडवल बुडण्याचा अत्यंत गंभीर धोका',
    ta: 'மூலதன இழப்பிற்கான மிகக் கடுமையான அபாயம்',
    te: 'మూలధనం కోల్పోయే తీవ్రమైన ప్రమాదం',
    bn: 'মূলধন হারানোর অত্যন্ত গুরুতর ঝুঁকি',
    gu: 'મૂડી ડૂબવાનું અત્યંત ગંભીર જોખમ',
    kn: 'ಬಂಡವಾಳ ನಷ್ಟವಾಗುವ ಗಂಭೀರ ಅಪಾಯ',
    ml: 'മൂലധനം നഷ്ടപ്പെടാനുള്ള കടുത്ത സാധ്യത',
    pa: 'ਪੂੰਜੀ ਡੁੱਬਣ ਦਾ ਬਹੁਤ ਗੰਭੀਰ ਖ਼ਤਰਾ',
    or: 'ମୂଳଧନ ହରାଇବାର ଅତ୍ୟନ୍ତ ଗମ୍ଭୀର ବିପଦ',
    ur: 'سرمایہ ڈوبنے کا شدید خطرہ',
    as: 'মূলধন হেৰুওৱাৰ অত্যন্ত গুৰুতৰ বিপদ'
  },
  CAUTION: {
    en: 'Unverified Financial Pitch: Proceed With Extreme Caution',
    hi: 'अपुष्ट वित्तीय दावा: अत्यधिक सावधानी बरतने की आवश्यकता',
    mr: 'अपुष्ट आर्थिक दावा: अत्यंत सावधगिरी बाळगा',
    ta: 'உறுதிப்படுத்தப்படாத நிதித் திட்டம்: எச்சரிக்கையுடன் தொடரவும்',
    te: 'ధృవీకరించబడని ఆర్థిక ప్రతిపాదన: తీవ్ర జాగ్రత్త అవసరం',
    bn: 'অপ্রমাণিত আর্থিক দাবি: চরম সতর্কতা প্রয়োজন',
    gu: 'અપ્રમાણિત નાણાકીય દાવો: ભારે સાવચેતી રાખવી જરૂરી',
    kn: 'ದೃಢೀಕರಿಸದ ಆರ್ಥಿಕ ಪ್ರಸ್ತಾಪ: ತೀವ್ರ ಎಚ್ಚರಿಕೆ ವಹಿಸಿ',
    ml: 'സ്ഥിരീകരിക്കാത്ത വാഗ്ദാനം: അതീവ ജാഗ്രത പാലിക്കുക',
    pa: 'ਗ਼ੈਰ-ਪ੍ਰਮਾਣਿਤ ਵਿੱਤੀ ਦਾਅਵਾ: ਬਹੁਤ ਸਾਵਧਾਨੀ ਵਰਤੋ',
    or: 'ଅପ୍ରମାଣିତ ଆର୍ଥିକ ଦାବି: ଅତ୍ୟଧିକ ସାବଧାନତା ଆବଶ୍ୟକ',
    ur: 'غیر مصدقہ مالیاتی دعویٰ: انتہائی احتیاط برتیں',
    as: 'অপ্ৰমাণিত আৰ্থিক দাবী: অত্যন্ত সাৱধানতাৰ প্ৰয়োজন'
  },
  LEGITIMATE_BENCHMARK: {
    en: 'Realistic, Regulated, & Evidence-Based Investment Benchmark',
    hi: 'विश्वसनीय और सेबी द्वारा मान्यता प्राप्त संतुलित निवेश विकल्प',
    mr: 'विश्वासार्ह आणि सेबी मान्यताप्राप्त संतुलित गुंतवणूक पर्याय',
    ta: 'நம்பகமான மற்றும் SEBI அங்கீகாரம் பெற்ற முதலீட்டு வாய்ப்பு',
    te: 'విశ్వసనీయమైన మరియు SEBI గుర్తింపు పొందిన పెట్టుబడి ఎంపిక',
    bn: 'বিশ্বস্ত এবং SEBI অনুমোদিত সুষম বিনিয়োগ বিকল্প',
    gu: 'વિશ્વસનીય અને SEBI માન્ય સંતુલિત રોકાણ વિકલ્પ',
    kn: 'ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು SEBI ಮಾನ್ಯತೆ ಪಡೆದ ಹೂಡಿಕೆ ಆಯ್ಕೆ',
    ml: 'വിശ്വസനീയവും SEBI അംഗീകൃതവുമായ നിക്ഷേപ മാർഗ്ഗം',
    pa: 'ਭਰੋਸੇਯੋਗ ਅਤੇ SEBI ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਸੰਤੁਲਿਤ ਨਿਵੇਸ਼ ਵਿਕਲਪ',
    or: 'ବିଶ୍ୱସ୍ତ ଏବଂ SEBI ସ୍ୱୀକୃତିପ୍ରାପ୍ତ ସନ୍ତୁଳିତ ନିବେଶ ବିକଳ୍ପ',
    ur: 'قابل اعتماد اور SEBI سے منظور شدہ سرمایہ کاری آپشن',
    as: 'বিশ্বস্ত আৰু SEBI স্বীকৃত সন্তুলিত বিনিয়োগ বিকল্প'
  }
};

export const localizedPresetTitles: Record<string, Partial<Record<Language, string>>> = {
  'claim-daily-bot': {
    en: 'Guaranteed 2.5% Daily Return via "AI Arbitrage Robot"',
    hi: 'एआई ट्रेडिंग बॉट से रोजाना 2.5% गारंटीड मुनाफा',
    mr: 'एआय ट्रेडिंग बॉटद्वारे दररोज २.५% हमखास नफा',
    ta: 'AI டிரேடிங் பாட் மூலம் தினமும் 2.5% உறுதி அளிக்கப்பட்ட லாபம்',
    te: 'AI ట్రేడింగ్ బాట్ ద్వారా రోజుకు 2.5% గ్యారెంటీడ్ రాబడి',
    bn: 'AI ট্রেডিং বট থেকে প্রতিদিন ২.৫% নিশ্চিত লাভ',
    gu: 'AI ટ્રેડિંગ બોટ દ્વારા રોજના ૨.૫% ગેરંટીડ નફો',
    kn: 'AI ಟ್ರೇಡಿಂಗ್ ಬಾಟ್ ಮೂಲಕ ದಿನಕ್ಕೆ 2.5% ಖಾತರಿಯ ಲಾಭ',
    ml: 'AI ട്രേഡിംഗ് ബോട്ട് വഴി ദിവസേന 2.5% ഉറപ്പുള്ള ലാഭം',
    pa: 'AI ਟਰੇਡਿੰਗ ਬੋਟ ਰਾਹੀਂ ਰੋਜ਼ਾਨਾ 2.5% ਗਾਰੰਟੀਸ਼ੁਦਾ ਮੁਨਾਫ਼ਾ',
    or: 'AI ଟ୍ରେଡିଂ ବଟ୍ ମାଧ୍ୟମରେ ଦୈନିକ ୨.୫% ନିଶ୍ଚିତ ଲାଭ',
    ur: 'AI ٹریڈنگ بوٹ کے ذریعے روزانہ 2.5% گارنٹی شدہ منافع',
    as: 'AI ট্ৰেডিং বটৰ জৰিয়তে দৈনিক ২.৫% নিশ্চিত লাভ'
  },
  'claim-telegram-tips': {
    en: 'VIP Telegram Group: "95% Accurate Intraday Jackpot Calls"',
    hi: 'टेलीग्राम VIP ग्रुप: 95% सटीक जैकपॉट इंट्राडे टिप्स',
    mr: 'टेलिग्राम VIP ग्रुप: ९५% अचूक जॅकपॉट इंट्राडे टिप्स',
    ta: 'விஐபி டெலிகிராம் குரூப்: 95% துல்லியமான ஜாக்பாட் இன்ட்ராடே டிப்ஸ்',
    te: 'VIP టెలిగ్రామ్ గ్రూప్: 95% కచ్చితమైన జాక్‌పాట్ ఇంట్రాడే టిప్స్',
    bn: 'টেলিগ্রাম VIP গ্রুপ: ৯৫% নির্ভুল জ্যাকপট ইন্ট্রাডে টিপস',
    gu: 'ટેલિગ્રામ VIP ગ્રુપ: ૯૫% સચોટ જેકપોટ ઇન્ટ્રાડે ટિપ્સ',
    kn: 'ವಿಐಪಿ ಟೆಲಿಗ್ರಾಂ ಗ್ರೂಪ್: 95% ನಿಖರವಾದ ಜ್ಯಾಕ್‌ಪಾಟ್ ಇಂಟ್ರಾಡೇ ಟಿಪ್ಸ್',
    ml: 'വിഐപി ടെലഗ്രാം ഗ്രൂപ്പ്: 95% കൃത്യമായ ഇൻട്രാഡേ ടിപ്പുകൾ',
    pa: 'ਟੈਲੀਗ੍ਰਾਮ VIP ਗਰੁੱਪ: 95% ਸਟੀਕ ਜੈਕਪਾਟ ਇੰਟਰਾਡੇ ਟਿਪਸ',
    or: 'ଟେଲିଗ୍ରାମ୍ VIP ଗ୍ରୁପ୍: ୯୫% ସଠିକ୍ ଜ୍ୟାକପଟ୍ ଇଣ୍ଟ୍ରାଡେ ଟିପ୍ସ',
    ur: 'ٹیلیگرام VIP گروپ: 95% درست جیک پاٹ انٹرا ڈے ٹپس',
    as: 'টেলিগ্ৰাম VIP গ্ৰুপ: ৯৫% সঠিক জেকপট ইন্ট্ৰাডে টিপছ'
  },
  'claim-pre-ipo-hype': {
    en: 'Pre-IPO "Guaranteed 300% Listing Gains" in Unlisted Tech Startup',
    hi: 'अनलिस्टेड शेयरों में 300% लिस्टिंग गेन की पक्की गारंटी',
    mr: 'अनलिस्टेड शेअर्समध्ये ३००% लिस्टिंग नफ्याची हमी',
    ta: 'பட்டியலிடப்படாத பங்குகளில் 300% பட்டியலிடல் லாப உத்தரவாதம்',
    te: 'అన్‌లిస్టెడ్ షేర్లలో 300% లిస్టింగ్ లాభాల గ్యారెంటీ',
    bn: 'আনলিস্টেড শেয়ারে ৩০০% লিস্টিং লাভের নিশ্চয়তা',
    gu: 'અનલિસ્ટેડ શેર્સમાં ૩૦૦% લિસ્ટિંગ નફાની ગેરંટી',
    kn: 'ಅನ್‌ಲಿಸ್ಟೆಡ್ ಷೇರುಗಳಲ್ಲಿ 300% ಲಿಸ್ಟಿಂಗ್ ಲಾಭದ ಖಾತರಿ',
    ml: 'ലിസ്റ്റ് ചെയ്യാത്ത ഓഹരികളിൽ 300% ലിസ്റ്റിംഗ് നേട്ടത്തിന്റെ ഉറപ്പ്',
    pa: 'ਅਨਲਿਸਟਿਡ ਸ਼ੇਅਰਾਂ ਵਿੱਚ 300% ਲਿਸਟਿੰਗ ਮੁਨਾਫ਼ੇ ਦੀ ਗਾਰੰਟੀ',
    or: 'ଅଣତାଲିକାଭୁକ୍ତ ଶେୟାରରେ ୩୦୦% ଲିଷ୍ଟିଂ ଲାଭର ଗ୍ୟାରେଣ୍ଟି',
    ur: 'غیر فہرست شدہ حصص میں 300 فیصد لسٹنگ منافع کی گارنٹی',
    as: 'আনলিষ্টেড শ্বেয়াৰত ৩০০% লিষ্টিং লাভৰ নিশ্চিত প্ৰতিশ্ৰুতি'
  },
  'claim-index-fund-sip': {
    en: 'Nifty 50 Index Mutual Fund: "12% Historical Long-Term CAGR"',
    hi: 'निफ्टी 50 इंडेक्स फंड: "12% ऐतिहासिक दीर्घकालिक औसत रिटर्न"',
    mr: 'निफ्टी ५० इंडेक्स फंड: "१२% ऐतिहासिक दीर्घकालीन सरासरी परतावा"',
    ta: 'நிஃப்டி 50 இண்டெக்ஸ் ஃபண்ட்: "12% வரலாற்று நீண்டகால வளர்ச்சி"',
    te: 'నిఫ్టీ 50 ఇండెక్స్ ఫండ్: "12% చారిత్రక దీర్ఘకాలిక సగటు రాబడి"',
    bn: 'নিফটি ৫০ ইনডেক্স ফান্ড: "১২% ঐতিহাসিক দীর্ঘমেয়াদী রিটার্ন"',
    gu: 'નિફ્ટી ૫૦ ઇન્ડેક્સ ફંડ: "૧૨% ઐતિહાસિક સરેરાશ વળતર"',
    kn: 'ನಿಫ್ಟಿ 50 ಇಂಡೆಕ್ಸ್ ಫಂಡ್: "12% ಐತಿಹಾಸಿಕ ದೀರ್ಘಾವಧಿ ಸರಾಸರಿ ರಿಟರ್ನ್"',
    ml: 'നിഫ്റ്റി 50 ഇൻഡക്സ് ഫണ്ട്: "12% ദീർഘകാല ചരിത്രപരമായ ശരാശരി"',
    pa: 'ਨਿਫ਼ਟੀ 50 ਇੰਡੈਕਸ ਫ਼ੰਡ: "12% ਇਤਿਹਾਸਕ ਲੰਬੇ ਸਮੇਂ ਦਾ ਔਸਤ ਰਿਟਰਨ"',
    or: 'ନିଫ୍ଟି ୫୦ ଇଣ୍ଡେକ୍ସ ଫଣ୍ଡ: "୧୨% ଐତିହାସିକ ଦୀର୍ଘକାଳୀନ ହାରାହାରି ରିଟର୍ଣ୍ଣ"',
    ur: 'निفٹی 50 انڈیکس فنڈ: "12% تاریخی طویل مدتی سالانہ شرح نمو"',
    as: 'নিফটি ৫০ ইনডেক্স ফাণ্ড: "১২% ঐতিহাসিক দীৰ্ঘম্যাদী গড় ৰিটাৰ্ণ"'
  }
};

export const localizedClaimUI: Record<Language, {
  labBadge: string;
  safetyFirst: string;
  engineTitle: string;
  engineDesc: string;
  enterClaim: string;
  clear: string;
  placeholder: string;
  verifyButton: string;
  verifyingButton: string;
  caseStudiesTitle: string;
  runningRules: string;
  runningDesc: string;
  forensicVerdict: string;
  riskIndex: string;
  forensicBreakdown: string;
  identifiedFlags: string;
  mathCheck: string;
  regulatoryBenchmark: string;
  actionAdvice: string;
  helpline: string;
  readyTitle: string;
  readyDesc: string;
}> = {
  en: {
    labBadge: 'Forensic Fraud Detection Lab',
    safetyFirst: 'Safety First',
    engineTitle: 'Educational Verification Engine:',
    engineDesc: 'Groundwork based on statutory SEBI Circulars and compound interest mathematics.',
    enterClaim: 'Enter Claim or Pitch',
    clear: 'Clear',
    placeholder: 'Paste any WhatsApp forward, Telegram tip, or investment promise here in any Indian language...',
    verifyButton: 'Verify Claim Legitimacy',
    verifyingButton: 'Auditing Against Regulations...',
    caseStudiesTitle: 'Verified Case Studies (Click to inspect)',
    runningRules: 'Running Forensic Rules...',
    runningDesc: 'Auditing against SEBI RIA/RA regulations and compound interest feasibility.',
    forensicVerdict: 'Forensic Verdict',
    riskIndex: 'Risk Index',
    forensicBreakdown: 'Forensic Breakdown',
    identifiedFlags: 'Identified Warning Flags',
    mathCheck: 'Mathematical Reality Check',
    regulatoryBenchmark: 'Statutory Regulatory Benchmark',
    actionAdvice: 'Recommended Immediate Action',
    helpline: 'National Cyber Fraud Helpline: 1930',
    readyTitle: 'Ready for Inspection',
    readyDesc: 'Paste a message in the box on the left, or click one of the verified case studies to see how the engine analyzes red flags.'
  },
  hi: {
    labBadge: 'धोखाधड़ी जांच प्रयोगशाला',
    safetyFirst: 'सुरक्षा सर्वोपरि',
    engineTitle: 'शैक्षणिक जांच इंजन:',
    engineDesc: 'सेबी (SEBI) के वैधानिक नियमों और चक्रवृद्धि ब्याज के गणित पर आधारित।',
    enterClaim: 'दावा या वित्तीय संदेश दर्ज करें',
    clear: 'साफ़ करें',
    placeholder: 'व्हाट्सएप मैसेज, टेलीग्राम टिप, या किसी भी निवेश वादे को यहां पेस्ट करें...',
    verifyButton: 'दावे की सत्यता जांचें',
    verifyingButton: 'नियमों के आधार पर ऑडिट हो रहा है...',
    caseStudiesTitle: 'सत्यापित केस स्टडी (जांचने के लिए क्लिक करें)',
    runningRules: 'नियमों की जांच जारी है...',
    runningDesc: 'सेबी एडवाइजरी नियमों और गणितीय संभावनाओं का विश्लेषण।',
    forensicVerdict: 'जांच का अंतिम निष्कर्ष',
    riskIndex: 'जोखिम सूचकांक (Risk Index)',
    forensicBreakdown: 'विस्तृत विश्लेषण',
    identifiedFlags: 'पहचाने गए खतरे के संकेत',
    mathCheck: 'गणितीय सच्चाई की परख',
    regulatoryBenchmark: 'वैधानिक सेबी नियम',
    actionAdvice: 'तुरंत की जाने वाली कार्रवाई',
    helpline: 'राष्ट्रीय साइबर वित्तीय अपराध हेल्पलाइन: 1930',
    readyTitle: 'जांच के लिए तैयार',
    readyDesc: 'बाईं ओर दिए गए बॉक्स में कोई भी वित्तीय संदेश पेस्ट करें या नीचे दिए गए केस स्टडीज पर क्लिक करें।'
  },
  mr: {
    labBadge: 'आर्थिक फसवणूक शोध लॅब',
    safetyFirst: 'सुरक्षा सर्वप्रथम',
    engineTitle: 'शैक्षणिक पडताळणी इंजिन:',
    engineDesc: 'सेबी नियमावली आणि चक्रवाढ व्याजाच्या गणितावर आधारित.',
    enterClaim: 'दावा किंवा संदेश प्रविष्ट करा',
    clear: 'हटवा',
    placeholder: 'व्हॉट्सॲप फॉरवर्ड, टेलिग्राम टिप किंवा कोणताही आर्थिक दावा येथे पेस्ट करा...',
    verifyButton: 'दाव्याची सत्यता तपासा',
    verifyingButton: 'नियमांनुसार पडताळणी सुरू आहे...',
    caseStudiesTitle: 'तपासलेली उदाहरणे (तपासण्यासाठी क्लिक करा)',
    runningRules: 'विश्लेषण सुरू आहे...',
    runningDesc: 'सेबी नियम आणि गणितीय सत्यतेची तपासणी.',
    forensicVerdict: 'अंतिम निष्कर्ष',
    riskIndex: 'धोका निर्देशांक',
    forensicBreakdown: 'सखोल विश्लेषण',
    identifiedFlags: 'धोक्याचे स्पष्ट संकेत',
    mathCheck: 'गणिताचे वास्तव',
    regulatoryBenchmark: 'वैधानिक सेबी नियम',
    actionAdvice: 'त्वरित करायची कृती',
    helpline: 'राष्ट्रीय सायबर फ्रॉड हेल्पलाईन: 1930',
    readyTitle: 'तपासणीसाठी सज्ज',
    readyDesc: 'डावीकडील बॉक्समध्ये मेसेज पेस्ट करा किंवा खालीलपैकी एका उदाहरणावर क्लिक करा.'
  },
  ta: {
    labBadge: 'நிதி மோசடி கண்டறியும் மையம்',
    safetyFirst: 'பாதுகாப்பே முதன்மை',
    engineTitle: 'கல்வி சரிபார்ப்பு தளம்:',
    engineDesc: 'SEBI விதிமுறைகள் மற்றும் கூட்டு வட்டி கணிதத்தை அடிப்படையாகக் கொண்டது.',
    enterClaim: 'தகவல் அல்லது திட்டத்தை உள்ளிடவும்',
    clear: 'அழிக்க',
    placeholder: 'வாட்ஸ்அப் செய்தி அல்லது டெலிகிராம் டிப்ஸ்களை இங்கு பேஸ்ட் செய்யவும்...',
    verifyButton: 'உண்மையைச் சரிபார்க்கவும்',
    verifyingButton: 'விதிமுறைகளுடன் ஒப்பிடப்படுகிறது...',
    caseStudiesTitle: 'சரிபார்க்கப்பட்ட மாதிரி வழக்குகள்',
    runningRules: 'விதிகள் ஆய்வு செய்யப்படுகின்றன...',
    runningDesc: 'SEBI விதிமுறைகள் மற்றும் கணித நம்பகத்தன்மை ஆய்வு செய்யப்படுகிறது.',
    forensicVerdict: 'இறுதித் தீர்ப்பு',
    riskIndex: 'அபாயக் குறியீடு',
    forensicBreakdown: 'விரிவான ஆய்வு',
    identifiedFlags: 'கண்டறியப்பட்ட எச்சரிக்கைகள்',
    mathCheck: 'கணித உண்மை சோதனை',
    regulatoryBenchmark: 'சட்டரீதியான SEBI அளவுகோல்',
    actionAdvice: 'உடனடி நடவடிக்கை',
    helpline: 'தேசிய சைபர் குற்ற உதவி எண்: 1930',
    readyTitle: 'ஆய்வுக்கு தயார்',
    readyDesc: 'இடதுபுறப் பெட்டியில் செய்தியை இடுங்கள் அல்லது உதாரண வழக்கைக் கிளிக் செய்யுங்கள்.'
  },
  te: {
    labBadge: 'ఆర్థిక మోసాల పరిశోధన ల్యాబ్',
    safetyFirst: 'భద్రతే ప్రథమం',
    engineTitle: 'విద్యా పరిశీలన వ్యవస్థ:',
    engineDesc: 'SEBI నిబంధనలు మరియు చక్రవడ్డీ గణితం ఆధారంగా పనిచేస్తుంది.',
    enterClaim: 'ఆర్థిక ప్రతిపాదనను నమోదు చేయండి',
    clear: 'క్లియర్ చేయండి',
    placeholder: 'వాట్సాప్ ఫార్వర్డ్, టెలిగ్రామ్ టిప్ లేదా ఏదైనా పెట్టుబడి వాగ్దానాన్ని ఇక్కడ పేస్ట్ చేయండి...',
    verifyButton: 'వాస్తవికతను సరిచూడండి',
    verifyingButton: 'నిబంధనల ప్రకారం పరిశీలిస్తోంది...',
    caseStudiesTitle: 'నిరూపిత కేస్ స్టడీలు (చూడటానికి క్లిక్ చేయండి)',
    runningRules: 'విశ్లేషణ జరుగుతోంది...',
    runningDesc: 'SEBI నిబంధనలు మరియు గణిత సాధ్యత ఆధారంగా పరిశీలన.',
    forensicVerdict: 'తుది తీర్పు',
    riskIndex: 'రిస్క్ ఇండెక్స్',
    forensicBreakdown: 'సమగ్ర విశ్లేషణ',
    identifiedFlags: 'గుర్తించిన ప్రమాద హెచ్చరికలు',
    mathCheck: 'గణిత వాస్తవికత',
    regulatoryBenchmark: 'చట్టబద్ధమైన SEBI నిబంధన',
    actionAdvice: 'తక్షణ చర్యలు',
    helpline: 'జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్: 1930',
    readyTitle: 'పరిశీలనకు సిద్ధం',
    readyDesc: 'ఎడమవైపు బాక్స్‌లో సందేశాన్ని పేస్ట్ చేయండి లేదా కేస్ స్టడీని క్లిక్ చేయండి.'
  },
  bn: {
    labBadge: 'আর্থিক প্রতারণা সনাক্তকরণ ল্যাব',
    safetyFirst: 'নিরাপত্তা প্রথম',
    engineTitle: 'শিক্ষামূলক যাচাই ইঞ্জিন:',
    engineDesc: 'SEBI বিধিনিষেধ এবং চক্রবৃদ্ধি সুদের গণিতের ওপর ভিত্তি করে তৈরি।',
    enterClaim: 'দাবি বা প্রস্তাব লিখুন',
    clear: 'মুছুন',
    placeholder: 'হোয়াটসঅ্যাপ মেসেজ বা টেলিগ্রাম টিপস এখানে পেস্ট করুন...',
    verifyButton: 'সত্যতা যাচাই করুন',
    verifyingButton: 'নিয়মাবলীর সাথে যাচাই করা হচ্ছে...',
    caseStudiesTitle: 'যাচাইকৃত কেস স্টাডিজ (দেখতে ক্লিক করুন)',
    runningRules: 'বিশ্লেষণ চলছে...',
    runningDesc: 'SEBI নির্দেশিকা এবং গাণিতিক বাস্তবতার সাথে মিলিয়ে দেখা হচ্ছে।',
    forensicVerdict: 'চূড়ান্ত সিদ্ধান্ত',
    riskIndex: 'ঝুঁকি সূচক',
    forensicBreakdown: 'বিস্তারিত বিশ্লেষণ',
    identifiedFlags: 'সতর্ক সংকেতসমূহ',
    mathCheck: 'গাণিতিক বাস্তবতা',
    regulatoryBenchmark: 'বিধিবদ্ধ SEBI মানদণ্ড',
    actionAdvice: 'তাৎক্ষণিক করণীয়',
    helpline: 'জাতীয় সাইবার ক্রাইম হেল্পলাইন: 1930',
    readyTitle: 'যাচাইয়ের জন্য প্রস্তুত',
    readyDesc: 'বামদিকের বক্সে মেসেজ পেস্ট করুন অথবা কেস স্টাডি নির্বাচন করুন।'
  },
  gu: {
    labBadge: 'નાણાકીય છેતરપિંડી શોધ લેબ',
    safetyFirst: 'સલામતી પ્રથમ',
    engineTitle: 'શૈક્ષણિક ચકાસણી એન્જિન:',
    engineDesc: 'SEBI નિયમો અને ચક્રવૃદ્ધિ વ્યાજના ગણિત પર આધારિત.',
    enterClaim: 'દાવો અથવા મેસેજ દાખલ કરો',
    clear: 'સાફ કરો',
    placeholder: 'વોટ્સએપ ફોરવર્ડ, ટેલિગ્રામ ટિપ કે રોકાણનો દાવો અહીં પેસ્ટ કરો...',
    verifyButton: 'સત્યતા તપાસો',
    verifyingButton: 'નિયમો મુજબ તપાસ ચાલુ છે...',
    caseStudiesTitle: 'ચકાસાયેલ કેસ સ્ટડીઝ (જોવા માટે ક્લિક કરો)',
    runningRules: 'વિશ્લેષણ ચાલુ છે...',
    runningDesc: 'SEBI નિયમો અને ગણિતની વાસ્તવિકતા સાથે ચકાસણી.',
    forensicVerdict: 'અંતિમ નિર્ણય',
    riskIndex: 'જોખમ સૂચકાંક',
    forensicBreakdown: 'વિગતવાર વિશ્લેષણ',
    identifiedFlags: 'ચેતવણીના સંકેતો',
    mathCheck: 'ગણિતની વાસ્તવિકતા',
    regulatoryBenchmark: 'કાયદેસર SEBI ધોરણ',
    actionAdvice: 'તાત્કાલિક પગલાં',
    helpline: 'રાષ્ટ્રીય સાયબર ફ્રોડ હેલ્પલાઇન: 1930',
    readyTitle: 'તપાસ માટે તૈયાર',
    readyDesc: 'ડાબી બાજુના બોક્સમાં મેસેજ પેસ્ટ કરો અથવા કેસ સ્ટડી પર ક્લિક કરો.'
  },
  kn: {
    labBadge: 'ಆರ್ಥಿಕ ವಂಚನೆ ಪತ್ತೆ ಲ್ಯಾಬ್',
    safetyFirst: 'ಸುರಕ್ಷತೆ ಮೊದಲು',
    engineTitle: 'ಶೈಕ್ಷಣಿಕ ಪರಿಶೀಲನಾ ಎಂಜಿನ್:',
    engineDesc: 'SEBI ನಿಯಮಗಳು ಮತ್ತು ಚಕ್ರಬಡ್ಡಿ ಗಣಿತವನ್ನು ಆಧರಿಸಿದೆ.',
    enterClaim: 'ಸಂದೇಶ ಅಥವಾ ಪ್ರಸ್ತಾಪ ನಮೂದಿಸಿ',
    clear: 'ತೆರವುಗೊಳಿಸಿ',
    placeholder: 'ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಅಥವಾ ಟೆಲಿಗ್ರಾಂ ಸಲಹೆಗಳನ್ನು ಇಲ್ಲಿ ಅಂಟಿಸಿ...',
    verifyButton: 'ನಿಜಾಂಶ ಪರಿಶೀಲಿಸಿ',
    verifyingButton: 'ನಿಯಮಾವಳಿಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...',
    caseStudiesTitle: 'ಪರಿಶೀಲಿಸಿದ ನಿದರ್ಶನಗಳು (ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ)',
    runningRules: 'ವಿಶ್ಲೇಷಣೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ...',
    runningDesc: 'SEBI ನಿಯಮಗಳು ಮತ್ತು ಗಣಿತದ ನೈಜತೆಯನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ.',
    forensicVerdict: 'ಅಂತಿಮ ತೀರ್ಪು',
    riskIndex: 'ರಿಸ್ಕ್ ಇಂಡೆಕ್ಸ್',
    forensicBreakdown: 'ವಿವರವಾದ ವಿಶ್ಲೇಷಣೆ',
    identifiedFlags: 'ಎಚ್ಚರಿಕೆಯ ಚಿಹ್ನೆಗಳು',
    mathCheck: 'ಗಣಿತದ ವಾಸ್ತವ ಪರಿಶೀಲನೆ',
    regulatoryBenchmark: 'ಶಾಸನಬದ್ಧ SEBI ಮಾನದಂಡ',
    actionAdvice: 'ತಕ್ಷಣದ ಕ್ರಮಗಳು',
    helpline: 'ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ವಂಚನೆ ಸಹಾಯವಾಣಿ: 1930',
    readyTitle: 'ಪರಿಶೀಲನೆಗೆ ಸಿದ್ಧ',
    readyDesc: 'ಎಡಭಾಗದ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ ಸಂದೇಶವನ್ನು ಅಂಟಿಸಿ ಅಥವಾ ಉದಾಹರಣೆಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.'
  },
  ml: {
    labBadge: 'സാമ്പത്തിക തട്ടിപ്പ് കണ്ടെത്തൽ കേന്ദ്രം',
    safetyFirst: 'സുരക്ഷ പ്രധാനം',
    engineTitle: 'വിദ്യാഭ്യാസ പരിശോധനാ സംവിധാനം:',
    engineDesc: 'SEBI നിയമങ്ങളും കൂട്ടുപലിശ ഗണിതവും അടിസ്ഥാനമാക്കിയുള്ളത്.',
    enterClaim: 'സന്ദേശം നൽകുക',
    clear: 'മായ്ക്കുക',
    placeholder: 'വാട്ട്‌സ്ആപ്പ് സന്ദേശമോ ടെലഗ്രാം ടിപ്പോ ഇവിടെ പേസ്റ്റ് ചെയ്യുക...',
    verifyButton: 'സത്യസന്ധത പരിശോധിക്കുക',
    verifyingButton: 'നിയമങ്ങൾ പ്രകാരം പരിശോധിക്കുന്നു...',
    caseStudiesTitle: 'പരിശോധിച്ച മാതൃകകൾ (ക്ലിക്ക് ചെയ്യുക)',
    runningRules: 'വിശകലനം നടക്കുന്നു...',
    runningDesc: 'SEBI ചട്ടങ്ങളും ഗണിതശാസ്ത്രപരമായ സാധുതയും പരിശോധിക്കുന്നു.',
    forensicVerdict: 'അന്തിമ നിഗമനം',
    riskIndex: 'റിസ്ക് ഇൻഡക്സ്',
    forensicBreakdown: 'വിശദമായ അവലോകനം',
    identifiedFlags: 'മുന്നറിയിപ്പ് ലക്ഷണങ്ങൾ',
    mathCheck: 'ഗണിതശാസ്ത്ര യാഥാർത്ഥ്യം',
    regulatoryBenchmark: 'നിയമപരമായ SEBI മാനദണ്ഡം',
    actionAdvice: 'ഉടൻ ചെയ്യേണ്ട കാര്യങ്ങൾ',
    helpline: 'ദേശീയ സൈബർ തട്ടിപ്പ് ഹെൽപ്പ്‌ലൈൻ: 1930',
    readyTitle: 'പരിശോധനയ്ക്ക് തയ്യാർ',
    readyDesc: 'ഇടതുവശത്തെ ബോക്സിൽ സന്ദേശം നൽകുക അല്ലെങ്കിൽ മാതൃക തിരഞ്ഞെടുക്കുക.'
  },
  pa: {
    labBadge: 'ਵਿੱਤੀ ਧੋਖਾਧੜੀ ਜਾਂਚ ਲੈਬ',
    safetyFirst: 'ਸੁਰੱਖਿਆ ਸਭ ਤੋਂ ਪਹਿਲਾਂ',
    engineTitle: 'ਵਿੱਦਿਅਕ ਜਾਂਚ ਪ੍ਰਣਾਲੀ:',
    engineDesc: 'SEBI ਦੇ ਨਿਯਮਾਂ ਅਤੇ ਚੱਕਰਵਰਧੀ ਵਿਆਜ ਦੇ ਗਣਿਤ ’ਤੇ ਅਧਾਰਿਤ।',
    enterClaim: 'ਦਾਅਵਾ ਜਾਂ ਸੁਨੇਹਾ ਦਰਜ ਕਰੋ',
    clear: 'ਸਾਫ਼ ਕਰੋ',
    placeholder: 'ਵਟਸਐਪ ਮੈਸੇਜ ਜਾਂ ਟੈਲੀਗ੍ਰਾਮ ਟਿਪਸ ਇੱਥੇ ਪੇਸਟ ਕਰੋ...',
    verifyButton: 'ਸੱਚਾਈ ਦੀ ਜਾਂਚ ਕਰੋ',
    verifyingButton: 'ਨਿਯਮਾਂ ਮੁਤਾਬਕ ਪੜਤਾਲ ਜਾਰੀ ਹੈ...',
    caseStudiesTitle: 'ਪੜਤਾਲੇ ਗਏ ਕੇਸ (ਦੇਖਣ ਲਈ ਕਲਿੱਕ ਕਰੋ)',
    runningRules: 'ਵਿਸ਼ਲੇਸ਼ਣ ਚੱਲ ਰਿਹਾ ਹੈ...',
    runningDesc: 'SEBI ਨਿਯਮਾਂ ਅਤੇ ਗਣਿਤਕ ਸੰਭਾਵਨਾਵਾਂ ਦੀ ਜਾਂਚ।',
    forensicVerdict: 'ਅੰਤਿਮ ਫ਼ੈਸਲਾ',
    riskIndex: 'ਜੋਖਮ ਸੂਚਕਾਂਕ',
    forensicBreakdown: 'ਵਿਸਥਾਰਪੂਰਵਕ ਵੇਰਵਾ',
    identifiedFlags: 'ਖ਼ਤਰੇ ਦੇ ਸੰਕੇਤ',
    mathCheck: 'ਗਣਿਤਕ ਸੱਚਾਈ',
    regulatoryBenchmark: 'ਕਾਨੂੰਨੀ SEBI ਮਾਪਦੰਡ',
    actionAdvice: 'ਤੁਰੰਤ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਕਾਰਵਾਈ',
    helpline: 'ਰਾਸ਼ਟਰੀ ਸਾਈਬਰ ਧੋਖਾਧੜੀ ਹੈਲਪਲਾਈਨ: 1930',
    readyTitle: 'ਜਾਂਚ ਲਈ ਤਿਆਰ',
    readyDesc: 'ਖੱਬੇ ਪਾਸੇ ਬਕਸੇ ਵਿੱਚ ਸੁਨੇਹਾ ਪੇਸਟ ਕਰੋ ਜਾਂ ਕੇਸ ਸਟੱਡੀ ਚੁਣੋ।'
  },
  or: {
    labBadge: 'ଆର୍ଥିକ ଠକେଇ ଚିହ୍ନଟ ଲ୍ୟାବ୍',
    safetyFirst: 'ସୁରକ୍ଷା ପ୍ରଥମେ',
    engineTitle: 'ଶିକ୍ଷାଗତ ଯାଞ୍ଚ ଇଞ୍ଜିନ୍:',
    engineDesc: 'SEBI ନିୟମ ଏବଂ ଚକ୍ରବୃଦ୍ଧି ସୁଧର ଗଣିତ ଉପରେ ଆଧାରିତ।',
    enterClaim: 'ଦାବି କିମ୍ବା ବାର୍ତ୍ତା ପ୍ରବେଶ କରନ୍ତୁ',
    clear: 'ସଫା କରନ୍ତୁ',
    placeholder: 'ହ୍ୱାଟ୍ସଆପ୍ ମେସେଜ୍ ବା ଟେଲିଗ୍ରାମ୍ ଟିପ୍ ଏଠାରେ ପେଷ୍ଟ କରନ୍ତୁ...',
    verifyButton: 'ସତ୍ୟତା ଯାଞ୍ଚ କରନ୍ତୁ',
    verifyingButton: 'ନିୟମ ଅନୁସାରେ ଯାଞ୍ଚ ଚାଲିଛି...',
    caseStudiesTitle: 'ଯାଞ୍ଚ ହୋଇଥିବା ଘଟଣା (ଦେଖିବାକୁ କ୍ଲିକ୍ କରନ୍ତୁ)',
    runningRules: 'ବିଶ୍ଳେଷଣ ଚାଲିଛି...',
    runningDesc: 'SEBI ନିୟମ ଏବଂ ଗାଣିତିକ ବାସ୍ତବତାର ଯାଞ୍ଚ।',
    forensicVerdict: 'ଅନ୍ତିମ ନିଷ୍ପତ୍ତି',
    riskIndex: 'ବିପଦ ସୂଚକାଙ୍କ',
    forensicBreakdown: 'ବିସ୍ତୃତ ବିଶ୍ଳେଷଣ',
    identifiedFlags: 'ଚେତାବନୀ ସଙ୍କେତ',
    mathCheck: 'ଗାଣିତିକ ବାସ୍ତବତା',
    regulatoryBenchmark: 'ବୈଧାନିକ SEBI ମାନଦଣ୍ଡ',
    actionAdvice: 'ତୁରନ୍ତ ପଦକ୍ଷେପ',
    helpline: 'ଜାତୀୟ ସାଇବର ଅପରାଧ ହେଲ୍ପଲାଇନ୍: 1930',
    readyTitle: 'ଯାଞ୍ଚ ପାଇଁ ପ୍ରସ୍ତୁତ',
    readyDesc: 'ବାମ ପାଖ ବାକ୍ସରେ ମେସେଜ୍ ପେଷ୍ଟ କରନ୍ତୁ କିମ୍ବା ଉଦାହରଣ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।'
  },
  ur: {
    labBadge: 'مالیاتی دھوکہ دہی کی تحقیقاتی لیب',
    safetyFirst: 'حفاظت اولین ترجیح',
    engineTitle: 'تعلیمی جانچ کا نظام:',
    engineDesc: 'SEBI کے قانونی ضوابط اور کمپاؤنڈ سود کی ریاضی پر مبنی۔',
    enterClaim: 'دعویٰ یا پیغام درج کریں',
    clear: 'صاف کریں',
    placeholder: 'واٹس ایپ میسج یا ٹیلیگرام ٹپس یہاں پیسٹ کریں...',
    verifyButton: 'صداقت کی جانچ کریں',
    verifyingButton: 'قواعد کے مطابق جانچ جاری ہے...',
    caseStudiesTitle: 'مصدقہ کیس اسٹڈیز (دیکھنے کے لیے کلک کریں)',
    runningRules: 'تجزیہ کیا جا رہا ہے...',
    runningDesc: 'SEBI قوانین اور ریاضیاتی امکانات کی جانچ۔',
    forensicVerdict: 'حتمی فیصلہ',
    riskIndex: 'رسک انڈیکس',
    forensicBreakdown: 'تفصیلی تجزیہ',
    identifiedFlags: 'خطرناک علامات',
    mathCheck: 'ریاضی کی حقیقت',
    regulatoryBenchmark: 'قانونی SEBI معیار',
    actionAdvice: 'فوری اقدامات',
    helpline: 'قومی سائبر کرائم ہیلپ لائن: 1930',
    readyTitle: 'جانچ کے لیے تیار',
    readyDesc: 'بائیں جانب میسج پیسٹ کریں یا مثال پر کلک کریں۔'
  },
  as: {
    labBadge: 'আৰ্থিক প্ৰৱঞ্চনা ধৰা পেলোৱা লেব',
    safetyFirst: 'সুৰক্ষা প্ৰথম',
    engineTitle: 'শিক্ষামূলক পৰীক্ষণ ইঞ্জিন:',
    engineDesc: 'SEBI নিয়মাৱলী আৰু চক্ৰবৃদ্ধি সূতৰ গণিতৰ ওপৰত ভিত্তি কৰি তৈয়াৰী।',
    enterClaim: 'বাৰ্তা বা দাবী লিখক',
    clear: 'মচক',
    placeholder: 'হোৱাটছএপ বাৰ্তা বা টেলিগ্ৰাম টিপ ইয়াত পেষ্ট কৰক...',
    verifyButton: 'সত্যতা পৰীক্ষা কৰক',
    verifyingButton: 'নিয়ম অনুসৰি পৰীক্ষা চলি আছে...',
    caseStudiesTitle: 'পৰীক্ষিত কেচ ষ্টাডি (চাবলৈ ক্লিক কৰক)',
    runningRules: 'বিশ্লেষণ চলি আছে...',
    runningDesc: 'SEBI নিৰ্দেশনা আৰু গাণিতিক সম্ভাৱনাৰ পৰীক্ষা।',
    forensicVerdict: 'চূড়ান্ত সিদ্ধান্ত',
    riskIndex: 'বিপদ সূচক',
    forensicBreakdown: 'বিস্তাৰিত বিশ্লেষণ',
    identifiedFlags: 'সাৱধানবাণীসমূহ',
    mathCheck: 'গাণিতিক সত্যতা',
    regulatoryBenchmark: 'আইনগত SEBI মানদণ্ড',
    actionAdvice: 'তৎক্ষণাত ল’বলগীয়া পদক্ষেপ',
    helpline: 'ৰাষ্ট্ৰীয় চাইবাৰ অপৰাধ হেল্পলাইন: 1930',
    readyTitle: 'পৰীক্ষাৰ বাবে প্ৰস্তুত',
    readyDesc: 'বাওঁফালৰ বাকচত মেচেজ পেষ্ট কৰক বা কেচ ষ্টাডি বাছক।'
  }
};

export function getClaimUI(lang: Language) {
  return localizedClaimUI[lang] || localizedClaimUI.en;
}

export function getPresetTitle(preset: PresetClaim, lang: Language): string {
  if (localizedPresetTitles[preset.id]?.[lang]) {
    return localizedPresetTitles[preset.id]![lang]!;
  }
  return lang === 'en' ? preset.titleEn : (preset.titleHi || preset.titleEn);
}

export function getClaimHeadline(result: ClaimVerificationResult, lang: Language): string {
  if (localizedVerdictHeadlines[result.verdict]?.[lang]) {
    return localizedVerdictHeadlines[result.verdict]![lang]!;
  }
  return lang === 'en' ? result.headlineEn : (result.headlineHi || result.headlineEn);
}

export function getClaimExplanation(result: ClaimVerificationResult, lang: Language): string {
  return lang === 'en' ? result.explanationEn : (result.explanationHi || result.explanationEn);
}

export function getClaimRedFlags(result: ClaimVerificationResult, lang: Language): string[] {
  return lang === 'en' ? result.redFlagsEn : (result.redFlagsHi || result.redFlagsEn);
}

export function getClaimMath(result: ClaimVerificationResult, lang: Language): string {
  return lang === 'en' ? result.theMathEn : (result.theMathHi || result.theMathEn);
}

export function getClaimRegulatoryNote(result: ClaimVerificationResult, lang: Language): string {
  return lang === 'en' ? result.regulatoryNoteEn : (result.regulatoryNoteHi || result.regulatoryNoteEn);
}

export function getClaimActionAdvice(result: ClaimVerificationResult, lang: Language): string[] {
  return lang === 'en' ? result.actionAdviceEn : (result.actionAdviceHi || result.actionAdviceEn);
}
