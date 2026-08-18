import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  LineChart,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/LanguageContext.jsx'
import ExamSwitcher from '../components/ExamSwitcher.jsx'

/* =========================================================
   BANKING FACULTY PHOTO IMPORTS
========================================================= */
import vrundaSalgar from '../assets/faculty/banking/vrunda amit salgar.jpg'
import hanmantGange from '../assets/faculty/banking/Hanmant-gange.jpg'
import prajaktaPatil from '../assets/faculty/banking/Prajakta Prashant Patil.jpg'

export default function Banking() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  /* =========================================================
     TRANSLATIONS & CLIENT DATA
  ========================================================= */

  const text = isMarathi
    ? {
        hero: {
          eyebrow: 'बँकिंग व वित्तीय भरती परीक्षा',
          title1: 'Banking',
          title2: 'IBPS, SBI व RRB भरती परीक्षा',
          subtitle: '( PO, Clerk, SO & Insurance Exams )',
          description:
            'IBPS PO/Clerk, SBI PO/Clerk, RRB आणि सर्व राष्ट्रीयीकृत बँकांमधील नोकरीच्या संधींसाठी विद्याप्रबोधिनीचे पद्धतशीर मार्गदर्शन, शॉर्टकट युक्त्या आणि नियमित मॉक चाचण्या.',
          exploreBatches: 'बॅचेस पहा',
          enquireNow: 'प्रवेश चौकशी',
        },
        batchesSection: {
          label: 'अभ्यासक्रम व बॅचेस',
          title1: 'Banking साठी',
          title2: 'वेळापत्रक व बॅचेस.',
          description:
            'विद्यार्थ्यांच्या सोयीनुसार सकाळ, दुपार आणि संध्याकाळच्या सत्रात उपलब्ध असणाऱ्या नियमित बॅचेस.',
          batches: [
            {
              id: '01',
              title: 'सकाळची बॅच (Morning Batch)',
              stage: 'सकाळी ८:०० ते १०:००',
              starts: 'ऑगस्ट पहिला आठवडा',
              features: [
                'Pre + Mains संपूर्ण अभ्यासक्रम',
                'Quantitative Aptitude (गणित) व Reasoning (बुद्धिमत्ता)',
                'English Language व Current Affairs (चालू घडामोडी)',
              ],
            },
            {
              id: '02',
              title: 'दुपारची बॅच (Afternoon Batch)',
              stage: 'सकाळी ११:०० ते दुपारी १:००',
              starts: '१ जुलै',
              features: [
                'Pre + Mains संपूर्ण तयारी',
                'Quants, Reasoning आणि English ट्रिक्स',
                'दैनिक बँकिंग चालू घडामोडी व सराव',
              ],
            },
            {
              id: '03',
              title: 'संध्याकाळची बॅच (Evening Batch)',
              stage: 'दुपारी ३:०० ते संध्याकाळी ५:००',
              starts: 'सप्टेंबर दुसरा आठवडा',
              features: [
                'Pre + Mains संपूर्ण सिलॅबस',
                'वेगाचे व्यवस्थापन (Speed & Accuracy) सराव',
                'इंग्रजी व्याकरण व शब्दसंग्रह (Vocab) विशेष सत्रे',
              ],
            },
            {
              id: '04',
              title: 'मुलाखत मार्गदर्शन (Interview Batch)',
              stage: 'Personal Mentoring & Mock Interviews',
              starts: 'ऑक्टोबर',
              features: [
                'बँक अधिकाऱ्यांकडून वैयक्तिक मेंटॉरिंग',
                'अभिरूप मुलाखती (Mock Interviews)',
                'बँकिंग व वित्तीय क्षेत्रातील चालू घडामोडी',
              ],
            },
          ],
        },
        assurances: {
          label: 'आमची हमी',
          title1: 'विद्याप्रबोधिनीची',
          title2: 'सहा मुख्य आश्वासने.',
          description:
            'बँकिंग परीक्षेत कमीत कमी वेळेत अचूक उत्तर सोडवण्याची क्षमता विकसित करणारी आश्वासने.',
          items: [
            {
              title: 'सर्वसमावेशक टेस्ट सिरीज',
              subtitle: 'Exhaustive Test Series',
              desc: 'IBPS व SBI च्या नवीनतम ऑनलाइन परीक्षेच्या धर्तीवर भरपूर संगणकीय मॉक टेस्ट्स.',
            },
            {
              title: 'परिपूर्ण अभ्यास साहित्य',
              subtitle: 'Exhaustive Study Material',
              desc: 'अद्ययावत संकल्पना, शॉर्टकट ट्रिक्स आणि भरपूर प्रश्नसंच असणारे दर्जेदार साहित्य.',
            },
            {
              title: 'साप्ताहिक फॉलो-अप',
              subtitle: 'Weekly Follow-ups',
              desc: 'प्रत्येक विद्यार्थ्याच्या चाचण्यांचे गुण आणि वेगाचा दर आठवड्याला वैयक्तिक आढावा.',
            },
            {
              title: 'अधिकाऱ्यांचे मार्गदर्शन',
              subtitle: 'Mentoring By Officers',
              desc: 'बँकांमध्ये कार्यरत असणारे अधिकारी व व्यवस्थापकांकडून प्रत्यक्ष अनुभव व मार्गदर्शन.',
            },
            {
              title: 'तयारीच्या प्रगतीचा मागोवा',
              subtitle: 'Tracking Preparation Growth',
              desc: 'प्रत्येक विषयातील अचूकता आणि वेगाचे (Speed) विश्लेषण करून त्रुटी दूर करणे.',
            },
            {
              title: 'सातत्यपूर्ण कौशल्य विकास',
              subtitle: 'Constant Skill Building',
              desc: 'कठीण गणिते कमी वेळेत सोडवण्याचे कौशल्य, इंग्रजी सुधारणा आणि वेळेचे नियोजन.',
            },
          ],
        },
        facultySection: {
          label: 'मार्गदर्शक संघ',
          title1: 'आमची टीम',
          title2: 'तज्ज्ञ मार्गदर्शक.',
          description:
            'बँकिंग क्षेत्रातील प्रत्यक्ष कामाचा व कोचिंगचा दीर्घ अनुभव असणारी आमची तज्ज्ञ टीम.',
          faculties: [
            {
              image: vrundaSalgar,
              name: 'Vrunda Amit Salgar',
              qual: 'MBA (Marketing & HR)',
              exp: '7+ years mentoring Banking Aspirants',
              details: [
                '9 years work experience with HDFC and ICICI Bank',
                'Specialized Banking & Interview Mentor',
              ],
            },
            {
              image: hanmantGange,
              name: 'Shri Hanumant Ganage',
              qual: 'B.E. Information Technology',
              exp: 'Teaching Experience 7+ years',
              details: [
                'General Aptitude & Reasoning Mentor',
                'Speed Maths & Shortcut Calculation Specialist',
              ],
            },
            {
              image: prajaktaPatil,
              name: 'Prajakta Prashant Patil',
              qual: 'M.E. Electronics and Telecommunication',
              exp: 'Teaching Experience 9+ years',
              details: [
                'Quantitative Aptitude & Reasoning Faculty',
                'Senior Competitive Exams Educator',
              ],
            },
          ],
        },
      }
    : {
        hero: {
          eyebrow: 'Banking & Financial Recruitment Exams',
          title1: 'BANKING',
          title2: 'IBPS, SBI & RRB Examination Coaching',
          subtitle: '( PO, Clerk, SO & Insurance Exams )',
          description:
            'Structured classroom preparation, shortcut calculation modules, daily online tests, and interview guidance for IBPS, SBI, RRB, and nationalized bank recruitments.',
          exploreBatches: 'Explore Batches',
          enquireNow: 'Enquire Now',
        },
        batchesSection: {
          label: 'COURSES & BATCHES',
          title1: 'Flexible Banking',
          title2: 'batches & schedules.',
          description:
            'Tailored timing options in morning, afternoon, and evening slots designed for speed and accuracy.',
          batches: [
            {
              id: '01',
              title: 'Morning Batch',
              stage: '8:00 AM to 10:00 AM',
              starts: 'August First week',
              features: [
                'Complete Pre + Mains syllabus coverage',
                'Quantitative Aptitude, Reasoning & English',
                'Daily Banking & General Awareness (Current Affairs)',
              ],
            },
            {
              id: '02',
              title: 'Afternoon Batch',
              stage: '11:00 AM to 1:00 PM',
              starts: '1st July',
              features: [
                'Pre + Mains integrated curriculum',
                'Speed calculation tricks for Quants & Reasoning',
                'Grammar and comprehension mastery for English',
              ],
            },
            {
              id: '03',
              title: 'Evening Batch',
              stage: '3:00 PM to 5:00 PM',
              starts: 'September Second week',
              features: [
                'Pre + Mains comprehensive preparation',
                'Special emphasis on speed test simulations',
                'Sectional and full-length online mock tests',
              ],
            },
            {
              id: '04',
              title: 'Interview Guidance',
              stage: 'Personal Mentoring & Mock Interviews',
              starts: 'October',
              features: [
                'Personal mentoring from experienced bank managers',
                'Simulated Mock Interviews with panel feedback',
                'Banking industry, financial terms & DAF analysis',
              ],
            },
          ],
        },
        assurances: {
          label: 'OUR PROMISE',
          title1: 'We also',
          title2: 'assure you..',
          description:
            'Key preparation boosters designed to keep every aspirant consistent, speedy, and exam-ready.',
          items: [
            {
              title: 'Exhaustive Test Series',
              subtitle: 'Continuous Practice',
              desc: 'High-frequency online mock tests strictly replicating real IBPS and SBI test environments.',
            },
            {
              title: 'Exhaustive Study Material',
              subtitle: 'Curated Content',
              desc: 'Comprehensive textbooks, topic-wise practice question banks, and shortcut calculation sheets.',
            },
            {
              title: 'Weekly Follow-ups',
              subtitle: 'Accountability',
              desc: 'Weekly speed and accuracy assessments to identify bottlenecks and keep students on track.',
            },
            {
              title: 'Mentoring By Officers',
              subtitle: 'Industry Experience',
              desc: 'Direct interaction with working and retired Scale-1 and Scale-2 bank officers.',
            },
            {
              title: 'Tracking Preparation Growth',
              subtitle: 'Analytics & Focus',
              desc: 'Systematic score tracking across Prelims and Mains sections with personalized feedback.',
            },
            {
              title: 'Constant Skill Building',
              subtitle: 'Holistic Growth',
              desc: 'Continuous focus on mental calculations, reading speed, time management, and exam strategy.',
            },
          ],
        },
        facultySection: {
          label: 'EXPERT TEAM',
          title1: 'Our Team',
          title2: 'faculty & mentors.',
          description:
            'Learn from banking professionals and experienced faculty with corporate banking and coaching expertise.',
          faculties: [
            {
              image: vrundaSalgar,
              name: 'Vrunda Amit Salgar',
              qual: 'MBA (Marketing & HR)',
              exp: '7+ years mentoring Banking Aspirants',
              details: [
                '9 years work experience with HDFC and ICICI Bank',
                'Specialized Banking & Interview Mentor',
              ],
            },
            {
              image: hanmantGange,
              name: 'Shri Hanumant Ganage',
              qual: 'B.E. Information Technology',
              exp: 'Teaching Experience 7+ years',
              details: [
                'General Aptitude & Reasoning Mentor',
                'Speed Maths & Shortcut Calculation Specialist',
              ],
            },
            {
              image: prajaktaPatil,
              name: 'Prajakta Prashant Patil',
              qual: 'M.E. Electronics and Telecommunication',
              exp: 'Teaching Experience 9+ years',
              details: [
                'Quantitative Aptitude & Reasoning Faculty',
                'Senior Competitive Exams Educator',
              ],
            },
          ],
        },
      }

  const assuranceIcons = [
    FileText,
    BookOpen,
    UserCheck,
    Users,
    LineChart,
    Sparkles,
  ]

  return (
    <main className="course-detail-page">
      {/* QUICK EXAM SWITCHER */}
      <ExamSwitcher current="banking" />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="about-hero">
        <div className="container about-hero-grid">

          <div className="about-hero-heading">
            <div className="eyebrow">
              <span />
              {text.hero.eyebrow}
            </div>

            <h1>
              {text.hero.title1}
              <br />
              {text.hero.title2}
            </h1>
            <p style={{ marginTop: '8px', color: 'var(--brand)', fontWeight: '700', fontSize: '18px' }}>
              {text.hero.subtitle}
            </p>
          </div>

          <div className="about-hero-copy">
            <p>
              {text.hero.description}
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <Link to="/coaching?course=Banking#batches" className="button button-secondary">
                {text.hero.exploreBatches}
              </Link>

              <Link to="/admission" className="button button-primary">
                {text.hero.enquireNow}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          BATCHES SECTION (CLIENT DATA)
      ===================================================== */}

      <section className="about-approach" id="batches">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">
                {text.batchesSection.label}
              </span>

              <h2>
                {text.batchesSection.title1}
                <br />
                {text.batchesSection.title2}
              </h2>
            </div>

            <p>
              {text.batchesSection.description}
            </p>
          </div>

          <div className="principles-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {text.batchesSection.batches.map((batch) => (
              <article
                className="principle-card"
                key={batch.id}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="principle-top">
                    <span>{batch.id}</span>
                    <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '600' }}>
                      {batch.stage}
                    </span>
                  </div>

                  <div className="principle-content" style={{ marginTop: '20px' }}>
                    <h3 style={{ fontSize: '20px' }}>{batch.title}</h3>
                    <ul style={{ marginTop: '14px', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {batch.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: 'var(--muted)' }}>
                          <CheckCircle2 size={15} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <small style={{ fontSize: '10px', color: 'var(--subtle)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    {isMarathi ? 'सुरुवात' : 'STARTS FROM'}
                  </small>
                  <strong style={{ fontSize: '13px', color: 'var(--ink)' }}>
                    {batch.starts}
                  </strong>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          ASSURANCES SECTION (WE ALSO ASSURE YOU..)
      ===================================================== */}

      <section className="home-why-us" style={{ background: 'var(--background)' }}>
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">
                {text.assurances.label}
              </span>

              <h2>
                {text.assurances.title1}
                <br />
                {text.assurances.title2}
              </h2>
            </div>

            <p>
              {text.assurances.description}
            </p>
          </div>

          <div className="principles-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {text.assurances.items.map((item, index) => {
              const Icon = assuranceIcons[index]
              return (
                <article className="principle-card" key={item.title}>
                  <div className="principle-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon size={18} />
                  </div>

                  <div className="principle-content">
                    <h3>{item.title}</h3>
                    <small style={{ display: 'block', color: 'var(--brand)', fontWeight: '600', fontSize: '11px', marginTop: '2px' }}>
                      {item.subtitle}
                    </small>
                    <p>{item.desc}</p>
                  </div>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          FACULTY & TEAM SECTION (FIRST 3 MEMBERS ONLY)
      ===================================================== */}

      <section className="about-story" style={{ background: 'var(--surface)' }}>
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">
                {text.facultySection.label}
              </span>

              <h2>
                {text.facultySection.title1}
                <br />
                {text.facultySection.title2}
              </h2>
            </div>

            <p>
              {text.facultySection.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {text.facultySection.faculties.map((faculty) => (
              <div
                key={faculty.name}
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--line)',
                  background: 'var(--surface)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: 'var(--radius-md)',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        border: '1px solid var(--line)',
                        flexShrink: 0,
                      }}
                    />

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand)', marginBottom: '4px' }}>
                        <GraduationCap size={14} />
                        <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                          FACULTY
                        </span>
                      </div>

                      <h3 style={{ fontSize: '17px', fontWeight: '750', color: 'var(--ink)', lineHeight: '1.2' }}>
                        {faculty.name}
                      </h3>
                    </div>
                  </div>

                  <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.45', minHeight: '34px' }}>
                    {faculty.qual}
                  </p>

                  <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      {faculty.details.map((det, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--muted)' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                          <span>{det}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', color: 'var(--subtle)', fontWeight: '600' }}>Experience</span>
                  <span style={{ fontSize: '11px', color: 'var(--brand)', fontWeight: '700' }}>{faculty.exp}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}