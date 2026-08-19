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

        <section className="legal-section">
          <h2>{isMarathi ? '१. माहिती संकलन' : '1. Information We Collect'}</h2>
          <p>
            {isMarathi
              ? 'जेव्हा तुम्ही प्रवेश चौकशी फॉर्म भरता किंवा आमच्याशी संपर्क साधता, तेव्हा आम्ही तुमचे नाव, मोबाईल नंबर आणि ईमेल संकलित करतो.'
              : 'We collect personal information such as your name, mobile number, and email address when you submit an admission enquiry or contact us.'}
          </p>
        </section>

        <section className="legal-section">
          <h2>{isMarathi ? '२. माहितीचा वापर' : '2. How We Use Your Information'}</h2>
          <p>
            {isMarathi
              ? 'तुमची माहिती केवळ प्रवेश प्रक्रिया, बॅच अपडेट्स आणि शैक्षणिक मार्गदर्शनासाठी वापरली जाते.'
              : 'Your information is used strictly for processing admission inquiries, sending batch updates, and providing academic counseling.'}
          </p>
        </section>

        <section className="legal-section">
          <h2>{isMarathi ? '३. डेटा सुरक्षा' : '3. Data Security'}</h2>
          <p>
            {isMarathi
              ? 'आम्ही तुमच्या वैयक्तिक माहितीची सुरक्षा सुनिश्चित करण्यासाठी योग्य सुरक्षा उपाय लागू करतो.'
              : 'We implement robust security measures to maintain the safety of your personal information.'}
          </p>
        </section>
      </div>
    </main>
  )
}