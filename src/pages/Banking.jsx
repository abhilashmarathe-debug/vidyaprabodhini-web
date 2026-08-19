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
          title1: 'Banking',
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
      <ExamSwitcher current="banking" />

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section style={{ padding: '54px 0 46px', borderBottom: '1px solid var(--line)', background: 'var(--background)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.15', fontWeight: '800', color: 'var(--ink)', letterSpacing: '-0.025em' }}>
              {text.hero.title1}
              <br />
              {text.hero.title2}
            </h1>

            <p style={{ margin: '0 0 16px', color: 'var(--brand)', fontWeight: '700', fontSize: '15px' }}>
              {text.hero.subtitle}
            </p>
          </div>

          <div style={{ maxWidth: '500px' }}>
            <p style={{ margin: '0 0 22px', fontSize: '15px', lineHeight: '1.65', color: 'var(--muted)' }}>
              {text.hero.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
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

      {/* =========================================================
          BATCHES SECTION (3 COLUMNS)
      ========================================================= */}
      <section id="batches" style={{ padding: '64px 0 58px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'end', marginBottom: '36px' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '10px' }}>
                {text.batchesSection.label}
              </span>

              <h2 style={{ margin: 0, fontSize: 'clamp(26px, 3.5vw, 36px)', lineHeight: '1.1', fontWeight: '800' }}>
                {text.batchesSection.title1}
                <br />
                {text.batchesSection.title2}
              </h2>
            </div>

            <p style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.65', color: 'var(--muted)' }}>
              {text.batchesSection.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px', width: '100%' }}>
            {text.batchesSection.batches.map((batch, index) => (
              <article
                key={index}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: '16px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div>
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ display: 'inline-block', fontSize: '11px', color: 'var(--muted)', fontWeight: '600', background: 'var(--surface-raised, #f1f5f9)', padding: '5px 12px', borderRadius: '6px' }}>
                      {batch.stage}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: '750', color: 'var(--ink)', margin: '0 0 16px' }}>
                      {batch.title}
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                      {batch.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.45' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ marginTop: '26px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <small style={{ fontSize: '10.5px', color: 'var(--subtle)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    {isMarathi ? 'सुरुवात' : 'STARTS FROM'}
                  </small>
                  <strong style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: '700' }}>
                    {batch.starts}
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ASSURANCES SECTION (3x2 BALANCED GRID)
      ========================================================= */}
      <section style={{ background: 'var(--background)', padding: '64px 0 58px', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'end', marginBottom: '36px' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '10px' }}>
                {text.assurances.label}
              </span>

              <h2 style={{ margin: 0, fontSize: 'clamp(26px, 3.5vw, 36px)', lineHeight: '1.1', fontWeight: '800' }}>
                {text.assurances.title1}
                <br />
                {text.assurances.title2}
              </h2>
            </div>

            <p style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.65', color: 'var(--muted)' }}>
              {text.assurances.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '22px', width: '100%' }}>
            {text.assurances.items.map((item, index) => {
              const Icon = assuranceIcons[index]
              return (
                <article
                  key={item.title}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: '16px',
                    padding: '28px',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--brand)', marginBottom: '16px' }}>
                      <Icon size={22} />
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ink)', margin: 0 }}>
                      {item.title}
                    </h3>
                    <small style={{ display: 'block', color: 'var(--brand)', fontWeight: '600', fontSize: '11.5px', marginTop: '4px', marginBottom: '10px' }}>
                      {item.subtitle}
                    </small>
                    <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: 'var(--muted)' }}>
                      {item.desc}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FACULTY & TEAM SECTION
      ========================================================= */}
      <section style={{ background: 'var(--surface)', padding: '64px 0 74px', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'end', marginBottom: '36px' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '10px' }}>
                {text.facultySection.label}
              </span>

              <h2 style={{ margin: 0, fontSize: 'clamp(26px, 3.5vw, 36px)', lineHeight: '1.1', fontWeight: '800' }}>
                {text.facultySection.title1}
                <br />
                {text.facultySection.title2}
              </h2>
            </div>

            <p style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.65', color: 'var(--muted)' }}>
              {text.facultySection.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '22px', width: '100%' }}>
            {text.facultySection.faculties.map((faculty) => (
              <div
                key={faculty.name}
                style={{
                  padding: '26px',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                  background: 'var(--surface)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        border: '1px solid var(--line)',
                        flexShrink: 0,
                      }}
                    />

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand)', marginBottom: '3px' }}>
                        <GraduationCap size={14} />
                        <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                          FACULTY
                        </span>
                      </div>

                      <h3 style={{ fontSize: '16px', fontWeight: '750', color: 'var(--ink)', lineHeight: '1.25', margin: 0 }}>
                        {faculty.name}
                      </h3>
                    </div>
                  </div>

                  <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.45', margin: '0 0 12px' }}>
                    {faculty.qual}
                  </p>

                  <div style={{ paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {faculty.details.map((det, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', color: 'var(--muted)' }}>
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