import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle2,
  X,
} from 'lucide-react'

import { useLanguage } from '../components/LanguageContext.jsx'

import logo from '../assets/logo1.jpeg'

export default function Footer() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

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
     TRANSLATIONS
  ========================================================= */

  const text = isMarathi
    ? {
        footer: {
          label: 'विद्याप्रबोधिनी',
          title1: 'तुमची तयारी',
          title2: 'येथून सुरू होते.',
          enquire: 'प्रवेशाबद्दल चौकशी करा',

          subtitle: 'स्पर्धा परीक्षा मार्गदर्शन केंद्र, कोल्हापूर',
          description:
            'UPSC, MPSC आणि Banking स्पर्धा परीक्षांसाठी मार्गदर्शन आणि तयारी.',

          navigation: 'नेव्हिगेशन',
          preparation: 'अभ्यासक्रम',
          contact: 'संपर्क',

          city: 'कोल्हापूर, महाराष्ट्र',

          copyright: 'सर्व हक्क राखीव.',
          designed: 'SkewX Technologies कडून डिझाइन',

          modal: {
            label: 'प्रवेश चौकशी',
            title1: 'तुमची',
            title2: 'तयारी सुरू करा.',

            successLabel: 'चौकशी प्राप्त झाली',
            successTitle: 'तुमच्या चौकशीबद्दल धन्यवाद.',
            successDescription:
              'तुमच्या अभ्यासक्रम आणि अध्ययन पद्धतीसंदर्भात आमची टीम लवकरच तुमच्याशी संपर्क साधेल.',
            close: 'बंद करा',
          },

          form: {
            fullName: 'पूर्ण नाव',
            fullNamePlaceholder: 'तुमचे पूर्ण नाव लिहा',

            mobile: 'मोबाईल नंबर',

            email: 'ई-मेल पत्ता',
            emailPlaceholder: 'you@example.com',

            course: 'अभ्यासक्रम',
            selectCourse: 'अभ्यासक्रम निवडा',

            learningMode: 'अध्ययन पद्धती',
            selectMode: 'अध्ययन पद्धती निवडा',

            selectWarning:
              'पुढे जाण्यासाठी अभ्यासक्रम आणि अध्ययन पद्धती निवडा.',

            selectionReady:
              'अभ्यासक्रम आणि अध्ययन पद्धती निवडली आहे.',

            submit: 'चौकशी सबमिट करा',

            disclaimer:
              'हा फॉर्म सबमिट करून, तुम्ही तुमच्या चौकशीसंदर्भात विद्याप्रबोधिनीकडून संपर्क साधण्यास सहमती देता.',
          },
        },
      }
    : {
        footer: {
          label: 'VIDYAPROBODHINI',
          title1: 'Your preparation',
          title2: 'starts here.',
          enquire: 'Enquire about admission',

          subtitle: 'Competitive Examination Guidance Centre, Kolhapur',
          description:
            'Guidance and preparation for UPSC, MPSC, and Banking competitive examinations.',

          navigation: 'NAVIGATION',
          preparation: 'PREPARATION',
          contact: 'CONTACT',

          city: 'Kolhapur, Maharashtra',

          copyright: 'All rights reserved.',
          designed: 'Designed by SkewX Technologies',

          modal: {
            label: 'ADMISSION ENQUIRY',
            title1: 'Start your',
            title2: 'preparation.',

            successLabel: 'ENQUIRY RECEIVED',
            successTitle: 'Thank you for your enquiry.',
            successDescription:
              'Our team will get in touch with you regarding your course and learning mode.',
            close: 'Close',
          },

          form: {
            fullName: 'Full name',
            fullNamePlaceholder: 'Enter your full name',

            mobile: 'Mobile number',

            email: 'Email address',
            emailPlaceholder: 'you@example.com',

            course: 'Course',
            selectCourse: 'Select course',

            learningMode: 'Learning mode',
            selectMode: 'Select mode',

            selectWarning:
              'Select a course and learning mode to continue.',

            selectionReady:
              'Course and learning mode selected.',

            submit: 'Submit enquiry',

            disclaimer:
              'By submitting this form, you agree to be contacted by Vidyaprabodhini regarding your enquiry.',
          },
        },
      }

  const navigation = [
    {
      label: isMarathi ? 'मुख्यपृष्ठ' : 'Home',
      path: '/',
    },
    {
      label: isMarathi ? 'आमच्याबद्दल' : 'About Us',
      path: '/about',
    },
    {
      label: isMarathi ? 'कोचिंग' : 'Coaching',
      path: '/coaching',
    },
    {
      label: isMarathi ? 'प्रवेश' : 'Admission',
      path: '/admission',
    },
    {
      label: isMarathi ? 'निकाल' : 'Result',
      path: '/result',
    },
    {
      label: isMarathi ? 'गॅलरी' : 'Gallery',
      path: '/gallery',
    },
  ]

  const courses = [
    'UPSC',
    'MPSC',
    'Banking',
  ]

  const learningModes = isMarathi
    ? ['ऑफलाइन', 'ऑनलाइन']
    : ['Offline', 'Online']

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

    console.log(
      'Footer admission enquiry:',
      formData
    )

    setSubmitted(true)
  }

  /* =========================================================
     MODAL
  ========================================================= */

  const openModal = () => {
    setSubmitted(false)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSubmitted(false)
  }

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
              {text.footer.label}
            </span>

            <h2>
              {text.footer.title1}
              <br />
              {text.footer.title2}
            </h2>

          </div>

          <button
            type="button"
            className="button footer-cta-button"
            onClick={openModal}
          >
            {text.footer.enquire}
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
                {text.footer.subtitle}
              </p>

              <p className="footer-description">
                {text.footer.description}
              </p>

              <div className="footer-socials">

                <a
                  href="https://instagram.com/vidya_prabodhini"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  IG
                </a>

                <a
                  href="https://facebook.com/vidyaprabodhinikendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  FB
                </a>

                <a
                  href="https://twitter.com/vidyaprabodhini"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                >
                  X
                </a>

                <a
                  href="http://www.youtube.com/@VidyaPrabodhiniKolhapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  YT
                </a>

                <a
                  href="https://t.me/VidyaPrabodhiniMPSC"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  TG
                </a>

              </div>

            </div>

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <div className="footer-column">

              <span className="footer-column-title">
                {text.footer.navigation}
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
                {text.footer.preparation}
              </span>

              <div className="footer-links">

                {courses.map((course) => (
                  <Link
                    key={course}
                    to={`/coaching?course=${course}#batches`}
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
                {text.footer.contact}
              </span>

              <div className="footer-contact">

                <p>
                  Vidyaprabodhini
                </p>

                <p>
                  {text.footer.city}
                </p>

                <a href="mailto:vidyaprabodhinidigital@gmail.com">
                  vidyaprabodhinidigital@gmail.com
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
            © {new Date().getFullYear()} Vidyaprabodhini.{' '}
            {text.footer.copyright}
          </p>

          <p className="footer-credit">
            {text.footer.designed}
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
                  {text.footer.modal.label}
                </span>

                <h2 id="admission-modal-title">
                  {text.footer.modal.title1}
                  <br />
                  {text.footer.modal.title2}
                </h2>

              </div>

              <button
                type="button"
                className="admission-modal-close"
                onClick={closeModal}
                aria-label={
                  isMarathi
                    ? 'प्रवेश चौकशी बंद करा'
                    : 'Close admission enquiry'
                }
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
                  {text.footer.modal.successLabel}
                </span>

                <h3>
                  {text.footer.modal.successTitle}
                </h3>

                <p>
                  {text.footer.modal.successDescription}
                </p>

                <button
                  type="button"
                  className="button button-primary"
                  onClick={handleCloseAfterSubmit}
                >
                  {text.footer.modal.close}
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
                    {text.footer.form.fullName}
                  </label>

                  <input
                    id="footer-full-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={
                      text.footer.form.fullNamePlaceholder
                    }
                    required
                  />

                </div>

                {/* MOBILE */}

                <div className="footer-form-field">

                  <label htmlFor="footer-mobile">
                    {text.footer.form.mobile}
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
                    {text.footer.form.email}
                  </label>

                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={
                      text.footer.form.emailPlaceholder
                    }
                  />

                </div>

                {/* COURSE + MODE */}

                <div className="footer-form-row">

                  {/* COURSE */}

                  <div className="footer-form-field">

                    <label htmlFor="footer-course">
                      {text.footer.form.course}
                    </label>

                    <select
                      id="footer-course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                    >

                      <option value="">
                        {text.footer.form.selectCourse}
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
                      {text.footer.form.learningMode}
                    </label>

                    <select
                      id="footer-mode"
                      name="mode"
                      value={formData.mode}
                      onChange={handleInputChange}
                      required
                    >

                      <option value="">
                        {text.footer.form.selectMode}
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
                      {text.footer.form.selectWarning}
                    </p>

                  </div>

                ) : (

                  <div className="form-selection-ready">

                    <CheckCircle2 size={16} />

                    <span>
                      {text.footer.form.selectionReady}
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
                  {text.footer.form.submit}
                  <ArrowUpRight size={16} />
                </button>

                {/* DISCLAIMER */}

                <p className="form-disclaimer">
                  {text.footer.form.disclaimer}
                </p>

              </form>

            )}

          </div>

        </div>

      )}

    </footer>
  )
}