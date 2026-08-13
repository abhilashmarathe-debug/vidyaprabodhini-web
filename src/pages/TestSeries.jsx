import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  KeyRound,
  Smartphone,
} from 'lucide-react'

const APP_URL =
  'https://play.google.com/store/apps/details?id=co.alexis.xgvti'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Download the app',
    text: 'Download the official Vidyaprabodhini mobile application and sign in to access the test section.',
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Choose your test',
    text: 'For free tests, open the Free Test section directly from the home screen of the application.',
  },
  {
    number: '03',
    icon: KeyRound,
    title: 'Enter your batch code',
    text: 'For exclusive tests, contact your counsellor to receive the batch code and enter it through the Batches section.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Start your test',
    text: 'Select the available test and begin your examination-focused practice.',
  },
]

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

export default function TestSeries() {
  return (
    <main className="test-series-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="test-series-hero">

        <div className="container test-series-hero-grid">

          <div>

            <div className="eyebrow">
              <span />
              Test Series
            </div>

            <h1>
              Prepare.
              <br />
              Practice.
              <br />
              Perform.
            </h1>

          </div>


          <div className="test-series-hero-copy">

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

      </section>


      {/* =========================================
          HOW IT WORKS
      ========================================= */}

      <section className="test-process">

        <div className="container">

          <div className="section-heading">

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


      {/* =========================================
          FREE / EXCLUSIVE TEST
      ========================================= */}

      <section className="test-access">

        <div className="container">

          <div className="test-access-grid">

            {/* FREE TEST */}

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


            {/* EXCLUSIVE TEST */}

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
                the application and enter the code to access
                your exclusive test.
              </p>

              <div className="test-access-line">
                <KeyRound size={15} />
                Batch code required
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          COUNSELLORS
      ========================================= */}

      <section className="test-support">

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


      {/* =========================================
          APP CTA
      ========================================= */}

      <section className="test-app-cta">

        <div className="container test-app-cta-inner">

          <div>

            <span className="section-label">
              VIDYAPROBODHINI APP
            </span>

            <h2>
              Your preparation,
              <br />
              wherever you are.
            </h2>

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

    </main>
  )
}