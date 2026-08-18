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
   FACULTY PHOTO IMPORTS
========================================================= */
import rajkumarPatil from '../assets/faculty/upsc/rajkumar-patil.jpg'
import abhijitPatil from '../assets/faculty/upsc/Abhijit Anandrao Patil.jpg'
import ashokChavan from '../assets/faculty/upsc/ashok chavan.jpg'
import somnathSatpute from '../assets/faculty/upsc/somnath-satpute.jpg'
import hanmantGange from '../assets/faculty/upsc/Hanmant-gange.jpg'
import bindusarIngale from '../assets/faculty/upsc/Bindusar Ingale.jpg'
import abhijeetPatil from '../assets/faculty/upsc/abhijeet-patil.jpg'

export default function Upsc() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  /* =========================================================
     TRANSLATIONS & CLIENT DATA
  ========================================================= */

  const text = isMarathi
    ? {
        hero: {
          eyebrow: 'केंद्रीय लोकसेवा आयोग',
          title1: 'UPSC',
          title2: 'नागरी सेवा परीक्षा',
          subtitle: '( पूर्व + मुख्य + मुलाखत )',
          description:
            'IAS, IPS, IFS आणि इतर केंद्रीय प्रशासकीय सेवांसाठी विद्याप्रबोधिनीचे संरचित अध्ययन, १००% निवासी शिष्यवृत्ती आणि वैयक्तिक मार्गदर्शन.',
          exploreBatches: 'बॅचेस पहा',
          enquireNow: 'प्रवेश चौकशी',
        },
        batchesSection: {
          label: 'अभ्यासक्रम व बॅचेस',
          title1: 'UPSC साठी',
          title2: 'विशेष बॅचेस.',
          description:
            'विद्याप्रबोधिनीमध्ये पूर्व, मुख्य आणि मुलाखतीची परिपूर्ण तयारी करून घेणारे विशेष कोर्सेस.',
          batches: [
            {
              id: '01',
              title: 'General Studies (GS)',
              stage: 'Pre + Mains + Essay',
              starts: 'जून अखेरचा आठवडा / जुलै पहिला आठवडा',
              features: [
                'पूर्व व मुख्य परीक्षेचा संपूर्ण अभ्यासक्रम',
                'निबंध (Essay) विशेष मार्गदर्शन व सराव',
                'दैनिक चालू घडामोडी व विश्लेषणात्मक चर्चा',
              ],
            },
            {
              id: '02',
              title: 'Optional Subjects',
              stage: 'Sociology & Public Administration',
              starts: 'जून अखेरचा आठवडा / जुलै पहिला आठवडा',
              features: [
                'समाजशास्त्र (Sociology) विशेष बॅच',
                'लोकप्रशासन (Public Administration) बॅच',
                'मागील वर्षांच्या प्रश्नपत्रिकांचे सखोल विश्लेषण',
              ],
            },
            {
              id: '03',
              title: 'Interview Guidance',
              stage: 'Personal Mentoring & Mock Interviews',
              starts: 'ऑक्टोबर',
              features: [
                'माजी व सेवारत अधिकाऱ्यांकडून मॉक मुलाखती',
                'DAF (Detailed Application Form) वैयक्तिक विश्लेषण',
                'व्यक्तिमत्त्व विकास व चालू घडामोडी संवाद',
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
              desc: 'पूर्व व मुख्य परीक्षेच्या दर्जाच्या नियमित सराव चाचण्या आणि विश्लेषण.',
            },
            {
              title: 'दैनिक उत्तरलेखन सराव',
              subtitle: 'Daily Writing Practice',
              desc: 'Mains उत्तरलेखनाची तंत्रे आणि शिक्षकांकडून वैयक्तिक मूल्यमापन.',
            },
            {
              title: 'साप्ताहिक फॉलो-अप',
              subtitle: 'Weekly Follow-ups',
              desc: 'प्रत्येक विद्यार्थ्याच्या अभ्यासाची गती आणि अडचणींचा दर आठवड्याला आढावा.',
            },
            {
              title: 'अधिकाऱ्यांचे मार्गदर्शन',
              subtitle: 'Mentoring By Officers',
              desc: 'यशस्वी IAS/IPS/IRS अधिकाऱ्यांकडून नियमित मार्गदर्शन आणि अनुभव सत्रे.',
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
          title1: 'अनुभवी प्राध्यापक व',
          title2: 'तज्ज्ञ मार्गदर्शक.',
          description:
            'UPSC परीक्षांचा दांडगा अनुभव असणारी आणि विद्यार्थ्यांना समर्पित असणारी आमची टीम.',
          faculties: [
            {
              image: rajkumarPatil,
              name: 'Rajkumar Dilip Patil',
              qual: 'M.A. (Political Science)',
              exp: 'Civil Services Mentoring 12+ years',
              details: ['UPSC Head & Senior Mentor'],
            },
            {
              image: abhijitPatil,
              name: 'Abhijit Anandrao Patil',
              qual: 'B.E. Civil; M.A. Sociology; M.A. Public Administration',
              exp: 'Teaching Experience 10+ years',
              details: [
                'UPSC Interviews — 3',
                'Sociology optional topper with 377 marks',
                'UPSC Mentor with YASHADA, BARTI & SIAC',
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
              image: somnathSatpute,
              name: 'Somanath Bhanudas Satapute',
              qual: 'M.A., M.J.M.C., M.Phil. (History), Ph.D. (Pursuing)',
              exp: 'Teaching Experience 8+ years',
              details: ['History — SET, NET, JRF'],
            },
            {
              image: hanmantGange,
              name: 'Hanumant Ganage',
              qual: 'B.E. Information Technology',
              exp: 'Teaching Experience 7+ years',
              details: ['General Aptitude (CSAT) Mentor'],
            },
            {
              image: bindusarIngale,
              name: 'Bindusar Ingale',
              qual: 'B.Sc. Computer Science',
              exp: 'Teaching Experience 6+ years',
              details: ['Mentor at BARTI, Pune'],
            },
            {
              image: abhijeetPatil,
              name: 'Abhijeet Ashok Patil',
              qual: 'B.E. Mechanical',
              exp: 'Teaching Experience 4+ years',
              details: ['General Studies Faculty'],
            },
          ],
        },
      }
    : {
        hero: {
          eyebrow: 'Union Public Service Commission',
          title1: 'UPSC',
          title2: 'Civil Services Examination',
          subtitle: '( Pre + Mains + Interview )',
          description:
            'Structured preparation for IAS, IPS, IFS, and central civil services with dedicated mentorship, comprehensive test series, and 100% residential scholarship facilities.',
          exploreBatches: 'Explore Batches',
          enquireNow: 'Enquire Now',
        },
        batchesSection: {
          label: 'COURSES & BATCHES',
          title1: 'Specialized UPSC',
          title2: 'batches.',
          description:
            'Tailored preparation modules covering General Studies, Optionals, and Interview Guidance.',
          batches: [
            {
              id: '01',
              title: 'General Studies (GS)',
              stage: 'Pre + Mains + Essay',
              starts: 'June last week / July first week',
              features: [
                'Complete GS syllabus coverage for Prelims & Mains',
                'Comprehensive Essay guidance and practice',
                'Daily Current Affairs analysis and discussion',
              ],
            },
            {
              id: '02',
              title: 'Optional Subjects',
              stage: 'Sociology & Public Administration',
              starts: 'June last week / July first week',
              features: [
                'Sociology Optional dedicated batch',
                'Public Administration Optional batch',
                'In-depth previous year question paper analysis',
              ],
            },
            {
              id: '03',
              title: 'Interview Guidance',
              stage: 'Personal Mentoring & Mock Interviews',
              starts: 'October',
              features: [
                'Mock interviews with retired & serving officers',
                'Detailed Application Form (DAF) personalized analysis',
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
              desc: 'High-yield mock tests aligned with contemporary UPSC Prelims and Mains standards.',
            },
            {
              title: 'Daily Writing Practice',
              subtitle: 'Answer Mastery',
              desc: 'Daily descriptive answer writing with structured evaluation and feedback.',
            },
            {
              title: 'Weekly Follow-ups',
              subtitle: 'Accountability',
              desc: 'Weekly progress reviews to identify bottlenecks and keep students on track.',
            },
            {
              title: 'Mentoring By Officers',
              subtitle: 'Real Insights',
              desc: 'Direct interaction and strategy sessions with serving and retired civil servants.',
            },
            {
              title: 'Tracking Preparation Growth',
              subtitle: 'Analytics & Focus',
              desc: 'Systematic tracking of topic-wise strengths and targeted improvement plans.',
            },
            {
              title: 'Constant Skill Building',
              subtitle: 'Holistic Growth',
              desc: 'Continuous focus on analytical thinking, time management, and conceptual clarity.',
            },
          ],
        },
        facultySection: {
          label: 'EXPERT TEAM',
          title1: 'Our core UPSC',
          title2: 'faculty & mentors.',
          description:
            'Learn from experienced mentors who have multiple UPSC Mains and Interview credentials.',
          faculties: [
            {
              image: rajkumarPatil,
              name: 'Rajkumar Dilip Patil',
              qual: 'M.A. (Political Science)',
              exp: 'Civil Services Mentoring 12+ years',
              details: ['UPSC Head & Senior Mentor'],
            },
            {
              image: abhijitPatil,
              name: 'Abhijit Anandrao Patil',
              qual: 'B.E. Civil; M.A. Sociology; M.A. Public Administration',
              exp: 'Teaching Experience 10+ years',
              details: [
                'UPSC Interviews — 3',
                'Sociology optional topper with 377 marks',
                'UPSC Mentor with YASHADA, BARTI & SIAC',
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
              image: somnathSatpute,
              name: 'Somanath Bhanudas Satapute',
              qual: 'M.A., M.J.M.C., M.Phil. (History), Ph.D. (Pursuing)',
              exp: 'Teaching Experience 8+ years',
              details: ['History — SET, NET, JRF'],
            },
            {
              image: hanmantGange,
              name: 'Hanumant Ganage',
              qual: 'B.E. Information Technology',
              exp: 'Teaching Experience 7+ years',
              details: ['General Aptitude (CSAT) Mentor'],
            },
            {
              image: bindusarIngale,
              name: 'Bindusar Ingale',
              qual: 'B.Sc. Computer Science',
              exp: 'Teaching Experience 6+ years',
              details: ['Mentor at BARTI, Pune'],
            },
            {
              image: abhijeetPatil,
              name: 'Abhijeet Ashok Patil',
              qual: 'B.E. Mechanical',
              exp: 'Teaching Experience 4+ years',
              details: ['General Studies Faculty'],
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
      <ExamSwitcher current="upsc" />

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
              <Link to="/coaching?course=UPSC#batches" className="button button-secondary">
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
          BATCHES SECTION
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

          <div className="principles-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
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
                    <h3 style={{ fontSize: '22px' }}>{batch.title}</h3>
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
          ASSURANCES SECTION
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
          FACULTY & TEAM SECTION (WITH PHOTOGRAPHS)
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