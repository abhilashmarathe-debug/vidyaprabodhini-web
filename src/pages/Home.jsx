import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Library,
  Play,
  RefreshCcw,
  TestTube2,
  Users,
  X,
  MapPin,
  Monitor,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import slide6 from '../assets/slide6.jpg'
import slide2 from '../assets/slide2.jpg'
import slide7 from '../assets/slide7.jpg'

import ravikumarJadhav from '../assets/testimonials/ravikumar_jadhav.jpg'
import annapurnaTalangade from '../assets/testimonials/annapurna_talangade.jpg'
import laxmanPujari from '../assets/testimonials/laxman_pujari.jpg'
import arunPatil from '../assets/testimonials/arun_patil.jpg'


/* =========================================================
   PROGRAMS
========================================================= */

const programs = [
  {
    number: '01',
    title: 'UPSC',
    description: 'Civil Services Examination',
  },
  {
    number: '02',
    title: 'MPSC',
    description: 'Maharashtra Public Service Commission',
  },
  {
    number: '03',
    title: 'Banking',
    description: 'Banking examinations',
  },
  {
    number: '04',
    title: 'Saralseva',
    description: 'Maharashtra government recruitment',
  },
]


/* =========================================================
   HERO SLIDES
========================================================= */

const heroSlides = [
  {
    image: slide6,
    eyebrow: 'VIDYAPROBODHINI ACADEMY',
    title: (
      <>
        Build your
        <br />
        preparation.
      </>
    ),
    description:
      'Preparation programs for competitive examinations, designed around structured learning, practice and consistent progress.',
  },
  {
    image: slide2,
    eyebrow: 'COMPETITIVE EXAMINATION',
    title: (
      <>
        Prepare with
        <br />
        purpose.
      </>
    ),
    description:
      'Focused guidance and a disciplined learning environment for serious competitive examination aspirants.',
  },
  {
    image: slide7,
    eyebrow: 'VIDYAPROBODHINI · KOLHAPUR',
    title: (
      <>
        Your goal.
        <br />
        Our guidance.
      </>
    ),
    description:
      'Build the knowledge, confidence and consistency required to move forward in your competitive examination journey.',
  },
]


/* =========================================================
   WHY US
========================================================= */

const whyUs = [
  {
    number: '01',
    icon: Users,
    title: 'Finest Faculties',
    description:
      'Learn from experienced and dedicated faculties who provide clear concepts, practical guidance and continuous academic support throughout your preparation.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Best Infrastructure',
    description:
      'A comfortable and focused learning environment with well-equipped classrooms, study spaces and facilities designed for serious aspirants.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Affordable Fees',
    description:
      'Quality competitive examination preparation at an affordable cost, making structured guidance accessible to students from different backgrounds.',
  },
  {
    number: '04',
    icon: BookOpen,
    title: '100% Syllabus Coverage',
    description:
      'A structured curriculum designed to cover the complete examination syllabus while maintaining focus on important concepts and examination requirements.',
  },
  {
    number: '05',
    icon: RefreshCcw,
    title: 'Recurring Revisions',
    description:
      'Regular revision cycles help students retain important concepts, strengthen weak areas and remain confident as the examination approaches.',
  },
  {
    number: '06',
    icon: TestTube2,
    title: 'Exhaustive Test Series',
    description:
      'Frequent practice tests help students understand their preparation level, improve accuracy and develop the time-management skills required in competitive examinations.',
  },
  {
    number: '07',
    icon: Library,
    title: 'Free Library',
    description:
      'Access a dedicated study environment and useful learning resources that allow students to maintain consistency beyond classroom sessions.',
  },
  {
    number: '08',
    icon: Users,
    title: 'Frequent Follow-ups',
    description:
      'Regular academic follow-ups help identify challenges, track preparation and keep students motivated and accountable throughout their journey.',
  },
]


/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    image: arunPatil,
    name: 'Arun Patil',
    position: 'Dy. Collector',
    achievement: 'Rank 21, Rajyaseva 2019',
    text:
      'कोल्हापूरसारख्या ठिकाणी इन्फ्रास्ट्रक्चर परिपूर्ण असलेला क्लास म्हणजे विद्या प्रबोधिनी होय. इथले प्रेरणादायी वातावरण माझ्या एकूणच अभ्यासास पोषक ठरले. परिपूर्ण इन्फ्रास्ट्रक्चर आणि योग्य मार्गदर्शन यांचा एकत्रित परिणाम म्हणजे अंतिम निकालातील स्थान होय. स्पर्धा परीक्षार्थींनी याचा अधिकाधिक उपयोग करून घ्यावा असेच मी म्हणेन.',
  },
  {
    image: laxmanPujari,
    name: 'Laxman Pujari',
    position: 'IBPS PO',
    achievement: '2021',
    text:
      'In 2020 & 2021 I could crack SBI Clerk, IBPS Clerk, IBPS PO and finally I have chosen to join as IBPS PO... In this whole process Vidya Prabodhini has been my guide, my mentor all the time. I was allowed to attend lectures, library, Online material, Tests, Video Sessions, Study Room for n number of times. All faculties were always ready to solve our doubts.',
  },
  {
    image: annapurnaTalangade,
    name: 'Annapurna Talangade',
    position: 'IBPS Clerk',
    achievement: '2021',
    text:
      "Vidya Prabodhini has played a major role in my achievement, to clear IBPS Clerk'21. With the help of numerous and continuous Practice Tests, Analysis & Coaching from expert faculties, I could achieve this success. Vidya Prabodhini and it's all the staff was always with me, whenever I missed my previous mains with few marks, to boost me and to motivate me again to study hard.",
  },
  {
    image: ravikumarJadhav,
    name: 'Ravikumar Jadhav',
    position: '',
    achievement: '',
    text:
      'Vidya Prabodhini is one of the best Institutes for all the UPSC, MPSC and Banking aspirants. We get not only training but also the best motivation from all the Professors. Test series are best, Good Library, Best Coaching Staff and Comfortable Study Rooms are also available here. Infrastructure is Outstanding. Mentorship is excellent by UPSC Head Rajkumar Patil Sir....',
  },
]


/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [announcementVisible, setAnnouncementVisible] = useState(true)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  /* =======================================================
     HERO AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])


  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    )
  }

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    )
  }


  const previousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const nextTestimonial = () => {
    setActiveTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }


  const currentSlide = heroSlides[activeSlide]


  return (
    <main className="home-page">

      {/* =====================================================
          IMPORTANT ANNOUNCEMENT
      ===================================================== */}

      {announcementVisible && (
        <div className="announcement-bar">

          <div className="container announcement-bar-inner">

            <div className="announcement-badge">
              <span className="announcement-dot" />
              NEW
            </div>

            <div className="announcement-label">
              Important Announcement
            </div>

            <div className="announcement-marquee">

              <div className="announcement-marquee-track">

                <a
                  href="https://forms.gle/ndWrAka6bPZrAX45A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="announcement-link"
                >
                  Hon. Chandrakantdada Patil Scholarship for
                  Civil Services Preparation 2025–26
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://forms.gle/ndWrAka6bPZrAX45A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="announcement-link"
                  aria-hidden="true"
                  tabIndex="-1"
                >
                  Hon. Chandrakantdada Patil Scholarship for
                  Civil Services Preparation 2025–26
                  <ArrowUpRight size={15} />
                </a>

              </div>

            </div>

            <button
              type="button"
              className="announcement-close"
              onClick={() => setAnnouncementVisible(false)}
              aria-label="Close announcement"
            >
              <X size={16} />
            </button>

          </div>

        </div>
      )}


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="home-hero-slider">

          {heroSlides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt=""
              className={
                index === activeSlide
                  ? 'hero-slide-image active'
                  : 'hero-slide-image'
              }
            />
          ))}

          <div className="home-hero-overlay" />

        </div>


        <div className="container home-hero-grid">

          <div
            className="home-hero-content"
            key={`hero-${activeSlide}`}
          >

            <div className="eyebrow">

              <span className="eyebrow-line" />

              {currentSlide.eyebrow}

            </div>

            <h1>
              {currentSlide.title}
            </h1>

            <p>
              {currentSlide.description}
            </p>

            <div className="home-hero-actions">

              <Link
                to="/coaching"
                className="button button-primary"
              >
                Explore batches
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/admission"
                className="button button-secondary"
              >
                Admission enquiry
              </Link>

            </div>

          </div>


          <div className="home-hero-controls">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} />
            </button>

            <span>
              {String(activeSlide + 1).padStart(2, '0')}
              {' / '}
              {String(heroSlides.length).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROGRAMS
      ===================================================== */}

      <section className="home-programs">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-label">
                PROGRAMS
              </span>

              <h2>
                Choose your examination.
              </h2>

            </div>

            <p>
              Explore preparation options based on your
              examination and preferred learning mode.
            </p>

          </div>


          <div className="program-grid">

            {programs.map((program) => (

              <Link
                to="/coaching"
                className="program-card"
                key={program.title}
              >

                <div className="program-card-top">

                  <span>
                    {program.number}
                  </span>

                  <ArrowUpRight size={17} />

                </div>

                <div className="program-card-content">

                  <h3>
                    {program.title}
                  </h3>

                  <p>
                    {program.description}
                  </p>

                </div>

                <div className="program-card-footer">
                  View batches
                  <span>→</span>
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY US
      ===================================================== */}

      <section className="home-why-us">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-label">
                WHY US
              </span>

              <h2>
                Everything you need
                <br />
                to prepare better.
              </h2>

            </div>

            <p>
              A focused preparation environment built around
              guidance, practice, revision and student support.
            </p>

          </div>


          <div className="why-us-grid">

            {whyUs.map((item) => {

              const Icon = item.icon

              return (

                <article
                  className="why-us-card"
                  key={item.number}
                >

                  <div className="why-us-card-inner">

                    {/* FRONT */}

                    <div className="why-us-card-front">

                      <div className="why-us-top">

                        <span>
                          {item.number}
                        </span>

                        <Icon size={20} />

                      </div>

                      <div className="why-us-front-content">

                        <h3>
                          {item.title}
                        </h3>

                        <span className="why-us-hover-hint">
                          Hover to explore
                        </span>

                      </div>

                    </div>


                    {/* BACK */}

                    <div className="why-us-card-back">

                      <span className="why-us-back-number">
                        {item.number}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </div>

                </article>

              )
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="home-approach">

        <div className="container home-approach-grid">

          <div className="home-approach-image">

            <img
              src={slide7}
              alt="Vidya Prabodhini students and faculty"
            />

            <div className="home-approach-image-tag">

              <span>
                2010
              </span>

              <small>
                Since
              </small>

            </div>

          </div>


          <div className="home-approach-content">

            <span className="section-label">
              THE VIDYAPROBODHINI APPROACH
            </span>

            <h2>
              Preparation built
              <br />
              around your goal.
            </h2>

            <p>
              Competitive examinations require more than
              information. They require consistency,
              structured practice and the right guidance
              at every stage.
            </p>


            <div className="approach-points">

              <div>
                <span>01</span>
                <strong>Focused curriculum</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Structured learning</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Guided preparation</strong>
              </div>

            </div>


            <Link
              to="/about"
              className="button button-primary"
            >
              Discover our approach
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          YOUTUBE
      ===================================================== */}

      <section className="home-youtube">

        <div className="container">

          <div className="youtube-header">

            <div>

              <span className="section-label">
                SUBSCRIBE US ON YOUTUBE
              </span>

              <h2>
                Free and regular
                <br />
                video boosters.
              </h2>

            </div>

            <a
              href="https://www.youtube.com/c/VidyaPrabodhiniKolhapur"
              target="_blank"
              rel="noopener noreferrer"
              className="button youtube-subscribe-button"
            >
              Subscribe
              <ArrowUpRight size={16} />
            </a>

          </div>


          <div className="youtube-grid">

            <div className="youtube-video">

              <iframe
                src="https://www.youtube.com/embed/TD5ZPNHyX_s"
                title="Vidya Prabodhini YouTube video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              <div className="youtube-play-badge">

                <Play
                  size={18}
                  fill="currentColor"
                />

              </div>

            </div>


            <div className="youtube-content">

              <span className="youtube-channel">
                VIDYA PRABODHINI : YOUTUBE CHANNEL
              </span>

              <h3>
                Vidya Prabodhini,
                <br />
                Kolhapur
              </h3>

              <p>
                A reliable and leading coaching institute
                guiding UPSC, MPSC and Banking aspirants
                since 2010.
              </p>

              <p>
                Situated in Kolhapur, Vidya Prabodhini
                offers an affordable alternative for serious
                civil services aspirants compared with the
                higher expenditure associated with metro
                cities such as Pune and Delhi.
              </p>

              <a
                href="https://www.youtube.com/c/VidyaPrabodhiniKolhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-channel-link"
              >
                Visit YouTube channel
                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="home-testimonials">

        <div className="container">

          <div className="testimonials-header">

            <div>

              <span className="section-label">
                STUDENT SUCCESS
              </span>

              <h2>
                Stories of
                <br />
                determination.
              </h2>

            </div>


            <div className="testimonials-header-right">

              <p>
                The journey of every aspirant is different.
                Here are a few voices representing the
                dedication and success of our students.
              </p>


              <div className="testimonials-controls">

                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="testimonial-arrow"
                >
                  <ArrowLeft size={18} />
                </button>


                <div className="testimonial-counter">

                  <strong>
                    {String(activeTestimonial + 1).padStart(2, '0')}
                  </strong>

                  <span>/</span>

                  <span>
                    {String(testimonials.length).padStart(2, '0')}
                  </span>

                </div>


                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="testimonial-arrow"
                >
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>


          <div className="testimonials-slider">

            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${activeTestimonial * 100}%)`,
              }}
            >

              {testimonials.map((testimonial) => (

                <div
                  className="testimonial-slide"
                  key={testimonial.name}
                >

                  <article className="testimonial-card">

                    <div className="testimonial-photo">

                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                      />

                    </div>


                    <div className="testimonial-content">

                      <div className="testimonial-mark">
                        “
                      </div>

                      <p>
                        {testimonial.text}
                      </p>


                      <div className="testimonial-person">

                        <strong>
                          {testimonial.name}
                        </strong>

                        {testimonial.position && (
                          <span>
                            {testimonial.position}
                          </span>
                        )}

                        {testimonial.achievement && (
                          <small>
                            {testimonial.achievement}
                          </small>
                        )}

                      </div>

                    </div>

                  </article>

                </div>

              ))}

            </div>

          </div>


          <div className="testimonial-dots">

            {testimonials.map((testimonial, index) => (

              <button
                key={testimonial.name}
                type="button"
                className={
                  index === activeTestimonial
                    ? 'testimonial-dot active'
                    : 'testimonial-dot'
                }
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="home-cta">

        <div className="container home-cta-inner">

          <div>

            <span className="section-label">
              START YOUR PREPARATION
            </span>

            <h2>
              Your goal deserves
              <br />
              the right preparation.
            </h2>

            <p>
              Explore our courses, understand the available
              batches and take the next step towards your
              competitive examination journey.
            </p>

          </div>


          <div className="home-cta-actions">

            <Link
              to="/coaching"
              className="button button-primary"
            >
              Explore batches
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/admission"
              className="button button-secondary"
            >
              Admission enquiry
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}