import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import logo from '../assets/logo1.jpeg'
import { useLanguage } from './LanguageContext'

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    key: 'home',
    path: '/',
  },
  {
    key: 'about',
    path: '/about',
  },
  {
    key: 'coaching',
    path: '/coaching',
  },
  {
    key: 'result',
    path: '/result',
  },
  {
    key: 'gallery',
    path: '/gallery',
  },
]

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const { t } = useLanguage()

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

  return (
    <header className="site-header">

      <div className="container navbar">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMobileMenu}
          aria-label="Vidyaprabodhini Academy"
        >
          <img
            src={logo}
            alt="Vidyaprabodhini Academy"
          />
        </Link>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          id="main-navigation"
          className={`desktop-nav ${
            mobileOpen ? 'is-open' : ''
          }`}
          aria-label="Main navigation"
        >

          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}


          {/* =================================================
              ADMISSION CTA
          ================================================= */}

          <NavLink
            to="/admission"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive
                ? 'nav-action active'
                : 'nav-action'
            }
          >
            {t('nav.enquire')}
          </NavLink>

        </nav>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() =>
            setMobileOpen((value) => !value)
          }
          aria-label={
            mobileOpen
              ? 'Close navigation'
              : 'Open navigation'
          }
          aria-expanded={mobileOpen}
          aria-controls="main-navigation"
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

      </div>

    </header>
  )
}