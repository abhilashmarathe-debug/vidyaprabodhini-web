import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Coaching', path: '/coaching'},
  { label: 'Admission', path: '/admission' },
  { label: 'Result', path: '/result' },
  { label: 'Gallery', path: '/gallery' },
]

const courses = [
  'UPSC',
  'MPSC',
  'Banking',
  'Saralseva',
]

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* CTA */}

      <section className="footer-cta">

        <div className="container footer-cta-inner">

          <div>
            <span className="section-label">
              VIDYAPROBODHINI
            </span>

            <h2>
              Your preparation
              <br />
              starts here.
            </h2>
          </div>

          <Link
            to="/admission"
            className="button footer-cta-button"
          >
            Enquire about admission
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </section>


      {/* MAIN FOOTER */}

      <div className="footer-main">

        <div className="container">

          <div className="footer-grid">

            {/* BRAND */}

            <div className="footer-brand">

              <Link
                to="/"
                className="footer-logo"
              >
                <img
                  src="src/assets/logo1.jpeg"
                  alt="Vidyaprabodhini Academy"
                />
              </Link>

              <p>
                स्पर्धा परीक्षा मार्गदर्शन केंद्र, कोल्हापूर
              </p>

              <p className="footer-description">
                Guidance and preparation for UPSC, MPSC,
                Banking and Saralseva competitive examinations.
              </p>


              {/* SOCIAL */}

              <div className="footer-socials">

                <a
                  href="#"
                  aria-label="Instagram"
                  onClick={(event) => event.preventDefault()}
                >
                  IG
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  onClick={(event) => event.preventDefault()}
                >
                  FB
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  onClick={(event) => event.preventDefault()}
                >
                  YT
                </a>

              </div>

            </div>


            {/* NAVIGATION */}

            <div className="footer-column">

              <span className="footer-column-title">
                NAVIGATION
              </span>

              <nav className="footer-links">

                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                ))}

              </nav>

            </div>


            {/* COURSES */}

            <div className="footer-column">

              <span className="footer-column-title">
                PREPARATION
              </span>

              <div className="footer-links">

                {courses.map((course) => (
                  <Link
                    key={course}
                    to="/batches"
                  >
                    {course}
                  </Link>
                ))}

              </div>

            </div>


            {/* CONTACT */}

            <div className="footer-column">

              <span className="footer-column-title">
                CONTACT
              </span>

              <div className="footer-contact">

                <p>
                  Vidyaprabodhini
                </p>

                <p>
                  Kolhapur, Maharashtra
                </p>

                <a href="mailto:info@vidyaprabodhini.in">
                  info@vidyaprabodhini.in
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM BAR */}

      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} Vidyaprabodhini.
            All rights reserved.
          </p>


          <p className="footer-credit">
            Designed by SkewX Technologies
          </p>

        </div>

      </div>

    </footer>
  )
}