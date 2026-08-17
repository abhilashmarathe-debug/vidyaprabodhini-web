import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      coaching: 'Coaching',
      batches: 'Batches',
      testSeries: 'Test Series',
      admission: 'Admission',
      result: 'Result',
      gallery: 'Gallery',
      enquire: 'Enquire now',
    },

    announcement: {
      new: 'NEW',
      label: 'Important Announcement',
      scholarship:
        'Hon. Chandrakantdada Patil Scholarship for Civil Services Preparation 2026–27',
      close: 'Close announcement',
    },

    hero: {
      slides: [
        {
          eyebrow: 'VIDYAPRABODHINI ACADEMY',
          title1: 'Build your',
          title2: 'preparation.',
          description:
            'Preparation programs for competitive examinations, designed around structured learning, practice and consistent progress.',
        },
        {
          eyebrow: 'COMPETITIVE EXAMINATION',
          title1: 'Prepare with',
          title2: 'purpose.',
          description:
            'Focused guidance and a disciplined learning environment for serious competitive examination aspirants.',
        },
        {
          eyebrow: 'VIDYAPRABODHINI · KOLHAPUR',
          title1: 'Your goal.',
          title2: 'Our guidance.',
          description:
            'Build the knowledge, confidence and consistency required to move forward in your competitive examination journey.',
        },
      ],
      explore: 'Explore batches',
      admission: 'Admission enquiry',
      previous: 'Previous slide',
      next: 'Next slide',
    },

    programs: {
      label: 'PROGRAMS',
      title: 'Choose your examination.',
      description:
        'Explore preparation options based on your examination and preferred learning mode.',
      view: 'View batches',
      items: {
        upsc: 'Civil Services Examination',
        mpsc: 'Maharashtra Public Service Commission',
        banking: 'Banking examinations',
        saralseva: 'Maharashtra government recruitment',
      },
    },

    whyUs: {
      label: 'WHY US',
      title1: 'Everything you need',
      title2: 'to prepare better.',
      description:
        'A focused preparation environment built around guidance, practice, revision and student support.',
      hover: 'Hover to explore',
      items: [
        {
          title: 'Finest Faculties',
          description:
            'Learn from experienced and dedicated faculties who provide clear concepts, practical guidance and continuous academic support throughout your preparation.',
        },
        {
          title: 'Best Infrastructure',
          description:
            'A comfortable and focused learning environment with well-equipped classrooms, study spaces and facilities designed for serious aspirants.',
        },
        {
          title: 'Affordable Fees',
          description:
            'Quality competitive examination preparation at an affordable cost, making structured guidance accessible to students from different backgrounds.',
        },
        {
          title: '100% Syllabus Coverage',
          description:
            'A structured curriculum designed to cover the complete examination syllabus while maintaining focus on important concepts and examination requirements.',
        },
        {
          title: 'Recurring Revisions',
          description:
            'Regular revision cycles help students retain important concepts, strengthen weak areas and remain confident as the examination approaches.',
        },
        {
          title: 'Exhaustive Test Series',
          description:
            'Frequent practice tests help students understand their preparation level, improve accuracy and develop the time-management skills required in competitive examinations.',
        },
        {
          title: 'Free Library',
          description:
            'Access a dedicated study environment and useful learning resources that allow students to maintain consistency beyond classroom sessions.',
        },
        {
          title: 'Frequent Follow-ups',
          description:
            'Regular academic follow-ups help identify challenges, track preparation and keep students motivated and accountable throughout their journey.',
        },
      ],
    },

    approach: {
      label: 'THE VIDYAPRABODHINI APPROACH',
      title1: 'Preparation built',
      title2: 'around your goal.',
      description:
        'Competitive examinations require more than information. They require consistency, structured practice and the right guidance at every stage.',
      points: [
        'Focused curriculum',
        'Structured learning',
        'Guided preparation',
      ],
      button: 'Discover our approach',
      since: 'Since',
    },

    youtube: {
      label: 'SUBSCRIBE US ON YOUTUBE',
      title1: 'Free and regular',
      title2: 'video boosters.',
      subscribe: 'Subscribe',
      channel: 'VIDYA PRABODHINI : YOUTUBE CHANNEL',
      heading1: 'Vidya Prabodhini,',
      heading2: 'Kolhapur',
      paragraph1:
        'A reliable and leading coaching institute guiding UPSC, MPSC and Banking aspirants since 2010.',
      paragraph2:
        'Situated in Kolhapur, Vidya Prabodhini offers an affordable alternative for serious civil services aspirants compared with the higher expenditure associated with metro cities such as Pune and Delhi.',
      visit: 'Visit YouTube channel',
    },

    testimonials: {
      label: 'STUDENT SUCCESS',
      title1: 'Stories of',
      title2: 'determination.',
      description:
        'The journey of every aspirant is different. Here are a few voices representing the dedication and success of our students.',
      previous: 'Previous testimonial',
      next: 'Next testimonial',
    },

    cta: {
      label: 'START YOUR PREPARATION',
      title1: 'Your goal deserves',
      title2: 'the right preparation.',
      description:
        'Explore our courses, understand the available batches and take the next step towards your competitive examination journey.',
      explore: 'Explore batches',
      admission: 'Admission enquiry',
    },

    footer: {
      label: 'VIDYAPRABODHINI',
      title1: 'Your preparation',
      title2: 'starts here.',
      enquire: 'Enquire about admission',
      description:
        'Guidance and preparation for UPSC, MPSC, Banking and Saralseva competitive examinations.',
      navigation: 'NAVIGATION',
      preparation: 'PREPARATION',
      contact: 'CONTACT',
      city: 'Kolhapur, Maharashtra',
      copyright: 'All rights reserved.',
      designed: 'Designed by SkewX Technologies',
      modal: {
        label: 'ADMISSION ENQUIRY',
        title1: 'Start your',
        title2: 'preparation.',
        successLabel: 'ENQUIRY RECEIVED',
        successTitle: 'Thank you for your enquiry.',
        successDescription:
          'Our team will get in touch with you regarding your course and learning mode.',
        close: 'Close',
      },
      form: {
        fullName: 'Full name',
        fullNamePlaceholder: 'Enter your full name',
        mobile: 'Mobile number',
        email: 'Email address',
        emailPlaceholder: 'you@example.com',
        course: 'Course',
        selectCourse: 'Select course',
        learningMode: 'Learning mode',
        selectMode: 'Select mode',
        selectWarning: 'Select a course and learning mode to continue.',
        selectionReady: 'Course and learning mode selected.',
        submit: 'Submit enquiry',
        disclaimer:
          'By submitting this form, you agree to be contacted by Vidyaprabodhini regarding your enquiry.',
      },
    },
  },

  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      coaching: 'कोचिंग',
      batches: 'बॅचेस',
      testSeries: 'टेस्ट सिरीज',
      admission: 'प्रवेश',
      result: 'निकाल',
      gallery: 'गॅलरी',
      enquire: 'चौकशी करा',
    },

    announcement: {
      new: 'नवीन',
      label: 'महत्त्वाची घोषणा',
      scholarship:
        'माननीय चंद्रकांतदादा पाटील शिष्यवृत्ती – नागरी सेवा परीक्षेच्या तयारीसाठी २०२६–२७',
      close: 'घोषणा बंद करा',
    },

    hero: {
      slides: [
        {
          eyebrow: 'विद्याप्रबोधिनी अकॅडमी',
          title1: 'तुमची',
          title2: 'तयारी घडवा.',
          description:
            'स्पर्धा परीक्षांसाठी संरचित अध्ययन, नियमित सराव आणि सातत्यपूर्ण प्रगतीवर आधारित तयारीचे कार्यक्रम.',
        },
        {
          eyebrow: 'स्पर्धा परीक्षा',
          title1: 'ध्येयासह',
          title2: 'तयारी करा.',
          description:
            'गंभीर स्पर्धा परीक्षार्थींसाठी केंद्रित मार्गदर्शन आणि शिस्तबद्ध अध्ययनाचे वातावरण.',
        },
        {
          eyebrow: 'विद्याप्रबोधिनी · कोल्हापूर',
          title1: 'तुमचे ध्येय.',
          title2: 'आमचे मार्गदर्शन.',
          description:
            'स्पर्धा परीक्षेच्या प्रवासात आवश्यक ज्ञान, आत्मविश्वास आणि सातत्य विकसित करण्यासाठी योग्य मार्गदर्शन.',
        },
      ],
      explore: 'बॅचेस पहा',
      admission: 'प्रवेश चौकशी',
      previous: 'मागील स्लाइड',
      next: 'पुढील स्लाइड',
    },

    programs: {
      label: 'अभ्यासक्रम',
      title: 'तुमची परीक्षा निवडा.',
      description:
        'तुमच्या परीक्षा आणि पसंतीच्या अध्ययन पद्धतीनुसार योग्य तयारीचा पर्याय निवडा.',
      view: 'बॅचेस पहा',
      items: {
        upsc: 'नागरी सेवा परीक्षा',
        mpsc: 'महाराष्ट्र लोकसेवा आयोग',
        banking: 'बँकिंग परीक्षा',
        saralseva: 'महाराष्ट्र शासन भरती परीक्षा',
      },
    },

    whyUs: {
      label: 'आम्ही का?',
      title1: 'उत्तम तयारीसाठी',
      title2: 'आवश्यक सर्व काही.',
      description:
        'मार्गदर्शन, सराव, पुनरावृत्ती आणि विद्यार्थी सहाय्य यावर आधारित केंद्रित तयारीचे वातावरण.',
      hover: 'पाहण्यासाठी माऊस फिरवा',
      items: [
        {
          title: 'अनुभवी प्राध्यापक',
          description:
            'अनुभवी आणि समर्पित प्राध्यापकांकडून स्पष्ट संकल्पना, व्यावहारिक मार्गदर्शन आणि सातत्यपूर्ण शैक्षणिक सहाय्य मिळते.',
        },
        {
          title: 'उत्तम पायाभूत सुविधा',
          description:
            'गंभीर स्पर्धा परीक्षार्थींसाठी सुसज्ज वर्गखोल्या, अभ्यासिका आणि आरामदायी अध्ययन सुविधा उपलब्ध आहेत.',
        },
        {
          title: 'परवडणारी फी',
          description:
            'विविध पार्श्वभूमीतील विद्यार्थ्यांना दर्जेदार स्पर्धा परीक्षा मार्गदर्शन परवडणाऱ्या शुल्कात उपलब्ध करून दिले जाते.',
        },
        {
          title: '१००% अभ्यासक्रम पूर्णता',
          description:
            'महत्त्वाच्या संकल्पना आणि परीक्षेच्या आवश्यकतांवर लक्ष केंद्रित करून संपूर्ण अभ्यासक्रम पूर्ण करण्यासाठी संरचित अभ्यासक्रम.',
        },
        {
          title: 'नियमित पुनरावृत्ती',
          description:
            'नियमित पुनरावृत्तीमुळे महत्त्वाच्या संकल्पना लक्षात राहतात, कमकुवत भाग मजबूत होतात आणि परीक्षेपूर्वी आत्मविश्वास वाढतो.',
        },
        {
          title: 'सर्वसमावेशक टेस्ट सिरीज',
          description:
            'नियमित सराव चाचण्यांमुळे तयारीची पातळी समजते, अचूकता सुधारते आणि वेळेचे व्यवस्थापन विकसित होते.',
        },
        {
          title: 'मोफत लायब्ररी',
          description:
            'वर्गाबाहेरही सातत्यपूर्ण अभ्यासासाठी स्वतंत्र अध्ययन वातावरण आणि उपयुक्त शैक्षणिक साहित्य उपलब्ध आहे.',
        },
        {
          title: 'नियमित फॉलो-अप',
          description:
            'नियमित शैक्षणिक फॉलो-अपद्वारे अडचणी ओळखणे, तयारीचा मागोवा घेणे आणि विद्यार्थ्यांना प्रेरित ठेवणे शक्य होते.',
        },
      ],
    },

    approach: {
      label: 'विद्याप्रबोधिनीची कार्यपद्धती',
      title1: 'तुमच्या ध्येयाभोवती',
      title2: 'घडवलेली तयारी.',
      description:
        'स्पर्धा परीक्षांसाठी केवळ माहिती पुरेशी नसते. प्रत्येक टप्प्यावर सातत्य, संरचित सराव आणि योग्य मार्गदर्शन आवश्यक असते.',
      points: [
        'केंद्रित अभ्यासक्रम',
        'संरचित अध्ययन',
        'मार्गदर्शित तयारी',
      ],
      button: 'आमची कार्यपद्धती जाणून घ्या',
      since: 'पासून',
    },

    youtube: {
      label: 'युट्यूबवर सबस्क्राईब करा',
      title1: 'मोफत आणि नियमित',
      title2: 'व्हिडिओ मार्गदर्शन.',
      subscribe: 'सबस्क्राईब करा',
      channel: 'विद्याप्रबोधिनी : युट्यूब चॅनेल',
      heading1: 'विद्याप्रबोधिनी,',
      heading2: 'कोल्हापूर',
      paragraph1:
        '२०१० पासून UPSC, MPSC आणि Banking परीक्षार्थींना मार्गदर्शन करणारी विश्वासार्ह आणि अग्रगण्य कोचिंग संस्था.',
      paragraph2:
        'कोल्हापुरात स्थित विद्याप्रबोधिनी गंभीर नागरी सेवा परीक्षार्थींसाठी पुणे आणि दिल्लीसारख्या महानगरांच्या तुलनेत परवडणारा पर्याय उपलब्ध करून देते.',
      visit: 'युट्यूब चॅनेलला भेट द्या',
    },

    testimonials: {
      label: 'विद्यार्थी यश',
      title1: 'निश्चयाच्या',
      title2: 'यशोगाथा.',
      description:
        'प्रत्येक परीक्षार्थीचा प्रवास वेगळा असतो. आमच्या विद्यार्थ्यांच्या मेहनत आणि यशाचे प्रतिनिधित्व करणारे काही अनुभव.',
      previous: 'मागील अनुभव',
      next: 'पुढील अनुभव',
    },

    cta: {
      label: 'तुमची तयारी सुरू करा',
      title1: 'तुमच्या ध्येयासाठी',
      title2: 'योग्य तयारी आवश्यक आहे.',
      description:
        'आमचे अभ्यासक्रम पहा, उपलब्ध बॅचेस समजून घ्या आणि तुमच्या स्पर्धा परीक्षा प्रवासातील पुढचे पाऊल उचला.',
      explore: 'बॅचेस पहा',
      admission: 'प्रवेश चौकशी',
    },

    footer: {
      label: 'विद्याप्रबोधिनी',
      title1: 'तुमची तयारी',
      title2: 'येथून सुरू होते.',
      enquire: 'प्रवेशाबद्दल चौकशी करा',
      description:
        'UPSC, MPSC, Banking आणि Saralseva स्पर्धा परीक्षांसाठी मार्गदर्शन आणि तयारी.',
      navigation: 'नेव्हिगेशन',
      preparation: 'अभ्यासक्रम',
      contact: 'संपर्क',
      city: 'कोल्हापूर, महाराष्ट्र',
      copyright: 'सर्व हक्क राखीव.',
      designed: 'SkewX Technologies कडून डिझाइन',
      modal: {
        label: 'प्रवेश चौकशी',
        title1: 'तुमची',
        title2: 'तयारी सुरू करा.',
        successLabel: 'चौकशी प्राप्त झाली',
        successTitle: 'तुमच्या चौकशीबद्दल धन्यवाद.',
        successDescription:
          'तुमच्या अभ्यासक्रम आणि अध्ययन पद्धतीसंदर्भात आमची टीम लवकरच तुमच्याशी संपर्क साधेल.',
        close: 'बंद करा',
      },
      form: {
        fullName: 'पूर्ण नाव',
        fullNamePlaceholder: 'तुमचे पूर्ण नाव लिहा',
        mobile: 'मोबाईल नंबर',
        email: 'ई-मेल पत्ता',
        emailPlaceholder: 'you@example.com',
        course: 'अभ्यासक्रम',
        selectCourse: 'अभ्यासक्रम निवडा',
        learningMode: 'अध्ययन पद्धती',
        selectMode: 'अध्ययन पद्धती निवडा',
        selectWarning: 'पुढे जाण्यासाठी अभ्यासक्रम आणि अध्ययन पद्धती निवडा.',
        selectionReady: 'अभ्यासक्रम आणि अध्ययन पद्धती निवडली आहे.',
        submit: 'चौकशी सबमिट करा',
        disclaimer:
          'हा फॉर्म सबमिट करून, तुम्ही तुमच्या चौकशीसंदर्भात विद्याप्रबोधिनीकडून संपर्क साधण्यास सहमती देता.',
      },
    },
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('vp_lang') || 'en'
  })

  const setLanguage = (lang) => {
    setLanguageState(lang)
    localStorage.setItem('vp_lang', lang)
  }

  // Helper function to get text by dot-notation (e.g. t('nav.home'))
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]

    for (const part of keys) {
      value = value?.[part]
    }
    return value ?? key
  }

  // Provide current translation object directly for bulk mappings
  const dictionary = translations[language] || translations.en

  return (
    <LanguageContext.Provider
      value={{
        language,
        isMarathi: language === 'mr',
        setLanguage,
        t,
        dictionary,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return context
}