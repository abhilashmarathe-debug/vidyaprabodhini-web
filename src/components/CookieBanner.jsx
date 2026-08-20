import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from './LanguageContext.jsx'

export default function CookieBanner() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('vidya_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('vidya_cookie_consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('vidya_cookie_consent', 'declined')
    setVisible(false)
  }

  const handleIgnore = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside className="cookie-banner" aria-label="Cookie Consent">
      <div className="cookie-banner-inner">
        <div className="cookie-text">
          <h3>{isMarathi ? '🍪 कुकीज वापर' : '🍪 We value your privacy'}</h3>
          <p>
            {isMarathi
              ? 'आम्ही तुमचा अनुभव सुधारण्यासाठी कुकीज वापरतो. आमचे '
              : 'We use cookies to improve your browsing experience and analyze site traffic. Read our '}
            <Link to="/cookie-policy">{isMarathi ? 'कुकी धोरण' : 'Cookie Policy'}</Link>.
          </p>
        </div>

        <div className="cookie-actions">
          <button type="button" className="cookie-btn decline" onClick={handleDecline}>
            {isMarathi ? 'नाकारा' : 'Decline'}
          </button>
          <button type="button" className="cookie-btn ignore" onClick={handleIgnore}>
            {isMarathi ? 'दुर्लक्ष करा' : 'Ignore'}
          </button>
          <button type="button" className="cookie-btn accept" onClick={handleAccept}>
            {isMarathi ? 'स्वीकारा' : 'Accept All'}
          </button>
        </div>
      </div>
    </aside>
  )
}