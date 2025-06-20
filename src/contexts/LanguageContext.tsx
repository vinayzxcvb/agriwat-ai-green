
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    features: 'Features',
    aiAssistant: 'AI Assistant',
    demo: 'Demo',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'AgriWat',
    heroSubtitle: 'AI for Agriculture & Water Management',
    heroDescription: 'Revolutionizing farming with intelligent water management, crop monitoring, and AI-driven insights to optimize agricultural productivity while conserving our precious water resources.',
    heroTagline: 'Addressing critical challenges in modern agriculture through cutting-edge technology',
    smartIrrigation: '🌱 Smart Irrigation',
    waterConservation: '💧 Water Conservation',
    cropAnalytics: '📊 Crop Analytics',
    learnMore: 'Learn More',
    
    // About Section
    aboutTitle: 'About the Project',
    aboutDescription: 'AgriWat leverages artificial intelligence to address critical challenges in agriculture and water management, creating sustainable solutions for modern farming.',
    aiPoweredIrrigation: 'AI-Powered Irrigation',
    aiIrrigationDesc: 'Our intelligent irrigation system uses machine learning algorithms to analyze soil moisture, weather patterns, and crop requirements to optimize water usage and maximize yield.',
    waterStressDetection: 'Water Stress Detection',
    waterStressDesc: 'Advanced sensors and computer vision technology monitor crop health in real-time, detecting early signs of water stress before they impact productivity.',
    predictiveAnalytics: 'Predictive Analytics',
    predictiveDesc: 'Historical data and weather forecasts are processed through AI models to predict optimal planting times, harvest schedules, and resource allocation.',
    problemTitle: 'The Problem We\'re Solving',
    problemDesc: 'Agriculture consumes 70% of global freshwater resources, yet inefficient irrigation practices lead to massive water waste. Climate change and growing populations demand smarter, more sustainable farming methods. AgriWat bridges this gap by providing farmers with AI-driven insights that reduce water consumption while increasing crop yields.',
    
    // Features
    featuresTitle: 'Key Features',
    featuresDescription: 'Discover how AgriWat\'s innovative features are transforming agricultural practices and water management across the globe.',
    smartIrrigationSystem: 'Smart Irrigation System',
    smartIrrigationDesc: 'Automated irrigation scheduling based on real-time soil conditions, weather data, and crop requirements.',
    waterUsageDashboard: 'Water Usage Dashboard',
    waterDashboardDesc: 'Comprehensive analytics and visualization of water consumption patterns with actionable insights.',
    cropSpecificAdvice: 'Crop-Specific Advice',
    cropAdviceDesc: 'Personalized recommendations for different crops including optimal watering schedules and nutrient timing.',
    environmentalMonitoring: 'Environmental Monitoring',
    envMonitoringDesc: 'Continuous monitoring of environmental factors affecting crop health and water efficiency.',
    waterSavings: 'Water Savings',
    yieldIncrease: 'Yield Increase',
    accuracyRate: 'Accuracy Rate',
    
    // AI Assistant
    aiAssistantTitle: 'AI Assistant',
    aiAssistantDesc: 'Get instant help with your farming questions. Our AI assistant provides personalized advice in your preferred language.',
    askQuestion: 'Ask your farming question...',
    send: 'Send',
    exampleQuestions: 'Example Questions:',
    exampleQ1: 'When should I water my tomato crops?',
    exampleQ2: 'What are the signs of water stress in wheat?',
    exampleQ3: 'How much water does rice need during flowering?',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactDesc: 'Interested in AgriWat? We\'d love to hear from you. Whether you\'re a farmer, researcher, or technology partner, let\'s discuss how we can work together.',
    whyContactTitle: 'Why Contact Us?',
    betaAccess: 'Get early access to our beta platform',
    collaborate: 'Collaborate on research and development',
    partner: 'Partner with us for implementation',
    feedback: 'Provide feedback and suggestions',
    projectStatus: 'Project Status',
    researchPhase: 'Research Phase',
    complete: 'Complete',
    prototypeDev: 'Prototype Development',
    inProgress: 'In Progress',
    betaTesting: 'Beta Testing',
    upcoming: 'Upcoming',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    organization: 'Organization',
    message: 'Message',
    sendMessage: 'Send Message',
    messageSent: 'Message Sent!',
    messageDesc: 'Thank you for your interest in AgriWat. We\'ll get back to you soon.',
  },
  hi: {
    // Navigation
    home: 'होम',
    about: 'परिचय',
    features: 'विशेषताएं',
    aiAssistant: 'AI सहायक',
    demo: 'डेमो',
    contact: 'संपर्क',
    
    // Hero Section
    heroTitle: 'एग्रीवाट',
    heroSubtitle: 'कृषि और जल प्रबंधन के लिए AI',
    heroDescription: 'बुद्धिमान जल प्रबंधन, फसल निगरानी, और AI-संचालित अंतर्दृष्टि के साथ कृषि में क्रांति लाना, जो हमारे कीमती जल संसाधनों का संरक्षण करते हुए कृषि उत्पादकता को अनुकूलित करता है।',
    heroTagline: 'अत्याधुनिक तकनीक के माध्यम से आधुनिक कृषि की महत्वपूर्ण चुनौतियों का समाधान',
    smartIrrigation: '🌱 स्मार्ट सिंचाई',
    waterConservation: '💧 जल संरक्षण',
    cropAnalytics: '📊 फसल विश्लेषण',
    learnMore: 'और जानें',
    
    // About Section
    aboutTitle: 'परियोजना के बारे में',
    aboutDescription: 'एग्रीवाट कृषि और जल प्रबंधन में महत्वपूर्ण चुनौतियों से निपटने के लिए कृत्रिम बुद्धिमत्ता का लाभ उठाता है, आधुनिक कृषि के लिए टिकाऊ समाधान बनाता है।',
    aiPoweredIrrigation: 'AI-संचालित सिंचाई',
    aiIrrigationDesc: 'हमारी बुद्धिमान सिंचाई प्रणाली मिट्टी की नमी, मौसम के पैटर्न और फसल आवश्यकताओं का विश्लेषण करने के लिए मशीन लर्निंग एल्गोरिदम का उपयोग करती है।',
    waterStressDetection: 'जल तनाव का पता लगाना',
    waterStressDesc: 'उन्नत सेंसर और कंप्यूटर विज़न तकनीक वास्तविक समय में फसल स्वास्थ्य की निगरानी करती है।',
    predictiveAnalytics: 'पूर्वानुमान विश्लेषण',
    predictiveDesc: 'ऐतिहासिक डेटा और मौसम पूर्वानुमान को AI मॉडल के माध्यम से संसाधित किया जाता है।',
    problemTitle: 'जो समस्या हम हल कर रहे हैं',
    problemDesc: 'कृषि वैश्विक मीठे पानी के संसाधनों का 70% उपयोग करती है, फिर भी अकुशल सिंचाई प्रथाओं के कारण बड़े पैमाने पर पानी की बर्बादी होती है।',
    
    // Features
    featuresTitle: 'मुख्य विशेषताएं',
    featuresDescription: 'जानें कि कैसे एग्रीवाट की नवाचार विशेषताएं दुनिया भर में कृषि प्रथाओं और जल प्रबंधन को बदल रही हैं।',
    smartIrrigationSystem: 'स्मार्ट सिंचाई प्रणाली',
    smartIrrigationDesc: 'वास्तविक समय मिट्टी की स्थिति, मौसम डेटा और फसल आवश्यकताओं के आधार पर स्वचालित सिंचाई शेड्यूलिंग।',
    waterUsageDashboard: 'जल उपयोग डैशबोर्ड',
    waterDashboardDesc: 'कार्य योग्य अंतर्दृष्टि के साथ जल उपभोग पैटर्न का व्यापक विश्लेषण और दृश्यीकरण।',
    cropSpecificAdvice: 'फसल-विशिष्ट सलाह',
    cropAdviceDesc: 'विभिन्न फसलों के लिए व्यक्तिगत सिफारिशें जिसमें इष्टतम पानी देने का समय और पोषक तत्व शामिल हैं।',
    environmentalMonitoring: 'पर्यावरणीय निगरानी',
    envMonitoringDesc: 'फसल स्वास्थ्य और जल दक्षता को प्रभावित करने वाले पर्यावरणीय कारकों की निरंतर निगरानी।',
    waterSavings: 'जल बचत',
    yieldIncrease: 'उत्पादन वृद्धि',
    accuracyRate: 'सटीकता दर',
    
    // AI Assistant
    aiAssistantTitle: 'AI सहायक',
    aiAssistantDesc: 'अपने कृषि प्रश्नों के लिए तुरंत सहायता प्राप्त करें। हमारा AI सहायक आपकी पसंदीदा भाषा में व्यक्तिगत सलाह प्रदान करता है।',
    askQuestion: 'अपना कृषि प्रश्न पूछें...',
    send: 'भेजें',
    exampleQuestions: 'उदाहरण प्रश्न:',
    exampleQ1: 'मुझे अपनी टमाटर की फसल को कब पानी देना चाहिए?',
    exampleQ2: 'गेहूं में पानी की कमी के लक्षण क्या हैं?',
    exampleQ3: 'फूल आने के दौरान चावल को कितने पानी की जरूरत होती है?',
    
    // Contact
    contactTitle: 'संपर्क में रहें',
    contactDesc: 'एग्रीवाट में रुचि है? हम आपसे सुनना पसंद करेंगे। चाहे आप किसान हों, शोधकर्ता हों, या तकनीकी साझेदार हों, आइए चर्चा करें कि हम कैसे मिलकर काम कर सकते हैं।',
    whyContactTitle: 'हमसे संपर्क क्यों करें?',
    betaAccess: 'हमारे बीटा प्लेटफॉर्म तक जल्दी पहुंच प्राप्त करें',
    collaborate: 'अनुसंधान और विकास पर सहयोग करें',
    partner: 'कार्यान्वयन के लिए हमारे साथ साझेदारी करें',
    feedback: 'प्रतिक्रिया और सुझाव प्रदान करें',
    projectStatus: 'परियोजना स्थिति',
    researchPhase: 'अनुसंधान चरण',
    complete: 'पूर्ण',
    prototypeDev: 'प्रोटोटाइप विकास',
    inProgress: 'प्रगति में',
    betaTesting: 'बीटा परीक्षण',
    upcoming: 'आगामी',
    fullName: 'पूरा नाम',
    emailAddress: 'ईमेल पता',
    organization: 'संगठन',
    message: 'संदेश',
    sendMessage: 'संदेश भेजें',
    messageSent: 'संदेश भेजा गया!',
    messageDesc: 'एग्रीवाट में आपकी रुचि के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।',
  },
  te: {
    // Navigation
    home: 'హోమ్',
    about: 'గురించి',
    features: 'ప్రత్యేకతలు',
    aiAssistant: 'AI సహాయకుడు',
    demo: 'డెమో',
    contact: 'సంప్రదింపులు',
    
    // Hero Section
    heroTitle: 'అగ్రీవాట్',
    heroSubtitle: 'వ్యవసాయం మరియు నీటి నిర్వహణ కోసం AI',
    heroDescription: 'తెలివైన నీటి నిర్వహణ, పంట పర్యవేక్షణ, మరియు AI-నడిచే అంతర్దృష్టులతో వ్యవసాయంలో విప్లవం తెస్తూ, మా విలువైన నీటి వనరులను సంరక్షిస్తూ వ్యవసాయ ఉత్పాదకతను అనుకూలీకరిస్తోంది.',
    heroTagline: 'అత్యాధునిక సాంకేతికత ద్వారా ఆధునిక వ్యవసాయంలోని కీలక సవాళ్లను పరిష్కరించడం',
    smartIrrigation: '🌱 స్మార్ట్ నీటిపారుదల',
    waterConservation: '💧 నీటి పరిరక్షణ',
    cropAnalytics: '📊 పంట విశ్లేషణలు',
    learnMore: 'మరింత తెలుసుకోండి',
    
    // About Section
    aboutTitle: 'ప్రాజెక్ట్ గురించి',
    aboutDescription: 'అగ్రీవాట్ వ్యవసాయం మరియు నీటి నిర్వహణలోని కీలక సవాళ్లను పరిష్కరించడానికి కృత్రిమ మేధస్సును ఉపయోగిస్తుంది, ఆధునిక వ్యవసాయం కోసం స్థిరమైన పరిష్కారాలను సృష్టిస్తుంది.',
    aiPoweredIrrigation: 'AI-నడిచే నీటిపారుదల',
    aiIrrigationDesc: 'మా తెలివైన నీటిపారుదల వ్యవస్థ నేల తేమ, వాతావరణ నమూనాలు మరియు పంట అవసరాలను విశ్లేషించడానికి మెషిన్ లెర్నింగ్ అల్గారిథమ్‌లను ఉపయోగిస్తుంది.',
    waterStressDetection: 'నీటి ఒత్తిడి గుర్తింపు',
    waterStressDesc: 'అధునాతన సెన్సార్లు మరియు కంప్యూటర్ విజన్ సాంకేతికత వాస్తవ సమయంలో పంట ఆరోగ్యాన్ని పర్యవేక్షిస్తాయి.',
    predictiveAnalytics: 'అంచనా విశ్లేషణలు',
    predictiveDesc: 'చారిత్రక డేటా మరియు వాతావరణ అంచనాలు AI మోడల్‌ల ద్వారా ప్రాసెస్ చేయబడతాయి.',
    problemTitle: 'మేము పరిష్కరిస్తున్న సమస్య',
    problemDesc: 'వ్యవసాయం ప్రపంచ మంచినీటి వనరులలో 70% వినియోగిస్తుంది, అయినప్పటికీ అసమర్థ నీటిపారుదల పద్ధతుల కారణంగా భారీ నీటి వృధా జరుగుతుంది.',
    
    // Features
    featuresTitle: 'ప్రధాన లక్షణాలు',
    featuresDescription: 'అగ్రీవాట్ యొక్క వినూత్న లక్షణాలు ప్రపంచవ్యాప్తంగా వ్యవసాయ పద్ధతులు మరియు నీటి నిర్వహణను ఎలా మార్చుస్తున్నాయో తెలుసుకోండి.',
    smartIrrigationSystem: 'స్మార్ట్ నీటిపారుదల వ్యవస్థ',
    smartIrrigationDesc: 'వాస్తవ సమయ నేల పరిస్థితులు, వాతావరణ డేటా మరియు పంట అవసరాల ఆధారంగా స్వయంచాలక నీటిపారుదల షెడ్యూలింగ్.',
    waterUsageDashboard: 'నీటి వినియోగ డాష్‌బోర్డ్',
    waterDashboardDesc: 'చర్య తీసుకోదగిన అంతర్దృష్టులతో నీటి వినియోగ నమూనాల సమగ్ర విశ్లేషణ మరియు దృశ్యీకరణ.',
    cropSpecificAdvice: 'పంట-నిర్దిష్ట సలహా',
    cropAdviceDesc: 'వివిధ పంటలకు వ్యక్తిగత సిఫార్సులు, సరైన నీటిపారుదల షెడ్యూల్‌లు మరియు పోషక సమయంతో సహా.',
    environmentalMonitoring: 'పర్యావరణ పర్యవేక్షణ',
    envMonitoringDesc: 'పంట ఆరోగ్యం మరియు నీటి సామర్థ్యాన్ని ప్రభావితం చేసే పర్యావరణ కారకాల నిరంతర పర్యవేక్షణ.',
    waterSavings: 'నీటి ఆదా',
    yieldIncrease: 'దిగుబడి పెరుగుదల',
    accuracyRate: 'ఖచ్చితత్వ రేటు',
    
    // AI Assistant
    aiAssistantTitle: 'AI సహాయకుడు',
    aiAssistantDesc: 'మీ వ్యవసాయ ప్రశ్నలకు తక్షణ సహాయం పొందండి. మా AI సహాయకుడు మీ ఇష్ట భాషలో వ్యక్తిగత సలహా అందిస్తాడు.',
    askQuestion: 'మీ వ్యవసాయ ప్రశ్న అడగండి...',
    send: 'పంపు',
    exampleQuestions: 'ఉదాహరణ ప్రశ్నలు:',
    exampleQ1: 'నేను నా టమోటా పంటలకు ఎప్పుడు నీరు పోయాలి?',
    exampleQ2: 'గోధుమలలో నీటి ఒత్తిడి లక్షణాలు ఏమిటి?',
    exampleQ3: 'పూత సమయంలో వరికి ఎంత నీరు అవసరం?',
    
    // Contact
    contactTitle: 'సంప్రదించండి',
    contactDesc: 'అగ్రీవాట్‌లో ఆసక్తి ఉందా? మేము మిమ్మల్ని వినాలని అనుకుంటున్నాము. మీరు రైతు అయినా, పరిశోధకుడు అయినా, లేదా సాంకేతిక భాగస్వామి అయినా, మేము ఎలా కలిసి పని చేయవచ్చో చర్చిద్దాం.',
    whyContactTitle: 'మాతో ఎందుకు సంప్రదించాలి?',
    betaAccess: 'మా బీటా ప్లాట్‌ఫారమ్‌కు ముందస్తు యాక్సెస్ పొందండి',
    collaborate: 'పరిశోధన మరియు అభివృద్ధిలో సహకరించండి',
    partner: 'అమలు కోసం మాతో భాగస్వామిత్వం చేయండి',
    feedback: 'అభిప్రాయం మరియు సూచనలు అందించండి',
    projectStatus: 'ప్రాజెక్ట్ స్థితి',
    researchPhase: 'పరిశోధన దశ',
    complete: 'పూర్తి',
    prototypeDev: 'నమూనా అభివృద్ధి',
    inProgress: 'పురోగతిలో',
    betaTesting: 'బీటా పరీక్ష',
    upcoming: 'రాబోయే',
    fullName: 'పూర్తి పేరు',
    emailAddress: 'ఇమెయిల్ చిరునామా',
    organization: 'సంస్థ',
    message: 'సందేశం',
    sendMessage: 'సందేశం పంపు',
    messageSent: 'సందేశం పంపబడింది!',
    messageDesc: 'అగ్రీవాట్‌లో మీ ఆసక్తికి ధన్యవాదాలు. మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
