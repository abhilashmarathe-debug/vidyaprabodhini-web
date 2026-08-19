import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers3,
  Target,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/LanguageContext.jsx'

import chandrakantDada from '../assets/chandrakant-dada-pat_012318032028.jpg'

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const text = isMarathi
    ? {
        hero: {
          eyebrow: 'विद्याप्रबोधिनी अकॅडमी',
          title1: 'ध्येयाला दिशा.',
          title2: 'भविष्याची घडण.',
          description:
            'विद्या प्रबोधिनी हे कोल्हापुरातील अग्रगण्य स्पर्धा परीक्षा मार्गदर्शन केंद्र असून UPSC, MPSC, Banking आणि इतर शासकीय परीक्षांची तयारी करणाऱ्या विद्यार्थ्यांना मार्गदर्शन करते.',
          metaLabel: 'स्थापना',
          metaYear: '२०१०',
          metaCity: 'कोल्हापूर',
        },
        approach: {
          label: 'विद्याप्रबोधिनीची कार्यपद्धती',
          title1: 'तुमच्या ध्येयाभोवती',
          title2: 'घडवलेली तयारी.',
          description:
            'स्पर्धा परीक्षांसाठी केवळ माहिती पुरेशी नसते. प्रत्येक टप्प्यावर सातत्य, संरचित सराव आणि योग्य मार्गदर्शन आवश्यक असते.',
          pillars: [
            {
              title: 'केंद्रित अभ्यासक्रम (Focused Curriculum)',
              tagline: 'परीक्षेच्या बदलत्या ट्रेंडनुसार तंतोतंत अभ्यास',
              icon: Target,
              summary:
                'अनावश्यक माहितीचा भार कमी करून थेट परीक्षेच्या दृष्टीने आवश्यक असणाऱ्या मूलभूत व विश्लेषणात्मक संकल्पनांवर भर दिला जातो.',
              points: [
                'आयोगाच्या नवीनतम अभ्यासक्रमावर आधारित नोट्स व साहित्य',
                'मागील वर्षांच्या प्रश्नपत्रिकांचे सखोल विश्लेषण (PYQ Analysis)',
                'दैनिक चालू घडामोडींचे परीक्षाभिमुख विश्लेषण',
              ],
            },
            {
              title: 'संरचित अध्ययन (Structured Learning)',
              tagline: 'संकल्पनांपासून उत्तरलेखन आणि नियमित सरावापर्यंत',
              icon: Layers3,
              summary:
                'टप्प्याटप्प्याने होणारी प्रगती हीच यशाची गुरुकिल्ली आहे. पायाभूत अभ्यासापासून ते मुख्य परीक्षेच्या सराव चाचण्यांपर्यंतचे सुसूत्र नियोजन.',
              points: [
                'विषयनिहाय अभ्यासक्रम वेळेत पूर्ण करण्याची १००% हमी',
                'दैनिक आणि साप्ताहिक टेस्ट सिरीजद्वारे प्रगतीचे मूल्यांकन',
                'नियमित पुनरावृत्ती (Revision cycles) मुळे संकल्पनांची दृढता',
              ],
            },
            {
              title: 'मार्गदर्शित तयारी (Guided Preparation)',
              tagline: 'तज्ज्ञ प्राध्यापक व सेवारत अधिकाऱ्यांचे वैयक्तिक मार्गदर्शन',
              icon: Compass,
              summary:
                'अभ्यासातील अडथळे, वेळेचे व्यवस्थापन आणि मानसिक कणखरता यासाठी प्रत्येक विद्यार्थ्याला वैयक्तिक समुपदेशन व सहकार्य मिळते.',
              points: [
                'विद्यार्थ्यांच्या कमकुवत घटकांवर वैयक्तिक उपाययोजना व फॉलो-अप',
                'यशस्वी IAS, IPS आणि राज्यस्तरीय अधिकाऱ्यांचे मार्गदर्शन सत्रे',
                'मुलाखत व व्यक्तिमत्त्व विकासासाठी विशेष सराव व मॉक सेशन्स',
              ],
            },
          ],
        },
        story: {
          label: 'आमची गोष्ट',
          title1: 'संधी आणि मार्गदर्शनाची',
          title2: 'एक चळवळ.',
          intro:
            '२०१० पासून विद्या प्रबोधिनी दर्जेदार स्पर्धा परीक्षा मार्गदर्शन सर्व घटकांतील विद्यार्थ्यांपर्यंत पोहोचवण्यासाठी अविरत कार्यरत आहे.',
          sectionTag: 'संस्था',
          sinceText: '२०१० पासून',
          founderName: 'मा. आ. चंद्रकांतदादा पाटील',
          founderRole: 'संस्थापक प्रेरणा',
          journeySubtitle: 'आमचा प्रवास',
          journeyDesc:
            'करिअर समुपदेशन आणि स्पर्धा परीक्षा मार्गदर्शनासाठी समर्पित दीर्घकालीन शैक्षणिक उपक्रम.',
          paragraphs: [
            `मा. आ. चंद्रकांतदादा पाटील यांच्या अनेक सामाजिक व शैक्षणिक उपक्रमांपैकी एक उपक्रम म्हणजे विद्या प्रबोधिनी होय.`,
            `सन २०१० पासून कार्यरत व कोल्हापूर येथे स्थित असणारे, विद्या प्रबोधिनी स्पर्धा परीक्षा मार्गदर्शन केंद्र हे UPSC, MPSC आणि Banking यांसारख्या स्पर्धात्मक परीक्षांसाठी एक अग्रगण्य मार्गदर्शन केंद्र म्हणून ओळखले जाते.`,
            `साधारणपणे इयत्ता दहावी व बारावीनंतर विद्यार्थ्यांना करिअर संदर्भात विशेष मार्गदर्शनाची आवश्यकता असते आणि गोष्ट जेव्हा स्पर्धात्मक परीक्षांच्या तयारीची असते तेव्हा नेमके मार्गदर्शन अन् स्पर्धेत टिकण्यासाठी आवश्यक असणारे वातावरण या दोहोंची निकड विद्यार्थ्यांना भासते.`,
            `करिअर संदर्भातील सुटसुटीत अन् सुयोग्य समुपदेशन आणि केंद्रीय तथा राज्य स्तरावरील विविध स्पर्धा परीक्षांच्या तयारीसंदर्भातील परिपूर्ण मार्गदर्शन या दोहोंची उपलब्धता शहरी भागात काही अंशी दिसत असली तरी त्याची तीव्र उणीव ही निमशहरी आणि विशेषतः ग्रामीण भागातील विद्यार्थ्यांना जाणवते.`,
            `मागील सलग पंधरा वर्षे आमदार म्हणून आणि महसूल तथा मदत व पुनर्वसन खात्यांसह इतर अनेक खात्यांचे प्रमुख म्हणून महाराष्ट्र राज्याचे द्वितीय क्रमांकाचे मंत्री या नात्याने एक पूर्ण कार्यकाळ भूषवलेल्या आदरणीय दादांच्या नजरेतून या समस्या सुटणे शक्य नव्हतेच.`,
            `मुळात विद्यार्थीदशेपासूनच आपल्या राजकीय व सामाजिक कार्याला सुरुवात करणाऱ्या आदरणीय दादांनी नेहमीच तरुणकेंद्री, कल्पक व गुणवत्तापूर्ण उपक्रमांना प्राधान्य दिले आहे.`,
            `करिअर समुपदेशन आणि स्पर्धा परीक्षा मार्गदर्शन या दोन गोष्टींना विशेष लक्ष करून दादांनी योजलेल्या अनेक उपायांपैकी एक व संस्थात्मक अर्थाने कायमस्वरूपी असा उपाय म्हणजेच कोल्हापूर स्थित विद्या प्रबोधिनी स्पर्धा परीक्षा मार्गदर्शन केंद्र होय.`,
            `२०१० साली सुरू झालेल्या विद्या प्रबोधिनीने मार्गदर्शक संस्था असण्याशिवाय, कालांतराने व तरुणांच्या निकडी प्रमाणे, रोजगार व व्यवसाय सहाय्य, कौशल्य विकास, प्रशिक्षण, मागेल त्यास काम अशा अनेक बहुपयोगी व कल्पक योजनांची न नफा तत्त्वावर नियोजन आणि अंमलबजावणी केली आहे.`,
            `उल्लेखनीय बाब म्हणजे, अलीकडील काळात, स्पर्धात्मक परीक्षा (UPSC, MPSC व बँकिंग) क्षेत्रात विशेष ओळख निर्माण करणारी विद्या प्रबोधिनी ही याच परीक्षांच्या तयारीसाठी पूर्णवेळ शिष्यवृत्ती देणारी खाजगी क्षेत्रातील एकमेव संस्था ठरली आहे.`,
            `State Institute for Administrative Careers (SIAC), Pre IAS Training Centres (PITCs), BARTI, SARTHI, YASHADA इ. शासकीय संस्थांप्रमाणे केंद्रीय लोकसेवा आयोगाच्या परीक्षांची (UPSC) तयारी करणाऱ्या विद्यार्थ्यांना पूर्णवेळ निवास, भोजन व प्रशिक्षण अशी १००% शिष्यवृत्ती देणारी विद्या प्रबोधिनी, कोल्हापूर ही महाराष्ट्रातीलच नव्हे तर देशातील अग्रगण्य संस्था ठरली आहे.`,
            `मुळातच अत्यंत माफक शुल्क आकारण्याचे धोरण राबवणाऱ्या विद्या प्रबोधिनीने याशिवायही अनेक गरजू आणि होतकरू विद्यार्थ्यांना वेळोवेळी सहाय्य केले आहे.`,
            `एका बाजूला माफक शुल्क मात्र दुसरीकडे मार्गदर्शनामध्ये व्यावसायिक दर्जा या दोहोंचा मिलाफ करण्यामध्ये विद्या प्रबोधिनी सातत्याने यशस्वी ठरली आहे. विविध स्पर्धा परीक्षांमधून येणारे भरघोस निकाल याची साक्ष देतात.`,
          ],
        },
        modes: {
          label: 'अध्ययन पद्धती',
          title1: 'तुमच्या गरजेनुसार',
          title2: 'योग्य पर्याय निवडा.',
          explore: 'कोचिंग माहिती पहा',
          offline: {
            tag: 'वर्गखोली',
            title: 'ऑफलाइन अध्ययन',
            desc: 'प्राध्यापक आणि सहकाऱ्यांशी प्रत्यक्ष संवादासहित संरचित वातावरणात शिकण्यास पसंती देणाऱ्या विद्यार्थ्यांसाठी.',
          },
          online: {
            tag: 'डिजिटल',
            title: 'ऑनलाइन अध्ययन',
            desc: 'ऑनलाइन क्लासेस, डिजिटल नोट्स आणि घरबसल्या लवचिक वेळेत अभ्यास करणाऱ्या विद्यार्थ्यांसाठी उपयुक्त पर्याय.',
          },
        },
        cta: {
          label: 'तुमची तयारी सुरू करा',
          title1: 'तुमच्या यशाची सुरुवात',
          title2: 'एका योग्य निर्णयाने होते.',
          description:
            'आमचे विविध कोर्सेस समजून घ्या आणि तुमच्या ध्येयासाठी सर्वोत्तम बॅच निवडा.',
          explore: 'कोचिंग पर्याय',
          admission: 'प्रवेश चौकशी',
        },
      }
    : {
        hero: {
          eyebrow: 'VIDYAPROBODHINI ACADEMY',
          title1: 'Guiding ambition.',
          title2: 'Building futures.',
          description:
            'Vidya Prabodhini is a competitive examination guidance centre based in Kolhapur, supporting aspirants preparing for UPSC, MPSC, Banking and other government examinations.',
          metaLabel: 'ESTABLISHED',
          metaYear: '2010',
          metaCity: 'KOLHAPUR',
        },
        approach: {
          label: 'THE VIDYAPROBODHINI APPROACH',
          title1: 'Preparation built',
          title2: 'around your goal.',
          description:
            'Competitive examinations require more than information. They require consistency, structured practice and the right guidance at every stage.',
          pillars: [
            {
              title: 'Focused Curriculum',
              tagline: 'Targeted syllabus mapped to current exam patterns',
              icon: Target,
              summary:
                'We eliminate informational clutter to focus strictly on foundational understanding, conceptual clarity, and critical analytical ability required to succeed.',
              points: [
                'Comprehensive study material strictly aligned with exam blueprints',
                'In-depth previous years question paper analysis (PYQ Analysis)',
                'Structured daily and monthly current affairs coverage',
              ],
            },
            {
              title: 'Structured Learning',
              tagline: 'From fundamental clarity to descriptive answer mastery',
              icon: Layers3,
              summary:
                'Incremental, milestone-driven progress is the key to longevity in competitive exam prep. A disciplined schedule moves students seamlessly from basics to intensive mock practice.',
              points: [
                'Guaranteed 100% syllabus coverage with timely completions',
                'Regular evaluation through weekly chapter tests and full-length mocks',
                'Recurring revision cycles ensuring strong retention under pressure',
              ],
            },
            {
              title: 'Guided Preparation',
              tagline: 'Expert faculty mentorship and direct officer interaction',
              icon: Compass,
              summary:
                'Academic progress is closely paired with personal mentorship to refine strategy, build exam temperament, and overcome individual hurdles.',
              points: [
                'One-on-one doubt resolution and progress follow-ups',
                'Direct mentoring sessions with serving IAS, IPS, and state officers',
                'Specialized personality and interview readiness modules',
              ],
            },
          ],
        },
        story: {
          label: 'OUR STORY',
          title1: 'An initiative built',
          title2: 'around opportunity.',
          intro:
            'Since 2010, Vidya Prabodhini has worked towards making quality competitive examination guidance more accessible to aspiring students.',
          sectionTag: 'INSTITUTION',
          sinceText: 'SINCE 2010',
          founderName: 'Hon. Chandrakant Dada Patil',
          founderRole: 'Founder initiative',
          journeySubtitle: 'Our journey.',
          journeyDesc:
            'A long-term educational initiative focused on career guidance and competitive examination preparation.',
          paragraphs: [
            `Vidya Prabodhini is one of the many social and educational initiatives undertaken by Hon. Shri Chandrakant Dada Patil.`,
            `Established in 2010 and based in Kolhapur, Vidya Prabodhini Competitive Examination Guidance Centre is recognised as a prominent guidance centre for competitive examinations such as UPSC, MPSC and Banking.`,
            `Students generally require specialised career guidance after completing their 10th or 12th standard. When it comes to preparing for competitive examinations, they need both accurate guidance and an environment that enables them to sustain themselves in a competitive setting.`,
            `While career counselling and guidance for central and state-level competitive examinations are available to some extent in urban areas, students from semi-urban and especially rural areas often face a significant lack of access to such opportunities.`,
            `Having served Maharashtra for a continuous fifteen-year term as a Member of Legislative Assembly and subsequently as a senior minister holding important portfolios including Revenue and Relief & Rehabilitation, Hon. Dada Patil recognised that these challenges needed to be addressed.`,
            `Having begun his political and social work from his student days, Hon. Dada Patil has consistently given priority to youth-oriented, innovative and quality initiatives. Vidya Prabodhini Competitive Examination Guidance Centre in Kolhapur is one of the institutional and long-term initiatives conceived with special emphasis on career counselling and competitive examination guidance.`,
            `Since its establishment in 2010, Vidya Prabodhini has expanded beyond examination guidance and, in response to the evolving needs of young people, has planned and implemented several non-profit initiatives related to employment and entrepreneurship support, skill development, training and employment assistance.`,
            `In recent years, Vidya Prabodhini has established a distinctive identity in the field of competitive examinations including UPSC, MPSC and Banking. The organisation has also provided full-time scholarship support for students preparing for competitive examinations.`,
            `For UPSC aspirants, Vidya Prabodhini has provided full-time residential facilities, food and training through scholarship-based support. The initiative aims to make serious competitive examination preparation accessible to deserving students regardless of their financial background.`,
            `Along with a policy of keeping fees affordable, Vidya Prabodhini has continued to support deserving and needy students at various stages. The institution strives to combine affordable education with professional-quality guidance, and its performance in various competitive examinations reflects this approach.`,
          ],
        },
        modes: {
          label: 'LEARNING MODES',
          title1: 'Learn the way',
          title2: 'that works for you.',
          explore: 'Explore coaching',
          offline: {
            tag: 'CLASSROOM',
            title: 'Offline learning',
            desc: 'Classroom-based preparation for students who prefer a structured physical learning environment with direct access to faculty and peers.',
          },
          online: {
            tag: 'DIGITAL',
            title: 'Online learning',
            desc: 'Flexible learning options for students who prefer online classes and digital access to their preparation resources.',
          },
        },
        cta: {
          label: 'START YOUR PREPARATION',
          title1: 'Your preparation',
          title2: 'starts with a decision.',
          description:
            'Explore our coaching options and find the preparation path that works for you.',
          explore: 'Explore coaching',
          admission: 'Admission enquiry',
        },
      }

  return (
    <main className="about-page">

      {/* =====================================================
          DETAILED APPROACH SECTION (MATCHED WITH HOME PILLARS)
      ===================================================== */}

      <section className="about-approach" id="approach">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">
                {text.approach.label}
              </span>

              <h2>
                {text.approach.title1}
                <br />
                {text.approach.title2}
              </h2>
            </div>

            <p>
              {text.approach.description}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '40px' }}>
            {text.approach.pillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <article
                  key={pillar.number}
                  style={{
                    padding: '36px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--line)',
                    background: 'var(--surface)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '24px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--brand-light, #eef2ff)',
                        color: 'var(--brand)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--subtle)', letterSpacing: '1px' }}>
                      {pillar.number}
                    </span>
                  </div>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
                      <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--ink)' }}>
                        {pillar.title}
                      </h3>
                      <span style={{ fontSize: '12px', color: 'var(--brand)', fontWeight: '600' }}>
                        {pillar.tagline}
                      </span>
                    </div>

                    <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: '1.65', marginBottom: '18px' }}>
                      {pillar.summary}
                    </p>

                    <div style={{ paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                        {pillar.points.map((pt, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--ink)', lineHeight: '1.45' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: '2px' }} />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="about-story">
        <div className="container">

          <div className="about-story-header">
            <div>
              <span className="section-label">
                {text.story.label}
              </span>

              <h2>
                {text.story.title1}
                <br />
                {text.story.title2}
              </h2>
            </div>

            <div className="about-story-intro">
              <p>
                {text.story.intro}
              </p>
            </div>
          </div>

          <div className="about-story-layout">
            <aside className="about-story-sidebar">
              <div className="about-story-index">
                <span>01</span>
                <span>
                  {text.story.sectionTag}
                </span>
              </div>

              <div className="about-story-line" />

              <span className="about-story-year">
                {text.story.sinceText}
              </span>
            </aside>

            <article className="about-story-content">
              <div className="about-story-top">
                <div className="about-founder">
                  <div className="about-founder-image">
                    <img
                      src={chandrakantDada}
                      alt={text.story.founderName}
                    />
                  </div>

                  <div className="about-founder-caption">
                    <strong>
                      {text.story.founderName}
                    </strong>
                    <span>
                      {text.story.founderRole}
                    </span>
                  </div>
                </div>

                <div className="about-story-heading">
                  <span>
                    VIDYA PRABODHINI
                  </span>
                  <h3>
                    {text.story.journeySubtitle}
                  </h3>
                  <p>
                    {text.story.journeyDesc}
                  </p>
                </div>
              </div>

              <div className="about-story-text">
                <p className="about-story-lead">
                  {text.story.paragraphs[0]}
                </p>

                {text.story.paragraphs
                  .slice(1)
                  .map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
              </div>
            </article>
          </div>

        </div>
      </section>

      {/* =====================================================
          LEARNING MODES
      ===================================================== */}

      <section className="about-modes">
        <div className="container">

          <div className="about-modes-header">
            <div>
              <span className="section-label">
                {text.modes.label}
              </span>

              <h2>
                {text.modes.title1}
                <br />
                {text.modes.title2}
              </h2>
            </div>

            <Link
              to="/coaching"
              className="text-link"
            >
              {text.modes.explore}
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="about-modes-grid">
            {/* OFFLINE */}
            <article className="about-mode-card">
              <div className="about-mode-number">
                
              </div>

              <div>
                <span>
                  {text.modes.offline.tag}
                </span>

                <h3>
                  {text.modes.offline.title}
                </h3>

                <p>
                  {text.modes.offline.desc}
                </p>
              </div>

              <ArrowUpRight size={18} />
            </article>

            {/* ONLINE */}
            <article className="about-mode-card dark">
              <div className="about-mode-number">
                
              </div>

              <div>
                <span>
                  {text.modes.online.tag}
                </span>

                <h3>
                  {text.modes.online.title}
                </h3>

                <p>
                  {text.modes.online.desc}
                </p>
              </div>

              <ArrowUpRight size={18} />
            </article>
          </div>

        </div>
      </section>

    </main>
  )
}