import { PresetClaim, ClaimVerificationResult } from '../types';

export const presetClaims: PresetClaim[] = [
  {
    id: 'claim-daily-bot',
    titleEn: 'Guaranteed 2.5% Daily Return via "AI Arbitrage Robot"',
    titleHi: 'एआई ट्रेडिंग बॉट से रोजाना 2.5% गारंटीड मुनाफा',
    category: 'High-Yield Trading Bot',
    sampleClaim: 'Invest minimum ₹10,000 into our automated AI Bot. Guaranteed 2.5% daily return credited to your wallet every 24 hours. Zero risk, instant withdrawals, 100% principal protection.',
    result: {
      verdict: 'SCAM_ALERT',
      score: 98,
      headlineEn: 'Blatant Ponzi Scheme & Unauthorized Deposit Trap',
      headlineHi: 'धोखाधड़ी: पोंजी स्कीम और गैरकानूनी जमा योजना',
      explanationEn: 'This claim is mathematically impossible and completely illegal under Indian law. A 2.5% daily return, compounded over a single year, would turn ₹10,000 into over ₹78 Crores! No legitimate bank, corporation, or hedge fund on planet earth can generate such returns. They are simply taking money from new depositors to pay older ones.',
      explanationHi: 'यह दावा गणितीय और कानूनी रूप से बिल्कुल असंभव है। रोजाना 2.5% चक्रवृद्धि रिटर्न से ₹10,000 एक ही साल में ₹78 करोड़ बन जाएंगे! दुनिया का कोई भी बैंक या फंड ऐसा रिटर्न नहीं दे सकता। यह सिर्फ नए लोगों के पैसे से पुराने लोगों को थोड़ा पैसा दिखाकर फंसाने वाला पोंजी स्कैम है।',
      redFlagsEn: [
        'Guaranteed daily profit in market-linked trading (Strictly forbidden under SEBI regulations).',
        'Mathematical absurdity: 2.5% daily equals > 800,000% annual compounded return.',
        'Zero risk claim: All financial market trading carries substantial principal risk.',
        'Unregulated overseas or private wallet payments avoiding RBI banking channels.'
      ],
      redFlagsHi: [
        'बाजार आधारित ट्रेडिंग में "गारंटीड दैनिक रिटर्न" का वादा (सेबी नियमों के तहत पूर्णतः गैरकानूनी)।',
        'गणितीय रूप से असंभव: रोजाना 2.5% का मतलब साल में 8 लाख प्रतिशत से अधिक का रिटर्न।',
        'शून्य जोखिम का दावा: दुनिया के किसी भी बाजार में पूंजी का जोखिम हमेशा रहता है।',
        'आरबीआई द्वारा मान्यता प्राप्त बैंक खातों के बजाय निजी वॉलेट या क्रिप्टो में लेन-देन।'
      ],
      regulatoryNoteEn: 'SEBI Circular (PR No. 18/2022) explicitly warns citizens against unauthorized automated algorithmic trading and high-frequency platforms offering assured returns.',
      regulatoryNoteHi: 'सेबी सर्कुलर (PR No. 18/2022) आम नागरिकों को किसी भी प्रकार के ऑटोमेटेड एल्गोरिथमिक बॉट या निश्चित रिटर्न देने वाले प्लेटफॉर्म्स से दूर रहने की सख्त चेतावनी देता है।',
      theMathEn: '₹10,000 at 2.5% daily compounded for 365 days = ₹78,82,00,000 (₹78.8 Crores). If the creators had this bot, they would not need your ₹10,000.',
      theMathHi: '₹10,000 पर रोजाना 2.5% का चक्रवृद्धि मुनाफा 1 साल में ₹78 करोड़ से ज्यादा बनता है। अगर उनके पास सच में ऐसी तकनीक होती, तो उन्हें आपसे ₹10,000 मांगने की जरूरत नहीं पड़ती।',
      actionAdviceEn: [
        'Do not deposit any money. If you already deposited, attempt immediate withdrawal.',
        'Never share bank OTPs or install remote desktop apps (AnyDesk, TeamViewer).',
        'Report the mobile number and website to National Cyber Crime portal (cybercrime.gov.in or call 1930).'
      ],
      actionAdviceHi: [
        'एक भी रुपया जमा न करें। अगर पहले ही जमा कर चुके हैं, तो तुरंत पैसे निकालने की कोशिश करें।',
        'कभी भी बैंक ओटीपी शेयर न करें और न ही AnyDesk या TeamViewer जैसा कोई ऐप डाउनलोड करें।',
        'नेशनल साइबर क्राइम पोर्टल (cybercrime.gov.in या हेल्पलाइन 1930) पर तुरंत शिकायत दर्ज करें।'
      ]
    }
  },
  {
    id: 'claim-telegram-tips',
    titleEn: 'VIP Telegram Group: "95% Accurate Intraday Jackpot Calls"',
    titleHi: 'टेलीग्राम VIP ग्रुप: 95% सटीक जैकपॉट इंट्राडे टिप्स',
    category: 'Telegram/WhatsApp Tipster',
    sampleClaim: 'Join our exclusive Premium Telegram VIP Channel for ₹4,999/month. 95% accuracy in BankNifty & Options calls. Turn ₹20,000 into ₹1 Lakh every week. Limited slots left!',
    result: {
      verdict: 'SCAM_ALERT',
      score: 92,
      headlineEn: 'Unregistered Tip-Baiting & Pump-and-Dump Syndicate',
      headlineHi: 'अवैध टिप-चैनल और खुदरा निवेशकों को फंसाने वाला सिंडिकेट',
      explanationEn: 'Under Section 11 of the SEBI Act, providing investment advice, stock tips, or price targets for consideration requires an official SEBI Research Analyst (RA) or Investment Adviser (RIA) registration. These anonymous Telegram admins manipulate illiquid options contracts and exit their own positions while leaving subscribers with heavy losses.',
      explanationHi: 'सेबी कानून के तहत किसी भी व्यक्ति को पैसे लेकर स्टॉक या ऑप्शंस की टिप देने के लिए सेबी से मान्यता प्राप्त (SEBI RIA/RA) होना अनिवार्य है। ये अज्ञात टेलीग्राम एडमिन खुद सस्ते में खरीदकर अपने सब्सक्राइबर्स को खरीदने के लिए उकसाते हैं और खुद मुनाफा लेकर गायब हो जाते हैं।',
      redFlagsEn: [
        'Anonymous operators hiding behind burner SIM cards and Telegram handles.',
        'Claims of 95% accuracy in options trading (even world-class quant firms rarely exceed 55-60% win rates).',
        'Artificial urgency: "Limited slots", "Offer ends in 1 hour" to bypass rational thinking.',
        'Payment collected through personal Google Pay / PhonePe UPI accounts instead of a SEBI registered entity.'
      ],
      redFlagsHi: [
        'अज्ञात लोग जो असली नाम या सेबी रजिस्ट्रेशन नंबर सार्वजनिक नहीं करते।',
        'ऑप्शंस ट्रेडिंग में 95% सटीकता का झूठा दावा (दुनिया के सबसे बड़े पेशेवर फंड्स भी 55-60% से ऊपर नहीं जा पाते)।',
        'जल्दबाजी का दबाव: "केवल 5 सीटें बची हैं", "1 घंटे में ऑफर खत्म" ताकि सोचने का समय न मिले।',
        'पैसे किसी आधिकारिक कंपनी के बजाय निजी फोनपे या गूगल पे नंबर पर मंगाना।'
      ],
      regulatoryNoteEn: 'SEBI strictly prohibits fee-based trading calls without a valid Registration Number (e.g., INH00000XXXX). SEBI has frozen hundreds of crores from illegal Telegram operators in recent crackdowns.',
      regulatoryNoteHi: 'सेबी के वैध रजिस्ट्रेशन नंबर के बिना फीस लेकर टिप्स देना गैरकानूनी है। सेबी ने हाल ही में ऐसे कई अवैध टेलीग्राम चैनलों के सैकड़ों करोड़ रुपये जब्त किए हैं।',
      theMathEn: 'If someone could reliably turn ₹20,000 into ₹1,00,000 every single week (5x weekly), in 10 weeks they would possess ₹19,531 Crores. Why would they charge you ₹4,999 for a subscription?',
      theMathHi: 'यदि कोई सच में हर हफ्ते ₹20,000 को ₹1 लाख (5 गुना) बना सकता, तो 10 हफ्तों में उसके पास ₹19,000 करोड़ होते। वह आपसे ₹4,999 की मासिक फीस क्यों मांगता?',
      actionAdviceEn: [
        'Ask for their SEBI RA/RIA Registration Certificate and verify it on sebi.gov.in.',
        'Mute and leave the Telegram channel immediately.',
        'Remember SEBI statistic: 93% of retail traders lose capital in F&O trading.'
      ],
      actionAdviceHi: [
        'उनसे उनका सेबी रजिस्ट्रेशन नंबर मांगें और sebi.gov.in पर चेक करें।',
        'तुरंत ऐसे टेलीग्राम चैनल छोड़ें और रिपोर्ट करें।',
        'याद रखें कि सेबी के अनुसार 93% आम खुदरा निवेशक F&O में अपना पैसा गंवाते हैं।'
      ]
    }
  },
  {
    id: 'claim-pre-ipo-hype',
    titleEn: 'Pre-IPO "Guaranteed 300% Listing Gains" in Unlisted Tech Startup',
    titleHi: 'अनलिस्टेड शेयरों में 300% लिस्टिंग गेन की पक्की गारंटी',
    category: 'Unlisted Securities',
    sampleClaim: 'Exclusive pre-IPO shares of famous tech unicorn available before public issue. Guaranteed 3x gains on NSE listing day. Minimum investment ₹50,000. Act before allotment closes.',
    result: {
      verdict: 'HIGH_RISK',
      score: 78,
      headlineEn: 'Extreme Illiquidity Risk & Unsubstantiated Valuation Hype',
      headlineHi: 'अत्यधिक जोखिम: अनलिस्टेड शेयरों में फंसे पैसे और अत्यधिक मूल्यांकन',
      explanationEn: 'While investing in legitimate unlisted shares is not illegal, guaranteeing 300% listing gains is a fraudulent misrepresentation. Many tech startups that listed on Indian exchanges between 2021-2024 (e.g. Paytm, Nykaa, Cartrade) crashed 40% to 70% below their issue price. Unlisted shares also carry zero liquidity before IPO and a statutory mandatory 6-month lock-in post listing.',
      explanationHi: 'हालांकि अनलिस्टेड शेयरों में निवेश पूरी तरह गैरकानूनी नहीं है, लेकिन "300% लिस्टिंग गेन की गारंटी" सरासर भ्रामक है। 2021-2024 के बीच कई बड़ी टेक कंपनियों के शेयर लिस्टिंग के बाद 40% से 70% तक गिर गए थे। इसके अलावा लिस्टिंग के बाद 6 महीने तक शेयर बेचने पर सरकारी पाबंदी (लॉक-इन) होती है।',
      redFlagsEn: [
        'Promise of guaranteed listing pops (Listing day price is strictly determined by market demand and supply).',
        'Zero liquidity: If the IPO is delayed or canceled, your money is trapped indefinitely with no secondary market exit.',
        'High markup fees charged by middlemen on unlisted share transfers.',
        'Mandatory 6-month lock-in period mandated by SEBI for pre-IPO investors post-listing.'
      ],
      redFlagsHi: [
        'लिस्टिंग के दिन भारी मुनाफे की झूठी गारंटी (लिस्टिंग का भाव बाजार तय करता है)।',
        'पैसे फंसने का भारी खतरा: यदि कंपनी का आईपीओ टल गया, तो आप अपने शेयर आसानी से बेच नहीं पाएंगे।',
        'बिचौलियों द्वारा बहुत महंगा भाव वसूलना।',
        'सेबी के नियमानुसार लिस्टिंग के बाद 6 महीने तक प्री-आईपीओ शेयर बेचने पर कानूनी रोक।'
      ],
      regulatoryNoteEn: 'SEBI cautions retail investors that unlisted market platforms do not enjoy the investor protection mechanism, grievance redressal, or circuit filters of regulated stock exchanges.',
      regulatoryNoteHi: 'सेबी खुदरा निवेशकों को आगाह करता है कि अनलिस्टेड बाजार में मान्यता प्राप्त स्टॉक एक्सचेंजों जैसी निवेशक सुरक्षा या शिकायत निवारण की व्यवस्था नहीं होती।',
      theMathEn: 'Between 2021 and 2024, nearly 60% of high-profile consumer tech IPOs were trading below their private round valuations 12 months after listing.',
      theMathHi: '2021 से 2024 के बीच 60% से ज्यादा नई टेक कंपनियों के शेयर लिस्टिंग के 1 साल बाद अपने पुराने निजी भाव से भी नीचे चले गए थे।',
      actionAdviceEn: [
        'Demand audited financial statements (P&L and Balance Sheet) of the unlisted company.',
        'Never allocate more than 2% to 3% of your net worth to illiquid private shares.',
        'Avoid any agent who promises guaranteed listing day returns.'
      ],
      actionAdviceHi: [
        'कंपनी के पिछले 3 साल के ऑडिटेड बैलेंस शीट और मुनाफे की जांच करें।',
        'अपनी कुल संपत्ति का 2-3% से ज्यादा कभी भी ऐसे अनलिस्टेड शेयरों में न लगाएं।',
        'गारंटीड लिस्टिंग मुनाफे का वादा करने वाले किसी भी दलाल से दूर रहें।'
      ]
    }
  },
  {
    id: 'claim-index-fund-sip',
    titleEn: 'Nifty 50 Index Mutual Fund: "12% Historical Long-Term CAGR"',
    titleHi: 'निफ्टी 50 इंडेक्स फंड: "12% ऐतिहासिक दीर्घकालिक औसत रिटर्न"',
    category: 'Regulated Mutual Fund',
    sampleClaim: 'Start a monthly SIP of ₹3,000 in a low-cost Nifty 50 Index Fund. Historically, India’s top 50 companies have delivered ~12% annualized returns over 15-year periods. Mutual fund investments are subject to market risks.',
    result: {
      verdict: 'LEGITIMATE_BENCHMARK',
      score: 12,
      headlineEn: 'Realistic, Regulated, & Evidence-Based Investment Benchmark',
      headlineHi: 'विश्वसनीय और सेबी द्वारा मान्यता प्राप्त संतुलित निवेश विकल्प',
      explanationEn: 'This claim is grounded in sound financial history and SEBI disclosure standards. Over rolling 15-year periods across the last 25 years, the Nifty 50 Total Returns Index has yielded approximately 11% to 13% CAGR in Indian Rupees. It accurately discloses that returns are market-linked, requires long-term patience, and does not promise fixed returns.',
      explanationHi: 'यह दावा वास्तविक वित्तीय इतिहास और सेबी के नियमों के बिल्कुल अनुरूप है। पिछले 25 वर्षों में निफ्टी 50 ने 15 साल की अवधि में औसतन 11% से 13% सालाना चक्रवृद्धि रिटर्न (CAGR) दिया है। इसमें कोई निश्चित मुनाफे की झूठी गारंटी नहीं दी गई है और बाजार जोखिमों का स्पष्ट उल्लेख है।',
      redFlagsEn: [
        'No deceptive red flags detected.',
        'Includes mandatory statutory risk disclaimer ("Subject to market risks").',
        'Does not promise guaranteed fixed returns; references historical benchmarks.',
        'Operated through SEBI-regulated Asset Management Companies (AMCs).'
      ],
      redFlagsHi: [
        'कोई धोखाधड़ी या फर्जी संकेत नहीं मिले।',
        'वैधानिक जोखिम चेतावनी ("बाजार जोखिमों के अधीन") शामिल है।',
        'निश्चित मुनाफे का कोई झूठा दावा नहीं, बल्कि ऐतिहासिक आंकड़ों का सही संदर्भ है।',
        'सेबी द्वारा पूरी तरह से विनियमित म्यूचुअल फंड कंपनियों के माध्यम से संचालित।'
      ],
      regulatoryNoteEn: 'Compliant with SEBI (Mutual Funds) Regulations, 1996 and AMFI advertising code of conduct.',
      regulatoryNoteHi: 'सेबी म्यूचुअल फंड नियमावली और एम्फी (AMFI) के विज्ञापन आचार संहिता के पूरी तरह अनुरूप।',
      theMathEn: 'A disciplined SIP of ₹3,000 per month at 12% CAGR over 15 years results in ~₹15 Lakhs accumulated on a total principal contribution of ₹5.4 Lakhs.',
      theMathHi: 'हर महीने ₹3,000 की अनुशासित एसआईपी से 15 साल में कुल ₹5.4 लाख जमा होते हैं, जो 12% की दर से बढ़कर लगभग ₹15 लाख हो जाते हैं।',
      actionAdviceEn: [
        'Choose a "Direct - Growth" plan with low tracking error (<0.1%) and low expense ratio (<0.2%).',
        'Maintain a continuous investment horizon of at least 7 to 10+ years to ride out market cycles.',
        'Automate your monthly debit to instill financial discipline.'
      ],
      actionAdviceHi: [
        'हमेशा "Direct - Growth" प्लान चुनें जिसका खर्चा (Expense Ratio) 0.2% से कम हो।',
        'कम से कम 7 से 10 वर्ष की लंबी अवधि का लक्ष्य लेकर चलें ताकि उतार-चढ़ाव का असर खत्म हो सके।',
        'हर महीने अपने बैंक से ऑटो-डेबिट सेट करें ताकि बचत में निरंतरता बनी रहे।'
      ]
    }
  }
];

export function analyzeCustomClaim(claimText: string): ClaimVerificationResult {
  const text = claimText.toLowerCase();

  // Pattern detection
  const hasGuaranteed = text.includes('guarantee') || text.includes('assured') || text.includes('100% safe') || text.includes('zero risk') || text.includes('no loss') || text.includes('पक्का') || text.includes('गारंटी');
  const hasDailyRate = text.includes('daily') || text.includes('per day') || text.includes('हर दिन') || text.includes('रोजाना') || text.includes('% a day');
  const hasExtremeMonthly = text.includes('monthly 1') || text.includes('monthly 2') || text.includes('monthly 3') || text.includes('20% monthly') || text.includes('25%') || text.includes('30%') || text.includes('महीने का');
  const hasTelegramWhatsApp = text.includes('telegram') || text.includes('whatsapp') || text.includes('group') || text.includes('vip channel') || text.includes('टिप्स') || text.includes('jackpot');
  const hasBotForexCrypto = text.includes('bot') || text.includes('crypto') || text.includes('forex') || text.includes('robot') || text.includes('dabba') || text.includes('algo');
  const hasDoubleMoney = text.includes('double') || text.includes('triple') || text.includes('2x') || text.includes('3x') || text.includes('दोगुना') || text.includes('तिगुना');
  const hasMutualFundOrSip = text.includes('mutual fund') || text.includes('sip') || text.includes('nifty') || text.includes('index fund') || text.includes('म्यूचुअल फंड') || text.includes('ppf') || text.includes('sgb');

  // If safe benchmark style
  if (hasMutualFundOrSip && !hasGuaranteed && !hasDailyRate && !hasExtremeMonthly) {
    return {
      verdict: 'LEGITIMATE_BENCHMARK',
      score: 18,
      headlineEn: 'Realistic Regulated Financial Instrument Framework',
      headlineHi: 'यथार्थवादी और विनियमित वित्तीय साधन रूपरेखा',
      explanationEn: 'This query refers to standard regulated Indian financial products (such as Mutual Funds, Index Funds, or Government savings schemes). When kept for long horizons (5-10+ years), diversified equities historically offer 11-13% nominal returns with market volatility.',
      explanationHi: 'यह विवरण सामान्य विनियमित भारतीय वित्तीय साधनों (जैसे म्यूचुअल फंड, इंडेक्स फंड या सरकारी बचत योजनाओं) से संबंधित प्रतीत होता है। लंबी अवधि (5-10 वर्ष) में विविध इक्विटी ऐतिहासिक रूप से बाजार के उतार-चढ़ाव के साथ 11-13% रिटर्न देती रही हैं।',
      redFlagsEn: [
        'Market volatility risk still applies in short-term periods.',
        'Ensure you buy via direct AMC platforms or SEBI-registered brokers, not unregistered third parties.'
      ],
      redFlagsHi: [
        'कम अवधि में बाजार के उतार-चढ़ाव का जोखिम हमेशा रहता है।',
        'हमेशा अधिकृत सेबी रजिस्टर्ड ब्रोकर या सीधे फंड हाउस की वेबसाइट से ही निवेश करें।'
      ],
      regulatoryNoteEn: 'Regulated under SEBI (Mutual Funds) Regulations. Never pay cash or transfer to personal accounts.',
      regulatoryNoteHi: 'सेबी द्वारा विनियमित। कभी भी नकद में भुगतान न करें या किसी के व्यक्तिगत खाते में पैसे न भेजें।',
      theMathEn: 'Disciplined compounding over 10-15 years beats inflation without needing speculative gambles.',
      theMathHi: '10-15 वर्षों तक अनुशासित बचत और निवेश बिना किसी जोखिम भरे सट्टे के महंगाई को मात देने का सबसे सुरक्षित तरीका है।',
      actionAdviceEn: [
        'Verify that the product is issued by an RBI or SEBI regulated entity.',
        'Review the Product Risk-o-meter before investing.',
        'Always choose Direct - Growth plans to save distributor commissions.'
      ],
      actionAdviceHi: [
        'जांचें कि क्या यह सेबी या आरबीआई द्वारा प्रमाणित संस्थान का उत्पाद है।',
        'निवेश से पहले स्कीम का रिस्कोमीटर (Risk-o-meter) जरूर देखें।',
        'कमीशन बचाने के लिए हमेशा डायरेक्ट प्लान ही चुनें।'
      ]
    };
  }

  // Calculate risk indicators
  const redFlagsEn: string[] = [];
  const redFlagsHi: string[] = [];
  let score = 45;

  if (hasGuaranteed) {
    score += 35;
    redFlagsEn.push('Illegal "Guaranteed Return" promise on market-linked investments.');
    redFlagsHi.push('मार्केट आधारित निवेश पर गैरकानूनी "गारंटीड मुनाफे" का झूठा वादा।');
  }

  if (hasDailyRate || hasDoubleMoney) {
    score += 25;
    redFlagsEn.push('Absurd mathematical yield: Any daily or rapid doubling claim is an unmistakable Ponzi red flag.');
    redFlagsHi.push('गणितीय रूप से असंभव वादा: रोजाना मुनाफा या कम समय में पैसा दोगुना करने का दावा केवल पोंजी घोटालों में होता है।');
  }

  if (hasTelegramWhatsApp) {
    score += 15;
    redFlagsEn.push('Unregistered social media channel operator violating SEBI Research Analyst rules.');
    redFlagsHi.push('सोशल मीडिया और टेलीग्राम पर अवैध रूप से टिप्स बांटने वाला गिरोह जो सेबी से रजिस्टर्ड नहीं है।');
  }

  if (hasBotForexCrypto) {
    score += 15;
    redFlagsEn.push('Unregulated foreign exchange / automated bot platform outside RBI jurisdiction.');
    redFlagsHi.push('विदेशी मुद्रा या रोबोटिक ट्रेडिंग प्लेटफॉर्म जो भारतीय रिज़र्व बैंक के दायरे से बाहर है।');
  }

  score = Math.min(score, 99);

  let verdict: ClaimVerificationResult['verdict'] = 'SCAM_ALERT';
  let headlineEn = 'High-Confidence Scam Warning: Regulatory & Mathematical Red Flags';
  let headlineHi = 'सावधान: गंभीर धोखाधड़ी (स्कैम) के पक्के संकेत';

  if (score < 60) {
    verdict = 'CAUTION';
    headlineEn = 'Unverified Financial Pitch: Proceed With Extreme Caution';
    headlineHi = 'अपुष्ट वित्तीय दावा: अत्यधिक सावधानी बरतने की आवश्यकता';
  } else if (score < 80) {
    verdict = 'HIGH_RISK';
    headlineEn = 'Severe Risk of Permanent Capital Destruction';
    headlineHi = 'पूंजी डूबने का अत्यधिक गंभीर जोखिम';
  }

  return {
    verdict,
    score,
    headlineEn,
    headlineHi,
    explanationEn: `Our forensic engine analyzed this pitch and flagged severe structural warning signs. Legitimate financial markets in India offer safe risk-free returns of ~6.5% - 7.5% (Bank FDs/Sovereign Bonds) or market-linked long-term equity growth of ~11% - 13%. Any claim guaranteeing higher or rapid payouts operates by paying early participants with new depositors' money until the scheme abruptly collapses.`,
    explanationHi: `हमारे विश्लेषण इंजन ने इस दावे में गंभीर धोखाधड़ी के लक्षण पाए हैं। भारत में सुरक्षित सरकारी बॉन्ड या बैंक एफडी पर 6.5% से 7.5% का ब्याज मिलता है, और शेयर बाजार लंबी अवधि में औसतन 11-13% सालाना बढ़ता है। जो भी इससे ज्यादा या बहुत जल्दी मुनाफा देने का वादा करे, वह सिर्फ लोगों का पैसा हड़पने का जाल है।`,
    redFlagsEn: redFlagsEn.length > 0 ? redFlagsEn : [
      'Unsubstantiated return promises lacking statutory risk disclosures.',
      'Absence of a verifiable SEBI RIA / RA registration license number.'
    ],
    redFlagsHi: redFlagsHi.length > 0 ? redFlagsHi : [
      'बिना किसी वैधानिक जोखिम चेतावनी के बड़े मुनाफे का लालच।',
      'सेबी (SEBI) रजिस्ट्रेशन नंबर का अभाव।'
    ],
    regulatoryNoteEn: 'SEBI Investor Charter states: "Do not deal with unregistered intermediaries. Verify the registration of the entity on SEBI website (www.sebi.gov.in) before investing."',
    regulatoryNoteHi: 'सेबी इन्वेस्टर चार्टर का स्पष्ट निर्देश: "अनरजिस्टर्ड बिचौलियों के साथ कभी लेनदेन न करें। निवेश करने से पहले सेबी की वेबसाइट (www.sebi.gov.in) पर संस्था की मान्यता की पुष्टि अवश्य करें।"',
    theMathEn: 'Safe sovereign debt pays ~7.2% per year. Anything offering 1% to 2% per month (or daily) is 3x to 15x higher than the country’s economic growth rate. Sustainable businesses cannot pay this.',
    theMathHi: 'भारत सरकार के सुरक्षित बॉन्ड साल का लगभग 7.2% ब्याज देते हैं। जो योजना महीने का 2% या रोजाना मुनाफा दे, वह देश की आर्थिक विकास दर से कई गुना ज्यादा है। कोई भी वैध व्यवसाय ऐसा नहीं कर सकता।',
    actionAdviceEn: [
      'Never transfer funds to any personal UPI ID or unverified bank account.',
      'Ask the promoter: "What is your SEBI RIA/RA registration number?" and verify it on sebi.gov.in.',
      'If pressured to act immediately, walk away. Urgency is the fraudster’s primary psychological weapon.'
    ],
    actionAdviceHi: [
      'किसी भी निजी यूपीआई (UPI) आईडी या व्यक्तिगत बैंक खाते में कभी पैसे न भेजें।',
      'दावा करने वाले से पूछें: "आपका सेबी रजिस्ट्रेशन नंबर क्या है?" और उसे sebi.gov.in पर जांचें।',
      'अगर कोई तुरंत पैसे लगाने का दबाव बनाए, तो बिल्कुल पीछे हट जाएं। जल्दबाजी कराना ठगों का सबसे बड़ा हथियार है।'
    ]
  };
}
