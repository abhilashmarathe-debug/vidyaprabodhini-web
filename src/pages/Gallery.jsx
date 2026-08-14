import { ArrowUpRight, X } from 'lucide-react'
import { useState } from 'react'

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

const galleryImages = [
  {
    id: 1,
    image: mg3307,
    title: 'Vidyaprabodhini',
  },
  {
    id: 2,
    image: mg3366,
    title: 'Vidyaprabodhini',
  },
  {
    id: 3,
    image: mg3379,
    title: 'Vidyaprabodhini',
  },
  {
    id: 4,
    image: mg3381,
    title: 'Vidyaprabodhini',
  },
  {
    id: 5,
    image: mg3412,
    title: 'Vidyaprabodhini',
  },
  {
    id: 6,
    image: img6178,
    title: 'Vidyaprabodhini',
  },
  {
    id: 7,
    image: img6189,
    title: 'Vidyaprabodhini',
  },
  {
    id: 8,
    image: img6245,
    title: 'Vidyaprabodhini',
  },
  {
    id: 9,
    image: dsc0001,
    title: 'Vidyaprabodhini',
  },
  {
    id: 10,
    image: dsc0468,
    title: 'Vidyaprabodhini',
  },
  {
    id: 11,
    image: dsc0473,
    title: 'Vidyaprabodhini',
  },
  {
    id: 12,
    image: img1088,
    title: 'Vidyaprabodhini',
  },
  {
    id: 13,
    image: img1131,
    title: 'Vidyaprabodhini',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <main className="gallery-page">

      {/* HERO */}

      <section className="gallery-hero">

        <div className="container gallery-hero-grid">

          <div>

            <div className="eyebrow">
              <span />
              Photo Gallery
            </div>

            <h1>
              Moments from
              <br />
              Vidyaprabodhini.
            </h1>

          </div>

          <div className="gallery-hero-copy">

            <p>
              A glimpse into the classrooms, events,
              activities and people that make
              Vidyaprabodhini what it is.
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
                OUR GALLERY
              </span>

              <h2>
                Inside Vidyaprabodhini.
              </h2>

            </div>

            <span className="gallery-count">
              {String(galleryImages.length).padStart(2, '0')} PHOTOS
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
                      View
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


      {/* CTA */}

      <section className="gallery-cta">

        <div className="container gallery-cta-inner">

          <div>

            <span className="section-label">
              VIDYAPROBODHINI
            </span>

            <h2>
              Learn.
              <br />
              Prepare.
              <br />
              Grow.
            </h2>

          </div>

          <a
            href="/admission"
            className="button button-primary"
          >
            Enquire about admission
            <ArrowUpRight size={16} />
          </a>

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
            aria-label="Close image"
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