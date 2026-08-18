import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Library,
  Play,
  RefreshCcw,
  TestTube2,
  Users,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web'
import { useLanguage } from '../components/LanguageContext.jsx'

import slide6 from '../assets/slide6.jpg'
import slide2 from '../assets/slide2.jpg'
import slide7 from '../assets/slide7.jpg'

import approachAnimationData from '../assets/Woman discovering business statistics.json'

import ravikumarJadhav from '../assets/testimonials/ravikumar_jadhav.jpg'
import annapurnaTalangade from '../assets/testimonials/annapurna_talangade.jpg'
import laxmanPujari from '../assets/testimonials/laxman_pujari.jpg'
import arunPatil from '../assets/testimonials/arun_patil.jpg'

/* =========================================================
   ROBUST LOTTIE CONTAINER
========================================================= */
function LottiePlayer({ animationData }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const instance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    })

    return () => instance.destroy()
  }, [animationData])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '460px',
        height: '380px',
        margin: '0 auto',
      }}
    />
  )
}

export default function Home() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  const [activeSlide, setActiveSlide] = useState(0)
  const [announcementVisible, setAnnouncementVisible] = useState(true)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const text = isMarathi
    ? {
        announcement: {
          new: 'नवीन',
          label: 'महत्त्वाची घोषणा',
          scholarship:
            'माननीय चंद्रकांतदादा पाटील शिष्यवृत्ती – नागरी सेवा परीक्षेच्या तयारीसाठी २०२५–२६',
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
        },

        programs: {
          label: 'अभ्यासक्रम',
          title: 'तुमची परीक्षा निवडा.',
          description:
            'तुमच्या परीक्षा आणि पसंतीच्या अध्ययन पद्धतीनुसार योग्य तयारीचा पर्याय निवडा.',
          view: 'सविस्तर माहिती पहा',
          items: {
            upsc: 'नागरी सेवा परीक्षा',
            mpsc: 'महाराष्ट्र लोकसेवा आयोग',
            banking: 'बँकिंग परीक्षा',
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
      }
    : {
        announcement: {
          new: 'NEW',
          label: 'Important Announcement',
          scholarship:
            'Hon. Chandrakantdada Patil Scholarship for Civil Services Preparation 2025–26',
        },

        hero: {
          slides: [
            {
              eyebrow: 'VIDYAPROBODHINI ACADEMY',
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
              eyebrow: 'VIDYAPROBODHINI · KOLHAPUR',
              title1: 'Your goal.',
              title2: 'Our guidance.',
              description:
                'Build the knowledge, confidence and consistency required to move forward in your competitive examination journey.',
            },
          ],
          explore: 'Explore batches',
          admission: 'Admission enquiry',
        },

        programs: {
          label: 'PROGRAMS',
          title: 'Choose your examination.',
          description:
            'Explore preparation options based on your examination and preferred learning mode.',
          view: 'Explore program',
          items: {
            upsc: 'Civil Services Examination',
            mpsc: 'Maharashtra Public Service Commission',
            banking: 'Banking examinations',
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
          label: 'THE VIDYAPROBODHINI APPROACH',
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
          channel: 'VIDYA PRABHODHINI : YOUTUBE CHANNEL',
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
      }

  /* =========================================================
     DATA
  ========================================================= */

  const programs = [
    {
      number: '01',
      title: 'UPSC',
      path: '/upsc',
      description: text.programs.items.upsc,
    },
    {
      number: '02',
      title: 'MPSC',
      path: '/mpsc',
      description: text.programs.items.mpsc,
    },
    {
      number: '03',
      title: 'Banking',
      path: '/banking',
      description: text.programs.items.banking,
    },
  ]

  const heroSlides = [
    {
      image: slide6,
      eyebrow: text.hero.slides[0].eyebrow,
      title: (
        <>
          {text.hero.slides[0].title1}
          <br />
          {text.hero.slides[0].title2}
        </>
      ),
      description: text.hero.slides[0].description,
    },
    {
      image: slide2,
      eyebrow: text.hero.slides[1].eyebrow,
      title: (
        <>
          {text.hero.slides[1].title1}
          <br />
          {text.hero.slides[1].title2}
        </>
      ),
      description: text.hero.slides[1].description,
    },
    {
      image: slide7,
      eyebrow: text.hero.slides[2].eyebrow,
      title: (
        <>
          {text.hero.slides[2].title1}
          <br />
          {text.hero.slides[2].title2}
        </>
      ),
      description: text.hero.slides[2].description,
    },
  ]

  const whyUsIcons = [
    Users,
    Building2,
    CheckCircle2,
    BookOpen,
    RefreshCcw,
    TestTube2,
    Library,
    Users,
  ]

  const whyUs = text.whyUs.items.map((item, index) => ({
    number: String(index + 1).padStart(2, '0'),
    icon: whyUsIcons[index],
    title: item.title,
    description: item.description,
  }))

  const testimonials = [
    {
      image: arunPatil,
      name: 'Arun Patil',
      position: isMarathi ? 'उपजिल्हाधिकारी' : 'Dy. Collector',
      achievement: isMarathi ? 'रँक २१, राज्यसेवा २०१९' : 'Rank 21, Rajyaseva 2019',
      text: isMarathi
        ? 'कोल्हापूरसारख्या ठिकाणी इन्फ्रास्ट्रक्चर परिपूर्ण असलेला क्लास म्हणजे विद्या प्रबोधिनी होय. इथले प्रेरणादायी वातावरण माझ्या एकूणच अभ्यासास पोषक ठरले. परिपूर्ण इन्फ्रास्ट्रक्चर आणि योग्य मार्गदर्शन यांचा एकत्रित परिणाम म्हणजे अंतिम निकालातील स्थान होय. स्पर्धा परीक्षार्थींनी याचा अधिकाधिक उपयोग करून घ्यावा असेच मी म्हणेन.'
        : 'A premier coaching environment with complete infrastructure in Kolhapur. The motivating atmosphere and expert mentorship helped me secure Rank 21 in Rajyaseva 2019.',
    },
    {
      image: laxmanPujari,
      name: 'Laxman Pujari',
      position: 'IBPS PO',
      achievement: '2021',
      text: isMarathi
        ? '२०२० आणि २०२१ मध्ये मी SBI Clerk, IBPS Clerk, IBPS PO या परीक्षा उत्तीर्ण केल्या आणि अखेरीस IBPS PO म्हणून रुजू झालो. या संपूर्ण प्रवासात विद्या प्रबोधिनी माझी मार्गदर्शक आणि मेंटर राहिली. मला लेक्चर्स, लायब्ररी, ऑनलाइन साहित्य, टेस्ट्स, व्हिडिओ सेशन्स आणि स्टडी रूमचा अनेक वेळा लाभ घेता आला. सर्व प्राध्यापक आमच्या शंका सोडवण्यासाठी नेहमी तत्पर होते.'
        : 'In 2020 & 2021 I could crack SBI Clerk, IBPS Clerk, IBPS PO and finally I have chosen to join as IBPS PO. In this whole process Vidya Prabodhini has been my guide, my mentor all the time. I was allowed to attend lectures, library, Online material, Tests, Video Sessions, Study Room for n number of times. All faculties were always ready to solve our doubts.',
    },
    {
      image: annapurnaTalangade,
      name: 'Annapurna Talangade',
      position: 'IBPS Clerk',
      achievement: '2021',
      text: isMarathi
        ? 'IBPS Clerk 2021 परीक्षा उत्तीर्ण करण्यात विद्या प्रबोधिनीचा माझ्या यशात मोठा वाटा आहे. सातत्यपूर्ण सराव चाचण्या, त्यांचे विश्लेषण आणि अनुभवी प्राध्यापकांचे मार्गदर्शन यामुळे मला हे यश मिळवता आले. काही गुणांनी माझी मागील Mains परीक्षा हुकल्यानंतरही विद्या प्रबोधिनी आणि संपूर्ण टीम माझ्यासोबत राहिली आणि मला पुन्हा मेहनत करण्यासाठी प्रेरित केले.'
        : "Vidya Prabodhini has played a major role in my achievement, to clear IBPS Clerk'21. With the help of numerous and continuous Practice Tests, Analysis & Coaching from expert faculties, I could achieve this success. Vidya Prabodhini and it's all the staff was always with me, whenever I missed my previous mains with few marks, to boost me and to motivate me again to study hard.",
    },
    {
      image: ravikumarJadhav,
      name: 'Ravikumar Jadhav',
      position: '',
      achievement: '',
      text: isMarathi
        ? 'UPSC, MPSC आणि Banking परीक्षार्थींसाठी विद्या प्रबोधिनी ही सर्वोत्तम संस्थांपैकी एक आहे. येथे आम्हाला प्रशिक्षणासोबतच प्राध्यापकांकडून उत्तम प्रेरणा मिळते. टेस्ट सिरीज उत्तम आहेत, चांगली लायब्ररी, उत्तम कोचिंग स्टाफ आणि आरामदायी स्टडी रूम्स उपलब्ध आहेत. पायाभूत सुविधा उत्कृष्ट आहेत. UPSC प्रमुख राजकुमार पाटील सरांचे मेंटरशिप उत्कृष्ट आहे.'
        : 'Vidya Prabodhini is one of the best Institutes for all the UPSC, MPSC and Banking aspirants. We get not only training but also the best motivation from all the Professors. Test series are best, Good Library, Best Coaching Staff and Comfortable Study Rooms are also available here. Infrastructure is Outstanding. Mentorship is excellent by UPSC Head Rajkumar Patil Sir.',
    },
  ]

  /* =========================================================
     SLIDERS
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [heroSlides.length])

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    )
  }

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    )
  }

  const previousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const nextTestimonial = () => {
    setActiveTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  const currentSlide = heroSlides[activeSlide]

  return (
    <main className="home-page">

      {/* =====================================================
          IMPORTANT ANNOUNCEMENT
      ===================================================== */}

      {announcementVisible && (
        <div className="announcement-bar">
          <div className="container announcement-bar-inner">

            <div className="announcement-badge">
              <span className="announcement-dot" />
              {text.announcement.new}
            </div>

            <div className="announcement-label">
              {text.announcement.label}
            </div>

            <div className="announcement-marquee">
              <div className="announcement-marquee-track">

                <a
                  href="https://forms.gle/ndWrAka6bPZrAX45A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="announcement-link"
                >
                  {text.announcement.scholarship}
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://forms.gle/ndWrAka6bPZrAX45A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="announcement-link"
                  aria-hidden="true"
                  tabIndex="-1"
                >
                  {text.announcement.scholarship}
                  <ArrowUpRight size={15} />
                </a>

              </div>
            </div>

            <button
              type="button"
              className="announcement-close"
              onClick={() => setAnnouncementVisible(false)}
              aria-label={isMarathi ? 'घोषणा बंद करा' : 'Close announcement'}
            >
              <X size={16} />
            </button>

          </div>
        </div>
      )}

      {/* =====================================================
          HERO CAROUSEL
      ===================================================== */}

      <section className="home-hero">

        <div className="home-hero-slider">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt=""
              className={
                index === activeSlide
                  ? 'hero-slide-image active'
                  : 'hero-slide-image'
              }
            />
          ))}
          <div className="home-hero-overlay" />
        </div>

        <div className="container home-hero-grid">

          <div
            className="home-hero-content"
            key={`hero-${activeSlide}-${language}`}
          >

            <div className="eyebrow">
              <span className="eyebrow-line" />
              {currentSlide.eyebrow}
            </div>

            <h1>
              {currentSlide.title}
            </h1>

            <p>
              {currentSlide.description}
            </p>

            <div className="home-hero-actions">

              <Link
                to="/coaching"
                className="button button-primary"
              >
                {text.hero.explore}
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/admission"
                className="button button-secondary"
              >
                {text.hero.admission}
              </Link>

            </div>

          </div>

          <div className="home-hero-controls">

            <button
              type="button"
              onClick={previousSlide}
              aria-label={isMarathi ? 'मागील स्लाइड' : 'Previous slide'}
            >
              <ArrowLeft size={18} />
            </button>

            <span>
              {String(activeSlide + 1).padStart(2, '0')}
              {' / '}
              {String(heroSlides.length).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={nextSlide}
              aria-label={isMarathi ? 'पुढील स्लाइड' : 'Next slide'}
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROGRAMS
      ===================================================== */}

      <section className="home-programs">

        <div className="container">

          <div className="section-heading">

            <div>
              <span className="section-label">
                {text.programs.label}
              </span>

              <h2>
                {text.programs.title}
              </h2>
            </div>

            <p>
              {text.programs.description}
            </p>

          </div>

          <div className="program-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>

            {programs.map((program) => (
              <Link
                to={program.path}
                className="program-card"
                key={program.title}
              >

                <div className="program-card-top">
                  <span>
                    {program.number}
                  </span>

                  <ArrowUpRight size={17} />
                </div>

                <div className="program-card-content">

                  <h3>
                    {program.title}
                  </h3>

                  <p>
                    {program.description}
                  </p>

                </div>

                <div className="program-card-footer">
                  {text.programs.view}
                  <span>→</span>
                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY US
      ===================================================== */}

      <section className="home-why-us">

        <div className="container">

          <div className="section-heading">

            <div>
              <span className="section-label">
                {text.whyUs.label}
              </span>

              <h2>
                {text.whyUs.title1}
                <br />
                {text.whyUs.title2}
              </h2>
            </div>

            <p>
              {text.whyUs.description}
            </p>

          </div>

          <div className="why-us-grid">

            {whyUs.map((item) => {

              const Icon = item.icon

              return (
                <article
                  className="why-us-card"
                  key={item.number}
                >

                  <div className="why-us-card-inner">

                    <div className="why-us-card-front">

                      <div className="why-us-top">

                        <span>
                          {item.number}
                        </span>

                        <Icon size={20} />

                      </div>

                      <div className="why-us-front-content">

                        <h3>
                          {item.title}
                        </h3>

                        <span className="why-us-hover-hint">
                          {text.whyUs.hover}
                        </span>

                      </div>

                    </div>

                    <div className="why-us-card-back">

                      <span className="why-us-back-number">
                        {item.number}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </div>

                </article>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          APPROACH (WITH LOTTIE ANIMATION)
      ===================================================== */}

      <section className="home-approach">

        <div className="container home-approach-grid">

          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 'var(--radius-lg, 16px)',
              padding: '20px',
              border: '1px solid var(--line, #e2e8f0)',
              overflow: 'hidden',
              minHeight: '400px',
            }}
          >

            <LottiePlayer
              animationData={approachAnimationData}
            />

          </div>

          <div className="home-approach-content">

            <span className="section-label">
              {text.approach.label}
            </span>

            <h2>
              {text.approach.title1}
              <br />
              {text.approach.title2}
            </h2>

            <p>
              {text.approach.description}
            </p>

            <div className="approach-points">

              <div>
                <span>01</span>
                <strong>{text.approach.points[0]}</strong>
              </div>

              <div>
                <span>02</span>
                <strong>{text.approach.points[1]}</strong>
              </div>

              <div>
                <span>03</span>
                <strong>{text.approach.points[2]}</strong>
              </div>

            </div>

            <Link
              to="/about#approach"
              className="button button-primary"
            >
              {text.approach.button}
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          YOUTUBE
      ===================================================== */}

      <section className="home-youtube">

        <div className="container">

          <div className="youtube-header">

            <div>

              <span className="section-label">
                {text.youtube.label}
              </span>

              <h2>
                {text.youtube.title1}
                <br />
                {text.youtube.title2}
              </h2>

            </div>

            <a
              href="https://www.youtube.com/c/VidyaPrabodhiniKolhapur"
              target="_blank"
              rel="noopener noreferrer"
              className="button youtube-subscribe-button"
            >
              {text.youtube.subscribe}
              <ArrowUpRight size={16} />
            </a>

          </div>

          <div className="youtube-grid">

            <div className="youtube-video">

              <iframe
                src="https://www.youtube.com/embed/TD5ZPNHyX_s"
                title="Vidya Prabodhini YouTube video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              <div className="youtube-play-badge">
                <Play
                  size={18}
                  fill="currentColor"
                />
              </div>

            </div>

            <div className="youtube-content">

              <span className="youtube-channel">
                {text.youtube.channel}
              </span>

              <h3>
                {text.youtube.heading1}
                <br />
                {text.youtube.heading2}
              </h3>

              <p>
                {text.youtube.paragraph1}
              </p>

              <p>
                {text.youtube.paragraph2}
              </p>

              <a
                href="https://www.youtube.com/c/VidyaPrabodhiniKolhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-channel-link"
              >
                {text.youtube.visit}
                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="home-testimonials">

        <div className="container">

          <div className="testimonials-header">

            <div>

              <span className="section-label">
                {text.testimonials.label}
              </span>

              <h2>
                {text.testimonials.title1}
                <br />
                {text.testimonials.title2}
              </h2>

            </div>

            <div className="testimonials-header-right">

              <p>
                {text.testimonials.description}
              </p>

              <div className="testimonials-controls">

                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label={text.testimonials.previous}
                  className="testimonial-arrow"
                >
                  <ArrowLeft size={18} />
                </button>

                <div className="testimonial-counter">

                  <strong>
                    {String(activeTestimonial + 1).padStart(2, '0')}
                  </strong>

                  <span>/</span>

                  <span>
                    {String(testimonials.length).padStart(2, '0')}
                  </span>

                </div>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label={text.testimonials.next}
                  className="testimonial-arrow"
                >
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>

          <div className="testimonials-slider">

            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${activeTestimonial * 100}%)`,
              }}
            >

              {testimonials.map((testimonial) => (

                <div
                  className="testimonial-slide"
                  key={testimonial.name}
                >

                  <article className="testimonial-card">

                    <div className="testimonial-photo">

                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                      />

                    </div>

                    <div className="testimonial-content">

                      <div className="testimonial-mark">
                        “
                      </div>

                      <p>
                        {testimonial.text}
                      </p>

                      <div className="testimonial-person">

                        <strong>
                          {testimonial.name}
                        </strong>

                        {testimonial.position && (
                          <span>
                            {testimonial.position}
                          </span>
                        )}

                        {testimonial.achievement && (
                          <small>
                            {testimonial.achievement}
                          </small>
                        )}

                      </div>

                    </div>

                  </article>

                </div>

              ))}

            </div>

          </div>

          <div className="testimonial-dots">

            {testimonials.map((testimonial, index) => (

              <button
                key={testimonial.name}
                type="button"
                className={
                  index === activeTestimonial
                    ? 'testimonial-dot active'
                    : 'testimonial-dot'
                }
                onClick={() => setActiveTestimonial(index)}
                aria-label={
                  isMarathi
                    ? `अनुभव ${index + 1} वर जा`
                    : `Go to testimonial ${index + 1}`
                }
              />

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="home-cta">

        <div className="container home-cta-inner">

          <div>

            <span className="section-label">
              {text.cta.label}
            </span>

            <h2>
              {text.cta.title1}
              <br />
              {text.cta.title2}
            </h2>

            <p>
              {text.cta.description}
            </p>

          </div>

          <div className="home-cta-actions">

            <Link
              to="/coaching"
              className="button button-primary"
            >
              {text.cta.explore}
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/admission"
              className="button button-secondary"
            >
              {text.cta.admission}
            </Link>

          </div>

        </div>
      </section>

    </main>
  )
}