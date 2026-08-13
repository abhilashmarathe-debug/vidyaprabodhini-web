import { ArrowUpRight, X } from 'lucide-react'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    image: 'src/assets/gallery/_MG_3307.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 2,
    image: 'src/assets/gallery/_MG_3366.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 3,
    image: 'src/assets/gallery/_MG_3379.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 4,
    image: 'src/assets/gallery/_MG_3381.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 5,
    image: 'src/assets/gallery/_MG_3412.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 6,
    image: 'src/assets/gallery/20170609230050_IMG_6178.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 7,
    image: 'src/assets/gallery/20170609231218_IMG_6189.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 8,
    image: 'src/assets/gallery/20170610011803_IMG_6245.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 9,
    image: 'src/assets/gallery/DSC_0001.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 10,
    image: 'src/assets/gallery/DSC_0468.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 11,
    image: 'src/assets/gallery/DSC_0473.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 12,
    image: 'src/assets/gallery/IMG_1088.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 13,
    image: 'src/assets/gallery/IMG_1131.jpg',
    title: 'Vidyaprabodhini',
  },
  {
    id: 14,
    image: 'src/assets/gallery/IMG_3302 (1).jpg',
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
              <span className="" />
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

