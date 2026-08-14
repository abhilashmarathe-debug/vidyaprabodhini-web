import { useState } from 'react'
import { X, ArrowUpRight } from 'lucide-react'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  course: '',
  message: '',
}

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm)

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

    console.log('Admission enquiry:', form)

    // Later:
    // Supabase / CRM submission will be added here.

    setForm(initialForm)
    onClose()
  }

  return (
    <div
      className="enquiry-modal-overlay"
      onClick={onClose}
    >
      <div
        className="enquiry-modal"
        onClick={(event) => event.stopPropagation()}
      >

        {/* HEADER */}

        <div className="enquiry-modal-header">

          <div>
            <span className="section-label">
              VIDYAPROBODHINI
            </span>

            <h2>
              Admission enquiry
            </h2>

            <p>
              Tell us a little about yourself and our
              team will get back to you.
            </p>
          </div>

          <button
            type="button"
            className="enquiry-modal-close"
            onClick={onClose}
            aria-label="Close enquiry form"
          >
            <X size={20} />
          </button>

        </div>


        {/* FORM */}

        <form
          className="enquiry-form"
          onSubmit={handleSubmit}
        >

          <div className="enquiry-form-grid">

            {/* NAME */}

            <div className="enquiry-field">

              <label htmlFor="enquiry-name">
                Full name
              </label>

              <input
                id="enquiry-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>


            {/* PHONE */}

            <div className="enquiry-field">

              <label htmlFor="enquiry-phone">
                Phone number
              </label>

              <input
                id="enquiry-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />

            </div>


            {/* EMAIL */}

            <div className="enquiry-field">

              <label htmlFor="enquiry-email">
                Email address
              </label>

              <input
                id="enquiry-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

            </div>


            {/* COURSE */}

            <div className="enquiry-field">

              <label htmlFor="enquiry-course">
                Interested course
              </label>

              <select
                id="enquiry-course"
                name="course"
                value={form.course}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select a course
                </option>

                <option value="UPSC">
                  UPSC
                </option>

                <option value="MPSC">
                  MPSC
                </option>

                <option value="Banking">
                  Banking
                </option>

                <option value="Saralseva">
                  Saralseva
                </option>

              </select>

            </div>

          </div>


          {/* MESSAGE */}

          <div className="enquiry-field">

            <label htmlFor="enquiry-message">
              Message
            </label>

            <textarea
              id="enquiry-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what you would like to know..."
              rows="4"
            />

          </div>


          {/* SUBMIT */}

          <button
            type="submit"
            className="button enquiry-submit"
          >
            Submit enquiry
            <ArrowUpRight size={16} />
          </button>

        </form>

      </div>
    </div>
  )
}