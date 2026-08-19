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
   MPSC FACULTY PHOTO IMPORTS
========================================================= */
import amitLavhate from '../assets/faculty/mpsc/amit-lavhte.jpg'
import santoshKamble from '../assets/faculty/mpsc/santosh-kamble.jpg'
import ashokChavan from '../assets/faculty/mpsc/ashok chavan.jpg'
import snehaLavhate from '../assets/faculty/mpsc/sneha-lavhte.jpg'
import amolKhot from '../assets/faculty/mpsc/amol-khot.jpg'
import somnathSatpute from '../assets/faculty/mpsc/somnath-satpute.jpg'
import vinayakPatil from '../assets/faculty/mpsc/vinayak patil.jpg'
import hanmantGange from '../assets/faculty/mpsc/Hanmant-gange.jpg'
import vaibhavJagadhane from '../assets/faculty/mpsc/vaibhav  parasu  jagadhane.jpg'

export default function Mpsc() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  /* =========================================================
     TRANSLATIONS & CLIENT DATA
  ========================================================= */

  const text = isMarathi
    ? {
        hero: {
          title1: 'MPSC',
          title2: 'राज्यसेवा आणि संयुक्त (गट ब) परीक्षा',
          subtitle: '( Rajyaseva, PSI, STI, ASO & Group C )',
          description:
            'उपजिल्हाधिकारी, डीवायएसपी, तहसीलदार, गट ब (PSI/STI/ASO) आणि इतर राज्यस्तरीय प्रशासकीय सेवांसाठी विद्याप्रबोधिनीचे परिपूर्ण व दर्जेदार मार्गदर्शन.',
          exploreBatches: 'बॅचेस पहा',
          enquireNow: 'प्रवेश चौकशी',
        },
        batchesSection: {
          label: 'अभ्यासक्रम व बॅचेस',
          title1: 'MPSC साठी',
          title2: 'विशेष बॅचेस.',
          description:
            'विद्याप्रबोधिनीमध्ये राज्यसेवा, संयुक्त गट ब व मुलाखतीची परिपूर्ण तयारी करून घेणारे विशेष कोर्सेस.',
          batches: [
            {
              title: 'राज्यसेवा (Rajyaseva)',
              stage: 'सामान्य अध्ययन + मराठी व इंग्रजी',
              starts: 'जून अखेरचा आठवडा / जुलै पहिला आठवडा',
              features: [
                'सामान्य अध्ययन (GS) सखोल अभ्यासक्रम',
                'मराठी + इंग्रजी व्याकरण व भाषा सराव',
                'नवीन अभ्यासक्रमानुसार दैनिक उत्तरलेखन',
              ],
            },
            {
              title: 'संयुक्त (गट ब) परीक्षा',
              stage: 'PSI / STI / ASO',
              starts: 'जून अखेरचा आठवडा / जुलै पहिला आठवडा',
              features: [
                'सामान्य अध्ययन व चालू घडामोडी',
                'मराठी + इंग्रजी व्याकरण विशेष तयारी',
                'मागील प्रश्नपत्रिकांचे सखोल विश्लेषण',
              ],
            },
            {
              title: 'मुलाखत (Interview)',
              stage: 'वैयक्तिक मार्गदर्शन व अभिरूप मुलाखती',
              starts: 'ऑक्टोबर',
              features: [
                'वैयक्तिक मार्गदर्शन व समुपदेशन',
                'अभिरूप मुलाखती (Mock Interviews)',
                'सेवारत अधिकाऱ्यांकडून व्यक्तिमत्त्व चाचणी सराव',
              ],
            },
          ],
        },
        assurances: {
          label: 'आमची हमी',
          title1: 'विद्याप्रबोधिनीची',
          title2: 'सहा मुख्य आश्वासने.',
          description:
            'स्पर्धा परीक्षेच्या प्रवासात प्रत्येक विद्यार्थ्याला मिळणारे सातत्यपूर्ण सहकार्य आणि मार्गदर्शन.',
          items: [
            {
              title: 'सर्वसमावेशक टेस्ट सिरीज',
              subtitle: 'Exhaustive Test Series',
              desc: 'आयोगाच्या नवीनतम पॅटर्ननुसार नियमित सराव चाचण्या आणि विश्लेषण.',
            },
            {
              title: 'दैनिक उत्तरलेखन सराव',
              subtitle: 'Daily Writing Practice',
              desc: 'नवीन अभ्यासक्रमानुसार उत्तरलेखनाची तंत्रे व तज्ज्ञांकडून मूल्यांकन.',
            },
            {
              title: 'साप्ताहिक फॉलो-अप',
              subtitle: 'Weekly Follow-ups',
              desc: 'प्रत्येक विद्यार्थ्याच्या अभ्यासाची गती आणि अडचणींचा दर आठवड्याला आढावा.',
            },
            {
              title: 'अधिकाऱ्यांचे मार्गदर्शन',
              subtitle: 'Mentoring By Officers',
              desc: 'यशस्वी MPSC अधिकाऱ्यांकडून नियमित मार्गदर्शन आणि अनुभव सत्रे.',
            },
            {
              title: 'तयारीच्या प्रगतीचा मागोवा',
              subtitle: 'Tracking Preparation Growth',
              desc: 'प्रत्येक विषयातील प्रगतीचे मोजमाप करून कमकुवत घटकांवर विशेष भर.',
            },
            {
              title: 'सातत्यपूर्ण कौशल्य विकास',
              subtitle: 'Constant Skill Building',
              desc: 'विश्लेषण, वेळेचे नियोजन आणि आत्मविश्वास वाढवण्यासाठी विशेष सत्रे.',
            },
          ],
        },
        facultySection: {
          label: 'मार्गदर्शक संघ',
          title1: 'आमची टीम',
          title2: 'तज्ज्ञ मार्गदर्शक.',
          description:
            'MPSC परीक्षांचा दांडगा अनुभव असणारी आणि विद्यार्थ्यांना समर्पित असणारी आमची प्राध्यापक टीम.',
          faculties: [
            {
              image: amitLavhate,
              name: 'Amit Bajirao Lavhate',
              qual: 'MA (Political Science) | MBA (HR)',
              exp: 'Teaching Experience 7+ years',
              details: [
                'Book Published: Current Express Year Book, Current Express Question',
                'Book Published: PSI-STI-ASO Practice Test Book',
              ],
            },
            {
              image: santoshKamble,
              name: 'Santosh Ankush Kamble',
              qual: 'B.Sc. Physics',
              exp: 'Teaching Experience 5+ years',
              details: [
                'State Services Mains — 2',
                'State Forest Mains — 2 | State Forest Interview — 1',
                'PSI/STI/ASO Mains — 3 | PSI Interview — 1',
              ],
            },
            {
              image: ashokChavan,
              name: 'Ashok Rajaram Chavan',
              qual: 'B.E. Electronics & Telecommunication',
              exp: 'Teaching Experience 6+ years',
              details: ['UPSC Mains — 3', 'MPSC Mains — 3'],
            },
            {
              image: snehaLavhate,
              name: 'Sneha Amit Lavhate',
              qual: 'B.E. (Electronics)',
              exp: 'Teaching Experience 5+ years',
              details: [
                'PSI/STI/ASO Mains — 2018',
                'RRB Technical Mains — 2019, 2021',
              ],
            },
            {
              image: amolKhot,
              name: 'Amol Chandrakant Khot',
              qual: 'B.Sc. Physics',
              exp: 'Teaching Experience 6+ years',
              details: [
                'SSC Selection 2016',
                'लेखन व संकलन: Departmental PSI Pre ठोकळा',
                'लेखन व संकलन: भूगोल - नकाशा सराव पुस्तिका',
              ],
            },
            {
              image: somnathSatpute,
              name: 'Somanath Bhanudas Satapute',
              qual: 'M.A., M.J.M.C., M.Phil. (History), Ph.D. (Pursuing)',
              exp: 'Teaching Experience 8+ years',
              details: ['History — SET, NET, JRF'],
            },
            {
              image: vinayakPatil,
              name: 'Vinayak Mohan Patil',
              qual: 'M.A., B.Ed.',
              exp: 'Teaching Experience 5+ years',
              details: ['Language & General Studies Mentor'],
            },
            {
              image: hanmantGange,
              name: 'Hanumant Ganage',
              qual: 'B.E. Information Technology',
              exp: 'Teaching Experience 7+ years',
              details: ['General Aptitude (CSAT & Maths-Reasoning) Mentor'],
            },
            {
              image: vaibhavJagadhane,
              name: 'Vaibhav Parasu Jagadhane',
              qual: 'D.Ed., M.A. (English)',
              exp: 'Teaching Experience 5+ years',
              details: ['Conducted 30+ mega seminars across Maharashtra'],
            },
          ],
        },
      }
    : {
        hero: {
          title1: 'MPSC',
          title2: 'State Services & Combined Exams',
          subtitle: '( Rajyaseva, PSI, STI, ASO & Group C )',
          description:
            'Comprehensive coaching for Deputy Collector, DySP, Tehsildar, and Group B/C Services with structured classrooms, updated syllabus coverage, and rigorous test practice.',
          exploreBatches: 'Explore Batches',
          enquireNow: 'Enquire Now',
        },
        batchesSection: {
          label: 'COURSES & BATCHES',
          title1: 'Specialized MPSC',
          title2: 'batches.',
          description:
            'Tailored preparation modules covering Rajyaseva, Combine Group B, and Interview Guidance.',
          batches: [
            {
              title: 'State Services (Rajyaseva)',
              stage: 'General Studies + Marathi & English',
              starts: 'June last week / July first week',
              features: [
                'Complete General Studies (GS) in-depth syllabus',
                'Marathi & English grammar and language practice',
                'Daily descriptive answer-writing aligned with the new pattern',
              ],
            },
            {
              title: 'Combine (Group B) Exam',
              stage: 'PSI / STI / ASO',
              starts: 'June last week / July first week',
              features: [
                'General Studies & Current Affairs modules',
                'Marathi & English grammar specialized preparation',
                'Comprehensive previous years question papers analysis',
              ],
            },
            {
              title: 'Interview Guidance',
              stage: 'Personal Mentoring & Mock Interviews',
              starts: 'October',
              features: [
                'One-on-one personal mentoring and feedback',
                'Simulated Mock Interviews with panel experts',
                'Personality development and current issues sessions',
              ],
            },
          ],
        },
        assurances: {
          label: 'OUR PROMISE',
          title1: 'We also',
          title2: 'assure you..',
          description:
            'Key preparation boosters designed to keep every aspirant consistent, accountable, and exam-ready.',
          items: [
            {
              title: 'Exhaustive Test Series',
              subtitle: 'Continuous Practice',
              desc: 'High-yield mock tests aligned with contemporary MPSC exam standards.',
            },
            {
              title: 'Daily Writing Practice',
              subtitle: 'As per new syllabus',
              desc: 'Structured answer-writing practice with detailed evaluation and feedback.',
            },
            {
              title: 'Weekly Follow-ups',
              subtitle: 'Accountability',
              desc: 'Weekly progress reviews to identify bottlenecks and keep students on track.',
            },
            {
              title: 'Mentoring By Officers',
              subtitle: 'Real Insights',
              desc: 'Direct interaction and strategy sessions with serving Class 1 and Class 2 officers.',
            },
            {
              title: 'Tracking Preparation Growth',
              subtitle: 'Analytics & Focus',
              desc: 'Systematic score tracking across all subjects and targeted improvement plans.',
            },
            {
              title: 'Constant Skill Building',
              subtitle: 'Holistic Growth',
              desc: 'Continuous focus on analytical thinking, time management, and exam temperament.',
            },
          ],
        },
        facultySection: {
          label: 'EXPERT TEAM',
          title1: 'Our Team',
          title2: 'faculty & mentors.',
          description:
            'Learn from experienced educators and authors with multiple MPSC Mains and Interview credentials.',
          faculties: [
            {
              image: amitLavhate,
              name: 'Amit Bajirao Lavhate',
              qual: 'MA (Political Science) | MBA (HR)',
              exp: 'Teaching Experience 7+ years',
              details: [
                'Book Published: Current Express Year Book, Current Express Question',
                'Book Published: PSI-STI-ASO Practice Test Book',
              ],
            },
            {
              image: santoshKamble,
              name: 'Santosh Ankush Kamble',
              qual: 'B.Sc. Physics',
              exp: 'Teaching Experience 5+ years',
              details: [
                'State Services Mains — 2',
                'State Forest Mains — 2 | State Forest Interview — 1',
                'PSI/STI/ASO Mains — 3 | PSI Interview — 1',
              ],
            },
            {
              image: ashokChavan,
              name: 'Ashok Rajaram Chavan',
              qual: 'B.E. Electronics & Telecommunication',
              exp: 'Teaching Experience 6+ years',
              details: ['UPSC Mains — 3', 'MPSC Mains — 3'],
            },
            {
              image: snehaLavhate,
              name: 'Sneha Amit Lavhate',
              qual: 'B.E. (Electronics)',
              exp: 'Teaching Experience 5+ years',
              details: [
                'PSI/STI/ASO Mains — 2018',
                'RRB Technical Mains — 2019, 2021',
              ],
            },
            {
              image: amolKhot,
              name: 'Amol Chandrakant Khot',
              qual: 'B.Sc. Physics',
              exp: 'Teaching Experience 6+ years',
              details: [
                'SSC Selection 2016',
                'Author & Compiler: Departmental PSI Pre Thokla',
                'Author & Compiler: Geography - Map Practice Workbook',
              ],
            },
            {
              image: somnathSatpute,
              name: 'Somanath Bhanudas Satapute',
              qual: 'M.A., M.J.M.C., M.Phil. (History), Ph.D. (Pursuing)',
              exp: 'Teaching Experience 8+ years',
              details: ['History — SET, NET, JRF'],
            },
            {
              image: vinayakPatil,
              name: 'Vinayak Mohan Patil',
              qual: 'M.A., B.Ed.',
              exp: 'Teaching Experience 5+ years',
              details: ['Language & General Studies Mentor'],
            },
            {
              image: hanmantGange,
              name: 'Hanumant Ganage',
              qual: 'B.E. Information Technology',
              exp: 'Teaching Experience 7+ years',
              details: ['General Aptitude (CSAT & Maths-Reasoning) Mentor'],
            },
            {
              image: vaibhavJagadhane,
              name: 'Vaibhav Parasu Jagadhane',
              qual: 'D.Ed., M.A. (English)',
              exp: 'Teaching Experience 5+ years',
              details: ['Conducted 30+ mega seminars across Maharashtra'],
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
      <ExamSwitcher current="mpsc" />

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
              <Link to="/coaching?course=MPSC#batches" className="button button-secondary">
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