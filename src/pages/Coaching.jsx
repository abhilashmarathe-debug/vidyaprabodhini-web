import { useState } from 'react'
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
import { Link } from 'react-router-dom'

/* =========================================================
   APP
========================================================= */

const APP_URL =
  'https://play.google.com/store/apps/details?id=co.alexis.xgvti'

/* =========================================================
   BATCHES
========================================================= */

const batches = [
  {
    id: 1,
    course: 'UPSC',
    title: 'UPSC Civil Services',
    mode: 'Offline',
    location: 'Kolhapur',
    schedule: 'Weekday & Weekend',
    status: 'Admissions open',
  },
  {
    id: 2,
    course: 'UPSC',
    title: 'UPSC Civil Services',
    mode: 'Online',
    location: 'Online',
    schedule: 'Flexible schedule',
    status: 'Admissions open',
  },
  {
    id: 3,
    course: 'MPSC',
    title: 'MPSC Rajyaseva',
    mode: 'Offline',
    location: 'Kolhapur',
    schedule: 'Weekday & Weekend',
    status: 'Admissions open',
  },
  {
    id: 4,
    course: 'MPSC',
    title: 'MPSC Rajyaseva',
    mode: 'Online',
    location: 'Online',
    schedule: 'Flexible schedule',
    status: 'Admissions open',
  },
  {
    id: 5,
    course: 'Banking',
    title: 'Banking Examination',
    mode: 'Offline',
    location: 'Kolhapur',
    schedule: 'Weekday & Weekend',
    status: 'Admissions open',
  },
  {
    id: 6,
    course: 'Banking',
    title: 'Banking Examination',
    mode: 'Online',
    location: 'Online',
    schedule: 'Flexible schedule',
    status: 'Admissions open',
  },
  {
    id: 7,
    course: 'Saralseva',
    title: 'Saralseva Preparation',
    mode: 'Offline',
    location: 'Kolhapur',
    schedule: 'Weekday & Weekend',
    status: 'Admissions open',
  },
  {
    id: 8,
    course: 'Saralseva',
    title: 'Saralseva Preparation',
    mode: 'Online',
    location: 'Online',
    schedule: 'Flexible schedule',
    status: 'Admissions open',
  },
]

const courses = [
  'All',
  'UPSC',
  'MPSC',
  'Banking',
  'Saralseva',
]

const modes = [
  'All',
  'Offline',
  'Online',
]

/* =========================================================
   TEST SERIES PROCESS
========================================================= */

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Download the app',
    text:
      'Download the official Vidyaprabodhini mobile application and sign in to access the test section.',
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Choose your test',
    text:
      'For free tests, open the Free Test section directly from the home screen of the application.',
  },
  {
    number: '03',
    icon: KeyRound,
    title: 'Enter your batch code',
    text:
      'For exclusive tests, contact your counsellor to receive the batch code and enter it through the Batches section.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Start your test',
    text:
      'Select the available test and begin your examination-focused practice.',
  },
]

/* =========================================================
   COUNSELLORS
========================================================= */

const counsellors = [
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
]

/* =========================================================
   COACHING
========================================================= */

export default function Coaching() {
  const [courseFilter, setCourseFilter] = useState('All')
  const [modeFilter, setModeFilter] = useState('All')

  const filteredBatches = batches.filter((batch) => {
    const courseMatch =
      courseFilter === 'All' ||
      batch.course === courseFilter

    const modeMatch =
      modeFilter === 'All' ||
      batch.mode === modeFilter

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
              VIDYAPROBODHINI COACHING
            </div>

            <h1>
              Prepare.
              <br />
              Practice.
              <br />
              Perform.
            </h1>

          </div>

          <div className="coaching-hero-copy">

            <p>
              Complete preparation for UPSC, MPSC,
              Banking and Saralseva  combining
              structured coaching, flexible learning
              modes and focused test practice.
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
                COACHING BATCHES
              </span>

              <h2>
                Find your
                <br />
                batch.
              </h2>

            </div>

            <p>
              Explore preparation batches for UPSC,
              MPSC, Banking and Saralseva across
              offline and online learning modes.
            </p>

          </div>


          {/* FILTERS */}

          <div className="batch-filter-bar">

            <div className="batch-filter-group">

              <span className="filter-label">
                EXAMINATION
              </span>

              <div className="filter-buttons">

                {courses.map((course) => (

                  <button
                    key={course}
                    type="button"
                    className={
                      courseFilter === course
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setCourseFilter(course)
                    }
                  >
                    {course}
                  </button>

                ))}

              </div>

            </div>


            <div className="batch-filter-group">

              <span className="filter-label">
                MODE
              </span>

              <div className="filter-buttons">

                {modes.map((mode) => (

                  <button
                    key={mode}
                    type="button"
                    className={
                      modeFilter === mode
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setModeFilter(mode)
                    }
                  >
                    {mode}
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
                ? 'Batch available'
                : 'Batches available'}
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
                    MODE
                  </span>

                  <strong>
                    {batch.mode}
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
                    Enquire
                    <ArrowUpRight size={15} />
                  </Link>

                </div>

              </article>

            ))}

          </div>


          {/* EMPTY STATE */}

          {filteredBatches.length === 0 && (

            <div className="batch-empty">
              No batches found. Try changing your filters.
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
                TEST SERIES
              </span>

              <h2>
                Practice.
                <br />
                Analyse.
                <br />
                Improve.
              </h2>

            </div>

            <div className="test-series-intro">

              <p>
                Access Vidyaprabodhini's test series
                through the official mobile application.
              </p>

              <a
                href={APP_URL}
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Android App
                <ArrowUpRight size={16} />
              </a>

              <span className="app-note">
                Available on Google Play
              </span>

            </div>

          </div>


          {/* HOW IT WORKS */}

          <div className="test-process-header">

            <div>

              <span className="section-label">
                HOW IT WORKS
              </span>

              <h2>
                Start testing
                <br />
                in four steps.
              </h2>

            </div>

            <p>
              Test series are accessed through the
              Vidyaprabodhini mobile application.
            </p>

          </div>


          <div className="test-process-grid">

            {steps.map((step) => {

              const Icon = step.icon

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
                FREE TEST
              </span>

              <h2>
                Start without
                <br />
                a batch code.
              </h2>

              <p>
                Open the <strong>Free Test</strong> section
                from the home menu of the Vidyaprabodhini
                application and start practicing.
              </p>

              <div className="test-access-line">

                <CheckCircle2 size={15} />

                Available directly through the app

              </div>

            </article>


            <article className="test-access-card dark">

              <span className="section-label">
                EXCLUSIVE TEST
              </span>

              <h2>
                Have a batch
                <br />
                code?
              </h2>

              <p>
                Contact your counsellor to receive your
                batch code. Open <strong>Batches</strong> in
                the application and enter the code to
                access your exclusive test.
              </p>

              <div className="test-access-line">

                <KeyRound size={15} />

                Batch code required

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
                NEED HELP?
              </span>

              <h2>
                Talk to a
                <br />
                counsellor.
              </h2>

            </div>

            <p>
              If you need a batch code or assistance
              accessing a test, contact the relevant
              counsellor.
            </p>

          </div>


          <div className="counsellor-list">

            {counsellors.map((counsellor) => (

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
                  Call
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
              VIDYAPROBODHINI APP
            </span>

            <h2>
              Your preparation,
              <br />
              wherever you are.
            </h2>

            <p>
              Access your test series and continue
              practicing beyond the classroom.
            </p>

          </div>

          <a
            href={APP_URL}
            className="button button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Android App
            <Download size={16} />
          </a>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="coaching-final-cta">

        <div className="container coaching-final-cta-inner">

          <div>

            <span className="section-label">
              START YOUR PREPARATION
            </span>

            <h2>
              Choose your path.
              <br />
              Start preparing.
            </h2>

          </div>

          <Link
            to="/admission"
            className="button button-primary"
          >
            Enquire about admission
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  )
}