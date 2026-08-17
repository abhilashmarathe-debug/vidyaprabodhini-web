import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/LanguageContext.jsx'

import gal2 from '../assets/result/gal2.jpg'
import gall1 from '../assets/result/gall1.jpg'
import photo1 from '../assets/result/photo_2022-06-20_12-24-02.jpg'
import photo2 from '../assets/result/photo_2022-06-20_12-26-41.jpg'
import photo3 from '../assets/result/photo_2022-06-20_12-26-45.jpg'
import photo4 from '../assets/result/photo_2022-06-20_12-26-52.jpg'
import photo5 from '../assets/result/photo_2022-06-20_12-26-56.jpg'
import result5 from '../assets/result/result5.jpg'

export default function Result() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  const text = isMarathi
    ? {
        hero: {
          eyebrow: 'निकाल आणि यश',
          title1: 'विश्वासार्ह',
          title2: 'निकाल.',
          title3: 'उज्वल यश.',
          description:
            'विद्याप्रबोधिनीचे स्पर्धा परीक्षांमधील यश, विद्यार्थ्यांचे निकाल आणि वर्षभरातील विविध वृत्तपत्रीय गौरव.',
        },
        gallery: {
          label: 'वृत्तपत्रांमधील यशोगाथा',
          title1: 'माध्यमांमध्ये',
          title2: 'विद्याप्रबोधिनी.',
          description:
            'विद्याप्रबोधिनीच्या विद्यार्थ्यांचे दैदीप्यमान यश आणि वृत्तपत्रांमध्ये प्रसिद्ध झालेली विशेष वृत्ते.',
          achievementTitle: 'विद्याप्रबोधिनी यश',
          coverageSource: 'वृत्तपत्र प्रसिद्धी',
        },
        cta: {
          label: 'विद्याप्रबोधिनी',
          title1: 'तुमची तयारी.',
          title2: 'तुमचे यश.',
          button: 'तयारी सुरू करा',
        },
      }
    : {
        hero: {
          eyebrow: 'Results & Achievements',
          title1: 'Results that',
          title2: 'speak for',
          title3: 'themselves.',
          description:
            "A look at Vidyaprabodhini's achievements, results and recognition through the years.",
        },
        gallery: {
          label: 'ACHIEVEMENTS',
          title1: 'In the',
          title2: 'news.',
          description:
            'Selected newspaper coverage and achievement stories from Vidyaprabodhini.',
          achievementTitle: 'Vidyaprabodhini Achievement',
          coverageSource: 'Newspaper Coverage',
        },
        cta: {
          label: 'VIDYAPRABODHINI',
          title1: 'Your preparation.',
          title2: 'Your result.',
          button: 'Start your preparation',
        },
      }

  const achievements = [
    { id: 1, image: gal2, title: text.gallery.achievementTitle, source: text.gallery.coverageSource },
    { id: 2, image: gall1, title: text.gallery.achievementTitle, source: text.gallery.coverageSource },
    { id: 3, image: photo1, title: text.gallery.achievementTitle, source: text.gallery.coverageSource },
    { id: 4, image: photo2, title: text.gallery.achievementTitle, source: text.gallery.coverageSource },
    { id: 5, image: photo3, title: text.gallery.achievementTitle, source: text.gallery.coverageSource },
    { id: 6, image: photo4, title: text.gallery.achievementTitle, source: text.gallery.coverageSource },
    { id: 7, image: photo5, title: text.gallery.achievementTitle, source: text.gallery.coverageSource },
    { id: 8, image: result5, title: text.gallery.achievementTitle, source: text.gallery.coverageSource },
  ]

  return (
    <main className="results-page">
      <section className="results-hero">
        <div className="container results-hero-grid">
          <div>
            <div className="eyebrow">
              <span className="" />
              {text.hero.eyebrow}
            </div>
            <h1>
              {text.hero.title1}
              <br />
              {text.hero.title2}
              <br />
              {text.hero.title3}
            </h1>
          </div>
          <div className="results-hero-copy">
            <p>{text.hero.description}</p>
          </div>
        </div>
      </section>

      <section className="results-gallery">
        <div className="container">
          <div className="results-gallery-header">
            <div>
              <span className="section-label">{text.gallery.label}</span>
              <h2>
                {text.gallery.title1}
                <br />
                {text.gallery.title2}
              </h2>
            </div>
            <p>{text.gallery.description}</p>
          </div>

          <div className="results-masonry">
            {achievements.map((item) => (
              <article className="result-item" key={item.id}>
                <div className="result-image-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="result-meta">
                  <div>
                    <span>{item.source}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <ArrowUpRight size={15} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results-cta">
        <div className="container results-cta-inner">
          <div>
            <span className="section-label">{text.cta.label}</span>
            <h2>
              {text.cta.title1}
              <br />
              {text.cta.title2}
            </h2>
          </div>
          <Link to="/admission" className="button button-primary">
            {text.cta.button}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
