import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  /* =========================================================
     AUTOMATIC ROUTE CHANGE SCROLL TO TOP
  ========================================================= */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Instant reset on route transition
    })
  }, [pathname])

  /* =========================================================
     SCROLL VISIBILITY LISTENER
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={`scroll-to-top ${
        visible ? 'scroll-to-top-visible' : ''
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp size={18} strokeWidth={1.8} />
    </button>
  )
}