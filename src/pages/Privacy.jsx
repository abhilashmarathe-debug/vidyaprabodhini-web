import { useLanguage } from '../components/LanguageContext.jsx'

export default function Privacy() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  return (
    <main className="legal-page">
      <div className="container legal-container">
        <h1>{isMarathi ? 'गोपनीयता धोरण' : 'Privacy Policy'}</h1>
        <p className="legal-updated">
          {isMarathi ? 'शेवटचे अद्यतन: ऑगस्ट २०२६' : 'Last updated: August 2026'}
        </p>

        {/* 1. Introduction */}
        <section className="legal-section">
          <h2>{isMarathi ? '१. प्रस्तावना' : '1. Introduction'}</h2>
          <p>
            {isMarathi
              ? 'विद्याप्रबोधिनी अकॅडमी ("आम्ही", "आमचे" किंवा "संस्था") आपल्या विद्यार्थ्यांच्या व वापरकर्त्यांच्या वैयक्तिक माहितीच्या गोपनीयतेचा आदर करते. आपण आमच्या वेबसाइटला भेट देता किंवा सेवांचा वापर करता तेव्हा आपली माहिती कशी संकलित, वापरली व संरक्षित केली जाते हे या धोरणात स्पष्ट केले आहे.'
              : 'Vidyaprabodhini Academy ("we", "our", or "the Institute") is committed to protecting the privacy of our students, aspirants, and visitors. This Privacy Policy explains how your information is collected, used, disclosed, and safeguarded when you visit our website or interact with our services.'}
          </p>
        </section>

        {/* 2. Information Collected */}
        <section className="legal-section">
          <h2>{isMarathi ? '२. आम्ही कोणती माहिती संकलित करतो?' : '2. Information We Collect'}</h2>
          <p>
            {isMarathi
              ? 'आमच्या वेबसाइटवरील फॉर्म्स, थेट संपर्क किंवा प्रवेश प्रक्रियेदरम्यान आम्ही खालील माहिती संकलित करू शकतो:'
              : 'We collect information that you voluntarily provide to us when expressing an interest in our courses, submitting an inquiry, or enrolling in our programs:'}
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px', color: 'var(--muted)', fontSize: '14px', lineHeight: '1.7' }}>
            <li>
              <strong>{isMarathi ? 'वैयक्तिक ओळख माहिती: ' : 'Personal Identifiers: '}</strong>
              {isMarathi
                ? 'नाव, मोबाईल नंबर, ई-मेल पत्ता आणि शहर.'
                : 'Full name, phone/mobile number, email address, and city of residence.'}
            </li>
            <li>
              <strong>{isMarathi ? 'शैक्षणिक पसंती: ' : 'Academic Preferences: '}</strong>
              {isMarathi
                ? 'लक्ष्य परीक्षा (UPSC, MPSC, Banking), पसंतीचे माध्यम (ऑफलाइन/ऑनलाइन) आणि बॅच निवडी.'
                : 'Target examination tracks (UPSC, MPSC, Banking), learning mode preference (Offline / Online), and batch timing preferences.'}
            </li>
            <li>
              <strong>{isMarathi ? 'तांत्रिक व ब्राऊझिंग डेटा: ' : 'Technical & Usage Data: '}</strong>
              {isMarathi
                ? 'IP ॲड्रेस, ब्राउझरचा प्रकार, डिव्हाइस माहिती आणि साइटवरील भेटीचा वेळ (अ‍ॅनालिटिक्सद्वारे).'
                : 'IP addresses, browser type, device information, operating system, and interaction analytics to optimize performance.'}
            </li>
          </ul>
        </section>

        {/* 3. Usage of Information */}
        <section className="legal-section">
          <h2>{isMarathi ? '३. माहितीचा वापर' : '3. How We Use Your Information'}</h2>
          <p>
            {isMarathi
              ? 'संकलित केलेली माहिती आम्ही खालील उद्देशांसाठी वापरतो:'
              : 'We process your information for legitimate educational and administrative purposes, including:'}
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px', color: 'var(--muted)', fontSize: '14px', lineHeight: '1.7' }}>
            <li>
              {isMarathi
                ? 'प्रवेश चौकशीवर प्रक्रिया करणे आणि संबंधित बॅच व अभ्यासक्रमाचे समुपदेशन देणे.'
                : 'Processing admission inquiries, verifying batch availability, and providing personalized academic guidance.'}
            </li>
            <li>
              {isMarathi
                ? 'परीक्षेच्या सूचना, नवीन बॅचचे वेळापत्रक, चालू घडामोडी आणि मोफत कार्यशाळांचे अपडेट्स पाठवणे.'
                : 'Communicating exam notifications, schedule updates, study material releases, and scholarship announcements.'}
            </li>
            <li>
              {isMarathi
                ? 'आमची अधिकृत मोबाइल ॲप आणि ऑनलाइन टेस्ट सिरीज सेवा सुरळीतपणे पुरवणे.'
                : 'Facilitating student access to our mobile test series platform and digital learning modules.'}
            </li>
            <li>
              {isMarathi
                ? 'वेबसाइटची गुणवत्ता सुधारणे आणि अनधिकृत प्रवेशास प्रतिबंध करणे.'
                : 'Enhancing website usability, ensuring security, and preventing fraudulent activities.'}
            </li>
          </ul>
        </section>

        {/* 4. Data Sharing & Third Parties */}
        <section className="legal-section">
          <h2>{isMarathi ? '४. माहितीची देवाणघेवाण व प्रकटीकरण' : '4. Information Sharing & Third Parties'}</h2>
          <p>
            {isMarathi
              ? 'आम्ही तुमचा वैयक्तिक डेटा कोणत्याही त्रयस्थ संस्थेला किंवा मार्केटिंग कंपन्यांना विकत नाही किंवा भाड्याने देत नाही. तुमची माहिती केवळ आमच्या अधिकृत शैक्षणिक व तांत्रिक सेवा पुरवठादारांसोबत (उदा. SMS/WhatsApp गेटवे, क्लाउड सर्व्हर्स) कठोर गोपनीयता करारांतर्गतच सामायिक केली जाते.'
              : 'We do not sell, rent, trade, or monetize your personal information to third parties. We may share data solely with trusted service providers (such as communication gateways, cloud hosting, and technical partners) under strict confidentiality agreements, or when required by legal authorities.'}
          </p>
        </section>

        {/* 5. Data Security & Storage */}
        <section className="legal-section">
          <h2>{isMarathi ? '५. डेटा सुरक्षा आणि साठवणूक' : '5. Data Security & Retention'}</h2>
          <p>
            {isMarathi
              ? 'आम्ही आपल्या माहितीचे अनधिकृत प्रवेश, वापर किंवा गळतीपासून रक्षण करण्यासाठी योग्य तांत्रिक आणि प्रशासकीय सुरक्षा उपाय (SSL एन्क्रिप्शन, सुरक्षित सर्व्हर्स आणि मर्यादित ॲक्सेस) राबवतो. प्रवेश व शैक्षणिक हेतू पूर्ण होईपर्यंत किंवा कायद्यानुसार आवश्यक असेपर्यंतच डेटा जतन केला जातो.'
              : 'We employ organizational and technical security measures—including SSL encryption, restricted administrative access, and secure database standards—to safeguard your personal data. We retain student records only as long as necessary to fulfill academic, counseling, or regulatory requirements.'}
          </p>
        </section>

        {/* 6. Cookies & Tracking */}
        <section className="legal-section">
          <h2>{isMarathi ? '६. कुकीज आणि ट्रॅकिंग तंत्रज्ञान' : '6. Cookies & Tracking Technologies'}</h2>
          <p>
            {isMarathi
              ? 'आमची वेबसाइट भाषा पसंती (इंग्रजी/मराठी) जपण्यासाठी आणि वापरकर्त्याचा अनुभव सुधारण्यासाठी कुकीज वापरते. आपण आपल्या ब्राउझर सेटिंग्जमधून कुकीज नियंत्रित करू शकता. अधिक माहितीसाठी आमचे कुकी धोरण तपासा.'
              : 'We use cookies and similar technologies to remember your preferences (such as selected language) and understand site traffic patterns. You can manage or disable cookies via your browser settings. For more details, please review our Cookie Policy.'}
          </p>
        </section>

        {/* 7. Your Rights */}
        <section className="legal-section">
          <h2>{isMarathi ? '७. तुमचे अधिकार' : '7. Your Privacy Rights'}</h2>
          <p>
            {isMarathi
              ? 'आपल्याला आपल्या वैयक्तिक माहितीत बदल करण्याचा, सुधारणा करण्याचा किंवा आमचे अपडेट्स व संदेश थांबवण्याची (Unsubscribe) विनंती करण्याचा पूर्ण अधिकार आहे.'
              : 'You have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or opt out of non-essential communications and counseling follow-ups at any time.'}
          </p>
        </section>

        {/* 8. Contact Information */}
        <section className="legal-section">
          <h2>{isMarathi ? '८. संपर्क आणि चौकशी' : '8. Contact Information'}</h2>
          <p>
            {isMarathi
              ? 'या गोपनीयता धोरणासंदर्भात काही प्रश्न किंवा तक्रारी असल्यास आपण आमच्याशी खालील पत्त्यावर किंवा ई-मेलद्वारे संपर्क साधू शकता:'
              : 'If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us at:'}
          </p>
          <div style={{ marginTop: '10px', fontSize: '13.5px', color: 'var(--muted)', lineHeight: '1.6' }}>
            <p style={{ fontWeight: '700', color: 'var(--ink)' }}>
              {isMarathi ? 'विद्याप्रबोधिनी अकॅडमी' : 'Vidyaprabodhini Academy'}
            </p>
            <p>
              {isMarathi
                ? '४ थी गल्ली, शहाजी लॉ कॉलेज समोर, १०५० ई वॉर्ड, शाहूपुरी, कोल्हापूर, महाराष्ट्र ४१६००१'
                : '4th Ln, opp. Shahaji Law College, 1050 E Ward, Shahupuri, Kolhapur, Maharashtra 416001'}
            </p>
            <p>
              {isMarathi ? 'ई-मेल: ' : 'Email: '}
              <a href="mailto:vidyaprabodhinidigital@gmail.com" style={{ color: 'var(--brand)' }}>
                vidyaprabodhinidigital@gmail.com
              </a>
            </p>
            <p>
              {isMarathi ? 'फोन: ' : 'Phone: '}
              <a href="tel:9545387161" style={{ color: 'var(--brand)' }}>
                +91 95453 87161
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}