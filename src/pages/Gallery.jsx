import { ArrowUpRight, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/LanguageContext.jsx'

/* =========================================================
   ASSET IMPORTS
========================================================= */

import mg3307 from '../assets/gallery/_MG_3307.jpg'
import mg3366 from '../assets/gallery/_MG_3366.jpg'
import mg3379 from '../assets/gallery/_MG_3379.jpg'
import mg3381 from '../assets/gallery/_MG_3381.jpg'
import mg3412 from '../assets/gallery/_MG_3412.jpg'
import img6178 from '../assets/gallery/20170609230050_IMG_6178.jpg'
import img6189 from '../assets/gallery/20170609231218_IMG_6189.jpg'
import img6245 from '../assets/gallery/20170610011803_IMG_6245.jpg'
import dsc0001 from '../assets/gallery/DSC_0001.jpg'
import dsc0468 from '../assets/gallery/DSC_0468.jpg'
import dsc0473 from '../assets/gallery/DSC_0473.jpg'
import img1088 from '../assets/gallery/IMG_1088.jpg'
import img1131 from '../assets/gallery/IMG_1131.jpg'

export default function Gallery() {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'
  const [selectedImage, setSelectedImage] = useState(null)

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const text = isMarathi
    ? {
        hero: {
          title1: 'विद्याप्रबोधिनीचे',
          title2: 'काही क्षण.',
          description:
            'विद्याप्रबोधिनीतील वर्गखोल्या, उपक्रम, कार्यक्रम, प्राध्यापक आणि विद्यार्थ्यांच्या प्रवासाची एक सुंदर झलक.',
        },
        gallery: {
          label: 'आमचे छायाचित्र दालन',
          title1: 'विद्याप्रबोधिनी',
          title2: 'अंतरंग.',
          photosCount: 'छायाचित्रे',
          view: 'पहा',
          imageTitle: 'विद्याप्रबोधिनी',
          closeAria: 'प्रतिमा बंद करा',
        },
        cta: {
          label: 'विद्याप्रबोधिनी',
          title1: 'शिका.',
          title2: 'तयारी करा.',
          title3: 'घडवा.',
          button: 'प्रवेशाबद्दल चौकशी करा',
        },
      }
    : {
        hero: {
          title1: 'Moments from',
          title2: 'Vidyaprabodhini.',
          description:
            'A glimpse into the classrooms, events, activities and people that make Vidyaprabodhini what it is.',
        },
        gallery: {
          label: 'OUR GALLERY',
          title1: 'Inside',
          title2: 'Vidyaprabodhini.',
          photosCount: 'PHOTOS',
          view: 'View',
          imageTitle: 'Vidyaprabodhini',
          closeAria: 'Close image',
        },
        cta: {
          label: 'VIDYAPRABODHINI',
          title1: 'Learn.',
          title2: 'Prepare.',
          title3: 'Grow.',
          button: 'Enquire about admission',
        },
      }

  /* =========================================================
     GALLERY IMAGES DATA
  ========================================================= */

  const galleryImages = [
    {
      id: 1,
      image: mg3307,
      title: text.gallery.imageTitle,
    },
    {
      id: 2,
      image: mg3366,
      title: text.gallery.imageTitle,
    },
    {
      id: 3,
      image: mg3379,
      title: text.gallery.imageTitle,
    },
    {
      id: 4,
      image: mg3381,
      title: text.gallery.imageTitle,
    },
    {
      id: 5,
      image: mg3412,
      title: text.gallery.imageTitle,
    },
    {
      id: 6,
      image: img6178,
      title: text.gallery.imageTitle,
    },
    {
      id: 7,
      image: img6189,
      title: text.gallery.imageTitle,
    },
    {
      id: 8,
      image: img6245,
      title: text.gallery.imageTitle,
    },
    {
      id: 9,
      image: dsc0001,
      title: text.gallery.imageTitle,
    },
    {
      id: 10,
      image: dsc0468,
      title: text.gallery.imageTitle,
    },
    {
      id: 11,
      image: dsc0473,
      title: text.gallery.imageTitle,
    },
    {
      id: 12,
      image: img1088,
      title: text.gallery.imageTitle,
    },
    {
      id: 13,
      image: img1131,
      title: text.gallery.imageTitle,
    },
  ]

  return (
    <main className="gallery-page">
      {/* HERO */}
      <section className="gallery-hero">
        <div className="container gallery-hero-grid">
          <div>
            <h1 style={{ margin: '0 0 20px', fontSize: 'clamp(36px, 5.5vw, 64px)', lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '750' }}>
              {text.hero.title1}
              <br />
              {text.hero.title2}
            </h1>
          </div>

          <div className="gallery-hero-copy" style={{ maxWidth: '440px' }}>
            <p style={{ margin: '0 0 24px', fontSize: '16px', lineHeight: '1.6' }}>
              {text.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-heading">
            <div>
              <span className="section-label">
                {text.gallery.label}
              </span>

              <h2>
                {text.gallery.title1}
                <br />
                {text.gallery.title2}
              </h2>
            </div>

            <span className="gallery-count">
              {String(galleryImages.length).padStart(2, '0')} {text.gallery.photosCount}
            </span>
          </div>

          <div className="gallery-masonry">
            {galleryImages.map((item, index) => (
              <article
                className="gallery-item"
                key={item.id}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />

                  <div className="gallery-image-overlay">
                    <span>
                      {text.gallery.view}
                    </span>

                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="gallery-item-meta">
                  <span>
                    {String(item.id).padStart(2, '0')}
                  </span>

                  <p>
                    {item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label={text.gallery.closeAria}
          >
            <X size={20} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">
              <span>
                {selectedImage.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}