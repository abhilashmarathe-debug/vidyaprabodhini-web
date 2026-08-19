import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Landmark,
  Loader2,
  Lock,
  MapPin,
  Monitor,
  Phone,
  Sparkles,
  User,
} from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { useLanguage } from '../components/LanguageContext.jsx'

export default function Admission() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  const [course, setCourse] = useState('')
  const [mode, setMode] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Step References for Smooth Auto-Scroll
  const step2Ref = useRef(null)
  const step3Ref = useRef(null)

  // Progress Calculation
  const progress = useMemo(() => {
    let count = 0
    if (course) count += 33
    if (mode) count += 33
    if (formData.name && formData.mobile.length >= 10) count += 34
    return count
  }, [course, mode, formData])

  const handleCourseSelect = (selectedId) => {
    setCourse(selectedId)
    setTimeout(() => {
      step2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
  }

  const handleModeSelect = (selectedId) => {
    setMode(selectedId)
    setTimeout(() => {
      step3Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
  }

  /* =========================================================
      TRANSLATIONS
  ========================================================= */
  const text = isMarathi
    ? {
        badge: 'प्रवेश प्रक्रिया २०२६ - २०२७',
        hero: {
          title1: 'तुमच्या यशाची तयारी',
          title2: 'इथून सुरू करा.',
          description:
            'खालील तीन सोप्या टप्प्यांत तुमचा अभ्यासक्रम निवडा व नोंदणी करा. आमचे वरिष्ठ समुपदेशक बॅच व अभ्यास आराखड्यासाठी थेट संपर्क साधतील.',
        },
        step1: {
          label: 'पायरी ०१',
          title: 'तुम्ही कोणत्या परीक्षेची तयारी करत आहात?',
          description: 'तुमचे ध्येय निवडा आणि विशेष बॅच मिळवा.',
        },
        step2: {
          label: 'पायरी ०२',
          title: 'तुमची सोयीस्कर अध्ययन पद्धत कोणती?',
          description: 'ऑफलाइन किंवा थेट लाइव्ह वर्ग निवडा.',
        },
        step3: {
          label: 'पायरी ०३',
          title: 'तुमचे संपर्क तपशील भरा',
          description: 'प्रवेश निश्चिती व समुपदेशनासाठी माहिती द्या.',
          fullName: 'पूर्ण नाव',
          fullNamePlaceholder: 'उदा. अमित सूर्यवंशी',
          mobile: 'मोबाईल नंबर',
          mobilePlaceholder: '९८७६५ ४३२१०',
          email: 'ई-मेल पत्ता (पर्यायी)',
          emailPlaceholder: 'amit@example.com',
          submit: 'प्रवेश चौकशी अर्ज पाठवा',
          submitting: 'नोंदणी होत आहे...',
          submitted: 'नोंदणी यशस्वीरीत्या पूर्ण झाली!',
          selectionMissing: 'कृपया प्रथम अभ्यासक्रम आणि शिकण्याची पद्धत निवडा.',
          disclaimer: 'तुमचा डेटा १००% सुरक्षित राहील. आम्ही कोणताही स्पॅम पाठवत नाही.',
        },
        summary: {
          course: 'निवडलेला कोर्स:',
          mode: 'माध्यम:',
          notSelected: 'निवडले नाही',
        },
        nextSteps: {
          label: 'प्रवेश प्रक्रिया',
          title1: 'अर्ज केल्यानंतर',
          title2: 'पुढे काय होईल?',
          description: 'नोंदणी पूर्ण झाल्यानंतरची पारदर्शक आणि सोपी प्रक्रिया.',
          step1: {
            title: '१. प्राधान्य नोंदणी',
            text: 'तुमचे निवडलेले निकष थेट आमच्या बॅच मॅनेजमेंट सिस्टीममध्ये नोंदवले जातात.',
          },
          step2: {
            title: '२. तज्ज्ञ समुपदेशन कॉल',
            text: 'आमचे वरिष्ठ मार्गदर्शक २४ तासांत संपर्क करून अभ्यासक्रम व टाइमटेबल समजावून सांगतील.',
          },
          step3: {
            title: '३. प्रवेश व साहित्य वाटप',
            text: 'सीट निश्चित करा, डिजिटल लायब्ररी ऍक्सेस मिळवा आणि थेट तयारीला लागा.',
          },
        },
      }
    : {
        badge: 'ADMISSIONS OPEN 2026 - 2027',
        hero: {
          title1: 'Architect your path to',
          title2: 'public service.',
          description:
            'Complete your streamlined 3-step application below. Connect directly with senior faculty and lock your structured prep schedule.',
        },
        step1: {
          label: 'STEP 01',
          title: 'Select Target Examination',
          description: 'Choose your desired competitive examination curriculum.',
        },
        step2: {
          label: 'STEP 02',
          title: 'Choose Learning Format',
          description: 'Pick an immersive classroom or dynamic live-stream model.',
        },
        step3: {
          label: 'STEP 03',
          title: 'Applicant Information',
          description: 'Provide your details to verify current seat availability.',
          fullName: 'Full Name',
          fullNamePlaceholder: 'e.g. Rahul Sharma',
          mobile: 'Mobile Number',
          mobilePlaceholder: '+91 98765 43210',
          email: 'Email Address (Optional)',
          emailPlaceholder: 'rahul@example.com',
          submit: 'Submit Admission Request',
          submitting: 'Processing Application...',
          submitted: 'Application Received Successfully!',
          selectionMissing: 'Please complete Steps 01 & 02 above to proceed.',
          disclaimer: 'Your details are encrypted and strictly protected under our privacy policy.',
        },
        summary: {
          course: 'Target Track:',
          mode: 'Format:',
          notSelected: 'Not selected',
        },
        nextSteps: {
          label: 'ROADMAP',
          title1: 'What happens',
          title2: 'after submission?',
          description: 'Clear, transparent next steps toward starting your cohort.',
          step1: {
            title: '1. Profile Processing',
            text: 'Your subject specialization and mode preference are mapped immediately.',
          },
          step2: {
            title: '2. Academic Guidance Call',
            text: 'A senior counselor contacts you within 24 hours to review batches and syllabi.',
          },
          step3: {
            title: '3. Seat Lock & Onboarding',
            text: 'Finalize your seat, receive comprehensive modules, and enter the cohort.',
          },
        },
      }

  /* =========================================================
      DATA CONFIGURATION
  ========================================================= */
  const courses = [
    {
      id: 'UPSC',
      title: 'UPSC CSE',
      subtitle: isMarathi ? 'नागरी सेवा परीक्षा' : 'Civil Services Examination',
      badge: 'IAS / IPS / IFS',
      icon: Landmark,
      description: isMarathi
        ? 'पूर्व, मुख्य व मुलाखतीची संपूर्ण इंटिग्रेटेड तयारी, टेस्ट सीरिज आणि उत्तरलेखन सराव.'
        : 'Holistic Prelims, Mains answer writing, test series, and personalized interview mentorship.',
    },
    {
      id: 'MPSC',
      title: 'MPSC Rajyaseva',
      subtitle: isMarathi ? 'राज्यसेवा व संयुक्त परीक्षा' : 'State Services & Combined',
      badge: 'Group A / B / C',
      icon: Building2,
      description: isMarathi
        ? 'नवीन अभ्यासक्रमानुसार संपूर्ण मार्गदर्शन, संदर्भ साहित्य आणि पीवायक्यू (PYQ) विश्लेषण.'
        : 'Up-to-date pattern coverage, standard reference material, and comprehensive PYQ breakdown.',
    },
    {
      id: 'Banking',
      title: 'Banking & Insurance',
      subtitle: isMarathi ? 'IBPS / SBI / RBI' : 'IBPS / SBI / RBI Officer',
      badge: 'PO / Clerk',
      icon: Award,
      description: isMarathi
        ? 'स्पीड मॅथ्स, लॉजिकल रिझनिंग, बँकिंग अवेअरनेस आणि लाइव्ह स्पीड टेस्ट प्रॅक्टिस.'
        : 'High-speed quant shortcuts, analytical reasoning mastery, and intensive sectional mock drills.',
    },
  ]

  const modes = [
    {
      id: 'Offline',
      title: isMarathi ? 'ऑफलाइन क्लासरूम' : 'Offline Campus',
      badge: 'Kolhapur Center',
      icon: MapPin,
      perks: isMarathi ? 'वाचनालय + थेट संवाद' : 'Study Hall + In-person Doubts',
      description: isMarathi
        ? 'विद्याप्रबोधिनी कोल्हापूर कॅम्पस येथे प्रत्यक्ष लेक्चर्स, वाचनालय आणि रोजच्या चर्चा सत्रांचा समावेश.'
        : 'Direct faculty contact, on-campus study rooms, library privileges, and group discussions.',
    },
    {
      id: 'Online',
      title: isMarathi ? 'ऑनलाइन लाइव्ह हायब्रिड' : 'Live Interactive',
      badge: 'Digital Access',
      icon: Monitor,
      perks: isMarathi ? 'अमर्यादित रेकॉर्डिंग्स' : 'Unlimited Backups',
      description: isMarathi
        ? 'टू-वे इंटरअॅक्टिव्ह लेक्चर्स, डिजिटल नोट्स, प्रश्नोत्तरे आणि संपूर्ण रेकॉर्डेड बॅकअप.'
        : 'Real-time two-way audio/video, daily study PDFs, doubt portal, and 24/7 archive access.',
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!course || !mode || !formData.name || !formData.mobile) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      const payload = {
        course,
        mode,
        ...formData,
        submittedAt: new Date().toISOString(),
      }
      console.log('Admission Enquiry Submitted:', payload)
    }, 800)
  }

  return (
    <main className="admission-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="admission-hero">
        <div className="container">
          <div className="hero-top-badge">
            <Sparkles size={14} />
            <span>{text.badge}</span>
          </div>

          <div className="admission-hero-grid">
            <h1 className="course-hero-title">
              {text.hero.title1} <span>{text.hero.title2}</span>
            </h1>
            <p className="course-hero-description">{text.hero.description}</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          STICKY LIVE PROGRESS BAR
      ===================================================== */}
      <div className="sticky-progress-container">
        <div className="container">
          <div className="progress-content-inner">
            <div className="progress-label-bar">
              <span className="progress-title">
                {isMarathi ? 'अर्ज पूर्णता' : 'Application Progress'}
              </span>
              <span className="progress-pct">{progress}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          UNIFIED APPLICATION FLOW
      ===================================================== */}
      <section className="admission-form-section">
        <div className="container">
          <form onSubmit={handleSubmit} className="admission-flow-form">

            {/* STEP 1: COURSE SELECTION */}
            <div className="admission-step-card">
              <div className="admission-step-header">
                <div className="step-badge-pill">
                  <span>{text.step1.label}</span>
                </div>
                <h2>{text.step1.title}</h2>
                <p>{text.step1.description}</p>
              </div>

              <div className="admission-cards-grid">
                {courses.map((item) => {
                  const Icon = item.icon
                  const isSelected = course === item.id
                  return (
                    <button
                      type="button"
                      key={item.id}
                      className={`admission-selectable-card ${isSelected ? 'active' : ''}`}
                      onClick={() => handleCourseSelect(item.id)}
                    >
                      <div className="selectable-card-top">
                        <div className="icon-wrapper">
                          <Icon size={20} />
                        </div>
                        <span className="card-badge-pill">{item.badge}</span>
                        {isSelected && <CheckCircle2 className="check-icon" size={22} />}
                      </div>
                      <div className="selectable-card-body">
                        <h3>{item.title}</h3>
                        <span className="card-subtitle">{item.subtitle}</span>
                        <p>{item.description}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* STEP 2: MODE SELECTION */}
            <div className="admission-step-card" ref={step2Ref}>
              <div className="admission-step-header">
                <div className="step-badge-pill">
                  <span>{text.step2.label}</span>
                </div>
                <h2>{text.step2.title}</h2>
                <p>{text.step2.description}</p>
              </div>

              <div className="admission-cards-grid two-columns">
                {modes.map((item) => {
                  const Icon = item.icon
                  const isSelected = mode === item.id
                  return (
                    <button
                      type="button"
                      key={item.id}
                      className={`admission-selectable-card mode-card ${isSelected ? 'active' : ''}`}
                      onClick={() => handleModeSelect(item.id)}
                    >
                      <div className="selectable-card-top">
                        <div className="icon-wrapper">
                          <Icon size={20} />
                        </div>
                        <span className="card-badge-pill">{item.perks}</span>
                        {isSelected && <CheckCircle2 className="check-icon" size={22} />}
                      </div>
                      <div className="selectable-card-body">
                        <div className="card-title-group">
                          <h3>{item.title}</h3>
                          <span className="badge-location">{item.badge}</span>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* STEP 3: CONTACT FORM & SUMMARY BAR */}
            <div className="admission-step-card" ref={step3Ref}>
              <div className="admission-step-header">
                <div className="step-badge-pill">
                  <span>{text.step3.label}</span>
                </div>
                <h2>{text.step3.title}</h2>
                <p>{text.step3.description}</p>
              </div>

              {/* Dynamic Selection Summary Strip */}
              <div className="selection-summary-strip">
                <div className="summary-item">
                  <span className="label">{text.summary.course}</span>
                  <span className={`val ${course ? 'filled' : ''}`}>
                    {course || text.summary.notSelected}
                  </span>
                </div>
                <div className="summary-divider" />
                <div className="summary-item">
                  <span className="label">{text.summary.mode}</span>
                  <span className={`val ${mode ? 'filled' : ''}`}>
                    {mode || text.summary.notSelected}
                  </span>
                </div>
              </div>

              <div className="admission-form-grid">
                <div className="form-field-group">
                  <label htmlFor="name">
                    <User size={15} />
                    <span>{text.step3.fullName} *</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={text.step3.fullNamePlaceholder}
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="mobile">
                    <Phone size={15} />
                    <span>{text.step3.mobile} *</span>
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder={text.step3.mobilePlaceholder}
                  />
                </div>

                <div className="form-field-group full-span">
                  <label htmlFor="email">
                    <BookOpen size={15} />
                    <span>{text.step3.email}</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={text.step3.emailPlaceholder}
                  />
                </div>
              </div>

              {/* Status Warning */}
              {(!course || !mode) && (
                <div className="selection-notice-warning">
                  <span>!</span>
                  <p>{text.step3.selectionMissing}</p>
                </div>
              )}

              {/* Action Area */}
              <div className="admission-action-area">
                <button
                  type="submit"
                  disabled={!course || !mode || submitted || isSubmitting}
                  className={`button button-primary admission-submit-btn ${
                    submitted ? 'submitted' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      {text.step3.submitting}
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      {text.step3.submitted}
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} />
                      {text.step3.submit}
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                <div className="admission-privacy-note">
                  <Lock size={13} />
                  <span>{text.step3.disclaimer}</span>
                </div>
              </div>
            </div>

          </form>
        </div>
      </section>

      {/* =====================================================
          ROADMAP / WHAT HAPPENS NEXT
      ===================================================== */}
      <section className="admission-next-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">{text.nextSteps.label}</span>
            <h2>
              {text.nextSteps.title1} <span>{text.nextSteps.title2}</span>
            </h2>
            <p>{text.nextSteps.description}</p>
          </div>

          <div className="next-steps-grid">
            <div className="next-step-card">
              <div className="step-number">01</div>
              <h3>{text.nextSteps.step1.title}</h3>
              <p>{text.nextSteps.step1.text}</p>
            </div>
            <div className="next-step-card">
              <div className="step-number">02</div>
              <h3>{text.nextSteps.step2.title}</h3>
              <p>{text.nextSteps.step2.text}</p>
            </div>
            <div className="next-step-card">
              <div className="step-number">03</div>
              <h3>{text.nextSteps.step3.title}</h3>
              <p>{text.nextSteps.step3.text}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}