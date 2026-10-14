import { LearningModule } from '../types';
import { lessonQuizzes } from './quizData';

export const learningModules: LearningModule[] = [
  {
    id: 'module-saving',
    titleEn: 'Saving & Emergency Fund: Your Financial Shield',
    titleHi: 'बचत और इमरजेंसी फंड: आपकी वित्तीय ढाल',
    subtitleEn: 'Before you seek returns, you must protect your household from unforeseen shocks.',
    subtitleHi: 'मुनाफे के बारे में सोचने से पहले, अप्रत्याशित संकटों से अपने परिवार को सुरक्षित करें।',
    iconName: 'Shield',
    badgeEn: 'Pillar 1',
    badgeHi: 'पहला स्तंभ',
    lessons: [
      {
        id: 'lesson-emergency-fund',
        titleEn: 'Why You Need 6 Months of Expenses in Liquid Assets',
        titleHi: 'तरल संपत्तियों में 6 महीने के खर्च का बैकअप क्यों जरूरी है?',
        duration: '5 min read',
        category: 'saving',
        summaryEn: 'An emergency fund prevents you from selling long-term investments during job loss, hospitalizations, or urgent family needs.',
        summaryHi: 'इमरजेंसी फंड आपको नौकरी जाने या बीमारी जैसी मुश्किल घड़ी में अपने पुराने निवेश सस्ते में बेचने से बचाता है।',
        contentEn: {
          introduction: 'In India, medical emergencies or sudden income disruptions are the #1 cause of households falling into debt traps. An emergency fund is not an investment to make you rich; it is an insurance policy that guarantees peace of mind.',
          keyPoints: [
            'Calculate monthly non-negotiable expenses: rent/EMI, groceries, school fees, utilities, and insurance premiums.',
            'Aim for 3 to 6 months of expenses if you have a stable salaried job; 6 to 9 months if you are self-employed or in volatile sectors.',
            'Keep this money strictly in high-safety liquid instruments: a sweep-in savings bank account or top-tier Liquid Mutual Funds (which invest in 91-day government treasury bills).',
            'Never lock your emergency fund in 5-year fixed deposits with withdrawal penalties, equity shares, or real estate.'
          ],
          mythVsFact: {
            myth: 'I can use my credit card limit or take a personal loan if an emergency strikes.',
            fact: 'Personal loans carry 14% to 24% interest, and credit card rollover interest exceeds 40% p.a. A real emergency fund costs nothing and carries zero debt liability.'
          },
          proTip: 'Park 50% in a separate savings account with debit card access, and 50% in an overnight or liquid mutual fund with instant redemption up to ₹50,000.'
        },
        contentHi: {
          introduction: 'भारत में अचानक आई बीमारी या नौकरी छूटने की स्थिति परिवारों को कर्ज के दलदल में धकेलने का सबसे बड़ा कारण है। इमरजेंसी फंड अमीर बनने के लिए नहीं, बल्कि मानसिक शांति और सुरक्षा के लिए बनाया जाता है।',
          keyPoints: [
            'अपने जरूरी मासिक खर्चों का हिसाब लगाएं: किराया/ईएमआई, राशन, बच्चों की फीस, बिजली का बिल और बीमा प्रीमियम।',
            'यदि आप सुरक्षित नौकरी में हैं तो 3 से 6 महीने का खर्च रखें; अगर व्यापार या फ्रीलांसिंग करते हैं तो 6 से 9 महीने का फंड रखें।',
            'यह पैसा हमेशा सुरक्षित और तुरंत निकलने वाली जगह पर होना चाहिए: जैसे बचत खाता या लिक्विड म्यूचुअल फंड।',
            'इमरजेंसी फंड को कभी भी 5 साल के लॉक-इन वाले प्लान या शेयर बाजार में न फंसाएं।'
          ],
          mythVsFact: {
            myth: 'अगर कोई मुसीबत आई तो मैं क्रेडिट कार्ड या पर्सनल लोन ले लूंगा।',
            fact: 'पर्सनल लोन पर 14% से 24% और क्रेडिट कार्ड पर 40% तक ब्याज लगता है। अपनी बचत का इमरजेंसी फंड कर्ज के फंदे से बचाता है।'
          },
          proTip: 'आधा पैसा किसी अलग बचत खाते में रखें और बाकी आधा किसी अच्छे लिक्विड म्यूचुअल फंड में रखें।'
        },
        quiz: lessonQuizzes['lesson-emergency-fund'][0],
        quizzes: lessonQuizzes['lesson-emergency-fund']
      }
    ]
  },
  {
    id: 'module-inflation',
    titleEn: 'Inflation & Purchasing Power: The Silent Thief',
    titleHi: 'महंगाई और क्रय शक्ति: जेब का अदृश्य चोर',
    subtitleEn: 'Why keeping cash in an almirah or low-interest account guarantees a real loss of wealth.',
    subtitleHi: 'अलमारी में नकद पैसा रखना या कम ब्याज वाले खाते में छोड़ने से पैसा कैसे घटता जाता है।',
    iconName: 'TrendingDown',
    badgeEn: 'Pillar 2',
    badgeHi: 'दूसरा स्तंभ',
    lessons: [
      {
        id: 'lesson-rule-of-72',
        titleEn: 'The Rule of 72 & The Real Cost of Living',
        titleHi: '72 का नियम (Rule of 72) और जीने की वास्तविक लागत',
        duration: '6 min read',
        category: 'inflation',
        summaryEn: 'If inflation in India averages 6% per annum, the cost of groceries, healthcare, and education doubles every 12 years.',
        summaryHi: 'यदि भारत में औसत महंगाई 6% सालाना रहती है, तो हर 12 साल में रहने का खर्च दोगुना हो जाता है।',
        contentEn: {
          introduction: 'Most people look at the nominal balance in their bank passbook and feel reassured. But money has value only for what it can purchase. If a ₹100 grocery basket costs ₹106 next year, and your bank savings only paid you 3% interest (₹103), you have actually become poorer in real terms.',
          keyPoints: [
            'Nominal Return vs Real Return: Real Return = Nominal Return minus Inflation minus Taxes.',
            'The Rule of 72: Divide 72 by the annual inflation rate to find out how quickly prices will double. At 6% inflation, prices double in 72 / 6 = 12 years.',
            'Lifestyle Inflation: Education and healthcare costs in India often rise at 10% to 12% per annum, far outpacing the standard Consumer Price Index (CPI).',
            'To build genuine wealth, your investment portfolio must generate post-tax returns that consistently exceed inflation by at least 3% to 5%.'
          ],
          mythVsFact: {
            myth: 'Cash is completely risk-free because its face value does not drop.',
            fact: 'Cash has 100% certainty of losing purchasing power. A ₹500 note kept under a mattress in 2014 purchases less than half of what it could buy back then.'
          },
          proTip: 'Always calculate your real return. If your Fixed Deposit pays 6.5% and your tax bracket is 20%, your post-tax return is 5.2%. If inflation is 6%, your real return is -0.8%!'
        },
        contentHi: {
          introduction: 'ज्यादातर लोग बैंक पासबुक में बढ़ता बैलेंस देखकर खुश होते हैं। लेकिन पैसे का असली महत्व इस बात में है कि उससे क्या खरीदा जा सकता है। अगर ₹100 का सामान अगले साल ₹106 का हो जाता है और बैंक ने आपको सिर्फ ₹103 दिए, तो वास्तव में आप 3 रुपये गरीब हो गए।',
          keyPoints: [
            'वास्तविक रिटर्न का गणित: वास्तविक रिटर्न = मिला हुआ ब्याज - महंगाई दर - टैक्स।',
            '72 का नियम: 72 को महंगाई दर से भाग दें। अगर महंगाई 6% है, तो 72/6 = 12 वर्ष में सामान के दाम दोगुने हो जाएंगे।',
            'शिक्षा और स्वास्थ्य में महंगाई: भारत में स्कूल की फीस और अस्पताल का खर्च हर साल 10% से 12% की दर से बढ़ रहा है।',
            'सच्ची संपत्ति बनाने के लिए आपके निवेश का रिटर्न टैक्स और महंगाई दोनों से कम से कम 3% से 5% ज्यादा होना चाहिए।'
          ],
          mythVsFact: {
            myth: 'नकद पैसा सबसे सुरक्षित है क्योंकि उसमें कोई उतार-चढ़ाव नहीं होता।',
            fact: 'नकद पैसे की खरीदने की ताकत का घटना 100% तय है। जो सामान 10 साल पहले ₹500 में मिलता था, आज वह ₹1,000 से ज्यादा का आता है।'
          },
          proTip: 'हमेशा टैक्स और महंगाई काटकर अपना शुद्ध रिटर्न देखें। यदि एफडी 6.5% देती है और महंगाई 6% है, तो टैक्स कटने के बाद आपकी बचत उल्टी घट रही है।'
        },
        quiz: lessonQuizzes['lesson-rule-of-72'][0],
        quizzes: lessonQuizzes['lesson-rule-of-72']
      }
    ]
  },
  {
    id: 'module-mutual-funds',
    titleEn: 'Mutual Funds & SIPs: The Democratizer of Wealth',
    titleHi: 'म्यूचुअल फंड और एसआईपी: आम नागरिक की ताकत',
    subtitleEn: 'How ordinary citizens can own top Indian corporations starting with as little as ₹500 a month.',
    subtitleHi: 'मात्र ₹500 प्रति माह से देश की सबसे बड़ी कंपनियों में हिस्सेदारी और कंपाउंडिंग का लाभ कैसे लें।',
    iconName: 'PieChart',
    badgeEn: 'Pillar 3',
    badgeHi: 'तीसरा स्तंभ',
    lessons: [
      {
        id: 'lesson-sip-compounding',
        titleEn: 'Rupee Cost Averaging: Why Market Dips Are Good for SIPs',
        titleHi: 'रुपी कॉस्ट एवरेजिंग: बाजार गिरने पर एसआईपी को फायदा क्यों होता है?',
        duration: '7 min read',
        category: 'mutual_funds',
        summaryEn: 'SIPs remove the anxiety of timing the market. When markets fall, your ₹1,000 buys more units; when markets rise, your wealth multiplies.',
        summaryHi: 'एसआईपी में बाजार के उतार-चढ़ाव की चिंता नहीं करनी होती। मंदी में आपको ज्यादा यूनिट्स मिलती हैं, जो तेजी आने पर भारी मुनाफा देती हैं।',
        contentEn: {
          introduction: 'A Mutual Fund is a collective trust where thousands of small retail investors pool money together. A registered, professional fund manager invests this pool into dozens of companies according to SEBI regulations. A Systematic Investment Plan (SIP) is simply an automated monthly debit mechanism into this fund.',
          keyPoints: [
            'What is Rupee Cost Averaging? If the NAV (price per unit) is ₹100, your ₹1,000 buys 10 units. If the market crashes by 20% and NAV drops to ₹80, your ₹1,000 automatically buys 12.5 units! You buy more on sale.',
            'Index Funds (Passive Investing): Funds that simply replicate the Nifty 50 or Sensex with negligible expense ratios (often 0.1% to 0.2%). Over 10-15 years, low-cost index funds beat most active stock pickers.',
            'Direct Plans vs Regular Plans: Always choose "Direct - Growth" plans. Regular plans pay hidden lifetime commissions (1% to 1.5% each year) to distributors, which can eat up 25% to 30% of your total final wealth over 25 years!',
            'Minimum horizon: Equity mutual funds are strictly for goals at least 5 to 7+ years away.'
          ],
          mythVsFact: {
            myth: 'I should stop my SIP when TV news channels report that the stock market is crashing.',
            fact: 'Stopping your SIP during market corrections is the biggest mistake retail investors make! Dips are when you accumulate units at discounted prices. Pausing destroys compounding.'
          },
          proTip: 'Enable an annual "Step-Up SIP" of 10%. As your income grows, increasing your SIP by just 10% every year more than doubles your final retirement corpus!'
        },
        contentHi: {
          introduction: 'म्यूचुअल फंड एक ऐसी व्यवस्था है जहां लाखों छोटे निवेशक मिलकर पैसा इकट्ठा करते हैं। सेबी (SEBI) द्वारा प्रमाणित फंड मैनेजर इस पैसे को देश की 50-100 बड़ी कंपनियों में निवेश करता है। एसआईपी (SIP) इसी में हर महीने तय तारीख पर छोटी रकम लगाने का अनुशासित तरीका है।',
          keyPoints: [
            'रुपी कॉस्ट एवरेजिंग का जादू: यदि किसी फंड की यूनिट ₹100 की है तो ₹1,000 में 10 यूनिट मिलेंगी। यदि बाजार 20% गिर जाए और यूनिट ₹80 की हो जाए, तो उसी ₹1,000 में 12.5 यूनिट मिलेंगी। यानी मंदी में सस्ती खरीदारी!',
            'इंडेक्स फंड (Index Fund): निफ्टी 50 या सेंसेक्स की शीर्ष 50 कंपनियों में बेहद कम खर्चे (Expense Ratio 0.1%-0.2%) में निवेश। लंबी अवधि में यह ज्यादातर बड़े फंड प्रबंधकों को पीछे छोड़ देता है।',
            'डायरेक्ट प्लान बनाम रेगुलर प्लान: हमेशा "Direct - Growth" प्लान चुनें। रेगुलर प्लान में बिचौलियों को 1% से 1.5% का कमीशन मिलता है, जिससे 20-25 सालों में आपका 25% से 30% मुनाफा कट जाता है!',
            'समय सीमा: इक्विटी म्यूचुअल फंड में कम से कम 5 से 7 साल या उससे अधिक के लिए ही निवेश करें।'
          ],
          mythVsFact: {
            myth: 'जब टीवी पर बाजार गिरने की खबर आए तो तुरंत एसआईपी बंद कर देनी चाहिए।',
            fact: 'गिरावट में एसआईपी रोकना आम निवेशकों की सबसे बड़ी भूल है! बाजार गिरने पर ही तो आपको सस्ते दाम में ज्यादा यूनिट्स मिलती हैं।'
          },
          proTip: 'हर साल अपनी एसआईपी में 10% की बढ़ोतरी (Step-up SIP) करें। वेतन बढ़ने के साथ एसआईपी थोड़ी बढ़ाने से 20 साल बाद आपका फंड दोगुना हो सकता है।'
        },
        quiz: lessonQuizzes['lesson-sip-compounding'][0],
        quizzes: lessonQuizzes['lesson-sip-compounding']
      }
    ]
  },
  {
    id: 'module-stocks',
    titleEn: 'Stocks & Equity: Becoming a Business Owner',
    titleHi: 'शेयर बाजार: कंपनी का मालिक बनना, सट्टा नहीं',
    subtitleEn: 'The difference between long-term wealth creation and short-term gambling on price tickers.',
    subtitleHi: 'दीर्घकालिक संपत्ति निर्माण और दिन-प्रतिदिन के सट्टेबाजी के बीच का बारीक अंतर।',
    iconName: 'LineChart',
    badgeEn: 'Pillar 4',
    badgeHi: 'चौथा स्तंभ',
    lessons: [
      {
        id: 'lesson-equity-ownership',
        titleEn: 'What Does Owning a Share Actually Mean?',
        titleHi: 'शेयर खरीदने का असल मतलब क्या होता है?',
        duration: '6 min read',
        category: 'stocks',
        summaryEn: 'A share certificate is fractional ownership in real factories, technology, and earnings of companies like TCS, HDFC Bank, or Larsen & Toubro.',
        summaryHi: 'शेयर खरीदना केवल स्क्रीन पर हरे-लाल नंबर देखना नहीं, बल्कि देश की बेहतरीन कंपनियों के मुनाफे में असली हिस्सेदार बनना है।',
        contentEn: {
          introduction: 'In India, the stock market is often misunderstood as "satta" (gambling). While speculative intraday trading and derivatives (Futures & Options) indeed carry extreme risk, long-term equity investing is the single most tested driver of economic prosperity worldwide.',
          keyPoints: [
            'What Drives Stock Prices in the Long Term? In the short run (weeks/months), prices move on human emotions, rumors, and global interest rates. In the long run (5-10 years), stock price strictly follows the company’s profit growth and cash flows.',
            'Dividends & Capital Appreciation: You earn money either when the company distributes surplus profits as dividends into your bank account, or when its enterprise value multiplies.',
            'F&O Reality Check: SEBI’s landmark study revealed that 93% of individual retail traders in Equity Futures & Options (F&O) incurred net trading losses averaging ₹1.25 Lakh each, while paying heavy brokerages.',
            'The Golden Formula: Buy businesses you understand, with honest management and low debt, or simply buy a diversified Nifty 50 basket.'
          ],
          mythVsFact: {
            myth: 'To make money in stocks, I must sit in front of charts all day and buy penny stocks under ₹10.',
            fact: 'A stock trading at ₹5 is not cheap, and a stock at ₹2,500 is not expensive! Valuation depends on price-to-earnings (P/E) and business fundamentals, not the face price per share. Penny stocks are heavily manipulated.'
          },
          proTip: 'If you cannot analyze balance sheets or read quarterly investor presentations, stick 100% to broad market Index Mutual Funds. You will outperform 80% of active stock pickers.'
        },
        contentHi: {
          introduction: 'भारत में अक्सर शेयर बाजार को "सट्टा बाजार" समझ लिया जाता है। हालांकि इंट्राडे ट्रेडिंग और फ्यूचर्स एंड ऑप्शंस (F&O) में भारी जोखिम है, लेकिन अच्छी कंपनियों के शेयर खरीदकर वर्षों तक बनाए रखना दुनिया भर में संपत्ति बनाने का सबसे प्रामाणिक रास्ता है।',
          keyPoints: [
            'लंबे समय में शेयर की कीमत क्यों बढ़ती है? छोटी अवधि में खबरें और अफवाहें असर डालती हैं, लेकिन 5-10 साल की अवधि में शेयर की कीमत सीधे कंपनी के मुनाफे और बिक्री की बढ़ोतरी पर निर्भर करती है।',
            'डिविडेंड और पूंजी में वृद्धि: कंपनी जब मुनाफा कमाती है तो डिविडेंड के रूप में आपके बैंक में पैसा आता है और शेयर का मूल्य भी बढ़ता है।',
            'F&O (वायदा कारोबार) का कड़वा सच: सेबी (SEBI) की आधिकारिक रिपोर्ट के अनुसार 93% खुदरा ट्रेडर्स F&O में अपना पैसा गंवाते हैं और औसतन ₹1.25 लाख का नुकसान उठाते हैं।',
            'सरल मंत्र: जिन कंपनियों के उत्पाद आप रोजमर्रा में इस्तेमाल करते हैं और जिनका हिसाब-किताब साफ है, उनमें लंबी अवधि के लिए भागीदार बनें।'
          ],
          mythVsFact: {
            myth: 'शेयर बाजार में अमीर बनने के लिए ₹5 या ₹10 वाले सस्ते (पेनी) शेयर खरीदने चाहिए।',
            fact: '₹5 का शेयर सस्ता नहीं होता और ₹2,500 का शेयर महंगा नहीं होता! शेयर का मूल्य उसकी कमाई और ताकत से तय होता है। ₹5 वाले ज्यादातर शेयर फर्ज़ी कंपनियों के होते हैं जिनमें आम लोग फंस जाते हैं।'
          },
          proTip: 'यदि आपके पास कंपनियों के बैलेंस शीट पढ़ने का समय नहीं है, तो सीधे निफ्टी 50 इंडेक्स फंड में एसआईपी करें।'
        },
        quiz: lessonQuizzes['lesson-equity-ownership'][0],
        quizzes: lessonQuizzes['lesson-equity-ownership']
      }
    ]
  },
  {
    id: 'module-risk',
    titleEn: 'Investment Risk & Asset Allocation',
    titleHi: 'निवेश जोखिम और परिसंपत्ति आवंटन (Asset Allocation)',
    subtitleEn: 'The universal principle: High return without risk does not exist. Diversification is your only free lunch.',
    subtitleHi: 'बिना जोखिम के भारी रिटर्न का कोई अस्तित्व नहीं है। अलग-अलग साधनों में बंटवारा ही सबसे बड़ी सुरक्षा है।',
    iconName: 'Scale',
    badgeEn: 'Pillar 5',
    badgeHi: 'पांचवां स्तंभ',
    lessons: [
      {
        id: 'lesson-asset-allocation',
        titleEn: 'Asset Allocation: Balancing Equity, Debt, and Gold',
        titleHi: 'इक्विटी, फिक्स्ड इनकम और सोने के बीच सही संतुलन',
        duration: '5 min read',
        category: 'risk',
        summaryEn: 'No single asset class wins every year. Combining Indian equities, fixed income (PPF/FD), and Sovereign Gold Bonds ensures smooth, uninterrupted wealth accumulation.',
        summaryHi: 'हर साल कोई एक संपत्ति सबसे आगे नहीं रहती। शेयर, सरकारी बचत योजनाएं और सोना मिलाकर चलने से बाजार की मंदी में भी घबराहट नहीं होती।',
        contentEn: {
          introduction: 'In investing, risk is not the possibility of losing money temporarily when the market drops for a few months. Real risk is the permanent destruction of purchasing power or being forced to liquidate assets when prices are rock bottom.',
          keyPoints: [
            'Equity (Shares/Mutual Funds): High growth potential (11-13% long term), but volatile in the short run. Goal horizon: 5+ years.',
            'Debt / Fixed Income (PPF, EPF, Sovereign Debt, FDs): Capital preservation and steady interest. Provides stability when equities crash.',
            'Gold (Sovereign Gold Bonds / Gold ETFs): Acts as a hedge against currency depreciation and geopolitical turmoil. Recommended allocation: 5% to 10% of total portfolio.',
            'Rebalancing: Review your asset mix once a year. If equities had a stellar run and now comprise 75% of your portfolio instead of your target 60%, rebalance profits into debt.'
          ],
          mythVsFact: {
            myth: 'Gold jewelry is an excellent financial investment for my retirement.',
            fact: 'Physical jewelry carries 15% to 25% making charges, wastage deductions on resale, and GST. For investment, Sovereign Gold Bonds (SGB) or Gold ETFs are 100% pure with zero making charges.'
          },
          proTip: 'Use the simple "100 minus Age" rule as a rough starting benchmark: If you are 30 years old, 70% in equity and 30% in debt/gold. Adjust according to your dependents and income stability.'
        },
        contentHi: {
          introduction: 'निवेश में असली जोखिम कुछ महीनों के लिए बाजार गिरना नहीं है। असली जोखिम वह है जब कोई फर्जी स्कीम में अपना पूरा मूलधन गंवा बैठे या मजबूरी में सस्ते दामों पर अपनी संपत्ति बेचनी पड़े।',
          keyPoints: [
            'इक्विटी (शेयर व म्यूचुअल फंड): लंबी अवधि में सबसे ज्यादा ग्रोथ (11-13%), लेकिन थोड़े समय के लिए उतार-चढ़ाव। 5 साल से अधिक के लक्ष्यों के लिए।',
            'डेट / फिक्स्ड इनकम (पीपीएफ, ईपीएफ, एफडी): पूंजी की सुरक्षा और नियमित ब्याज। जब शेयर बाजार गिरता है, तो यह हिस्सा आपके पोर्टफोलियो को संभालता है।',
            'सोना (Sovereign Gold Bonds या Gold ETF): मुद्रा के अवमूल्यन और वैश्विक संकट के समय रक्षा कवच। कुल संपत्ति का 5% से 10% सोने में रखना पर्याप्त है।',
            'रिबैलेंसिंग (Rebalancing): साल में एक बार अपने निवेश की समीक्षा करें ताकि किसी एक जगह बहुत ज्यादा जोखिम न बना रहे।'
          ],
          mythVsFact: {
            myth: 'सोने के गहने बनाना सबसे बेहतरीन निवेश है।',
            fact: 'गहने खरीदने पर 15% से 25% मेकिंग चार्ज (बनावट खर्च) और जीएसटी कट जाता है। शुद्ध निवेश के लिए सॉवरेन गोल्ड बॉन्ड (SGB) या गोल्ड ईटीएफ चुनें जहां कोई मेकिंग चार्ज नहीं लगता।'
          },
          proTip: 'अपनी उम्र के हिसाब से संतुलन बनाएं: अगर आपकी उम्र 30 साल है, तो लगभग 70% इक्विटी में और 30% सुरक्षित फिक्स्ड इनकम/सोने में रखें।'
        },
        quiz: lessonQuizzes['lesson-asset-allocation'][0],
        quizzes: lessonQuizzes['lesson-asset-allocation']
      }
    ]
  },
  {
    id: 'module-fraud',
    titleEn: 'Fraud Awareness: Identifying Scams & Finfluencer Traps',
    titleHi: 'धोखाधड़ी से बचाव: फर्जी स्कीमों और ठगों की पहचान',
    subtitleEn: 'How to spot Ponzi schemes, unregistered Telegram tipsters, and guaranteed return traps.',
    subtitleHi: 'गारंटीड रिटर्न का झांसा देने वाले टेलीग्राम चैनलों, फर्जी ऐप्स और पोंजी स्कीमों को तुरंत कैसे पहचानें।',
    iconName: 'AlertTriangle',
    badgeEn: 'Pillar 6',
    badgeHi: 'छठा स्तंभ',
    lessons: [
      {
        id: 'lesson-spotting-scams',
        titleEn: 'The Anatomy of a Financial Scam in India',
        titleHi: 'भारत में वित्तीय धोखाधड़ी के 4 सबसे बड़े लक्षण',
        duration: '7 min read',
        category: 'fraud',
        summaryEn: 'Any scheme promising more than 12-15% guaranteed annual returns, or daily/monthly fixed profits, is almost certainly a Ponzi fraud.',
        summaryHi: 'कोई भी व्यक्ति या ऐप जो बिना जोखिम के 12-15% से ज्यादा फिक्स्ड सालाना मुनाफा या रोजाना 1-2% रिटर्न का वादा करे, वह 100% धोखाधड़ी है।',
        contentEn: {
          introduction: 'In recent years, millions of Indian citizens have lost their life savings to fake algorithmic trading apps, Telegram "VIP" tip channels, and unregulated multilevel marketing schemes. Fraudsters prey on greed, desperation, and lack of basic financial literacy.',
          keyPoints: [
            'Red Flag 1: The Word "Guaranteed" attached to High Returns. In legitimate financial markets, only Sovereign Government Bonds and Bank FDs (up to ₹5 Lakh insured by DICGC) offer guaranteed safety, and they pay 6% to 7.5%. Anything offering guaranteed 1% daily or 25% monthly is paying you with the next victim’s money (Ponzi scheme).',
            'Red Flag 2: Telegram & WhatsApp "Admin Only" Groups. Unregistered operators post fake screenshots of luxury cars and manipulated profit ledgers to induce FOMO (Fear of Missing Out).',
            'Red Flag 3: Personal UPI ID or Unregistered Entity Bank Accounts. Legitimate SEBI registered brokers (like Zerodha, Groww, ICICI Direct) only deposit funds directly into registered Clearing Corporations. Fraudsters ask you to transfer funds to personal savings UPI accounts.',
            'Red Flag 4: "Dabba Trading" (Illegal Off-Exchange Trading). Trading outside NSE/BSE without contract notes is a non-bailable criminal offense under Section 23 of the SCRA Act.'
          ],
          mythVsFact: {
            myth: 'This influencer has 2 million followers and verified badge, so their recommended stock must be genuine.',
            fact: 'SEBI has penalized numerous prominent influencers with millions of followers for taking secret kickbacks to manipulate illiquid stocks and dump them on retail followers.'
          },
          proTip: 'Always check SEBI registration! Visit sebi.gov.in -> Recognised Intermediaries -> Registered Investment Advisers (RIA) or Research Analysts (RA). If their registration number cannot be verified on SEBI portal, NEVER pay them a single rupee.'
        },
        contentHi: {
          introduction: 'पिछले कुछ वर्षों में लाखों भारतीयों ने नकली ट्रेडिंग बॉट्स, टेलीग्राम "VIP" चैनलों और फर्जी पोंजी स्कीमों में अपनी जिंदगी भर की जमा पूंजी गंवा दी है। ठग लोगों के लालच और अज्ञानता का फायदा उठाते हैं।',
          keyPoints: [
            'पहला खतरा: "गारंटीड हाई रिटर्न" का दावा। भारत में केवल सरकारी बॉन्ड और बैंक एफडी (₹5 लाख तक डीआईसीजीसी द्वारा सुरक्षित) ही गारंटीड हैं जिनपर 6-7.5% ब्याज मिलता है। जो रोजाना 1-2% या महीने का 20% गारंटी दे, वह 100% पोंजी घोटाला है।',
            'दूसरा खतरा: टेलीग्राम व व्हाट्सएप के बंद ग्रुप। ठग दूसरों की कमाई के फर्जी स्क्रीनशॉट और महंगी गाड़ियों की तस्वीरें दिखाकर लोगों को फंसाते हैं।',
            'तीसरा खतरा: किसी व्यक्ति के निजी UPI पर पैसे ट्रांसफर करवाना। सेबी रजिस्टर्ड ब्रोकर हमेशा अधिकृत क्लियरिंग कॉर्पोरेशन के जरिए ही पैसे लेते हैं। किसी व्यक्ति के निजी बैंक खाते में कभी पैसे न डालें।',
            'चौथा खतरा: डब्बा ट्रेडिंग (अवैध ऑफ-मार्केट सट्टा)। बिना स्टॉक एक्सचेंज के अवैध रूप से पर्चियों पर किया जाने वाला सट्टा गैरकानूनी और अपराध है।'
          ],
          mythVsFact: {
            myth: 'इस यूट्यूबर के 20 लाख फॉलोअर्स हैं और ब्लू टिक है, तो इसकी बताई कंपनी जरूर सही होगी।',
            fact: 'सेबी ने लाखों फॉलोअर्स वाले कई बड़े इनफ्लुएंसर्स पर करोड़ों का जुर्माना लगाया है जो कंपनियों से गुप्त रिश्वत लेकर आम जनता को घटिया शेयर बेचते थे।'
          },
          proTip: 'हमेशा सेबी (SEBI) रजिस्ट्रेशन नंबर की जांच करें। sebi.gov.in पर जाकर जांचें कि क्या वह सलाहकार सच में रजिस्टर्ड है या नहीं।'
        },
        quiz: lessonQuizzes['lesson-spotting-scams'][0],
        quizzes: lessonQuizzes['lesson-spotting-scams']
      }
    ]
  }
];
