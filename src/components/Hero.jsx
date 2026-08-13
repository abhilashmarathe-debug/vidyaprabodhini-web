import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import slide6 from '../assets/slide6.jpg'
import slide2 from '../assets/slide2.jpg'
import slide7 from '../assets/slide7.jpg'

const programs = [
  {
    code: '01',
    name: 'UPSC',
    description: 'Civil Services Examination',
  },
  {
    code: '02',
    name: 'MPSC',
    description: 'Maharashtra Public Service Commission',
  },
  {
    code: '03',
    name: 'Banking',
    description: 'Banking & recruitment examinations',
  },
  {
    code: '04',
    name: 'Saralseva',
    description: 'Maharashtra government recruitment',
  },
]

const slides = [
  {
    image: slide6,
    eyebrow: 'Competitive examination preparation',
    title: (
      <>
        Serious preparation
        <br />
        for serious goals.
      </>
    ),
    description:
      'Structured preparation for UPSC, MPSC, Banking and Saralseva examinations with focused guidance for every stage of your journey.',
  },
  {
    image: slide2,
    eyebrow: 'VIDYAPROBODHINI ACADEMY',
    title: (
      <>
        Prepare with
        <br />
        purpose.
      </>
    ),
    description:
      'Build strong fundamentals, practice consistently and prepare with a clear strategy designed around your examination.',
  },
  {
    image: slide7,
    eyebrow: 'KOLHAPUR · MAHARASHTRA',
    title: (
      <>
        Your goal.
        <br />
        Our guidance.
      </>
    ),
    description:
      'A focused learning environment for aspirants preparing to take the next step towards their competitive examination goals.',
  },
]

export default function Hero({ onOpenChat }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    )
  }

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    )
  }

  const slide = slides[activeSlide]

  return (
    <section className="hero">

      {/* ==========================================
          BACKGROUND CAROUSEL
      ========================================== */}

      <div className="hero-slider">

        {slides.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt=""
            className={`hero-slide ${
              index === activeSlide ? 'active' : ''
            }`}
          />
        ))}

        <div className="hero-overlay" />

        {/* Decorative graphics */}
        <div className="hero-grid-pattern" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

      </div>


      {/* ==========================================
          DECORATIVE HERO MARK
      ========================================== */}

      <div className="hero-watermark" aria-hidden="true">
        V
      </div>


      {/* ==========================================
          MAIN HERO
      ========================================== */}

      <div className="container hero-grid">

        {/* HERO CONTENT */}

        <div
          className="hero-copy"
          key={`hero-content-${activeSlide}`}
        >

          <div className="eyebrow">
            <span className="eyebrow-line" />
            {slide.eyebrow}
          </div>


          <h1>
            {slide.title}
          </h1>


          <p className="hero-lead">
            {slide.description}
          </p>


          <div className="hero-actions">

            <Link
              to="/batches"
              className="button button-primary"
            >
              Explore courses
              <ArrowUpRight size={16} />
            </Link>


            <button
              type="button"
              className="button button-secondary"
              onClick={onOpenChat}
            >
              Talk to Vidya
              <MessageSquare size={16} />
            </button>

          </div>


          <div className="hero-note">
            <span className="status-dot" />
            Online & offline learning options available
          </div>

        </div>


        {/* ==========================================
            PROGRAM PANEL
        ========================================== */}

        <div className="program-panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                PREPARATION PROGRAMS
              </span>

              <h2>
                Choose your path
              </h2>
            </div>

            <span className="panel-index">
              {String(programs.length).padStart(2, '0')}
            </span>

          </div>


          <div className="program-list">

            {programs.map((program) => (
              <Link
                to="/batches"
                className="program-row"
                key={program.name}
              >

                <span className="program-number">
                  {program.code}
                </span>

                <span className="program-info">
                  <strong>
                    {program.name}
                  </strong>

                  <small>
                    {program.description}
                  </small>
                </span>

                <ArrowUpRight
                  className="program-arrow"
                  size={18}
                />

              </Link>
            ))}

          </div>


          <div className="panel-footer">

            <span>
              Find the right program for you
            </span>

            <ArrowUpRight size={14} />

          </div>


          {/* CAROUSEL CONTROLS */}

          <div className="hero-slider-controls">

            <div className="hero-slider-counter">

              <strong>
                {String(activeSlide + 1).padStart(2, '0')}
              </strong>

              <span>/</span>

              <span>
                {String(slides.length).padStart(2, '0')}
              </span>

            </div>


            <div className="hero-slider-buttons">

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
              >
                <ArrowLeft size={15} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ArrowRight size={15} />
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ==========================================
          BOTTOM FEATURES
      ========================================== */}

      <div className="container hero-bottom">

        <div className="hero-bottom-item">
          <span>01</span>
          <p>Focused curriculum</p>
        </div>

        <div className="hero-bottom-item">
          <span>02</span>
          <p>Structured learning</p>
        </div>

        <div className="hero-bottom-item">
          <span>03</span>
          <p>Guided preparation</p>
        </div>

        <div className="hero-bottom-item hero-bottom-counter">
          <span>
            {String(activeSlide + 1).padStart(2, '0')}
          </span>

          <p>
            Current presentation
          </p>
        </div>

      </div>

    </section>
  )
}