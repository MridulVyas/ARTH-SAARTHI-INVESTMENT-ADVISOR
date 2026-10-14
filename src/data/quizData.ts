import { LessonQuiz } from '../types';

export const lessonQuizzes: Record<string, LessonQuiz[]> = {
  // ==========================================
  // MODULE 1: SAVING & EMERGENCY FUND
  // ==========================================
  'lesson-emergency-fund': [
    {
      id: 'q-em-1',
      questionEn: 'Where is the BEST and safest place to park your household emergency fund?',
      questionHi: 'घरेलू इमरजेंसी फंड का पैसा सुरक्षित रखने के लिए सबसे सही जगह कौन सी है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'High-risk small cap equity stocks to grow it quickly',
          textHi: 'जल्दी बढ़ाने के लिए अधिक जोखिम वाले स्मॉल कैप शेयर'
        },
        {
          id: 'opt-2',
          textEn: 'Liquid mutual funds or a sweep-in savings bank account',
          textHi: 'लिक्विड म्यूचुअल फंड या ऑटो-स्वीप बचत बैंक खाता'
        },
        {
          id: 'opt-3',
          textEn: 'A 5-year locked-in tax saver fixed deposit',
          textHi: '5 साल के लॉक-इन वाली टैक्स सेवर एफडी'
        },
        {
          id: 'opt-4',
          textEn: 'Cryptocurrency tokens and digital coins',
          textHi: 'क्रिप्टोकरेंसी टोकन और डिजिटल कॉइन्स'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Emergency funds must prioritize instant accessibility (liquidity) and capital safety above high returns. Liquid funds or sweep-in accounts allow same-day withdrawals without capital loss.',
      explanationHi: 'इमरजेंसी फंड का मुख्य उद्देश्य जरूरत पड़ने पर तुरंत पैसा मिलना और मूलधन की सुरक्षा है। लिक्विड फंड या बचत खाते से बिना किसी नुकसान के तुरंत पैसा निकाला जा सकता है।'
    },
    {
      id: 'q-em-2',
      questionEn: 'How many months of mandatory living expenses should a salaried individual ideally maintain in an emergency fund?',
      questionHi: 'एक वेतनभोगी (salaried) व्यक्ति को इमरजेंसी फंड में कम से कम कितने महीने का खर्च रखना चाहिए?',
      options: [
        {
          id: 'opt-1',
          textEn: '1 to 2 weeks of pocket money',
          textHi: '1 से 2 सप्ताह का जेब खर्च'
        },
        {
          id: 'opt-2',
          textEn: '3 to 6 months of non-negotiable living expenses',
          textHi: 'अनिवार्य घरेलू खर्चों का 3 से 6 महीने का बैकअप'
        },
        {
          id: 'opt-3',
          textEn: '10 years of total gross salary',
          textHi: 'कुल वेतन का 10 साल का हिस्सा'
        },
        {
          id: 'opt-4',
          textEn: 'Zero, as long as one has a credit card limit',
          textHi: 'शून्य, अगर क्रेडिट कार्ड की लिमिट उपलब्ध हो'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Financial planners recommend 3 to 6 months of non-negotiable expenses for salaried workers (and 6 to 9 months for freelancers/business owners) to weather sudden job loss or medical crises.',
      explanationHi: 'वेतनभोगी लोगों को 3 से 6 महीने और व्यापारियों को 6 से 9 महीने के अनिवार्य खर्च का इमरजेंसी फंड रखना चाहिए ताकि नौकरी जाने या आपात स्थिति में कर्ज न लेना पड़े।'
    },
    {
      id: 'q-em-3',
      questionEn: 'Which of the following items SHOULD be counted when calculating your monthly emergency fund requirement?',
      questionHi: 'मासिक इमरजेंसी फंड की गणना करते समय इनमें से किन खर्चों को शामिल करना चाहिए?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Weekend luxury dining and designer shopping budgets',
          textHi: 'रेस्तरां में खाना और लग्जरी खरीदारी का खर्च'
        },
        {
          id: 'opt-2',
          textEn: 'Rent/EMI, groceries, utilities, school fees, and essential health insurance',
          textHi: 'किराया/ईएमआई, राशन, बिजली-पानी का बिल, बच्चों की फीस और स्वास्थ्य बीमा'
        },
        {
          id: 'opt-3',
          textEn: 'Speculative intraday trading margin for next month',
          textHi: 'शेयर बाजार में इंट्राडे ट्रेडिंग के लिए रखा मार्जिन'
        },
        {
          id: 'opt-4',
          textEn: 'Annual international holiday tour budget',
          textHi: 'विदेश घूमने के लिए साल का बजट'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Only non-negotiable survival expenses—shelter, groceries, basic utilities, education, loan EMIs, and insurance premiums—form the foundation of an emergency fund calculation.',
      explanationHi: 'इमरजेंसी फंड में केवल वही अनिवार्य खर्चे जोड़े जाते हैं जिनके बिना गुजारा संभव नहीं है: जैसे घर का किराया/ईएमआई, राशन, बिजली, बच्चों की फीस और इंश्योरेंस।'
    },
    {
      id: 'q-em-4',
      questionEn: 'Why is relying on high-interest credit cards during an emergency considered a dangerous trap?',
      questionHi: 'आपात स्थिति में बचत के बजाय क्रेडिट कार्ड पर निर्भर रहना एक खतरनाक जाल क्यों माना जाता है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Credit cards charge up to 36% - 42% annual interest on unpaid balances, leading to severe debt traps',
          textHi: 'क्रेडिट कार्ड पर 36% से 42% तक सालाना ब्याज लगता है, जो व्यक्ति को गहरे कर्ज के दलदल में धकेल देता है'
        },
        {
          id: 'opt-2',
          textEn: 'Credit cards are legally invalid in Indian private hospitals',
          textHi: 'भारतीय अस्पतालों में क्रेडिट कार्ड का इस्तेमाल गैरकानूनी है'
        },
        {
          id: 'opt-3',
          textEn: 'Credit cards automatically close after 9 PM every night',
          textHi: 'क्रेडिट कार्ड रात 9 बजे के बाद काम करना बंद कर देते हैं'
        },
        {
          id: 'opt-4',
          textEn: 'Banks confiscate credit cards during medical emergencies',
          textHi: 'बैंक मेडिकल इमरजेंसी में क्रेडिट कार्ड जब्त कर लेते हैं'
        }
      ],
      correctOptionId: 'opt-1',
      explanationEn: 'Credit card rollover interest rates in India exceed 3.5% per month (over 42% p.a.). Using debt to fund emergencies compounds distress when income is already disrupted.',
      explanationHi: 'क्रेडिट कार्ड पर हर महीने 3.5% से ज्यादा ब्याज लगता है। संकट के समय कर्ज लेने से ब्याज का बोझ इतना बढ़ जाता है कि उससे निकलना मुश्किल हो जाता है।'
    },
    {
      id: 'q-em-5',
      questionEn: 'Pooja has saved ₹2 Lakh in her emergency fund. The stock market is experiencing a bull rally. What should she do?',
      questionHi: 'पूजा ने ₹2 लाख का इमरजेंसी फंड बनाया है। शेयर बाजार बहुत तेजी से बढ़ रहा है। उसे क्या करना चाहिए?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Put the entire ₹2 Lakh into penny stocks to double it quickly',
          textHi: 'जल्दी पैसा दोगुना करने के लिए पूरा ₹2 लाख सस्ते पेनी शेयरों में लगा दे'
        },
        {
          id: 'opt-2',
          textEn: 'Keep the ₹2 Lakh safely in liquid instruments, and invest ONLY separate monthly savings into equities',
          textHi: '₹2 लाख को सुरक्षित लिक्विड फंड में ही रखे, और केवल अपनी अलग मासिक बचत से निवेश करे'
        },
        {
          id: 'opt-3',
          textEn: 'Lend the emergency fund to friends on interest',
          textHi: 'इमरजेंसी फंड का पैसा दोस्तों को ब्याज पर उधार दे दे'
        },
        {
          id: 'opt-4',
          textEn: 'Withdraw cash and store it in an almirah at home',
          textHi: 'कैश निकालकर घर की अलमारी में बंद करके रख ले'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'An emergency fund must never be treated as risk capital. Markets can crash unexpectedly, leaving you without liquidity right when an emergency hits. Protect the shield first!',
      explanationHi: 'इमरजेंसी फंड को कभी भी जोखिम भरे बाजार में नहीं लगाना चाहिए। अगर बाजार गिर गया और उसी समय कोई संकट आ गया, तो भारी नुकसान में शेयर बेचने पड़ेंगे।'
    }
  ],

  // ==========================================
  // MODULE 2: INFLATION & PURCHASING POWER
  // ==========================================
  'lesson-rule-of-72': [
    {
      id: 'q-inf-1',
      questionEn: 'According to the Rule of 72, if inflation in India averages 6% per year, how long will it take for prices to double?',
      questionHi: '72 के नियम (Rule of 72) के अनुसार, यदि औसत महंगाई 6% सालाना है, तो चीजों के दाम दोगुने होने में कितना समय लगेगा?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Approximately 6 years',
          textHi: 'लगभग 6 साल'
        },
        {
          id: 'opt-2',
          textEn: 'Approximately 12 years (72 ÷ 6 = 12)',
          textHi: 'लगभग 12 साल (72 ÷ 6 = 12)'
        },
        {
          id: 'opt-3',
          textEn: 'Exactly 24 years',
          textHi: 'लगभग 24 साल'
        },
        {
          id: 'opt-4',
          textEn: 'Living expenses never double in a growing economy',
          textHi: 'बढ़ती अर्थव्यवस्था में दाम कभी दोगुने नहीं होते'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'The Rule of 72 states that dividing 72 by the annual growth/inflation rate gives the doubling period. At 6% inflation: 72 ÷ 6 = 12 years.',
      explanationHi: '72 के नियम के अनुसार: 72 को महंगाई दर (6%) से भाग देने पर 12 आता है। यानी लगभग 12 वर्षों में रहने का खर्च दोगुना हो जाएगा।'
    },
    {
      id: 'q-inf-2',
      questionEn: 'How do financial economists define the "Real Return" of an investment?',
      questionHi: 'अर्थशास्त्र में किसी भी निवेश के "वास्तविक रिटर्न" (Real Return) का क्या अर्थ है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Nominal Return plus Inflation rate',
          textHi: 'मिला हुआ ब्याज + महंगाई की दर'
        },
        {
          id: 'opt-2',
          textEn: 'Nominal Return minus Inflation minus Applicable Taxes',
          textHi: 'मिला हुआ ब्याज - महंगाई दर - देय टैक्स'
        },
        {
          id: 'opt-3',
          textEn: 'The gross amount printed in your bank passbook',
          textHi: 'पासबुक में छपा कुल बैलेंस'
        },
        {
          id: 'opt-4',
          textEn: 'The stock market return without deducting broker fees',
          textHi: 'बिना ब्रोकरेज काटे शेयर बाजार का कुल रिटर्न'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Real Return measures true increase in purchasing power. If an FD earns 6.5%, tax consumes 1.3%, and inflation is 6%, your real return is -0.8% (purchasing power shrank!).',
      explanationHi: 'वास्तविक रिटर्न का अर्थ है आपकी खरीदने की ताकत में असली बढ़ोतरी। अगर ब्याज 6.5% मिला लेकिन टैक्स और महंगाई मिलकर 7.3% हो गए, तो आपका पैसा असल में घट गया।'
    },
    {
      id: 'q-inf-3',
      questionEn: 'Ramesh keeps ₹5 Lakh cash in a home safe for 15 years. Why is this a guaranteed loss of wealth?',
      questionHi: 'रमेश ने घर की तिजोरी में ₹5 लाख नकद 15 साल तक रखे। यह संपत्ति का निश्चित नुकसान क्यों है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Currency notes legally expire every five years',
          textHi: 'करेंसी नोट हर 5 साल में एक्सपायर हो जाते हैं'
        },
        {
          id: 'opt-2',
          textEn: 'Inflation steadily erodes purchasing power, so the ₹5 Lakh buys less than half the goods after 15 years',
          textHi: 'महंगाई पैसे की खरीदने की ताकत घटाती रहती है, जिससे 15 साल बाद उस ₹5 लाख से आधे से भी कम सामान खरीदा जा सकेगा'
        },
        {
          id: 'opt-3',
          textEn: 'Banks automatically debit maintenance charges on cash kept at home',
          textHi: 'बैंक घर में रखे कैश पर भी खाता शुल्क काटते हैं'
        },
        {
          id: 'opt-4',
          textEn: 'Paper money dissolves if left untouched for a decade',
          textHi: 'तिजोरी में रखा नोट अपने आप नष्ट हो जाता है'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Cash has zero nominal return. If inflation averages 6%, the purchasing power of ₹5 Lakh reduces to roughly ₹2 Lakh in real terms after 15 years.',
      explanationHi: 'नकद पैसे पर कोई ब्याज नहीं मिलता। महंगाई के कारण 15 साल में चीजों के दाम बहुत बढ़ जाएंगे और उसी ₹5 लाख से बहुत कम सामान आ पाएगा।'
    },
    {
      id: 'q-inf-4',
      questionEn: 'Which essential spending categories in India frequently experience inflation rates of 10% to 12%, far higher than headline CPI?',
      questionHi: 'भारत में कौन से आवश्यक खर्चे आम तौर पर 10% से 12% की दर से बढ़ते हैं, जो सामान्य महंगाई दर से कहीं अधिक हैं?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Healthcare, hospitalization, and quality children’s higher education',
          textHi: 'स्वास्थ्य सेवाएं, अस्पताल के इलाज का खर्च और बच्चों की उच्च शिक्षा'
        },
        {
          id: 'opt-2',
          textEn: 'Packaged salt and safety matchboxes',
          textHi: 'नमक और माचिस की डिब्बी'
        },
        {
          id: 'opt-3',
          textEn: 'Mobile data recharge coupons',
          textHi: 'मोबाइल डेटा रिचार्ज'
        },
        {
          id: 'opt-4',
          textEn: 'Postcard stamps and inland letters',
          textHi: 'डाक टिकट और अंतर्देशीय पत्र'
        }
      ],
      correctOptionId: 'opt-1',
      explanationEn: 'Education and medical inflation in India consistently outpace general inflation, compounding at 10-12% p.a. Planning for children and retirement requires beating these higher rates.',
      explanationHi: 'शिक्षा और स्वास्थ्य में महंगाई की दर 10% से 12% तक होती है। इसलिए बच्चों के भविष्य और रिटायरमेंट के लिए साधारण ब्याज वाली योजनाओं से अधिक रिटर्न वाले साधनों की जरूरत होती है।'
    },
    {
      id: 'q-inf-5',
      questionEn: 'Over 10 to 20 year horizons in India, which regulated asset class has historically beaten inflation by the widest margin?',
      questionHi: '10 से 20 साल की लंबी अवधि में, किस नियमित संपत्ति वर्ग ने भारतीय महंगाई को सबसे बड़े अंतर से पछाड़ा है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Savings bank accounts paying 2.7% interest',
          textHi: '2.7% ब्याज देने वाले बचत बैंक खाते'
        },
        {
          id: 'opt-2',
          textEn: 'Diversified Indian equities (such as broad market Index Mutual Funds)',
          textHi: 'विविध भारतीय शेयर बाजार (जैसे निफ्टी 50 ब्रॉड मार्केट इंडेक्स फंड)'
        },
        {
          id: 'opt-3',
          textEn: 'Post office savings accounts without compounding',
          textHi: 'डाकघर के साधारण बचत खाते'
        },
        {
          id: 'opt-4',
          textEn: 'Digital wallet gift vouchers',
          textHi: 'डिजिटल वॉलेट के गिफ्ट वाउचर'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Indian diversified equities have delivered 11% to 13% CAGR over multidecade horizons, comfortably outperforming 6% inflation and creating genuine real wealth.',
      explanationHi: 'दीर्घकालिक अवधि में भारतीय इक्विटीज और इंडेक्स फंडों ने 11% से 13% का औसत सालाना रिटर्न देकर 6% महंगाई को मात दी है और वास्तविक संपत्ति बनाई है।'
    }
  ],

  // ==========================================
  // MODULE 3: MUTUAL FUNDS & SIPS
  // ==========================================
  'lesson-sip-compounding': [
    {
      id: 'q-sip-1',
      questionEn: 'Why are "Direct Plans" in Mutual Funds more profitable for retail investors than "Regular Plans"?',
      questionHi: 'म्यूचुअल फंड में "डायरेक्ट प्लान" आम निवेशकों के लिए "रेगुलर प्लान" से अधिक फायदेमंद क्यों होते हैं?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Direct plans are exempted from all capital gains taxes',
          textHi: 'डायरेक्ट प्लान पर कोई टैक्स नहीं लगता'
        },
        {
          id: 'opt-2',
          textEn: 'Direct plans have lower annual expense ratios because no middleman distributor commissions are deducted',
          textHi: 'डायरेक्ट प्लान में कोई बिचौलिया कमीशन नहीं कटता, जिससे सालाना खर्चा कम और शुद्ध रिटर्न अधिक होता है'
        },
        {
          id: 'opt-3',
          textEn: 'Regular plans are restricted to senior citizens only',
          textHi: 'रेगुलर प्लान केवल वरिष्ठ नागरिकों के लिए होते हैं'
        },
        {
          id: 'opt-4',
          textEn: 'Direct plans guarantee a fixed 20% return signed by SEBI',
          textHi: 'डायरेक्ट प्लान में सेबी द्वारा 20% निश्चित रिटर्न की गारंटी दी जाती है'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Regular plans deduct 0.7% to 1.5% each year from your fund value to pay distributor commissions. Direct plans bypass agents, adding lakhs of rupees to your wealth over 20-25 years.',
      explanationHi: 'रेगुलर प्लान में हर साल 1% के आसपास एजेंट कमीशन कटता है। डायरेक्ट प्लान में यह पैसा बचता है और कंपाउंड होकर 20 सालों में लाखों रुपये का अतिरिक्त लाभ बनता है।'
    },
    {
      id: 'q-sip-2',
      questionEn: 'How does "Rupee Cost Averaging" benefit an investor during a temporary stock market downturn?',
      questionHi: 'शेयर बाजार में मंदी के दौरान "रुपी कॉस्ट एवरेजिंग" (Rupee Cost Averaging) का एसआईपी निवेशक को क्या फायदा होता है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'The monthly SIP installment is automatically canceled by the bank',
          textHi: 'बैंक द्वारा एसआईपी की किस्त अपने आप रद्द कर दी जाती है'
        },
        {
          id: 'opt-2',
          textEn: 'Your fixed monthly investment automatically buys more mutual fund units at lower NAV prices',
          textHi: 'आपकी तय मासिक किस्त कम एनएवी (NAV) भाव पर फंड की ज्यादा यूनिट्स खरीद लेती है'
        },
        {
          id: 'opt-3',
          textEn: 'All previously accumulated units are forfeited by the fund house',
          textHi: 'फंड हाउस द्वारा पुरानी सारी यूनिट्स जब्त कर ली जाती हैं'
        },
        {
          id: 'opt-4',
          textEn: 'You must pay an extra penalty fee to the mutual fund company',
          textHi: 'निवेशक को फंड कंपनी को पेनल्टी देनी पड़ती है'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'When markets drop, the Net Asset Value (NAV) falls. Your fixed monthly SIP amount (e.g. ₹2,000) buys more units at discount. When markets rebound, those extra units accelerate your profit.',
      explanationHi: 'बाजार गिरने पर यूनिट का भाव (NAV) कम हो जाता है। आपकी तय ₹2,000 की किस्त में ज्यादा यूनिट्स मिल जाती हैं। जब बाजार वापस उठता है तो यही सस्ती यूनिट्स तेजी से मुनाफा देती हैं।'
    },
    {
      id: 'q-sip-3',
      questionEn: 'What is the most disciplined response when news media sensationalizes a temporary stock market correction?',
      questionHi: 'जब टीवी और सोशल मीडिया पर शेयर बाजार गिरने की खबरें चलें, तो समझदार एसआईपी निवेशक को क्या करना चाहिए?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Panic and cancel all active SIPs immediately',
          textHi: 'घबराकर अपनी सभी चालू एसआईपी तुरंत रोक देनी चाहिए'
        },
        {
          id: 'opt-2',
          textEn: 'Continue your monthly SIP without interruption, letting rupee cost averaging work',
          textHi: 'बिना घबराए अपनी नियमित एसआईपी चालू रखनी चाहिए ताकि सस्ते में ज्यादा यूनिट्स मिलती रहें'
        },
        {
          id: 'opt-3',
          textEn: 'Redeem the entire portfolio at the bottom of the crash',
          textHi: 'गिरावट के सबसे निचले स्तर पर सारा पैसा निकालकर नुकसान पक्का कर लेना चाहिए'
        },
        {
          id: 'opt-4',
          textEn: 'Take high-interest personal loans to trade intraday futures',
          textHi: 'पर्सनल लोन लेकर इंट्राडे फ्यूचर्स ट्रेडिंग शुरू कर देनी चाहिए'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Market corrections are normal. Stopping SIPs during dips locks in losses and misses out on buying cheap units. Continued discipline creates wealth.',
      explanationHi: 'बाजार के उतार-चढ़ाव स्वाभाविक हैं। गिरावट में एसआईपी रोकना आम निवेशकों की सबसे बड़ी भूल होती है। अनुशासन बनाए रखने से ही लंबी अवधि में बड़ी पूंजी बनती है।'
    },
    {
      id: 'q-sip-4',
      questionEn: 'What is a low-cost Nifty 50 Index Mutual Fund?',
      questionHi: 'कम खर्चे वाला निफ्टी 50 इंडेक्स म्यूचुअल फंड (Index Fund) क्या होता है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'A fund that invests exclusively in unlisted foreign startups',
          textHi: 'अनलिस्टेड विदेशी स्टार्टअप्स में सट्टा लगाने वाला फंड'
        },
        {
          id: 'opt-2',
          textEn: 'A passive fund that replicates the top 50 largest Indian companies with very low management fees',
          textHi: 'एक पैसिव फंड जो भारत की शीर्ष 50 सबसे बड़ी कंपनियों के शेयरों में बेहद कम फीस में निवेश करता है'
        },
        {
          id: 'opt-3',
          textEn: 'An algorithmic intraday bot that trades options every second',
          textHi: 'एक कंप्यूटर बॉट जो हर सेकंड ऑप्शन ट्रेडिंग करता है'
        },
        {
          id: 'opt-4',
          textEn: 'A government lottery certificate',
          textHi: 'सरकारी लॉटरी का टिकट'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Nifty 50 Index funds passively hold India\'s top 50 blue-chip companies in exact index proportions. Because no star manager needs to be paid high fees, expense ratios are as low as 0.1% to 0.2%.',
      explanationHi: 'निफ्टी 50 इंडेक्स फंड देश की सबसे बड़ी 50 कंपनियों में बिना किसी पक्षपात के निवेश करता है। इसका खर्चा (Expense Ratio) मात्र 0.1% से 0.2% होता है, जिससे निवेशक को अधिकतम फायदा मिलता है।'
    },
    {
      id: 'q-sip-5',
      questionEn: 'Anil starts investing ₹3,000/month at age 22, while Sunil starts ₹6,000/month at age 35. Why does Anil often end up with a bigger retirement corpus?',
      questionHi: 'अनिल 22 साल की उम्र में ₹3,000/माह एसआईपी शुरू करता है, जबकि सुनील 35 साल की उम्र में ₹6,000/माह। रिटायरमेंट पर अनिल के पास अक्सर ज्यादा पैसा क्यों होता है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Younger investors receive a 50% cash bonus from SEBI',
          textHi: 'कम उम्र के निवेशकों को सेबी से 50% बोनस मिलता है'
        },
        {
          id: 'opt-2',
          textEn: 'Compound interest relies heavily on time: Anil gives his returns 13 extra years to multiply exponentially',
          textHi: 'चक्रवृद्धि (Compounding) में समय सबसे बड़ी शक्ति है: अनिल के पैसे को बढ़ने के लिए 13 साल अधिक मिले'
        },
        {
          id: 'opt-3',
          textEn: 'Older investors are taxed at 90% by mutual funds',
          textHi: 'म्यूचुअल फंड 35 साल से बड़े निवेशकों पर 90% टैक्स लगाते हैं'
        },
        {
          id: 'opt-4',
          textEn: 'Sunil\'s mutual fund charges triple brokerage',
          textHi: 'सुनील के फंड हाउस ने तीन गुना ब्रोकरेज काट लिया'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'In compounding, time in the market beats timing the market. Starting early allows reinvested profits to snowball over multiple decades, surpassing even double monthly investments started late.',
      explanationHi: 'कंपाउंडिंग में समय सबसे ताकतवर कारक होता है। जल्दी शुरुआत करने से मिलने वाले ब्याज पर भी सालों-साल ब्याज बनता रहता है, जो देर से शुरू की गई बड़ी रकम से भी आगे निकल जाता है।'
    }
  ],

  // ==========================================
  // MODULE 4: STOCKS & EQUITY BASICS
  // ==========================================
  'lesson-equity-ownership': [
    {
      id: 'q-stk-1',
      questionEn: 'What does legally purchasing a share of a listed Indian enterprise represent?',
      questionHi: 'किसी सूचीबद्ध भारतीय कंपनी का शेयर खरीदने का कानूनी रूप से क्या अर्थ है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'A personal loan you gave to the company chairman',
          textHi: 'कंपनी के चेयरमैन को दिया गया एक व्यक्तिगत उधार'
        },
        {
          id: 'opt-2',
          textEn: 'Fractional ownership in the enterprise’s assets, brand, and future profit stream',
          textHi: 'कंपनी की संपत्तियों, ब्रांड और भविष्य के मुनाफे में आनुपातिक हिस्सेदारी (मालिक बनना)'
        },
        {
          id: 'opt-3',
          textEn: 'A betting token that must be sold before the market closes at 3:30 PM',
          textHi: 'एक सट्टे का टोकन जिसे दोपहर 3:30 बजे से पहले बेचना अनिवार्य है'
        },
        {
          id: 'opt-4',
          textEn: 'A government guarantee of fixed quarterly interest',
          textHi: 'सरकारी गारंटी वाला फिक्स्ड ब्याज बॉन्ड'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'A share certificate represents true fractional ownership in the underlying business. As the company expands sales and profits, your ownership share increases in value and pays dividends.',
      explanationHi: 'शेयर खरीदना कोई जुआ नहीं, बल्कि कंपनी में हिस्सेदार बनना है। जब कंपनी अपने कारखाने, बिक्री और मुनाफा बढ़ाती है, तो आपके शेयर का मूल्य बढ़ता है और डिविडेंड मिलता है।'
    },
    {
      id: 'q-stk-2',
      questionEn: 'According to official research published by market regulator SEBI, what percentage of individual retail traders lose money in Equity Futures & Options (F&O)?',
      questionHi: 'बाजार नियामक सेबी (SEBI) के आधिकारिक शोध के अनुसार, फ्यूचर्स एंड ऑप्शंस (F&O) में कितने प्रतिशत खुदरा ट्रेडर्स को नुकसान होता है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Only 5% lose money',
          textHi: 'केवल 5% लोगों को नुकसान होता है'
        },
        {
          id: 'opt-2',
          textEn: 'Roughly 50% break even',
          textHi: 'लगभग 50% लोग बराबर रहते हैं'
        },
        {
          id: 'opt-3',
          textEn: 'Over 90% (approx 93%) incur net trading losses averaging ₹1.25 Lakh plus brokerage',
          textHi: '90% से ज्यादा (लगभग 93%) लोग अपनी पूंजी गंवाते हैं और औसतन ₹1.25 लाख का नुकसान उठाते हैं'
        },
        {
          id: 'opt-4',
          textEn: 'Nobody loses money if they follow YouTube financial influencers',
          textHi: 'यूट्यूब इनफ्लुएंसर्स को फॉलो करने वाले किसी भी व्यक्ति को घाटा नहीं होता'
        }
      ],
      correctOptionId: 'opt-3',
      explanationEn: 'SEBI\'s landmark study of Indian retail derivative traders revealed that 93% suffered net losses between FY19 and FY22, spending heavily on brokerages and exchange fees.',
      explanationHi: 'सेबी की आधिकारिक रिपोर्ट बताती है कि F&O ट्रेडिंग करने वाले 93% आम लोग अपना पैसा गंवाते हैं। सोशल मीडिया के झांसे में आकर अपनी मेहनत की कमाई डेरिवेटिव्स में न गंवाएं।'
    },
    {
      id: 'q-stk-3',
      questionEn: 'Over a 5 to 10 year horizon, what fundamental factor dictates whether a company’s stock price rises or falls?',
      questionHi: '5 से 10 साल की लंबी अवधि में किसी कंपनी के शेयर की कीमत बढ़ने या घटने का सबसे मुख्य कारण क्या होता है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Daily trading rumors posted in anonymous Telegram groups',
          textHi: 'टेलीग्राम ग्रुपों में फैलाई जाने वाली दैनिक अफवाहें'
        },
        {
          id: 'opt-2',
          textEn: 'The growth in the company’s underlying revenues, profits, and operational cash flows',
          textHi: 'कंपनी की वास्तविक बिक्री, शुद्ध मुनाफा और व्यापार में नकदी की वृद्धि'
        },
        {
          id: 'opt-3',
          textEn: 'Whether the stock symbol begins with a lucky vowel',
          textHi: 'कंपनी के नाम का पहला अक्षर शुभ होना'
        },
        {
          id: 'opt-4',
          textEn: 'Whether the share price is under ₹20',
          textHi: 'शेयर का भाव ₹20 से कम होना'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'In the short term, stock prices swing with sentiment and news. In the long term, stock prices strictly follow corporate earnings. If a company doubles its profit, its stock value follows.',
      explanationHi: 'छोटी अवधि में शेयर बाजार खबरों और भावनाओं पर चलता है, लेकिन लंबी अवधि में शेयर का भाव केवल इस बात पर निर्भर करता है कि कंपनी ने कितना असली मुनाफा कमाया।'
    },
    {
      id: 'q-stk-4',
      questionEn: 'Why is buying a stock solely because it is priced at ₹4 instead of ₹2,000 often a dangerous trap for beginners?',
      questionHi: 'केवल इसलिए कोई शेयर खरीदना क्योंकि उसकी कीमत ₹2,000 के बजाय ₹4 है, नए निवेशकों के लिए एक खतरनाक जाल क्यों है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Share price does not reflect valuation; a ₹4 penny stock may belong to a heavily indebted, manipulated shell company',
          textHi: 'शेयर का भाव उसकी असलियत नहीं बताता; ₹4 का पेनी स्टॉक किसी कर्जदार, फर्ज़ी और ऑपरेटरों द्वारा घुमाई जा रही कंपनी का हो सकता है'
        },
        {
          id: 'opt-2',
          textEn: 'Stocks priced under ₹10 are banned from paying dividends by RBI',
          textHi: '₹10 से सस्ते शेयरों पर आरबीआई ने रोक लगा रखी है'
        },
        {
          id: 'opt-3',
          textEn: 'Brokers charge ₹500 extra fee per share for cheap stocks',
          textHi: 'ब्रोकर सस्ते शेयरों पर ₹500 अतिरिक्त शुल्क लेते हैं'
        },
        {
          id: 'opt-4',
          textEn: 'Only foreign institutional investors can buy ₹2,000 shares',
          textHi: 'महंगे शेयर केवल विदेशी निवेशक ही खरीद सकते हैं'
        }
      ],
      correctOptionId: 'opt-1',
      explanationEn: 'Valuation depends on Market Capitalization and Price-to-Earnings (P/E), not the per-unit face price. Penny stocks are frequently illiquid and manipulated in pump-and-dump fraud schemes.',
      explanationHi: '₹4 का शेयर सस्ता नहीं होता और ₹2,000 का शेयर महंगा नहीं होता! मूल्यांकन कंपनी की कुल कमाई और साख से तय होता है। सस्ते पेनी शेयरों में आम लोग अक्सर फंस जाते हैं।'
    },
    {
      id: 'q-stk-5',
      questionEn: 'Why do seasoned investors strongly advise against putting 100% of your savings into a single company\'s stock?',
      questionHi: 'अनुभवी निवेशक अपनी पूरी जमा पूंजी किसी एक ही कंपनी के शेयर में लगाने से मना क्यों करते हैं?',
      options: [
        {
          id: 'opt-1',
          textEn: 'If that specific business suffers management fraud, technological obsolescence, or bankruptcy, your entire capital is wiped out',
          textHi: 'यदि उस एक कंपनी में घोटाला, घाटा या दिवालियापन हुआ तो आपकी पूरी पूंजी एक झटके में खत्म हो सकती है'
        },
        {
          id: 'opt-2',
          textEn: 'Single stocks do not trade on the National Stock Exchange (NSE)',
          textHi: 'एक कंपनी के शेयर एनएसई (NSE) पर नहीं बिकते'
        },
        {
          id: 'opt-3',
          textEn: 'The government limits citizens to holding a maximum of 3 shares',
          textHi: 'सरकार किसी नागरिक को 3 से ज्यादा शेयर रखने की अनुमति नहीं देती'
        },
        {
          id: 'opt-4',
          textEn: 'Holding one stock requires daily in-person visits to company headquarters',
          textHi: 'एक शेयर रखने पर कंपनी के दफ्तर में रोज हाजिरी लगानी पड़ती है'
        }
      ],
      correctOptionId: 'opt-1',
      explanationEn: 'Holding a single stock creates catastrophic unsystematic risk. Diversifying across 30 to 50 businesses through an index fund ensures that one company\'s failure won\'t ruin your life savings.',
      explanationHi: 'एक ही कंपनी में सारा पैसा लगाना बहुत बड़ा जोखिम है। यदि वह कंपनी डूबी तो सब डूब जाएगा। इंडेक्स फंड या म्यूचुअल फंड के जरिए 50 कंपनियों में बंटवारा करने से सुरक्षा मिलती है।'
    }
  ],

  // ==========================================
  // MODULE 5: RISK & ASSET ALLOCATION
  // ==========================================
  'lesson-asset-allocation': [
    {
      id: 'q-rsk-1',
      questionEn: 'Why do professional financial planners recommend maintaining an asset allocation across Equities, Debt, and Gold?',
      questionHi: 'आर्थिक विशेषज्ञ शेयर (इक्विटी), फिक्स्ड डिपॉजिट/बॉन्ड्स (डेट) और सोने के बीच संपत्ति का सही बंटवारा (Asset Allocation) करने की सलाह क्यों देते हैं?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Because different asset classes respond differently to economic conditions, smoothing out portfolio swings and protecting capital',
          textHi: 'क्योंकि विभिन्न संपत्तियां अलग-अलग परिस्थितियों में अलग व्यवहार करती हैं, जिससे पोर्टफोलियो में स्थिरता आती है और पूंजी सुरक्षित रहती है'
        },
        {
          id: 'opt-2',
          textEn: 'Because it is a legal requirement mandated by the Income Tax Department',
          textHi: 'क्योंकि इनकम टैक्स विभाग द्वारा ऐसा करना कानूनन अनिवार्य है'
        },
        {
          id: 'opt-3',
          textEn: 'Because gold is guaranteed to double every calendar year',
          textHi: 'क्योंकि सोना हर साल दोगुना होना तय है'
        },
        {
          id: 'opt-4',
          textEn: 'Because debt funds pay 25% risk-free returns',
          textHi: 'क्योंकि डेट फंड 25% का जोखिम-मुक्त रिटर्न देते हैं'
        }
      ],
      correctOptionId: 'opt-1',
      explanationEn: 'Asset classes are loosely correlated. When equities suffer a recessionary dip, fixed debt instruments provide stability and gold acts as a hedge against inflation and currency depreciation.',
      explanationHi: 'जब शेयर बाजार में गिरावट आती है तो फिक्स्ड डिपॉजिट और बॉन्ड्स स्थिरता देते हैं, और सोना संकट के समय सुरक्षा देता है। इस संतुलन से निवेशक कभी घबराता नहीं है।'
    },
    {
      id: 'q-rsk-2',
      questionEn: 'Sunita needs ₹3 Lakh in 10 months for her daughter’s college admission fees. Where should she park this money?',
      questionHi: 'सुनीता को अपनी बेटी के कॉलेज की फीस के लिए 10 महीने बाद ₹3 लाख की जरूरत है। उसे यह पैसा कहां रखना चाहिए?',
      options: [
        {
          id: 'opt-1',
          textEn: 'High-risk small-cap equity mutual funds to try to double it',
          textHi: 'पैसा बढ़ाने की उम्मीद में हाई-रिस्क स्मॉल कैप म्यूचुअल फंड में'
        },
        {
          id: 'opt-2',
          textEn: 'Safe short-term bank fixed deposits or high-safety liquid debt instruments',
          textHi: 'सुरक्षित बैंक फिक्स्ड डिपॉजिट (FD) या सुरक्षित लिक्विड फंड में'
        },
        {
          id: 'opt-3',
          textEn: 'Unregulated cryptocurrency tokens',
          textHi: 'अनरजिस्टर्ड क्रिप्टो टोकन में'
        },
        {
          id: 'opt-4',
          textEn: 'Intraday derivative options trading',
          textHi: 'इंट्राडे ऑप्शंस ट्रेडिंग में'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'For short-term goals (< 1-3 years), equity is strictly unsuitable due to short-term market volatility. Protecting the capital with 100% certainty takes absolute priority.',
      explanationHi: '1 से 3 साल से कम के लक्ष्यों के लिए शेयर बाजार बिल्कुल सही नहीं है। अगर बाजार 10% भी गिर गया तो कॉलेज की फीस अटक जाएगी। ऐसे लक्ष्यों के लिए सुरक्षित बैंक एफडी ही सही है।'
    },
    {
      id: 'q-rsk-3',
      questionEn: 'What makes Sovereign Gold Bonds (SGB) or Gold ETFs far more financially efficient than buying physical gold jewelry purely for investment?',
      questionHi: 'शुद्ध निवेश के उद्देश्य से गहनों के बजाय सॉवरेन गोल्ड बॉन्ड (SGB) या गोल्ड ETF खरीदना आर्थिक रूप से अधिक समझदारी क्यों है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'SGBs eliminate 15% - 25% jewelry making charges, wastage deductions on resale, and even pay a 2.5% annual sovereign interest',
          textHi: 'SGB में 15% से 25% मेकिंग चार्ज और बेचने पर कटौती नहीं होती, और सरकार 2.5% सालाना अतिरिक्त ब्याज भी देती है'
        },
        {
          id: 'opt-2',
          textEn: 'Jewelry can be exchanged for free shares at any bank branch',
          textHi: 'गहने किसी भी बैंक शाखा में मुफ्त शेयरों में बदले जा सकते हैं'
        },
        {
          id: 'opt-3',
          textEn: 'SGBs can be physically worn to family weddings',
          textHi: 'SGB को शादी-ब्याह में पहना जा सकता है'
        },
        {
          id: 'opt-4',
          textEn: 'Physical jewelry has zero risk of theft or locker charges',
          textHi: 'गहनों पर चोरी का कोई खतरा या लॉकर का खर्चा नहीं होता'
        }
      ],
      correctOptionId: 'opt-1',
      explanationEn: 'Gold jewelry incurs hefty making charges, GST, and purity deductions when melted. SGBs and Gold ETFs track 999 pure gold with zero making costs and zero storage anxieties.',
      explanationHi: 'गहने बनवाने पर भारी मेकिंग चार्ज और जीएसटी लगता है जो दोबारा बेचते समय कट जाता है। सॉवरेन गोल्ड बॉन्ड में 100% शुद्धता, सरकारी सुरक्षा और अतिरिक्त ब्याज मिलता है।'
    },
    {
      id: 'q-rsk-4',
      questionEn: 'What is "Portfolio Rebalancing" and why do disciplined investors perform it once a year?',
      questionHi: '"पोर्टफोलियो रिबैलेंसिंग" (Rebalancing) क्या है और समझदार निवेशक साल में एक बार इसे क्यों करते हैं?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Resetting your portfolio back to target asset weights (e.g. 60% equity / 40% debt) to lock in profits from surging assets and buy undervalued ones',
          textHi: 'पोर्टफोलियो को तय अनुपात (जैसे 60% शेयर / 40% फिक्स्ड डिपॉजिट) पर वापस लाना ताकि बढ़े हुए शेयरों से मुनाफा सुरक्षित हो सके'
        },
        {
          id: 'opt-2',
          textEn: 'Closing all existing bank accounts and switching to a new bank',
          textHi: 'सभी पुराने बैंक खाते बंद करके नया खाता खोलना'
        },
        {
          id: 'opt-3',
          textEn: 'Taking personal loans to buy whatever stock doubled yesterday',
          textHi: 'कल जो शेयर दोगुना हुआ उसे खरीदने के लिए लोन लेना'
        },
        {
          id: 'opt-4',
          textEn: 'Deleting your demat account application from your phone',
          textHi: 'फोन से ट्रेडिंग ऐप डिलीट कर देना'
        }
      ],
      correctOptionId: 'opt-1',
      explanationEn: 'If equities rally strongly and now constitute 75% of your portfolio instead of your target 60%, rebalancing trims equity profits into safe debt, safeguarding gains against market crashes.',
      explanationHi: 'अगर शेयर बाजार बहुत बढ़ गया और आपके पोर्टफोलियो में शेयरों का हिस्सा 60% के बजाय 75% हो गया, तो थोड़े शेयर बेचकर सुरक्षित एफडी में डालना रिबैलेंसिंग कहलाता है।'
    },
    {
      id: 'q-rsk-5',
      questionEn: 'What is the fundamental, universal rule regarding financial risk and expected returns?',
      questionHi: 'वित्तीय बाजार में जोखिम (Risk) और अपेक्षित मुनाफे (Return) के बीच का सार्वभौमिक नियम क्या है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Higher genuine returns inherently require accepting higher risk; risk-free high return does not exist in the real world',
          textHi: 'अधिक वास्तविक मुनाफे के लिए अधिक जोखिम उठाना अनिवार्य है; दुनिया में बिना जोखिम के भारी मुनाफे का कोई अस्तित्व नहीं है'
        },
        {
          id: 'opt-2',
          textEn: 'Government guarantees 30% risk-free returns on all mobile payment apps',
          textHi: 'सरकार सभी मोबाइल पेमेंट ऐप्स पर 30% जोखिम-मुक्त रिटर्न की गारंटी देती है'
        },
        {
          id: 'opt-3',
          textEn: 'Fixed bank deposits always beat equity returns over 25 years',
          textHi: '25 साल में बैंक एफडी हमेशा शेयर बाजार से ज्यादा रिटर्न देती है'
        },
        {
          id: 'opt-4',
          textEn: 'Wealthy investors can eliminate 100% of risk while earning 50% annual profits',
          textHi: 'अमीर लोग बिना किसी जोखिम के साल में 50% मुनाफा कमा सकते हैं'
        }
      ],
      correctOptionId: 'opt-1',
      explanationEn: 'The iron law of finance: Risk and return are inextricably linked. If anyone claims an investment delivers high returns with zero risk, you are looking at a fraud or an unsustainable scheme.',
      explanationHi: 'वित्त का सबसे बुनियादी नियम: रिटर्न और जोखिम हमेशा साथ चलते हैं। अगर कोई भी व्यक्ति बिना किसी जोखिम के भारी मुनाफे का वादा करे, तो समझ जाइए कि वह धोखा दे रहा है।'
    }
  ],

  // ==========================================
  // MODULE 6: FRAUD AWARENESS & FINFLUENCER TRAPS
  // ==========================================
  'lesson-spotting-scams': [
    {
      id: 'q-frd-1',
      questionEn: 'Which of the following is the single biggest RED FLAG signaling an outright Ponzi investment scam?',
      questionHi: 'निम्नलिखित में से कौन सा संकेत 100% वित्तीय धोखाधड़ी (स्कैम या पोंजी स्कीम) का सबसे बड़ा सबूत है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Promising "guaranteed 2% daily return with zero market risk"',
          textHi: '"बिना किसी जोखिम के रोजाना 2% गारंटीड रिटर्न" का वादा करना'
        },
        {
          id: 'opt-2',
          textEn: 'A mutual fund disclosing that past performance does not guarantee future results',
          textHi: 'म्यूचुअल फंड द्वारा यह बताना कि पुराना रिटर्न भविष्य की गारंटी नहीं है'
        },
        {
          id: 'opt-3',
          textEn: 'A nationalized bank offering 7% annual interest on a 3-year fixed deposit',
          textHi: 'सरकारी बैंक द्वारा 3 साल की एफडी पर 7% सालाना ब्याज देना'
        },
        {
          id: 'opt-4',
          textEn: 'A broker providing SEBI-mandated contract notes and risk disclosures',
          textHi: 'ब्रोकर द्वारा सेबी के नियमों के अनुसार कॉन्ट्रैक्ट नोट और जोखिम चेतावनी जारी करना'
        }
      ],
      correctOptionId: 'opt-1',
      explanationEn: 'A guaranteed 2% daily return equates to over 137,000% annually! In genuine financial markets, risk-free returns cannot exceed sovereign debt rates (approx 7%). Guaranteed daily profits are a mathematical impossibility.',
      explanationHi: 'रोजाना 2% का मतलब साल में 137,000% से ज्यादा का असंभव रिटर्न होता है! ऐसा केवल पोंजी स्कीमों में नए लोगों के पैसे से पुराने लोगों को देकर दिखाया जाता है, जो अंत में पूरा डूब जाता है।'
    },
    {
      id: 'q-frd-2',
      questionEn: 'How can an ordinary citizen reliably verify if an advisor recommending stocks or financial products is genuinely authorized by law?',
      questionHi: 'एक आम नागरिक यह कैसे जांच सकता है कि शेयर की सलाह देने वाला व्यक्ति या संस्था सच में अधिकृत (Registered) है या नहीं?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Check if they have a blue verified tick mark and rented sports cars on Instagram',
          textHi: 'इंस्टाग्राम पर ब्लू टिक और महंगी कारों की तस्वीरें देखना'
        },
        {
          id: 'opt-2',
          textEn: 'Verify their registration number directly on the official SEBI portal (sebi.gov.in) under Registered Intermediaries',
          textHi: 'सेबी की आधिकारिक वेबसाइट (sebi.gov.in) पर जाकर उनके रजिस्ट्रेशन नंबर की जांच करना'
        },
        {
          id: 'opt-3',
          textEn: 'Check if their Telegram group has over 50,000 members',
          textHi: 'टेलीग्राम ग्रुप में सदस्यों की संख्या देखना'
        },
        {
          id: 'opt-4',
          textEn: 'Ask for customer testimonials forwarded in WhatsApp screenshots',
          textHi: 'व्हाट्सएप पर फॉरवर्ड किए गए स्क्रीनशॉट्स देखना'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Under Indian law, anyone giving investment advice or research reports MUST be registered with SEBI as an RIA (Investment Adviser) or RA (Research Analyst). Always verify their registration on sebi.gov.in.',
      explanationHi: 'भारत में शेयर या निवेश की सलाह देने के लिए सेबी से RIA या RA का रजिस्ट्रेशन होना कानूनी रूप से अनिवार्य है। किसी को भी पैसे देने से पहले sebi.gov.in पर जांच जरूर करें।'
    },
    {
      id: 'q-frd-3',
      questionEn: 'An online "VIP Trading Club" asks you to transfer investment funds to a personal savings UPI ID (e.g. rajesh98@upi). What should you do?',
      questionHi: 'एक ऑनलाइन "VIP ट्रेडिंग ग्रुप" आपसे निवेश का पैसा किसी व्यक्ति के निजी UPI ID (जैसे rajesh98@upi) पर भेजने को कहता है। आपको क्या करना चाहिए?',
      options: [
        {
          id: 'opt-1',
          textEn: 'Send ₹5,000 first as a trial test to see if profits arrive',
          textHi: 'पहले ₹5,000 भेजकर देखना चाहिए कि मुनाफा आता है या नहीं'
        },
        {
          id: 'opt-2',
          textEn: 'Refuse immediately and report them; legitimate SEBI-registered brokers NEVER accept funds into personal savings UPI accounts',
          textHi: 'तुरंत मना करें और रिपोर्ट करें; सेबी से प्रमाणित ब्रोकर कभी भी किसी व्यक्ति के निजी यूपीआई में पैसा नहीं लेते'
        },
        {
          id: 'opt-3',
          textEn: 'Share your UPI PIN so their customer support can deposit the bonus',
          textHi: 'उन्हें अपना यूपीआई पिन (PIN) बता देना ताकि वे बोनस डाल सकें'
        },
        {
          id: 'opt-4',
          textEn: 'Ask them to give a handwritten stamp paper receipt via WhatsApp',
          textHi: 'व्हाट्सएप पर स्टांप पेपर की रसीद मांगना'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Legitimate SEBI brokers and clearing corporations collect funds strictly via registered corporate payment gateways into designated client escrow accounts. Transfers to personal UPI IDs are 100% fraudulent.',
      explanationHi: 'अधिकृत ब्रोकर कभी भी किसी व्यक्ति के निजी बैंक खाते या यूपीआई में पैसा नहीं लेते। निजी खाते में पैसा ट्रांसफर करने का मतलब है कि वह पैसा कभी वापस नहीं आएगा।'
    },
    {
      id: 'q-frd-4',
      questionEn: 'What is illegal "Dabba Trading" (bucket shop trading) in the context of Indian financial markets?',
      questionHi: 'भारतीय शेयर बाजार के संदर्भ में गैरकानूनी "डब्बा ट्रेडिंग" (Dabba Trading) क्या होती है?',
      options: [
        {
          id: 'opt-1',
          textEn: 'An authorized SEBI scheme for trading paper food containers',
          textHi: 'भोजन के डिब्बे बनाने वाली कंपनियों में ट्रेडिंग की अधिकृत योजना'
        },
        {
          id: 'opt-2',
          textEn: 'Illegal off-exchange gambling where trades are not executed on NSE/BSE, offering zero legal protection or contract notes',
          textHi: 'स्टॉक एक्सचेंज (NSE/BSE) के बाहर की जाने वाली अवैध सट्टेबाजी, जिसमें न तो कोई कानूनी सुरक्षा होती है और न कोई पक्का बिल'
        },
        {
          id: 'opt-3',
          textEn: 'Buying stocks through physical post office counters',
          textHi: 'डाकघर के जरिए शेयर खरीदना'
        },
        {
          id: 'opt-4',
          textEn: 'A subsidized mutual fund scheme for rural women',
          textHi: 'ग्रामीण महिलाओं के लिए सरकारी म्यूचुअल फंड योजना'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Dabba Trading operates outside stock exchanges without clearing house guarantees. It is a criminal offense under Section 23 of the SCRA Act. If the operator runs away, you have zero recourse to recover funds.',
      explanationHi: 'डब्बा ट्रेडिंग अवैध रूप से बिना बिल और बिना एक्सचेंज के पर्चियों पर किया जाने वाला सट्टा है। यह गैरकानूनी है और ऑपरेटर के भाग जाने पर पैसे वापस पाने का कोई कानूनी रास्ता नहीं होता।'
    },
    {
      id: 'q-frd-5',
      questionEn: 'What is the official National Cyber Crime & Financial Fraud Helpline number in India to report online banking or investment theft?',
      questionHi: 'भारत में ऑनलाइन वित्तीय धोखाधड़ी या बैंक खाते से ठगी की तुरंत शिकायत दर्ज कराने के लिए राष्ट्रीय हेल्पलाइन नंबर क्या है?',
      options: [
        {
          id: 'opt-1',
          textEn: '100',
          textHi: '100'
        },
        {
          id: 'opt-2',
          textEn: '1930 (National Cyber Crime Reporting Helpline)',
          textHi: '1930 (राष्ट्रीय साइबर अपराध हेल्पलाइन)'
        },
        {
          id: 'opt-3',
          textEn: '911',
          textHi: '911'
        },
        {
          id: 'opt-4',
          textEn: '1800-00-00',
          textHi: '1800-00-00'
        }
      ],
      correctOptionId: 'opt-2',
      explanationEn: 'Dialing 1930 connects victims to the Indian Cyber Crime Coordination Centre (I4C). Reporting fraud during the "golden hour" enables law enforcement and banks to freeze fraudulent transfers.',
      explanationHi: '1930 भारत सरकार की राष्ट्रीय साइबर वित्तीय धोखाधड़ी हेल्पलाइन है। घटना के तुरंत बाद 1930 पर कॉल करने से ठगों के बैंक खातों में पैसे फ्रीज कराने में मदद मिलती है।'
    }
  ]
};

export function getQuizzesForLesson(lessonId: string): LessonQuiz[] {
  return lessonQuizzes[lessonId] || [];
}
