import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Monitor,
  Sparkles,
} from 'lucide-react'
import { useRef, useState } from 'react'
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
  const [submitted, setSubmitted] = useState(false)

  // Step References for Auto-Scroll
  const step2Ref = useRef(null)
  const step3Ref = useRef(null)

  const handleCourseSelect = (selectedId) => {
    setCourse(selectedId)
    setTimeout(() => {
      if (step2Ref.current) {
        step2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 150)
  }

  const handleModeSelect = (selectedId) => {
    setMode(selectedId)
    setTimeout(() => {
      if (step3Ref.current) {
        step3Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 150)
  }

  /* =========================================================
      TRANSLATIONS
  ========================================================= */

  const text = isMarathi
    ? {
        hero: {
          title1: 'तुमची तयारी',
          title2: 'सुरू करा.',
          description:
            'खालील तीन सोप्या टप्प्यांत तुमचा अभ्यासक्रम आणि संपर्क माहिती भरा. आमचे समुपदेशक तुमच्याशी लवकरच संपर्क साधतील.',
        },
        step1: {
          label: 'पायरी ०१',
          title: 'तुम्ही कोणत्या परीक्षेची तयारी करत आहात?',
          description: 'तुम्हाला हवा असलेला अभ्यासक्रम निवडा.',
        },
        step2: {
          label: 'पायरी ०२',
          title: 'तुम्हाला कसे शिकायला आवडेल?',
          description: 'तुमच्या सोयीनुसार योग्य अध्ययन पद्धत निवडा.',
        },
        step3: {
          label: 'पायरी ०३',
          title: 'तुमची संपर्क माहिती भरा',
          description: 'प्रवेश व बॅचच्या माहितीसाठी तुमचे तपशील द्या.',
          fullName: 'पूर्ण नाव',
          fullNamePlaceholder: 'तुमचे पूर्ण नाव लिहा',
          mobile: 'मोबाईल नंबर',
          mobilePlaceholder: '+91 98765 43210',
          email: 'ई-मेल पत्ता (ऐच्छिक)',
          emailPlaceholder: 'you@example.com',
          submit: 'प्रवेश चौकशी सादर करा',
          submitted: 'चौकशी यशस्वीरीत्या नोंदवली गेली आहे!',
          selectionMissing: 'कृपया प्रथम अभ्यासक्रम आणि अध्ययन पद्धत निवडा',
          disclaimer:
            'हा फॉर्म सबमिट करून, तुम्ही विद्याप्रबोधिनीकडून माहिती आणि मार्गदर्शनासाठी संपर्क साधण्यास सहमती देता.',
        },
        nextSteps: {
          label: 'पुढील प्रक्रिया',
          title1: 'इथून पुढे',
          title2: 'काय घडेल?',
          description:
            'अर्ज प्राप्त झाल्यानंतर आमची टीम तुम्हाला पुढील मार्गदर्शन करेल.',
          step1: {
            title: 'माहिती पडताळणी',
            text: 'तुमची माहिती आणि निवड आमच्या नोंदणी प्रणालीत नोंदवली जाते.',
          },
          step2: {
            title: 'समुपदेशकांचा कॉल',
            text: 'अभ्यासक्रम व बॅचच्या वेळेचे नियोजन समजून घेण्यासाठी समुपदेशक संपर्क करतील.',
          },
          step3: {
            title: 'प्रवेश निश्चिती',
            text: 'मार्गदर्शन सत्र आणि अभ्यास साहित्य मिळवून तयारीला सुरुवात करा.',
          },
        },
      }
    : {
        hero: {
          title1: 'Start your',
          title2: 'preparation.',
          description:
            'Complete your application in three simple steps below. Our counsellors will reach out with complete batch details.',
        },
        step1: {
          label: 'STEP 01',
          title: 'What examination are you targeting?',
          description: 'Choose your desired competitive examination track.',
        },
        step2: {
          label: 'STEP 02',
          title: 'How would you like to learn?',
          description: 'Select the learning format that suits your schedule.',
        },
        step3: {
          label: 'STEP 03',
          title: 'Enter your contact details',
          description: 'Provide your details to confirm batch availability.',
          fullName: 'Full Name',
          fullNamePlaceholder: 'Enter your full name',
          mobile: 'Mobile Number',
          mobilePlaceholder: '+91 98765 43210',
          email: 'Email Address (Optional)',
          emailPlaceholder: 'you@example.com',
          submit: 'Submit Admission Enquiry',
          submitted: 'Enquiry Submitted Successfully!',
          selectionMissing: 'Please select both course and learning mode above',
          disclaimer:
            'By submitting this form, you agree to receive guidance and admission updates from Vidyaprabodhini.',
        },
        nextSteps: {
          label: 'WHAT HAPPENS NEXT',
          title1: 'Simple next',
          title2: 'steps.',
          description:
            'Once your form is submitted, here is how the admission process moves forward.',
          step1: {
            title: 'Application Logged',
            text: 'Your course and mode preferences are securely registered.',
          },
          step2: {
            title: 'Counsellor Connect',
            text: 'Our academic counsellor connects with you to explain curriculum and schedule.',
          },
          step3: {
            title: 'Batch Confirmation',
            text: 'Lock your seat, collect starter material, and begin your preparation.',
          },
        },
      }

  /* =========================================================
      DATA
  ========================================================= */

  const courses = [
    {
      id: 'UPSC',
      title: 'UPSC',
      subtitle: isMarathi ? 'नागरी सेवा परीक्षा' : 'Civil Services Examination',
      description: isMarathi
        ? 'केंद्रीय लोकसेवा आयोग (UPSC) परीक्षेची पूर्व, मुख्य व मुलाखतीची परिपूर्ण तयारी.'
        : 'Structured Foundation, Prelims, Mains & Interview guidance for CSE.',
    },
    {
      id: 'MPSC',
      title: 'MPSC',
      subtitle: isMarathi ? 'राज्यसेवा व गट-ब/क' : 'Rajyaseva & Combined',
      description: isMarathi
        ? 'महाराष्ट्र लोकसेवा आयोग (MPSC) अभ्यासक्रमाची परीक्षाभिमुख तयारी.'
        : 'Targeted preparation for Maharashtra state civil services.',
    },
    {
      id: 'Banking',
      title: 'Banking',
      subtitle: isMarathi ? 'IBPS / SBI / RRB' : 'IBPS / SBI / RRB',
      description: isMarathi
        ? 'बँकिंग, विमा आणि वित्तीय क्षेत्रातील विविध पदांसाठी जलद व अचूक तयारी.'
        : 'Comprehensive quantitative, reasoning, and GA preparation for bank exams.',
    },
  ]

  const modes = [
    {
      id: 'Offline',
      title: isMarathi ? 'ऑफलाइन वर्ग' : 'Offline Classroom',
      icon: MapPin,
      description: isMarathi
        ? 'विद्याप्रबोधिनी केंद्र, कोल्हापूर येथे थेट मार्गदर्शनासह क्लासरूम बॅच.'
        : 'In-person classroom guidance with library and study hall access at Kolhapur.',
    },
    {
      id: 'Online',
      title: isMarathi ? 'ऑनलाइन लाइव्ह' : 'Online Live',
      icon: Monitor,
      description: isMarathi
        ? 'लाइव्ह इंटरअॅक्टिव्ह लेक्चर्स, डिजिटल नोट्स आणि रेकॉर्डेड बॅकअप.'
        : 'Interactive live sessions, digital study notes, and lecture recordings.',
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

    if (!course || !mode || !formData.name || !formData.mobile) {
      return
    }

    setSubmitted(true)

    const payload = {
      course,
      mode,
      ...formData,
      submittedAt: new Date().toISOString(),
    }

    console.log('Admission Enquiry Submitted:', payload)
  }

  return (
    <main className="admission-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="admission-hero">
        <div className="container admission-hero-grid">
          <div>
            <h1 className="course-hero-title">
              {text.hero.title1}
              <br />
              {text.hero.title2}
            </h1>
          </div>
          <div className="admission-hero-copy">
            <p className="course-hero-description">{text.hero.description}</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          UNIFIED APPLICATION FORM
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
                  const isSelected = course === item.id
                  return (
                    <button
                      type="button"
                      key={item.id}
                      className={`admission-selectable-card ${isSelected ? 'active' : ''}`}
                      onClick={() => handleCourseSelect(item.id)}
                    >
                      <div className="selectable-card-top">
                        <span className="card-tag">{item.id}</span>
                        {isSelected && <CheckCircle2 className="check-icon" size={20} />}
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
            <div className="admission-step-card" ref={step2Ref} style={{ scrollMarginTop: '100px' }}>
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
                      className={`admission-selectable-card ${isSelected ? 'active' : ''}`}
                      onClick={() => handleModeSelect(item.id)}
                    >
                      <div className="selectable-card-top">
                        <div className="icon-wrapper">
                          <Icon size={20} />
                        </div>
                        {isSelected && <CheckCircle2 className="check-icon" size={20} />}
                      </div>
                      <div className="selectable-card-body">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* STEP 3: CONTACT INFORMATION & SUBMIT */}
            <div className="admission-step-card" ref={step3Ref} style={{ scrollMarginTop: '100px' }}>
              <div className="admission-step-header">
                <div className="step-badge-pill">
                  <span>{text.step3.label}</span>
                </div>
                <h2>{text.step3.title}</h2>
                <p>{text.step3.description}</p>
              </div>

              <div className="admission-form-grid">
                <div className="form-field-group">
                  <label htmlFor="name">{text.step3.fullName} *</label>
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
                  <label htmlFor="mobile">{text.step3.mobile} *</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder={text.step3.mobilePlaceholder}
                  />
                </div>

                <div className="form-field-group full-span">
                  <label htmlFor="email">{text.step3.email}</label>
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

              {/* Status Notice */}
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
                  disabled={!course || !mode || submitted}
                  className={`button button-primary admission-submit-btn ${submitted ? 'submitted' : ''}`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      {text.step3.submitted}
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} />
                      {text.step3.submit}
                      <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
                <p className="admission-form-disclaimer">{text.step3.disclaimer}</p>
              </div>
            </div>

          </form>
        </div>
      </section>

      {/* =====================================================
          WHAT HAPPENS NEXT
      ===================================================== */}
      <section className="admission-next-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">{text.nextSteps.label}</span>
              <h2>
                {text.nextSteps.title1}
                <br />
                {text.nextSteps.title2}
              </h2>
            </div>
            <p>{text.nextSteps.description}</p>
          </div>

          <div className="next-steps-grid">
            <div className="next-step-card">
              <h3>{text.nextSteps.step1.title}</h3>
              <p>{text.nextSteps.step1.text}</p>
            </div>
            <div className="next-step-card">
              <h3>{text.nextSteps.step2.title}</h3>
              <p>{text.nextSteps.step2.text}</p>
            </div>
            <div className="next-step-card">
              <h3>{text.nextSteps.step3.title}</h3>
              <p>{text.nextSteps.step3.text}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}