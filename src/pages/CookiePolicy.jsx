import { useLanguage } from '../components/LanguageContext.jsx'

export default function CookiePolicy() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  return (
    <main className="legal-page">
      <div className="container legal-container">
        <h1>{isMarathi ? 'कुकी धोरण' : 'Cookie Policy'}</h1>
        <p className="legal-updated">
          {isMarathi ? 'शेवटचे अद्यतन: ऑगस्ट २०२६' : 'Last updated: August 2026'}
        </p>

        <section className="legal-section">
          <h2>{isMarathi ? '१. कुकीज म्हणजे काय?' : '1. What Are Cookies?'}</h2>
          <p>
            {isMarathi
              ? 'कुकीज या छोट्या मजकूर फाइल्स असतात ज्या तुम्ही वेबसाइटला भेट देता तेव्हा तुमच्या डिव्हाइसवर जतन केल्या जातात.'
              : 'Cookies are small text files stored on your device when you visit a website to enhance your browsing experience.'}
          </p>
        </section>

        <section className="legal-section">
          <h2>{isMarathi ? '२. आम्ही कुकीज कशी वापरतो' : '2. How We Use Cookies'}</h2>
          <p>
            {isMarathi
              ? 'आम्ही ट्रॅफिक विश्लेषणासाठी आणि तुमची भाषा पसंती (इंग्रजी/मराठी) जपण्यासाठी कुकीज वापरतो.'
              : 'We use cookies to understand site traffic and remember your preferences, such as your selected language.'}
          </p>
        </section>

        <section className="legal-section">
          <h2>{isMarathi ? '३. कुकीज नियंत्रित करणे' : '3. Managing Cookies'}</h2>
          <p>
            {isMarathi
              ? 'तुम्ही तुमच्या ब्राउझर सेटिंग्जवरून कुकीज अक्षम किंवा डिलीट करू शकता.'
              : 'You can choose to disable or delete cookies through your browser settings at any time.'}
          </p>
        </section>
      </div>
    </main>
  )
}