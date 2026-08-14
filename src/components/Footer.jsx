import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle2,
  X,
} from 'lucide-react'

import logo from '../assets/logo1.jpeg'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Coaching', path: '/coaching' },
  { label: 'Admission', path: '/admission' },
  { label: 'Result', path: '/result' },
  { label: 'Gallery', path: '/gallery' },
]

const courses = [
  'UPSC',
  'MPSC',
  'Banking',
  'Saralseva',
]

const learningModes = [
  'Offline',
  'Online',
]

export default function Footer() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
    mode: '',
  })


  /* =========================================================
     FORM HANDLING
  ========================================================= */

  const handleInputChange = (event) => {

    const {
      name,
      value,
    } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

  }


  const handleSubmit = (event) => {

    event.preventDefault()

    if (!formData.course || !formData.mode) {
      return
    }

    /*
      Connect your Supabase / CRM submission here.

      Example:

      await submitAdmissionEnquiry(formData)
    */

    console.log(
      'Footer admission enquiry:',
      formData
    )

    setSubmitted(true)

  }


  /* =========================================================
     OPEN MODAL
  ========================================================= */

  const openModal = () => {

    setSubmitted(false)

    setIsModalOpen(true)

  }


  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const closeModal = () => {

    setIsModalOpen(false)

    setSubmitted(false)

  }


  /* =========================================================
     RESET AFTER SUCCESS
  ========================================================= */

  const handleCloseAfterSubmit = () => {

    setFormData({
      name: '',
      mobile: '',
      email: '',
      course: '',
      mode: '',
    })

    setSubmitted(false)

    setIsModalOpen(false)

  }


  return (
    <footer className="site-footer">


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="footer-cta">

        <div className="container footer-cta-inner">

          <div>

            <span className="section-label">
              VIDYAPROBODHINI
            </span>

            <h2>
              Your preparation
              <br />
              starts here.
            </h2>

          </div>


          <button
            type="button"
            className="button footer-cta-button"
            onClick={openModal}
          >

            Enquire about admission

            <ArrowUpRight size={16} />

          </button>

        </div>

      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="container">

          <div className="footer-grid">


            {/* =================================================
                BRAND
            ================================================= */}

            <div className="footer-brand">

              <Link
                to="/"
                className="footer-logo"
              >

                <img
                  src={logo}
                  alt="Vidyaprabodhini Academy"
                  loading="eager"
                />

              </Link>


              <p>
                स्पर्धा परीक्षा मार्गदर्शन केंद्र, कोल्हापूर
              </p>


              <p className="footer-description">
                Guidance and preparation for UPSC, MPSC,
                Banking and Saralseva competitive examinations.
              </p>


              <div className="footer-socials">

                <a
                  href="#"
                  aria-label="Instagram"
                  onClick={(event) =>
                    event.preventDefault()
                  }
                >
                  IG
                </a>


                <a
                  href="#"
                  aria-label="Facebook"
                  onClick={(event) =>
                    event.preventDefault()
                  }
                >
                  FB
                </a>


                <a
                  href="#"
                  aria-label="YouTube"
                  onClick={(event) =>
                    event.preventDefault()
                  }
                >
                  YT
                </a>

              </div>

            </div>


            {/* =================================================
                NAVIGATION
            ================================================= */}

            <div className="footer-column">

              <span className="footer-column-title">
                NAVIGATION
              </span>


              <nav className="footer-links">

                {navigation.map((item) => (

                  <Link
                    key={item.path}
                    to={item.path}
                  >
                    {item.label}
                  </Link>

                ))}

              </nav>

            </div>


            {/* =================================================
                COURSES
            ================================================= */}

            <div className="footer-column">

              <span className="footer-column-title">
                PREPARATION
              </span>


              <div className="footer-links">

                {courses.map((course) => (

                  <Link
                    key={course}
                    to="/coaching"
                  >
                    {course}
                  </Link>

                ))}

              </div>

            </div>


            {/* =================================================
                CONTACT
            ================================================= */}

            <div className="footer-column">

              <span className="footer-column-title">
                CONTACT
              </span>


              <div className="footer-contact">

                <p>
                  Vidyaprabodhini
                </p>


                <p>
                  Kolhapur, Maharashtra
                </p>


                <a href="mailto:info@vidyaprabodhini.in">
                  info@vidyaprabodhini.in
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} Vidyaprabodhini.
            All rights reserved.
          </p>


          <p className="footer-credit">
            Designed by SkewX Technologies
          </p>

        </div>

      </div>


      {/* =====================================================
          ADMISSION ENQUIRY MODAL
      ===================================================== */}

      {isModalOpen && (

        <div
          className="admission-modal-overlay"
          onMouseDown={(event) => {

            if (
              event.target === event.currentTarget
            ) {
              closeModal()
            }

          }}
        >

          <div
            className="admission-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="admission-modal-title"
          >


            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="admission-modal-header">

              <div>

                <span className="section-label">
                  ADMISSION ENQUIRY
                </span>


                <h2 id="admission-modal-title">
                  Start your
                  <br />
                  preparation.
                </h2>

              </div>


              <button
                type="button"
                className="admission-modal-close"
                onClick={closeModal}
                aria-label="Close admission enquiry"
              >

                <X size={20} />

              </button>

            </div>


            {/* =================================================
                SUCCESS STATE
            ================================================= */}

            {submitted ? (

              <div className="admission-success">

                <div className="admission-success-icon">

                  <CheckCircle2 size={28} />

                </div>


                <span className="section-label">
                  ENQUIRY RECEIVED
                </span>


                <h3>
                  Thank you for your enquiry.
                </h3>


                <p>
                  Our team will get in touch with you
                  regarding your course and learning mode.
                </p>


                <button
                  type="button"
                  className="button button-primary"
                  onClick={handleCloseAfterSubmit}
                >
                  Close
                </button>

              </div>

            ) : (


              /* =================================================
                  FORM
              ================================================= */

              <form
                className="footer-admission-form"
                onSubmit={handleSubmit}
              >


                {/* NAME */}

                <div className="footer-form-field">

                  <label htmlFor="footer-full-name">
                    Full name
                  </label>


                  <input
                    id="footer-full-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />

                </div>


                {/* MOBILE */}

                <div className="footer-form-field">

                  <label htmlFor="footer-mobile">
                    Mobile number
                  </label>


                  <input
                    id="footer-mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                  />

                </div>


                {/* EMAIL */}

                <div className="footer-form-field">

                  <label htmlFor="footer-email">
                    Email address
                  </label>


                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                  />

                </div>


                {/* COURSE + MODE */}

                <div className="footer-form-row">


                  {/* COURSE */}

                  <div className="footer-form-field">

                    <label htmlFor="footer-course">
                      Course
                    </label>


                    <select
                      id="footer-course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                    >

                      <option value="">
                        Select course
                      </option>


                      {courses.map((course) => (

                        <option
                          key={course}
                          value={course}
                        >
                          {course}
                        </option>

                      ))}

                    </select>

                  </div>


                  {/* MODE */}

                  <div className="footer-form-field">

                    <label htmlFor="footer-mode">
                      Learning mode
                    </label>


                    <select
                      id="footer-mode"
                      name="mode"
                      value={formData.mode}
                      onChange={handleInputChange}
                      required
                    >

                      <option value="">
                        Select mode
                      </option>


                      {learningModes.map((mode) => (

                        <option
                          key={mode}
                          value={mode}
                        >
                          {mode}
                        </option>

                      ))}

                    </select>

                  </div>

                </div>


                {/* VALIDATION */}

                {!formData.course ||
                !formData.mode ? (

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
                  className="button button-primary footer-admission-submit"
                  disabled={
                    !formData.course ||
                    !formData.mode
                  }
                >

                  Submit enquiry

                  <ArrowUpRight size={16} />

                </button>


                {/* DISCLAIMER */}

                <p className="form-disclaimer">

                  By submitting this form, you agree to be
                  contacted by Vidyaprabodhini regarding your
                  enquiry.

                </p>

              </form>

            )}

          </div>

        </div>

      )}

    </footer>
  )
}