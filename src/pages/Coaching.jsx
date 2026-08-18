import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Download,
  KeyRound,
  MapPin,
  Monitor,
  Smartphone,
} from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { useLanguage } from '../components/LanguageContext.jsx'

/* =========================================================
   APP
========================================================= */

const APP_URL =
  'https://play.google.com/store/apps/details?id=co.alexis.xgvti'

/* =========================================================
   COACHING
========================================================= */

export default function Coaching() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  const [searchParams] = useSearchParams()
  const initialCourse = searchParams.get('course') || 'All'

  const [courseFilter, setCourseFilter] = useState(initialCourse)
  const [modeFilter, setModeFilter] = useState('All')

  /* =========================================================
     AUTO-ACTIVATE FILTER & SCROLL TO BATCHES ON PARAM CHANGE
  ========================================================= */
  useEffect(() => {
    const courseParam = searchParams.get('course')
    if (courseParam && ['UPSC', 'MPSC', 'Banking'].includes(courseParam)) {
      setCourseFilter(courseParam)

      // Smooth scroll to batches section
      const batchesElem = document.getElementById('batches')
      if (batchesElem) {
        setTimeout(() => {
          batchesElem.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [searchParams])

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const text = isMarathi
    ? {
        hero: {
          eyebrow: 'विद्याप्रबोधिनी कोचिंग',
          title1: 'तयारी.',
          title2: 'सराव.',
          title3: 'यश.',
          description:
            'UPSC, MPSC आणि Banking परीक्षांची परिपूर्ण तयारी — संरचित कोचिंग, लवचिक अध्ययन पद्धती आणि केंद्रित सराव परीक्षांचा संगम.',
        },
        batches: {
          label: 'कोचिंग बॅचेस',
          title1: 'तुमची योग्य',
          title2: 'बॅच निवडा.',
          description:
            'UPSC, MPSC आणि Banking परीक्षांसाठी ऑफलाइन आणि ऑनलाइन उपलब्ध बॅचेस पहा.',
          examFilter: 'परीक्षा',
          modeFilter: 'पद्धत',
          all: 'सर्व',
          offline: 'ऑफलाइन',
          online: 'ऑनलाइन',
          availableSingle: 'बॅच उपलब्ध',
          availableMulti: 'बॅचेस उपलब्ध',
          modeLabel: 'पद्धत',
          enquire: 'चौकशी करा',
          empty: 'कोणतीही बॅच सापडली नाही. कृपया तुमचे फिल्टर्स बदलून पहा.',
        },
        testSeries: {
          label: 'टेस्ट सिरीज',
          title1: 'सराव.',
          title2: 'विश्लेषण.',
          title3: 'प्रगती.',
          description:
            'विद्याप्रबोधिनीच्या अधिकृत मोबाइल ॲप्लिकेशनद्वारे नियमित टेस्ट सिरीजचा सराव करा.',
          downloadButton: 'अँड्रॉइड ॲप डाउनलोड करा',
          appNote: 'Google Play वर उपलब्ध',
        },
        howItWorks: {
          label: 'प्रक्रिया कशी चालते?',
          title1: 'चार सोप्या टप्प्यांत',
          title2: 'सराव सुरू करा.',
          description:
            'विद्याप्रबोधिनी मोबाइल ॲप्लिकेशनद्वारे टेस्ट सिरीज उपलब्ध केल्या जातात.',
          steps: [
            {
              number: '01',
              title: 'ॲप डाउनलोड करा',
              text: 'विद्याप्रबोधिनीचे अधिकृत मोबाइल ॲप डाउनलोड करा आणि टेस्ट सेक्शनसाठी साइन इन करा.',
            },
            {
              number: '02',
              title: 'तुमची टेस्ट निवडा',
              text: 'मोफत चाचण्यांसाठी ॲप्लिकेशनच्या मुख्य पृष्ठावरील मोफत टेस्ट सेक्शन उघडा.',
            },
            {
              number: '03',
              title: 'बॅच कोड प्रविष्ट करा',
              text: 'खास टेस्टसाठी तुमच्या समुपदेशकांशी संपर्क साधून बॅच कोड मिळवा आणि तो बॅचेस विभागात टाका.',
            },
            {
              number: '04',
              title: 'सराव सुरू करा',
              text: 'उपलब्ध चाचणी निवडा आणि परीक्षेच्या दृष्टिकोनातून नियमित सराव सुरू करा.',
            },
          ],
        },
        access: {
          free: {
            label: 'मोफत टेस्ट',
            title1: 'बॅच कोडशिवाय',
            title2: 'सराव सुरू करा.',
            description:
              'विद्याप्रबोधिनी ॲप्लिकेशनच्या होम मेनूमधून Free Test सेक्शन उघडा आणि त्वरित सराव सुरू करा.',
            tag: 'ॲपद्वारे थेट उपलब्ध',
          },
          exclusive: {
            label: 'खास टेस्ट सिरीज',
            title1: 'तुमच्याकडे बॅच कोड',
            title2: 'आहे का?',
            description:
              'तुमचा बॅच कोड मिळवण्यासाठी समुपदेशकांशी संपर्क साधा. ॲपमध्ये Batches उघडा आणि विशेष टेस्टसाठी कोड टाका.',
            tag: 'बॅच कोड आवश्यक',
          },
        },
        support: {
          label: 'मदत हवी आहे?',
          title1: 'समुपदेशकांशी',
          title2: 'संपर्क साधा.',
          description:
            'बॅच कोड मिळवण्यासाठी किंवा चाचणी सुरू करताना काही अडचण असल्यास संबंधित समुपदेशकांशी संपर्क साधा.',
          call: 'कॉल करा',
          counsellors: [
            {
              exam: 'MPSC टेस्ट',
              name: 'अमित सर',
              phone: '9545387161',
            },
            {
              exam: 'Banking टेस्ट',
              name: 'वृंदा मॅम',
              phone: '8805209898',
            },
          ],
        },
        appCta: {
          label: 'विद्याप्रबोधिनी ॲप',
          title1: 'तुमची तयारी,',
          title2: 'तुम्ही असाल तिथे.',
          description:
            'टेस्ट सिरीजमध्ये सहभागी व्हा आणि वर्गाबाहेरही सातत्यपूर्ण सराव सुरू ठेवा.',
          download: 'अँड्रॉइड ॲप डाउनलोड करा',
        },
      }
    : {
        hero: {
          eyebrow: 'VIDYAPRABODHINI COACHING',
          title1: 'Prepare.',
          title2: 'Practice.',
          title3: 'Perform.',
          description:
            'Complete preparation for UPSC, MPSC and Banking combining structured coaching, flexible learning modes and focused test practice.',
        },
        batches: {
          label: 'COACHING BATCHES',
          title1: 'Find your',
          title2: 'batch.',
          description:
            'Explore preparation batches for UPSC, MPSC and Banking across offline and online learning modes.',
          examFilter: 'EXAMINATION',
          modeFilter: 'MODE',
          all: 'All',
          offline: 'Offline',
          online: 'Online',
          availableSingle: 'Batch available',
          availableMulti: 'Batches available',
          modeLabel: 'MODE',
          enquire: 'Enquire',
          empty: 'No batches found. Try changing your filters.',
        },
        testSeries: {
          label: 'TEST SERIES',
          title1: 'Practice.',
          title2: 'Analyse.',
          title3: 'Improve.',
          description:
            "Access Vidyaprabodhini's test series through the official mobile application.",
          downloadButton: 'Download Android App',
          appNote: 'Available on Google Play',
        },
        howItWorks: {
          label: 'HOW IT WORKS',
          title1: 'Start testing',
          title2: 'in four steps.',
          description:
            'Test series are accessed through the Vidyaprabodhini mobile application.',
          steps: [
            {
              number: '01',
              title: 'Download the app',
              text: 'Download the official Vidyaprabodhini mobile application and sign in to access the test section.',
            },
            {
              number: '02',
              title: 'Choose your test',
              text: 'For free tests, open the Free Test section directly from the home screen of the application.',
            },
            {
              number: '03',
              title: 'Enter your batch code',
              text: 'For exclusive tests, contact your counsellor to receive the batch code and enter it through the Batches section.',
            },
            {
              number: '04',
              title: 'Start your test',
              text: 'Select the available test and begin your examination-focused practice.',
            },
          ],
        },
        access: {
          free: {
            label: 'FREE TEST',
            title1: 'Start without',
            title2: 'a batch code.',
            description:
              'Open the Free Test section from the home menu of the Vidyaprabodhini application and start practicing.',
            tag: 'Available directly through the app',
          },
          exclusive: {
            label: 'EXCLUSIVE TEST',
            title1: 'Have a batch',
            title2: 'code?',
            description:
              'Contact your counsellor to receive your batch code. Open Batches in the application and enter the code to access your exclusive test.',
            tag: 'Batch code required',
          },
        },
        support: {
          label: 'NEED HELP?',
          title1: 'Talk to a',
          title2: 'counsellor.',
          description:
            'If you need a batch code or assistance accessing a test, contact the relevant counsellor.',
          call: 'Call',
          counsellors: [
            {
              exam: 'MPSC Test',
              name: 'Amit Sir',
              phone: '9545387161',
            },
            {
              exam: 'Banking Test',
              name: 'Vrunda Mam',
              phone: '8805209898',
            },
          ],
        },
        appCta: {
          label: 'VIDYAPRABODHINI APP',
          title1: 'Your preparation,',
          title2: 'wherever you are.',
          description:
            'Access your test series and continue practicing beyond the classroom.',
          download: 'Download Android App',
        },
      }

  /* =========================================================
     BATCHES DATA
  ========================================================= */

  const batches = [
    {
      id: 1,
      course: 'UPSC',
      title: isMarathi ? 'UPSC नागरी सेवा' : 'UPSC Civil Services',
      mode: 'Offline',
      displayMode: isMarathi ? 'ऑफलाइन' : 'Offline',
      location: isMarathi ? 'कोल्हापूर' : 'Kolhapur',
      schedule: isMarathi ? 'सोमवार ते शनिवार' : 'Weekday & Weekend',
      status: isMarathi ? 'प्रवेश सुरू' : 'Admissions open',
    },
    {
      id: 2,
      course: 'UPSC',
      title: isMarathi ? 'UPSC नागरी सेवा' : 'UPSC Civil Services',
      mode: 'Online',
      displayMode: isMarathi ? 'ऑनलाइन' : 'Online',
      location: isMarathi ? 'ऑनलाइन' : 'Online',
      schedule: isMarathi ? 'लवचिक वेळ' : 'Flexible schedule',
      status: isMarathi ? 'प्रवेश सुरू' : 'Admissions open',
    },
    {
      id: 3,
      course: 'MPSC',
      title: isMarathi ? 'MPSC राज्यसेवा' : 'MPSC Rajyaseva',
      mode: 'Offline',
      displayMode: isMarathi ? 'ऑफलाइन' : 'Offline',
      location: isMarathi ? 'कोल्हापूर' : 'Kolhapur',
      schedule: isMarathi ? 'सोमवार ते शनिवार' : 'Weekday & Weekend',
      status: isMarathi ? 'प्रवेश सुरू' : 'Admissions open',
    },
    {
      id: 4,
      course: 'MPSC',
      title: isMarathi ? 'MPSC राज्यसेवा' : 'MPSC Rajyaseva',
      mode: 'Online',
      displayMode: isMarathi ? 'ऑनलाइन' : 'Online',
      location: isMarathi ? 'ऑनलाइन' : 'Online',
      schedule: isMarathi ? 'लवचिक वेळ' : 'Flexible schedule',
      status: isMarathi ? 'प्रवेश सुरू' : 'Admissions open',
    },
    {
      id: 5,
      course: 'Banking',
      title: isMarathi ? 'बँकिंग परीक्षा' : 'Banking Examination',
      mode: 'Offline',
      displayMode: isMarathi ? 'ऑफलाइन' : 'Offline',
      location: isMarathi ? 'कोल्हापूर' : 'Kolhapur',
      schedule: isMarathi ? 'सोमवार ते शनिवार' : 'Weekday & Weekend',
      status: isMarathi ? 'प्रवेश सुरू' : 'Admissions open',
    },
    {
      id: 6,
      course: 'Banking',
      title: isMarathi ? 'बँकिंग परीक्षा' : 'Banking Examination',
      mode: 'Online',
      displayMode: isMarathi ? 'ऑनलाइन' : 'Online',
      location: isMarathi ? 'ऑनलाइन' : 'Online',
      schedule: isMarathi ? 'लवचिक वेळ' : 'Flexible schedule',
      status: isMarathi ? 'प्रवेश सुरू' : 'Admissions open',
    },
  ]

  const courses = [
    { key: 'All', label: text.batches.all },
    { key: 'UPSC', label: 'UPSC' },
    { key: 'MPSC', label: 'MPSC' },
    { key: 'Banking', label: 'Banking' },
  ]

  const modes = [
    { key: 'All', label: text.batches.all },
    { key: 'Offline', label: text.batches.offline },
    { key: 'Online', label: text.batches.online },
  ]

  const stepIcons = [Download, Smartphone, KeyRound, CheckCircle2]

  const filteredBatches = batches.filter((batch) => {
    const courseMatch =
      courseFilter === 'All' || batch.course === courseFilter

    const modeMatch =
      modeFilter === 'All' || batch.mode === modeFilter

    return courseMatch && modeMatch
  })

  return (
    <main className="coaching-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="coaching-hero">

        <div className="container coaching-hero-grid">

          <div>

            <div className="eyebrow">
              <span className="" />
              {text.hero.eyebrow}
            </div>

            <h1>
              {text.hero.title1}
              <br />
              {text.hero.title2}
              <br />
              {text.hero.title3}
            </h1>

          </div>

          <div className="coaching-hero-copy">

            <p>
              {text.hero.description}
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          BATCHES
      ===================================================== */}

      <section
        className="coaching-batches"
        id="batches"
      >

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-label">
                {text.batches.label}
              </span>

              <h2>
                {text.batches.title1}
                <br />
                {text.batches.title2}
              </h2>

            </div>

            <p>
              {text.batches.description}
            </p>

          </div>

          {/* FILTERS */}

          <div className="batch-filter-bar">

            <div className="batch-filter-group">

              <span className="filter-label">
                {text.batches.examFilter}
              </span>

              <div className="filter-buttons">

                {courses.map((course) => (

                  <button
                    key={course.key}
                    type="button"
                    className={
                      courseFilter === course.key
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setCourseFilter(course.key)
                    }
                  >
                    {course.label}
                  </button>

                ))}

              </div>

            </div>

            <div className="batch-filter-group">

              <span className="filter-label">
                {text.batches.modeFilter}
              </span>

              <div className="filter-buttons">

                {modes.map((mode) => (

                  <button
                    key={mode.key}
                    type="button"
                    className={
                      modeFilter === mode.key
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setModeFilter(mode.key)
                    }
                  >
                    {mode.label}
                  </button>

                ))}

              </div>

            </div>

          </div>

          {/* RESULT COUNT */}

          <div className="batch-results-header">

            <span>
              {filteredBatches.length
                .toString()
                .padStart(2, '0')}
            </span>

            <span>
              {filteredBatches.length === 1
                ? text.batches.availableSingle
                : text.batches.availableMulti}
            </span>

          </div>

          {/* BATCH LIST */}

          <div className="batch-list">

            {filteredBatches.map((batch) => (

              <article
                className="batch-row"
                key={batch.id}
              >

                <div className="batch-row-number">
                  {String(batch.id).padStart(2, '0')}
                </div>

                <div className="batch-main">

                  <div className="batch-course">
                    {batch.course}
                  </div>

                  <h3>
                    {batch.title}
                  </h3>

                  <div className="batch-meta">

                    <span>

                      {batch.mode === 'Offline' ? (
                        <MapPin size={13} />
                      ) : (
                        <Monitor size={13} />
                      )}

                      {batch.location}

                    </span>

                    <span>
                      <CalendarDays size={13} />
                      {batch.schedule}
                    </span>

                  </div>

                </div>

                <div className="batch-mode">

                  <span className="batch-mode-label">
                    {text.batches.modeLabel}
                  </span>

                  <strong>
                    {batch.displayMode}
                  </strong>

                </div>

                <div className="batch-action">

                  <span className="batch-status">
                    {batch.status}
                  </span>

                  <Link
                    to="/admission"
                    className="batch-enquire"
                  >
                    {text.batches.enquire}
                    <ArrowUpRight size={15} />
                  </Link>

                </div>

              </article>

            ))}

          </div>

          {/* EMPTY STATE */}

          {filteredBatches.length === 0 && (

            <div className="batch-empty">
              {text.batches.empty}
            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          TEST SERIES
      ===================================================== */}

      <section
        className="coaching-test-series"
        id="test-series"
      >

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-label">
                {text.testSeries.label}
              </span>

              <h2>
                {text.testSeries.title1}
                <br />
                {text.testSeries.title2}
                <br />
                {text.testSeries.title3}
              </h2>

            </div>

            <div className="test-series-intro">

              <p>
                {text.testSeries.description}
              </p>

              <a
                href={APP_URL}
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {text.testSeries.downloadButton}
                <ArrowUpRight size={16} />
              </a>

              <span className="app-note">
                {text.testSeries.appNote}
              </span>

            </div>

          </div>

          {/* HOW IT WORKS */}

          <div className="test-process-header">

            <div>

              <span className="section-label">
                {text.howItWorks.label}
              </span>

              <h2>
                {text.howItWorks.title1}
                <br />
                {text.howItWorks.title2}
              </h2>

            </div>

            <p>
              {text.howItWorks.description}
            </p>

          </div>

          <div className="test-process-grid">

            {text.howItWorks.steps.map((step, index) => {

              const Icon = stepIcons[index]

              return (
                <article
                  className="test-process-card"
                  key={step.number}
                >

                  <div className="test-process-top">

                    <span>
                      {step.number}
                    </span>

                    <Icon size={18} />

                  </div>

                  <div className="test-process-content">

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.text}
                    </p>

                  </div>

                </article>
              )
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          TEST ACCESS
      ===================================================== */}

      <section className="coaching-test-access">

        <div className="container">

          <div className="test-access-grid">

            <article className="test-access-card">

              <span className="section-label">
                {text.access.free.label}
              </span>

              <h2>
                {text.access.free.title1}
                <br />
                {text.access.free.title2}
              </h2>

              <p>
                {text.access.free.description}
              </p>

              <div className="test-access-line">

                <CheckCircle2 size={15} />

                {text.access.free.tag}

              </div>

            </article>

            <article className="test-access-card dark">

              <span className="section-label">
                {text.access.exclusive.label}
              </span>

              <h2>
                {text.access.exclusive.title1}
                <br />
                {text.access.exclusive.title2}
              </h2>

              <p>
                {text.access.exclusive.description}
              </p>

              <div className="test-access-line">

                <KeyRound size={15} />

                {text.access.exclusive.tag}

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* =====================================================
          COUNSELLORS
      ===================================================== */}

      <section className="coaching-support">

        <div className="container">

          <div className="test-support-header">

            <div>

              <span className="section-label">
                {text.support.label}
              </span>

              <h2>
                {text.support.title1}
                <br />
                {text.support.title2}
              </h2>

            </div>

            <p>
              {text.support.description}
            </p>

          </div>

          <div className="counsellor-list">

            {text.support.counsellors.map((counsellor) => (

              <div
                className="counsellor-row"
                key={counsellor.phone}
              >

                <div className="counsellor-exam">
                  {counsellor.exam}
                </div>

                <div className="counsellor-name">
                  {counsellor.name}
                </div>

                <a
                  href={`tel:${counsellor.phone}`}
                  className="counsellor-phone"
                >
                  {counsellor.phone}
                </a>

                <a
                  href={`tel:${counsellor.phone}`}
                  className="counsellor-call"
                >
                  {text.support.call}
                  <ArrowUpRight size={15} />
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          APP CTA
      ===================================================== */}

      <section className="coaching-app-cta">

        <div className="container coaching-app-cta-inner">

          <div>

            <span className="section-label">
              {text.appCta.label}
            </span>

            <h2>
              {text.appCta.title1}
              <br />
              {text.appCta.title2}
            </h2>

            <p>
              {text.appCta.description}
            </p>

          </div>

          <a
            href={APP_URL}
            className="button button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.appCta.download}
            <Download size={16} />
          </a>

        </div>

      </section>

    </main>
  )
}