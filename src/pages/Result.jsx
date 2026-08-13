import { ArrowUpRight } from 'lucide-react'

const achievements = [
  {
    id: 1,
    image: 'src/assets/result/gal2.jpg',
    title: 'Vidyaprabodhini Achievement',
    source: 'Newspaper Coverage',
  },
  {
    id: 2,
    image: 'src/assets/result/gall1.jpg',
    title: 'Vidyaprabodhini Achievement',
    source: 'Newspaper Coverage',
  },
  {
    id: 3,
    image: 'src/assets/result/photo_2022-06-20_12-24-02.jpg',
    title: 'Vidyaprabodhini Achievement',
    source: 'Newspaper Coverage',
  },
  {
    id: 4,
    image: 'src/assets/result/photo_2022-06-20_12-26-41.jpg',
    title: 'Vidyaprabodhini Achievement',
    source: 'Newspaper Coverage',
  },
  {
    id: 5,
    image: 'src/assets/result/photo_2022-06-20_12-26-45.jpg',
    title: 'Vidyaprabodhini Achievement',
    source: 'Newspaper Coverage',
  },
  {
    id: 6,
    image: 'src/assets/result/photo_2022-06-20_12-26-52.jpg',
    title: 'Vidyaprabodhini Achievement',
    source: 'Newspaper Coverage',
  },
  {
    id: 7,
    image: 'src/assets/result/photo_2022-06-20_12-26-56.jpg',
    title: 'Vidyaprabodhini Achievement',
    source: 'Newspaper Coverage',
  },
  {
    id: 8,
    image: 'src/assets/result/result5.jpg',
    title: 'Vidyaprabodhini Achievement',
    source: 'Newspaper Coverage',
  },
  {
    id: 9,
    image: 'src/assets/result/resultgal5.jpg',
    title: 'Vidyaprabodhini Achievement',
    source: 'Newspaper Coverage',
  },
]

export default function Result() {
  return (
    <main className="results-page">

      {/* HERO */}

      <section className="results-hero">

        <div className="container results-hero-grid">

          <div>

            <div className="eyebrow">
              <span className="" />
              Results & Achievements
            </div>

            <h1>
              Results that
              <br />
              speak for
              <br />
              themselves.
            </h1>

          </div>

          <div className="results-hero-copy">

            <p>
              A look at Vidyaprabodhini's achievements,
              results and recognition through the years.
            </p>

          </div>

        </div>

      </section>


      {/* ACHIEVEMENTS */}

      <section className="results-gallery">

        <div className="container">

          <div className="results-gallery-header">

            <div>

              <span className="section-label">
                ACHIEVEMENTS
              </span>

              <h2>
                In the news.
              </h2>

            </div>

            <p>
              Selected newspaper coverage and achievement
              stories from Vidyaprabodhini.
            </p>

          </div>


          {/* MASONRY */}

          <div className="results-masonry">

            {achievements.map((item) => (

              <article
                className="result-item"
                key={item.id}
              >

                <div className="result-image-wrap">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                </div>


                <div className="result-meta">

                  <div>

                    <span>
                      {item.source}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                  </div>

                  <ArrowUpRight size={15} />

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="results-cta">

        <div className="container results-cta-inner">

          <div>

            <span className="section-label">
              VIDYAPROBODHINI
            </span>

            <h2>
              Your preparation.
              <br />
              Your result.
            </h2>

          </div>

          <a
            href="/admission"
            className="button button-primary"
          >
            Start your preparation
            <ArrowUpRight size={16} />
          </a>

        </div>

      </section>

    </main>
  )
}