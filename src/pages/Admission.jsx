import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Monitor,
} from 'lucide-react'
import { useState } from 'react'
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

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const text = isMarathi
    ? {
        hero: {
          eyebrow: 'प्रवेश प्रक्रिया',
          title1: 'तुमची तयारी',
          title2: 'सुरू करा.',
          description:
            'तुम्ही कोणत्या परीक्षेची तयारी करत आहात आणि कोणती अध्ययन पद्धत निवडू इच्छिता ते सांगा. आमचे समुपदेशक तुम्हाला उपलब्ध पर्यायांची माहिती देतील.',
        },
        courseStep: {
          label: '०१ / अभ्यासक्रम निवडा',
          title1: 'तुम्ही कशाची',
          title2: 'तयारी करत आहात?',
          description:
            'तुम्ही ज्या परीक्षेची तयारी करू इच्छिता ती निवडा. तुम्ही ही निवड कधीही बदलू शकता.',
        },
        modeStep: {
          label: '०२ / पद्धत निवडा',
          title1: 'तुम्हाला कसे',
          title2: 'शिकायला आवडेल?',
          description:
            'तुमच्या दैनंदिन वेळापत्रकानुसार योग्य अध्ययन पद्धती निवडा.',
        },
        selectionStatus: {
          label: 'तुमची निवड',
          ready: 'तयार',
          incomplete: 'अपूर्ण',
          course: 'अभ्यासक्रम',
          mode: 'अध्ययन पद्धती',
          notSelected: 'निवडलेले नाही',
        },
        note: {
          label: 'पुढील पायरी',
          text: 'तुमचा अभ्यासक्रम आणि पसंतीची पद्धत निवडल्यानंतर चौकशी फॉर्म भरा. आमचे समुपदेशक लवकरच संबंधित बॅचच्या माहितीसह तुमच्याशी संपर्क साधतील.',
        },
        formCard: {
          number: '०३',
          label: 'प्रवेश चौकशी',
          title1: 'चला, तयारीला',
          title2: 'सुरुवात करूया.',
          description:
            'तुमची संपर्क माहिती द्या आणि तुमचा पसंतीचा अभ्यासक्रम व पद्धत निवडा.',
          quickHeading: 'येथे निवड करू इच्छिता?',
          optional: 'ऐच्छिक',
          courseLabel: 'अभ्यासक्रम',
          selectCourse: 'अभ्यासक्रम निवडा',
          modeLabel: 'अध्ययन पद्धती',
          selectMode: 'अध्ययन पद्धती निवडा',
          currentSelection: 'सध्याची निवड',
          fullName: 'पूर्ण नाव',
          fullNamePlaceholder: 'तुमचे पूर्ण नाव लिहा',
          mobile: 'मोबाईल नंबर',
          email: 'ई-मेल पत्ता',
          emailPlaceholder: 'you@example.com',
          warning: 'पुढे जाण्यासाठी अभ्यासक्रम आणि अध्ययन पद्धती निवडा.',
          ready: 'अभ्यासक्रम आणि अध्ययन पद्धती निवडली आहे.',
          submit: 'चौकशी सबमिट करा',
          submitted: 'चौकशी नोंदवली गेली आहे',
          disclaimer:
            'हा फॉर्म सबमिट करून, तुम्ही तुमच्या चौकशीसंदर्भात विद्याप्रबोधिनीकडून संपर्क साधण्यास सहमती देता.',
        },
        nextSteps: {
          label: 'पुढील प्रक्रिया',
          title1: 'इथून पुढे',
          title2: 'अगदी सोपे.',
          description:
            'तुमची चौकशी प्राप्त झाल्यावर आमचे समुपदेशक तुम्हाला पुढील प्रक्रियेत मार्गदर्शन करतील.',
          step1: {
            number: '०१',
            title: 'चौकशी नोंदवली',
            text: 'तुमची माहिती आणि परीक्षेची पसंती आमच्याकडे नोंदवली जाते.',
          },
          step2: {
            number: '०२',
            title: 'समुपदेशक संपर्क',
            text: 'तुमच्या शैक्षणिक गरजा समजून घेण्यासाठी समुपदेशक तुमच्याशी संपर्क साधतात.',
          },
          step3: {
            number: '०३',
            title: 'बॅच निश्चित करा',
            text: 'संबंधित बॅच, वेळ आणि प्रवेशाच्या पुढील टप्प्यांची सविस्तर माहिती मिळवा.',
          },
        },
      }
    : {
        hero: {
          eyebrow: 'ADMISSION',
          title1: 'Start your',
          title2: 'preparation.',
          description:
            "Tell us what you're preparing for and how you'd like to learn. Our counsellor will help you understand the available options.",
        },
        courseStep: {
          label: '01 / SELECT COURSE',
          title1: 'What are you',
          title2: 'preparing for?',
          description:
            'Choose the examination you are preparing for. You can change your selection anytime.',
        },
        modeStep: {
          label: '02 / SELECT MODE',
          title1: 'How would you',
          title2: 'like to learn?',
          description:
            'Select the learning format that best fits your preparation routine.',
        },
        selectionStatus: {
          label: 'YOUR SELECTION',
          ready: 'READY',
          incomplete: 'INCOMPLETE',
          course: 'COURSE',
          mode: 'LEARNING MODE',
          notSelected: 'Not selected',
        },
        note: {
          label: 'NEXT STEP',
          text: 'After selecting your course and preferred mode, complete the enquiry form. A counsellor will contact you with the relevant batch details.',
        },
        formCard: {
          number: '03',
          label: 'ADMISSION ENQUIRY',
          title1: "Let's get",
          title2: 'started.',
          description:
            'Share your details and select your preferred course and learning mode.',
          quickHeading: 'PREFER TO SELECT HERE?',
          optional: 'Optional',
          courseLabel: 'Course',
          selectCourse: 'Select your course',
          modeLabel: 'Learning mode',
          selectMode: 'Select learning mode',
          currentSelection: 'CURRENT SELECTION',
          fullName: 'Full name',
          fullNamePlaceholder: 'Enter your full name',
          mobile: 'Mobile number',
          email: 'Email address',
          emailPlaceholder: 'you@example.com',
          warning: 'Select a course and learning mode to continue.',
          ready: 'Course and learning mode selected.',
          submit: 'Submit enquiry',
          submitted: 'Enquiry submitted',
          disclaimer:
            'By submitting this form, you agree to be contacted by Vidyaprabodhini regarding your enquiry.',
        },
        nextSteps: {
          label: 'WHAT HAPPENS NEXT',
          title1: 'Simple from',
          title2: 'here.',
          description:
            'Once your enquiry is received, our counsellor can help you with the next steps.',
          step1: {
            number: '01',
            title: 'Enquiry received',
            text: 'Your details and preparation preferences are recorded.',
          },
          step2: {
            number: '02',
            title: 'Counsellor connects',
            text: 'A counsellor contacts you to understand your requirements.',
          },
          step3: {
            number: '03',
            title: 'Choose your batch',
            text: 'Get information about the relevant batch, mode and next steps.',
          },
        },
      }

  /* =========================================================
     COURSES & MODES DATA
  ========================================================= */

  const courses = [
    {
      id: 'UPSC',
      title: 'UPSC',
      subtitle: isMarathi ? 'नागरी सेवा' : 'Civil Services',
      description: isMarathi
        ? 'केंद्रीय लोकसेवा आयोग (UPSC) परीक्षेची परिपूर्ण व संरचित तयारी.'
        : 'Structured preparation for the Union Public Service Commission examination.',
    },
    {
      id: 'MPSC',
      title: 'MPSC',
      subtitle: isMarathi ? 'राज्यसेवा व संयुक्त' : 'Rajyaseva',
      description: isMarathi
        ? 'महाराष्ट्र लोकसेवा आयोग (MPSC) राज्यसेवा व संयुक्त परीक्षांची तयारी.'
        : 'Preparation for Maharashtra Public Service Commission examinations.',
    },
    {
      id: 'Banking',
      title: 'Banking',
      subtitle: isMarathi ? 'IBPS / SBI / RRB' : 'IBPS / SBI',
      description: isMarathi
        ? 'बँकिंग आणि वित्तीय क्षेत्रातील भरती परीक्षांची केंद्रित तयारी.'
        : 'Focused preparation for banking and related competitive examinations.',
    },
  ]

  const modes = [
    {
      id: 'Offline',
      title: isMarathi ? 'ऑफलाइन' : 'Offline',
      icon: MapPin,
      description: isMarathi
        ? 'विद्याप्रबोधिनी, कोल्हापूर येथे प्रत्यक्ष वर्गखोलीतील मार्गदर्शन.'
        : 'Classroom-based preparation at Vidyaprabodhini, Kolhapur.',
    },
    {
      id: 'Online',
      title: isMarathi ? 'ऑनलाइन' : 'Online',
      icon: Monitor,
      description: isMarathi
        ? 'डिजिटल क्लासेस आणि रेकॉर्डेड लेक्चर्सद्वारे लवचिक तयारी.'
        : 'Flexible preparation through online learning.',
    },
  ]

  const selectedCourse = courses.find((item) => item.id === course)
  const selectedMode = modes.find((item) => item.id === mode)

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
              {text.hero.eyebrow}
            </div>

            <h1>
              {text.hero.title1}
              <br />
              {text.hero.title2}
            </h1>

          </div>

          <div className="admission-hero-copy">

            <p>
              {text.hero.description}
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
              LEFT: COURSE + MODE
          ================================================= */}

          <div className="admission-selection">


            {/* =================================================
                COURSE
            ================================================= */}

            <div className="admission-block">

              <div className="admission-section-heading">

                <span className="section-label">
                  {text.courseStep.label}
                </span>

                <h2>
                  {text.courseStep.title1}
                  <br />
                  {text.courseStep.title2}
                </h2>

                <p className="admission-heading-description">
                  {text.courseStep.description}
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
                  {text.modeStep.label}
                </span>

                <h2>
                  {text.modeStep.title1}
                  <br />
                  {text.modeStep.title2}
                </h2>

                <p className="admission-heading-description">
                  {text.modeStep.description}
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
                  {text.selectionStatus.label}
                </span>

                <span
                  className={
                    course && mode
                      ? 'selection-step ready'
                      : 'selection-step'
                  }
                >
                  {course && mode
                    ? text.selectionStatus.ready
                    : text.selectionStatus.incomplete}
                </span>

              </div>


              <div className="selection-status-grid">

                <div>

                  <span>
                    {text.selectionStatus.course}
                  </span>

                  <strong>
                    {selectedCourse
                      ? `${selectedCourse.title}  ${selectedCourse.subtitle}`
                      : text.selectionStatus.notSelected}
                  </strong>

                </div>


                <div>

                  <span>
                    {text.selectionStatus.mode}
                  </span>

                  <strong>
                    {selectedMode
                      ? selectedMode.title
                      : text.selectionStatus.notSelected}
                  </strong>

                </div>

              </div>

            </div>


            {/* =================================================
                NOTE
            ================================================= */}

            <div className="admission-note">

              <span className="section-label">
                {text.note.label}
              </span>

              <p>
                {text.note.text}
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT: ENQUIRY FORM
          ================================================= */}

          <aside className="admission-form-card">


            {/* FORM HEADER */}

            <div className="admission-form-header">

              <div className="form-header-number">
                {text.formCard.number}
              </div>

              <span className="section-label">
                {text.formCard.label}
              </span>

              <h2>
                {text.formCard.title1}
                <br />
                {text.formCard.title2}
              </h2>

              <p>
                {text.formCard.description}
              </p>

            </div>


            {/* =================================================
                QUICK SELECTION
            ================================================= */}

            <div className="form-quick-selection">

              <div className="form-quick-heading">

                <span>
                  {text.formCard.quickHeading}
                </span>

                <small>
                  {text.formCard.optional}
                </small>

              </div>


              {/* COURSE SELECT */}

              <div className="form-select-field">

                <label htmlFor="form-course">
                  {text.formCard.courseLabel}
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
                      {text.formCard.selectCourse}
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
                  {text.formCard.modeLabel}
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
                      {text.formCard.selectMode}
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
                  {text.formCard.currentSelection}
                </span>
              </div>


              <div className="form-selected-grid">

                <div className="form-selected-item">

                  <span>
                    {text.selectionStatus.course}
                  </span>

                  <strong>
                    {selectedCourse
                      ? selectedCourse.title
                      : text.selectionStatus.notSelected}
                  </strong>

                </div>


                <div className="form-selected-item">

                  <span>
                    {text.selectionStatus.mode}
                  </span>

                  <strong>
                    {selectedMode
                      ? selectedMode.title
                      : text.selectionStatus.notSelected}
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
                  {text.formCard.fullName}
                </label>

                <input
                  id="full-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={text.formCard.fullNamePlaceholder}
                  required
                />

              </div>


              {/* MOBILE */}

              <div className="form-field">

                <label htmlFor="mobile">
                  {text.formCard.mobile}
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
                  {text.formCard.email}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={text.formCard.emailPlaceholder}
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
                    {text.formCard.warning}
                  </p>

                </div>

              ) : (

                <div className="form-selection-ready">

                  <CheckCircle2 size={16} />

                  <span>
                    {text.formCard.ready}
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
                  ? text.formCard.submitted
                  : text.formCard.submit}

                {!submitted && (
                  <ArrowUpRight size={16} />
                )}

              </button>


              <p className="form-disclaimer">
                {text.formCard.disclaimer}
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
                {text.nextSteps.label}
              </span>

              <h2>
                {text.nextSteps.title1}
                <br />
                {text.nextSteps.title2}
              </h2>

            </div>

            <p>
              {text.nextSteps.description}
            </p>

          </div>


          <div className="admission-next-grid">

            <div>

              <span>
                {text.nextSteps.step1.number}
              </span>

              <h3>
                {text.nextSteps.step1.title}
              </h3>

              <p>
                {text.nextSteps.step1.text}
              </p>

            </div>


            <div>

              <span>
                {text.nextSteps.step2.number}
              </span>

              <h3>
                {text.nextSteps.step2.title}
              </h3>

              <p>
                {text.nextSteps.step2.text}
              </p>

            </div>


            <div>

              <span>
                {text.nextSteps.step3.number}
              </span>

              <h3>
                {text.nextSteps.step3.title}
              </h3>

              <p>
                {text.nextSteps.step3.text}
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}