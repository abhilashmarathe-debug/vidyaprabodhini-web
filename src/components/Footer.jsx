import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
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
            'UPSC, MPSC आणि Banking स्पर्धा परीक्षांसाठी परिपूर्ण मार्गदर्शन आणि तयारी.',

          navigation: 'नेव्हिगेशन',
          preparation: 'अभ्यासक्रम',
          legal: 'कायदेशीर बाबी',
          contact: 'संपर्क व पत्ता',

          addressTitle: 'विद्याप्रबोधिनी, कोल्हापूर',
          addressLine: '४ थी गल्ली, शहाजी लॉ कॉलेज समोर, १०५० ई वॉर्ड, शाहूपुरी, कोल्हापूर, महाराष्ट्र ४१६००१',

          terms: 'अटी आणि शर्ती',
          privacy: 'गोपनीयता धोरण',
          cookies: 'कुकी धोरण',

          copyright: 'सर्व हक्क राखीव.',
          designedBy: 'डिझाइन आणि विकसित: ',

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
          legal: 'LEGAL & POLICIES',
          contact: 'CONTACT & LOCATION',

          addressTitle: 'Vidya Prabodhini, Kolhapur',
          addressLine: '4th Ln, opp. Shahaji Law College, 1050 E Ward, Shahupuri, Kolhapur, Maharashtra 416001',

          terms: 'Terms & Conditions',
          privacy: 'Privacy Policy',
          cookies: 'Cookie Policy',

          copyright: 'All rights reserved.',
          designedBy: 'Designed by ',

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

  const legalLinks = [
    { label: text.footer.terms, path: '/terms' },
    { label: text.footer.privacy, path: '/privacy' },
    { label: text.footer.cookies, path: '/cookie-policy' },
  ]

  const learningModes = isMarathi
    ? ['ऑफलाइन', 'ऑनलाइन']
    : ['Offline', 'Online']

  /* =========================================================
      FORM HANDLING
  ========================================================= */

  const handleInputChange = (event) => {
    const { name, value } = event.target

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

    console.log('Footer admission enquiry:', formData)
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
          <div className="footer-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '36px' }}>

            {/* =================================================
                BRAND
            ================================================= */}

            <div className="footer-brand" style={{ maxWidth: '280px' }}>
              <Link to="/" className="footer-logo">
                <img
                  src={logo}
                  alt="Vidyaprabodhini Academy"
                  loading="eager"
                />
              </Link>

              <p>{text.footer.subtitle}</p>
              <p className="footer-description">{text.footer.description}</p>

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
                  <Link key={item.path} to={item.path}>
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
                LEGAL
            ================================================= */}

            <div className="footer-column">
              <span className="footer-column-title">
                {text.footer.legal}
              </span>

              <div className="footer-links">
                {legalLinks.map((item) => (
                  <Link key={item.path} to={item.path}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* =================================================
                CONTACT & MAP
            ================================================= */}

            <div className="footer-column" style={{ minWidth: '220px' }}>
              <span className="footer-column-title">
                {text.footer.contact}
              </span>

              <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <MapPin size={15} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', color: '#fff', fontSize: '13px' }}>
                      {text.footer.addressTitle}
                    </strong>
                    <p style={{ fontSize: '11.5px', lineHeight: '1.45', color: '#cbd5e1', margin: '2px 0 0' }}>
                      {text.footer.addressLine}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                  <Phone size={14} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                  <a href="tel:9545387161" style={{ color: '#cbd5e1', fontSize: '12.5px' }}>
                    +91 95453 87161
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={14} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                  <a
                    href="mailto:vidyaprabodhinidigital@gmail.com"
                    style={{ color: 'var(--brand-light, #a5b4fc)', fontSize: '12px', wordBreak: 'break-all' }}
                  >
                    vidyaprabodhinidigital@gmail.com
                  </a>
                </div>

                {/* EMBEDDED MAP SQUARE */}
                <div
                  style={{
                    marginTop: '8px',
                    width: '100%',
                    maxWidth: '220px',
                    aspectRatio: '1 / 1',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #334155',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5384842795256!2d74.23880197377133!3d16.699962684074723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100155565ca5b%3A0xb6003698c7cae015!2sVidya%20Prabodhini%2C%20Kolhapur!5e0!3m2!1sen!2sin!4v1787133573693!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Vidya Prabodhini Location Map"
                  />
                </div>
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
            {text.footer.designedBy}
            <a
              href="https://skewx.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontWeight: 500,
              }}
            >
              SkewX Technologies
            </a>
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
            if (event.target === event.currentTarget) {
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
            {/* MODAL HEADER */}
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

            {/* SUCCESS STATE */}
            {submitted ? (
              <div className="admission-success">
                <div className="admission-success-icon">
                  <CheckCircle2 size={28} />
                </div>

                <span className="section-label">
                  {text.footer.modal.successLabel}
                </span>

                <h3>{text.footer.modal.successTitle}</h3>
                <p>{text.footer.modal.successDescription}</p>

                <button
                  type="button"
                  className="button button-primary"
                  onClick={handleCloseAfterSubmit}
                >
                  {text.footer.modal.close}
                </button>
              </div>
            ) : (
              /* FORM */
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
                    placeholder={text.footer.form.fullNamePlaceholder}
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
                    placeholder={text.footer.form.emailPlaceholder}
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
                        <option key={course} value={course}>
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
                        <option key={mode} value={mode}>
                          {mode}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* VALIDATION */}
                {!formData.course || !formData.mode ? (
                  <div className="form-selection-warning">
                    <span>!</span>
                    <p>{text.footer.form.selectWarning}</p>
                  </div>
                ) : (
                  <div className="form-selection-ready">
                    <CheckCircle2 size={16} />
                    <span>{text.footer.form.selectionReady}</span>
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="button button-primary footer-admission-submit"
                  disabled={!formData.course || !formData.mode}
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