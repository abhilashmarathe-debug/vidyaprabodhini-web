import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Monitor,
} from 'lucide-react'
import { useState } from 'react'

const courses = [
  {
    id: 'UPSC',
    title: 'UPSC',
    subtitle: 'Civil Services',
    description:
      'Structured preparation for the Union Public Service Commission examination.',
  },
  {
    id: 'MPSC',
    title: 'MPSC',
    subtitle: 'Rajyaseva',
    description:
      'Preparation for Maharashtra Public Service Commission examinations.',
  },
  {
    id: 'Banking',
    title: 'Banking',
    subtitle: 'IBPS / SBI',
    description:
      'Focused preparation for banking and related competitive examinations.',
  },
  {
    id: 'Saralseva',
    title: 'Saralseva',
    subtitle: 'State-level exams',
    description:
      'Preparation for examinations including Talathi, Police Bharti and Gramsevak.',
  },
]

const modes = [
  {
    id: 'Offline',
    title: 'Offline',
    icon: MapPin,
    description:
      'Classroom-based preparation at Vidyaprabodhini, Kolhapur.',
  },
  {
    id: 'Online',
    title: 'Online',
    icon: Monitor,
    description:
      'Flexible preparation through online learning.',
  },
]

export default function Admission() {
  const [course, setCourse] = useState('')
  const [mode, setMode] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const selectedCourse = courses.find(
    (item) => item.id === course
  )

  const selectedMode = modes.find(
    (item) => item.id === mode
  )

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!course || !mode) {
      return
    }

    setSubmitted(true)

    /*
      Connect Supabase / backend here.

      formData.name
      formData.mobile
      formData.email
      course
      mode
    */
  }

  return (
    <main className="admission-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="admission-hero">

        <div className="container admission-hero-grid">

          <div>

            <div className="eyebrow">
              <span />
              ADMISSION
            </div>

            <h1>
              Start your
              <br />
              preparation.
            </h1>

          </div>

          <div className="admission-hero-copy">

            <p>
              Tell us what you're preparing for and how
              you'd like to learn. Our counsellor will help
              you understand the available options.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN ADMISSION
      ===================================================== */}

      <section className="admission-section">

        <div className="container admission-layout">


          {/* =================================================
              LEFT  COURSE + MODE
          ================================================= */}

          <div className="admission-selection">


            {/* =================================================
                COURSE
            ================================================= */}

            <div className="admission-block">

              <div className="admission-section-heading">

                <span className="section-label">
                  01 / SELECT COURSE
                </span>

                <h2>
                  What are you
                  <br />
                  preparing for?
                </h2>

                <p className="admission-heading-description">
                  Choose the examination you are preparing
                  for. You can change your selection anytime.
                </p>

              </div>


              <div className="admission-course-grid">

                {courses.map((item) => (

                  <button
                    type="button"
                    key={item.id}
                    className={
                      course === item.id
                        ? 'admission-course active'
                        : 'admission-course'
                    }
                    onClick={() => setCourse(item.id)}
                  >

                    <div className="admission-course-top">

                      <span>
                        {item.id}
                      </span>

                      {course === item.id && (
                        <CheckCircle2 size={18} />
                      )}

                    </div>


                    <div className="admission-course-content">

                      <h3>
                        {item.title}
                      </h3>

                      <span>
                        {item.subtitle}
                      </span>

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                MODE
            ================================================= */}

            <div className="admission-block admission-mode-section">

              <div className="admission-section-heading">

                <span className="section-label">
                  02 / SELECT MODE
                </span>

                <h2>
                  How would you
                  <br />
                  like to learn?
                </h2>

                <p className="admission-heading-description">
                  Select the learning format that best fits
                  your preparation routine.
                </p>

              </div>


              <div className="admission-mode-grid">

                {modes.map((item) => {

                  const Icon = item.icon

                  return (

                    <button
                      type="button"
                      key={item.id}
                      className={
                        mode === item.id
                          ? 'admission-mode active'
                          : 'admission-mode'
                      }
                      onClick={() => setMode(item.id)}
                    >

                      <div className="admission-mode-top">

                        <div className="admission-mode-icon">
                          <Icon size={20} />
                        </div>

                        {mode === item.id && (
                          <CheckCircle2 size={18} />
                        )}

                      </div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </button>

                  )
                })}

              </div>

            </div>


            {/* =================================================
                SELECTION STATUS
            ================================================= */}

            <div className="admission-selection-status">

              <div className="selection-status-header">

                <span className="section-label">
                  YOUR SELECTION
                </span>

                <span
                  className={
                    course && mode
                      ? 'selection-step ready'
                      : 'selection-step'
                  }
                >
                  {course && mode
                    ? 'READY'
                    : 'INCOMPLETE'}
                </span>

              </div>


              <div className="selection-status-grid">

                <div>

                  <span>
                    COURSE
                  </span>

                  <strong>
                    {selectedCourse
                      ? `${selectedCourse.title}  ${selectedCourse.subtitle}`
                      : 'Not selected'}
                  </strong>

                </div>


                <div>

                  <span>
                    LEARNING MODE
                  </span>

                  <strong>
                    {selectedMode
                      ? selectedMode.title
                      : 'Not selected'}
                  </strong>

                </div>

              </div>

            </div>


            {/* =================================================
                NOTE
            ================================================= */}

            <div className="admission-note">

              <span className="section-label">
                NEXT STEP
              </span>

              <p>
                After selecting your course and preferred
                mode, complete the enquiry form. A counsellor
                will contact you with the relevant batch
                details.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT  ENQUIRY FORM
          ================================================= */}

          <aside className="admission-form-card">


            {/* FORM HEADER */}

            <div className="admission-form-header">

              <div className="form-header-number">
                03
              </div>

              <span className="section-label">
                ADMISSION ENQUIRY
              </span>

              <h2>
                Let's get
                <br />
                started.
              </h2>

              <p>
                Share your details and select your preferred
                course and learning mode.
              </p>

            </div>


            {/* =================================================
                QUICK SELECTION
            ================================================= */}

            <div className="form-quick-selection">

              <div className="form-quick-heading">

                <span>
                  PREFER TO SELECT HERE?
                </span>

                <small>
                  Optional
                </small>

              </div>


              {/* COURSE SELECT */}

              <div className="form-select-field">

                <label htmlFor="form-course">
                  Course
                </label>

                <div className="form-select-wrapper">

                  <select
                    id="form-course"
                    value={course}
                    onChange={(event) =>
                      setCourse(event.target.value)
                    }
                  >

                    <option value="">
                      Select your course
                    </option>

                    {courses.map((item) => (

                      <option
                        key={item.id}
                        value={item.id}
                      >
                        {item.title}  {item.subtitle}
                      </option>

                    ))}

                  </select>

                  <ChevronDown size={16} />

                </div>

              </div>


              {/* MODE SELECT */}

              <div className="form-select-field">

                <label htmlFor="form-mode">
                  Learning mode
                </label>

                <div className="form-select-wrapper">

                  <select
                    id="form-mode"
                    value={mode}
                    onChange={(event) =>
                      setMode(event.target.value)
                    }
                  >

                    <option value="">
                      Select learning mode
                    </option>

                    {modes.map((item) => (

                      <option
                        key={item.id}
                        value={item.id}
                      >
                        {item.title}
                      </option>

                    ))}

                  </select>

                  <ChevronDown size={16} />

                </div>

              </div>

            </div>


            {/* =================================================
                CURRENT SELECTION
            ================================================= */}

            <div className="form-selected-summary">

              <div className="form-selected-heading">
                <span>
                  CURRENT SELECTION
                </span>
              </div>


              <div className="form-selected-grid">

                <div className="form-selected-item">

                  <span>
                    COURSE
                  </span>

                  <strong>
                    {selectedCourse
                      ? selectedCourse.title
                      : 'Not selected'}
                  </strong>

                </div>


                <div className="form-selected-item">

                  <span>
                    MODE
                  </span>

                  <strong>
                    {selectedMode
                      ? selectedMode.title
                      : 'Not selected'}
                  </strong>

                </div>

              </div>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form
              className="admission-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <div className="form-field">

                <label htmlFor="full-name">
                  Full name
                </label>

                <input
                  id="full-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />

              </div>


              {/* MOBILE */}

              <div className="form-field">

                <label htmlFor="mobile">
                  Mobile number
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="form-field">

                <label htmlFor="email">
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                />

              </div>


              {/* HIDDEN VALUES FOR BACKEND */}

              <input
                type="hidden"
                name="course"
                value={course}
              />

              <input
                type="hidden"
                name="mode"
                value={mode}
              />


              {/* VALIDATION */}

              {!course || !mode ? (

                <div className="form-selection-warning">

                  <span>
                    !
                  </span>

                  <p>
                    Select a course and learning mode
                    to continue.
                  </p>

                </div>

              ) : (

                <div className="form-selection-ready">

                  <CheckCircle2 size={16} />

                  <span>
                    Course and learning mode selected.
                  </span>

                </div>

              )}


              {/* SUBMIT */}

              <button
                type="submit"
                className="button button-primary admission-submit"
                disabled={!course || !mode}
              >

                {submitted
                  ? 'Enquiry submitted'
                  : 'Submit enquiry'}

                {!submitted && (
                  <ArrowUpRight size={16} />
                )}

              </button>


              <p className="form-disclaimer">
                By submitting this form, you agree to be
                contacted by Vidyaprabodhini regarding your
                enquiry.
              </p>

            </form>

          </aside>

        </div>

      </section>


      {/* =====================================================
          WHAT HAPPENS NEXT
      ===================================================== */}

      <section className="admission-next">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-label">
                WHAT HAPPENS NEXT
              </span>

              <h2>
                Simple from
                <br />
                here.
              </h2>

            </div>

            <p>
              Once your enquiry is received, our counsellor
              can help you with the next steps.
            </p>

          </div>


          <div className="admission-next-grid">

            <div>

              <span>
                01
              </span>

              <h3>
                Enquiry received
              </h3>

              <p>
                Your details and preparation preferences
                are recorded.
              </p>

            </div>


            <div>

              <span>
                02
              </span>

              <h3>
                Counsellor connects
              </h3>

              <p>
                A counsellor contacts you to understand
                your requirements.
              </p>

            </div>


            <div>

              <span>
                03
              </span>

              <h3>
                Choose your batch
              </h3>

              <p>
                Get information about the relevant batch,
                mode and next steps.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}