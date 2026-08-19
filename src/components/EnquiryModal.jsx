import { useState, useEffect } from 'react'
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from './LanguageContext.jsx'

const defaultForm = {
  name: '',
  phone: '',
  email: '',
  course: '',
  mode: '',
  message: '',
}

export default function EnquiryModal({ isOpen, onClose, initialData = {} }) {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  const [form, setForm] = useState(defaultForm)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      setForm({
        ...defaultForm,
        course: initialData.course || '',
        mode: initialData.mode || '',
      })
    }
  }, [isOpen, initialData])

  if (!isOpen) return null

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Admission Enquiry Submitted:', form)
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setForm(defaultForm)
    onClose()
  }

  return (
    <div className="enquiry-modal-overlay" onClick={handleClose}>
      <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* HEADER */}
        <div className="enquiry-modal-header">
          <div>
            <span className="section-label">
              {isMarathi ? 'प्रवेश चौकशी' : 'ADMISSION ENQUIRY'}
            </span>
            <h2>
              {isMarathi ? 'बॅच चौकशी अर्ज' : 'Batch Admission Enquiry'}
            </h2>
            <p>
              {isMarathi
                ? 'तुमचे तपशील भरा, आमचे समुपदेशक लवकरच तुमच्याशी संपर्क साधतील.'
                : 'Share your details and our academic counsellor will get in touch with you.'}
            </p>
          </div>

          <button
            type="button"
            className="enquiry-modal-close"
            onClick={handleClose}
            aria-label="Close enquiry form"
          >
            <X size={20} />
          </button>
        </div>

        {/* BODY / FORM */}
        {submitted ? (
          <div className="enquiry-success-box">
            <div className="enquiry-success-icon">
              <CheckCircle2 size={32} />
            </div>
            <h3>{isMarathi ? 'चौकशी यशस्वीरीत्या नोंदवली गेली!' : 'Enquiry Received!'}</h3>
            <p>
              {isMarathi
                ? 'लवकरच आमची टीम तुमच्या पसंतीच्या बॅच संदर्भात मार्गदर्शन करेल.'
                : 'Thank you. Our team will contact you shortly with full batch and fee details.'}
            </p>
            <button type="button" className="button button-primary" onClick={handleClose}>
              {isMarathi ? 'बंद करा' : 'Close'}
            </button>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="enquiry-form-grid">
              
              {/* NAME */}
              <div className="enquiry-field">
                <label htmlFor="enquiry-name">
                  {isMarathi ? 'पूर्ण नाव' : 'Full Name'} *
                </label>
                <input
                  id="enquiry-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={isMarathi ? 'तुमचे नाव प्रविष्ट करा' : 'Enter your name'}
                  required
                />
              </div>

              {/* PHONE */}
              <div className="enquiry-field">
                <label htmlFor="enquiry-phone">
                  {isMarathi ? 'मोबाईल नंबर' : 'Phone Number'} *
                </label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="enquiry-field">
                <label htmlFor="enquiry-email">
                  {isMarathi ? 'ई-मेल (ऐच्छिक)' : 'Email Address'}
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              {/* COURSE */}
              <div className="enquiry-field">
                <label htmlFor="enquiry-course">
                  {isMarathi ? 'निवडलेला अभ्यासक्रम' : 'Selected Course'} *
                </label>
                <select
                  id="enquiry-course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">{isMarathi ? 'अभ्यासक्रम निवडा' : 'Select Course'}</option>
                  <option value="UPSC">UPSC</option>
                  <option value="MPSC">MPSC</option>
                  <option value="Banking">Banking</option>
                </select>
              </div>

              {/* MODE */}
              <div className="enquiry-field">
                <label htmlFor="enquiry-mode">
                  {isMarathi ? 'अध्ययन पद्धती' : 'Learning Mode'} *
                </label>
                <select
                  id="enquiry-mode"
                  name="mode"
                  value={form.mode}
                  onChange={handleChange}
                  required
                >
                  <option value="">{isMarathi ? 'पद्धत निवडा' : 'Select Mode'}</option>
                  <option value="Offline">{isMarathi ? 'ऑफलाइन (Offline)' : 'Offline Classroom'}</option>
                  <option value="Online">{isMarathi ? 'ऑनलाइन (Online)' : 'Online Live'}</option>
                </select>
              </div>

            </div>

            {/* MESSAGE */}
            <div className="enquiry-field full-span">
              <label htmlFor="enquiry-message">
                {isMarathi ? 'काही प्रश्न किंवा संदेश (ऐच्छिक)' : 'Message / Specific Queries'}
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={
                  isMarathi
                    ? 'बॅच वेळ, फी किंवा इतर शंका येथे विचारू शकता...'
                    : 'Ask about batch timings, fees, or study material...'
                }
                rows="3"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="button button-primary enquiry-submit">
              {isMarathi ? 'चौकशी सादर करा' : 'Submit Batch Enquiry'}
              <ArrowUpRight size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}