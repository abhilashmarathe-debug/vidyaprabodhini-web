import { useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  Layers3,
  Target,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import chandrakantDada from '../assets/chandrakant-dada-pat_012318032028.jpg'

/* =========================================================
   PRINCIPLES
========================================================= */

const principles = [
  {
    number: '01',
    icon: Target,
    title: 'Focused preparation',
    text:
      'Preparation stays aligned with the requirements of the examination and the stage of the learner.',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Structured learning',
    text:
      'A clear learning structure helps students move from concepts and fundamentals to regular practice.',
  },
  {
    number: '03',
    icon: Layers3,
    title: 'Consistent practice',
    text:
      'Regular revision, testing and evaluation form an important part of competitive examination preparation.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Guided support',
    text:
      'Students can seek guidance throughout their preparation and make informed decisions about their next step.',
  },
]

/* =========================================================
   STORY
========================================================= */

const story = {
  en: [
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

  mr: [
    `मा. आ. चंद्रकांतदादा पाटील यांच्या अनेक सामाजिक व शैक्षणिक उपक्रमांपैकी एक उपक्रम म्हणजे विद्या प्रबोधिनी होय.`,

    `सन 2010 पासून कार्यरत व कोल्हापूर येथे स्थित असणारे, विद्या प्रबोधिनी स्पर्धा परीक्षा मार्गदर्शन केंद्र हे UPSC, MPSC आणि Banking यांसारख्या स्पर्धात्मक परीक्षांसाठी एक अग्रगण्य मार्गदर्शन केंद्र म्हणून ओळखले जाते.`,

    `साधारणपणे इयत्ता दहावी व बारावीनंतर विद्यार्थ्यांना करिअर संदर्भात विशेष मार्गदर्शनाची आवश्यकता असते आणि गोष्ट जेव्हा स्पर्धात्मक परीक्षांच्या तयारीची असते तेव्हा नेमके मार्गदर्शन अन् स्पर्धेत टिकण्यासाठी आवश्यक असणारे वातावरण या दोहोंची निकड विद्यार्थ्यांना भासते.`,

    `करिअर संदर्भातील सुटसुटीत अन् सुयोग्य समुपदेशन आणि केंद्रीय तथा राज्य स्तरावरील विविध स्पर्धा परीक्षांच्या तयारीसंदर्भातील परिपूर्ण मार्गदर्शन या दोहोंची उपलब्धता शहरी भागात काही अंशी दिसत असली तरी त्याची तीव्र उणीव ही निमशहरी आणि विशेषत ग्रामीण भागातील विद्यार्थ्यांना जाणवते.`,

    `मागील सलग पंधरा वर्षे आमदार म्हणून आणि महसूल तथा मदत व पुनर्वसन खात्यांसह इतर अनेक खात्यांचे प्रमुख म्हणून महाराष्ट्र राज्याचे द्वितीय क्रमांकाचे मंत्री या नात्याने एक पूर्ण कार्यकाळ भूषवलेल्या आदरणीय दादांच्या नजरेतून या समस्या सुटणे शक्य नव्हतेच.`,

    `मुळात विद्यार्थीदशेपासूनच आपल्या राजकीय व सामाजिक कार्याला सुरुवात करणाऱ्या आदरणीय दादांनी नेहमीच तरुणकेंद्री, कल्पक व गुणवत्तापूर्ण उपक्रमांना प्राधान्य दिले आहे.`,

    `करिअर समुपदेशन आणि स्पर्धा परीक्षा मार्गदर्शन या दोन गोष्टींना विशेष लक्ष करून दादांनी योजलेल्या अनेक उपायांपैकी एक व संस्थात्मक अर्थाने कायमस्वरूपी असा उपाय म्हणजेच कोल्हापूर स्थित विद्या प्रबोधिनी स्पर्धा परीक्षा मार्गदर्शन केंद्र होय.`,

    `2010 साली सुरू झालेल्या विद्या प्रबोधिनीने मार्गदर्शक संस्था असण्याशिवाय, कालांतराने व तरुणांच्या निकडी प्रमाणे, रोजगार व व्यवसाय सहाय्य, कौशल्य विकास, प्रशिक्षण, मागेल त्यास काम अशा अनेक बहुपयोगी व कल्पक योजनांची न नफा तत्त्वावर नियोजन आणि अंमलबजावणी केली आहे.`,

    `उल्लेखनीय बाब म्हणजे, अलीकडील काळात, स्पर्धात्मक परीक्षा (UPSC, MPSC व बँकिंग) क्षेत्रात विशेष ओळख निर्माण करणारी विद्या प्रबोधिनी ही याच परीक्षांच्या तयारीसाठी पूर्णवेळ शिष्यवृत्ती देणारी खाजगी क्षेत्रातील एकमेव संस्था ठरली आहे.`,

    `State Institute for Administrative Careers (SIAC), Pre IAS Training Centres (PITCs), BARTI, SARTHI, YASHADA इ. शासकीय संस्थांप्रमाणे केंद्रीय लोकसेवा आयोगाच्या परीक्षांची (UPSC) तयारी करणाऱ्या विद्यार्थ्यांना पूर्णवेळ निवास, भोजन व प्रशिक्षण अशी 100% शिष्यवृत्ती देणारी विद्या प्रबोधिनी, कोल्हापूर ही महाराष्ट्रातीलच नव्हे तर देशातील एकमेव खाजगी संस्था ठरली आहे.`,

    `मुळातच अत्यंत माफक शुल्क आकारण्याचे धोरण राबवणाऱ्या विद्या प्रबोधिनीने याशिवायही अनेक गरजू आणि होतकरू विद्यार्थ्यांना वेळोवेळी सहाय्य केले आहे.`,

    `एका बाजूला माफक शुल्क मात्र दुसरीकडे मार्गदर्शनामध्ये व्यावसायिक दर्जा या दोहोंचा मिलाफ करण्यामध्ये विद्या प्रबोधिनी सातत्याने यशस्वी ठरली आहे. विविध स्पर्धा परीक्षांमधून येणारे भरघोस निकाल याची साक्ष देतात.`,
  ],
}

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const [storyLanguage, setStoryLanguage] = useState('en')

  const currentStory = story[storyLanguage]

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="container about-hero-grid">

          <div className="about-hero-heading">

            <div className="eyebrow">
              <span className="" />
              VIDYAPROBODHINI ACADEMY
            </div>

            <h1>
              Guiding ambition.
              <br />
              Building futures.
            </h1>

          </div>

          <div className="about-hero-copy">

            <p>
              Vidya Prabodhini is a competitive examination
              guidance centre based in Kolhapur, supporting
              aspirants preparing for UPSC, MPSC, Banking
              and other government examinations.
            </p>

            <div className="about-hero-meta">

              <span>ESTABLISHED</span>

              <strong>2010</strong>

              <span>·</span>

              <span>KOLHAPUR</span>

            </div>

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
                OUR STORY
              </span>

              <h2>
                An initiative built
                <br />
                around opportunity.
              </h2>

            </div>

            <div className="about-story-intro">

              <p>
                Since 2010, Vidya Prabodhini has worked
                towards making quality competitive
                examination guidance more accessible
                to aspiring students.
              </p>

            </div>

          </div>


          {/* STORY CONTENT */}

          <div className="about-story-layout">

            <aside className="about-story-sidebar">

              <div className="about-story-index">

                <span>01</span>

                <span>
                  INSTITUTION
                </span>

              </div>

              <div className="about-story-line" />

              <span className="about-story-year">
                SINCE 2010
              </span>

            </aside>


            <article className="about-story-content">

              {/* STORY TOP */}

              <div className="about-story-top">

                <div className="about-founder">

                  <div className="about-founder-image">

                    <img
                      src={chandrakantDada}
                      alt="Hon. Chandrakant Dada Patil"
                    />

                  </div>

                  <div className="about-founder-caption">

                    <strong>
                      Hon. Chandrakant Dada Patil
                    </strong>

                    <span>
                      Founder initiative
                    </span>

                  </div>

                </div>


                <div className="about-story-heading">

                  <span>
                    VIDYA PRABODHINI
                  </span>

                  <h3>
                    Our journey.
                  </h3>

                  <p>
                    A long-term educational initiative
                    focused on career guidance and
                    competitive examination preparation.
                  </p>

                </div>

              </div>


              {/* LANGUAGE */}

              <div className="about-language-bar">

                <span>
                  STORY LANGUAGE
                </span>

                <div className="language-toggle">

                  <button
                    type="button"
                    className={
                      storyLanguage === 'en'
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setStoryLanguage('en')
                    }
                  >
                    English
                  </button>

                  <button
                    type="button"
                    className={
                      storyLanguage === 'mr'
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setStoryLanguage('mr')
                    }
                  >
                    मराठी
                  </button>

                </div>

              </div>


              {/* STORY TEXT */}

              <div className="about-story-text">

                <p className="about-story-lead">
                  {currentStory[0]}
                </p>

                {currentStory
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
          APPROACH
      ===================================================== */}

      <section className="about-approach">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-label">
                OUR APPROACH
              </span>

              <h2>
                Preparation built
                <br />
                around students.
              </h2>

            </div>

            <p>
              Competitive examinations require
              consistency over time. Our approach
              combines structured learning, practice,
              revision and continuous guidance.
            </p>

          </div>


          <div className="principles-grid">

            {principles.map((item) => {

              const Icon = item.icon

              return (
                <article
                  className="principle-card"
                  key={item.number}
                >

                  <div className="principle-top">

                    <span>
                      {item.number}
                    </span>

                    <Icon size={18} />

                  </div>

                  <div className="principle-content">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </article>
              )
            })}

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
                LEARNING MODES
              </span>

              <h2>
                Learn the way
                <br />
                that works for you.
              </h2>

            </div>

            <Link
              to="/coaching"
              className="text-link"
            >
              Explore coaching
              <ArrowUpRight size={15} />
            </Link>

          </div>


          <div className="about-modes-grid">

            {/* OFFLINE */}

            <article className="about-mode-card">

              <div className="about-mode-number">
                01
              </div>

              <div>

                <span>
                  CLASSROOM
                </span>

                <h3>
                  Offline learning
                </h3>

                <p>
                  Classroom-based preparation for
                  students who prefer a structured
                  physical learning environment with
                  direct access to faculty and peers.
                </p>

              </div>

              <ArrowUpRight size={18} />

            </article>


            {/* ONLINE */}

            <article className="about-mode-card dark">

              <div className="about-mode-number">
                02
              </div>

              <div>

                <span>
                  DIGITAL
                </span>

                <h3>
                  Online learning
                </h3>

                <p>
                  Flexible learning options for students
                  who prefer online classes and digital
                  access to their preparation resources.
                </p>

              </div>

              <ArrowUpRight size={18} />

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="container about-cta-inner">

          <div>

            <span className="section-label">
              START YOUR PREPARATION
            </span>

            <h2>
              Your preparation
              <br />
              starts with a decision.
            </h2>

            <p>
              Explore our coaching options and find
              the preparation path that works for you.
            </p>

          </div>

          <div className="about-cta-actions">

            <Link
              to="/coaching"
              className="button button-secondary"
            >
              Explore coaching
            </Link>

            <Link
              to="/admission"
              className="button button-primary"
            >
              Admission enquiry
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}