import { useState } from 'react'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'

import { useAuth } from '../../lib/auth'

export default function Login() {

  const navigate = useNavigate()

  const {
    signIn,
    session,
    loading,
  } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] =
    useState(false)

  const [error, setError] = useState('')
  const [submitting, setSubmitting] =
    useState(false)


  if (loading) {
    return (
      <div className="crm-auth-loading">
        Loading...
      </div>
    )
  }


  if (session) {
    return (
      <Navigate
        to="/crm"
        replace
      />
    )
  }


  const handleSubmit = async (event) => {

    event.preventDefault()

    setError('')

    if (!email || !password) {
      setError(
        'Please enter your email and password.'
      )

      return
    }

    setSubmitting(true)

    const {
      error: loginError,
    } = await signIn(
      email.trim(),
      password
    )

    setSubmitting(false)

    if (loginError) {

      setError(
        'Invalid email or password.'
      )

      return
    }

    navigate('/crm')
  }


  return (
    <main className="crm-login">

      <div className="crm-login-shell">


        {/* LEFT */}

        <section className="crm-login-intro">

          <div className="crm-brand">

            <div className="crm-brand-mark">
              VP
            </div>

            <div>
              <strong>
                Vidyaprabodhini
              </strong>

              <span>
                CRM
              </span>
            </div>

          </div>


          <div className="crm-intro-content">

            <span className="crm-overline">
              INTERNAL PLATFORM
            </span>

            <h1>
              Manage every
              <br />
              enquiry.
            </h1>

            <p>
              A centralized workspace for managing
              student enquiries, counsellor follow-ups
              and admissions.
            </p>

          </div>


          <div className="crm-intro-footer">

            <span>
              Vidyaprabodhini Academy
            </span>

            <span>
              Kolhapur
            </span>

          </div>

        </section>


        {/* RIGHT */}

        <section className="crm-login-panel">

          <div className="crm-login-form-wrapper">

            <span className="crm-overline">
              CRM ACCESS
            </span>

            <h2>
              Welcome back.
            </h2>

            <p className="crm-login-description">
              Sign in to continue to your workspace.
            </p>


            <form
              onSubmit={handleSubmit}
              className="crm-login-form"
            >

              <div className="crm-field">

                <label htmlFor="email">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  autoComplete="email"
                />

              </div>


              <div className="crm-field">

                <label htmlFor="password">
                  Password
                </label>

                <div className="crm-password-field">

                  <input
                    id="password"
                    type={
                      showPassword
                        ? 'text'
                        : 'password'
                    }
                    value={password}
                    onChange={(event) =>
                      setPassword(
                        event.target.value
                      )
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (value) => !value
                      )
                    }
                    aria-label={
                      showPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

              </div>


              {error && (
                <div className="crm-login-error">
                  {error}
                </div>
              )}


              <button
                type="submit"
                className="crm-login-submit"
                disabled={submitting}
              >

                {submitting
                  ? 'Signing in...'
                  : 'Sign in'}

                {!submitting && (
                  <ArrowRight size={17} />
                )}

              </button>

            </form>


            <div className="crm-login-note">
              Authorized Vidyaprabodhini staff only.
            </div>

          </div>

        </section>

      </div>

    </main>
  )
}