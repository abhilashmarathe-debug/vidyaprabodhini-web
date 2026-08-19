import { useLanguage } from '../components/LanguageContext.jsx'

export default function Terms() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  return (
    <main className="legal-page">
      <div className="container legal-container">
        <h1>{isMarathi ? 'अटी आणि शर्ती' : 'Terms and Conditions'}</h1>
        <p className="legal-updated">
          {isMarathi ? 'शेवटचे अद्यतन: ऑगस्ट २०२६' : 'Last updated: August 2026'}
        </p>

        <section className="legal-section">
          <h2>{isMarathi ? '१. अटींचा स्वीकार' : '1. Acceptance of Terms'}</h2>
          <p>
            {isMarathi
              ? 'विद्याप्रबोधिनी ॲकॅडमीच्या वेबसाइटला भेट देऊन किंवा आमच्या सेवा वापरून, तुम्ही या अटी आणि शर्तींना बंधिअस असण्यास सहमत आहात.'
              : 'By accessing or using the Vidyaprabodhini Academy website and services, you agree to be bound by these Terms and Conditions.'}
          </p>
        </section>

        <section className="legal-section">
          <h2>{isMarathi ? '२. सेवांचे स्वरूप' : '2. Services Provided'}</h2>
          <p>
            {isMarathi
              ? 'आम्ही UPSC, MPSC आणि Banking स्पर्धा परीक्षांसाठी शैक्षणिक मार्गदर्शन, वर्ग आणि टेस्ट सिरीज प्रदान करतो.'
              : 'We provide educational coaching, classrooms, and test series prep for competitive examinations including UPSC, MPSC, and Banking.'}
          </p>
        </section>

        <section className="legal-section">
          <h2>{isMarathi ? '३. बૌद्धिक संपदा' : '3. Intellectual Property'}</h2>
          <p>
            {isMarathi
              ? 'या वेबसाइटवरील सर्व अभ्यास साहित्य, लोगो, ग्राफिक्स आणि मजकूर विद्याप्रबोधिनीची मालमत्ता आहे.'
              : 'All study materials, logos, graphics, and text on this website are the proprietary property of Vidyaprabodhini Academy.'}
          </p>
        </section>
      </div>
    </main>
  )
}